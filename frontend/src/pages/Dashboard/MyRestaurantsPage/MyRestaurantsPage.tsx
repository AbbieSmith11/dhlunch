import DashboardBanner from "../../../components/DashboardBanner/DashboardBanner.tsx";
import MyRestaurants from "../../../components/MyRestaurants/MyRestaurants.tsx";
import Navbar from "../../../components/Navbar/Navbar.tsx";


const MyRestaurantsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <DashboardBanner />
      <MyRestaurants />
    </>
  );
};

export default MyRestaurantsPage;
