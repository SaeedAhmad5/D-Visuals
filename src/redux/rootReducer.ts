import { combineReducers } from 'redux';

import snack, { SnackState } from './slices/snack/slice';
import human_resource, { HrState } from './slices/humanResource/slice';

export interface RootState {
  snack: SnackState;
  human_resource: HrState;
}

const appReducer = combineReducers({
  snack,
  human_resource,
});

export default appReducer;
