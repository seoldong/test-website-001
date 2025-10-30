import styles from "./BestProducts.module.css";
import { useEffect, useState } from "react";
import { getBestProduct } from "../../mockData/getData";
import { Link } from "react-router-dom";

// 
function BestProducts() {

  const [bestProducts, setBestProducts] = useState([]);
  // console.log(bestProducts);
  

  useEffect(() => {
    if (getBestProduct.length !== 0) {
      setBestProducts(getBestProduct);
    }
  }, [bestProducts.length])

  return (
    <>
      <div className={styles.title}>The Best Taste and Nutrition, Already Acknowledged by All.</div>
      <div className={styles.subtitle}>
        This one sip, filled with the farm's sincerity, is the best choice proven by those who have experienced it.
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
              <div className={styles.price}>₩ {item.price_krw}</div>
              <div className={styles.stateBox}>
                <div className={styles.state}>{`BEST`}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default BestProducts;
