import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, Legend, Area, AreaChart } from 'recharts';
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
  contract?: number;
  permanent?: number;
};
interface PropTypes {
  data: DataTypes[];
  Cp?: boolean;
  Tq?: boolean;
  expense?: boolean;
  profitLose?: boolean;
  revenue?: boolean;
}

const LineChartComponent = ({ data, Cp, Tq, expense, profitLose, revenue }: PropTypes) => {
  const formatYAxisTick = (tickValue: number) => `${tickValue}%`;
  const tooltipFormatter: any = (value: any) => `${value}%`;
  const AreaTooltipFormatter: any = (value: any) => `${value} Year`;

  return (
    <ChartWrapper>
      <ChartContainer>
        {!Tq ? (
          <LineChart width={500} height={300} data={data}>
           
            {expense ? (
              <XAxis dataKey='month' padding={{ left: 30, right: 30 }} />
            ) : (
              <XAxis dataKey={profitLose?'month':'year'} />
            )}
            {!Cp ? (
              <YAxis tickFormatter={formatYAxisTick} />
            ) : (
              <>
                <YAxis
                  tickFormatter={formatYAxisTick}
                  yAxisId='left'
                  label={{ value: !revenue ? (profitLose ? '' : 'Contract') : '', angle: -90, position: 'insideLeft' }}
                />
                <YAxis
                  tickFormatter={formatYAxisTick}
                  yAxisId='right'
                  label={{
                    value: !revenue ? (profitLose ? '' : 'Permanent') : '',
                    angle: -270,
                    position: 'insideRight',
                  }}
                  orientation='right'
                />
              </>
            )}
            <Tooltip formatter={tooltipFormatter} />
            {!expense ? (
              <>
                {!Cp ? (
                  <Line type='monotone' dataKey='Effectiveness' stroke='#ff0003' activeDot={{ r: 8 }} />
                ) : (
                  <>
                    <Line
                      yAxisId='left'
                      type='monotone'
                      dataKey={!revenue ? (profitLose ? 'profit' : 'contract') : 'Budgeted_Revenue'}
                      stroke='#619ed6'
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId='right'
                      type='monotone'
                      dataKey={!revenue ? (profitLose ? 'loss' : 'permanent') : 'Actual_Revenue'}
                      stroke='#e48f1b'
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <Line type='monotone' dataKey='Expenses' stroke='#ff0003' activeDot={{ r: 8 }} />
                <Line type='monotone' dataKey='Salary' stroke='#587c45' activeDot={{ r: 8 }} />
                <Line type='monotone' dataKey='FixCost' stroke='#127aa9' activeDot={{ r: 8 }} />
              </>
            )}

            {!expense ? Cp ? <Legend /> : null : <Legend />}
          </LineChart>
        ) : (
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId='anyId'
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: -5,
            }}
          >
            <YAxis label={{ value: 'Notices', angle: -90, position: 'insideLeft' }} />
            <Tooltip labelFormatter={AreaTooltipFormatter} />
            <Area type='monotone' dataKey='notices' stroke='#4cbfff' fill='#4cbfff' />
          </AreaChart>
        )}
      </ChartContainer>
    </ChartWrapper>
  );
};

export default LineChartComponent;
