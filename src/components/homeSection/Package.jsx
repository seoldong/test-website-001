import styles from "./Package.module.css";
import packageImg from "../../assets/etcImg/package.jpg";

//
function Package() {

  const title = "Detox Cleanse Package";
  const subTitle = "Reinvigorate! The Perfect Week to Reset Your Body";
  const description =
    `This is a 7-day intensive program consisting of 100% vegan juices that are freshly cold-pressed. Empty toxins from your body and replenish your energy to experience a light and refreshing change. Customized juices for breakfast, lunch, and dinner are delivered fresh daily.`;
  const price = "$ 98.00"; // 또는 KRW 98,000

  return (
    <>
      <div className={styles.leftBox}>
        <img className={styles.leftImg} src={packageImg} />
      </div>
      <div className={styles.rightBox}>
        <div className={styles.rightTitle}>{title}</div>
        <div className={styles.rightSubTitle}>{subTitle}</div>
        <div className={styles.rightDescription}>{description}</div>
        <div className={styles.rightPrice}>{price}</div>
        <button className={styles.rightBtn}>SUBSCRIPTION</button>
      </div>
    </>
  );
}

export default Package;
