import styles from "./BrandValue.module.css";
import brandValue from "../../assets/etcImg/brandValue.jpg";

//
function BrandValue() {

  const titleFirstLine = `We Capture the`;
  const titleSecondLine = `Vitality of Nature :`;
  const description = `We insist on using only the finest ingredients to deliver the pure energy and health benefits of nature. We support our customers' healthy lifestyles with drinks that add vitality to even the smallest moments of the day, and we strive for a sustainable future.`;

  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <div className={styles.firstLineTitle}>{titleFirstLine}</div>
          <div className={styles.secondLineTitle}>{titleSecondLine}</div>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.valueListContainer}>
          <div className={styles.valueBox}>
            <span className={styles.valueName}>Pure Ingredients</span>
            <span className={styles.valueIcon}>✓</span>
          </div>
          <div className={styles.valueBox}>
            <span className={styles.valueName}>Scientific Nutrition</span>
            <span className={styles.valueIcon}>✓</span>
          </div>
          <div className={styles.valueBox}>
            <span className={styles.valueName}>Sustainable Production</span>
            <span className={styles.valueIcon}>✓</span>
          </div>
          <div className={styles.valueBox}>
            <span className={styles.valueName}>Clean Taste</span>
            <span className={styles.valueIcon}>✓</span>
          </div>
          <div className={styles.valueBox}>
            <span className={styles.valueName}>Genuine Vitality</span>
            <span className={styles.valueIcon}>✓</span>
          </div>
        </div>
      </div>

      <img
        className={styles.valueImg}
        src={brandValue}
        alt="Fresh fruits being washed"
      />
    </>
  );
}

export default BrandValue;
