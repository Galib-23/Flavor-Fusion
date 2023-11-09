import Footer from "../Shared/Footer";
import Banner from "./HomeComponents/Banner";
import Featured from "./HomeComponents/Featured";
import Reviews from "./HomeComponents/Reviews";
import TopSelling from "./HomeComponents/TopSelling";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSelling></TopSelling>
            <Featured></Featured>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;