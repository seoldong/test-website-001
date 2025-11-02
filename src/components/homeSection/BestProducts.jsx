import styles from "./BestProducts.module.css";
// 
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// 
import { getAllDrinks } from "../../redux/slices/product/drinks";
import { getAllMaskPacks } from "../../redux/slices/product/maskpacks";

// 
function BestProducts() {

  const dispatch = useDispatch();
  
  const drinks = useSelector((state) => state.drinks);
  const maskPacks = useSelector((state) => state.maskPacks);
  
  const [bestProducts, setBestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // drink, maskpack 전부 받기
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      const drinkPath = '/data/product-drink.json';
      const maskpackPath = '/data/product-maskPack.json';
      try {
        const [drinkResponse, maskpackResponse] = await Promise.all([
          fetch(drinkPath),
          fetch(maskpackPath)
        ]);
        if (!drinkResponse.ok || !maskpackResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const [drinks, maskpacks] = await Promise.all([
          drinkResponse.json(),
          maskpackResponse.json()
        ]);

        dispatch(getAllDrinks(drinks));
        dispatch(getAllMaskPacks(maskpacks))

      } catch (error) {
        setError('Failed to fetch data: ' + error.message);
        console.error("Fetching data failed", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [dispatch])

  // best 제품 추출 ( 세일, 추천, 판매수 2개씩(drink, maskpack) )
  const selectedBestProducts = useMemo(() => {
    if (!drinks || !maskPacks) return [];

    const filterDrink = drinks.filter(product => product.onSale && product.recommended);
    const filterMaskpack = maskPacks.filter(product => product.onSale && product.recommended);

    const sortDrink = filterDrink.sort((a, b) => b.salesCount - a.salesCount);
    const sortMaskpack = filterMaskpack.sort((a, b) => b.salesCount - a.salesCount);

    const sliceDrink = sortDrink.slice(0, 2);
    const sliceMaskpack = sortMaskpack.slice(0, 2);

    return [...sliceDrink, ...sliceMaskpack];

  }, [drinks, maskPacks]);

  useEffect(() => {
    setBestProducts(selectedBestProducts);
  }, [selectedBestProducts]);

  if (loading) return <div className={styles.bestProducts}>Loading...</div>;
  if (error) return <div className={styles.bestProducts}>Error: {error}</div>;

  // 
  return (
    <div className={styles.bestProducts}>
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
              <div className={styles.price}>₩ {item.priceKrw}</div>
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
