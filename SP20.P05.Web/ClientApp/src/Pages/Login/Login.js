import React from "react";

// Components
import LoginNav from "../../Components/SideNav/LoginNav";
import LoginForm from "../../Components/LoginForm/LoginForm";

// CSS
import "./Login.css";

function Login() {
  return (
    <div>
      <LoginNav />
      <div className={"background-img"}>
        <div id={"divElement"}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
