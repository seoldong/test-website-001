import BrandStory from "../../components/homeSection/BrandStory";
import BrandValue from "../../components/homeSection/BrandValue";
import Footer from "../../components/homeSection/Footer";
import MainSlide from "../../components/homeSection/MainSlide";
import Package from "../../components/homeSection/Package";
import PopularProducts from "../../components/homeSection/PopularProducts";
import Recommended from "../../components/homeSection/Recommended";
import Review from "../../components/homeSection/Review";
import TopNav from "../../components/topNav";
import styles from "../Home.jsx/Home.module.css";

//
function Home() {

  return (
    <div className={styles.base}>
      <section className={styles.topNav}>
        <TopNav />
      </section>
      <div className={styles.mainSlide}>
        <MainSlide />
      </div>
      <div className={styles.popularProducts}>
        <PopularProducts />
      </div>
      <div className={styles.package}>
        {/* <Package /> */}
      </div>
      <div className={styles.recommended}>
        {/* <Recommended /> */}
      </div>
      <div className={styles.brandValue}>
        {/* <BrandValue /> */}
      </div>
      <div className={styles.brandStory}>
        {/* <BrandStory /> */}
      </div>
      <div className={styles.review}>
        {/* <Review /> */}
      </div>
      <div className={styles.footer}>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
