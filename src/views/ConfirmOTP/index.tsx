import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import AuthPageWrapper from '@/components/AuthPageWrapper';

import { BottomTextContainer, TextContainer, PhoneNumberContainer } from './style';
import ConsfirmOtpForm from './ConfirmOTPForm';

const ConfirmOTP = () => {
  const { t } = useTranslation('common');

  const handleSubmit: () => Promise<void> = () => {
    // TODO: Login - Integrate login API once ready
    return new Promise(res => res());
  };

  return (
    <>
      <Head>
        <title>{t('confirmOTP.confirmOTP')}</title>
      </Head>
      <AuthPageWrapper>
        <TextContainer>
          <h4>{t('confirmOTP.heading')}</h4>
          <p>{t('confirmOTP.description')}</p>
        </TextContainer>
        <PhoneNumberContainer>
          <span>1 (659) 599-6708</span>
          <button>{t('confirmOTP.edit_phone')}</button>
        </PhoneNumberContainer>
        <ConsfirmOtpForm onSubmitHandler={handleSubmit} />
        <BottomTextContainer>
          <button>{t('confirmOTP.resend_code')}</button>
          <span>00:28</span>
        </BottomTextContainer>
      </AuthPageWrapper>
    </>
  );
};

export default ConfirmOTP;
