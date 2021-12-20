import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ school }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <div
          className={styles.a_active_box}
          style={school == "ntue" ? { right: "3px" } : { left: "3px" }}
        ></div>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.a_active : "")}
            to="/ntut"
          >
            {[..."NTUT"].map((ele, idx) => (
              <span key={`text-${idx}-${ele}`}>
                {ele}
              </span>
            ))}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.a_active : "")}
            to="/ntue"
          >
            {[..."NTUE"].map((ele, idx) => (
              <span key={`text-${idx}-${ele}`}>
                {ele}
              </span>
            ))}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
