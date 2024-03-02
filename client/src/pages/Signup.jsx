import React, { useState } from "react";
import fb from "../images/fb-icon.svg";
import styles from "./style.module.css";
import google from "../images/google-icon.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!userDetails.username.trim()) {
      newErrors.username = "Username is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !userDetails.email.trim() ||
      !emailRegex.test(userDetails.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!userDetails.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (userDetails.password !== userDetails.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const signupFormSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    // console.log(userDetails);

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        userDetails
      );

      if (!response.data.success) {
        throw new Error("Failed to sign up");
      }

      console.log("API response:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.signup}>
      <form action="post" onSubmit={signupFormSubmitHandler}>
        <h1>create account</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={userDetails.username}
          onChange={handleInputChange}
        />
        {errors.username && <p className={styles.error}>{errors.username}</p>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userDetails.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userDetails.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={userDetails.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <p className={styles.error}>{errors.confirmPassword}</p>
        )}
        <button type="submit">Sign up</button>
      </form>
      <span>
        <p>Or continue with</p>
        <img src={fb} alt="facebook icon" />
        <img src={google} alt="google icon" />
      </span>
    </div>
  );
};

export default Signup;
