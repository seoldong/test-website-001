import { useState } from "react";

function AboutBtn() {
  const [isClick, setIsClick] = useState(false);

  const onClickAboutBtn = () => {
    setIsClick(!isClick);
  };

  return (
    <button className="topNav-aboutBtn" onClick={onClickAboutBtn}>
      ABOUT
    </button>
  );
}

export default AboutBtn;
