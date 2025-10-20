import "./section00Styles.css";
import { useState } from "react";
import section00Img00 from "../../assets/img-section00/section00-img00.jpg";
import section00Img01 from "../../assets/img-section00/section00-img01.jpg";
import section00Img02 from "../../assets/img-section00/section00-img02.jpg";
import section00Img03 from "../../assets/img-section00/section00-img03.jpg";

function Section00() {
  const [itmes, setItems] = useState([
    {
      src: section00Img00,
      alt: "",
      title: "Kiwi",
      price: "$ 10",
      state: "BEST",
    },
    {
      src: section00Img01,
      alt: "",
      title: "Tomato",
      price: "$ 15",
      state: "BEST",
    },
    {
      src: section00Img02,
      alt: "",
      title: "Carrot",
      price: "$ 5",
      state: "HOT",
    },
    {
      src: section00Img03,
      alt: "",
      title: "Cherry",
      price: "$ 17",
      state: "BEST",
    },
  ]);

  return (
    <div className="section00-container">
      <div className="section00-title">HELLO WORLD!! LET'S DRINK WATER!</div>
      <div className="section00-subtitle">
        Try it once. It will fill your body with moisture.
      </div>
      <div className="section00-itemContainer">
        {itmes.map((item, index) => {
          return (
            <div key={item.title + index} className="section00-itemBox">
              <div className="section00-itemImgBox">
                <img className="section00-item" src={item.src} alt={item.alt} />
              </div>
              <div className="section00-item-title">{item.title}</div>
              <div className="section00-item-price">{item.price}</div>
              <div className="section00-item-stateBox">
                <div className="section00-item-state">{item.state}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section00;
