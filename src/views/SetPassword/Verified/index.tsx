import React, { MouseEventHandler } from 'react';
import Image from 'next/legacy/image';
import { useTranslation } from 'next-i18next';

import Button from '@/components/Button';

import { VerifyImage, StyledTextContainer, OuterWrapper } from './style';

const Verified = ({
  mainText,
  buttonText,
  title,
  buttonOnClick,
  error,
}: {
  title?: string;
  mainText: string;
  buttonText: string;
  buttonOnClick: MouseEventHandler<HTMLButtonElement>;
  error?: boolean;
}) => {
  const { t } = useTranslation('common');

  return (
    <OuterWrapper>
      <VerifyImage>
        <Image
          alt='verify_email'
          src={error ? '/common/error.svg' : '/login/verifyemail.svg'}
          layout='fill'
          objectFit='contain'
        />
      </VerifyImage>
      <StyledTextContainer>
        {title && <h2>{title}</h2>}
        <h4>{mainText || t('setPassword.verified')}</h4>
      </StyledTextContainer>
      <Button onClick={buttonOnClick || null} dataTestId='submit-button'>
        {buttonText || t('setPassword.setpassword')}
      </Button>
    </OuterWrapper>
  );
};

export default Verified;
