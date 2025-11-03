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
        <Link className={styles.undersideDrinkBtn} to={'/shop/drink'}>DRINK</Link>
        <Link className={styles.undersideMaskPackBtn} to={'/shop/maskPack'}>MASK PACK</Link>
      </div>
    </div>
  );
}

export default ShopBtnUnderside;