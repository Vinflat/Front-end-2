import React from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PublishIcon from "@mui/icons-material/Publish";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { CircularProgressbar } from "react-circular-progressbar";
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

const ElectrictandWater = () => {
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
    <div>
      <Box m={2} pt={2}>
        <Typography variant="h6">Danh sách chốt điện nước</Typography>
      </Box>

      {/* 3 button */}
      <Box m={2} pt={2}>
        <Stack
          alignItems="flex-end"
          justifyContent="flex-end"
          spacing={2}
          direction="row"
        >
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

      <Box m={2} pt={2}>
        <Stack
          spacing={20}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <div style={{ width: 120, height: 120 }}>
            {/* <CircularProgressbar value={100} text={"0"} strokeWidth={5} /> */}
            <h7>Tổng số điện</h7>
          </div>
          <div style={{ width: 120, height: 120 }}>
            {/* <CircularProgressbar value={100} text={"0"} strokeWidth={5} /> */}
            <h7>Tổng số nước</h7>
          </div>
          <div style={{ width: 120, height: 120 }}>
            {/* <CircularProgressbar value={70} text={"0"} strokeWidth={5} /> */}
            <h7>Tổng thu điện</h7>
          </div>
          <div style={{ width: 120, height: 120 }}>
            {/* <CircularProgressbar value={70} text={"0"} strokeWidth={5} /> */}
            <h7>Tổng thu nước</h7>
          </div>
        </Stack>
      </Box>

      <Box m={2} pt={2}>
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
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

export default ElectrictandWater;
