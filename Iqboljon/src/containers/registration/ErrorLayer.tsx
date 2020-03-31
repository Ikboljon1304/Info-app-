import React from "react";
import WarningLogo from "./warning";
import { errorClass, imgErrorClass } from "./register.styles";

interface IErrorProps {
  msg: string;
}

const ErrorLayer: React.FC<IErrorProps> = props => {
  return (
    <>
      <div className={errorClass}>
        <WarningLogo className={imgErrorClass} />
        {props.msg}
      </div>
    </>
  );
};
export default ErrorLayer;