import styles from './BestBoard.module.css';
// 
import Loading from "../common/Loading";
import Error from "../common/Error";
import NoData from "../common/NoData";
import { Link } from 'react-router-dom';

function BestBoard({ boardData, onRetry, dataName }) {
    const { data, loading, error } = boardData;

    const dataMissing = data.length === 0;

    if (loading) return <Loading />
    if (error) return <Error onRetry={onRetry} dataName={dataName} />;
    if (dataMissing) return <NoData onRetry={onRetry} dataName={dataName} />

    return (
        <div className={styles.container}>
            {data.map((item, index) => {
                return (
                    <Link
                        className={styles.productBox}
                        key={item.productId}
                        to={`/product/${item.productId}`}
                    >
                        <div className={styles.imgBox}>
                            <img className={styles.image} src={item.imageSrc} />
                        </div>
                        <div className={styles.name}>{item.productName}</div>
                        <div className={styles.price}>{`$ ${item.priceUsd}`}</div>
                        <div className={styles.stateBox}>
                            <div className={styles.state}>{`BEST`}</div>
                        </div>
                    </Link>
                );
            })}
        </div>
    )
}

export default BestBoard;