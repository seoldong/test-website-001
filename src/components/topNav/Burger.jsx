import { useDispatch, useSelector } from "react-redux";
import "./topNavStyles.css";
import { useState } from "react";
import { isOpenUndersidePanel } from "../../redux/slices/topnav/undersideSlice";

// 
function Burger() {
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);

  const onClickBurgerBtn = () => {
    setIsClick(!isClick);
    dispatch(isOpenUndersidePanel());
    console.log("clicked buger btn");
  };

  return (
    <>
      <button className="topNav-burger-Btn" onClick={onClickBurgerBtn}>
        <svg
          className="burger-svg"
          width="35"
          viewBox="0 0 200.00002 150.11649"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-4.999996)">
            {/* 상단 막대 */}
            <rect
              style={{
                fill: "#000000",
                stroke: "#000000",
                strokeWidth: "0.08709",
                strokeMiterlimit: 11.7,
                paintOrder: "stroke fill markers",
              }}
              id="rect1"
              width="199.91292"
              height="24.91291"
              x="5.043541"
              y="0.043545015"
              ry="12.456455"
            />

            {/* 중간 막대 */}
            <rect
              style={{
                fill: "#000000",
                stroke: "#000000",
                strokeWidth: "0.08709",
                strokeMiterlimit: 11.7,
                paintOrder: "stroke fill markers",
              }}
              id="rect1-7"
              width="199.91292"
              height="24.91291"
              x="5.043541"
              y="62.601788"
              ry="12.456455"
            />

            {/* 하단 막대 */}
            <rect
              style={{
                fill: "#000000",
                stroke: "#000000",
                strokeWidth: "0.08709",
                strokeMiterlimit: 11.7,
                paintOrder: "stroke fill markers",
              }}
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
    </>
  );
}

export default Burger;
