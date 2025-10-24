import { useNavigate } from "react-router-dom";

function LogoBtn() {
  const navigate = useNavigate();

  const onClickLogoBtn = () => {
    navigate("/");
  };

  return (
    <button className="topNav-logoBtn" onClick={onClickLogoBtn}> {/* 클래스 이름 수정 */}
      <svg
        className="topNav-logo"
        width="160"
        viewBox="0 0 128.19841 51.956859"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-506.63399,-256.23136)">
          <text
            className="topNav-logoText" // 🌟 CSS Modules 클래스 적용
            x="570.90637"
            y="274.40213"
          >
            <tspan
              className="topNav-logoTspanCompany" // 🌟 CSS Modules 클래스 적용
              x="570.90637"
              y="274.40213"
            >
              COMPANY
            </tspan>
            <tspan
              className="topNav-logoTspanLogo" // 🌟 CSS Modules 클래스 적용
              x="571.90637"
              y="307.79089"
            >
              LOGO
            </tspan>
          </text>
        </g>
      </svg>
    </button>
  );
}

export default LogoBtn;