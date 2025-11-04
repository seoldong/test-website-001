import styles from "./Recommended.module.css";
// 
import { useEffect, useState, useRef, useCallback, use } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// 
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { fetchRecommendedProductsThunk } from "../../redux/slices/product/fetchRecommendedProductsThunk";
//
const Recommended = () => {

    const dispatch = useDispatch();
    // Redux 상태에서 products, loading, error 모두 가져옴
    const { products: recommendedProducts, loading, error } = useSelector((state) => state.recommendedProducts);

    const trackRef = useRef(null);
    const intervalRef = useRef(null);
    const [targetRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const [currentIndex, setCurrentIndex] = useState(0);
    // 로딩/에러 상태는 Redux에서 관리하므로 컴포넌트의 useState는 제거
    // const [loading, setLoading] = useState(true); 
    // const [error, setError] = useState(null); 

    // 
    const itemsToShow = 3;
    const ITEM_WIDTH_REM = 30;

    // ⚠️ 이전 fetchRecommendedProducts 함수 삭제 (Redux Thunk로 이동됨) 

    // 🚨 데이터 Fetching useEffect 수정: isVisible과 Redux 상태를 기반으로 Thunk 디스패치
    useEffect(() => {
        // isVisible하고, 아직 데이터가 없고, 현재 로딩 중이 아닐 때만 fetch
        if (isVisible && recommendedProducts.length === 0 && !loading && !error) {
            dispatch(fetchRecommendedProductsThunk());
        }
    }, [isVisible, recommendedProducts.length, loading, error, dispatch]); // 의존성 배열에 loading, error, dispatch 추가

    // 인터벌 시작함수
    const startAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setCurrentIndex(prevIndex => {
                if (trackRef.current) {
                    trackRef.current.style.transition = 'transform 0.3s ease-in-out';
                }
                const nextIndex = prevIndex + 1;
                return nextIndex;
            });
        }, 3000);
    };

    // 초기화 이펙트
    useEffect(() => {
        if (recommendedProducts.length === 0) return;

        if (currentIndex === recommendedProducts.length) { // 🚨 마지막 아이템 인덱스 수정 (복제본이 있으므로 products.length와 비교)
            const timeout = setTimeout(() => {
                if (trackRef.current) {
                    trackRef.current.style.transition = 'none';
                    setCurrentIndex(0);
                }
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, recommendedProducts]);

    // 이벤트 시작 이펙트
    useEffect(() => {
        if (recommendedProducts.length > 0) {
            startAutoSlide();
        }
        return () => clearInterval(intervalRef.current);
    }, [recommendedProducts]);

    // ⚠️ 슬라이드 로직의 복잡성/중복성에 대한 내용은 이전에 논의되었습니다. (handlePrev/handleNext)
    // 현재 질문의 초점인 Redux 통합에 맞춰 해당 함수는 그대로 유지합니다.

    // 
    const handlePrev = () => {
        clearInterval(intervalRef.current);
        setCurrentIndex(prevIndex => {
            if (prevIndex === 0) {
                if (trackRef.current) {
                    trackRef.current.style.transition = 'none';
                }
                const lastRealIndex = recommendedProducts.length;
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
            // 🚨 무한 슬라이드를 위해 수정: 마지막 인덱스에 도달하면 0으로 순간 이동 (클론이 두 배이므로 로직 변경 필요)
            // 현재 코드는 무한 루프가 아니라 마지막에 멈추는 방식이므로, 무한 슬라이드에 맞게 수정하려면 아래 로직을 변경해야 합니다.

            // 기존 코드:
            // if (nextIndex >= recommendedProducts.length) {
            //     return prevIndex;
            // }

            // 임시로 무한 루프 초기화 로직을 따르도록 수정 (handlePrev와 대칭)
            if (nextIndex >= recommendedProducts.length) {
                // 이 경우 nextIndex === recommendedProducts.length 가 됩니다.
                const timeout = setTimeout(() => {
                    if (trackRef.current) {
                        trackRef.current.style.transition = 'none';
                        setCurrentIndex(0);
                    }
                }, 300); // 0.3s 트랜지션이 끝난 후 순간 이동

                // 다음 상태 업데이트를 마지막 복제본으로 이어지게 함 (트랜지션 0.3s)
                return nextIndex;
            }
            return nextIndex;
        });
        startAutoSlide();
    };

    // 로딩/에러 상태를 Redux에서 가져온 상태로 변경
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // 
    return (
        <div
            className={styles.recommended}
            ref={targetRef}
        >
            {/* ... JSX 코드는 동일하게 유지 ... */}
            <div className={styles.title}>{'Recommended product'}</div>
            <div className={styles.description}>{'Discover today\'s recommended product to revitalize your day!'}</div>
            <div className={styles.slide}>
                <button
                    className={`${styles.slideBtn} ${styles.prevBtn}`}
                    onClick={handlePrev}
                >{`⟨`}</button>
                <div className={styles.slideFrame}>
                    <div
                        className={styles.slideTrack}
                        ref={trackRef}
                        style={{
                            // recommendedProducts.length는 이제 products 배열의 길이
                            width: `${ITEM_WIDTH_REM * recommendedProducts.length * 2}rem`,
                            transform: `translateX(-${currentIndex * ITEM_WIDTH_REM}rem)`,
                        }}
                    >
                        {[...recommendedProducts, ...recommendedProducts].map((product, index) => {
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
                                        {`$ ${Math.round(product.onSale ? product.priceKrw * product.discountRate : product.priceKrw).toLocaleString()}`}
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
                    className={`${styles.slideBtn} ${styles.nextBtn}`}
                    onClick={handleNext}
                >{`⟩`}</button>
            </div>
        </div>
    );
};

export default Recommended;