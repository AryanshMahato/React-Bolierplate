import * as yup from 'yup';

export default yup.object({
  email: yup.string().email('Not a valid Email').required('Email is Required'),
  password: yup
    .string()
    .min(5, 'Password must have at least 5 characters')
    .required('Password is Required'),
});
