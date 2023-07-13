import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

import { ColumnDataInterface } from '@/views/Events';

import ActionPopup, { MenuItemType } from '../ActionPopup';

import { TableHeadCellStyled, TableHeadStyled, TableImage, TableRowCellStyled } from './style';


interface TableColumn extends ColumnDataInterface {
  id: string;
  label: string;
  align?: 'right' | 'left' | 'center';
  isImage?: boolean;
}
interface TableRow {
  [key: string]: string | number | any;
}

interface PropTypes {
  rows: TableRow[];
  columns: TableColumn[];
  hideaction?: boolean;
  menuItems?: MenuItemType[];
  difference?: boolean;
}

const CustomTable: React.FC<PropTypes> = ({ rows, columns, hideaction, menuItems, difference }: PropTypes) => {
  const getTotalValues = () => {
    const lastYearTotal = rows.reduce((acc, row) => {
      return acc + row.lastyear;
    }, 0);

    const currentTotal = rows.reduce((acc, row) => {
      return acc + row.currentyear;
    }, 0);

    const percentageDifference = (((lastYearTotal - currentTotal) / lastYearTotal) * 100).toFixed(2);

    return { lastYearTotal, currentTotal, percentageDifference };
  };

  const totalValues = difference ? getTotalValues() : null;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHeadStyled>
          <TableRow>
            {columns.map(column => (
              <TableHeadCellStyled key={column.id} align={column.align}>
                {column.label}
              </TableHeadCellStyled>
            ))}
            {!hideaction && (
              <>
                <TableHeadCellStyled>Action</TableHeadCellStyled>
              </>
            )}
          </TableRow>
        </TableHeadStyled>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow key={row.eventname} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {columns.map((column, index) => (
                <TableRowCellStyled
                  $status={row[column.id]}
                  $isStatus={column.isStatus}
                  key={column.id}
                  align={column.align}
                >
                  {index === 0 && column.isImage ? (
                    <TableImage $height='1.5rem' $width='6.604rem' $bottom='-6px' $left='0' $top='0px'>
                      <Image src={row[column.id]} alt={column.label} layout='fill' objectFit='contain' />
                    </TableImage>
                  ) : (
                    <p>{row[column.id]}</p>
                  )}
                </TableRowCellStyled>
              ))}
              {!hideaction && (
                <>
                  <TableRowCellStyled>
                    <ActionPopup menuItems={menuItems || []} />
                  </TableRowCellStyled>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
        {difference && (
          <>
            <TableHeadStyled>
              <TableRow>
                <TableHeadCellStyled>Total</TableHeadCellStyled>
                <TableHeadCellStyled>{totalValues?.lastYearTotal}</TableHeadCellStyled>
                <TableHeadCellStyled>{totalValues?.currentTotal}</TableHeadCellStyled>
                <TableHeadCellStyled>{totalValues?.percentageDifference}%</TableHeadCellStyled>
              </TableRow>
            </TableHeadStyled>
          </>
        )}
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
