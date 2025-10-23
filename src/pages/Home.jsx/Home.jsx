import MainSlide from "../../components/homeSection/MainSlide";
import Package from "../../components/homeSection/Package";
import PopularProducts from "../../components/homeSection/PopularProducts";
import Recommended from "../../components/homeSection/Recommended";
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
      <div className="introduce02"></div>
      <div className="reviewSlide"></div>
    </div>
  );
}

export default Home;
