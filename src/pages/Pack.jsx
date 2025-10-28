import TopNav from '../components/topNav';
import styles from './Pack.module.css'
import PackSlide from '../components/Pack/PackSlide';
import BestPack from '../components/Pack/BestPack';
import Footer from '../components/footer/Footer';
import AllProduct from '../components/Pack/AllProduct';

// 
function PacK() {

    //
    return (
        <div className={styles.packPage}>
            <TopNav />
            <PackSlide />
            <BestPack />
            <AllProduct />
            <Footer />
        </div>
    )
}

export default PacK;