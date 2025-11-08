import { useState, useCallback, useRef, useEffect } from "react";

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      
      // 기존 타이머 클리어 후 새로 설정
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

    } catch (err) {
      console.error('failed to copy text to clipboard:', err);
    }
  }, []);

  return { isCopied, copy };
};

export default useClipboard;