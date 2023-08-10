export const totalEmployees: any = [
  {
    title: 'Total Emloyees',
    totalno: 859,
    // unit: 'Employee',
  },
];
export const activeEmployees: any = [
  {
    title: 'Active Emloyees',
    totalno: 500,
    // unit: 'Employee',
  },
];
export const attritionEmployees: any = [
  {
    title: 'Attrition Count',
    totalno: 200,
    // unit: 'Employee',
  },
];
export const avgAge: any = [
  {
    title: 'Average Age',
    totalno: 35,
    unit: 'years',
  },
];

type PieChartDataType = {
  name: string;
  value: number;
  dy: number;
  color: string;
};
export const pieChartData: PieChartDataType[] = [
  { name: 'Male', value: 400, dy: -10, color: '#80CC28' },
  { name: 'Female', value: 300, dy: 20, color: '#DD7596' },
];

export const COLORS: string[] = ['#80CC28', '#DD7596'];

export const barChartData: any[] = [
  {
    name: 'Total Employee',
    No: 40,
  },
  {
    name: 'Active Employee',
    No: 80,
  },
  {
    name: 'Retired Employee',
    No: 79,
  },
  {
    name: 'Resigned Employee',
    No: 60,
  },
];

export const agedata: any[] = [
  {
    name: '18-20',
    Employees: 50,
    amt: 50,
  },
  {
    name: '21-23',
    Employees: 60,
    amt: 60,
  },
  {
    name: '24-26',
    Employees: 80,
    amt: 80,
  },
  {
    name: '27-29',
    Employees: 20,
    amt: 20,
  },
  {
    name: '30-32',
    Employees: 50,
    amt: 50,
  },
  {
    name: '33-35',
    Employees: 70,
    amt: 70,
  },
  {
    name: '36-38',
    Employees: 20,
    amt: 20,
  },
  {
    name: '39-41',
    Employees: 10,
    amt: 10,
  },
  {
    name: '42-44',
    Employees: 15,
    amt: 15,
  },
  {
    name: '45-47',
    Employees: 60,
    amt: 60,
  },
  {
    name: '48-50',
    Employees: 30,
    amt: 30,
  },
  {
    name: '51-53',
    Employees: 35,
    amt: 35,
  },
  {
    name: '54-56',
    Employees: 35,
    amt: 35,
  },
  {
    name: '57-59',
    Employees: 20,
    amt: 20,
  },
  {
    name: '60',
    Employees: 10,
    amt: 10,
  },
];
export function categorizeEmployeesByAgeBands(employees: any[]) {
  const ageBands = [
    { min: 18, max: 20 },
    { min: 21, max: 23 },
    { min: 24, max: 26 },
  ];
  const categorizedEmployees = ageBands.map(ageBand => {
    const { min, max } = ageBand;
    const employeesInAgeBand = employees.filter(
      (employee: { Age: number }) => employee.Age >= min && employee.Age <= max
    );
    return { ageBand: `${min}-${max}`, count: employeesInAgeBand.length };
  });

  return categorizedEmployees;
}
type departmentChartDataType = {
  name: string;
  value: number;
  dy: number;
  color: string;
};
export const departmentChartData: departmentChartDataType[] = [
  { name: 'HR', value: 400, dy: -10, color: '#80CC28' },
  { name: 'Finance', value: 300, dy: 20, color: '#DD7596' },
  { name: 'IT', value: 300, dy: 20, color: '#DD7596' },
  { name: 'Law', value: 300, dy: 20, color: '#DD7596' },
  { name: 'Audit', value: 300, dy: 20, color: '#DD7596' },
];

export const departmentColor: string[] = ['#aba7ff', '#8884d8', '#5d59b7', '#433eab', '#282395'];

export const educationWiseAttritionData: any[] = [
  {
    name: 'Life Sciences',
    No: 89,
  },
  {
    name: 'Medical',
    No: 63,
  },
  {
    name: 'Marketing',
    No: 35,
  },
  {
    name: 'Technical Degree',
    No: 32,
  },
  {
    name: 'Human Resources',
    No: 20,
  },
  {
    name: 'Other',
    No: 11,
  },
];
export const OleChartData: any[] = [
  {
    year: '2019',
    Effectiveness: 89,
  },
  {
    year: '2020',
    Effectiveness: 63,
  },
  {
    year: '2021',
    Effectiveness: 35,
  },
  {
    year: '2022',
    Effectiveness: 20,
  },
  {
    year: '2023',
    Effectiveness: 11,
  },
];
export const OleBarChartData: any[] = [
  {
    name: 'HR',
    Effectiveness: 89,
  },
  {
    name: 'Sales',
    Effectiveness: 63,
  },
  {
    name: 'Marketing',
    Effectiveness: 35,
  },
  {
    name: 'IT',
    Effectiveness: 70,
  },
  {
    name: 'Customer Service',
    Effectiveness: 11,
  },
  {
    name: 'Law',
    Effectiveness: 40,
  },
  {
    name: 'Finance',
    Effectiveness: 30,
  },
];

export const CpChartData: any[] = [
  {
    year: '2019',
    contract: 60,
    permanent: 89,
  },
  {
    year: '2020',
    contract: 30,
    permanent: 70,
  },
  {
    year: '2021',
    contract: 40,
    permanent: 65,
  },
  {
    year: '2022',
    contract: 70,
    permanent: 50,
  },
  {
    year: '2023',
    contract: 80,
    permanent: 60,
  },
];
export const TqChartData: any[] = [
  {
    year: '0',
    notices: 89,
  },
  {
    year: '1',
    notices: 30,
  },
  {
    year: '2',
    notices: 40,
  },
  {
    year: '3',
    notices: 70,
  },
  {
    year: '4',
    notices: 80,
  },
  {
    year: '5',
    notices: 69,
  },
  {
    year: '6',
    notices: 56,
  },
  {
    year: '7',
    notices: 39,
  },
  {
    year: '8',
    notices: 35,
  },
  {
    year: '9',
    notices: 55,
  },
];
