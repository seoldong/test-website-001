import styles from "./BestProducts.module.css";
// 
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
// 
import homeBestProductsText from "../../mockData/home/bestProductsText";
import { fetchBestProductsThunk } from "../../redux/slices/product/bestProducts";
import BestBoard from "../common/BestBoard";

// 
function BestProducts() {
  const dispatch = useDispatch();
  const bestProducts = useSelector((state) => state.bestProducts);

  // 
  useEffect(() => {
    dispatch(fetchBestProductsThunk());
  }, [dispatch]);

  // 
  const handleRefetch = useCallback(() => {
    dispatch(fetchBestProductsThunk());
  }, [dispatch]);

  return (
    <div className={styles.bestProducts}>
      <div className={styles.title}>{homeBestProductsText.title}</div>
      <div className={styles.subTitle}>{homeBestProductsText.subTitle}</div>
      <BestBoard boardData={bestProducts} onRetry={handleRefetch} dataName={'best product'} />
    </div>
  );
}

export default BestProducts;