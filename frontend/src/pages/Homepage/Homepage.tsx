import Navbar from "../../components/Navbar/Navbar.tsx";
import HomeBanner from "../../components/HomeBanner/HomeBanner.tsx"
import Filter from "../../components/Filter/Filter.tsx";
import Footer from "../../components/Footer/Footer.tsx"
import RestaurantSummary from "../../components/RestaurantSummary/RestaurantSummary.tsx";

export default function Homepage (){
    return (
        <>
            <Navbar />
            <HomeBanner />
            <Filter />
            <RestaurantSummary  name="Viet Shack" image="s" rating={2} />
            <Footer />
        </>
    )
}