import { useState } from "react";
import styles from "./navbar.module.css";
import hambergerIcon from "../images/hamberger.svg";
import menuCrossIcon from "../images/menu cross.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const hamClick = () => {
    const hamberger = document.querySelector(`.${styles.hamberger}`);
    const mobNav = document.querySelector(`.${styles.mobnav}`);
    const hamburgerIcon = document.getElementById("hamburger-icon");
    if (drawerOpen) {
      hamberger.style.color = "#FFF";
      mobNav.classList.add(styles.drawerClosed);
      mobNav.classList.remove(styles.drawerOpen);
      hamburgerIcon.src = hambergerIcon;
    } else {
      hamberger.style.color = "#FFF";
      mobNav.classList.add(styles.drawerOpen);
      mobNav.classList.remove(styles.drawerClosed);
      hamburgerIcon.src = menuCrossIcon;
    }
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={styles.navigation}>
      <nav>
        <div className={styles.logo}>
          <Link to="#">SQL Bot</Link>
        </div>
        <ul className={styles.links}>
          <li>
            <Link className={styles.active} to="#home">
              Home
            </Link>
          </li>
          <li>
            <Link to="#">SQL Pad</Link>
          </li>
          <li>
            <Link to="#">Contact us</Link>
          </li>
          <li>
            <Link to="/signup">
              {" "}
              <button className={`${styles["create-btn"]} ${styles.btn}`}>
                Create Account
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className={`${styles["login-btn"]} ${styles.btn}`}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <button className={styles.hamberger} onClick={() => hamClick()}>
        <i>
          <img id="hamburger-icon" src={hambergerIcon} alt="hamberger icon" />
        </i>
      </button>
      <nav className={`${styles.mobnav} ${styles.drawerClosed}`}>
        <div className={styles.logo}>
          <Link to="#">SQL Bot</Link>
        </div>
        <hr />
        <ul>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">SQL Pad</Link>
          </li>
          <li>
            <Link to="#">Contact us</Link>
          </li>
          <li>
            <button className={`${styles["create-btn"]} ${styles.btn}`}>
              Create Account
            </button>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className={`${styles["login-btn"]} ${styles.btn}`}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
