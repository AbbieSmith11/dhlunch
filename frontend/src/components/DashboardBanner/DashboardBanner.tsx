import { NavLink } from "react-router-dom";
import styles from "./DashboardBanner.module.scss";

const DashboardBanner: React.FC = () => {
  return (
    <section className={styles.fadeBackground}>
      <div
        className={styles.dashboardLinkContainers}
        id={styles.firstContainer}
      >
        <NavLink
          to="/dashboard/myrestaurants"
          className={({ isActive }) =>
            isActive
              ? `${styles.dashboardLink} ${styles.active}`
              : styles.dashboardLink
          }
        >
          My Restaurants
        </NavLink>
      </div>
      <div className={styles.dashboardLinkContainers}>
        <NavLink
          to="/dashboard/myreviews"
          className={({ isActive }) =>
            isActive
              ? `${styles.dashboardLink} ${styles.active}`
              : styles.dashboardLink
          }
        >
          My Reviews
        </NavLink>
      </div>
    </section>
  );
};

export default DashboardBanner;
