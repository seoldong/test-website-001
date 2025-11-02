import TopNav from '../components/topNav';
import BestMaskPack from '../components/maskPackSection/BestMaskPack';
import AllProduct from '../components/maskPackSection/AllProduct';
import Footer from '../components/footerSection/Footer';

// 
function ShopMaskPacKPage() {

    const styles = {
        width: '1800px',
        margin: 'auto'
    }
    //
    return (
        <div style={styles}>
            <TopNav />
            <BestMaskPack />
            <AllProduct />
            <Footer />
        </div>
    )
}

export default ShopMaskPacKPage;