import * as React from "react";
import {
  ILoginProps,
  ILoginState,
  TLoginStateProps,
  TLoginOwnProps,
  TLoginDispatchProps,
  TLoginFormData
} from "./Login.types";
import UnauthorizedLayout from "../../layouts/UnauthorizedLayout/UnauthorizedLayout";
import InputComponent from "../InputField/InputField";
import { loginInputFieldStyle, loginButtonStyle, registrationTagH2, registrationTagP, linkClass } from "./Login.styles";
import SubmitFormButton from "../SubmitFormButton/SubmitFormButton";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { Dispatch } from "redux";
import { incAction } from "../../store/index.reducer";
import { reduxForm, SubmissionError } from "redux-form";
import { formValidator, onlyEmail, passLength, nameLength, surnameLength} from "../../utils/valdators";
import { boundMethod } from "autobind-decorator";
import { Link, BrowserRouter as Router } from "react-router-dom";


const server = new Promise((resolve, reject) => {
  resolve({
    data: {
      user: "Vasya"
    }
  });
});


const passwordValidator = passLength(8);
const nameValidator = nameLength(3);
const surnameValidator = surnameLength(3);


class Register extends React.PureComponent<ILoginProps, ILoginState> {
  public componentDidMount() {
    this.props.onIncrement();
    console.warn(this.props.str);
    console.warn(this.props.count);
  }

  @boundMethod
  private handleSubmit(fields: any) {
    console.warn(fields);
    return new Promise((resolve, reject) => {
      server
        .then(res => {
          resolve(res);
        })
        .catch(e => {
          reject(new SubmissionError({ _error: "Что-то пошло не так" }));
        });
    });
  }
  public render() {
    return (
      <UnauthorizedLayout>
        {this.props.error ? <span>{this.props.error}</span> : null}
        <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <h2 className={registrationTagH2}>Регистрация</h2>
          <InputComponent
            name="nameField"
            classNames={[loginInputFieldStyle]}
            placeholder={"Имя"}
            validate={[nameValidator]}
          />
          <InputComponent
            name="surnameField"
            classNames={[loginInputFieldStyle]}
            placeholder={"Фамилия"}
            validate={[surnameValidator]}
          />
          <InputComponent
            name="loginField"
            classNames={[loginInputFieldStyle]}
            placeholder={"Электронная Почта"}
            validate={[onlyEmail]}
          />
          <InputComponent
            name="passwordField"
            classNames={[loginInputFieldStyle]}
            placeholder={"Введите пароль"}
            type={"password"}
            validate={[passwordValidator]}
          />
          <SubmitFormButton
            title={"Применить и войти"}
            classNames={loginButtonStyle}
          />
          <p className={registrationTagP}>
        Уже зарегистрированы?{" "}
        <Router>
        <Link to={"./Register"} className={linkClass}>
          Вход
        </Link>
      
        </Router>
      </p>
        </form>
      </UnauthorizedLayout>  
    );
  }
}

const connectedToReduxForm = reduxForm<
  TLoginFormData,
  TLoginOwnProps & TLoginStateProps & TLoginDispatchProps
>({
  form: "loginForm",
  validate: formValidator
});

const mapStateToProps: MapStateToProps<TLoginStateProps, TLoginOwnProps> = (
  state: any,
  ownProps: TLoginOwnProps
) => {
  return {
    count: state?.count,
  };
};

const mapDispatchToProps: MapDispatchToProps<
  TLoginDispatchProps,
  TLoginOwnProps
> = (dispatch: Dispatch, ownProps: TLoginOwnProps) => {
  return {
    onIncrement() {
      dispatch(incAction());
    }
  };
};
const ConnectedLogin = connect<
  TLoginStateProps,
  TLoginDispatchProps,
  TLoginOwnProps
>(
  mapStateToProps,
  mapDispatchToProps
)(connectedToReduxForm(Register));

export default ConnectedLogin;
