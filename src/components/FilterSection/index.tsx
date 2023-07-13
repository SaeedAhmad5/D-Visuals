import React from 'react';
import { useTranslation } from 'next-i18next';
import { USER_ROLE_APP_ADMIIN } from '@EventZeroHuddle/ts-constants/dist/account';

import MultipleSelect from '@/components/MultipleSelect';
import { useAppSelector } from '@/redux';
import { selectCurrentUser } from '@/redux/slices/auth/selectors';
import { StateUser } from '@/redux/slices/auth/slice';
import { User } from '@/types/auth';
import { selectAllOrganizations } from '@/redux/slices/organizations/selectors';
import { Organization } from '@/types/organizations';

import { SelectStyled, LabelStyled, StyledSearch, FilterBox, SearchBox } from './style';

type PropTypes = {
  status: string[];
  category: string[];
  department: string[];
  dates: string[];
  location: string[];
  isNotNeeded?: boolean;
};

const FilterSection = ({ status, category, department, dates, location, isNotNeeded }: PropTypes) => {
  const { t } = useTranslation('common');

  const currentUser: StateUser = useAppSelector(selectCurrentUser);
  const organizations: Organization[] = useAppSelector(state => selectAllOrganizations(state));

  const user = currentUser as User;

  return (
    user && (
      <FilterBox>
        {!isNotNeeded && (
          <SearchBox>
            <LabelStyled>{t('eventSelect.search')}</LabelStyled>
            <StyledSearch afterIcon={'/login/search.svg'} placeholder={'Search Name here'} color={'white'} />
          </SearchBox>
        )}

        <SelectStyled>
          <LabelStyled>{t('eventSelect.status')}</LabelStyled>
          <MultipleSelect data={status} />
        </SelectStyled>
        <SelectStyled>
          <LabelStyled>{t('eventSelect.category')}</LabelStyled>
          <MultipleSelect data={category} />
        </SelectStyled>
        <SelectStyled>
          <LabelStyled>{t('eventSelect.department')}</LabelStyled>
          <MultipleSelect data={department} disabled />
        </SelectStyled>
        {!isNotNeeded && (
          <SelectStyled>
            <LabelStyled>{t('eventSelect.dates')}</LabelStyled>
            <MultipleSelect data={dates} />
          </SelectStyled>
        )}
        <SelectStyled>
          <LabelStyled>{t('eventSelect.location')}</LabelStyled>
          <MultipleSelect data={location} />
        </SelectStyled>
        {user.role === USER_ROLE_APP_ADMIIN && (
          <SelectStyled>
            <LabelStyled>{t('eventSelect.organizations')}</LabelStyled>
            <MultipleSelect data={organizations?.map(org => org.name)} />
          </SelectStyled>
        )}
      </FilterBox>
    )
  );
};

export default FilterSection;
