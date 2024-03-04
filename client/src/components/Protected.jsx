import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("accessToken");
    if (!login) {
      navigate("/login");
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
