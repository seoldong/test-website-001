import styles from './DrinkSlide.module.css'
import drinkShop from "../../assets/etcImg/drinkShop.png"

// 
function DrinkSlide() {

    return (
        <section className={styles.drinkSlide}>
            <img className={styles.drinkImg} src={drinkShop} />
        </section>
    )
}

export default DrinkSlide