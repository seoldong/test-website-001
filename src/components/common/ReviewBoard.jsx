import styles from "./ReviewBoard.module.css"
// 
import { useEffect, useMemo, useState } from "react";
// 
import Loading from "./Loading";
import Error from "./Error";
import NoData from "./NoData";
import { Link } from "react-router-dom";

// 
function ReviewBoard({ reviewData, onRetry, dataName }) {
    const { data, loading, error } = reviewData;
    const [currentPage, setCurrentPage] = useState(1);
    const [onPageItemLength, setOnPageItemLength] = useState(8);

    const dataMissing = data.length === 0;
    const totalItems = data.length;
    const boardPage = Math.max(1, Math.ceil(totalItems / onPageItemLength));

    const updateItemLength = () => {
        const width = window.innerWidth;
        if (width <= 576) {
            setOnPageItemLength(4); // 576px 미만 (모바일)
        } else {
            setOnPageItemLength(8); // 576px 이상 (태블릿/데스크톱)
        }
    };

    useEffect(() => {
        updateItemLength();
        window.addEventListener('resize', updateItemLength);

        return () => {
            window.removeEventListener('resize', updateItemLength);
        };
    }, []);

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

    const startIndex = (currentPage - 1) * onPageItemLength;
    const currentReviews = data.slice(startIndex, startIndex + onPageItemLength);
    const { buttonArray, startPage, endPage } = getPaginationButtons;

    if (loading) return <Loading />
    if (error) return <Error onRetry={onRetry} dataName={dataName} />;
    if (dataMissing) return <NoData onRetry={onRetry} dataName={dataName} />

    return (
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
                            className={styles.reviewBox}
                            key={review.id}
                            to={'/product/' + id}
                        >
                            <img className={styles.reviewImage} src={review.reviewImageLink} alt={review.product_name} />
                            <div className={styles.content}>{review.content}</div>
                            <div className={styles.userBox}>
                                <div className={styles.userProfile}>
                                    <img className={styles.userImg} src={review.userImageLink} />
                                    <div>{review.userName}</div>
                                </div>
                                <div className={styles.ratingBox}>
                                    <div className={styles.date}>{review.date}</div>
                                    <div className={styles.startBox}>
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
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className={styles.board}>
                <button className={styles.arrow} onClick={onClickMoveFirstPage} disabled={currentPage === 1}>«</button>
                <button className={styles.boubbleArrow} onClick={onClickMoveLeftPageBtn} disabled={currentPage === 1}>◀</button>
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
                <button className={styles.arrow} onClick={onClickMoveRightPageBtn} disabled={currentPage === boardPage}>▶</button>
                <button className={styles.boubbleArrow} onClick={onClickMoveLastPage} disabled={currentPage === boardPage}>»</button>
            </div>
        </div>
    )
}

export default ReviewBoard;