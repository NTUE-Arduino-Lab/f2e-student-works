import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.a_active : "")}
            to="/ntut"
          >
            NTUT
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.a_active : "")}
            to="/ntue"
          >
            NTUE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
