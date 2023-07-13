import { createSlice } from '@reduxjs/toolkit';

import { USER_STATE_INIT } from '@/constants/auth';
import { apiReducerBuilder } from '@/utils/apiReducerBuilder';
import { User } from '@/types/auth';

import { changePassword, fetchCurrentUser, login, recoverAccount, verifyEmail, verifyRecoveryEmail } from './thunks';

export type StateUser = User | typeof USER_STATE_INIT | null;

export interface AuthState {
  error: string | null;
  isLoading: boolean;
  user: StateUser;
}

const initialState: AuthState = {
  isLoading: false,
  error: null,
  user: USER_STATE_INIT,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCurrentUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchCurrentUser.rejected, state => {
      state.isLoading = false;
      state.user = null;
    });
    apiReducerBuilder(builder, login);
    apiReducerBuilder(builder, recoverAccount);
    apiReducerBuilder(builder, verifyEmail);
    apiReducerBuilder(builder, verifyRecoveryEmail);
    apiReducerBuilder(builder, changePassword);
  },
});

export default slice.reducer;
