export interface ColumnDataInterface {
  id: string;
  label: string;
  isStatus?: boolean;
}

export const JobSatisficationDataColumn: ColumnDataInterface[] = [
  { id: 'JobRole', label: 'Job Role' },
  { id: 'one', label: '1' },
  { id: 'two', label: '2' },
  { id: 'three', label: '3' },
  { id: 'four', label: '4' },
  { id: 'GrandTotal', label: 'Grand Total' },
];

export const JobSatisficationDataRow: any[] = [
  {
    JobRole: 'Healthcare Resources',
    one: 1,
    two: 4,
    three: 3,
    four: 10,
    GrandTotal: 18,
  },
  {
    JobRole: 'Human Resource Manager',
    one: 1,
    two: 5,
    three: 6,
    four: 4,
    GrandTotal: 16,
  },
  {
    JobRole: 'Manager',
    one: 3,
    two: 6,
    three: 4,
    four: 5,
    GrandTotal: 18,
  },
  {
    JobRole: 'Manufacturing Director',
    one: 1,
    two: 9,
    three: 2,
    four: 5,
    GrandTotal: 17,
  },
  {
    JobRole: 'Research Director',
    one: 2,
    two: 3,
    three: 5,
    four: 9,
    GrandTotal: 19,
  },
  {
    JobRole: 'Research Scientist',
    one: 8,
    two: 2,
    three: 1,
    four: 9,
    GrandTotal: 20,
  },
  {
    JobRole: 'Sales Executive',
    one: 3,
    two: 5,
    three: 2,
    four: 8,
    GrandTotal: 18,
  },
  {
    JobRole: 'Sales Representative',
    one: 1,
    two: 4,
    three: 6,
    four: 4,
    GrandTotal: 15,
  },
];
