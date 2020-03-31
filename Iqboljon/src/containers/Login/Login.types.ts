import { InjectedFormProps } from "redux-form";

export type TLoginStateProps = {
  count: number;
};

export type TLoginDispatchProps = {
  onIncrement(): void;
};

export type TLoginOwnProps = {
  str: string;
};

export type TLoginFormData = {
  loginField: string;
  passwordField: string | number;
  nameField: string;
  surnameField: string;
};
export interface ILoginProps
  extends InjectedFormProps<
      TLoginFormData,
      TLoginOwnProps & TLoginDispatchProps & TLoginStateProps
    >,
    TLoginOwnProps,
    TLoginDispatchProps,
    TLoginStateProps {}
export interface ILoginState {}
