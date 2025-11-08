import { Link } from 'react-router-dom';
import styles from "./index.module.css";

// 
function ShopBtnUnderside() {

  return (
    <div className={styles.undersideShop}>
      <button className={styles.undersideShopBtn}>
        SHOP
      </button>
      <div className={styles.undersideShopMenu} >
        <Link className={styles.undersideDrinkBtn} to={'/shop/drinks'}>DRINK</Link>
        <Link className={styles.undersideMaskPackBtn} to={'/shop/maskPacks'}>MASK PACK</Link>
      </div>
    </div>
  );
}

export default ShopBtnUnderside;