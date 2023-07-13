import { createEntityAdapter, createSlice, EntityState } from '@reduxjs/toolkit';

import { apiReducerBuilder } from '@/utils/apiReducerBuilder';
import { Organization } from '@/types/organizations';

import { signUpOrganization } from './thunks';

export interface OrganizationState extends EntityState<Organization> {
  error: string | null;
  isLoading: boolean;
}

export const organizationAdapter = createEntityAdapter<Organization>();

const initialState = organizationAdapter.getInitialState({
  isLoading: false,
  error: null,
});

const slice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    apiReducerBuilder(builder, signUpOrganization);
  },
});

export default slice.reducer;
