import { useEffect, useState } from "react";
import TopNav from "../components/topNav";
import styles from "./About.module.css"
import Footer from "../components/homeSection/Footer";

// 
function About() {

    const [scrolled, setScrolled] = useState(false);
    const SCROLL_THRESHOLD = 50;
    const introductionTitle = `Nature's Vitality, Your Daily Habit.`
    const introductionDescription = `We strip away the artificial and infuse pure natural energy. [Company Name] crafts premium wellness beverages using only carefully selected natural ingredients to restore balance to your body and mind. Complete your healthy lifestyle with a single glass you drink every day.`
    const brandStoryTitle = `The Root of Wellness: From Soil to Sip.`
    const brandStoryDescription = `Our journey began not in a boardroom, but on a small, family-owned vegetable farm. [Founder's Name], a third-generation farmer, spent decades nurturing the soil. They understood a simple truth: the vitality of the harvest mirrors the vitality of the body. They weren't just growing carrots and kale; they were cultivating pure, unadulterated health.
Disappointed by processed 'health' drinks that lacked genuine nourishment, the farmer was inspired to find a better way. They began cold-pressing their freshest, most potent produce, blending them into elixirs that tasted like the earth itself.
That initial spark, rooted in the simple wisdom of the farm, grew into [Company Name]. We bottle the integrity of the soil, ensuring that every sip is a direct link to natural, farm-fresh wellness.`
    const value = "True wellness is rooted in integrity, transparency, and the vibrant purity of nature."
    const explain = "We believe in simplicity and whole ingredients. We are dedicated to nurturing not just the body, but the mind and spirit, by offering elixirs that are as honest as the earth they came from. Every bottle is a rejection of the artificial and a celebration of life's essential goodness."
    const promise = "To deliver uncompromised, farm-fresh vitality in every sip, fostering a healthier connection between people and the natural world."

    useEffect(() => {
        // 함수를 useEffect 내부에서 정의
        const handleScroll = () => {
            const isScrolled = window.scrollY > SCROLL_THRESHOLD;

            // 이펙트 내부에서 'scrolled' 상태를 직접 사용하지 않고
            // setScrolled만 사용하여 의존성 배열을 비울 수 있습니다.
            // 하지만 현재 로직에서는 상태를 비교하므로 'scrolled'를 의존성으로 유지합니다.
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <div className={styles.aboutPage}>
            <section className={`${styles.topNav} ${scrolled && styles.active}`}>
                <TopNav />
            </section>
            <section className={styles.brandIntroduction}>
                <div className={styles.introductionTitle}>{introductionTitle}</div>
                <div className={styles.introductionDescription}>{introductionDescription}</div>
                <div className={styles.introductionImage}></div>
            </section>
            <section className={styles.brandStory}>
                <div className={styles.brandStoryImageBox}>
                    <img className={styles.brandStoryImage} src='../../src/assets/etcImg/brandStory2.jpg' />
                </div>
                <div className={styles.story}>{brandStoryTitle}</div>
                <div className={styles.description}>{brandStoryDescription}</div>
            </section>
            <div className={styles.philosophy}>
                <div className={styles.value}>{value}</div>
                <div className={styles.explain}>{explain}</div>
                <div className={styles.promise}>{promise}</div>
                <div className={styles.philosophyImage}></div>

            </div>
            <div className={styles.ingredients}>
                
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default About;


{/* <section className={`${styles.topNav} ${scrolled && styles.active}`}></section> */ }