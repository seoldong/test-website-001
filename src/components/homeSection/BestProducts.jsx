import styles from "./BestProducts.module.css";
// 
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// 
import homeBestProductsText from "../../assets/page/home/bestProductsText";

// 
function BestProducts({ onReload }) {

  const bestProducts = useSelector((state) => state.bestProducts);

  const dataIsMissing = bestProducts.length === 0;

  const handleReload = () => {
    if (onReload) {
      onReload();
    } else {
      console.error("The onReload function was not passed to bestProducts.");
    }
  };

  if (dataIsMissing) {
    return (
      <div className={styles.mainSlide} style={{ padding: '50px', textAlign: 'center' }}>
        <p>Failed to fetch slide data or data is missing.</p>
        <button onClick={handleReload} className={styles.reloadButton}>
          Reload Data
        </button>
      </div>
    );
  }

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