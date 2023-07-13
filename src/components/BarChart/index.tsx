import React from 'react';
import styled from 'styled-components';
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'next-i18next';

const ChartContainer = styled(ResponsiveContainer)`
  width: 100%;
  height: 100%;
`;
const ChartWrapper = styled.div`
  position: relative;
  height: 90%; // Set the height of the chart container
`;

const Caption = styled.p`
  position: absolute;
  bottom: -2rem;
  left: 60%;
  transform: translateX(-50%);
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.25px;
`;

const Barchart: React.FC = () => {
  const { t } = useTranslation('common');
  const data = [
    {
      name: `${t('linechart.activities')}`,
      pv: 80,
    },
    {
      name: `${t('linechart.accomodation')}`,
      pv: 79,
    },
    {
      name: `${t('linechart.services')}`,
      pv: 60,
    },
    {
      name: `${t('linechart.food')}`,
      pv: 40,
    },
    {
      name: `${t('linechart.product')}`,
      pv: 19,
    },
    {
      name: `${t('linechart.printedmaterial')}`,
      pv: 60,
    },
    {
      name: `${t('linechart.venue')}`,
      pv: 50,
    },
    {
      name: `${t('linechart.miscellaneous')}`,
      pv: 30,
    },
    {
      name: `${t('linechart.p&bitems')}`,
      pv: 70,
    },
    {
      name: `${t('linechart.travel')}`,
      pv: 68,
    },
    {
      name: `${t('linechart.waste')}`,
      pv: 80,
    },
    {
      name: `${t('linechart.transportaion')}`,
      pv: 60,
    },
    {
      name: `${t('linechart.virtual')}`,
      pv: 68,
    },
  ];
  return (
    <ChartWrapper>
      <ChartContainer>
        <ComposedChart
          layout='vertical'
          min-width={250}
          min-height={250}
          data={data}
          margin={{
            left: 60,
          }}
        >
          <XAxis type='number' axisLine={false} tickLine={false} />
          <YAxis
            dataKey='name'
            type='category'
            axisLine={false}
            tickLine={false}
            width={160}
            fontSize={11}
            tickFormatter={value => value.toUpperCase()}
            fontWeight={400}
            fontFamily='Montserrat'
          />
          <Tooltip />
          <Bar dataKey='pv' barSize={15} fill='#80CC28' />
        </ComposedChart>
      </ChartContainer>
      <Caption> {t('linechart.caption')}</Caption>
    </ChartWrapper>
  );
};

export default Barchart;
