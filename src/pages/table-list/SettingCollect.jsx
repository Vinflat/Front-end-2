import React from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useBuildings } from "./hooks";
import TextField from "@mui/material/TextField";
const data = useBuildings;

const columns = [
  {
    accessorKey: "id",
    header: "ID",
    size: 40,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    size: 120,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    size: 120,
  },
  {
    accessorKey: "company",
    header: "Company",
    size: 300,
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "country",
    header: "Country",
    size: 220,
  },
];

const SettingCollect = () => {
  const [openAddIncome, setOpenAddIncome] = React.useState(false);
  const handleClickOpenAddIncome = () => {
    setOpenAddIncome(true);
  };
  const handleCloseAddIncome = () => {
    setOpenAddIncome(false);
  };

  return (
    <div>
      <Box m={2} pt={2}>
        <Typography variant="h6">Cài đặt loại phiếu thu</Typography>
      </Box>

      <Box m={2} pt={2}>
        <Stack alignItems="flex-end" justifyContent="flex-end" direction="row">
          <Button
            color="primary"
            onClick={handleClickOpenAddIncome}
            variant="contained"
          >
            Thêm loại phiếu thu
          </Button>
        </Stack>
      </Box>

      <Dialog open={openAddIncome} onClose={handleCloseAddIncome}>
        <AppBar position="static">
          <DialogTitle>Thêm loại phiếu thu</DialogTitle>
        </AppBar>
        <DialogContent>
          {/* <DialogContentText></DialogContentText> */}
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Tên"
                defaultValue="..."
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddIncome}>Hủy</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleCloseAddIncome}
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>

      <Box m={2} pt={2}>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableRowSelection
          positionToolbarAlertBanner="bottom"
        />
      </Box>
    </div>
  );
};

export default SettingCollect;
