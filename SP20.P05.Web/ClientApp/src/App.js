import React, { useState, useMemo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/RBA/PrivateRoute";

// Context
import { UserContext } from "./Components/Hooks/Context/UserContext";

// Components
import HomePage from "./Pages/HomePage/HomePage";
import Fields from "./Pages/FarmFields/Fields";
import Tickets from "./Pages/Tickets/Tickets";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Admin from "./Components/RBA/Admin";
import TestStorageMapping from "./Components/TestingLocalStorage";

// CSS
import "./Pages/HomePage/HomePage.css";
import { AboutUs } from "./Pages/AboutUs/AboutUs";

function App() {
  const [_user, _setUser] = useState(localStorage.getItem("user") || null);
  const value = useMemo(() => ({ _user, _setUser }), [_user, _setUser]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/fields" component={Fields} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/tickets" component={Tickets} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route
          exact
          path={"/TestStorageMapping"}
          component={TestStorageMapping}
        />
        <Switch>
          <PrivateRoute exact path="/Admin" component={Admin} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
