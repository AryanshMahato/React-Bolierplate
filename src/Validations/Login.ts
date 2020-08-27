import * as yup from 'yup';

export default yup.object({
  username: yup
    .string()
    .min(3, 'Username must have at least 3 characters')
    .required('Username is Required'),
  password: yup
    .string()
    .min(5, 'Password must have at least 5 characters')
    .required('Password is Required'),
});
