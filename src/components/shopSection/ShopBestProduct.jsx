import styles from "./ShopBestProduct.module.css";
// 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// 
import { fetchBestDrinksThunk } from "../../redux/slices/product/bestDrinks";
import { fetchBestMaskPacksThunk } from "../../redux/slices/product/bestMaskPacks";

// 
function ShopBestProduct() {

    const { category } = useParams();
    const dispatch = useDispatch();
    const { data: bestDrinks, loading: bestDrinksLoading, error: bestDrinksError } = useSelector((state) => state.bestDrinks);
    const { data: bestMaskPacks, loading: bestMaskPacksLoading, error: bestMaskPacksError } = useSelector((state) => state.bestMaskPacks);

    //
    const bestDrinksDataIsMissing = bestDrinks.length === 0;
    const bestMaskPacksDataIsMissing = bestMaskPacks.length === 0;
    const loading = bestDrinksLoading || bestMaskPacksLoading;
    const error = bestDrinksError || bestMaskPacksError;

    // 
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
        if (category === 'drink' && bestDrinksDataIsMissing) {
            dispatch(fetchBestDrinksThunk());
        } else if (category === 'maskPack' && bestMaskPacksDataIsMissing) {
            dispatch(fetchBestMaskPacksThunk());
        }
    }, [bestDrinks.length, bestMaskPacks.length, category, dispatch])

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
                            <div className={styles.imgBox}>
                                <img className={styles.productImg} src={product.imageSrc} />
                            </div>
                            <div className={styles.productName}>
                                {product.productName}
                            </div>
                            <div className={styles.priceBox}>
                                <div className={styles.offProductPrice}>
                                    $ {`${product.priceKrw - discount}`}
                                </div>
                                <div className={styles.productPrice}>
                                    $ {product.priceKrw}
                                </div>
                            </div>
                            <div className={styles.stateBox}>
                                <div><p>discount</p><p>{product.discountRate}%</p></div>
                                <div><p>popularity</p><p>✓</p></div>
                                <div><p>recommended</p><p>✓</p></div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default ShopBestProduct;