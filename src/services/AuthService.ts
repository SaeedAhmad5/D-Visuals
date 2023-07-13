import { Auth as CognitoAuth, Amplify } from 'aws-amplify';
import axios from 'axios';

import { AUTHORIZATION_TYPE } from '@/constants/auth';
import { BASE_API_URL } from '@/constants/api';

const BASE_AUTH_URL = `${BASE_API_URL}/api/v1/auth`;

class AuthService {
  static Auth: typeof CognitoAuth;
  static Amplify: typeof Amplify;

  static configureAuth(
    Auth: typeof CognitoAuth,
    {
      region,
      userPoolId,
      userPoolWebClientId,
      ssr = false,
      cookieStorage,
    }: {
      region: string;
      userPoolId: string;
      userPoolWebClientId: string;
      ssr: boolean;
      cookieStorage: any;
    }
  ) {
    this.Auth = Auth || CognitoAuth;
    this.Amplify = Amplify;
    this.Amplify.configure({
      Auth: {
        region: region,
        userPoolId: userPoolId,
        userPoolWebClientId: userPoolWebClientId,
        cookieStorage,
      },
      ssr: ssr,
    });
  }

  static async authenticateUser({ username, password }: { username: string; password: string }) {
    const user = await this.Auth?.signIn(username, password);
    return { accessToken: user?.signInUserSession?.accessToken?.jwtToken, attributes: user?.attributes };
  }

  static async getCognitoUser() {
    try {
      const user = await this.Auth.currentAuthenticatedUser();
      return user;
    } catch {
      return null;
    }
  }

  static async getCognitoUserSession() {
    try {
      let userSession = (await this.Auth.currentAuthenticatedUser()).signInUserSession;
      const {
        payload: { exp },
      } = userSession.accessToken;
      const currentDate: any = new Date();
      const currentTimeSeconds = Math.round(currentDate / 1000);
      const tokenExpiry = exp - 60;
      if (tokenExpiry < currentTimeSeconds) {
        userSession = await this.Auth.currentSession();
      }
      return userSession;
    } catch (e) {
      return null;
    }
  }

  static setAxiosInterceptors(logoutCallback: Function, token = null) {
    axios.interceptors.request.clear();
    axios.interceptors.request.use(async config => {
      if (this.Auth) {
        const cognitoUserSession = await this.getCognitoUserSession();
        if (!cognitoUserSession) {
          if (logoutCallback) {
            logoutCallback();
          }
          return config;
        }
        const { jwtToken } = cognitoUserSession.accessToken;
        token = jwtToken;
      }
      config.headers.authorization = `${AUTHORIZATION_TYPE} ${token}`;
      return config;
    });
  }

  static async clearInterceptors() {
    const cognitoUser = await this.getCognitoUserSession();
    if (!cognitoUser) {
      axios.interceptors.request.clear();
    }
  }

  static async logout() {
    await this.Auth.signOut();
    this.clearInterceptors();
  }

  static async fetchProfile() {
    const resp = await axios.get(`${BASE_AUTH_URL}/user/me`);
    return resp.data;
  }

  static async resendVerificationEmail(email: string) {
    const resp = await axios.post(`${BASE_AUTH_URL}/public/resend-verification-email`, { email });
    return resp.data;
  }

  static async handleRecoverAccount(email: string) {
    const resp = await axios.post(`${BASE_AUTH_URL}/public/recover-account/`, { email });
    return resp.data;
  }

  static async verifyRecoveryEmail(token: string) {
    const resp = await axios.get(`${BASE_AUTH_URL}/public/pre-reset-password/${token}`);
    return resp.data;
  }

  static async changePassword(email: string, password: string) {
    const resp = await axios.put(`${BASE_AUTH_URL}/public/reset-password`, { email, password });
    return resp.data;
  }

  static async verifyEmail(token: string) {
    const resp = await axios.get(`${BASE_AUTH_URL}/public/verification-email/${token}`);
    return resp.data;
  }
}

export default AuthService;
