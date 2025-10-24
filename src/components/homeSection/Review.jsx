import { useEffect, useState } from "react";
import "./Review.css"
import { getAllReview } from "../../mockData/getData";

// 
function Review() {

    // 
    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // 
    useEffect(() => {
        const reviewData = getAllReview();
        setReviews(reviewData);
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

    // 
    return (
        <>
            <div className="review-title">REVIEW OF OUR CUSTOMERS</div>
            <div className="review-list-container">
                <div className="review-list">
                    {reviews.map((review, index) => {
                        const minIndex = (currentPage - 1) * onPageItemLength;
                        const maxIndex = currentPage * onPageItemLength;
                        if (index < minIndex || index >= maxIndex) return;

                        const rating = review.rating;
                        const maxRating = 5;
                        const stars = Array.from({ length: maxRating });

                        return (
                            <div className="review-box" key={`item${index}`} >
                                <img className="review-img" src={review.imageLink} />
                                <div className="review-text">{review.content}</div>
                                <div className="review-ratingBox">
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

                            </div>
                        )
                    })}
                </div>
                <div className="review-board">
                    <button onClick={() => onClickMoveLeftPageBtn()}>◀</button>
                    {boardPageBtnArr.map((pageBtn, index) => {
                        return <button key={pageBtn + index} onClick={() => onClickBoardPageBtn(pageBtn)}>{pageBtn}</button>
                    })}
                    <button onClick={() => onClickMoveRightPageBtn()}>▶</button>
                </div>
            </div>
        </>
    )
}

export default Review;