import AuthService from '@/services/AuthService';

export const authConfig = {
  region: process.env.NEXT_PUBLIC_COGNITO_APP_REGION || '',
  userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || '',
  userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID || '',
  ssr: true,
  cookieStorage: {
    domain: process.env.NEXT_PUBLIC_FRONTEND_HOST_URL,
    secure: false,
    path: '/',
  },
};

export const configureAmplify = (auth?: any) => {
  AuthService.configureAuth(auth, authConfig);
};
