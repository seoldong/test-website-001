import styles from "./TopSlide.module.css"
// 
import { useEffect, useState } from "react";
// 
import Loading from "./Loading";
import Error from "./Error";
import NoData from "./NoData";

// 
const TopSlide = ({ slideData, onRetry, dataName }) => {

    const { data, loading, error } = slideData;
    const dataMissing = data.length === 0;
    const [index, setIndex] = useState(0);

    // 
    useEffect(() => {
        if (dataMissing || loading || error) return;
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [dataMissing, loading, error, data.length])

    const currentSlide = data[index];

    const onClickPrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length)
    }

    const onClickNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length)
    }

    if (loading) return <Loading />
    if (dataMissing) return <NoData onRetry={onRetry} dataName={dataName} />
    if (error) return <Error onRetry={onRetry} dataName={dataName} />;

    return (
        <section className={styles.slide}>
            <img className={styles.slideImg} src={currentSlide.src} alt={currentSlide.alt} />
            <h1 className={styles.slideText}>{currentSlide.slideText}</h1>
            <button
                className={`${styles.slideBtn} ${styles.prevBtn}`}
                onClick={onClickPrev}>
                <span>⟨</span>
            </button>
            <button
                className={`${styles.slideBtn} ${styles.nextBtn}`}
                onClick={onClickNext}
            >
                <span>⟩</span>
            </button>
            <div className={styles.dots}>
                {data.map((_, dotIndex) => (
                    <button
                        key={dotIndex}
                        className={`${styles.dot} ${dotIndex === index ? `${styles.dotActive}` : ''}`}
                        onClick={() => setIndex(dotIndex)}
                    />
                ))}
            </div>
        </section>
    )
}

export default TopSlide;