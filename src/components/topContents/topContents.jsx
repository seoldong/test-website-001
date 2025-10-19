import './topContentsStyles.css';
import { useEffect, useState } from "react";
import img01 from "../../assets/topContentsImg/img01.jpg";
import img02 from "../../assets/topContentsImg/img02.jpg";
import img03 from "../../assets/topContentsImg/img03.jpg";
import img04 from "../../assets/topContentsImg/img04.jpg";

// 이미지 소스, 텍스트, 버튼 정보를 결합한 최종 슬라이드 데이터
const slidesData = [
    {
        src: img01,
        alt: '슬라이드 1: 첫 번째 상품',
        slideText: "첫 번째 슬라이드의 텍스트 내용입니다.",
        button: { text: '첫 번째 상품 보러가기', class: 'btn-center', link: '/product/1' }
    },
    {
        src: img02,
        alt: '슬라이드 2: 이벤트',
        slideText: "두 번째 슬라이드의 텍스트 내용입니다.",
        button: { text: '이벤트 참여!', class: 'btn-center', link: '/event/2' }
    },
    {
        src: img03,
        alt: '슬라이드 3: 브랜드 스토리',
        slideText: "세 번째 슬라이드의 텍스트 내용입니다.",
        button: { text: '브랜드 스토리 읽기', class: 'btn-center', link: '/about' }
    },
    {
        src: img04,
        alt: '슬라이드 4: 특별 할인',
        slideText: "네 번째 슬라이드의 텍스트 내용입니다.",
        button: { text: '마지막 특별 할인', class: 'btn-center', link: '/sale' }
    },
];

function TopContents() {
    const [slides] = useState(slidesData);
    const [index, setIndex] = useState(0);

    const currentSlide = slides[index];

    // ⭐ 자동 슬라이드 로직
    useEffect(() => {
        if (slides.length === 0) return;
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

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
        <div className="topContentsSlide-container">
            <img
                className='topContentsSlide-img'
                src={currentSlide.src}
                alt={currentSlide.alt}
            />

            {/* 슬라이드 텍스트 */}
            <h1 className='topContentsSlide-text'>{currentSlide.slideText}</h1>

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

export default TopContents;