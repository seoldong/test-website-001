import styles from './PackSlide.module.css'
import packShop from "../../assets/etcImg/packShop.png"

function PackSlide() {


    return (
        <section className={styles.packSlide}>
            <img className={styles.packImg} src={packShop} />
        </section>
    )
}

export default PackSlide;