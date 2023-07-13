import { AppRootState } from '@/redux';

export const selectCurrentUser = (state: AppRootState) => state.auth.user;
export const selectIsAuthLoading = (state: AppRootState) => state.auth.isLoading;
export const selectIsAuthError = (state: AppRootState) => state.auth.error;
export const selectCurrentOrganization = (state: any) => state.auth.user?.organization;
