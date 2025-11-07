import styles from "./BestProducts.module.css";
// 
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
// 
import homeBestProductsText from "../../assets/page/home/bestProductsText";
import { fetchBestProductsThunk } from "../../redux/slices/product/bestProducts";
import Loading from "../common/Loading";
import Error from "../common/Error";
import NoData from "../common/NoData";

// 
function BestProducts() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.bestProducts);

  const dataMissing = data.length === 0;

  // 
  useEffect(() => {
    dispatch(fetchBestProductsThunk());
  }, [dispatch]);

  // 
  const handleRefetch = useCallback(() => {
    dispatch(fetchBestProductsThunk());
  }, [dispatch]);

  // 
  if (dataMissing || loading) return <Loading />
  if (error) return <Error onRetry={handleRefetch} dataName={'best product'} />;
  if (dataMissing) return <NoData onRetry={handleRefetch} dataName={'best product'} />

  return (
    <div className={styles.bestProducts}>
      <div className={styles.title}>{homeBestProductsText.title}</div>
      <div className={styles.subtitle}>{homeBestProductsText.subTitle}</div>
      <div className={styles.productContainer}>
        {data.map((item, index) => {
          return (
            <Link
              className={styles.productBox}
              key={item.productId}
              to={`/product/${item.productId}`}
            >
              <div className={styles.productImgBox}>
                <img className={styles.productImg} src={item.imageSrc} />
              </div>
              <div className={styles.name}>{item.productName}</div>
              <div className={styles.price}>{`$ ${item.priceUsd}`}</div>
              <div className={styles.stateBox}>
                <div className={styles.state}>{`BEST`}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BestProducts;