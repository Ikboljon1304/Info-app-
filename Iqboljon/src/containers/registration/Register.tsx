import React from "react";
import { linkClass } from "./register.styles";
import Warning from "./ErrorLayer";
import { NavLink, BrowserRouter as Router } from "react-router-dom";  
import { boundMethod } from "autobind-decorator";
import { SubmissionError, reduxForm } from "redux-form";
import UnauthorizedLayout from "../../layouts/UnauthorizedLayout/UnauthorizedLayout";
import { ILoginProps,
ILoginState,
TLoginStateProps,
TLoginOwnProps,
TLoginDispatchProps,
TLoginFormData 
} from "../Login/Login.types";
import InputComponent from "../InputField/InputField";
import { loginInputFieldStyle, loginButtonStyle, registrationTagP, } from "../Login/Login.styles";
import SubmitFormButton from "../SubmitFormButton/SubmitFormButton";
import { formValidator } from "../../utils/valdators";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { Dispatch } from "redux";
import { incAction } from "../../store/index.reducer";




const server = new Promise((resolve, reject) => {
  resolve({
    data: {
      user: " "
    }
  });
});





class Login extends React.PureComponent<ILoginProps, ILoginState> {
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
          reject(new SubmissionError({_error: "Что-то пошло не так"}));
        });
    });
  }

  public render() {
    return (
      <UnauthorizedLayout>
          {this.props.error ? <span>{this.props.error}</span> : null}
          <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            <InputComponent
              name="loginField"
              classNames={[loginInputFieldStyle]}
              placeholder={"Электронная Почта"}
            />
            <InputComponent
              name="passwordField"
              classNames={[loginInputFieldStyle]}
              placeholder={"Введите пароль"}
              type={"password"}
            />
            <SubmitFormButton
              title={"Войти в систему"}
              classNames={loginButtonStyle}
            />
            <p className={registrationTagP}>
          Уже зарегистрированы?{" "}
          <Router>
          <NavLink to={"/Login"} className={linkClass}>
            Вход
          </NavLink>
          </Router>
        </p>
        <Warning msg="Сообщение об ошибки" />
          </form>
        </UnauthorizedLayout> 
    );
  }
}

const connectedToReduxForm = reduxForm<
TLoginFormData,
TLoginOwnProps & TLoginStateProps & TLoginDispatchProps>({
  form: "RegisterForm",
  validate: formValidator
});

const mapStateToProps: MapStateToProps<TLoginStateProps, TLoginOwnProps> =(
  state: any,
  OwnProps: TLoginOwnProps
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
const ConnectedRegister = connect<
  TLoginStateProps,
  TLoginDispatchProps,
  TLoginOwnProps
>(
  mapStateToProps,
  mapDispatchToProps
)(connectedToReduxForm(Login));





export default ConnectedRegister;