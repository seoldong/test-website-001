import { useState } from "react";

function ReviewBtn() {
  const [isClick, setIsClick] = useState(false);

  const onClickReviewBtn = () => {
    setIsClick(!isClick);
    console.log('clicked Review btn');
  };

  return (
    <button className="topNav-reviewBtn" onClick={onClickReviewBtn}>
      REVIEW
    </button>
  );
}

export default ReviewBtn;
