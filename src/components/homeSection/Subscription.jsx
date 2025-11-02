import styles from "./Subscription.module.css";
// 
import { useEffect, useState } from "react";

//
function Subscription() {

  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 
  useEffect(() => {
    setLoading(true);
    setError(null);
    const subscriptionPath = '/data/page/home/subcription.json';
    const fetchSubscription = async () => {
      try {
        const response = await fetch(subscriptionPath);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const subscriptionData = await response.json();
        setSubscription(subscriptionData);
      } catch (error) {
        setError('Failed to fetch data: ' + error.message);
        console.error("Fetching data failed", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSubscription();
  }, []);

  // 
  if (loading) return <div className={styles.subscription}>Loading...</div>;
  if (error) return <div className={styles.subscription}>Error: {error}</div>;

  return (
    <div className={styles.subscription}>
      <div className={styles.leftBox}>
        <img className={styles.leftImg} src={subscription.imgSrc} />
      </div>
      <div className={styles.rightBox}>
        <div className={styles.rightTitle}>{subscription.title}</div>
        <div className={styles.rightSubTitle}>{subscription.subTitle}</div>
        <div className={styles.rightDescription}>{subscription.description}</div>
        <div className={styles.rightPrice}>{subscription.priceUsd}</div>
        <button className={styles.rightBtn}>SUBSCRIPTION</button>
      </div>
    </div>
  );
}

export default Subscription;
