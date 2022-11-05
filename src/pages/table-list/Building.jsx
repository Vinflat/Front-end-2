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

import { useBuildings } from "./hooks";

const columns = [
  { field: "buildingId", headerName: "ID", width: 70 },
  { field: "buildingName", headerName: "First name", width: 130 },
  { field: "imageUrlUrl", headerName: "Image", width: 130 },
  { field: "description", headerName: "Description", width: 130 },
  {
    field: "totalFloor",
    headerName: "Floors",
    type: "number",
    width: 90,
  },
  {
    field: "totalRooms",
    headerName: "Rooms",
    type: "number",
    width: 90,
  },
  {
    field: "coordinateX",
    headerName: "X",
    type: "number",
    width: 90,
  },
  {
    field: "coordinateY",
    headerName: "Y",
    type: "number",
    width: 90,
  },
  {
    field: "status",
    headerName: "Status",
    width: 90,
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


export default function Building() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buildings = useBuildings();

  console.log("Building.jsx");
  console.log("getBuildings()", buildings);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add building
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
      <DataGrid
        rows={buildings}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

