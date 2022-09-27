import { UserModel } from "../../modules/auth/data/models/user_model";
import { TCheckoutSubmitType, TPaymentType } from "./types";

export interface IContactUsInputs {
  first_name: string;
  last_name?: string;
  email: string;
  phone?: string;
  message: string;
}

export interface IChangePasswordInputs {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}

export interface IProfileInputs {
  full_name: string;
  username: string;
  email: string;
}

export interface ILoginInputs {
  identifier: string;
  password: string;
}

export interface IRegisterInputs {
  full_name: string;
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
  passwordConfirmation: string;
}

export interface IDonateAmountInput {
  email: string;
  campaign: number;
  amount: number;
}

export interface IAuthContext {
  user: UserModel | null;
  setUser: (user: UserModel | null) => void;
}

export interface IDrawerContext {
  toggleDrawer: () => void;
}

export interface IFooter {
  description: string;
  email: string;
  phone: string;
  address: string;
}

export interface IImagesObj {
  index: number;
  title: string;
  url: string;
}

export interface INavItem {
  icon: JSX.Element;
  title: string;
  route: string;
}

export interface ICreateWalletCheckout {
  name: string;
  description: string;
  amount: number;
  email: string;
  submit_type: TCheckoutSubmitType;
  image_url?: string | null;
  payment_type: TPaymentType;
}

export interface ICreateCheckout {
  name: string;
  description: string;
  amount: number;
  email: string;
  submit_type: TCheckoutSubmitType;
  image_url?: string | null;
  payment_type: TPaymentType;
  campaign: number;
  donor?: number;
}

export interface IWalletTopUp {
  email: string;
  amount: number;
}
