import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || null
  );
  const [refreshToken, setRefreshToken] = useState(
    useState(Cookies.get("jwt") || null)
  );

  const login = (accessToken) => {
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    Cookies.remove("jwt");
  };

  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const response = await axios.get("http://localhost:5000/refresh");
        if (response.data.accessToken) {
          setAccessToken(response.data.accessToken);
          localStorage.setItem("accessToken", response.data.accessToken);
        }
      } catch (error) {
        console.error("Failed to refresh access token:", error.message);
      }
    };

    const intervalId = setInterval(() => {
      refreshAccessToken();
      console.log("token refreshed");
    }, 5000);
    return () => clearInterval(intervalId);
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
