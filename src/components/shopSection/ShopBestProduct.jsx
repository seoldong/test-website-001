import { useEffect, useState } from "react";
import styles from "./ShopBestProduct.module.css";
// 
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllDrinks } from "../../redux/slices/product/drinks";
import { getBestDrinks } from "../../redux/slices/product/bestDrinks";
import { getAllMaskPacks } from "../../redux/slices/product/maskPacks";
import { getBestMaskPacks } from "../../redux/slices/product/bestMaskPacks";

// 
function ShopBestProduct() {

    const { category } = useParams();
    const dispatch = useDispatch();
    const bestDrinks = useSelector((state) => state.bestDrinks);
    const bestMaskPacks = useSelector((state) => state.bestMaskPacks);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const caseOfCategory = (category) => {
        switch (category) {
            case "drink":
                return bestDrinks;
            case "maskPack":
                return bestMaskPacks;
            default:
                return [];
        }
    }
    const bestProducts = caseOfCategory(category);

    useEffect(() => {
        console.log('start data effect');
        
        const topCount = 4;
        if (category === 'drink' && bestDrinks.length === 0) {
            const fetchDrink = async () => {
                setLoading(true);
                setError(null);
                const drinkPath = '/data/product-drink.json';
                try {
                    const response = await fetch(drinkPath);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const drinks = await response.json();
                    console.log('dispatch drink');
                    
                    dispatch(getAllDrinks(drinks));
                    dispatch(getBestDrinks({ productData: drinks, topCount: topCount }));
                } catch (error) {
                    setError('Failed to fetch data: ' + error.message);
                    console.error("Fetching data failed", error);
                } finally {
                    setLoading(false);
                }

            }
            fetchDrink();
        } else if (category === 'maskPack' && bestMaskPacks.length === 0) {
            const fetchMaskPack = async () => {
                setLoading(true);
                setError(null);
                const maskpackPath = '/data/product-maskPack.json';
                try {
                    const response = await fetch(maskpackPath);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const maskPacks = await response.json();
                    dispatch(getAllMaskPacks(maskPacks));
                    dispatch(getBestMaskPacks({ productData: maskPacks, topCount: topCount }));
                } catch (error) {
                    setError('Failed to fetch data: ' + error.message);
                    console.error("Fetching data failed", error);
                } finally {
                    setLoading(false);
                }
            }
            fetchMaskPack();
        } else {
            setLoading(false);
            setError(null);
            return;
        }

    }, [bestDrinks.length, bestMaskPacks.length, category, dispatch])

    // 
    console.log("loading : ",loading);
    
    if (loading) return <div className={styles.bestProducts}>Loading...</div>;
    if (error) return <div className={styles.bestProducts}>Error: {error}</div>;

    // 
    return (
        <section className={styles.bestProduct} >
            <div className={styles.hook}>The healthy habit chosen by many.</div>
            <div className={styles.bestProductBox}>
                {bestProducts.map((product, index) => {
                    const discount = (product.priceKrw * product.discountRate / 100);
                    return (
                        <Link
                            className={styles.productBox}
                            key={product.productId + index}
                            to={`/product/${product.productId}`}
                        >
                            <div>
                                <img className={styles.productImg} src={product.imageSrc} />
                            </div>
                            <div className={styles.productName}>
                                {product.productName}
                            </div>
                            <div className={styles.priceBox}>
                                <div className={styles.offProductPrice}>
                                    ₩ {`${product.priceKrw - discount}`}
                                </div>
                                <div className={styles.productPrice}>
                                    ₩ {product.priceKrw}
                                </div>
                            </div>
                            <div className={styles.stateBox}>
                                <div className={styles.discountBox}><p>discount</p><p>{product.discountRate}%</p></div>
                                <div className={styles.popularityBox}><p>popularity</p><p>✓</p></div>
                                <div className={styles.recommendedBox}><p>recommended</p><p>✓</p></div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default ShopBestProduct;