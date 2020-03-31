import { BaseFieldProps, WrappedFieldProps } from "redux-form";

export interface IInputFieldProps extends Partial<WrappedFieldProps> {
  classNames?: string[];
  placeholder?: string;
  type?: "password" | "input";
}
export interface IInputFieldState {
  type: "password" | "input";
}
