import styles from "./BestProducts.module.css";
// 
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// 
import homeBestProductsText from "../../assets/page/home/bestProductsText";
import { fetchBestProductsThunk, resetBestProducts } from "../../redux/slices/product/bestProducts";

// 
function BestProducts() {
  const dispatch = useDispatch();
  const { data: bestProducts, loading, error } = useSelector((state) => state.bestProducts);

  const dataIsMissing = bestProducts.length === 0;

  // 
  const handleReload = () => {
    dispatch(resetBestProducts());
    dispatch(fetchBestProductsThunk());
  };

  // 
  if (dataIsMissing ||loading) return <div>Loading... <button onClick={handleReload}>reload</button></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.bestProducts}>
      <div className={styles.title}>{homeBestProductsText.title}</div>
      <div className={styles.subtitle}>{homeBestProductsText.subTitle}
      </div>
      <div className={styles.productContainer}>
        {bestProducts.map((item, index) => {
          return (
            <Link
              className={styles.productBox}
              key={item.productName + index}
              to={`/product/${item.productId}`}
            >
              <div className={styles.productImgBox}>
                <img className={styles.productImg} src={item.imageSrc} />
              </div>
              <div className={styles.name}>{item.productName}</div>
              <div className={styles.price}>$ {item.priceKrw}</div>
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