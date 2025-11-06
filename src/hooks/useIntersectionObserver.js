import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // isIntersecting 상태를 업데이트합니다.
        // 한 번만 트리거하고 싶다면, entry.isIntersecting이 true일 때 observer.disconnect()를 호출할 수 있습니다.
        setIsIntersecting(entry.isIntersecting); // 유동적

        // if (entry.isIntersecting) {
        // setIsIntersecting(true); // 유지 시 계속 true 유지
        // observer.unobserve(entry.target); // 한 번 감지 후 관찰 중지
        // }
      },
      {
        root: null, // 기본값은 viewport
        rootMargin: '0px',
        threshold: 0.1, // 10%가 보였을 때 콜백 실행
        ...options, // 추가적인 옵션이 있다면 덮어쓰기
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;


// 사용할 페이지에서 호출 후 사용
// const [targetRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
// <div ref={targetRef}></div>
