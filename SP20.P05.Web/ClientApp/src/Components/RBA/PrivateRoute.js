import React, { Component, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../Hooks/Context/UserContext";
import Role from "./Role";

function PrivateRoute({ component: Component, ...rest }) {
  const { _user } = useContext(UserContext);
  if (!_user) {
    return <Redirect to={"login"} />;
  }
  return (
    <Route
      {...rest}
      render={props =>
        _user.userRoles == Role.Admin ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
}
export default PrivateRoute;
