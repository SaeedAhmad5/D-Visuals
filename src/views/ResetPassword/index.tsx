import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';

import AuthPageWrapper from '@/components/AuthPageWrapper';
import { useAppDispatch, useAppSelector } from '@/redux';
import { selectIsAuthError, selectIsAuthLoading } from '@/redux/slices/auth/selectors';
import { changePassword, verifyRecoveryEmail } from '@/redux/slices/auth/thunks';
import { useSnack } from '@/hooks/snack';

import { TextContainer } from '../Login/styles';
import SetPasswordForm, { SetPasswordValues } from '../SetPassword/SetPasswordForm';
import { LoadingContainer } from '../SetPassword/style';
import Verified from '../SetPassword/Verified';

const STATUS_VERIFIED = 'VERIFIED';
const STATUS_ERROR = 'ERROR';

const ReSetPassword = () => {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectIsAuthLoading);
  const { query: params, push }: any = useRouter();

  const [status, setStatus] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const { showSnack } = useSnack(selectIsAuthError);

  const verifyToken = async () => {
    const resp: any = await dispatch(verifyRecoveryEmail(params.token || ''));

    if (resp.error || resp.payload.error) {
      setStatus(STATUS_ERROR);
      return;
    }

    setStatus(STATUS_VERIFIED);
    setEmail(resp.payload?.user?.email || '');
  };

  useEffect(() => {
    verifyToken();
  }, []);

  const handleSubmit = async (values: SetPasswordValues) => {
    const resp: any = await dispatch(changePassword({ email, password: values.password }));

    if (!resp.error && !resp.payload.error) {
      showSnack({
        type: 'success',
        message: 'resetPassword.password_changed',
      });
      push('/login');
    }
  };

  if (loading) {
    return (
      <AuthPageWrapper>
        <LoadingContainer>
          <CircularProgress size={40} color='inherit' />
        </LoadingContainer>
      </AuthPageWrapper>
    );
  }

  return (
    <>
      <AuthPageWrapper>
        {status === STATUS_VERIFIED && (
          <>
            <TextContainer>
              <h4>{t('resetPassword.header')}</h4>
              <p> {t('resetPassword.description')}</p>
            </TextContainer>
            <SetPasswordForm hideEmail onSubmitHandler={handleSubmit} />
          </>
        )}
        {status === STATUS_ERROR && (
          <Verified
            title={t('resetPassword.error') || ''}
            mainText={t('resetPassword.error_description') || ''}
            buttonText={t('signUp.got_it')}
            buttonOnClick={() => push('/')}
            error
          />
        )}
      </AuthPageWrapper>
    </>
  );
};

export default ReSetPassword;
