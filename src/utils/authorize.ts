import { withSSRContext } from 'aws-amplify';
import {
  USER_ROLE_APP_ADMIIN,
  USER_ROLE_ORGANIZATION_ADMIIN,
  USER_ROLE_ORGANIZATION_MANAGER,
  USER_ROLE_ORGANIZATION_USER,
} from '@EventZeroHuddle/ts-constants/dist/account';

import AuthService from '@/services/AuthService';

import { configureAmplify } from '../common/awsConfig';

const checkRole = {
  [USER_ROLE_APP_ADMIIN]: (role: string) => {
    if (role === USER_ROLE_APP_ADMIIN) {
      return true;
    }
    return false;
  },
  [USER_ROLE_ORGANIZATION_ADMIIN]: (role: string) => {
    if (role === USER_ROLE_APP_ADMIIN || role === USER_ROLE_ORGANIZATION_ADMIIN) {
      return true;
    }
    return false;
  },
  [USER_ROLE_ORGANIZATION_MANAGER]: (role: string) => {
    if (
      role === USER_ROLE_APP_ADMIIN ||
      role === USER_ROLE_ORGANIZATION_ADMIIN ||
      role === USER_ROLE_ORGANIZATION_MANAGER
    ) {
      return true;
    }
    return false;
  },
  [USER_ROLE_ORGANIZATION_USER]: (role: string) => {
    if (role) {
      return true;
    }
    return false;
  },
};

export const authorizeUser = async ({ req }: any) => {
  const { Auth } = withSSRContext({ req });
  configureAmplify(Auth);
  const cognitoUser = await AuthService.getCognitoUserSession();
  const usernameSet = !!cognitoUser?.idToken?.payload?.email;
  if (usernameSet) {
    return true;
  } else {
    return null;
  }
};

export const authorizeUserWithRoleCheck = async ({ req, role }: any) => {
  const { Auth } = withSSRContext({ req });
  configureAmplify(Auth);
  const cognitoUser = await AuthService.getCognitoUserSession();
  const usernameSet = !!cognitoUser?.idToken?.payload?.preferred_username;
  if (usernameSet) {
    return checkRole[cognitoUser.idToken.payload['custom:role']](role);
  } else {
    return null;
  }
};
