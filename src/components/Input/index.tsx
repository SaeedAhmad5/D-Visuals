import React, { InputHTMLAttributes, ReactNode, useState } from 'react';
import Image from 'next/legacy/image';

import EZError from '../Error';

import {
  BeforeContainer,
  Container,
  Input,
  InputContainer,
  Label,
  LabelContainer,
  PasswordEyeContainer,
} from './styles';

interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | undefined | null;
  error?: boolean;
  feedback?: string;
  afterLabelLink?: ReactNode;
  beforeEl?: ReactNode;
  dataTestId?: string;
  afterIcon?: string;
  placeholder?: string;
  color?: any;
}

const TextInput = ({
  label,
  dataTestId,
  required,
  type,
  error,
  feedback,
  afterLabelLink,
  beforeEl,
  afterIcon,
  placeholder,
  color,
  ...rest
}: PropTypes) => {
  const [passwordType, setPasswordType] = useState<'password' | 'text'>('password');

  const isBefore = !!beforeEl;

  return (
    <Container>
      <LabelContainer>
        <Label>
          {label} {required && <span>*</span>}
        </Label>
        {afterLabelLink && afterLabelLink}
      </LabelContainer>
      <InputContainer $error={error} $preventLeftPadding={isBefore}>
        {beforeEl && <BeforeContainer>{beforeEl}</BeforeContainer>}
        <Input
          color={color}
          data-testid={dataTestId}
          {...rest}
          type={type === 'password' ? passwordType : type}
          placeholder={placeholder}
        ></Input>
        {(type === 'password' || !!afterIcon) && (
          <PasswordEyeContainer
            data-testid='show-hide-button'
            onClick={() => setPasswordType(prev => (prev === 'password' ? 'text' : 'password'))}
          >
            <Image
              alt='eye'
              src={afterIcon ? afterIcon : passwordType === 'password' ? '/login/eye.svg' : '/login/eye-closed.png'}
              layout='fill'
              objectFit='contain'
            />
          </PasswordEyeContainer>
        )}
      </InputContainer>
      {error && feedback && <EZError>{feedback}</EZError>}
    </Container>
  );
};

export default TextInput;
