import { useState } from "react";

function Logo() {
  const [isClick, setIsClick] = useState(false);

  const onClickLogoBtn = () => {
    setIsClick(!isClick);
    console.log("clicked logo btn");
  };

  return (
    <button onClick={onClickLogoBtn}>
      <svg
        className="logo"
        width="160"
        // height="51.956859"
        viewBox="0 0 128.19841 51.956859"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-506.63399,-256.23136)">
          <text
            style={{
              fontSize: "26.6667px",
              fontFamily: "Arial",
              letterSpacing: "2px",
              textAlign: "start",
              writingMode: "lr-tb",
              direction: "ltr",
              textAnchor: "start",
              fill: "#000000",
              // stroke: "#000000",
              // strokeWidth: "0.377953",
              // strokeMiterlimit: 11.7,zzzzzzzzz
              paintOrder: "stroke fill markers",
            }}
            x="570.90637"
            y="274.40213"
          >
            <tspan
              x="570.90637"
              y="274.40213"
              style={{
                fontFamily: "Cambria",
                textAlign: "center",
                textAnchor: "middle",
              }}
            >
              COMPANY
            </tspan>
            <tspan
              x="571.90637"
              y="307.79089"
              style={{
                fontFamily: "Cambria",
                textAlign: "center",
                textAnchor: "middle",
              }}
            >
              LOGO
            </tspan>
          </text>
        </g>
      </svg>
    </button>
  );
}

export default Logo;
