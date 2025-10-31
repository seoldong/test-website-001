import styles from "./BestMaskPack.module.css";
import { useState, useEffect } from "react";

import { getBestMaskPacks } from "../../mockData/getData";

// 
function BestMaskPack() {

    const [best, setBest] = useState([]);

    useEffect(() => {
        setBest(getBestMaskPacks)
    }, [])

    return (
        <section className={styles.bestMaskPack} >
            <div className={styles.hook}>The choice of those who know the real thing.</div>
            <div className={styles.bestMaskPackBox}>
                {best.map((maskPack, index) => {
                    const discount = (maskPack.price_krw * maskPack.discountRate / 100);
                    return (
                        <div
                            className={styles.maskPackBox}
                            key={maskPack.productId + index}
                        >
                            <div>
                                <img className={styles.maskPackImg} src={maskPack.imageSrc} />
                            </div>
                            <div className={styles.maskPackName}>
                                {maskPack.productName}
                            </div>
                            <div className={styles.priceBox}>
                                <div className={styles.offMaskPackPrice}>
                                    ₩ {`${maskPack.price_krw - discount}`}
                                </div>
                                <div className={styles.maskPackPrice}>
                                    ₩ {maskPack.price_krw}
                                </div>
                            </div>
                            <div className={styles.stateBox}>
                                <div className={styles.discountBox}><p>discount</p><p>{maskPack.discountRate}%</p></div>
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

export default BestMaskPack;