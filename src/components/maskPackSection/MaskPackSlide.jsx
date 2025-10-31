import styles from './MaskPackSlide.module.css'
import maskPackShop from "../../assets/etcImg/maskPackShop.png";

// 
function MaskPackSlide() {

    return (
        <section className={styles.packSlide}>
            <img className={styles.packImg} src={maskPackShop} />
        </section>
    )
}

export default MaskPackSlide;