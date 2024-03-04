import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "/api",
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("jwt"); // Update to use Cookies for consistency
        console.log("Refreshing token. Previous token:", refreshToken);

        const response = await axios.post("/api/refresh-token", {
          refreshToken,
        });
        const { token } = response.data;

        Cookies.set("jwt", token, { sameSite: "Lax" }); // Update to use Cookies for consistency

        console.log("Token refreshed. New token:", token);

        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (error) {
        console.error("Error refreshing token:", error.message); // Handle or log the refresh token error
      }
    }

    return Promise.reject(error);
  }
);

export default api;
