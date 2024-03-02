import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("accessToken");
    if (!login) {
      navigate("/login");
    }
  }, [navigate]);

  return Component;
};

export default Protected;
