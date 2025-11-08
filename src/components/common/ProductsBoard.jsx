import { Link } from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';
import NoData from './NoData';
import styles from './ProductsBoard.module.css';
//

// 
function ProductsBoard({ boardData, onRetry, dataName }) {
    const { data, loading, error } = boardData;

    const dataMissing = data.length === 0;

    if (loading) return <Loading />
    if (error) return <Error onRetry={onRetry} dataName={dataName} />;
    if (dataMissing) return <NoData onRetry={onRetry} dataName={dataName} />

    return (
        <div className={styles.productContainer}>
            {data.map((product, index) => {
                return (
                    <Link
                        className={styles.productBox}
                        key={product.productId}
                        to={`/product/${product.productId}`}
                    >
                        <img className={styles.image} src={product.imageSrc} />
                        <div className={styles.name}>{product.productName}</div>
                        <PriceState product={product} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProductsBoard;

//
function PriceState({ product }) {
    const discount = (product.priceKrw * product.discountRate / 100);
    const saleElemetnt = () => {
        return (
            <>
                <div className={styles.sale} >
                    <p className={styles.discountPrice}>{`$ ${product.priceKrw - discount}`}</p>
                    <p className={styles.nomalPrice}>$ {product.priceKrw}</p>
                </div>
                <div className={styles.discountState}>{product.discountRate}% off</div>
            </>
        )
    }

    const normalElement = () => {
        return (
            <div className={styles.price} >
                <p>$ {product.priceKrw}</p>
            </div>
        )
    }

    return (
        <div className={styles.priceBox}>
            {product.onSale ? saleElemetnt() : normalElement()}
        </div>
    )
}