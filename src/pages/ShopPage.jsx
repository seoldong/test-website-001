import styles from './ShopPage.module.css'

import TopNav from '../components/topNav';
import Footer from '../components/footerSection/Footer';
import ShopMainImg from '../components/common/shop/ShopMainImg';
import ShopBestProduct from '../components/common/shop/ShopBestProduct.jsx';

// 
function ShopPage() {

    const styles = {
        width: '1800px',
        margin: 'auto'
    }
    //
    return (
        <div style={styles}>
            <TopNav />
            <ShopMainImg />
            <ShopBestProduct />
            <Footer />
        </div>
    )
}

export default ShopPage;