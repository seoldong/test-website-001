import styles from "./BestProducts.module.css";
// 
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// 
import { getAllMaskPacks } from "../../redux/slices/product/maskPacks";
import { getBestMaskPacks } from "../../redux/slices/product/bestMaskPacks";
import { getAllDrinks } from "../../redux/slices/product/drinks";
import { getBestDrinks } from "../../redux/slices/product/bestDrinks";

// 
function BestProducts() {

  const dispatch = useDispatch();

  const [bestProducts, setBestProducts] = useState([]);
  const [bestProductsText, setBestProductsText] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const topCount = 4;

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      const drinkPath = '/data/product-drink.json';
      const maskpackPath = '/data/product-maskPack.json';
      const homeBestProductsTextPath = '/data/page/home/homeBestProductsText.json';

      try {
        const [drinkResponse, maskpackResponse, homeBestProductsTextResponse] = await Promise.all([
          fetch(drinkPath),
          fetch(maskpackPath),
          fetch(homeBestProductsTextPath)
        ]);
        if (!drinkResponse.ok || !maskpackResponse.ok || !homeBestProductsTextResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const [drinks, maskpacks, homeBestProductsText] = await Promise.all([
          drinkResponse.json(),
          maskpackResponse.json(),
          homeBestProductsTextResponse.json(),
        ]);

        dispatch(getAllDrinks(drinks));
        dispatch(getAllMaskPacks(maskpacks));
        dispatch(getBestDrinks({ productData: drinks, topCount: topCount }));
        dispatch(getBestMaskPacks({ productData: maskpacks, topCount: topCount }));

        const bestD = [...drinks].sort((a, b) => b.salesCount - a.salesCount).slice(0, topCount);
        const bestM = [...maskpacks].sort((a, b) => b.salesCount - a.salesCount).slice(0, topCount);

        const calculatedBest = [...bestD, ...bestM]
          .sort((a, b) => b.salesCount - a.salesCount)
          .slice(0, 4);

        setBestProducts(calculatedBest);
        setBestProductsText(homeBestProductsText);

      } catch (error) {
        setError('Failed to fetch data: ' + error.message);
        console.error("Fetching data failed", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [dispatch])

  if (loading) return <div className={styles.bestProducts}>Loading...</div>;
  if (error) return <div className={styles.bestProducts}>Error: {error}</div>;

  return (
    <div className={styles.bestProducts}>
      <div className={styles.title}>{bestProductsText.title}</div>
      <div className={styles.subtitle}>{bestProductsText.subTitle}
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