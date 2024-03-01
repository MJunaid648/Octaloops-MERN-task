import "./style.css";
import fb from "../images/fb-icon.svg";
import google from "../images/google-icon.svg";

const Login = () => {
  return (
    <div className="signup">
      <form action="post">
        <h1>Login</h1>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />

        <button type="submit">Login</button>
      </form>
      <span>
        <p>Or continue with</p>
        <img src={fb} alt="facebook icon" />
        <img src={google} alt="facebook icon" />
      </span>
    </div>
  );
};

export default Login;
