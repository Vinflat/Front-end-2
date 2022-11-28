import React from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useBuildings } from "./hooks";
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

  return (
    <div>
      <Box m={2} pt={2}>
        <Typography variant="h6">Cài đặt loại phiếu thu</Typography>
      </Box>

      <Box m={2} pt={2}>
        <Stack
          alignItems="flex-end"
          justifyContent="flex-end"
          direction="row"
        >
          
          <Button
            color="primary"
            // onClick={handleExportData}
            variant="contained"
          >
            Thêm loại phiếu thu
          </Button>
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

export default SettingCollect;
