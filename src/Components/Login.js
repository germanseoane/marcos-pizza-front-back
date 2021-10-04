import React, { useState } from "react";
import "./Login.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { loginApi, registerApi } from "../api/userApi";
import AppToast from "./AppToast";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState("Login");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { setAuth } = useAuthContext();

  const showError = (message) => {
    setErrorMessage(message);
    setError(true);
    setTimeout(() => {
      setError(false);
      setErrorMessage(null);
    }, 2000);
  };

  const registerUser = async (user) => {
    try {
      const result = await registerApi(user);
      if (result.error) {
        return showError(result.error);
      }
      localStorage.setItem("user", result);
      setAuth(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
        name: Yup.string(),
        email: Yup.string().email().required(),
        password: Yup.string().min(4).required(),
      })}
      onSubmit={async (formData) => {
        if (form === "Login") {
          try {
            const { email, password } = formData;
            const response = await loginApi({ email, password });
            if (response.error) {
              return showError(response.error);
            }
            localStorage.setItem("user", JSON.stringify(response));
            setAuth(response);
          } catch (err) {
            console.log(err);
          }
        } else {
          registerUser(formData);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <>
          <div className="main-login">
            <div className="login-container">
              <h2
                className={form === "Login" ? "h2-white" : ""}
                onClick={() => setForm("Login")}
              >
                Ingresa
              </h2>
              <h2
                className={form === "Register" ? "h2-white" : ""}
                onClick={() => setForm("Register")}
              >
                Registrate
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="form">
              {form === "Register" && (
                <>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    autoCapitalize="on"
                  />
                  {errors.name && (
                    <h4 style={{ color: "rgb(207, 12, 12)" }}>
                      {touched.name && errors.name}
                    </h4>
                  )}
                </>
              )}

              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                autoFocus
              />
              {errors.email && (
                <h4 style={{ color: "rgb(207, 12, 12)" }}>
                  {touched.email && errors.email}
                </h4>
              )}

              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && (
                <h4 style={{ color: "rgb(207, 12, 12)" }}>
                  {touched.password && errors.password}
                </h4>
              )}
              <button
                className="login-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {form === "Login" ? "Ingresa" : "Registrate"}
              </button>
            </form>
            {error && <AppToast title={errorMessage} />}
          </div>
        </>
      )}
    </Formik>
  );
};

export default Login;
