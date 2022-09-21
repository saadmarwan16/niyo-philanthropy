import { AuthModel } from "../../modules/auth/data/models/AuthModel";

export interface IContactUsInputs {
  first_name: string;
  last_name?: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ILoginInputs {
  identifier: string;
  password: string;
  remember_me: boolean;
}

export interface IRegisterInputs {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface IForgotPasswordInputs {
  email: string;
}

export interface IResetPasswordInputs {
  password: string;
  confirm_password: string;
}

export interface IDonateAmountInput {
  amount: number;
}

export interface IAuthContext {
  user: AuthModel | null;
  setUser: (user: AuthModel | null) => void;
}

export interface IFooter {
  description: string;
  email: string;
  phone: string;
  address: string;
}
