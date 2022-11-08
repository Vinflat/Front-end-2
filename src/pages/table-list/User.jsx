import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
//dialog button import
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useUsers } from "./hooks";

const currencies = [
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
  {
    value: "7",
    label: "Cleaner",
  },
  {
    value: "8",
    label: "Techinician",
  },
];

const columns = [
  { field: "accountId", headerName: "ID", width: 60 },
  { field: "userName", headerName: "User name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "status", headerName: "Status", width: 60 },
  { field: "roleId", headerName: "Role ID", width: 60 },
  // { field: "firstName", headerName: "First name", width: 130 },
  // { field: "lastName", headerName: "Last name", width: 130 },
  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 90,
  // },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
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

export default function User() {
  const [currency, setCurrency] = React.useState("EUR");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const users = useUsers();
  console.log("users", users);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add user account
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add new account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Create new accounts for users
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
            />

            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="Password"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone Number"
              type="number"
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

            {/* use to select the role */}
            <TextField
              id="outlined-select-currency"
              select
              label="Role"
              value={currency}
              onChange={handleChange}
              helperText="Please select the role of account"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
