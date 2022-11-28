import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useRenters } from "./hooks";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import PublishIcon from "@mui/icons-material/Publish";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";
import { CircularProgressbar } from "react-circular-progressbar";
import Divider from "@mui/material/Divider";

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

const contracts = [
  {
    value: "Hợp đồng 1",
    label: "Hợp đồng 1",
  },
  {
    value: "Hợp đồng 2",
    label: "Hợp đồng 2",
  },
  {
    value: "Hợp đồng 3",
    label: "Hợp đồng 3",
  },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function ElectrictandWater() {
  const renters = useRenters();
  const [building, setBuilding] = React.useState("Tòa nhà 1");
  const [flat, setFlat] = React.useState("Phòng 1");
  const [contract, setContract] = React.useState("Hợp đồng 1");
  const [value, setValue] = React.useState(dayjs("2014-08"));

  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };

  const handleChangeMonth = (newValue) => {
    setValue(newValue);
  };

  const handleChangeBuilding = (event) => {
    setBuilding(event.target.value);
  };

  const handleChangeFlat = (event) => {
    setFlat(event.target.value);
  };

  const handleChangeContract = (event) => {
    setContract(event.target.value);
  };

  return (
    <div style={{ width: "100%" }}>
      <Box m={2} pt={2}>
        <Typography variant="h6">Danh sách chốt điện nước</Typography>
      </Box>
      {/* 3 button */}
      <Box m={2} pt={2}>
        <Stack alignItems="flex-end" justifyContent="flex-end" spacing={2} direction="row">
          <Button
            variant="contained"
            color="error"
            startIcon={<DownloadIcon />}
          >
            Tải file mẫu
          </Button>
          <Button
            variant="contained"
            component="label"
            color="success"
            startIcon={<PublishIcon />}
          >
            Nhập Excel
            <input hidden accept=".xlsx, .xls, .csv" multiple type="file" />
          </Button>
          <Button component="label" variant="contained" color="success">
            Xuất Excel
          </Button>
        </Stack>
      </Box>
      {/* setting dien nuoc form */}
      <Box m={2} pt={2}>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "primary.main",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="body1" color="common.white">
              Thêm điện nước
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    required
                    label="Chọn tháng (*)"
                    inputFormat="MM/YYYY"
                    value={value}
                    onChange={handleChangeMonth}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <TextField
                  id="outlined-select-contract"
                  select
                  label="Chọn hợp đồng"
                  value={contract}
                  onChange={handleChangeContract}
                  helperText="Vui lòng chọn hợp đồng."
                >
                  {contracts.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    required
                    label="Ngày chốt (*)"
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleChangeDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div>
                <TextField
                  required
                  id="filled-helperText"
                  label="Số điện đầu"
                  defaultValue="1"
                  helperText="Vui lòng nhập số điện đầu"
                  variant="filled"
                />
                <TextField
                  required
                  id="filled-helperText"
                  label="Số điện cuối"
                  defaultValue="0"
                  helperText="Vui lòng nhập số điện cuối"
                  variant="filled"
                />
                <TextField
                  required
                  id="filled-helperText"
                  label="Số nước đầu"
                  defaultValue="1"
                  helperText="Vui lòng nhập số nước đầu"
                  variant="filled"
                />
                <TextField
                  required
                  id="filled-helperText"
                  label="Số nước cuối"
                  defaultValue="0"
                  helperText="Vui lòng nhập số nước cuối"
                  variant="filled"
                />
                <Button variant="contained">Hoàn thành</Button>
              </div>
              <div>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" component="label">
                    Chọn ảnh
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                  <Button variant="contained" component="label">
                    Chọn ảnh
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                  <Button variant="contained" component="label">
                    Chọn ảnh
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                  <Button variant="contained" component="label">
                    Chọn ảnh
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </Stack>
              </div>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Divider />
      <Box m={2} pt={2}>
        <Stack spacing={20} direction="row">
          <div style={{ width: 120, height: 120 }}>
            <CircularProgressbar value={100} text={"0"} strokeWidth={5} />
            <h7>Tổng số điện</h7>
          </div>
          <div style={{ width: 120, height: 120 }}>
            <CircularProgressbar value={100} text={"0"} strokeWidth={5} />
            <h7>Tổng số nước</h7>
          </div>
          <div style={{ width: 120, height: 120 }}>
            <CircularProgressbar value={70} text={"0"} strokeWidth={5} />
            <h7>Tổng thu điện</h7>
          </div>
          <div style={{ width: 120, height: 120 }}>
            <CircularProgressbar value={70} text={"0"} strokeWidth={5} />
            <h7>Tổng thu nước</h7>
          </div>
        </Stack>
      </Box>
      <Divider />
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
                inputFormat="MM/YYYY"
                value={value}
                onChange={handleChangeMonth}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Ngày kết thúc"
                inputFormat="MM/YYYY"
                value={value}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Stack>
        </div>
      </Box>
      <Box m={2} pt={2}>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
      </Box>
    </div>
  );
}
