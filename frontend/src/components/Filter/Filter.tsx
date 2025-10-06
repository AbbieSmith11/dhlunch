import styles from "./Filter.module.scss";
import React from "react";
import { useState, useEffect, useRef } from "react";

const Filter: React.FC = () => {
  // state for opening filter
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // closes filter menu when user clicks elsewhere on page
  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", close);

    return () => {
      document.removeEventListener("click", close);
    };
  }, []);

  return (
    <>
      <section className={styles.filterSection}>
        <div
          className={styles.filterContainer}
          ref={ref}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className={styles.filter}>Filter</div>
          <div className={styles.arrow}>↓</div>
        </div>
      </section>
      {open && (
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Filter;
