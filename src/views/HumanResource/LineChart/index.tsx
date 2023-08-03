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
  df?: boolean;
}

const LineChartComponent = ({ data, Cp, Tq, df }: PropTypes) => {
  const formatYAxisTick = (tickValue: number) => `${tickValue}%`;
  const tooltipFormatter: any = (value: any) => `${value}%`;
  const AreaTooltipFormatter: any = (value: any) => `${value} Year`;

  return (
    <ChartWrapper>
      <ChartContainer>
        {!Tq ? (
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey={!df ? 'year' : 'month'} padding={{ left: 30, right: 30 }} />
            {!Cp ? (
              <YAxis tickFormatter={!df ? formatYAxisTick : null} />
            ) : (
              <>
                <YAxis
                  tickFormatter={formatYAxisTick}
                  yAxisId='left'
                  label={{ value: 'Contract', angle: -90, position: 'insideLeft' }}
                />
                <YAxis
                  tickFormatter={formatYAxisTick}
                  yAxisId='right'
                  label={{ value: 'Permanent', angle: -270, position: 'insideRight' }}
                  orientation='right'
                />
              </>
            )}
            <Tooltip formatter={tooltipFormatter} />
            {!Cp ? (
              <>
                {!df ? (
                  <Line type='monotone' dataKey='Effectiveness' stroke='#ff0003' activeDot={{ r: 8 }} />
                ) : (
                  <>
                    <Line type='monotone' dataKey='Forecasted_Demand' stroke='#ff0003' activeDot={{ r: 8 }} />
                    <Line type='monotone' dataKey='Actual_Demand' stroke='#043db9' activeDot={{ r: 8 }} />
                  </>
                )}
              </>
            ) : (
              <>
                {' '}
                <Line yAxisId='left' type='monotone' dataKey='contract' stroke='#4cbfff' activeDot={{ r: 8 }} />
                <Line yAxisId='right' type='monotone' dataKey='permanent' stroke='#043db9' />
              </>
            )}
            {!df ? Cp ? <Legend /> : null : <Legend />}
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
            <XAxis dataKey='year' label={{ value: 'Years at Company', angle: 0 }} />
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
