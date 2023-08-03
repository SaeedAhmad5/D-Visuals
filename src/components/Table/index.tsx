import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

import { ColumnDataInterface } from '@/constants/events';

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
  rowWidth?: boolean;
}

const CustomTable: React.FC<PropTypes> = ({
  rows,
  columns,
  hideaction,
  menuItems,
  difference,
  rowWidth,
}: PropTypes) => {
  const getTotalValues = () => {
    const rateOneCount = rows.reduce((acc, row) => {
      return acc + row.one;
    }, 0);

    const rateTwoCount = rows.reduce((acc, row) => {
      return acc + row.two;
    }, 0);

    const rateThreeCount = rows.reduce((acc, row) => {
      return acc + row.three;
    }, 0);

    const rateFourCount = rows.reduce((acc, row) => {
      return acc + row.four;
    }, 0);

    const totalRateCount = rateOneCount + rateTwoCount + rateThreeCount + rateFourCount;
    const averageRateCount = totalRateCount / 4;
    const percentage = (averageRateCount / 100) * 100;
    const percentageDifference = percentage.toFixed(2);

    return { rateOneCount, rateTwoCount, rateThreeCount, rateFourCount, percentageDifference };
  };

  const totalValues = difference ? getTotalValues() : null;
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        size={rowWidth ? 'medium' : 'small'}
        aria-label={difference ? 'a dense table' : 'simple table'}
      >
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
                <TableHeadCellStyled>{totalValues?.rateOneCount}</TableHeadCellStyled>
                <TableHeadCellStyled>{totalValues?.rateTwoCount}</TableHeadCellStyled>
                <TableHeadCellStyled>{totalValues?.rateThreeCount}</TableHeadCellStyled>
                <TableHeadCellStyled>{totalValues?.rateFourCount}</TableHeadCellStyled>
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
