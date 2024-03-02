import { useState } from "react";
import "./navbar.css";
import hambergerIcon from "../images/hamberger.svg";
import menuCrossIcon from "../images/menu cross.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const hamClick = () => {
    const hamberger = document.querySelector(".hamberger");
    const mobNav = document.querySelector(".mobnav");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    if (drawerOpen) {
      hamberger.style.color = "#FFF";
      mobNav.classList.add("drawerClosed");
      mobNav.classList.remove("drawerOpen");
      hamburgerIcon.src = hambergerIcon;
    } else {
      hamberger.style.color = "#FFF";
      mobNav.classList.add("drawerOpen");
      mobNav.classList.remove("drawerClosed");
      hamburgerIcon.src = menuCrossIcon;
    }
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div className="navigation">
      <nav>
        <div className="logo">
          <a href="#">SQL Bot</a>
        </div>
        <ul className="links">
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="$#">SQL Pad</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <button className="create-btn btn">Create Account</button>
          </li>
          <li>
            <button className="login-btn btn">Login</button>
          </li>
        </ul>
      </nav>
      <button className="hamberger" onClick={() => hamClick()}>
        <i>
          <img id="hamburger-icon" src={hambergerIcon} alt="hamberger icon" />
        </i>
      </button>
      <nav className="mobnav drawerClosed">
        <div className="logo">
          <a href="#">SQL Bot</a>
        </div>
        <hr />
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">SQL Pad</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <button className="create-btn btn">Create Account</button>
          </li>
          <li>
            <button className="login-btn btn">Login</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
