import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
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
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
// import { useBuildings } from "./hooks";
import { useContracts, useRenters } from "./hooks";
import { useEffect } from "react";
import { updateRenter } from "../../api/Renters";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Contract = () => {
  // const { data, addRenter, removeRenter } = useRenters();
  const [data, createContract] = useContracts();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    setTableData(data ? data : []);
  }, [data]);

  const handleCreateNewRow = (values) => {
    console.log(values);
    createContract(values);
    // tableData.push(values);
    // setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length && values) {
      updateRenter(values);
      tableData[row.index] = values;
      setTableData([...tableData]);
      exitEditingMode();
    }
  };

  const handleDeleteRow = useCallback(
    (row) => {
      //ERROR IN IF STATEMENT

      // if (
      //   !window.confirm(`Are you sure you want to delete ${row.getValue("fullName")}`
      //   )
      // ) {
      //   return;
      // }
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === "email"
              ? validateEmail(event.target.value)
              : cell.column.id === "age"
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "ContractId",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 100,
      },
      {
        accessorKey: "ContractName",
        header: "ContractName",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "DateSigned",
        header: "DateSigned",
        size: 40,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        type: "date",
      },
      {
        accessorKey: "StartDate",
        header: "StartDate",
        size: 40,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        type: "date",
      },
      {
        accessorKey: "Description",
        header: "Description",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "EndDate",
        header: "EndDate",
        size: 50,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        type: "date",
      },
      {
        accessorKey: "LastUpdated",
        header: "LastUpdated",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        type: "date",
      },
      {
        accessorKey: "ContractStatus",
        header: "ContractStatus",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "ImageUrl",
        header: "ImageUrl",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "Price",
        header: "Price",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "number",
        }),
      },
      // {
      //   accessorKey: 'state',
      //   header: 'State',
      //   muiTableBodyCellEditTextFieldProps: {
      //     select: true, //change to select for a dropdown
      //     children: states.map((state) => (
      //       <MenuItem key={state} value={state}>
      //         {state}
      //       </MenuItem>
      //     )),
      //   },
      // },
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <>
      <Box m={2} pt={2}>
        <Typography variant="h6">Danh sách hợp đồng</Typography>
      </Box>
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
                <IconButton onClick={() => table.setEditingRow(row)}>
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
                onClick={() => setCreateModalOpen(true)}
                variant="contained"
              >
                Thêm Hợp Đồng
              </Button>
            </div>
          )}
        />
      </Box>
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      if (column.type == "date") {
        acc[column.accessorKey ?? ""] = new Date();
      } else {
        acc[column.accessorKey ?? ""] = "";
      }
      return acc;
    }, {})
  );

  const handleSubmit = () => {
    console.log(values);
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <AppBar position="static">
        <DialogTitle textAlign="center">Thêm hợp đồng</DialogTitle>
      </AppBar>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            {columns.map((column) => (
              <>
                {column.accessorKey !== "ContractId" &&
                  column.type !== "date" && (
                    <TextField
                      key={column.accessorKey}
                      label={column.header}
                      name={column.accessorKey}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  )}
              </>
            ))}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                inputFormat="DD/MM/YYYY"
                value={values.DateSigned || new Date()}
                label="DateSigned"
                onChange={(e) => setValues({ ...values, DateSigned: e })}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                inputFormat="DD/MM/YYYY"
                value={values["StartDate"] || new Date()}
                label="StartDate"
                onChange={(e) =>
                  setValues({
                    ...values,
                    StartDate: e,
                  })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                inputFormat="DD/MM/YYYY"
                value={values["EndDate"] || new Date()}
                label="EndDate"
                onChange={(e) =>
                  setValues({
                    ...values,
                    EndDate: e,
                  })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                inputFormat="DD/MM/YYYY"
                value={values["LastUpdated"] || new Date()}
                label="LastUpdated"
                onChange={(e) =>
                  setValues({
                    ...values,
                    LastUpdated: e,
                  })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Hủy</Button>
        <Button color="primary" onClick={handleSubmit} variant="contained">
          Lưu
        </Button>
      </DialogActions>
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

export default Contract;
