import { useEffect, useState } from 'react';
import TopNav from '../components/topNav';
import styles from './Pack.module.css'
import PackSlide from '../components/Pack/PackSlide';
import PopularityPack from '../components/Pack/popularityPack';
import Footer from '../components/footer/Footer';
import AllProduct from '../components/Pack/AllProduct';

// 
function PacK() {

    //
    return (
        <div className={styles.packPage}>
            <TopNav />
            <PackSlide />
            <PopularityPack />
            <AllProduct />
            <Footer />
        </div>
    )
}

export default PacK;