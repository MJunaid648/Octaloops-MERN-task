import styles from "./benefits.module.css";
import clock from "../images/clock.svg";
import cost from "../images/cost.svg";
import level from "../images/level.svg";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.head}>
        <h1>Benefits of Using SQL Quiz Bot!</h1>
        <p>
          Discover the advantages of integrating AI into your SQL and NoSQL
          operations.
        </p>
      </div>
      <div className={styles.bottom}>
        <div>
          <img src={clock} alt="icon" />
          <h3>Stop Wasting Hours Googling Around</h3>
          <p>
            With this service, you can generate SQL queries in seconds. This is
            a game-changer for those who are constantly working with large
            databases and need quick results.
          </p>
        </div>
        <div>
          <img src={cost} alt="icon" />
          <h3>Cost-Effective and Highly Productive</h3>
          <p>
            The service is incredibly affordable. It's a small investment that
            can save you countless hours of work, making it a cost-effective
            solution for any data analyst.
          </p>
        </div>
        <div>
          <img src={level} alt="icon" />
          <h3>Suitable for All Levels</h3>
          <p>
            Whether you're a beginner or an experienced data analyst, this
            service can boost your SQL productivity and proficiency. It's
            designed to be user-friendly and accessible to all levels of
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
