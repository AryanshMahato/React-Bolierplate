import * as yup from 'yup';

export default yup.object({
  username: yup
    .string()
    .min(3, 'Username must have at least 3 characters')
    .required('Username is Required'),
  email: yup.string().email('Not a valid Email').required('Email is Required'),
  password: yup
    .string()
    .min(5, 'Password must have at least 5 characters')
    .required('Password is Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Password must have at least 5 characters'),
});
