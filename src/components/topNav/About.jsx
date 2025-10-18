import { useState } from "react";

function About() {
  const [isClick, setIsClick] = useState(false);

  const onClickAboutBtn = () => {
    setIsClick(!isClick);
  };

  return (
    <button className="topNav-menu00" onClick={onClickAboutBtn}>
      ABOUT
    </button>
  );
}

export default About;
