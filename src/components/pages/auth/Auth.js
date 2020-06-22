import React from "react";
import "./auth.scss";
import SignIn from "../../sign-in/SignIn";
import SignUp from "../../sign-up/SignUp";

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
