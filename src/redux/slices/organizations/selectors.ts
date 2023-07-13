import { AppRootState } from '@/redux';

import { organizationAdapter } from './slice';

export const { selectAll: selectAllOrganizations, selectById: selectOrganizationById } =
  organizationAdapter.getSelectors((state: AppRootState) => state.organizations);

export const selectOrganizationError = (state: AppRootState) => state.organizations.error;
export const selectOrganizationLoading = (state: AppRootState) => state.organizations.isLoading;
