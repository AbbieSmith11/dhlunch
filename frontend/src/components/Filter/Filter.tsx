import styles from "./Filter.module.scss";
import React from "react";

const Filter: React.FC = () => {
  return (
    <section className={styles.filterContainer}>
      <div className={styles.filter}>Filter ↓</div>
    </section>
  );
};

export default Filter;
