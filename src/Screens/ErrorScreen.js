import React from "react";
import "./ErrorScreen.css";
import logo from "../assets/logo.png";

const ErrorScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>Ups! 404 Not Found.</h1>
      <img src={logo} alt="logo" style={{ width: 400, height: 400 }} />
    </div>
  );
};

export default ErrorScreen;
