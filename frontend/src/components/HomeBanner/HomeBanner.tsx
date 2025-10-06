import React from "react";
import styles from "./HomeBanner.module.scss";

const Navbar: React.FC = () => {
    return (
      <section className={styles.fadeBackground}>
        <h2>For Dunnhumbians</h2>
        <h3>Find food nearby, reviewed by trusted co-workers</h3>
      </section>
    );
  };
  
  export default Navbar;