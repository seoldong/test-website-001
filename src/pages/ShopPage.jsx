import ShopMainImg from "../components/shopSection/ShopMainImg";
import ShopBestProduct from "../components/shopSection/ShopBestProduct";
import ShopAllProducts from "../components/shopSection/ShopAllProducts";
// 
function ShopPage() {

    const styles = {
        width: '1800px',
        margin: 'auto'
    }
    //
    return (
        <div style={styles}>
            <ShopMainImg />
            <ShopBestProduct />
            <ShopAllProducts />
        </div>
    )
}

export default ShopPage;