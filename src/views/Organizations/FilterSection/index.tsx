import React from 'react';
import { useTranslation } from 'next-i18next';

import MultipleSelect from '@/components/MultipleSelect';

import { FilterBox, LabelStyled, SearchBox, SelectStyled, StyledSearch } from './styles';

type PropTypes = {
  status: string[];
  location: string[];
  plan: string[];
};

const FilterSection = ({ status, location, plan }: PropTypes) => {
  const { t } = useTranslation('common');

  return (
    <FilterBox>
      <SearchBox>
        <LabelStyled>{t('organization.search')}</LabelStyled>
        <StyledSearch afterIcon={'/login/search.svg'} placeholder={'Search Name here'} color={'white'} />
      </SearchBox>
      <SelectStyled>
        <LabelStyled>{t('organization.status')}</LabelStyled>
        <MultipleSelect data={status} />
      </SelectStyled>
      <SelectStyled>
        <LabelStyled>{t('organization.location')}</LabelStyled>
        <MultipleSelect data={location} />
      </SelectStyled>
      <SelectStyled>
        <LabelStyled>{t('organization.subscription_plan')}</LabelStyled>
        <MultipleSelect data={plan} />
      </SelectStyled>
    </FilterBox>
  );
};

export default FilterSection;
