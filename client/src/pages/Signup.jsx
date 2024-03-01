import "./style.css";
import fb from "../images/fb-icon.svg";
import google from "../images/google-icon.svg";

const Signup = () => {
  return (
    <div className="signup">
      <form action="post">
        <h1>create account</h1>
        <input type="text" placeholder="Username" name="username" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm-password"
        />
        <button type="submit">Sign up</button>
      </form>
      <span>
        <p>Or continue with</p>
        <img src={fb} alt="facebook icon" />
        <img src={google} alt="facebook icon" />
      </span>
    </div>
  );
};

export default Signup;
