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
  const accountTooltip: any = (value: any) => `$${value}K`;
  const formatYAxisTick = (tickValue: number) => `$${tickValue}k`;

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
            <XAxis
              dataKey={!stock ? (!status ? (!Ole ? 'Employees' : 'Effectiveness') : 'Count') : 'name'}
              scale='point'
              padding={{ left: 10, right: 10 }}
            />
          ) : (
            <XAxis
              dataKey={!stock ? (!status ? 'name' : 'year') : 'name'}
              scale='point'
              padding={{ left: !stock ? 10 : 50, right: !stock ? 10 : 50 }}
            />
          )}
          {!status && !stock ? <YAxis tickFormatter={formatYAxisTick} /> : null}
          <Tooltip
            formatter={
              !status
                ? tooltipFormatter
                : !inventory
                ? !assets
                  ? !account
                    ? tooltipFormatter
                    : accountTooltip
                  : accountTooltip
                : tooltipFormatter
            }
          />
          {!status ? (
            <Bar
              dataKey={!Count ? (!Ole ? 'Employees' : 'Effectiveness') : 'Count'}
              fill={!Count ? (!Ole ? '#8884d8' : '#e92f32') : '#057311'}
              background={{ fill: '#eee' }}
              barSize={!Count ? 20 : null}
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
