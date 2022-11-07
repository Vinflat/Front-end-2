import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
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

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Contract() {
  const contracts = useContracts();
  return (
    <div style={{ height: 400, width: "100%" }}>
      <div>Danh sách hợp đồng</div>
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
