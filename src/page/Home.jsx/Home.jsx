import { useEffect, useState } from "react";
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
}, [scrolled]); // 'scrolled'가 변경될 때만 다시 실행
// *참고: 'handleScroll'이 내부에 있으므로 의존성 배열에서 제거됩니다.


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
