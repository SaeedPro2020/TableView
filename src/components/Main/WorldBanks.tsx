import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { get } from '../../servicess/Rows';

interface Column {
  id: 'name' | 'code' | 'indicator' | 'indicator_code' | 'year_1960' | 'year_1961' | 'year_1962'
  | 'year_1963';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Country\u00a0Code', minWidth: 100 },
  {
    id: 'indicator',
    label: 'Indicator\u00a0Name',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'indicator_code',
    label: 'Indicator\u00a0Code',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'year_1960',
    label: '1960',
    minWidth: 80,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'year_1961',
    label: '1961',
    minWidth: 80,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'year_1962',
    label: '1962',
    minWidth: 80,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'year_1963',
    label: '1963',
    minWidth: 80,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  indicator: number;
  indicator_code: string;
  year_1960: number;
  year_1961: number;
  year_1962: number;
  year_1963: number;
}

function createData(
  name: string,
  code: string,
  indicator: number,
  indicator_code: string,
  year_1960: number,
  year_1961: number,
  year_1962: number,
  year_1963: number,
): Data {
  return { name, code, indicator, indicator_code, year_1960, year_1961, year_1962, year_1963};
}

export default function WorldBanks() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

const rows: Data[] = []
const [data, setData] = useState(rows)

const getData = async () => {
  (await get()).map(async values =>{

          rows.push(createData(values.name, values.code, values.indicator, values.indicator_code,
             values.year_1960, values.year_1961, values.year_1962, values.year_1963))

  })
  setData(rows)
  return rows
}
useEffect(() => {
getData()
})

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={10}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
