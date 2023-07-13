import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';

import AuthPageWrapper from '@/components/AuthPageWrapper';
import { useAppDispatch } from '@/redux';
import { verifyEmail } from '@/redux/slices/auth/thunks';

import Verified from './Verified';
import { LoadingContainer } from './style';

const STATE_VERIFIED = 'VERIFIED';
const STATE_NOT_VERIFIED = 'NOT_VERIFIED';

const SetPassword = () => {
  const { t } = useTranslation('common');
  const { query, push }: any = useRouter();
  const dispatch = useAppDispatch();

  const [state, setState] = useState<string | null>(null);

  const verify = async () => {
    const resp: any = await dispatch(verifyEmail(query.token || ''));

    if (resp.error || resp.payload?.error) {
      setState(STATE_NOT_VERIFIED);
      return;
    }

    setState(STATE_VERIFIED);
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <>
      <AuthPageWrapper>
        {!state && (
          <LoadingContainer>
            <CircularProgress color='inherit' size={40} />
          </LoadingContainer>
        )}
        {state === STATE_VERIFIED && (
          <Verified
            title={t('resetPassword.email_verified') || ''}
            mainText={t('resetPassword.email_verified_description') || ''}
            buttonText={t('login.login') || ''}
            buttonOnClick={() => push('/login')}
          />
        )}
        {state === STATE_NOT_VERIFIED && (
          <Verified
            title={t('resetPassword.error_verify_email') || ''}
            mainText={t('resetPassword.error_verify_email_description') || ''}
            buttonText={t('signUp.got_it') || ''}
            buttonOnClick={() => push('/login')}
            error
          />
        )}
      </AuthPageWrapper>
    </>
  );
};

export default SetPassword;
