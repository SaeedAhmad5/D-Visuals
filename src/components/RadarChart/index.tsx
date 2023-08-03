import React from 'react';
import styled from 'styled-components';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  Tooltip,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const ChartContainer = styled(ResponsiveContainer)`
  width: 100%;
  height: 100%;
`;
const ChartWrapper = styled.div`
  position: relative;
  height: 260px;
  padding-right: 3rem;
`;

interface PropTypes {
  data: any[];
}

const RadarChartComponent = ({ data }: PropTypes) => {
  return (
    <ChartWrapper>
      <ChartContainer>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='name' />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name='On Time Delivery (%)'
            dataKey='On_Time_Delivery'
            stroke='#8884d8'
            fill='#8884d8'
            fillOpacity={0.6}
          />
          <Radar
            name='Quality Score (out of 10)'
            dataKey='Quality_Score_out_of_10'
            stroke='#619ed6'
            fill='#619ed6'
            fillOpacity={0.6}
          />
          <Radar
            name='Pricing Score (out of 10)'
            dataKey='Pricing_Score_out_of_10'
            stroke='#82ca9d'
            fill='#82ca9d'
            fillOpacity={0.6}
          />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ChartContainer>
    </ChartWrapper>
  );
};

export default RadarChartComponent;
