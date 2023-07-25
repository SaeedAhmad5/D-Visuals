import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled(ResponsiveContainer)`
  width: 100%;
  height: 100%;
`;
const ChartWrapper = styled.div`
  position: relative;
  height: 260px;
  padding-right: 3rem;
`;

type DataTypes = {
  name: string;
  Employees: number;
  amt: number;
};
interface PropTypes {
  data: DataTypes[];
  Ole?: Boolean;
}

const VerticlaBarChart = ({ data, Ole }: PropTypes) => {
  const tooltipFormatter: any = (value: any) => `${value}%`;

  return (
    <ChartWrapper>
      <ChartContainer>
        <BarChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={35}
        >
          <XAxis dataKey='name' scale='point' padding={{ left: 10, right: 10 }} />
          {!Ole ? <YAxis /> : null}
          <Tooltip formatter={tooltipFormatter} />
          <Bar
            dataKey={!Ole ? 'Employees' : 'Effectiveness'}
            fill={!Ole ? '#8884d8' : '#e92f32'}
            background={{ fill: '#eee' }}
          />
        </BarChart>
      </ChartContainer>
    </ChartWrapper>
  );
};

export default VerticlaBarChart;
