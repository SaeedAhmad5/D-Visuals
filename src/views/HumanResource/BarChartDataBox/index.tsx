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
            Employee Service <span>(record)</span>
          </h6>
          <p>{t('hr.employeeService')}</p>
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
