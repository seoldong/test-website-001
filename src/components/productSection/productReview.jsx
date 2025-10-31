import styles from ".//Review.module.css"

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { getAllReview } from "../../mockData/getData";

// 'date' 문자열을 Date 객체로 변환하여 비교하는 헬퍼 함수
const compareDates = (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime();

// 
function ProductReview() {
    // 원본 데이터를 저장하고 정렬된 데이터를 보여줄 상태
    const [originalReviews, setOriginalReviews] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState('Newest'); // 현재 활성화된 필터 상태

    // 
    useEffect(() => {
        const reviewData = getAllReview();
        // 1. 원본 데이터 저장
        setOriginalReviews(reviewData);
        // 2. 초기 정렬: '최신순' (날짜 내림차순)으로 초기 목록 설정
        // 일반적으로 최신순이 기본 정렬이므로 초기 로딩 시 적용
        const sortedData = [...reviewData].sort((a, b) => compareDates(b, a));
        setReviews(sortedData);
    }, [])

    const onPageItemLength = 8;
    const boardPage = Math.ceil(reviews.length / onPageItemLength);
    const boardPageBtnArr = [];
    for (let i = 1; i <= boardPage; i++) {
        boardPageBtnArr.push(i);
    }

    const onClickBoardPageBtn = (pageNum) => {
        setCurrentPage(pageNum)
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
                // 최신순: 날짜 내림차순 (가장 최근 날짜가 먼저 오도록)
                sortedArray.sort((a, b) => compareDates(b, a));
                break;
            case 'Oldest':
                // 과거순: 날짜 오름차순 (가장 오래된 날짜가 먼저 오도록)
                sortedArray.sort((a, b) => compareDates(a, b));
                break;
            case 'Highest Rating':
                // 높은 별점순: 별점 내림차순
                sortedArray.sort((a, b) => b.rating - a.rating);
                break;
            case 'Lowest Rating':
                // 낮은 별점순: 별점 오름차순
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


    // 
    return (
        <>
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
                    {/* currentReviews를 사용하여 현재 페이지 리뷰만 표시 */}
                    {currentReviews.map((review, index) => {
                        // 페이지네이션 로직을 slice로 처리했으므로, 여기서는 index 체크가 필요 없습니다.
                        // (단, 고유 key가 필요한데, review.id가 고유하다고 가정하고 index 대신 사용)

                        const rating = review.rating;
                        const maxRating = 5;
                        const stars = Array.from({ length: maxRating });

                        return (
                            <Link className={styles.box} key={review.id} to={`/product/${review.product_id}`}>
                                <img className={styles.image} src={review.imageLink} alt={review.product_name} />
                                <div className={styles.content}>{review.content}</div>
                                <div className={styles.ratingBox}>
                                    <div>{review.user_name}</div>
                                    <div>
                                        {stars.map((_, index) => {
                                            const starNumber = index + 1;

                                            return (
                                                <span key={index}>
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
                    <button onClick={() => onClickMoveLeftPageBtn()}>◀</button>
                    {boardPageBtnArr.map((pageBtn, index) => {
                        return <button
                            key={pageBtn + index}
                            onClick={() => onClickBoardPageBtn(pageBtn)}
                            className={pageBtn === currentPage ? styles.activePage : ''}
                        >
                            {pageBtn}
                        </button>
                    })}
                    <button onClick={() => onClickMoveRightPageBtn()}>▶</button>
                </div>
            </div>
        </>
    )
}

export default ProductReview;