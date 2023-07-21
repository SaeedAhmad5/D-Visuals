import React from 'react';
import { useTranslation } from 'next-i18next';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PeopleIcon from '@mui/icons-material/People';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';

import BasicBreadcrumbs from '@/components/BreadCrumb';
import PieChartData from '@/components/PieChart';
import Barchart from '@/components/BarChart';

import { ChartWrapper, GenericTitle, LineChartWrapper, PieChartWrapper } from '../Dashboard/style';

import { MainWrapper, CustomHeader, Header, CardsWrapper, ChartHead } from './style';
import HRCard from './Cards';
import BarCharDataBox from './BarChartDataBox';

export interface ColumnDataInterface {
  id: string;
  label: string;
  numeric?: boolean;
  isStatus?: boolean;
}

const HumanResource = () => {
  const { t } = useTranslation('common');

  const totalEmployees: any = [
    {
      title: 'Total Emloyees',
      totalno: 859,
      unit: 'Employee',
    },
  ];
  const activeEmployees: any = [
    {
      title: 'Active Emloyees',
      totalno: 500,
      unit: 'Employee',
    },
  ];
  const resignedEmployees: any = [
    {
      title: 'Resigned Emloyees',
      totalno: 200,
      unit: 'Employee',
    },
  ];
  const retiredEmployees: any = [
    {
      title: 'Retired Emloyees',
      totalno: 159,
      unit: 'Employee',
    },
  ];

  type PieChartDataType = {
    name: string;
    value: number;
    dy: number;
    color: string;
  };
  const pieChartData: PieChartDataType[] = [
    { name: 'Male', value: 400, dy: -10, color: '#80CC28' },
    { name: 'Female', value: 300, dy: 20, color: '#DD7596' },
  ];

  const COLORS: string[] = ['#80CC28', '#DD7596'];

  const barChartData: any[] = [
    {
      name: `${t('hr.activeEmployee')}`,
      No: 80,
    },
    {
      name: `${t('hr.retiredEmployee')}`,
      No: 79,
    },
    {
      name: `${t('hr.resignedEmployee')}`,
      No: 60,
    },
    {
      name: `${t('hr.totalEmployee')}`,
      No: 40,
    },
  ];
  return (
    <MainWrapper>
      <Header>
        <BasicBreadcrumbs
          path='/human_resource'
          firstLinkText={t('hr.breadcrumbFirstLinkText')}
          secondText={t('hr.breadcrumbSecondText')}
        />
      </Header>
      <CustomHeader>{t('hr.header')}</CustomHeader>
      <CardsWrapper>
        <HRCard data={totalEmployees} icon={<PeopleIcon />} />
        <HRCard data={activeEmployees} icon={<EmojiPeopleIcon />} />
        <HRCard data={retiredEmployees} icon={<AssistWalkerIcon />} />
        <HRCard data={resignedEmployees} icon={<PersonOffIcon />} />
      </CardsWrapper>
      <ChartWrapper>
        <PieChartWrapper>
          <ChartHead>
            <GenericTitle>{t('hr.pieChartTitle')}</GenericTitle>
            <ManIcon style={{ color: '#80CC28', fontSize: '30px' }} />
            <WomanIcon style={{ color: '#DD7596', position: 'absolute', fontSize: '30px', left: '110px' }} />
          </ChartHead>
          <PieChartData data={pieChartData} colors={COLORS} />
        </PieChartWrapper>
        <LineChartWrapper>
          <GenericTitle>{t('hr.barChartTitle')}</GenericTitle>
          <BarCharDataBox />
          <div
            style={{
              width: '75%',
              height: '100%',
            }}
          >
            <Barchart data={barChartData} />
          </div>
        </LineChartWrapper>
      </ChartWrapper>
    </MainWrapper>
  );
};

export default HumanResource;
