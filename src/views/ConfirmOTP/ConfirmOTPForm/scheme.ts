import * as yup from 'yup';

export const validationScheme = yup.object().shape({
  confirmCode: yup.string()
    .required('verification_error')
    .min(4, 'verification_error_length')
    .max(4,'verification_error_length'),
});
