import React from 'react';
import { useTranslation } from 'next-i18next';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import BasicBreadcrumbs from '@/components/BreadCrumb';
import { FianaceExpenses, FianaceProfitLose, FianaceRevenue, financeAccounting, financeAssets, financeInventory } from '@/constants/finance';
import PieChartData from '@/components/PieChart';

import { ChartHead, CustomHeader, Header, MainWrapper } from '../HumanResource/style';
import { CardsWrapper, ChartWrapper, GenericTitle, LineChartWrapper, PieChartWrapper } from '../Dashboard/style';
import VerticlaBarChart from '../HumanResource/VerticlaBarChart';
import LineChartComponent from '../HumanResource/LineChart';

import FinanceCard from './cards';

const Finance = () => {
  const { t } = useTranslation('common');
  const Balance: any = [
    {
      title: 'Total Balance',
      totalno: '20M',
      unit: 'PKR',
    },
  ];
  const Budget: any = [
    {
      title: 'Total Budget',
      totalno: '50M',
      unit: 'PKR',
    },
  ];

  const Income: any = [
    {
      title: 'Total Income',
      totalno: '10M',
      unit: 'PKR',
    },
  ];
  const Outcome: any = [
    {
      title: 'Total Outcome',
      totalno: '5M',
      unit: 'PKR',
    },
  ];
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

  const COLORS: string[] = ['#1f5c35', '#276b40', '#338f55', '#3cb066'];

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
        <FinanceCard data={Balance} icon={<AccountBalanceWalletIcon />} />
        <FinanceCard data={Income} icon={<TrendingUpIcon />} />
        <FinanceCard data={Outcome} icon={<TrendingDownIcon />} />
      </CardsWrapper>
      <ChartWrapper>
        <PieChartWrapper>
          <ChartHead>
            <GenericTitle>{t('finance.profitPieChart')}</GenericTitle>
          </ChartHead>
          <PieChartData data={pieChartData} colors={COLORS} finance={true} />
        </PieChartWrapper>
        <LineChartWrapper>
          <GenericTitle>{t('finance.BurnBarChart')}</GenericTitle>
          <div
            style={{
              height: '100%',
              marginTop: '60px',
            }}
          >
            <VerticlaBarChart data={financeAccounting} account />
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'555px'} $height>
          <GenericTitle>{t('finance.expenses')}</GenericTitle>
          <div
            style={{
              height: '100%',
            }}
          >
            <LineChartComponent data={FianaceExpenses} expense/>
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'680px'} $height>
          <GenericTitle>{t('finance.InventoryBarChart')}</GenericTitle>
          <div
            style={{
              height: '100%',
              marginTop: '60px',
            }}
          >
            <VerticlaBarChart data={financeInventory} inventory />
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'680px'} $height>
          <GenericTitle>{t('finance.AssetsBarChart')}</GenericTitle>
          <div
            style={{
              height: '100%',
              marginTop: '60px',
            }}
          >
            <VerticlaBarChart data={financeAssets} assets />
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'555px'} $height>
          <GenericTitle>{t('finance.profitLose')}</GenericTitle>
          <div
            style={{
              height: '100%',
            }}
          >
            <LineChartComponent data={FianaceProfitLose} profitLose Cp/>
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'555px'} $height>
          <GenericTitle>{t('finance.Revenue')}</GenericTitle>
          <div
            style={{
              height: '100%',
            }}
          >
            <LineChartComponent data={FianaceRevenue} revenue Cp/>
          </div>
        </LineChartWrapper>
      </ChartWrapper>
    </MainWrapper>
  );
};
export default Finance;
