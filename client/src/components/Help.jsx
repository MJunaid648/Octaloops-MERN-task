import styles from "./help.module.css";
import HT1 from "../images/help tile 1.jpg";
import HT2 from "../images/help tile 2.jpg";
import HT3 from "../images/help tile 3.jpg";
import HT4 from "../images/help tile 4.jpg";
import HT5 from "../images/help tile 5.jpg";
import HT6 from "../images/help tile 6.jpg";

const Help = () => {
  return (
    <div className={styles.help}>
      <div className={styles.top}>
        <h2>
          How we can <span>help you!</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus
          leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim
          urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel,
          imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull
          amcorper lectus
        </p>
      </div>
      <div className={styles.tiles}>
        <div className={styles.tile}>
          <div className={styles.content}>
            <h3>Access Premium Courses</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus
            </p>
          </div>
          <div className={styles.img}>
            <img src={HT1} alt="tile image" />
          </div>
        </div>
        <div className={styles.tile}>
          <div className={styles.content}>
            <h3>Prep with a Coach!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus
            </p>
          </div>
          <div className={styles.img}>
            <img src={HT2} alt="tile image" />
          </div>
        </div>
        <div className={styles.tile}>
          <div className={styles.content}>
            <h3>Practice SQL!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus
            </p>
          </div>
          <div className={styles.img}>
            <img src={HT3} alt="tile image" />
          </div>
        </div>
        <div className={styles.tile}>
          <div className={styles.content}>
            <h3>Aggregate Functions!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus
            </p>
          </div>
          <div className={styles.img}>
            <img src={HT4} alt="tile image" />
          </div>
        </div>
        <div className={styles.tile}>
          <div className={styles.content}>
            <h3>Queries and Subqueries!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus
            </p>
          </div>
          <div className={styles.img}>
            <img src={HT5} alt="tile image" />
          </div>
        </div>
        <div className={styles.tile}>
          <div className={styles.content}>
            <h3>Python Coding</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus
            </p>
          </div>
          <div className={styles.img}>
            <img src={HT6} alt="tile image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
