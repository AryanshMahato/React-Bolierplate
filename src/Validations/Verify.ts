import * as yup from 'yup';

export default yup.object({
  password: yup
    .string()
    .min(5, 'Password must have at least 5 characters')
    .required('Password is Required'),
});
