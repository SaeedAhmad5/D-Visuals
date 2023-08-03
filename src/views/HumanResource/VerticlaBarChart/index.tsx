import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
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
  Count?: Boolean;
  status?: Boolean;
  stock?: Boolean;
}

const VerticlaBarChart = ({ data, Ole, Count, status, stock }: PropTypes) => {
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
          {!status ? (
            <XAxis dataKey='name' scale='point' padding={{ left: 10, right: 10 }} />
          ) : (
            <XAxis dataKey='year' scale='point' padding={{ left: 50, right: 50 }} />
          )}
          {!status ? !Ole ? <YAxis /> : null : null}
          <Tooltip formatter={!status ? tooltipFormatter : null} />
          {!status ? (
            <Bar
              dataKey={!Count ? (!Ole ? 'Employees' : 'Effectiveness') : 'Count'}
              fill={!Count ? (!Ole ? '#8884d8' : '#e92f32') : '#057311'}
              background={{ fill: '#eee' }}
            />
          ) : (
            <>
              <Bar
                dataKey={stock ? 'Stockouts' : 'Recieved'}
                fill={stock ? '#619ed6' : '#e92f32'}
                background={{ fill: '#eee' }}
                barSize={stock ? 20 : 15}
              />
              <Bar
                dataKey={stock ? 'Backorders' : 'InventoryOnHand'}
                fill={'#8884d8'}
                background={{ fill: '#eee' }}
                barSize={stock ? 20 : 15}
              />
              <Bar
                dataKey={stock ? '' : 'Shipped'}
                fill={stock ? '#fff' : '#057311'}
                background={{ fill: stock ? '#fff' : '#eee' }}
                barSize={15}
              />
            </>
          )}
          {status ? <Legend /> : null}
        </BarChart>
      </ChartContainer>
    </ChartWrapper>
  );
};

export default VerticlaBarChart;
