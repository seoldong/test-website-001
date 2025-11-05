import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// 
import MainSlide from "../components/homeSection/MainSlide";
import BestProducts from "../components/homeSection/BestProducts";
import Subscription from "../components/homeSection/Subscription";
import Recommended from "../components/homeSection/Recommended";
import BrandValue from "../components/homeSection/BrandValue";
import BrandStory from "../components/homeSection/BrandStory";
import Review from "../components/homeSection/Review"
import { fetchMainSlideThunk, resetMainSlide } from "../redux/slices/mainSlide/mainSlide";
import { fetchBestProductsThunk, resetBestProducts } from "../redux/slices/product/bestProducts";

// 
function HomePage() {
  const dispatch = useDispatch();
  // 
  const { data: mainSlide, loading: mainSlideLoading, error: mainSlideError } = useSelector((state) => state.mainSlide);
  const { data: bestProducts, loading: bestProductsLoading, error: bestProductsError } = useSelector((state) => state.bestProducts);

  // 
  useEffect(() => {
    if (mainSlide.length === 0) {
      dispatch(fetchMainSlideThunk())
    }
  }, [mainSlide.length]);

  // 
  useEffect(() => {
    if (bestProducts.length === 0) {
      dispatch(fetchBestProductsThunk())
    }
  }, [bestProducts.length]);

  // 
  const handleReload = () => {
    dispatch(resetMainSlide());
    dispatch(resetBestProducts());
    dispatch(fetchMainSlideThunk());
    dispatch(fetchBestProductsThunk());
  }

  // 
  if (mainSlideLoading || bestProductsLoading) return <div>Loading... <button onClick={handleReload}>reload</button></div>;
  if (mainSlideError || bestProductsError) return <div>Error: {error}</div>;

  const styles = {
    width: '1800px',
    margin: 'auto',
    backgroundColor: 'var(--farmWhite)',
  };

  return (
    <div style={styles}>
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
