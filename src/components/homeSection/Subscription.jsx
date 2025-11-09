import styles from "./Subscription.module.css";
//
import subscription from "../../mockData/home/subcription";

//
function Subscription() {

  const onClickSubscription = () => {
    alert('thank you for subscribing!')
  }

  return (
    <section className={styles.subscription}>
      <div className={styles.leftBox}>
        <img className={styles.leftImg} src={subscription.imgSrc} />
      </div>
      <div className={styles.rightBox}>
        <div className={styles.rightTitle}>{subscription.title}</div>
        <div className={styles.rightSubTitle}>{subscription.subTitle}</div>
        <div className={styles.rightDescription}>{subscription.description}</div>
        <div className={styles.rightPrice}>$ {subscription.priceUsd}</div>
        <button
          onClick={onClickSubscription}
          className={styles.rightBtn}
        >
          SUBSCRIPTION
        </button>
      </div>
    </section>
  );
}

export default Subscription;

// 