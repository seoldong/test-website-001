import styles from "./Recommended.module.css";
// 
import { useEffect, useCallback, useState, Activity } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// 
// import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { fetchRecommendedProductsThunk } from "../../redux/slices/product/recommendedProducts";
import ProductSlide from "../common/ProductSlide";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

//
const Recommended = () => {

    const dispatch = useDispatch();
    const slideData = useSelector((state) => state.recommendedProducts);
    const [targetRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [isSlideOpen, setIsSlideOpen] = useState(false);

    // 
    useEffect(() => {
        dispatch(fetchRecommendedProductsThunk());
    }, [dispatch]);

    // 
    const handleRefetch = useCallback(() => {
        dispatch(fetchRecommendedProductsThunk());
    }, [dispatch]);

    // 
    useEffect(() => {
        if (slideData.data.length === 0) return;
        setIsSlideOpen(isVisible)
    }, [slideData.data, isVisible]);

    // 
    return (
        <section
            className={styles.recommended}
            ref={targetRef}
        >
            <div className={styles.title}>{'Recommended product'}</div>
            <div className={styles.description}>{'Discover today\'s recommended product to revitalize your day!'}</div>
            <div className={styles.slide}>
                <Activity mode={isSlideOpen ? 'visible' : 'hidden'} >
                    <ProductSlide slideData={slideData} onRetry={handleRefetch} dataName={'recommended product'} />
                </Activity>
            </div>
        </section>
    );
};

export default Recommended;