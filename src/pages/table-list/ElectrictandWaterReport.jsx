import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useRenters } from './hooks';

export default function ElectrictandWaterReport() {
  const renters = useRenters();
  return (
    <div style={{ height: 400, width: '100%' }}>
        <div>Electrict and Water Report</div>
    </div>
  );
}
