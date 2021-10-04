import React from "react";
import Backdrop from "../Components/Backdrop";
import Login from "../Components/Login";
import { useAuthContext } from "../context/AuthContext";

const WelcomeScreen = () => {
  const { setAuth } = useAuthContext();

  return (
    <div className="main" style={{ display: "flex", justifyContent: "center" }}>
      <Backdrop />
      <Login />
    </div>
  );
};

export default WelcomeScreen;
