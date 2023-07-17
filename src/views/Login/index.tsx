import React, { useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import AuthPageWrapper from '@/components/AuthPageWrapper';
import { useSnack } from '@/hooks/snack';

import Verified from '../SetPassword/Verified';

import { TextContainer, BottomTextContainer } from './styles';
import LoginForm, { Values } from './LoginForm';

const Login = () => {
  const { t } = useTranslation('common');
  const { push } = useRouter();

  const [emailNotVerified, setEmailNotVerified] = useState(false);

  /* eslint-disable */
  // useSnack(false);

  const handleSubmit: (values: Values) => Promise<void> = async (values: Values) => {
    console.log(values);
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
              <h4 style={{ textAlign: 'center', fontSize: '25px' }}>{t('login.login')}</h4>
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
