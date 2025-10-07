import React from "react";
import DropdownMenu from "./DropdownMenu/DropdownMenu.tsx";
import styles from "./Filter.module.scss";
import RatingFilter from "./RatingFilter/RatingFilter.tsx";

const Filter: React.FC = () => {
  return (
    <DropdownMenu
      isFilter={true}
      name="filter"
      list={
        <>
        <li>
        <DropdownMenu // sort dropdown menu
          name="Sort by"
          isFilter={false}
          list={
            <>
          <li className={styles.sortListItem} >Distance</li>
          <li className={styles.sortListItem} >Price(Asc)</li>
          <li className={styles.sortListItem} >Price(Desc)</li>
          </>
        }
        />
        </li>
        <li>
            <RatingFilter />
        </li>
        </>
      }
    />
  );
};

export default Filter;
