import styles from './HomePage.module.css';
// 
import MainSlide from "../components/homeSection/MainSlide";
import BestProducts from "../components/homeSection/BestProducts";
import Subscription from "../components/homeSection/Subscription";
import Recommended from "../components/homeSection/Recommended";
import BrandValue from "../components/homeSection/BrandValue";
import BrandStory from "../components/homeSection/BrandStory";
import Review from "../components/homeSection/Review"

// 
function HomePage() {

  return (
    <div className={styles.homePage}>
      <MainSlide />
      <BestProducts />
      <Subscription />
      <Recommended />
      <BrandValue />
      <BrandStory />
      <Review />
    </div>
  );
}

export default HomePage;
