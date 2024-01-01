'use client';
import * as React from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { DataGridPremium, GridColDef, GridToolbarColumnsButton, GridToolbarContainer, LicenseInfo, heIL } from '@mui/x-data-grid-premium';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

LicenseInfo.setLicenseKey('adaab41522802aaec15d3bdfec6e6812Tz03OTEyNixFPTE3MzIxNzk1MjEwMDAsUz1wcmVtaXVtLExNPXN1YnNjcmlwdGlvbixLVj0y');
// Create rtl cache
const cacheRtl = createCache({
  key: 'data-grid-rtl-demo',
  stylisPlugins: [prefixer, rtlPlugin],
});

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'מספר',
    width: 100,
  },
  {
    field: 'Description',
    headerName: 'תיאור',
    width: 150,
  },
  {
    field: 'ProjectCode',
    headerName: 'פרויקט',
    width: 130,
  },
  {
    field: 'SupplierCode',
    headerName: 'שם ספק',
    width: 130,
  },
  {
    field: 'CommRequestTypeName',
    headerName: 'סוג',
    width: 130,
  }, 
  {
    field: 'StatusName',
    headerName: 'סטטוס',
    width: 120,
  },
  {
    field: 'StationName',
    headerName: 'תחנה נוכחית',
    width: 120,
  },
  {
    field: 'OrderID',
    headerName: 'מספר הזמנה',
    width: 120,
  }
];

const rows = [
  { id: 1, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקטלי מה', SupplierCode: 'ספק איכותי', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  { id: 2, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקט דוגמה', SupplierCode: 'ספק משני', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  { id: 3, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקטים ברמה', SupplierCode: 'ספק אלביט', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  { id: 4, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקט דוגמה', SupplierCode: 'ספק מרכזי', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  { id: 5, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקט דוגמה', SupplierCode: 'ספק ספקי', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  { id: 6, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקט דוגמה', SupplierCode: 'ספק 1', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  { id: 7, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקט דוגמה', SupplierCode: 'ספק 2', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  { id: 8, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקט דוגמה', SupplierCode: 'ספק 4', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  { id: 9, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקט דוגמה', SupplierCode: 'ספק 6', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  { id: 10, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקט דוגמה', SupplierCode: 'ספק דוגמה', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  { id: 11, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקט דוגמה', SupplierCode: 'ספק דוגמה', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  { id: 12, Description: 'פרויקט דוגמה', ProjectCode: 'פרויקט דוגמה', SupplierCode: 'ספק דוגמה', CommRequestTypeName: 'סוג דוגמה', StatusName: 'סטטוס דוגמה', StationName: 'תחנה מש״קית', OrderID: 123456 },
  
];

export default function DataGridRTL() {
  // Inherit the theme from the docs site (dark/light mode)
  const existingTheme = useTheme();

  const theme = React.useMemo(
    () =>
      createTheme({}, heIL, existingTheme, {
        direction: 'rtl',
      }),
    [existingTheme],
  );

  const MemoizedToolbar = React.useCallback(
    () => (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
      </GridToolbarContainer>
    ),
    [],
  );

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl" style={{ width: '95%' }}>
          <DataGridPremium rows={rows} columns={columns} slots={{ toolbar: MemoizedToolbar
          }}/>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}