import * as yup from 'yup';

export const validationScheme = yup.object().shape({
  password: yup.string().min(8).required('password_required'),
  confirmPassword: yup.string().min(8).required('password_required'),
});
