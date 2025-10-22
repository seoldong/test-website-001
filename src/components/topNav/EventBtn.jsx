import { useState } from "react";

function EventBtn() {
  const [isClick, setIsClick] = useState(false);

  const onClickEventBtn = () => {
    setIsClick(!isClick);
    console.log('clicked Event btn');
  };

  return (
    <button className="topNav-eventBtn" onClick={onClickEventBtn}>
      EVENT
    </button>
  );
}

export default EventBtn;
