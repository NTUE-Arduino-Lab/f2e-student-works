import { Link } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_img}></div>
      <div>
        <div className={styles.homeimg_text}></div>
      </div>
      <div>
        <h1 className={styles.title}>
          <span>CLASS OF / </span>
          <span className={styles.special_text}>
            {[..."Websites"].map((ele, idx) => (
              <span key={`text-${idx}-${ele}`}>{ele}</span>
            ))}
          </span>
          <span className={styles.special_text}>
            {[..."Design"].map((ele, idx) => (
              <span key={`text-${idx}-${ele}`}>{ele}</span>
            ))}
          </span>
          <span className={styles.special_text}>
            {[..."and"].map((ele, idx) => (
              <span key={`text-${idx}-${ele}`}>{ele}</span>
            ))}
          </span>
          <span className={styles.special_text}>
            {[..."Development"].map((ele, idx) => (
              <span key={`text-${idx}-${ele}`}>{ele}</span>
            ))}
          </span>
        </h1>
      </div>
      <div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link className={styles.link} to="/ntue">
                <span>NTUE /</span>國北教大
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/ntut">
                <span>NTUT /</span>北科大
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
