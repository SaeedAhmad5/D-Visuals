import React from 'react';
import { useTranslation } from 'next-i18next';

import BasicBreadcrumbs from '@/components/BreadCrumb';

import { CustomHeader, Header, MainWrapper } from '../HumanResource/style';

const Dashboard: any = () => {
  const { t } = useTranslation('common');

  return (
    <MainWrapper>
      <Header>
        <BasicBreadcrumbs
          path='/dashboard'
          firstLinkText={t('dashboard.breadcrumbFirstLink')}
          secondText={t('dashboard.text')}
        />
      </Header>
      <CustomHeader>{t('dashboard.header')}</CustomHeader>
    </MainWrapper>
  );
};

export default Dashboard;
