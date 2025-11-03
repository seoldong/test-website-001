import styles from "./index.module.css";
// 
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
// 
function LogoBtn() {
  const navigate = useNavigate();

  const onClickLogoBtn = () => {
    navigate("/");
  };

  return (
    <button className={styles.logoBtn} onClick={onClickLogoBtn}> {/* 클래스 이름 수정 */}
      <img className={styles.logoImg} src={logo} />
    </button>
  );
}

export default LogoBtn;