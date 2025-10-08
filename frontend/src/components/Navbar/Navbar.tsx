import React from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>dhLunch</h1>
      <div>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/dashboard/myrestaurants"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          MY DASHBOARD
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
