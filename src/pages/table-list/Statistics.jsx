import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useRenters } from './hooks';

export default function Statistics() {

  return (
    <div style={{ height: 400, width: '100%' }}>
        <div>Thống kê kinh doanh</div>
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
