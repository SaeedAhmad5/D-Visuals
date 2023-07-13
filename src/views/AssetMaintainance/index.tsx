import React from 'react';
import { useTranslation } from 'next-i18next';

import BasicBreadcrumbs from '@/components/BreadCrumb';

import { CustomHeader, Header, MainWrapper } from '../HumanResource/style';

const AssetMaintainence: any = () => {
  const { t } = useTranslation('common');

  return (
    <MainWrapper>
      <Header>
        <BasicBreadcrumbs
          path='/asset_maintainance'
          firstLinkText={t('assetMaintainance.breadcrumbFirstLinkText')}
          secondText={t('assetMaintainance.breadcrumbSecondText')}
        />
      </Header>
      <CustomHeader>{t('assetMaintainance.header')}</CustomHeader>
    </MainWrapper>
  );
};

export default AssetMaintainence;
