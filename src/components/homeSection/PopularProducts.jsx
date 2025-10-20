import "./PopularProducts.css";
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
    <div className="popularProducts-container">
      <div className="popularProducts-title">HELLO WORLD!! LET'S DRINK WATER!</div>
      <div className="popularProducts-subtitle">
        Try it once. It will fill your body with moisture.
      </div>
      <div className="popularProducts-itemContainer">
        {popularProducts.map((item, index) => {
          return (
            <div key={item.productName + index} className="popularProducts-itemBox">
              <div className="popularProducts-itemImgBox">
                <img className="popularProducts-item" src={item.imageSrc} />
              </div>
              <div className="popularProducts-item-title">{item.productName}</div>
              <div className="popularProducts-item-price">₩ {item.price_krw}</div>
              <div className="popularProducts-item-stateBox">
                <div className="popularProducts-item-state">{`BEST`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularProducts;
