import styles from "./index.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// 
function ShopBtn() {
  const [isShopEnter, setIsShopEnter] = useState(false);
  const [isMenuEnter, setIsMenuEnter] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const onClickShopBtn = () => {
    setIsClick(!isClick);
  };

  return (
    <div className={styles.shopBox}>
      <button
        className={styles.shopBtn}
        onClick={onClickShopBtn}
        onMouseEnter={() => setIsShopEnter(true)}
        onMouseLeave={() => setIsShopEnter(false)}
      >
        SHOP
      </button>
      {(isShopEnter || isMenuEnter) &&
      <div
        className={styles.shopMenu}
        onMouseEnter={() => setIsMenuEnter(true)}
        onMouseLeave={() => setIsMenuEnter(false)}
      >
        <Link className={styles.drinkBtn} to={'/shop/drink'}>DRINK</Link>
        <Link className={styles.packBtn} to={'/shop/pack'}>PACK</Link>
      </div>
      }
    </div>
  );
}

export default ShopBtn;
