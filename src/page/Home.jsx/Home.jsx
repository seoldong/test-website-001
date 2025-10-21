import BrandStory from "../../components/homeSection/BrandStory";
import BrandValue from "../../components/homeSection/BrandValue";
import Footer from "../../components/homeSection/Footer";
import MainSlide from "../../components/homeSection/MainSlide";
import Package from "../../components/homeSection/Package";
import PopularProducts from "../../components/homeSection/PopularProducts";
import Recommended from "../../components/homeSection/Recommended";
import Review from "../../components/homeSection/Review";
import TopNav from "../../components/topNav";
import "./HomeStyles.css";

//
function Home() {

  return (
    <div className="base">
      <div className="topNav">
        <TopNav />
      </div>
      <div className="mainSlide">
        <MainSlide />
      </div>
      <div className="popularProducts">
        <PopularProducts />
      </div>
      <div className="package">
        <Package />
      </div>
      <div className="recommended">
        <Recommended />
      </div>
      <div className="brandValue">
        <BrandValue />
      </div>
      <div className="brandStory">
        <BrandStory />
      </div>
      <div className="review">
        <Review />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
