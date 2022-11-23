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
import { Delete, Edit } from "@mui/icons-material";
import { useAreas, useBuildings } from "./hooks";
import { useEffect } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// const data = useBuildings();
const Building = () => {
  const [buildings, createBuilding, error] = useBuildings();
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
    } else {
      createBuilding(
        JSON.stringify({
          BuildingId: Number.parseInt(value.BuildingId),
          BuildingName: value.BuildingName,
          ImageUrl: value.ImageUrl,
          Description: value.Description,
          TotalRooms: Number.parseInt(value.TotalRooms),
          TotalFloor: Number.parseInt(value.TotalFloor),
          CoordinateX: Number.parseInt(value.CoordinateX),
          CoordinateY: Number.parseInt(value.CoordinateY),
          Status: value.Status,
          AreaId: value.AreaId,
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
        header: "Name",
        size: 140,
      },
      {
        accessorKey: "ImageUrlUrl",
        header: "Image",
        size: 140,
      },
      {
        accessorKey: "Description",
        header: "Description",
      },
      {
        accessorKey: "TotalRooms",
        header: "Floors",
        size: 80,
      },
      {
        accessorKey: "TotalFloor",
        header: "Rooms",
        size: 80,
      },
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
        header: "Status",
        size: 80,
      },
      {
        accessorKey: "AreaId",
        header: "areaId",
        size: 80,
      },
    ],
    []
  );

  return (
    <>
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
                  console.log(row.original);
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
        )}
      />
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
    console.log(e);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
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
        <DialogTitle textAlign="center">
          {!selected ? "Thêm tòa nhà" : "Chỉnh sửa tòa nhà"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ my: 2 }}>
            <Stack direction={{ xs: "row" }} spacing={{ xs: 2 }}>
              <TextField
                label="BuildingId"
                name="BuildingId"
                onChange={handleChange}
                value={values.BuildingId}
                fullWidth
                required
                type="number"
              />
              <TextField
                label="BuildingName"
                name="BuildingName"
                onChange={handleChange}
                value={values.BuildingName}
                fullWidth
                required
              />
            </Stack>
            <Stack direction={{ xs: "row" }} spacing={{ xs: 2 }}>
              <TextField
                label="TotalFloor"
                name="TotalFloor"
                onChange={handleChange}
                value={values.TotalFloor}
                type="number"
                fullWidth
                required
              />
              <TextField
                fullWidth
                label="TotalRooms"
                name="TotalRooms"
                onChange={handleChange}
                value={values.TotalRooms}
                type="number"
                required
              />
            </Stack>
            <Stack direction={{ xs: "row" }} spacing={{ xs: 2 }}>
              <TextField
                label="CoordinateX"
                name="CoordinateX"
                onChange={handleChange}
                value={values.CoordinateX}
                type="number"
                fullWidth
                required
              />
              <TextField
                label="CoordinateY"
                name="CoordinateY"
                onChange={handleChange}
                value={values.CoordinateY}
                type="number"
                fullWidth
                required
              />
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
                value={values.ImageUrl}
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

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default Building;
