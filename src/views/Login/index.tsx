import React, { useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import AuthPageWrapper from '@/components/AuthPageWrapper';
import { login } from '@/redux/slices/auth/thunks';
import { useAppDispatch } from '@/redux';
import { selectIsAuthError } from '@/redux/slices/auth/selectors';
import { useSnack } from '@/hooks/snack';

import Verified from '../SetPassword/Verified';

import { TextContainer, BottomTextContainer } from './styles';
import LoginForm, { Values } from './LoginForm';

const Login = () => {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const [emailNotVerified, setEmailNotVerified] = useState(false);

  useSnack(selectIsAuthError);

  /* eslint-disable */
  const handleSubmit: (values: Values) => Promise<void> = async (values: Values) => {
    const resp: any = await dispatch(
      login({
        username: values.email,
        password: values.password,
      })
    );

    if (resp.payload?.message === 'EMAIL_NOT_VERIFIED') {
      setEmailNotVerified(true);
      return;
    }

    if (!resp?.error && !resp?.payload?.error && !resp?.payload?.payload?.error) {
      push('/dashboard');
    }
  };

  return (
    <>
      <Head>
        <title>{t('login.login')}</title>
      </Head>
      <AuthPageWrapper>
        {emailNotVerified ? (
          <Verified
            title={t('signUp.signup_success_title') || ''}
            mainText={t('login.email_sent') || ''}
            buttonText={t('signUp.got_it') || ''}
            buttonOnClick={() => setEmailNotVerified(false)}
          />
        ) : (
          <>
            <TextContainer>
              <h4>{t('login.login')}</h4>
              <p>{`${t('login.description')}`}</p>
            </TextContainer>
            <LoginForm onSubmitHandler={handleSubmit} />
            <BottomTextContainer></BottomTextContainer>
          </>
        )}
      </AuthPageWrapper>
    </>
  );
};

export default Login;
