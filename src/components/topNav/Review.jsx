import { useState } from "react";

function Review() {
  const [isClick, setIsClick] = useState(false);

  const onClickReviewBtn = () => {
    setIsClick(!isClick);
    console.log('clicked Review btn');
  };

  return (
    <button className="topNav-menu03" onClick={onClickReviewBtn}>
      REVIEW
    </button>
  );
}

export default Review;
