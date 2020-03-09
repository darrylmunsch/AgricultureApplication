import React, { useState, useMemo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import HomePage from "./Pages/HomePage/HomePage";
import Fields from "./Pages/FarmFields/Fields";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Tickets from "./Pages/Tickets/Tickets";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

// Context
import {UserContext} from "./Components/Hooks/Context/UserContext";

// CSS
import "./Pages/HomePage/HomePage.css";
import LoginFunc from "./Components/LoginForm/LoginFunc";


function App() {
  const [_user, _setUser] = useState(localStorage.getItem('user') || '');
  const value = useMemo(() => ({ _user, _setUser}), [_user, _setUser]);

  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={value}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/fields" component={Fields} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/tickets" component={Tickets} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
