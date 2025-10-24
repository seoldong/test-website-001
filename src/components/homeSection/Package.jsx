import styles from "./Package.module.css";
import packageImg from "../../assets/etcImg/package.jpg";

//
function Package() {

  const title = "디톡스 클렌즈 패키지";
  const subTitle = "[ 활력 충전! 몸을 리셋하는 완벽한 일주일 ]";
  const description = 
    `신선하게 착즙된 100% 비건 주스로 구성된 7일 집중 프로그램입니다. 몸속 독소를 비우고 에너지를 채워 가볍고 상쾌한 변화를 경험하세요. 아침, 점심, 저녁 맞춤형 주스가 매일 신선하게 배송됩니다.`;
  const price = "₩ 98,000";

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
        <button className={styles.rightBtn}>구독하기</button>
      </div>
    </>
  );
}

export default Package;
