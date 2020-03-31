import React, { Fragment, useState } from "react";
import {
  middleLine,
  middleLineTagH2,
  button,
  userLayer,
  divInputs,
  divLabels,
  userLayerLabels,
  userLayerInputs, 
  body
} from "./Profile.styles";
import MyButton from "../registration/button";
import { appWrapper,
  navLayer,
  navTagP } from "./authorizated.styles";
import Sidebar from "./Sidebar";
import Toggle from "./Toggle";
import { whole } from "../Sidebar/Sidebar.styles"; 



interface IProfileProps {}



 
const Profile: React.FC<IProfileProps> = props => {

const [sidebarOpen, setSidebarOpen] = useState(false)

const openHandler = () => {
  if (!sidebarOpen) {
    setSidebarOpen(true)
  } else {
    setSidebarOpen(false)
  }
}

const sidebarCloseHandler = () => {
  setSidebarOpen(false)
}


let sidebar
if (sidebarOpen) {
//@ts-ignore
  sidebar = <Sidebar close={sidebarCloseHandler} sidebar={whole}/>
}

  return (
    <>
    {sidebar}
    <Fragment>
    
    <div className={appWrapper}>
        <div className={navLayer}>
          <Toggle click={openHandler}/>
          <p className={navTagP}>Меню</p>
          <div className={body}>
      <div className={middleLine}>
        <h2 className={middleLineTagH2}>Борис Годунов. Редактирование</h2>
        <MyButton value="Сохранить" className={button} />
      </div>
      <div className={userLayer}>
        <form action="">
          <div className={divLabels}>
            <label className={userLayerLabels} htmlFor="name">
              Имя
            </label>
            <label className={userLayerLabels} htmlFor="secondName">
              Фамилия
            </label>
            <label className={userLayerLabels} htmlFor="email">
              Электронная почта
            </label>
            <label className={userLayerLabels} htmlFor="newPassword">
              Новый пароль
            </label>
            <label className={userLayerLabels} htmlFor="reEnterPassword">
              Повторите пароль
            </label>
          </div>
          <div className={divInputs}>
            <input id="name" type="text" className={userLayerInputs} />
            <input id="secondName" type="text" className={userLayerInputs} />
            <input id="email" type="text" className={userLayerInputs} />
            <input
              id="newPassword"
              type="password"
              className={userLayerInputs}
            />
            <input
              id="reEnterPassword"
              type="password"
              className={userLayerInputs}
            />
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
      </Fragment>
    </>
  );
};

export default Profile;
