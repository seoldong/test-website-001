import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // React Router v6 기준

/**
 * 라우팅 경로(URL)가 변경될 때마다 윈도우 스크롤을 맨 위로 이동시키는 커스텀 훅
 */
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 윈도우 스크롤을 페이지의 맨 위(0, 0)로 이동
    window.scrollTo(0, 0); 
    
    // 배열에 pathname을 넣어, 경로가 바뀔 때마다 이 useEffect가 실행되도록 합니다.
  }, [pathname]); 
}

export default useScrollToTop;