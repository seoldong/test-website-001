import { useParams } from 'react-router-dom';
import TopNav from '../components/topNav';
import styles from './ProductPage.module.css'
import Footer from '../components/footer/Footer';

function ProductPage() {

    const { id } = useParams();

    return (
        <section className={styles.ProductPage}>
            <TopNav />
            <div className=''></div>
            <Footer />
        </section>
    )
}

export default ProductPage;