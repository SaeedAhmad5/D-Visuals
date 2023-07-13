import { createAsyncThunk } from '@reduxjs/toolkit';

import AuthService from '@/services/AuthService';

export const authUser = createAsyncThunk(
  'auth/authUser',
  async ({ username, password }: { username: string; password: string }) => {
    return await AuthService.authenticateUser({
      username,
      password,
    });
  }
);

export const resendVerificationEmail = createAsyncThunk('auth/resendVerificationEmail', async (email: string) => {
  return await AuthService.resendVerificationEmail(email);
});

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }: { username: string; password: string }, { dispatch, rejectWithValue }) => {
    try {
      const response: any = await dispatch(authUser({ username, password }));

      if (response.error) {
        if (response.error.code === 'NotAuthorizedException') {
          rejectWithValue('INVALID_USERNAME_PASSWORD');
        }
        rejectWithValue(response.error);
      }

      if (response.payload === undefined) {
        return rejectWithValue({ message: 'INVALID_USERNAME_PASSWORD' });
      }

      if (!response.payload.attributes.email_verified) {
        await AuthService.logout();
        await AuthService.resendVerificationEmail(response.payload.attributes.email);
        return { message: 'EMAIL_NOT_VERIFIED' };
      }

      return await dispatch(fetchCurrentUser({}));
    } catch (e: any) {
      return rejectWithValue({ message: e.error_description });
    }
  }
);

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async (params?: any) => {
  let cognitoUser;
  if (!params?.accessToken) {
    cognitoUser = await AuthService.getCognitoUser();
    if (!cognitoUser) {
      return null;
    }
  }
  AuthService.setAxiosInterceptors(params?.logoutCallback);
  const userData = await AuthService.fetchProfile();
  return userData;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  return await AuthService.logout();
});

export const verifyEmail = createAsyncThunk('auth/verifyEmail', async (token: string) => {
  return await AuthService.verifyEmail(token);
});

export const verifyRecoveryEmail = createAsyncThunk('auth/verifyRecoveryEmail', async (token: string) => {
  return await AuthService.verifyRecoveryEmail(token);
});

export const recoverAccount = createAsyncThunk('auth/recoverAccount', async (email: string) => {
  return await AuthService.handleRecoverAccount(email);
});

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({ email, password }: { email: string; password: string }) => {
    return await AuthService.changePassword(email, password);
  }
);
