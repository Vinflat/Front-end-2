import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useRenters } from './hooks';

export default function SettingCollect() {
  const renters = useRenters();
  return (
    <div style={{ height: 400, width: '100%' }}>
        <div>Cài đặt loại phiếu thu</div>
    </div>
  );
}
