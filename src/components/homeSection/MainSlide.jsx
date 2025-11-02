import styles from "./MainSlide.module.css"
// 
import { useEffect, useState } from "react";

// 
function MainSlide() {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [index, setIndex] = useState(0);

    const currentSlide = slides[index];

    // 
    useEffect(() => {
        setLoading(true);
        setError(null);
        const slidePath = '/page/homeMainSlide.json'
        const fetchSlides = async () => {
            try {
                const response = await fetch(slidePath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const slideData = await response.json();
                setSlides(slideData);

            } catch (error) {
                setError('Failed to fetch data: ' + error.message);
                console.error("Fetching data failed", error);
            } finally {
                setLoading(false);
            }
        }
        fetchSlides();
    }, []);

    // 
    useEffect(() => {
        if (slides.length === 0) return;
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [index, slides.length]);

    // 
    if (loading) return <div className={styles.mainSlide}>Loading...</div>;
    if (error) return <div className={styles.mainSlide}>Error: {error}</div>;

    // 
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
                onClick={() => setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}
            >
                &lt;
            </button>
            <button
                className={`${styles.slideBtn} ${styles.nextBtn}`}
                onClick={() => setIndex((prevIndex) => (prevIndex + 1) % slides.length)}
            >
                &gt;
            </button>
            <div className={styles.dots}>
                {slides.map((_, dotIndex) => (
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

// 
