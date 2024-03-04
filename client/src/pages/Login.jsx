import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { useAuth } from "../Context/AuthContext";
import Cookies from "js-cookie";

import api from "../api/api";
const Login = () => {
  const { login } = useAuth();
  let navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !loginDetails.email.trim() ||
      !emailRegex.test(loginDetails.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!loginDetails.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const loginFormSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
  
    console.log(loginDetails);
  
    try {
      const response = await api.post(
        "http://localhost:5000/login",
        loginDetails,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
  
      console.log("API response:", response.data);
  
      if (!response.data.accessToken || !response.data.refreshToken) {
        throw new Error("Failed to log in");
      }
  
      const refreshToken = response.data.refreshToken;
  
      Cookies.set("jwt", refreshToken, { sameSite: "Lax" });
  
      console.log("response data");
      console.log(response.data);
      login(response.data);
      navigate("/");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.signup}>
      <form action="post" onSubmit={loginFormSubmitHandler}>
        <h1>log in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={loginDetails.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginDetails.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
