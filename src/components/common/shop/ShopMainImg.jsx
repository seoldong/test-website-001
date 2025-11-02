import styles from './ShopMainImg.module.css'
import { useParams } from 'react-router-dom'

import shopDrinkMain from '../../../assets/etcImg/shopDrinkMain.png'
import shopMaskPackMain from '../../../assets/etcImg/shopMaskPackMain.png'
import shopPackageMain from '../../../assets/etcImg/shopPackageMain.png'


// 
function ShopMainImg() {

    const { category } = useParams();

    function imgSrc() {
        switch (category) {
            case 'drink':
                return shopDrinkMain;
            case 'maskpack':
                return shopMaskPackMain;
            case 'package':
                return shopPackageMain;
        }
    }

    return (
        <section className={styles.slide}>
            <img className={styles.img} src={imgSrc()} />
        </section>
    )
}

export default ShopMainImg