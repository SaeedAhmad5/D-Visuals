import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useFormik } from 'formik';

import TextInput from '@/components/Input';
import Button from '@/components/Button';
import { selectIsAuthLoading } from '@/redux/slices/auth/selectors';
import { useAppSelector } from '@/redux';

import { FormContainer, LoginButtonWrapper } from './styles';
import { validationScheme } from './scheme';

/* eslint-disable */
interface PropTypes {
  onSubmitHandler: (values: Values) => Promise<void>;
}

export interface Values {
  email: string;
  password: string;
}

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmitHandler }: PropTypes) => {
  const { t } = useTranslation('common');

  const loading = useAppSelector(selectIsAuthLoading);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: validationScheme,
    onSubmit: onSubmitHandler,
    validateOnBlur: true,
    validateOnChange: true,
  });

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextInput
        name='email'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        error={!!(touched.email && errors.email)}
        feedback={errors.email}
        label={t('login.email') || ''}
        required
        dataTestId='email-input'
      />
      <TextInput
        label={t('login.password') || ''}
        required
        name='password'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        error={!!(touched.password && errors.password)}
        feedback={errors.password}
        type='password'
        dataTestId='password-input'
        afterLabelLink={<Link href={'/forgot-password'}>{t('login.forgotPassword')}</Link>}
      />
      <LoginButtonWrapper>
        <Button loading={loading} dataTestId='submit-button' type='submit'>
          {t('login.login')}
        </Button>
      </LoginButtonWrapper>
    </FormContainer>
  );
};

export default LoginForm;
