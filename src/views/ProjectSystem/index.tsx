import React from 'react';
import { useTranslation } from 'next-i18next';

import BasicBreadcrumbs from '@/components/BreadCrumb';

import { CustomHeader, Header, MainWrapper } from '../HumanResource/style';

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
    </MainWrapper>
  );
};

export default ProjectSystem;
