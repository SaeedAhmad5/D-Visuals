import { combineReducers } from 'redux';

import auth, { AuthState } from './slices/auth/slice';
import snack, { SnackState } from './slices/snack/slice';
import organizations, { OrganizationState } from './slices/organizations/slice';

export interface RootState {
  auth: AuthState;
  snack: SnackState;
  organization: OrganizationState;
}

const appReducer = combineReducers({
  auth,
  snack,
  organizations,
});

export default appReducer;
