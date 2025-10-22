import styles from "./Package.module.css";
import packageImg from "../../assets/etcImg/package.jpg";

//
function Package() {
  return (
    <>
      <div className="package-left">
        <img className="package-left-img" src={packageImg} alt="" />
      </div>
      <div className="package-right">
        <div className="package-right-title">title</div>
        <div className="package-right-subTitle">[ sub title ]</div>
        <div className="package-right-description">description</div>
        <div className="package-right-price">price</div>
        <button>BUY RIGHT NOW</button>
      </div>
    </>
  );
}

export default Package;
