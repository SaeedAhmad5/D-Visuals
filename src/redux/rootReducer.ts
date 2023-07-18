import { combineReducers } from 'redux';

import snack, { SnackState } from './slices/snack/slice';

export interface RootState {
  snack: SnackState;
}

const appReducer = combineReducers({
  snack,
});

export default appReducer;
