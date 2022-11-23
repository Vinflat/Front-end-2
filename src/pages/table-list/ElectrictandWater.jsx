import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useRenters } from './hooks';

export default function ElectrictandWater() {
  const renters = useRenters();
  return (
    <div style={{ height: 400, width: '100%' }}>
        <div>Danh sách chốt điện nước</div>
    </div>
  );
}
