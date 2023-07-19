import React from 'react';
import { useTranslation } from 'next-i18next';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PeopleIcon from '@mui/icons-material/People';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

import BasicBreadcrumbs from '@/components/BreadCrumb';

import { MainWrapper, CustomHeader, Header, CardsWrapper } from './style';
import HRCard from './Cards';

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
    </MainWrapper>
  );
};

export default HumanResource;
