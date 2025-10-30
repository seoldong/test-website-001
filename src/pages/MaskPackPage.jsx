import styles from './MaskPacKPage.module.css'

import TopNav from '../components/topNav';
import Footer from '../components/footer/Footer';

import PackSlide from '../components/maskpack/PackSlide';
import BestPack from '../components/maskpack/BestPack';
import AllProduct from '../components/maskpack/AllProduct';

// 
function MaskPacKPage() {

    //
    return (
        <div className={styles.maskPackPage}>
            <TopNav />
            <PackSlide />
            <BestPack />
            <AllProduct />
            <Footer />
        </div>
    )
}

export default MaskPacKPage;