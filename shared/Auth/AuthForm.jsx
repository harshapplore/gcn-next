import { useState, useEffect } from "react";

import Register from "./Register";
import Login from "./Login";

import { loginUser, registerUser, putRole } from "@/_controllers/auth";

const Form = ({ close,type }) => {
  const [showForm, setShowForm] = useState("login");

  const showLoginForm = () => setShowForm("login");
  const showRegisterForm = () => setShowForm("register");

  useEffect(() => {
    if(type) {
        setShowForm(type)
    }
  },[type])
  return (
    <>
      {showForm === "login" && (
        <Login showRegister={showRegisterForm} close={close} />
      )}
      {showForm === "register" && <Register close={close} />}
    </>
  );
};

export default Form;
