export interface User {
  name: string;
  email: string;
  cartId: string;
}

export interface UserSignUpValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export type SignUpSubmitFunction = (values: UserSignUpValues) => void;
