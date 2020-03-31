import * as React from "react";
import { IInputFieldProps, IInputFieldState } from "./InputField.types";
import {
  inputFieldWrapperStyle,
  inputFieldInputStyle,
  passwordFieldIconStyle,
  passwordFieldInputZoneStyle
} from "./InputField.styles";
import { Eye } from "../../components/icons/Eye";
import { boundMethod } from "autobind-decorator";
import { Field, WrappedFieldProps, BaseFieldProps } from "redux-form";

class InputComponent extends React.PureComponent<
  IInputFieldProps,
  IInputFieldState
> {
  public static defaultProps: Partial<IInputFieldProps> = {
    type: "input"
  };

  constructor(props: IInputFieldProps) {
    super(props);

    this.state = {
      type: props.type || "input"
    };
  }

  @boundMethod
  private handleEyeClick(): void {
    const isPasswordType = this.state.type === "password";

    this.setState({ type: isPasswordType ? "input" : "password" });
  }

  private getEyeIcon(): React.ReactNode {
    const { type } = this.props;
    const { type: typeState } = this.state;

    if (type === "password") {
      return (
        <Eye
          key="eye"
          closed={typeState === "password"}
          onClick={this.handleEyeClick}
          style={passwordFieldIconStyle}
        />
      );
    }

    return null;
  }

  public render(): React.ReactNode {
    const { classNames, placeholder, type, input, meta } = this.props;
    const { type: typeState } = this.state;

    const passwordStyleClassName =
      type === "password" ? passwordFieldInputZoneStyle : [];

    const inputWrapperClassNames = [inputFieldWrapperStyle, classNames].join(
      " "
    );
    return (
      <div className={inputWrapperClassNames}>
        <input
          className={[inputFieldInputStyle, passwordStyleClassName].join(" ")}
          placeholder={placeholder}
          type={typeState}
          {...input}
        />
        {this.getEyeIcon()}
        {meta?.touched && meta.invalid ? <span>{meta.error}</span> : null}
      </div>
    );
  }
}

const InputField: React.FC<IInputFieldProps & BaseFieldProps> = props => {
  return <Field name={props.name} component={InputComponent} {...props} />;
};

export default InputField;
