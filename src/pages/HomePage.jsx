import { useCallback, useEffect, useState } from "react";
import { getMainSlides } from "../redux/slices/mainSlide/mainSlide";
import { useDispatch, useSelector } from "react-redux";
// 
import MainSlide from "../components/homeSection/MainSlide";
import BestProducts from "../components/homeSection/BestProducts";
import Subscription from "../components/homeSection/Subscription";
import Recommended from "../components/homeSection/Recommended";
import BrandValue from "../components/homeSection/BrandValue";
import BrandStory from "../components/homeSection/BrandStory";
import Review from "../components/homeSection/Review"
import { getBestProducts } from "../redux/slices/product/bestProducts";

// 
function HomePage() {
  const dispatch = useDispatch();
  // 
  const mainSlide = useSelector((state) => state.mainSlide);
  const bestProducts = useSelector((state) => state.bestProducts);
  // 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 
  const fetchSlides = useCallback(async () => {
    setLoading(true);
    setError(null);
    const slidePath = '/data/page/home/slide.json';

    try {
      const response = await fetch(slidePath);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const slideData = await response.json();
      dispatch(getMainSlides(slideData));

    } catch (error) {
      setError('Failed to fetch data: ' + error.message);
      console.error("Fetching data failed", error);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  // 
  const fetchBestProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    const bestProductsPath = '/data/page/home/bestProducts.json';

    try {
      const response = await fetch(bestProductsPath);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const bestProductsData = await response.json();
      dispatch(getBestProducts(bestProductsData));

    } catch (error) {
      setError('Failed to fetch data: ' + error.message);
      console.error("Fetching data failed", error);
    } finally {
      setLoading(false);
    }

  }, [dispatch])

  // 
  useEffect(() => {
    if (mainSlide.length === 0) {
      fetchSlides();
    } else {
      setLoading(false);
    }
  }, [mainSlide.length, fetchSlides]);

  // 
  useEffect(() => {
    if (bestProducts.length === 0) {
      fetchBestProducts();
    } else {
      setLoading(false);
    }
  }, [bestProducts.length, fetchBestProducts]);

  // 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const styles = {
    width: '1800px',
    margin: 'auto',
    backgroundColor: 'var(--farmWhite)',
  };

  return (
    <div style={styles}>
      <MainSlide onReload={fetchSlides} />
      <BestProducts onReload={fetchSlides} />
      <Subscription />
      <Recommended />
      <BrandValue />
      <BrandStory />
      <Review />
    </div>
  );
}

export default HomePage;
