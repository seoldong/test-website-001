import styles from './ShopAllProducts.module.css';
// 
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// 
import { fetchDrinksThunk } from '../../redux/slices/product/drinks';
import { fetchMaskPacksThunk } from '../../redux/slices/product/maskPacks';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

// 
function ShopAllProducts() {
    const { category } = useParams();
    const dispatch = useDispatch();

    const { data: drinks, loading: drinksLoading, error: drinksError } = useSelector((state) => state.drinks);
    const { data: maskPacks, loading: maskPacksLoading, error: maskPacksError } = useSelector((state) => state.maskPacks);
    const [targetRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    //
    const drinksDataIsMissing = drinks.length === 0;
    const maskPacksDataIsMissing = maskPacks.length === 0;
    const loading = drinksLoading || maskPacksLoading;
    const error = drinksError || maskPacksError;

    // 
    const caseOfCategory = (category) => {
        switch (category) {
            case "drink":
                return drinks;
            case "maskPack":
                return maskPacks;
            default:
                return [];
        }
    }
    const products = caseOfCategory(category);

    //
    useEffect(() => {
        if (category === 'drink' && drinksDataIsMissing) {
            dispatch(fetchDrinksThunk())
        } else if (category === 'maskPack' && maskPacksDataIsMissing) {
            dispatch(fetchMaskPacksThunk())
        }
    }, [drinks.length, maskPacks.length, category, dispatch])

    // 
    if (loading) return <div className={styles.bestProducts}>Loading...</div>;
    if (error) return <div className={styles.bestProducts}>Error: {error}</div>;

    // 
    return (
        <section className={styles.allProducts} ref={targetRef}>
            <div className={styles.hook}>Experience the fresh vitality that fills you from within.</div>
            <div className={styles.productContainer}>
                {products.map((product, index) => {
                    return (
                        <Link
                            className={styles.productBox}
                            key={product.productId}
                            to={`/product/${product.productId}`}
                        >
                            <img className={styles.image} src={product.imageSrc} />
                            <div className={styles.name}>{product.productName}</div>
                            <PriceState product={product} />
                        </Link>
                    )
                })}
            </div>
        </section >
    )
}
export default ShopAllProducts;

// 
function PriceState({ product }) {

    const discount = (product.priceKrw * product.discountRate / 100);

    const saleElemetnt = () => {
        return (
            <>
                <div className={styles.sale} >
                    <p className={styles.discountPrice}>{`$ ${product.priceKrw - discount}`}</p>
                    <p className={styles.nomalPrice}>$ {product.priceKrw}</p>
                </div>
                <div className={styles.discountState}>{product.discountRate}% off</div>
            </>
        )
    }

    const normalElement = () => {
        return (
            <div className={styles.price} >
                <p>$ {product.priceKrw}</p>
            </div>
        )
    }

    return (
        <div className={styles.priceBox}>
            {product.onSale ? saleElemetnt() : normalElement()}
        </div>
    )
}