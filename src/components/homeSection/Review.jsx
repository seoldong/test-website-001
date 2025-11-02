import styles from "./Review.module.css"
// 
import { useEffect, useState, useMemo } from "react"; // useMemo 추가
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// 
import { getAllDrinkReviews } from "../../redux/slices/review/drinkRivews"
import { getAllMaskPackReviews } from "../../redux/slices/review/maskPackRivews";

const compareDates = (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime();

// 
function Review() {
    const dispatch = useDispatch();
    const drinkReviews = useSelector((state) => state.drinkReviews);
    const maskPackReviews = useSelector((state) => state.maskPackReviews);
    // 
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState('Newest'); // 현재 활성화된 필터 상태

    // drink, maskpack 전부 받기
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);
            const drinkReviewPath = '/data/review/review-drink.json';
            const maskpackReviewPath = '/data/review/review-maskPack.json';

            try {
                const [drinkResponse, maskpackResponse] = await Promise.all([
                    fetch(drinkReviewPath),
                    fetch(maskpackReviewPath)
                ]);
                if (!drinkResponse.ok || !maskpackResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const [drinks, maskpacks] = await Promise.all([
                    drinkResponse.json(),
                    maskpackResponse.json()
                ]);

                dispatch(getAllDrinkReviews(drinks));
                dispatch(getAllMaskPackReviews(maskpacks));

            } catch (error) {
                setError('Failed to fetch data: ' + error.message);
                console.error("Fetching data failed", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [dispatch])

    // 
    const sortInitReviews = useMemo(() => {
        const allReviews = [...drinkReviews, ...maskPackReviews];
        const sortedReviews = allReviews.sort((a, b) => compareDates(b, a));
        return sortedReviews;
    }, [drinkReviews, maskPackReviews]);

    useEffect(() => {
        setReviews(sortInitReviews);
    }, [sortInitReviews]);

    // 
    const onPageItemLength = 8;
    const totalItems = reviews.length;
    const boardPage = Math.max(1, Math.ceil(totalItems / onPageItemLength));

    const getPaginationButtons = useMemo(() => {
        const maxButtons = 5;
        const buttonArray = [];

        const startPage = Math.floor((currentPage - 1) / maxButtons) * maxButtons + 1;
        const endPage = Math.min(startPage + maxButtons - 1, boardPage);

        for (let i = startPage; i <= endPage; i++) {
            buttonArray.push(i);
        }
        return { buttonArray, startPage, endPage };
    }, [currentPage, boardPage]);

    // 
    const onClickBoardPageBtn = (pageNum) => {
        setCurrentPage(pageNum)
    }

    const onClickMoveFirstPage = () => {
        setCurrentPage(1);
    }

    const onClickMoveLastPage = () => {
        setCurrentPage(boardPage);
    }

    const onClickMoveLeftPageBtn = () => {
        if (currentPage === 1) return;
        setCurrentPage((prev) => prev - 1)
    }

    const onClickMoveRightPageBtn = () => {
        if (currentPage === boardPage) return;
        setCurrentPage(prev => prev + 1)
    }

    // --- 정렬 함수 구현 ---
    const sortReviews = (sortType) => {
        let sortedArray = [...reviews];

        // 정렬 기준이 변경되면 1페이지로 이동
        if (sortType !== activeFilter) {
            setCurrentPage(1);
        }

        switch (sortType) {
            case 'Newest':
                sortedArray.sort((a, b) => compareDates(b, a));
                break;
            case 'Oldest':
                sortedArray.sort((a, b) => compareDates(a, b));
                break;
            case 'Highest Rating':
                sortedArray.sort((a, b) => b.rating - a.rating);
                break;
            case 'Lowest Rating':
                sortedArray.sort((a, b) => a.rating - b.rating);
                break;
            default:
                break;
        }

        setReviews(sortedArray);
        setActiveFilter(sortType); // 활성 필터 업데이트
    }

    // 필터 버튼 클릭 핸들러
    const onClickNewest = () => { sortReviews('Newest'); }
    const onClickOldest = () => { sortReviews('Oldest'); }
    const onClickHighestRating = () => { sortReviews('Highest Rating'); }
    const onClickLowestRating = () => { sortReviews('Lowest Rating'); }

    // 현재 페이지에 표시할 리뷰 목록 계산
    const startIndex = (currentPage - 1) * onPageItemLength;
    const currentReviews = reviews.slice(startIndex, startIndex + onPageItemLength);

    // useMemo의 결과를 구조 분해 할당
    const { buttonArray, startPage, endPage } = getPaginationButtons;

    if (loading) return <div className={styles.bestProducts}>Loading...</div>;
    if (error) return <div className={styles.bestProducts}>Error: {error}</div>;

    // 
    return (
        <section className={styles.review}>
            <div className={styles.title}>REVIEW OF OUR CUSTOMERS</div>
            <div className={styles.listFilterBox}>
                <button
                    className={`${styles.listFilter} ${activeFilter === 'Newest' ? styles.active : ''}`}
                    onClick={onClickNewest}
                >
                    Newest
                </button>
                <button
                    className={`${styles.listFilter} ${activeFilter === 'Oldest' ? styles.active : ''}`}
                    onClick={onClickOldest}
                >
                    Oldest
                </button>
                <button
                    className={`${styles.listFilter} ${activeFilter === 'Highest Rating' ? styles.active : ''}`}
                    onClick={onClickHighestRating}
                >
                    Highest Rating
                </button>
                <button
                    className={`${styles.listFilter} ${activeFilter === 'Lowest Rating' ? styles.active : ''}`}
                    onClick={onClickLowestRating}
                >
                    Lowest Rating
                </button>
            </div>
            <div className={styles.listContainer}>
                <div className={styles.list}>
                    {currentReviews.map((review) => {
                        const id = review.productId;
                        const rating = review.rating;
                        const maxRating = 5;
                        const stars = Array.from({ length: maxRating });
                        // 
                        return (
                            <Link
                                className={styles.box}
                                key={review.id}
                                to={'/product/' + id}
                            >
                                <img className={styles.image} src={review.imageLink} alt={review.product_name} />
                                <div className={styles.content}>{review.content}</div>
                                <div className={styles.ratingBox}>
                                    <div>{review.user_name}</div>
                                    <div>
                                        {stars.map((_, index) => {
                                            const starNumber = index + 1;

                                            return (
                                                <span
                                                    key={index}
                                                    className={starNumber <= rating ? styles.filledStar : styles.emptyStar}
                                                >
                                                    {starNumber <= rating ? '★' : '☆'}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>

                <div className={styles.board}>
                    <button onClick={onClickMoveFirstPage} disabled={currentPage === 1}>«</button>
                    <button onClick={onClickMoveLeftPageBtn} disabled={currentPage === 1}>◀</button>
                    {startPage > 1 && <button onClick={() => onClickBoardPageBtn(startPage - 1)}>...</button>}
                    {buttonArray.map((pageBtn) => {
                        return <button
                            key={pageBtn}
                            onClick={() => onClickBoardPageBtn(pageBtn)}
                            className={pageBtn === currentPage ? styles.activePage : ''}
                        >
                            {pageBtn}
                        </button>
                    })}
                    {endPage < boardPage && <button onClick={() => onClickBoardPageBtn(endPage + 1)}>...</button>}
                    <button onClick={onClickMoveRightPageBtn} disabled={currentPage === boardPage}>▶</button>
                    <button onClick={onClickMoveLastPage} disabled={currentPage === boardPage}>»</button>
                </div>
            </div>
        </section>
    )
}

export default Review;