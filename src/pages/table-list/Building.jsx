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
  { field: "buildingId", headerName: "ID", width: 60 },
  { field: "buildingName", headerName: "First name", width: 130 },
  { field: "imageUrlUrl", headerName: "Image", width: 130 },
  { field: "description", headerName: "Description", width: 120 },
  {
    field: "totalFloor",
    headerName: "Floors",
    type: "number",
    width: 80,
  },
  {
    field: "totalRooms",
    headerName: "Rooms",
    type: "number",
    width: 80,
  },
  {
    field: "coordinateX",
    headerName: "X",
    type: "number",
    width: 80,
  },
  {
    field: "coordinateY",
    headerName: "Y",
    type: "number",
    width: 80,
  },
  {
    field: "status",
    headerName: "Status",
    width: 60,
  },
  // {
  //   field: "apartment",
  //   headerName: "Apartment",
  //   width: 100,
  // },
  {
    field: "flats",
    headerName: "Flats",
    width: 130,
  },
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
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
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
          <DialogTitle>Add building</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>Thêm tòa nhà.</DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="buildingId"
              label="Building Id"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="buildingName"
              label="Building Name"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="imageUrlUrl"
              label="Image Url"
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
              id="totalFloor"
              label="Total Floor"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="totalRooms"
              label="Total Room"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="status"
              label="status"
              type="text"
              fullWidth
              variant="outlined"
            />
            {/* <TextField
              autoFocus
              margin="dense"
              id="apartmentId"
              label="apartmentId"
              type="text"
              fullWidth
              variant="outlined"
            /> */}
            <div>
              <Button variant="outlined" onClick={handleClickOpen2}>
                Add Flat
              </Button>
              <Dialog open={open2} onClose={handleClose2}>
                <DialogTitle>Add Flat</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Thêm phòng trong căn hộ.
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
                    label="Building Id"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose2}>Cancel</Button>
                  <Button onClick={handleClose2}>Submit</Button>
                </DialogActions>
              </Dialog>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
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
