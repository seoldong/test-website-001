import { useEffect, useState } from "react"; // useRef, currentIndex, scrolled 관련 제거
import TopNav from "../components/topNav";
import styles from "./About.module.css"
import Footer from "../components/homeSection/Footer";
import { getAboutText, getAboutImages } from "../mockData/getData";

// 스크롤 감지 임계값은 여전히 필요할 수 있으므로 유지
const SCROLL_THRESHOLD = 50;
// 아이템 너비는 CSS 변수로 관리하거나, 여기서는 상태에서 제거합니다.
// const itmeWidth = 20; // 사용하지 않으므로 제거

function About() {
    // const trackRef = useRef(null); // 사용하지 않으므로 제거
    const [scrolled, setScrolled] = useState(false);
    const [aboutText, setAboutText] = useState({});
    const [ingredientsImgSrc, setIngredientsImgSrc] = useState([]);
    // const [currentIndex, setCurrentIndex] = useState(0); // 사용하지 않으므로 제거

    // TopNav 스크롤 감지 로직 유지
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > SCROLL_THRESHOLD;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // 초기 데이터 로드 로직 유지
    useEffect(() => {
        setAboutText(getAboutText());
        setIngredientsImgSrc(getAboutImages());
    }, []);

    // 💡 CSS 애니메이션을 위한 이미지 복제
    // 원본 리스트를 복사하여 두 배로 만듭니다. (무한 루프 시 끊김 방지)
    const doubleImages = [...ingredientsImgSrc, ...ingredientsImgSrc];

    // 
    return (
        <div className={styles.aboutPage}>
            <section className={`${styles.topNav} ${scrolled && styles.active}`}>
                <TopNav />
            </section>
            <section className={styles.brandIntroduction}>
                <div className={styles.introductionTitle}>{aboutText.introductionTitle}</div>
                <div className={styles.introductionDescription}>{aboutText.introductionDescription}</div>
                <div className={styles.introductionImage}></div>
            </section>
            <section className={styles.brandStory}>
                <div className={styles.brandStoryImageBox}>
                    <img className={styles.brandStoryImage} src='../../src/assets/etcImg/brandStory2.jpg' />
                </div>
                <div className={styles.story}>{aboutText.brandStoryTitle}</div>
                <div className={styles.description}>{aboutText.brandStoryDescription}</div>
            </section>
            <div className={styles.philosophy}>
                <div className={styles.value}>{aboutText.value}</div>
                <div className={styles.explain}>{aboutText.explain}</div>
                <div className={styles.promise}>{aboutText.promise}</div>
                <div className={styles.philosophyImage}></div>
            </div>
            <section className={styles.ingredients}>
                <div className={styles.ingredientsTitle}>{aboutText.ingredientsTitle}</div>
                <div className={styles.ingredientsDescription}>{aboutText.ingredientsDescription}</div>
                <ul className={styles.ingredientsDescriptionList}>
                    <li>{aboutText.description_first}</li>
                    <li>{aboutText.description_second}</li>
                    <li>{aboutText.description_third}</li>
                </ul>
                <div className={styles.ingredientsSlide}>
                    <div className={styles.ingredientsSlideFrame} >
                        <div
                            className={styles.ingredientsSlideTrack}
                        // ref={trackRef} // 사용하지 않으므로 제거
                        // style 속성도 CSS 애니메이션으로 대체
                        >
                            {/* 💡 복제된 이미지 리스트 사용 */}
                            {doubleImages.map((src, index) => {
                                return (
                                    <img
                                        className={styles.ingredientsSlideImg}
                                        key={src.src + index}
                                        src={src.src}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default About;