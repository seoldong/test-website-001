import styles from './DrinkPage.module.css'

import TopNav from '../components/topNav';
import DrinkSlide from '../components/DrinkSection/DrinkSlide';
import BestDrink from '../components/DrinkSection/BestDrink';
import Footer from '../components/footerSection/Footer';
import AllDrink from '../components/DrinkSection/AllDrink';

// 
function DrinkPage() {

    //
    return (
        <div className={styles.packPage}>
            <TopNav />
            <DrinkSlide />
            <BestDrink />
            <AllDrink />
            <Footer />
        </div>
    )
}

export default DrinkPage;