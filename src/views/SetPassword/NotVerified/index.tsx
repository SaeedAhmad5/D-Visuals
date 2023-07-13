import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';

import Button from '@/components/Button';

import { VerifyImage, StyledTextContainer, OuterWrapper } from '../Verified/style';

const NotVerifiedEmail = () => {
  const { t } = useTranslation('common');

  return (
    <OuterWrapper>
      <VerifyImage>
        <Image alt='verify_email' src={'/common/error.svg'} layout='fill' objectFit='contain' />
      </VerifyImage>
      <StyledTextContainer>
        <h4>{t('setPassword.notVerified')}</h4>
      </StyledTextContainer>
      <Button dataTestId='submit-button' type='submit'>
        {t('setPassword.backToHome')}
      </Button>
    </OuterWrapper>
  );
};

export default NotVerifiedEmail;
