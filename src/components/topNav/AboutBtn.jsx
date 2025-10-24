import { useNavigate } from "react-router-dom";

function AboutBtn() {
  const navigate = useNavigate();

  return (
    <button
      className="topNav-aboutBtn"
      onClick={() => navigate('/About')}
    >
      ABOUT
    </button>
  );
}

export default AboutBtn;
