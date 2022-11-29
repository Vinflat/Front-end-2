import React from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import MenuItem from "@mui/material/MenuItem";
import { useBuildings } from "./hooks";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const data = useBuildings;

const buildings = [
  {
    value: "Tòa nhà 1",
    label: "Tòa nhà 1",
  },
  {
    value: "Tòa nhà 2",
    label: "Tòa nhà 2",
  },
  {
    value: "Tòa nhà 3",
    label: "Tòa nhà 3",
  },
];
const flats = [
  {
    value: "Phòng 1",
    label: "Phòng 1",
  },
  {
    value: "Phòng 2",
    label: "Phòng 2",
  },
  {
    value: "Phòng 3",
    label: "Phòng 3",
  },
];
const invoiceTypes = [
  {
    value: "Tất cả",
    label: "Tất cả",
  },
  {
    value: "Phiếu thu",
    label: "Phiếu thu",
  },
  {
    value: "Phiếu chi",
    label: "Phiếu chi",
  },
];

const invoiceNames = [
  {
    value: "Tiền trọ",
    label: "Tiền trọ",
  },
  {
    value: "Tiền điện",
    label: "Tiền điện",
  },
  {
    value: "Tiền nước",
    label: "Tiền nước",
  },
  {
    value: "Tiền cọc",
    label: "Tiền cọc",
  },
];

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

const csvOptions = {
  fieldSeparator: ",",
  quoteStrings: '"',
  decimalSeparator: ".",
  showLabels: true,
  useBom: true,
  useKeysAsHeaders: false,
  headers: columns.map((c) => c.header),
};

const csvExporter = new ExportToCsv(csvOptions);

const Income = () => {
  const [building, setBuilding] = React.useState("Tòa nhà 1");
  const [flat, setFlat] = React.useState("Phòng 1");
  const [invoiceType, setInvoiceType] = React.useState("Tất cả");
  const [invoiceName, setInvoiceName] = React.useState("Tiền trọ");
  const [value, setValue] = React.useState(dayjs("2014-08-01"));

  const [openCreateIncome, setOpenCreateIncome] = React.useState(false);
  const handleClickOpenCreateIncome = () => {
    setOpenCreateIncome(true);
  };
  const handleCloseCreateIncome = () => {
    setOpenCreateIncome(false);
  };

  const handleChangeInvoiceName = (event) => {
    setInvoiceName(event.target.value);
  };

  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };

  const handleChangeBuilding = (event) => {
    setBuilding(event.target.value);
  };

  const handleChangeFlat = (event) => {
    setFlat(event.target.value);
  };

  const handleChangeInvoiceType = (event) => {
    setInvoiceType(event.target.value);
  };

  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };

  const handleChangeMonth = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box m={2} pt={2}>
        <Typography variant="h6">Danh sách phiếu thu</Typography>
      </Box>

      <Box m={2} pt={2}>
        <div>
          <Stack spacing={2} direction="row">
            <TextField
              id="outlined-select-building"
              select
              label="Chọn tòa nhà"
              value={building}
              onChange={handleChangeBuilding}
            >
              {buildings.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-flat"
              select
              label="Chọn phòng"
              value={flat}
              onChange={handleChangeFlat}
            >
              {flats.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Ngày bắt đầu"
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={handleChangeMonth}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Ngày kết thúc"
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <TextField
              id="outlined-select-invoice-type"
              select
              label="Loại chứng từ"
              value={invoiceType}
              onChange={handleChangeInvoiceType}
            >
              {invoiceTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Stack
              alignItems="flex-end"
              justifyContent="flex-end"
              spacing={2}
              direction="row"
            >
              <Button
                color="success"
                //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                onClick={handleExportData}
                variant="contained"
              >
                Xuất excel
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={handleClickOpenCreateIncome}
              >
                Thêm phiếu thu
              </Button>
            </Stack>
          </Stack>
        </div>
      </Box>

      <Dialog open={openCreateIncome} onClose={handleCloseCreateIncome}>
        <AppBar position="static">
          <DialogTitle>Lập phiếu thu</DialogTitle>
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
                id="outlined-select-building"
                select
                required
                label="Chọn tòa nhà"
                value={building}
                onChange={handleChangeBuilding}
                helperText="Vui lòng chọn tòa nhà của bạn."
              >
                {buildings.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-flat"
                select
                required
                label="Chọn phòng"
                value={flat}
                onChange={handleChangeFlat}
                helperText="Vui lòng chọn phòng."
              >
                {flats.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                id="outlined-required"
                label="Lý do thu"
                defaultValue="..."
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  required
                  label="Ngày thu (*)"
                  inputFormat="DD/MM/YYYY"
                  value={value}
                  onChange={handleChangeDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <TextField
                required
                id="outlined-required"
                label="Số tiền"
                defaultValue="0"
              />
              <TextField
                required
                id="outlined-required"
                label="Người thu"
                defaultValue="..."
              />
              <TextField
                required
                id="outlined-required"
                label="Người nộp tiền"
                defaultValue="..."
              />

              <TextField
                required
                id="outlined-required"
                label="Hình thức thu"
                defaultValue="Tiền mặt/ Chuyển khoản"
              />
              <TextField
                id="outlined-select-invoice-name"
                select
                label="Loại phiếu thu"
                value={invoiceName}
                onChange={handleChangeInvoiceName}
              >
                {invoiceNames.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                id="outlined-required"
                label="Ghi chú"
                defaultValue="..."
              />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Button variant="outlined" component="label">
                  Đính kèm file
                  <input hidden multiple type="file" />
                </Button>
              </Stack>
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCreateIncome}>Hủy</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleCloseCreateIncome}
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

export default Income;
