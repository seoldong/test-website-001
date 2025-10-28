import { useState, useEffect } from "react";
import styles from "./BestPack.module.css";
import { getBestPack } from "../../mockData/getData";


function BestPack() {

    const [best, setBest] = useState([]);

    useEffect(() => {
        setBest(getBestPack)
    }, [])

    return (
        <section className={styles.bestPack} >
            <div className={styles.hook}>The choice of those who know the real thing.</div>
            <div className={styles.bestPackBox}>
                {best.map((pack, index) => {
                    const discount = (pack.price_krw * pack.discountRate / 100);
                    return (
                        <div
                            className={styles.packBox}
                            key={pack.productId + index}
                        >
                            <div>
                                <img className={styles.packImg} src={pack.imageSrc} />
                            </div>
                            <div className={styles.packName}>
                                {pack.productName}
                            </div>
                            <div className={styles.priceBox}>
                                <div className={styles.offPackPrice}>
                                    ₩ {`${pack.price_krw - discount}`}
                                </div>
                                <div className={styles.packPrice}>
                                    ₩ {pack.price_krw}
                                </div>
                            </div>
                            <div className={styles.stateBox}>
                                <div className={styles.discountBox}><p>discount</p><p>{pack.discountRate}%</p></div>
                                <div className={styles.popularityBox}><p>popularity</p><p>✓</p></div>
                                <div className={styles.recommendedBox}><p>recommended</p><p>✓</p></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default BestPack;