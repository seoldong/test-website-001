import "./Section01Styles.css";
import section01Img from "../../assets/img-section01/section01.jpg";

//
function Section01() {
  return (
    <div className="section01-container">
      <div className="section01-left">
        <img className="section01-left-img" src={section01Img} alt="section01" />
      </div>
      <div className="section01-right">
        <div className="section01-right-title">title</div>
        <div className="section01-right-subTitle">[ sub title ]</div>
        <div className="section01-right-description">description</div>
        <div className="section01-right-price">price</div>
        <button>BUY RIGHT NOW</button>
      </div>
    </div>
  );
}

export default Section01;
