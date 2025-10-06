import React from "react";
import styles from "./Navbar.module.scss";
import useState from "react";


const Navbar: React.FC = () => {

  return (
    <nav>
      <h1>dhLunch</h1>
      <div>
        <a href="/" className={styles.navLink}>HOME</a>
        <a href="/dashboard" className={styles.navLink}>MY DASHBOARD</a>
      </div>
    </nav>
  );
};

export default Navbar;
