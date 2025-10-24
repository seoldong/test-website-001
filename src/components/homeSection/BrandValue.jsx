import styles from "./BrandValue.module.css";
import brandValue from "../../assets/etcImg/brandValue.jpg";

//
function BrandValue() {
  const titleFirstLine = `WE ARE ALWAYS`;
  const titleSecondLine = `brandValue:`;
  const description = `We take pride in sharing our journey of excellence and commitment to our customers. We showcase our achievements, innovations, and the values that drive us forward. It's more about our dedication to quality, sustainability, and creating positive impacts in the communities we serve.`;

  return (
    <>
      <div className={styles.topContainer}>
        <div className="brandValue-text-block">
          <h2 className="brandValue-title">
            {titleFirstLine}
            <br />
            {titleSecondLine}
          </h2>
          <p className="brandValue-description">{description}</p>
        </div>

        <div className="brandValue-attributes">
          <div className="attribute-item">
            <span className="attribute-text">VALUE01</span>
            <span className="attribute-icon">✓</span>
          </div>
          <div className="attribute-item">
            <span className="attribute-text">VALUE02</span>
            <span className="attribute-icon">✓</span>
          </div>
          <div className="attribute-item">
            <span className="attribute-text">VALUE03</span>
            <span className="attribute-icon">✓</span>
          </div>
          <div className="attribute-item">
            <span className="attribute-text">VALUE04</span>
            <span className="attribute-icon">✓</span>
          </div>
          <div className="attribute-item">
            <span className="attribute-text">VALUE05</span>
            <span className="attribute-icon">✓</span>
          </div>
        </div>
      </div>

      <div className="brandValue-image-container">
        <img
          src={brandValue}
          alt="Fresh fruits being washed"
          className="brandValue-main-image"
        />
      </div>
    </>
  );
}

export default BrandValue;
