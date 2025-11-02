import TopNav from '../components/topNav';
import Footer from '../components/footerSection/Footer';

// 
function ShopPackagePage() {

    const styles = {
        width: '1800px',
        margin: 'auto'
    }

    //
    return (
        <div style={styles}>
            <TopNav />

            <Footer />
        </div>
    )
}

export default ShopPackagePage;