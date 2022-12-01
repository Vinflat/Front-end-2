import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Input,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Delete, Edit } from "@mui/icons-material";
import { useAreas, useBuildings } from "./hooks";
import { useEffect } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Map from "../../components/openstreetmap/Map";

const Building = () => {
  const [buildings, createBuilding, updateBuilding, error] = useBuildings();
  const areasData = useAreas();
  const [selected, setSelected] = useState(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    setTableData(buildings);
  }, [buildings]);

  const handleSubmitMain = (value) => {
    if (selected) {
      // here update
      console.log(value);
      updateBuilding({
        BuildingId: value.BuildingId,
        buildingName: value.BuildingName,
        imageUrl: value.ImageUrl,
        description: value.Description,
        coordinateX: Number.parseInt(value.CoordinateX),
        coordinateY: Number.parseInt(value.CoordinateY),
        status: value.Status,
        areaId: value.AreaId,
      });
    } else {
      createBuilding({
        buildingName: value.BuildingName,
        imageUrl: value.ImageUrl,
        description: value.Description,
        coordinateX: Number.parseInt(value.CoordinateX),
        coordinateY: Number.parseInt(value.CoordinateY),
        status: value.Status,
        areaId: value.AreaId,
      });
      console.log(
        JSON.stringify({
          buildingId: "1",
          buildingName: value.BuildingName,
          imageUrl: value.ImageUrl,
          description: value.Description,
          totalRooms: Number.parseInt(value.TotalRooms),
          totalFloor: Number.parseInt(value.TotalFloor),
          coordinateX: value.CoordinateX,
          coordinateY: value.CoordinateY,
          status: value.Status,
          areaId: value.AreaId,
        })
      );
    }
  };
  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !window.confirm(
          `Are you sure you want to delete ${row.getValue("buildingName")}`
        )
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "BuildingId",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 100,
      },
      {
        accessorKey: "BuildingName",
        header: "Tên tòa nhà",
        size: 140,
      },
      {
        accessorKey: "ImageUrlUrl",
        header: "Ảnh",
        size: 140,
      },
      {
        accessorKey: "Description",
        header: "Chi tiết",
      },
      // {
      //   accessorKey: "TotalRooms",
      //   header: "Floors",
      //   size: 80,
      // },
      // {
      //   accessorKey: "TotalFloor",
      //   header: "Rooms",
      //   size: 80,
      // },
      {
        accessorKey: "CoordinateX",
        header: "coordinateX",
        size: 80,
      },
      {
        accessorKey: "CoordinateY",
        header: "coordinateY",
        size: 80,
      },
      {
        accessorKey: "Status",
        header: "Trạng thái",
        size: 80,
      },
      {
        accessorKey: "AreaId",
        header: "Vị trí",
        size: 80,
      },
    ],
    []
  );

  return (
    <>
      <Box m={2} pt={2}>
        <MaterialReactTable
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 120,
            },
          }}
          columns={columns}
          data={tableData}
          editingMode="modal" //default
          enableColumnOrdering
          enableEditing
          onEditingRowSave={handleSaveRowEdits}
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton
                  onClick={() => {
                    setSelected(row.original);
                    setCreateModalOpen(true);
                  }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          renderTopToolbarCustomActions={() => (
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                width: "100%",
              }}
            >
              <Button
                color="primary"
                onClick={() => {
                  setSelected(null);
                  setCreateModalOpen(true);
                }}
                variant="contained"
              >
                Thêm tòa nhà
              </Button>
            </div>
          )}
        />
      </Box>
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleSubmitMain}
        selected={selected}
        areasData={areasData}
      />
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({
  open,
  columns,
  onClose,
  onSubmit,
  selected,
  areasData,
}) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );

  useEffect(() => {
    setValues({ ...selected });
  }, [selected]);

  const handleChange = (e) => {
    if (e.name === "location") {
      setValues({
        ...values,
        CoordinateX: e.value.lat,
        CoordinateY: e.value.lng,
      });
    } else {
      let targetValue = e.target.value;
      if (e.target.name == "ImageUrl") {
        targetValue = e.target.files[0];
      }
      setValues({ ...values, [e.target.name]: targetValue });
    }
  };
  const handleSubmit = async () => {
    if (typeof values.ImageUrl == "object") {
      const storageRef = ref(
        storage,
        `images/building/${values.ImageUrl.name}-${new Date().toISOString()}`
      );
      const uploadTask = uploadBytesResumable(storageRef, values.ImageUrl);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            values.ImageUrl = downloadURL;
            onSubmit(values);
          });
        }
      );
    } else {
      onSubmit(values);
    }

    //put your validation logic here
    onClose();
  };
  return (
    <Dialog open={open} maxWidth="lg" fullWidth={true}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(values);
        }}
      >
        <AppBar position="static">
          <DialogTitle textAlign="center">
            {!selected ? "Thêm tòa nhà" : "Chỉnh sửa tòa nhà"}
          </DialogTitle>
        </AppBar>
        <DialogContent>
          <Stack spacing={3} sx={{ my: 2 }}>
            <Stack
              direction={{ xs: "row" }}
              spacing={{ xs: 2 }}
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={
                  typeof values.ImageUrl == "string"
                    ? values.ImageUrl
                    : `${
                        values.ImageUrl
                          ? URL.createObjectURL(values.ImageUrl)
                          : "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
                      }`
                }
                style={{ maxWidth: "50%" }}
              />
            </Stack>
            <Stack direction={{ xs: "row" }} spacing={{ xs: 2 }}>
              <TextField
                label="BuildingName"
                name="BuildingName"
                onChange={handleChange}
                value={values.BuildingName}
                fullWidth
                required
              />
            </Stack>
            <Stack
              direction={{ xs: "row" }}
              spacing={{ xs: 2 }}
              justifyContent="center"
              alignItems="center"
            >
              <div style={{ width: "70%", height: "70%" }}>
                <Map
                  setPos={handleChange}
                  defaultValue={
                    selected
                      ? {
                          lat: selected?.CoordinateX,
                          lng: selected?.CoordinateY,
                        }
                      : {
                          lat: 10.868276182506731,
                          lng: 106.63713368682674,
                        }
                  }
                />
              </div>
            </Stack>
            <Stack direction={{ xs: "row" }} spacing={{ xs: 2 }}>
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                fullWidth
                label="ImageUrl"
                name="ImageUrl"
                onChange={handleChange}
              />
              <TextField
                label="Description"
                name="Description"
                onChange={handleChange}
                value={values.Description}
                fullWidth
                required
              />
            </Stack>
            <Stack direction={{ xs: "row" }} spacing={{ xs: 2 }}>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Status"
                  name="Status"
                  onChange={handleChange}
                  value={values.Status}
                >
                  <MenuItem value={false}>False</MenuItem>
                  <MenuItem value={true}>True</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">AreaId</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="AreaId"
                  name="AreaId"
                  onChange={handleChange}
                  value={values.AreaId}
                >
                  {areasData.map((area, idx) => (
                    <MenuItem value={area.AreaId} key={idx}>
                      {area?.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: "1.25rem" }}>
          <Button onClick={onClose}>Hủy</Button>
          <Button color="primary" type="submit" variant="contained">
            Lưu
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Building;
