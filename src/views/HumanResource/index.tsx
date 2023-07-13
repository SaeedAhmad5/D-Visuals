import React from 'react';
import { useTranslation } from 'next-i18next';

import BasicBreadcrumbs from '@/components/BreadCrumb';

import { MainWrapper, CustomHeader, Header } from './style';

export interface ColumnDataInterface {
  id: string;
  label: string;
  numeric?: boolean;
  isStatus?: boolean;
}

const HumanResource = () => {
  const { t } = useTranslation('common');

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
    </MainWrapper>
  );
};

export default HumanResource;
