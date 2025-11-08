import styles from "./ProductSlide.module.css"
// 
import { useEffect, useRef, useState } from "react";
// 
import Error from "./Error";
import Loading from "./Loading";
import NoData from "./NoData";
import { Link } from "react-router-dom";

// 
function ProductSlide({ slideData, onRetry, dataName }) {

    //
    const trackRef = useRef(null);
    const intervalRef = useRef(null);
    const { data, loading, error } = slideData;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalTime, setIntervalTime] = useState(3000);
    const dataLength = data.length;
    const dataMissing = dataLength === 0;
    const itemWidth = 400;

    //
    useEffect(() => {
        if (!trackRef.current) return;
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            if (currentIndex >= dataLength) {
                trackRef.current.style.transition = 'none';
                setIntervalTime(10);
                setCurrentIndex(0);
            } else {
                trackRef.current.style.transition = 'transform 0.3s ease-in-out';
                setIntervalTime(3000);
                setCurrentIndex(prev => prev + 1);
            }
        }, intervalTime)

        return () => clearInterval(intervalRef.current);

    }, [currentIndex, dataLength, intervalTime])

    // 
    if (loading) return <Loading />
    if (dataMissing) return <NoData onRetry={onRetry} dataName={dataName} />
    if (error) return <Error onRetry={onRetry} dataName={dataName} />;

    // 
    return (
        <div className={styles.slide}>
            <PrevBtn slideData={{ trackRef, dataLength, intervalRef, currentIndex, setCurrentIndex, setIntervalTime }} />
            <div className={styles.slideFrame}>
                <div
                    className={styles.track}
                    ref={trackRef}
                    style={{
                        width: `${itemWidth * data.length * 2}px`,
                        transform: `translateX(-${currentIndex * itemWidth}px)`
                    }}
                >
                    {[...data, ...data].map((product, index) => {

                        return (
                            <Link
                                className={styles.productBox}
                                key={product.productId + index}
                                style={{ width: `${itemWidth}px` }}
                                to={`/product/${product.productId}`}
                            >
                                <img
                                    className={styles.image}
                                    src={product.imageSrc}
                                    alt={product.productName}
                                />
                                <div className={styles.name}>{product.productName}</div>
                                <div className={styles.priceBox}>
                                    <div
                                        className={styles.salePrice}>
                                        {`$ ${Math.round(product.onSale ? product.priceUsd * product.discountRate : product.priceKrw).toLocaleString()}`}
                                    </div>
                                    <div
                                        className={styles.price}>
                                        {product.onSale ? `$ ${product.priceUsd.toLocaleString()}` : ''}
                                    </div>
                                </div>
                                <div className={styles.stateBox}>
                                    {product.onSale && <div className={styles.state}>{product.discountRate}% discount</div>}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <NextBtn slideData={{ trackRef, dataLength, intervalRef, currentIndex, setCurrentIndex, setIntervalTime }} />
        </div>
    )
}

export default ProductSlide;

// 
function PrevBtn({ slideData }) {

    const { trackRef, dataLength, intervalRef, currentIndex, setCurrentIndex, setIntervalTime } = slideData;

    const handlePrev = () => {
        clearInterval(intervalRef.current);
        if (currentIndex <= 0) {
            trackRef.current.style.transition = 'none';
            setIntervalTime(1000)
            setCurrentIndex(dataLength);
        } else {
            trackRef.current.style.transition = 'transform 0.3s ease-in-out';
            setCurrentIndex(prev => prev - 1);
            setIntervalTime(1000);
        }
    };

    return (
        <div className={styles.prevBox}>
            <button
                className={styles.prevBtn}
                onMouseDown={handlePrev}
            >{`⟨`}</button>
        </div>
    )
}

// 
function NextBtn({ slideData }) {

    const { trackRef, dataLength, intervalRef, currentIndex, setCurrentIndex, setIntervalTime } = slideData;

    const handleNext = () => {
        clearInterval(intervalRef.current);
        if (currentIndex >= dataLength) {
            trackRef.current.style.transition = 'none';
            setIntervalTime(10)
            setCurrentIndex(0);
        } else {
            trackRef.current.style.transition = 'transform 0.3s ease-in-out';
            setCurrentIndex(prev => prev + 1);
            setIntervalTime(1000);
        }
    };

    return (
        <div className={styles.nextBox}>
            <button
                className={styles.nextBtn}
                onMouseDown={handleNext}
            >{`⟩`}</button></div>
    )
}