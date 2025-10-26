import { useEffect, useRef, useState } from "react"; // useRef, currentIndex, scrolled 관련 제거
import TopNav from "../components/topNav";
import styles from "./About.module.css";
import Footer from "../components/homeSection/Footer";
import { getAboutText, getAboutImages } from "../mockData/getData";

const SCROLL_THRESHOLD = 50;
const itemWidth = 25; // 슬라이드 아이템의 너비 (rem)
const DURATION = 10000; // 자동 슬라이드 전체 시간 (밀리초)

function About() {
  const trackRef = useRef(null);
  const slideFrameRef = useRef(null); // 드래그 이벤트 리스너를 추가할 프레임
  const [scrolled, setScrolled] = useState(false);
  const [aboutText, setAboutText] = useState({});
  const [ingredientsImgSrc, setIngredientsImgSrc] = useState([]);

  //
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스 (자동 슬라이드용)
  const [trackPosition, setTrackPosition] = useState(0); // 트랙의 현재 translateX 값 (px)
  const [isDragging, setIsDragging] = useState(false); // 드래그 중인지 여부
  const [dragStartX, setDragStartX] = useState(0); // 드래그 시작 시점의 마우스 X 좌표
  const [trackStartPos, setTrackStartPos] = useState(0); // 드래그 시작 시점의 트랙 위치
  const [isAnimating, setIsAnimating] = useState(false); // 애니메이션(전환) 중인지 여부
  const [transitionDuration, setTransitionDuration] = useState('0s'); // 트랜지션 시간 관리

  //
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > SCROLL_THRESHOLD;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  //
  useEffect(() => {
    setAboutText(getAboutText());
    setIngredientsImgSrc(getAboutImages());
  }, []);

  // === 자동 무한 슬라이드 로직 ===W
  useEffect(() => {
    if (ingredientsImgSrc.length === 0) return;

    // 초기 위치 설정 (복사된 첫 번째 그룹의 시작, 실제 첫 번째 그룹의 끝)
    const totalContentWidth = ingredientsImgSrc.length * itemWidth * 16; // rem을 px로 변환 (1rem = 16px)
    const speed = totalContentWidth / DURATION; // 초당 이동 속도 (px/ms)
    let startTime = performance.now();
    let currentPosition = 0;

    // 복제된 이미지를 추가하여 무한 슬라이드를 구현하므로, 트랙의 너비를 2배로 설정하고,
    // 첫 번째 원본 그룹이 끝나면 위치를 0으로 리셋하여 무한 루프를 만듭니다.
    const animate = (timestamp) => {
      const elapsed = timestamp - startTime;

      // 경과된 시간에 따른 이동 거리 계산
      currentPosition = (speed * elapsed) % totalContentWidth;

      // 트랙은 왼쪽으로 이동해야 하므로 음수 적용
      const newPosition = -currentPosition;

      // 드래그 중이 아닐 때만 자동 슬라이드 업데이트
      if (!isDragging && trackRef.current) {
        trackRef.current.style.transform = `translateX(${newPosition}px)`;
        // trackPosition 상태는 드래그 시작 시점의 기준점으로만 사용하고,
        // 자동 슬라이드 중에는 직접 DOM을 조작하여 부드러운 애니메이션을 만듭니다.
      } else {
        // 드래그 중이면 startTime을 리셋하여 드래그가 끝난 후 자연스럽게 이어지도록 준비
        startTime = performance.now() - currentPosition / speed;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [ingredientsImgSrc, isDragging]);
  // ===============================

  // === 마우스/터치 드래그 로직 ===
  useEffect(() => {
    const track = trackRef.current;
    const slideFrame = slideFrameRef.current;
    if (!track || !slideFrame) return;

    const handleStart = (e) => {
      e.preventDefault();
      setTransitionDuration('0s');
      setIsDragging(true);
      // 마우스와 터치 이벤트 분리
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setDragStartX(clientX);

      // 현재 트랙의 transform 값을 파싱하여 trackStartPos에 저장
      const transformValue = track.style.transform;
      const matrix = new DOMMatrixReadOnly(transformValue);
      setTrackStartPos(matrix.m41);
    };

    const handleMove = (e) => {
      if (!isDragging) return;

      // 마우스와 터치 이벤트 분리
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const dragDistance = clientX - dragStartX;
      const newPosition = trackStartPos + dragDistance;

      // 트랙 위치 업데이트 (자동 슬라이드와 무관하게 드래그 중에는 위치 고정)
      track.style.transform = `translateX(${newPosition}px)`;
    };

    const handleEnd = () => {
      if (!isDragging) return;
      setTransitionDuration('0.3s ease-out');
      setIsDragging(false);

      // 드래그가 끝난 후, trackPosition을 업데이트하여 자동 슬라이드 재개 시 기준점으로 사용
      const transformValue = track.style.transform;
      const matrix = new DOMMatrixReadOnly(transformValue);
      // setTrackPosition(matrix.m41); // 자동 슬라이드 로직에서 직접 DOM을 조작하므로 이 상태 업데이트는 생략 가능
    };

    // 이벤트 리스너 등록
    slideFrame.addEventListener("mousedown", handleStart);
    slideFrame.addEventListener("touchstart", handleStart, { passive: true });
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);

    // 이벤트 리스너 정리
    return () => {
      slideFrame.removeEventListener("mousedown", handleStart);
      slideFrame.removeEventListener("touchstart", handleStart);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, dragStartX, trackStartPos]);
  // ===================================

  //
  return (
    <div className={styles.aboutPage}>
      <section className={`${styles.topNav} ${scrolled && styles.active}`}>
        <TopNav />
      </section>
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
            src="../../src/assets/etcImg/brandStory2.jpg"
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
          <div
            className={styles.ingredientsSlideFrame}
            ref={slideFrameRef} // 드래그 이벤트 리스너를 위한 ref 추가
          >
            <div
              className={styles.ingredientsSlideTrack}
              ref={trackRef}
              // 트랙 너비를 원본 이미지 * 2 (무한 슬라이드용 복제 이미지)로 설정
              style={{
                width: `${itemWidth * ingredientsImgSrc.length * 2}rem`,
                transition: `transform ${transitionDuration}`,
              }}
            >
              {/* 이미지 원본 + 복제본을 위해 배열을 두 번 매핑 */}
              {[...ingredientsImgSrc, ...ingredientsImgSrc].map(
                (item, index) => {
                  return (
                    <img
                      className={styles.ingredientsSlideImg}
                      key={`ingredient-${index}`} // key는 고유해야 함
                      src={item.src}
                      style={{
                        width: `${itemWidth}rem`,
                        // transform: `translateX` 속성 제거 (JS에서 처리)
                      }}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default About;
