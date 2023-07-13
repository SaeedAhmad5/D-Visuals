import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label, Line } from 'recharts';

const PieChartData: React.FC = () => {
  const data = [
    { name: 'Food ^ Beverage', value: 400 },
    { name: 'Travel & Transport', value: 300 },
    { name: 'Energy', value: 250 },
    { name: 'Waste', value: 200 },
    { name: 'Production', value: 200 },
  ];

  const COLORS = ['#80CC28', '#DD7596', '#1B4001', '#010101', '#C59CA0'];

  return (
    <>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie data={data} cx='50%' cy='50%' label outerRadius={160} innerRadius={80} fill='#8884d8' dataKey='value'>
            <Label value='420' position='center' fontSize={49} fontWeight={500} fill='#161616' dy={-10} />
            <Line
              type='linear'
              dataKey='name'
              stroke='#333'
              strokeWidth={1}
              label={<Label fill='#333' fontSize={12} fontWeight={500} />}
            />
            <Label value='tco2' position='center' fontSize={16} fontWeight={500} fill='#161616' dy={20} />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke='none' strokeWidth={0} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChartData;
