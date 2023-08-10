import { createAsyncThunk } from '@reduxjs/toolkit';

import HumanResourceService from '@/services/humanResourceService';

export const fetchAllHrDataThunk = createAsyncThunk('events/fetchAllEvents', async () => {
  const resp = await HumanResourceService.fetchAllHrData();
  return resp;
});
