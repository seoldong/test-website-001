import styles from './ShopMainImg.module.css'
// 
import { useParams } from 'react-router-dom'
//
import shopDrinkMain from '../../assets/page/shop/shopDrinkMain.png'
import shopMaskPackMain from '../../assets/page/shop/shopMaskPackMain.png'

// 
function ShopMainImg() {

    const { category } = useParams();

    function imgSrc() {
        switch (category) {
            case 'drinks':
                return shopDrinkMain;
            case 'maskPacks':
                return shopMaskPackMain;
        }
    }

    return (
        <section className={styles.mainImg}>
            <img className={styles.img} src={imgSrc()} />
        </section>
    )
}

export default ShopMainImg;