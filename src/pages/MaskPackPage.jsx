import styles from './MaskPacKPage.module.css'

import TopNav from '../components/topNav';
import MaskPackSlide from '../components/maskpackSection/MaskPackSlide';
import BestMaskPack from '../components/maskPackSection/BestMaskPack';
import AllProduct from '../components/maskPackSection/AllProduct';
import Footer from '../components/footerSection/Footer';

// 
function MaskPacKPage() {

    //
    return (
        <div className={styles.maskPackPage}>
            <TopNav />
            <MaskPackSlide />
            <BestMaskPack />
            <AllProduct />
            <Footer />
        </div>
    )
}

export default MaskPacKPage;