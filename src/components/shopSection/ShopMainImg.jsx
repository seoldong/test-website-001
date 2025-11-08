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

    const styles = {
        section: {
            width: '100%',
            height: '800px',
            overflow: 'hidden',
            backgroundColor: 'darkgrey',
        },
        img: {
            width: '100%',
            objectFit: 'cover',
        }
    }

    return (
        <section style={styles.section}>
            <img style={styles.img} src={imgSrc()} />
        </section>
    )
}

export default ShopMainImg