import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useRenters } from './hooks';

const columns = [
  { field: 'renterId', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'User name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  { field: 'fullName', headerName: 'Full Name', width: 130 },
  {
    field: 'birthDate',
    headerName: 'Birth Date',
    type: 'number',
    width: 90,
  },
  {
    field: 'status',
    headerName: 'Status',
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
    field: "address",
    headerName: "Address",
    width: 70,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 70,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function ReceiptsandPayments() {
  const renters = useRenters();
  return (
    <div style={{ height: 400, width: '100%' }}>
        <div>Receipts and Payments List</div>
      {/* <DataGrid
        rows={renters}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    </div>
  );
}
