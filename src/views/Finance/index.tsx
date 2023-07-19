import React from 'react';
import { useTranslation } from 'next-i18next';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import BasicBreadcrumbs from '@/components/BreadCrumb';

import { CustomHeader, Header, MainWrapper } from '../HumanResource/style';
import { CardsWrapper } from '../Dashboard/style';

import FinanceCard from './cards';

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
      
    </MainWrapper>
  );
};

export default Finance;
