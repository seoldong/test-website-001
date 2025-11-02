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
    // 자동 슬라이드 인터벌 ID를 저장할 ref
    const intervalRef = useRef(null);

    // recommended 제품 추출 (drink, maskpack 전부) )
    const selectedRecommendedProducts = useMemo(() => {
        if (!drinks || !maskPacks) return [];
        const filterDrink = drinks.filter(product => product.recommended);
        const filterMaskpack = maskPacks.filter(product => product.recommended);
        return [...filterDrink, ...filterMaskpack];
    }, [drinks, maskPacks]);

    useEffect(() => {
        setProducts([...selectedRecommendedProducts, ...selectedRecommendedProducts.slice(0, itemsToShow)]);
    }, [selectedRecommendedProducts])

    // 💡 자동 슬라이드 로직 분리 및 재시작 함수
    const startAutoSlide = () => {
        // 기존 인터벌이 있다면 해제
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= products.length - itemsToShow) {
                    // 마지막 복제본으로 이동하기 전에 transition을 끄고 0으로 이동
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

    // 💡 무한 루프 처리 로직 (transition reset)
    useEffect(() => {
        if (products.length === 0) return;

        if (currentIndex === products.length - itemsToShow) {
            // 복제된 마지막 아이템을 보여준 후 0으로 즉시 이동
            const timeout = setTimeout(() => {
                if (trackRef.current) {
                    trackRef.current.style.transition = 'none';
                    setCurrentIndex(0);
                }
            }, 300); // transition 시간(0.3s)과 일치시켜 부드럽게 연결
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, products]);


    // 💡 컴포넌트 마운트 시 자동 슬라이드 시작 및 언마운트 시 해제
    useEffect(() => {
        if (products.length > 0) {
            startAutoSlide();
        }
        return () => clearInterval(intervalRef.current);
    }, [products]); // products가 로드된 후 시작


    // --- 버튼 핸들러 함수 ---
    const handlePrev = () => {
        clearInterval(intervalRef.current);

        setCurrentIndex(prevIndex => {
            if (prevIndex === 0) {
                // 1. 트랜지션 없이 마지막 복제본 시작 위치로 즉시 점프
                if (trackRef.current) {
                    trackRef.current.style.transition = 'none';
                }
                const lastRealIndex = selectedRecommendedProducts.length; // 실제 상품 리스트의 길이

                // 2. 다음 렌더링 주기에서 (setTimeout 0ms) 트랜지션을 켜고 한 칸 뒤로 이동
                setTimeout(() => {
                    if (trackRef.current) {
                        trackRef.current.style.transition = 'transform 0.3s ease-in-out';
                        setCurrentIndex(lastRealIndex - 1);
                    }
                    startAutoSlide(); // 이동 후 자동 슬라이드 재시작
                }, 0);

                // 즉시 이동할 위치를 반환 (products 배열의 실제 상품 + 복제본을 합친 길이 - itemsToShow)
                return lastRealIndex;
            }
            // 일반적인 뒤로 이동
            if (trackRef.current) {
                trackRef.current.style.transition = 'transform 0.3s ease-in-out';
            }
            startAutoSlide(); // 이동 후 자동 슬라이드 재시작
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
            // 마지막 복제본 인덱스까지 이동 허용
            if (nextIndex >= products.length) {
                return prevIndex; // 안전장치 (실제로는 마지막 인덱스까지 가게 하고 useEffect가 처리)
            }
            return nextIndex;
        });
        startAutoSlide();
    };

    // -------------------------

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
                            // transition은 useEffect에서 제어
                        }}
                    >
                        {products.map((product, index) => {
                            return <Link
                                key={index}
                                className={styles.productBox}
                                style={{ width: `${ITEM_WIDTH_REM}rem`, height: '40rem' }}
                                to={`/product/${product.productId}`}
                            >
                                {/* 상품 콘텐츠 (기존과 동일) */}
                                <img
                                    className={styles.productImg}
                                    src={product.imageSrc}
                                    alt={product.productName}
                                />
                                <div className={styles.productName}>{product.productName}</div>
                                <div className={styles.productPriceBox}>
                                    <div
                                        className={styles.productSalePrice}>
                                        {`₩ ${Math.round(product.onSale ? product.price_krw * discount : product.price_krw).toLocaleString()}`}
                                    </div>
                                    <div
                                        className={styles.productPrice}>
                                        {product.onSale ? `₩ ${product.priceKrw.toLocaleString()}` : ''}
                                    </div>
                                </div>
                                {product.onSale && <div className={styles.productOnSale}>20% SALE</div>}
                            </Link>
                        })}
                    </div>
                </div>

                {/* 💡 슬라이드 버튼 추가 */}
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
