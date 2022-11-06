import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
//dialog button import
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useFlats } from "./hooks";
const flatType = [
  {
    value: "1",
    label: "Admin",
  },
  {
    value: "2",
    label: "Super Admin",
  },
  {
    value: "3",
    label: "Moderator",
  },
  {
    value: "4",
    label: "Employee",
  },
  {
    value: "5",
    label: "Tester",
  },
];
const Building = [
  {
    value: "1",
    label: "Admin",
  },
  {
    value: "2",
    label: "Super Admin",
  },
  {
    value: "3",
    label: "Moderator",
  },
  {
    value: "4",
    label: "Employee",
  },
  {
    value: "5",
    label: "Tester",
  },
];
const columns = [
  { field: "flatId", headerName: "ID", width: 60 },
  { field: "name", headerName: "Name", width: 130 },

  { field: "description", headerName: "Description", width: 120 },
  {
    field: "status",
    headerName: "Status",
    type: "number",
    width: 80,
  },
  {
    field: "flatType",
    headerName: "flatType",
    type: "number",
    width: 80,
  },
  {
    field: "buildingId",
    headerName: "buildingId",
    type: "number",
    width: 80,
  }
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];


export default function Flat() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const flats = useFlats();

  console.log("Flat.jsx");
  console.log("getFLats()", flats);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Flat
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Flat</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Thêm các FLat trong Buidling - Tòa nhà
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="flatId"
              label="Flat Id"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Flat Name"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="status"
              label="Status"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="flatTypeId"
              label="Flat Type"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="buildingId"
              label="Building"
              type="text"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      <DataGrid
        rows={flats}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

