import { useState, useEffect } from "react";

import Register from "./Register";
import Login from "./Login";

import { loginUser, registerUser, putRole } from "@/controllers/auth";

const Form = () => {
  const [showForm, setShowForm] = useState("login");

  const showLoginForm = () => setShowForm("login");
  const showRegisterForm = () => setShowForm("register");

  return (
    <>
      {showForm === "login" && <Login showRegister={showRegisterForm} />}
      {showForm === "register" && <Register />}
    </>
  );
};

export default Form;
