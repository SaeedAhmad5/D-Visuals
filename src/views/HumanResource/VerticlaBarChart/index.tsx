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
  account?: Boolean;
  inventory?: Boolean;
  assets?: boolean;
}

const VerticlaBarChart = ({ data, Ole, account, inventory, assets }: PropTypes) => {
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
          <XAxis
            dataKey={!assets ? (inventory ? 'month' : 'name') : 'month'}
            scale='point'
            padding={{ left: 10, right: 10 }}
          />
          {!account ? !Ole ? <YAxis /> : null : <YAxis tickFormatter={formatYAxisTick} />}
          <Tooltip
            formatter={
              !inventory
                ? !assets
                  ? !account
                    ? tooltipFormatter
                    : accountTooltip
                  : accountTooltip
                : tooltipFormatter
            }
          />
          <Bar
            dataKey={
              !assets
                ? !inventory
                  ? !account
                    ? !Ole
                      ? 'Employees'
                      : 'Effectiveness'
                    : 'Burn'
                  : 'inventory'
                : 'assets'
            }
            fill={
              !assets ? (!inventory ? (!account ? (!Ole ? '#8884d8' : '#e92f32') : '#276b40') : '#587c45') : '#619ed6'
            }
            background={{ fill: '#eee' }}
            barSize={!assets ? (inventory ? 20 : null) : 20}
          />
        </BarChart>
      </ChartContainer>
    </ChartWrapper>
  );
};

export default VerticlaBarChart;
