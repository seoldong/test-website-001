import styles from "./Recommended.module.css";
// 
import { useEffect, useState, useRef, useCallback } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// 
// import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { fetchRecommendedProductsThunk, resetRecommendedProducts } from "../../redux/slices/product/recommendedProducts";
import ProductSlide from "../common/ProductSlide";
//
const Recommended = () => {

    const dispatch = useDispatch();
    const slideData = useSelector((state) => state.recommendedProducts);

    // 
    useEffect(() => {
        dispatch(fetchRecommendedProductsThunk());
    }, [dispatch]);

    const handleRefetch = useCallback(() => {
        dispatch(fetchRecommendedProductsThunk());
    }, [dispatch]);

    // useEffect(() => {
    //     // 1. 데이터가 없으면 실행할 필요가 없습니다.
    //     if (recommendedProducts.length === 0) return;

    //     // 2. 화면에 보이는 경우 (isVisible === true)
    //     if (isVisible) {
    //         startAutoSlide(); // 자동 슬라이드 시작
    //     } else {
    //         // 3. 화면에서 사라진 경우 (isVisible === false)
    //         if (intervalRef.current) {
    //             clearInterval(intervalRef.current); // 자동 슬라이드 멈춤
    //         }
    //     }

    //     // 4. 컴포넌트 정리 또는 의존성 변경 시 인터벌 정리
    //     return () => clearInterval(intervalRef.current);

    //     // 5. ✨ isVisible이 바뀔 때마다 이펙트가 재실행됩니다.
    // }, [recommendedProducts, isVisible]);

    // // 
    // const handlePrev = () => {
    //     clearInterval(intervalRef.current);
    //     setCurrentIndex(prevIndex => {
    //         if (prevIndex === 0) {
    //             if (trackRef.current) {
    //                 trackRef.current.style.transition = 'none';
    //             }
    //             const lastRealIndex = recommendedProducts.length;
    //             setTimeout(() => {
    //                 if (trackRef.current) {
    //                     trackRef.current.style.transition = 'transform 0.3s ease-in-out';
    //                     setCurrentIndex(lastRealIndex - 1);
    //                 }
    //                 if (isVisible) startAutoSlide();
    //             }, 0);
    //             return lastRealIndex;
    //         }
    //         if (trackRef.current) {
    //             trackRef.current.style.transition = 'transform 0.3s ease-in-out';
    //         }
    //         if (isVisible) startAutoSlide();
    //         return prevIndex - 1;
    //     });
    // };

    // const handleNext = () => {
    //     clearInterval(intervalRef.current);

    //     if (trackRef.current) {
    //         trackRef.current.style.transition = 'transform 0.3s ease-in-out';
    //     }

    //     setCurrentIndex(prevIndex => {
    //         const nextIndex = prevIndex + 1;
    //         // 🚨 무한 슬라이드를 위해 수정: 마지막 인덱스에 도달하면 0으로 순간 이동 (클론이 두 배이므로 로직 변경 필요)
    //         // 현재 코드는 무한 루프가 아니라 마지막에 멈추는 방식이므로, 무한 슬라이드에 맞게 수정하려면 아래 로직을 변경해야 합니다.

    //         // 기존 코드:
    //         // if (nextIndex >= recommendedProducts.length) {
    //         //     return prevIndex;
    //         // }

    //         // 임시로 무한 루프 초기화 로직을 따르도록 수정 (handlePrev와 대칭)
    //         if (nextIndex >= recommendedProducts.length) {
    //             // 이 경우 nextIndex === recommendedProducts.length 가 됩니다.
    //             const timeout = setTimeout(() => {
    //                 if (trackRef.current) {
    //                     trackRef.current.style.transition = 'none';
    //                     setCurrentIndex(0);
    //                 }
    //             }, 300); // 0.3s 트랜지션이 끝난 후 순간 이동

    //             // 다음 상태 업데이트를 마지막 복제본으로 이어지게 함 (트랜지션 0.3s)
    //             return nextIndex;
    //         }
    //         return nextIndex;
    //     });
    //     startAutoSlide();
    // };

    // const handleReload = () => {
    //     dispatch(resetRecommendedProducts());
    //     dispatch(fetchRecommendedProductsThunk());
    // }

    // if (dataIsMissing) return <div ref={targetRef} style={{ width: '100%', height: '1200px' }}>Loading... <button onClick={handleReload}>reload</button></div>;
    // if (error) return <div ref={targetRef} style={{ width: '100%', height: '1200px' }}>Error: {error}</div>;

    // 



    return (
        <div
            className={styles.recommended}
            // ref={targetRef}
        >
            <div className={styles.title}>{'Recommended product'}</div>
            <div className={styles.description}>{'Discover today\'s recommended product to revitalize your day!'}</div>
            <ProductSlide slideData={slideData} onRetry={handleRefetch} dataName={'recommended product'} />

            {/* <div className={styles.slide}>
                <button
                    className={`${styles.slideBtn} ${styles.prevBtn}`}
                    onClick={handlePrev}
                >{`⟨`}</button>
                <div className={styles.slideFrame}>
                    <div
                        className={styles.slideTrack}
                        ref={trackRef}
                        style={{
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
            </div> */}

        </div>
    );
};

export default Recommended;