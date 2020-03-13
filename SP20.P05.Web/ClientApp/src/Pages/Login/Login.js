import React from "react";

// Components
import LoginForm from "../../Components/LoginForm/LoginForm";

// CSS
import "./Login.css";

function Login() {
  return (
    <div>
      <div className={"background-img"}>
        <div id={"divElement"}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
