import { AuthState } from '@/redux/slices/auth/slice';

export const apiReducerBuilder = (builder: any, thunk: any, successCB?: Function) => {
  return builder
    .addCase(thunk.rejected, (state: AuthState, action: any) => {
      state.error = action.payload?.message || action.payload?.error?.message || action.error?.message;
      state.isLoading = false;
    })
    .addCase(thunk.fulfilled, (state: AuthState, action: any) => {
      state.error = null;
      state.isLoading = false;
      if (successCB) {
        successCB(state, action);
      }
    })
    .addCase(thunk.pending, (state: AuthState) => {
      state.error = null;
      state.isLoading = true;
    });
};
