import * as yup from 'yup';

export default yup.object({
  name: yup
    .string()
    .min(3, 'name must have at least 3 characters')
    .required('name is Required'),
  password: yup
    .string()
    .min(5, 'Password must have at least 5 characters')
    .required('Password is Required'),
});
