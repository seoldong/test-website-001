import "./MainSlide.css"
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

    return (
        <div className="mainSlide-container">
            <img
                className='mainSlide-img'
                src={currentSlide.src}
                alt={currentSlide.alt}
            />

            {/* 슬라이드 텍스트 */}
            <h1 className='mainSlide-text'>{currentSlide.slideText}</h1>

            {/* ⭐ 좌우 네비게이션 버튼 */}
            <button className='slide-nav-btn slide-prev-btn' onClick={handlePrev}>&lt;</button>
            <button className='slide-nav-btn slide-next-btn' onClick={handleNext}>&gt;</button>

            {/* ⭐ 액션 버튼 (슬라이드별 개별 버튼) */}
            <button
                className={`slide-action-btn ${currentSlide.button.class}`}
                onClick={handleButtonClick}
            >
                {currentSlide.button.text}
            </button>

            {/* ⭐ 하단 점 네비게이션 */}
            <div className='slide-dots'>
                {slides.map((_, dotIndex) => (
                    <button
                        key={dotIndex}
                        className={`dot ${dotIndex === index ? 'dot-active' : ''}`}
                        onClick={() => handleDotClick(dotIndex)}
                    />
                ))}
            </div>
        </div>
    );
}

export default MainSlide;