import React from 'react';
import { useTranslation } from 'next-i18next';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import BasicBreadcrumbs from '@/components/BreadCrumb';

import { ChartHead, CustomHeader, Header, MainWrapper } from '../HumanResource/style';
import { CardsWrapper, GenericTitle, PieChartWrapper } from '../Dashboard/style';

import FinanceCard from './cards';
import PieChartData from '@/components/PieChart';

const Finance = () => {
  const { t } = useTranslation('common');
const Balance:any =[
  {
    title: 'Total Balance',
    totalno: "20M",
    unit: 'PKR',
  }
]
const Budget:any =[
  {
    title: 'Total Budget',
    totalno: "50M",
    unit: 'PKR',
  }
]

const Income:any =[
  {
    title: 'Total Income',
    totalno: "10M",
    unit: 'PKR',
  }
]
const Outcome:any =[
  {
    title: 'Total Outcome',
    totalno: "5M",
    unit: 'PKR',
  }
]
type PieChartDataType = {
  name: string;
  value: number;
  color: string;
};
const pieChartData: PieChartDataType[] = [
  { name: '2020', value: 5, color: '#1f5c35' },
  { name: '2021', value: 10, color: '#276b40' },
  { name: '2022', value: 15, color: '#338f55' },
  { name: '2023', value: 20, color: '#3cb066' },
];

const COLORS: string[] = ['#1f5c35', '#276b40', '#338f55' ,'#3cb066'];

const AccountingBarChartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
  return (
    <MainWrapper>
      <Header>
        <BasicBreadcrumbs
          path='/finance'
          firstLinkText={t('finance.breadcrumbFirstLinkText')}
          secondText={t('finance.breadcrumbSecondText')}
        />
      </Header>
      <CustomHeader>{t('finance.header')}</CustomHeader>
      <CardsWrapper>
        <FinanceCard data={Budget} icon={<AttachMoneyIcon />} />
        <FinanceCard data={Balance} icon={<AccountBalanceWalletIcon />}/>
         <FinanceCard data={Income} icon={<TrendingUpIcon />}/>
         <FinanceCard data={Outcome} icon={<TrendingDownIcon />}/>
      </CardsWrapper>
      <PieChartWrapper>
          <ChartHead>
            <GenericTitle>{t('finance.profitPieChart')}</GenericTitle>
          </ChartHead>
          <PieChartData data={pieChartData} colors={COLORS}  finance={true} />
          
        </PieChartWrapper>
    </MainWrapper>
  );
};
export default Finance;
