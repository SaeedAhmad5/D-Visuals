import React from 'react';
import { useTranslation } from 'next-i18next';

import BasicBreadcrumbs from '@/components/BreadCrumb';

import { CustomHeader, Header, MainWrapper } from '../HumanResource/style';

const Finance = () => {
  const { t } = useTranslation('common');

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
    </MainWrapper>
  );
};

export default Finance;
