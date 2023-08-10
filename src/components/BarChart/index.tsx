import React from 'react';
import styled from 'styled-components';
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from 'recharts';
import { useTranslation } from 'next-i18next';

const ChartContainer = styled(ResponsiveContainer)`
  width: 100%;
  height: 100%;
`;
const ChartWrapper = styled.div`
  position: relative;
  height: 260px;
  padding-right: 3rem;
`;

const Caption = styled.p`
  position: relative;
  left: 65%;
  transform: translateX(-50%);
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.25px;
  bottom: 15px;
`;

type DataTypes = {
  name: string;
  No: number;
};
interface PropTypes {
  data: DataTypes[];
  barsize?: number | undefined;
  isActive?: boolean;
  label?: boolean;
  color?: string;
  itemStatus?: boolean;
  TotalEmployees?: number;
  activeEmployee?: number;
  retiredEmployee?: number;
}

const Barchart = ({
  data,
  barsize,
  isActive,
  label,
  color,
  itemStatus,
  TotalEmployees,
  activeEmployee,
  retiredEmployee,
}: PropTypes) => {
  const { t } = useTranslation('common');

  return (
    <ChartWrapper>
      <ChartContainer>
        <ComposedChart
          layout='vertical'
          min-width={250}
          min-height={250}
          data={data}
          margin={{
            left: 40,
            right: 20,
          }}
        >
          <XAxis type='number' axisLine={false} tickLine={false} tickFormatter={() => ''} />
          <YAxis
            dataKey='name'
            type='category'
            axisLine={false}
            tickLine={false}
            width={180}
            fontSize={11}
            tickFormatter={value => value.toUpperCase()}
            fontWeight={400}
            fontFamily='Montserrat'
          />
          <Tooltip />
          {isActive && <CartesianGrid horizontal={false} />}

          <Bar
            dataKey={
              !TotalEmployees
                ? 'No'
                : item =>
                    item.name === 'Total Employee'
                      ? TotalEmployees
                      : item.name === 'Active Employee'
                      ? activeEmployee
                      : retiredEmployee
            }
            barSize={barsize || 15}
            fill={color ? color : '#8884d8'}
          >
            {label && <LabelList dataKey='No' position='right' fill='#555' />}
          </Bar>
        </ComposedChart>
      </ChartContainer>
      {!itemStatus ? !color ? <Caption> {t('hr.captionLineChart')}</Caption> : null : null}
    </ChartWrapper>
  );
};

export default Barchart;
