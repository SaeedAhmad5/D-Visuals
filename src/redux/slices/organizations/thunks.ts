import { createAsyncThunk } from '@reduxjs/toolkit';

import OrganizationService from '@/services/OrganizationService';

export const signUpOrganization = createAsyncThunk('organizations/signUpOrganization', async (data: any) => {
  const resp = await OrganizationService.signUpOrganization(data);
  return resp;
});
