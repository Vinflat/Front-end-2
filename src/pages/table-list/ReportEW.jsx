import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useRenters } from './hooks';

export default function ReportEW() {
  const renters = useRenters();
  return (
    <div style={{ height: 400, width: '100%' }}>
        <div>Báo cáo sử dụng điện nước</div>
    </div>
  );
}