import { useState, useEffect } from "react";

import Register from "./Register";
import Login from "./Login";

import { loginUser, registerUser, putRole } from "@/controllers/auth";

const Form = ({ close }) => {
  const [showForm, setShowForm] = useState("login");

  const showLoginForm = () => setShowForm("login");
  const showRegisterForm = () => setShowForm("register");

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
