import styles from "./MainSlide.module.css"
import { useEffect, useState } from "react";
import topSlidesData from "../../mockData/topSlide"

function MainSlide() {
    const [slides] = useState(topSlidesData);
    const [index, setIndex] = useState(0);

    const currentSlide = slides[index];

    // ⭐ 자동 슬라이드 로직
    useEffect(() => {
        if (slides.length === 0) return;
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [index, slides.length]);

    // ⭐ 이전 슬라이드로 이동
    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // ⭐ 다음 슬라이드로 이동
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // ⭐ 점 버튼 클릭 시 해당 슬라이드로 이동
    const handleDotClick = (dotIndex) => {
        setIndex(dotIndex);
    };

    // 버튼 클릭 핸들러
    const handleButtonClick = () => {
        if (currentSlide.button.link) {
            console.log(`페이지 이동: ${currentSlide.button.link}`);
            // window.location.href = currentSlide.button.link; 
        }
    };

    // 
    return (
        <>
            <img
                className={styles.slideImg}
                src={currentSlide.src}
                alt={currentSlide.alt}
            />
            <h1 className={styles.slideText}>{currentSlide.slideText}</h1>
            <button className={`${styles.slideBtn} ${styles.prevBtn}`} onClick={handlePrev}>&lt;</button>
            <button className={`${styles.slideBtn} ${styles.nextBtn}`} onClick={handleNext}>&gt;</button>
            <button
                className={`${styles.actionBtn} ${currentSlide.button.class}`}
                onClick={handleButtonClick}
            >
                {currentSlide.button.text}
            </button>
            <div className={styles.dots}>
                {slides.map((_, dotIndex) => (
                    <button
                        key={dotIndex}
                        className={`${styles.dot} ${dotIndex === index ? `${styles.dotActive}` : ''}`}
                        onClick={() => handleDotClick(dotIndex)}
                    />
                ))}
            </div>
        </>
    );
}

export default MainSlide;