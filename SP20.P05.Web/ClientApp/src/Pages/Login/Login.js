import React from "react";

// Components
import LoginForm from "../../Components/LoginForm/LoginForm";

// CSS
import "./Login.css";

const Login = props => {
  return (
    <div>
      <div className={"background-img"}>
        <div id={"divElement"}>
          <LoginForm history={props.location.from} />
        </div>
      </div>
    </div>
  );
};

export default Login;
