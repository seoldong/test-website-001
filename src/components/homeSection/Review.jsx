import styles from "./Review.module.css"
// 
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// 
import { fetchBestReviewsThunk } from "../../redux/slices/review/bestReviews";
import ReviewBoard from "../common/reviewBoard";

// 
function Review() {
    const dispatch = useDispatch();
    const bestReviews = useSelector((state) => state.bestReviews);

    // 
    useEffect(() => {
        dispatch(fetchBestReviewsThunk());
    }, [dispatch])

    //
    const handleRefetch = useCallback(() => {
        dispatch(fetchBestReviewsThunk());
    }, [dispatch]);

    // 
    return (
        <section className={styles.review}>
            <div className={styles.title}>REVIEW OF OUR CUSTOMERS</div>
            <div className={styles.ReviewBoard}>
                <ReviewBoard reviewData={bestReviews} onRetry={handleRefetch} dataName={'best review'} />
            </div>
        </section>
    )
}

export default Review;