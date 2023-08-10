import { AppRootState } from '@/redux';
import { categorizeEmployeesByAgeBands } from '@/constants/humanResource';

import { HrAdapter } from './slice';

export const { selectAll: selectAllHrData, selectById: selectHrDataById } = HrAdapter.getSelectors(
  (state: AppRootState) => state.human_resource
);

export const selectHrDataError = (state: AppRootState) => state.human_resource.error;
export const selectHrDataLoading = (state: AppRootState) => state.human_resource.isLoading;

export const selectFilteredHrData = (attritionFilter: string) => (state: AppRootState) => {
  const allData = selectAllHrData(state);
  return attritionFilter === 'All' ? allData : allData.filter(item => item.Attrition === attritionFilter);
};
export const selectFilteredGenderData = (genderFilter: string) => (state: AppRootState) => {
  const allData = selectAllHrData(state);
  return genderFilter === 'All' ? allData : allData.filter(item => item.Gender === genderFilter);
};
export const selectFilteredRetiredEmployeeData = (RetiredEmployee: string) => (state: AppRootState) => {
  const allData = selectAllHrData(state);
  return RetiredEmployee === 'All' ? allData : allData.filter(item => item.CF_current_Employee === RetiredEmployee);
};

export const selectAgeBandData = (state: AppRootState) => {
  const allData = HrAdapter.getSelectors((state: AppRootState) => state.human_resource).selectAll(state);
  return categorizeEmployeesByAgeBands(allData);
};
