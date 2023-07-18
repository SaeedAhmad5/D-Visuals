import React, { ReactNode } from 'react';
import Image from 'next/legacy/image';

import { AuthImage, AuthPageContainer, ContentContainer, Logo } from './styles';

interface PropTypes {
  children: ReactNode;
}

const AuthPageWrapper = ({ children }: PropTypes) => {
  return (
    <AuthPageContainer>
      <AuthImage $height='100%' $width='100vw' $bottom='0' $left='0'>
        <Image alt='login_background' objectPosition={'bottom'} src={'/login/backgr.jpg'} layout='fill' />
      </AuthImage>

      <Logo>
        <Image alt='NTDC_logo' src={'/Sidebar/NTDC.png'} layout='fill' objectFit='contain' />
      </Logo>
      <ContentContainer>{children}</ContentContainer>
    </AuthPageContainer>
  );
};

export default AuthPageWrapper;
