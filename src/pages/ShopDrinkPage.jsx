import TopNav from '../components/topNav';
import BestDrink from '../components/common/shop/BestProdict';
import Footer from '../components/footerSection/Footer';
import AllDrink from '../components/DrinkSection/AllDrink';
import ShopSlice from '../components/common/shop/ShopSlice';

// 
function ShopDrinkPage() {

    const styles = {
        width: '1800px',
        margin: 'auto'
    }
    //
    return (
        <div style={styles}>
            <TopNav />
            <ShopSlice />
            <BestDrink />
            <AllDrink />
            <Footer />
        </div>
    )
}

export default ShopDrinkPage;