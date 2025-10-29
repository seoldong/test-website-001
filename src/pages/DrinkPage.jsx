import TopNav from '../components/topNav';
import styles from './DrinkPage.module.css'
import DrinkSlide from '../components/Drink/DrinkSlide';
import BestDrink from '../components/Drink/BestDrink';
import Footer from '../components/footer/Footer';
import AllDrink from '../components/Drink/AllDrink';

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