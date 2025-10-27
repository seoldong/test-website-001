import { useState, useEffect } from "react";
import styles from "./popularityPack.module.css";
import { getPopularityPack } from "../../mockData/getData";


function PopularityPack() {

    const [popularity, setPopularity] = useState([]);

    useEffect(() => {
        setPopularity(getPopularityPack);
    }, [])

    return (
        <section className={styles.popularity} >
            {popularity.map((pack, index) => {

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
                        <div className={styles.packPrice}>
                            ₩ {pack.price_krw}
                        </div>
                    </div>
                )

            })}
        </section>
    )
}

export default PopularityPack;