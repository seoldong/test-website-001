import { useDispatch, useSelector } from "react-redux";
import styles from "./MainSlide.module.css"
// 
import { useEffect, useState } from "react";
import { fetchMainSlideThunk, resetMainSlide } from "../../redux/slices/mainSlide/mainSlide";

// 
function MainSlide() {
    const dispatch = useDispatch();
    const { data: mainSlide, loading, error } = useSelector((state) => state.mainSlide);
    const [index, setIndex] = useState(0);

    const dataIsMissing = mainSlide.length === 0;

    useEffect(() => {
        if (dataIsMissing) return;
        if (index >= mainSlide.length) {
            setIndex(0);
        }

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % mainSlide.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [mainSlide.length, index, dataIsMissing]);

    const handleReload = () => {
        setIndex(0);
        dispatch(resetMainSlide());
        dispatch(fetchMainSlideThunk());
    };

      if (dataIsMissing || loading) return <div>Loading... <button onClick={handleReload}>reload</button></div>;
      if (error) return <div>Error: {error}</div>;

    const currentSlide = mainSlide[index];

    return (
        <div className={styles.mainSlide}>
            <img
                className={styles.slideImg}
                src={currentSlide.src}
                alt={currentSlide.alt}
            />
            <h1 className={styles.slideText}>{currentSlide.slideText}</h1>

            <button
                className={`${styles.slideBtn} ${styles.prevBtn}`}
                onClick={() => setIndex((prevIndex) => (prevIndex - 1 + mainSlide.length) % mainSlide.length)}
            >
                ⟨
            </button>

            <button
                className={`${styles.slideBtn} ${styles.nextBtn}`}
                onClick={() => setIndex((prevIndex) => (prevIndex + 1) % mainSlide.length)}
            >
                ⟩
            </button>

            <div className={styles.dots}>
                {mainSlide.map((_, dotIndex) => (
                    <button
                        key={dotIndex}
                        className={`${styles.dot} ${dotIndex === index ? `${styles.dotActive}` : ''}`}
                        onClick={() => setIndex(dotIndex)}
                    />
                ))}
            </div>
        </div>
    );
}

export default MainSlide;