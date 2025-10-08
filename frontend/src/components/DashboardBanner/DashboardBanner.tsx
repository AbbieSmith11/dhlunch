import { NavLink } from "react-router-dom";
import styles from "./DashboardBanner.module.scss";

const DashboardBanner: React.FC = () => {
    return (
        <section className={styles.fadeBackground}>
        <div>
            <NavLink to="/dashboard/MyReviews" className={({ isActive }) =>
            isActive ? `${styles.dashboardLink} ${styles.active}` : styles.dashboardLink
          }>
            My Reviews
          </NavLink>
        </div>
        <div>
        <NavLink to="/dashboard/MyRestaurants" className={({ isActive }) =>
            isActive ? `${styles.dashboardLink} ${styles.active}` : styles.dashboardLink
          }>My Restaurants</NavLink>
        </div>
      </section>
    )
}

export default DashboardBanner;