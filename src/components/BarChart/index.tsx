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
}

const Barchart = ({ data, barsize, isActive, label }: PropTypes) => {
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

          <Bar dataKey='No' barSize={barsize || 15} fill='#80CC28'>
            {label && <LabelList dataKey='No' position='right' fill='#555' />}
          </Bar>
        </ComposedChart>
      </ChartContainer>
      <Caption> {t('hr.captionLineChart')}</Caption>
    </ChartWrapper>
  );
};

export default Barchart;
