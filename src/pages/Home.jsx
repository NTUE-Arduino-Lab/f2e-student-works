import { Link } from "react-router-dom";
import img_bg from "../assets/images/home_bg.jpg";
import img_text from "../assets/images/home_text.png";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeimg_wrapper}>
        <img className={styles.homeimg_bg} src={img_bg} alt="" />
      </div>
      <img className={styles.homeimg_text} src={img_text} alt="" />
      <h1 className={styles.title}>
        <span>CLASS OF / </span>
        Websites
        <br />
        Design
        <br />
        and
        <br />
        Development
      </h1>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link className={styles.link} to="/ntue">
              <span>NTUE / </span>國北教大
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/ntut">
              <span>NTUT / </span>北科大
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
