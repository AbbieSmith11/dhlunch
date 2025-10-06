import Navbar from "../../components/Navbar/Navbar.tsx";
import HomeBanner from "../../components/HomeBanner/HomeBanner.tsx"
import Filter from "../../components/Filter/Filter.tsx";
import Footer from "../../components/Footer/Footer.tsx"

export default function Homepage (){
    return (
        <>
            <Navbar />
            <HomeBanner />
            <Filter />
            <Footer />
        </>
    )
}