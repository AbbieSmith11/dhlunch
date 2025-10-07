import styles from "./DropdownMenu.module.scss";
import { useEffect, useState, useRef } from "react";

// defining types for props
type MenuProps = {
  name: string;
  list: React.ReactNode;
  isFilter: boolean; // prop to say if it is the main filter component as that has different styling
};

const DropdownMenu = ({ name, list, isFilter }: MenuProps) => {
  // state for opening menu
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
      <section ref={ref} className={styles.containerForDropdownMenu}>
        <div // container for whole filter section (or non existant for other dropdowns)
          style={{
            borderBottom: isFilter ? "1.5px solid #c7c7c7" : "",
            maxWidth: isFilter ? "100%" : "fit-content",
            padding: isFilter ? "1rem" : "",
          }}
        >
          <div // filter button (or sort button)
            className={styles.menuContainer}
            style={{
              border: isFilter ? "2px solid" : "",
              padding: isFilter ? "0.5rem 1rem" : "0",
              margin: isFilter ? "0.5rem 1rem" : "",
            }}
            onClick={() => setOpen((prev) => !prev)}
          >
            <div className={styles.name}>{name}</div>
            <div
              className={styles.arrow}
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              ↓
            </div>
          </div>
        </div>
        {open && (
          <div>
            <ul className="dropdownMenu">{list}</ul>
          </div>
        )}
      </section>
    </>
  );
};

export default DropdownMenu;
