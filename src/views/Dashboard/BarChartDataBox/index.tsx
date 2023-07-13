import React, { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { BoxWrapper, DataWrapper, LeftDataWrapper, CustomTabs, CustomTab } from './style';

const BarCharDataBox = () => {
  const { t } = useTranslation('common');
  const [tabValue, setTabValue] = useState('2');
  const handleTabChange = (event: SyntheticEvent<Element, Event>, newValue: any) => {
    setTabValue(newValue);
  };
  return (
    <BoxWrapper>
      <LeftDataWrapper>
        <DataWrapper>
          <h6>
            419.99 <span>(tCO2e)</span>
          </h6>
          <p>{t('linechart.totalemission')}</p>
        </DataWrapper>
        <DataWrapper>
          <h6>
            25 <span>(tCO2e)</span>
          </h6>
          <p>{t('linechart.averagemission')}</p>
        </DataWrapper>
      </LeftDataWrapper>
      <div>
        <CustomTabs
          value={tabValue}
          onChange={handleTabChange}
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
        >
          <CustomTab label='Week' value='0' />
          <CustomTab label='Month' value='1' />
          <CustomTab label='Year' value='2' />
        </CustomTabs>
      </div>
    </BoxWrapper>
  );
};

export default BarCharDataBox;
