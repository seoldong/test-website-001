import { useState } from "react";

function Login() {
  const [isClick, setIsClick] = useState(false);

  const onClickLoginBtn = () => {
    setIsClick(!isClick);
    console.log('clicked Login btn');
  };

  return (
    <button className="login" onClick={onClickLoginBtn}>
      LOGIN
    </button>
  );
}

export default Login;
