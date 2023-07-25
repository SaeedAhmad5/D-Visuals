import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, ResponsiveContainer, Label, Line, Tooltip, Legend } from 'recharts';

const ChartContainer = styled(ResponsiveContainer)<{ $margin?: boolean }>`
  display: flex;
  justify-content: center;
  height: 315px !important;
  margin: ${props => (props.$margin ? '0' : '5px 0')};
`;
const ChartSvg = styled(PieChart)`
  width: 300px !important;
  height: 310px !important;
  & > svg {
    width: 300px;
    height: 278px;
  }
`;

type DataTypes = {
  name: string;
  value: number;
  dy?: number;
  color: string;
};
interface PropTypes {
  data: DataTypes[];
  colors: string[];
  hideInnerRadius?: boolean;
  noMargin?: boolean;
  finance?: boolean;
}

const PieChartData = ({ colors, data, hideInnerRadius, noMargin, finance }: PropTypes) => {
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const highestPercentage = Math.max(...data.map(item => item.value));
    const textColor = percent === highestPercentage ? '#fffff' : '#000000';

    return (
      <>
        <text
          x={x}
          y={y}
          fill={textColor}
          textAnchor={x > cx ? 'start' : 'center'}
          dominantBaseline='central'
          fontSize={20}
          fontWeight={600}
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      </>
    );
  };

  return (
    <>
      <ChartContainer minHeight={400} width={'100%'} $margin={noMargin}>
        <ChartSvg>
          <Pie
            dataKey='value'
            data={data}
            cx='50%'
            cy='50%'
            label={hideInnerRadius ? renderCustomizedLabel : undefined}
            outerRadius={180}
            innerRadius={hideInnerRadius ? 0 : 90}
            fill='#8884d8'
          >
            <Line
              type='linear'
              dataKey='name'
              stroke='#333'
              strokeWidth={1}
              label={<Label fill='#333' fontSize={12} fontWeight={500} />}
            />
            {!hideInnerRadius && (
              <>
                {!finance && data ? (
                  data.map(item => (
                    <Label
                      key={`label-${item.name}`}
                      value={`${item.name === 'Male' ? 'M' : 'F'}: ${item.value}`}
                      position='center'
                      fontSize={30}
                      fontWeight={500}
                      fill={item.color}
                      dy={item.dy}
                    />
                  ))
                ) : (
                  <Label
                    key={'50M'}
                    value={'50M'}
                    position='center'
                    fontSize={30}
                    fontWeight={800}
                    fill={'#10101'}
                    dy={0}
                  />
                )}
              </>
            )}

            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} stroke='none' strokeWidth={0} />
            ))}
          </Pie>
          
          {!finance ? (
            <Legend layout='horizontal' align='center' verticalAlign='bottom' />
          ) : (
            <Legend layout='vertical' align='right' verticalAlign='bottom' />
          )}

          <Tooltip />
        </ChartSvg>
      </ChartContainer>
    </>
  );
};

export default PieChartData;
