import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || null
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken") || null
  );
  const login = (tokens) => {
    setAccessToken(tokens.accessToken);
    setRefreshToken(tokens.refreshToken);
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }, [accessToken, refreshToken]);

  useEffect(() => {
    // const refreshAccessToken = async () => {
    //   try {
    //     console.log("refreshToken", refreshToken);
    //     console.log("accessToken", accessToken);
    //     const response = await axios.get("http://localhost:5000/refresh", {
    //       headers: {
    //         Authorization: `Bearer ${refreshToken}`,
    //       },
    //       withCredentials: true,
    //     });
    //     if (response.data.accessToken) {
    //       setAccessToken(response.data.accessToken);
    //       localStorage.setItem("accessToken", response.data.accessToken);
    //     }
    //   } catch (error) {
    //     console.error("Failed to refresh access token:", error.message);
    //   }
    // };
    // const intervalId = setInterval(() => {
    //   refreshAccessToken();
    // }, 10000);
    // return () => clearInterval(intervalId);
  }, [refreshToken]);

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
