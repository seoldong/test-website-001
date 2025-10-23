import { useEffect, useState, useRef } from "react";
import styles from "./Recommended.module.css";
import { getRecommendedJuice } from "../../mockData/getData";

// 
const ProductSlider = () => {
    const trackRef = useRef(null);
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;
    const ITEM_WIDTH_REM = 30;
    const discount = 0.8
    // 자동 슬라이드 인터벌 ID를 저장할 ref
    const intervalRef = useRef(null);

    // 상품 목록 초기화 (무한 슬라이드를 위한 복제 포함)
    useEffect(() => {
        const allProducts = getRecommendedJuice;
        setProducts([...allProducts, ...allProducts.slice(0, itemsToShow)]);
    }, []);

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
        clearInterval(intervalRef.current); // 클릭 시 자동 슬라이드 일시 정지
        if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.3s ease-in-out';
        }

        setCurrentIndex(prevIndex => {

            if (prevIndex === 0) {
                const lastRealIndex = products.length - itemsToShow;
                trackRef.current.style.transition = 'none';
                const tempIndex = lastRealIndex;

                setTimeout(() => {
                    if (trackRef.current) {
                        trackRef.current.style.transition = 'transform 0.3s ease-in-out';
                        setCurrentIndex(lastRealIndex - 1);
                    }
                }, 0);
                return tempIndex;
            }
            return prevIndex - 1;
        });
        startAutoSlide(); // 다시 자동 슬라이드 시작
    };

    const handleNext = () => {
        clearInterval(intervalRef.current);

        if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.3s ease-in-out';
        }

        setCurrentIndex(prevIndex => {
            const lastRealIndex = products.length - itemsToShow;
            const nextIndex = prevIndex + 1;

            if (nextIndex > lastRealIndex) {
                return lastRealIndex;
            }
            return nextIndex;
        });
        startAutoSlide();
    };

    // -------------------------

    return (
        <>
            <div className={styles.title}>{'추천 주스 🍊 (RECOMMENDED JUICES)'}</div>
            <div className={styles.description}>{'활력을 불어넣는 오늘의 추천 주스를 만나보세요!'}</div>
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
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className={styles.productBox}
                                style={{ width: `${ITEM_WIDTH_REM}rem`, height: '40rem' }}
                            >
                                {/* 상품 콘텐츠 (기존과 동일) */}
                                <img
                                    className={styles.productImg}
                                    src={product.imageSrc}
                                    alt={product.productName}
                                />
                                <div className={styles.productName}>{product.productName}</div>
                                <div className={styles.productPriceBox}>
                                    <div className={styles.productSalePrice}>{`${Math.round(product.onSale ? product.price_krw * discount : product.price_krw).toLocaleString()}원`}</div>
                                    <div className={styles.productPrice}>{product.onSale ? `${product.price_krw.toLocaleString()}원` : ''}</div>
                                </div>
                                {product.onSale && <div className={styles.productOnSale}>20% SALE</div>}
                            </div>
                        ))}
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
            <div className={styles.viewAllProducts}>
                <button>VIEW ALL PRODUCT</button>
            </div>
        </>
    );
};

export default ProductSlider;