import { AlertColor } from '@mui/material';
import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers, createSlice } from '@reduxjs/toolkit';

export type SnackState = {
  open: boolean;
  type: AlertColor;
  message: string;
  title: string;
  duration: number;
};

export const initialState: SnackState = {
  open: false,
  type: 'success',
  message: '',
  title: '',
  duration: 0,
};

export const reducers: ValidateSliceCaseReducers<SnackState, SliceCaseReducers<SnackState>> = {
  showSnack: {
    reducer: (_, action: PayloadAction<SnackState>) => action.payload,
    prepare: ({
      type,
      message,
      title,
      action,
      duration,
    }: {
      type: string;
      message: string;
      title: string;
      action: string;
      duration: number;
    }) => ({
      payload: {
        open: true,
        type,
        message,
        title,
        action,
        duration,
      },
    }),
  },
  closeSnack: () => initialState,
};

export const slice = createSlice({
  name: 'snack',
  initialState,
  reducers: {
    ...reducers,
  },
});

export const { showSnack, closeSnack } = slice.actions;

export default slice.reducer;
