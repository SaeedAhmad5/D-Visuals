import * as yup from 'yup';

export const validationScheme = yup.object().shape({
  email: yup.string().email('invalid_email').required('email_required'),
  password: yup.string().required('password_required'),
});
