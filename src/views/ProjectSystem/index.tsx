import React from 'react';
import { useTranslation } from 'next-i18next';

import BasicBreadcrumbs from '@/components/BreadCrumb';
import {
  BagasseStationCount,
  HydroStationCount,
  NuclearStationCount,
  SolarStationCount,
  StationUnderConstructionCount,
  ThermalStationCount,
  TotalStationCount,
  WindStationCount,
} from '@/constants/projectSystem';

import { CardsWrapper, CustomHeader, Header, MainWrapper } from '../HumanResource/style';
import HRCard from '../HumanResource/Cards';
import { ChartWrapper } from '../Dashboard/style';

const ProjectSystem: any = () => {
  const { t } = useTranslation('common');

  return (
    <MainWrapper>
      <Header>
        <BasicBreadcrumbs
          path='/project_system'
          firstLinkText={t('projectSystem.breadcrumbFirstLinkText')}
          secondText={t('projectSystem.breadcrumbSecondText')}
        />
      </Header>
      <CustomHeader>{t('projectSystem.header')}</CustomHeader>
      <CardsWrapper>
        <HRCard data={TotalStationCount} projectSystem />
        <HRCard data={ThermalStationCount} projectSystem />
        <HRCard data={HydroStationCount} projectSystem />
        <HRCard data={WindStationCount} projectSystem />
        <HRCard data={SolarStationCount} projectSystem />
        <HRCard data={BagasseStationCount} projectSystem />
        <HRCard data={NuclearStationCount} projectSystem />
        <HRCard data={StationUnderConstructionCount} underConstruction />
      </CardsWrapper>
      <ChartWrapper></ChartWrapper>
    </MainWrapper>
  );
};

export default ProjectSystem;
