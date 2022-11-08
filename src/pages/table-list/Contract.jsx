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

import { useContracts } from "./hooks";

const columns = [
  { field: "contractId", headerName: "ID", width: 70 },
  {
    field: "dateSigned",
    headerName: "Date Signed",
    type: "number",
    width: 130,
  },
  { field: "startDate", headerName: "Start Date", type: "number", width: 130 },
  {
    field: "endDate",
    headerName: "End Date",
    type: "number",
    width: 130,
  },
  {
    field: "lastUpdated",
    headerName: "Last Updated",
    type: "number",
    width: 130,
  },
  {
    field: "contractStatus",
    headerName: "Status",
    width: 70,
  },
  {
    field: "imageUrl",
    headerName: "ImageUrl",
    width: 90,
  },
  {
    field: "image",
    headerName: "Image",
    width: 70,
  },
  {
    field: "flatId",
    headerName: "Flat Id  ",
    width: 70,
  },
];

export default function Contract() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
;

  const handleClose = () => {
    setOpen(false);
  };

  const contracts = useContracts();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add contract
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add contract</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>Thêm hợp đồng.</DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="contractId"
              label="Id"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="dateSigned"
              label="Date Signed"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="startDate"
              label="Start Date"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="endDate"
              label="End Date"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="lastUpdated"
              label="Last Updated"
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
              id="imageUrl"
              label="Image Url"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="image"
              label="Image"
              type="text"
              fullWidth
              variant="outlined"
            />

            <TextField
              autoFocus
              margin="dense"
              id="contractStatus"
              label="Contract Status"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="price"
              label="Price"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="renterId"
              label="Renter Id"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="flatId"
              label="Flat Id"
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      <DataGrid
        rows={contracts}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
