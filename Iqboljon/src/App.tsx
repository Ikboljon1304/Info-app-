import React from "react";
import "./App.css";
import Login from "./containers/Login/Login";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/index.store";
import Profile from "./containers/profile/Profile";
import Register from "../src/containers/registration/Register";


function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <Login str={"str"} />
      </ReduxProvider>
    </div>
  );
  
}

export default App;
