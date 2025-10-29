import { useState, useEffect } from "react";
import styles from "./BestDrink.module.css";
import { getBestJuice } from "../../mockData/getData";


function BestDrink() {

    const [best, setBest] = useState([]);

    useEffect(() => {
        setBest(getBestJuice);
    }, [])

    return (
        <section className={styles.bestDrink} >
            <div className={styles.hook}>The healthy habit chosen by many.</div>
            <div className={styles.bestDrinkBox}>
                {best.map((drink, index) => {
                    const discount = (drink.price_krw * drink.discountRate / 100);
                    return (
                        <div
                            className={styles.drinkBox}
                            key={drink.productId + index}
                        >
                            <div>
                                <img className={styles.drinkImg} src={drink.imageSrc} />
                            </div>
                            <div className={styles.drinkName}>
                                {drink.productName}
                            </div>
                            <div className={styles.priceBox}>
                                <div className={styles.offDrinkPrice}>
                                    ₩ {`${drink.price_krw - discount}`}
                                </div>
                                <div className={styles.drinkPrice}>
                                    ₩ {drink.price_krw}
                                </div>
                            </div>
                            <div className={styles.stateBox}>
                                <div className={styles.discountBox}><p>discount</p><p>{drink.discountRate}%</p></div>
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

export default BestDrink;