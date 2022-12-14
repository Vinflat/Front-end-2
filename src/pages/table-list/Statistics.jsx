import React from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import MenuItem from "@mui/material/MenuItem";
import { useBuildings } from "./hooks";
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

const Statistics = () => {
  const [building, setBuilding] = React.useState("Tòa nhà 1");
  const [flat, setFlat] = React.useState("Phòng 1");
  const [invoiceType, setInvoiceType] = React.useState("Tất cả");
  const [value, setValue] = React.useState(dayjs("2014-08-01"));

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
        <Typography variant="h6">Thống kê kinh doanh</Typography>
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
                label="Bắt đầu"
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={handleChangeMonth}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Kết thúc"
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <TextField
              id="outlined-select-invoice-type"
              select
              label="Loại phiếu thu"
              value={invoiceType}
              onChange={handleChangeInvoiceType}
            >
              {invoiceTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="outlined-select-invoice-type"
              select
              label="Loại phiếu chi"
              value={invoiceType}
              onChange={handleChangeInvoiceType}
            >
              {invoiceTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button
              color="success"
              //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
              onClick={handleExportData}
              variant="contained"
            >
              Xuất excel
            </Button>
          </Stack>
        </div>
      </Box>

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

export default Statistics;
