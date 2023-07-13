import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import AuthPageWrapper from '@/components/AuthPageWrapper';
import { useAppDispatch } from '@/redux';
import { recoverAccount } from '@/redux/slices/auth/thunks';
import { selectIsAuthError } from '@/redux/slices/auth/selectors';
import { useSnack } from '@/hooks/snack';

import { TextContainer } from '../Login/styles';
import Verified from '../SetPassword/Verified';

import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPassword = () => {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const [success, setSuccess] = useState(false);

  useSnack(selectIsAuthError);

  const handleSubmit = async (values: any) => {
    const resp: any = await dispatch(recoverAccount(values.email));

    if (!resp.error && !resp.payload.error) {
      setSuccess(true);
    }
  };

  return (
    <>
      <AuthPageWrapper>
        {success ? (
          <Verified
            title={t('signUp.signup_success_title') || ''}
            mainText={t('forgotPassword.email_sent')}
            buttonText={t('signUp.got_it')}
            buttonOnClick={() => push('/login')}
          />
        ) : (
          <>
            <TextContainer>
              <h4>{t('forgotPassword.header')}</h4>
              <p>{t('forgotPassword.description')}</p>
            </TextContainer>
            <ForgotPasswordForm onSubmitHandler={handleSubmit} />
          </>
        )}
      </AuthPageWrapper>
    </>
  );
};

export default ForgotPassword;
