import styles from "./PopularProducts.module.css";
import { useEffect, useState } from "react";
import { getPopularityJuice } from "../../mockData/getData";

// 
function PopularProducts() {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    if (getPopularityJuice.length !== 0) {
      setPopularProducts(getPopularityJuice);
    }
  }, [popularProducts.length])

  return (
    <>
      <div className={styles.title}>HELLO WORLD!! LET'S DRINK WATER!</div>
      <div className={styles.subtitle}>
        Try it once. It will fill your body with moisture.
      </div>
      <div className={styles.productContainer}>
        {popularProducts.map((item, index) => {
          return (
            <div key={item.productName + index} className={styles.productBox}>
              <div className={styles.productImgBox}>
                <img className={styles.productImg} src={item.imageSrc} />
              </div>
              <div className={styles.name}>{item.productName}</div>
              <div className={styles.price}>₩ {item.price_krw}</div>
              <div className={styles.stateBox}>
                <div className={styles.state}>{`BEST`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PopularProducts;
