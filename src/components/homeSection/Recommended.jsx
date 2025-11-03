import styles from "./Recommended.module.css";
// 
import { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//
const ProductSlider = () => {

    const drinks = useSelector((state) => state.drinks);
    const maskPacks = useSelector((state) => state.maskPacks);

    const trackRef = useRef(null);
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;
    const ITEM_WIDTH_REM = 30;
    const discount = 0.8
    const intervalRef = useRef(null);

    const selectedRecommendedProducts = useMemo(() => {
        if (!drinks || !maskPacks) return [];
        const filterDrink = drinks.filter(product => product.recommended);
        const filterMaskpack = maskPacks.filter(product => product.recommended);
        return [...filterDrink, ...filterMaskpack];
    }, [drinks, maskPacks]);

    useEffect(() => {
        setProducts([...selectedRecommendedProducts, ...selectedRecommendedProducts.slice(0, itemsToShow)]);
    }, [selectedRecommendedProducts])

    const startAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= products.length - itemsToShow) {
                    if (trackRef.current) {
                        trackRef.current.style.transition = 'transform 0.3s ease-in-out';
                    }
                    return nextIndex;
                } else {
                    if (trackRef.current) {
                        trackRef.current.style.transition = 'transform 0.3s ease-in-out';
                    }
                    return nextIndex;
                }
            });
        }, 3000);
    };

    useEffect(() => {
        if (products.length === 0) return;

        if (currentIndex === products.length - itemsToShow) {
            const timeout = setTimeout(() => {
                if (trackRef.current) {
                    trackRef.current.style.transition = 'none';
                    setCurrentIndex(0);
                }
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, products]);

    useEffect(() => {
        if (products.length > 0) {
            startAutoSlide();
        }
        return () => clearInterval(intervalRef.current);
    }, [products]);

    const handlePrev = () => {
        clearInterval(intervalRef.current);
        setCurrentIndex(prevIndex => {
            if (prevIndex === 0) {
                if (trackRef.current) {
                    trackRef.current.style.transition = 'none';
                }
                const lastRealIndex = selectedRecommendedProducts.length;
                setTimeout(() => {
                    if (trackRef.current) {
                        trackRef.current.style.transition = 'transform 0.3s ease-in-out';
                        setCurrentIndex(lastRealIndex - 1);
                    }
                    startAutoSlide();
                }, 0);
                return lastRealIndex;
            }
            if (trackRef.current) {
                trackRef.current.style.transition = 'transform 0.3s ease-in-out';
            }
            startAutoSlide();
            return prevIndex - 1;
        });
    };

    const handleNext = () => {
        clearInterval(intervalRef.current);

        if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.3s ease-in-out';
        }

        setCurrentIndex(prevIndex => {
            const nextIndex = prevIndex + 1;
            if (nextIndex >= products.length) {
                return prevIndex;
            }
            return nextIndex;
        });
        startAutoSlide();
    };

    // 
    return (
        <div className={styles.recommended}>
            <div className={styles.title}>{'Recommended product'}</div>
            <div className={styles.description}>{'Discover today\'s recommended product to revitalize your day!'}</div>
            <div className={styles.slide}>
                <div className={styles.slideFrame}>
                    <div
                        className={styles.slideTrack}
                        ref={trackRef}
                        style={{
                            width: `${ITEM_WIDTH_REM * products.length}rem`,
                            transform: `translateX(-${currentIndex * ITEM_WIDTH_REM}rem)`,
                        }}
                    >
                        {products.map((product, index) => {
                            return <Link
                                key={index}
                                className={styles.productBox}
                                style={{ width: `${ITEM_WIDTH_REM}rem`, height: '40rem' }}
                                to={`/product/${product.productId}`}
                            >
                                <img
                                    className={styles.productImg}
                                    src={product.imageSrc}
                                    alt={product.productName}
                                />
                                <div className={styles.productName}>{product.productName}</div>
                                <div className={styles.productPriceBox}>
                                    <div
                                        className={styles.productSalePrice}>
                                        {`$ ${Math.round(product.onSale ? product.priceKrw * discount : product.priceKrw).toLocaleString()}`}
                                    </div>
                                    <div
                                        className={styles.productPrice}>
                                        {product.onSale ? `$ ${product.priceKrw.toLocaleString()}` : ''}
                                    </div>
                                </div>
                                {product.onSale && <div className={styles.productOnSale}>20% SALE</div>}
                            </Link>
                        })}
                    </div>
                </div>

                <button
                    className={`${styles.slideButton} ${styles.prevButton}`}
                    onClick={handlePrev}
                >
                    &lt;
                </button>
                <button
                    className={`${styles.slideButton} ${styles.nextButton}`}
                    onClick={handleNext}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default ProductSlider;
