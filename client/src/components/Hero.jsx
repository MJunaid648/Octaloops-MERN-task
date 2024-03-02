import styles from "./hero.module.css";
import heroImg from "../images/hero.png";
import googleIcon from "../images/google.jpg";
import appleIcon from "../images/apple.jpg";
import amazonIcon from "../images/amazon.jpg";
import metaIcon from "../images/meta.jpg";
import lyftIcon from "../images/lyft.jpg";
import microsoftIcon from "../images/microsoft.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTop}>
        <div className={styles.content}>
          <h1>
            Learn With <br className={styles.desktop}/> <span>SQL QuizBot</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
            dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
            nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem,
            pretiumull amcorper lectus
          </p>
          <div className={styles.btns}>
            <Link to='/signup'><button className={styles.btn}>Join Prep Community</button></Link>
            <button className={styles.btn}>SQL Pads</button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="hero image" />
        </div>
      </div>
      <div className={styles.heroBottom}>
        <p>
          Trusted by talents with <span>$240K+ compensation offers </span> at
        </p>
        <div className={styles.icons}>
          <img src={googleIcon} alt="googleIcon" />
          <img src={amazonIcon} alt="amazonIcon" />
          <img src={metaIcon} alt="metaIcon" />
          <img src={lyftIcon} alt="lyftIcon" />
          <img src={appleIcon} alt="appleIcon" />
          <img src={microsoftIcon} alt="microsoftIcon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
