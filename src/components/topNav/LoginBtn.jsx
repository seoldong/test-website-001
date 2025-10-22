import { useState } from "react";

function LoginBtn() {
  const [isClick, setIsClick] = useState(false);

  const onClickLoginBtn = () => {
    setIsClick(!isClick);
    console.log('clicked LoginBtn btn');
  };

  return (
    <button className="topNav-loginBtn" onClick={onClickLoginBtn}>
      LOGIN
    </button>
  );
}

export default LoginBtn;
