import { useState } from "react";

function Event() {
  const [isClick, setIsClick] = useState(false);

  const onClickEventBtn = () => {
    setIsClick(!isClick);
    console.log('clicked Event btn');
  };

  return (
    <button className="topNav-menu02" onClick={onClickEventBtn}>
      EVENT
    </button>
  );
}

export default Event;
