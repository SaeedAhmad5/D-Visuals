import React from 'react';
import { useTranslation } from 'next-i18next';

import BasicBreadcrumbs from '@/components/BreadCrumb';

import { CustomHeader, Header, MainWrapper } from '../HumanResource/style';

const Inventory: any = () => {
  const { t } = useTranslation('common');

  return (
    <MainWrapper>
      <Header>
        <BasicBreadcrumbs
          path='/inventory'
          firstLinkText={t('inventory.FirstLinkText')}
          secondText={t('inventory.breadcrumbFirstLinkText')}
        />
      </Header>
      <CustomHeader>{t('inventory.header')}</CustomHeader>
    </MainWrapper>
  );
};

export default Inventory;
