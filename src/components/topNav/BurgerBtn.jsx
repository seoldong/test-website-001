import styles from "./index.module.css"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { isOpenUndersidePanel } from "../../redux/slices/topnav/undersideSlice";


// 
function BurgerBtn() {
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);

  const onClickBurgerBtn = () => {
    setIsClick(!isClick);
    dispatch(isOpenUndersidePanel());
  };

  return (
    <button className={styles.burgerBtn} onClick={onClickBurgerBtn}>
      <svg
        className={styles.burgerSvg}
        viewBox="0 0 200.00002 150.11649"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-4.999996)">
          <rect
            className={styles.burgerBar}
            id="rect1"
            width="199.91292"
            height="24.91291"
            x="5.043541"
            y="0.043545015"
            ry="12.456455"
          />
          <rect
            className={styles.burgerBar}
            id="rect1-7"
            width="199.91292"
            height="24.91291"
            x="5.043541"
            y="62.601788"
            ry="12.456455"
          />
          <rect
            className={styles.burgerBar}
            id="rect1-76"
            width="199.91292"
            height="24.91291"
            x="5.043541"
            y="125.16003"
            ry="12.456455"
          />
        </g>
      </svg>
    </button>
  );
}

export default BurgerBtn;
