import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import TopNav from "../components/topNav/index";
import MainSlide from "../components/homeSection/MainSlide";
import PopularProducts from "../components/homeSection/PopularProducts";
import Package from "../components/homeSection/Package";
import Recommended from "../components/homeSection/Recommended";
import BrandValue from "../components/homeSection/BrandValue";
import BrandStory from "../components/homeSection/BrandStory";
import Review from "../components/homeSection/Review";
import Footer from "../components/homeSection/Footer";

//
function Home() {

  const [scrolled, setScrolled] = useState(false);

  const SCROLL_THRESHOLD = 50;

  useEffect(() => {
    // 함수를 useEffect 내부에서 정의
    const handleScroll = () => {
      const isScrolled = window.scrollY > SCROLL_THRESHOLD;

      // 이펙트 내부에서 'scrolled' 상태를 직접 사용하지 않고
      // setScrolled만 사용하여 의존성 배열을 비울 수 있습니다.
      // 하지만 현재 로직에서는 상태를 비교하므로 'scrolled'를 의존성으로 유지합니다.
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  return (
    <div className={styles.base}>
      <section className={`${styles.topNav} ${scrolled && styles.active}`}>
        <TopNav />
      </section>
      <div className={styles.mainSlide}>
        <MainSlide />
      </div>
      <div className={styles.popularProducts}>
        <PopularProducts />
      </div>
      <div className={styles.package}>
        <Package />
      </div>
      <div className={styles.recommended}>
        <Recommended />
      </div>
      <div className={styles.brandValue}>
        <BrandValue />
      </div>
      <div className={styles.brandStory}>
        <BrandStory />
      </div>
      <div className={styles.review}>
        <Review />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
