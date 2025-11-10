import styles from "./AboutPage.module.css";
// 
import { useEffect, useRef, useState } from "react"; // useRef, currentIndex, scrolled 관련 제거
//
import aboutPageTextData from "../mockData/about/aboutPageText"
import aboutPageImages from "../mockData/about/aboutPageImg"
import brandStorySrc from "../assets/page/about/etc/brandStory.jpg"
// 
const itemWidth = 400;
const DURATION = 100000;

// 
function AboutPage() {
  const trackRef = useRef(null);
  const [aboutText, setAboutText] = useState({});
  const [ingredientsImgSrc, setIngredientsImgSrc] = useState([]);
  
  useEffect(() => {
    setAboutText(aboutPageTextData);
    setIngredientsImgSrc(aboutPageImages());
  }, []);

  useEffect(() => {
    if (ingredientsImgSrc.length === 0 || !trackRef.current) return;

    const totalTrackWidth = itemWidth * ingredientsImgSrc.length * 2; //2배 트랙 길이
    const LOOP_BOUNDARY = itemWidth * ingredientsImgSrc.length; //1배 트랙 길이
    const speed = totalTrackWidth / DURATION; //속도 = 거리/시간
    let startTime = performance.now(); //웹페이지 로딩 후 이 메소드가 실행되기까지의 시간

    const animate = (timestamp) => {
      if (trackRef.current) {
        const elapsed = timestamp - startTime; //시작부터 현재까지 경과시간
        const currentDistance = speed * elapsed; //현재 지나온 거리, 거리=시간*속도

        let currentPosition = currentDistance % LOOP_BOUNDARY;

        const newPosition = -currentPosition;
        trackRef.current.style.transform = `translateX(${newPosition}px)`;
        animationId = requestAnimationFrame(animate);
        //requiestAnimationFrame(callback(timestemp))에서 timestemp는 매개변수를 넣지 않아도 자동으로 performance.now()가 들어간다.
      }
    };
    let animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [ingredientsImgSrc.length]);

  //
  return (
    <div className={styles.aboutPage}>
      <section className={styles.brandIntroduction}>
        <div className={styles.introductionTitle}>
          {aboutText.introductionTitle}
        </div>
        <div className={styles.introductionDescription}>
          {aboutText.introductionDescription}
        </div>
        <div className={styles.introductionImage}></div>
      </section>
      <section className={styles.brandStory}>
        <div className={styles.brandStoryImageBox}>
          <img
            className={styles.brandStoryImage}
            src={brandStorySrc}
          />
        </div>
        <div className={styles.story}>{aboutText.brandStoryTitle}</div>
        <div className={styles.description}>
          {aboutText.brandStoryDescription}
        </div>
      </section>
      <div className={styles.philosophy}>
        <div className={styles.value}>{aboutText.value}</div>
        <div className={styles.explain}>{aboutText.explain}</div>
        <div className={styles.promise}>{aboutText.promise}</div>
        <div className={styles.philosophyImage}></div>
      </div>
      <section className={styles.ingredients}>
        <div className={styles.ingredientsTitle}>
          {aboutText.ingredientsTitle}
        </div>
        <div className={styles.ingredientsDescription}>
          {aboutText.ingredientsDescription}
        </div>
        <ul className={styles.ingredientsDescriptionList}>
          <li>{aboutText.description_first}</li>
          <li>{aboutText.description_second}</li>
          <li>{aboutText.description_third}</li>
        </ul>

        <div className={styles.ingredientsSlide}>
          <div className={styles.ingredientsSlideFrame}>
            <div
              className={styles.ingredientsSlideTrack}
              ref={trackRef}
              // 트랙 너비를 원본 이미지 * 2 (무한 슬라이드용 복제 이미지)로 설정
              style={{
                width: `${itemWidth * ingredientsImgSrc.length * 2}px`,
              }}
            >
              {[...ingredientsImgSrc, ...ingredientsImgSrc].map(
                (item, index) => {
                  return (
                    <img
                      className={styles.ingredientsSlideImg}
                      key={`ingredient-${index}`}
                      src={item.src}
                      style={{
                        width: `${itemWidth}px`,
                      }}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
