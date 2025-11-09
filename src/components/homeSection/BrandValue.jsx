import styles from "./BrandValue.module.css";
// 
import brandValueData from '../../mockData/home/brandValueData'

//
function BrandValue() {

  const { titleFirstLine, titleSecondLine, description, imgSrc } = brandValueData;

  return (
    <section className={styles.brandValue}>
      <div className={styles.textContainer}>
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
        src={imgSrc}
        alt=""
      />
    </section>
  );
}

export default BrandValue;
