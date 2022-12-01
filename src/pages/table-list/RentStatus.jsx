import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useRenters } from "./hooks";
import { Box, Button } from "@mui/material";

export default function SettingCollect() {
  const renters = useRenters();
  return (
    <Box m={2} pt={2}>
      <div style={{ height: 400, width: "100%" }}>
        <div>Báo cáo tổng hợp hiện trạng thuê</div>
      </div>
    </Box>
  );
}
