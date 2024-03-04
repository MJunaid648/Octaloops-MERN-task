import styles from "./practice.module.css";
import sql from "../images/sql.png";
import python from "../images/python.png";
const Practice = () => {
  return (
    <div className={styles.practice}>
      <div className={styles.head}>
        <h1>Practice SQL and Python coding for Interviews</h1>
        <p>
          The web leverages AI-powered natural languages processing to generate
          a wide range of SQL questions that cover different aspects of SQL,
          including basic queries, filtering, sorting, joins, subqueries,
          aggerate functions, and more.
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.squares}>
          <div>
            <img src={sql} alt={sql} />
          </div>
          <div>
            <img src={python} alt={python} />
          </div>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Practice;
