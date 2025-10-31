import styles from "./Footer.module.css"
// 1. useState와 useCallback 훅을 import 합니다.
import React, { useState, useCallback } from "react";

function Footer() {
    // 2. 복사 완료 메시지 상태 관리를 위한 state를 추가합니다.
    const [isCopied, setIsCopied] = useState(false);
    const emailAddress = "wellbeingJuice@company.com";

    // 3. 이메일 복사 로직을 useCallback으로 정의합니다.
    const handleCopyEmail = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setIsCopied(true); // 성공 시 상태 변경
            // 2초 후 메시지 초기화
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        } catch (err) {
            console.error('클립보드 복사 실패:', err);
            // 사용자에게 실패 알림을 줄 수도 있습니다.
        }
    }, [emailAddress]); // 이메일 주소가 변경되지 않으므로 사실상 빈 배열 가능

    return (
        <section className={styles.footer}>
            <div className={styles.company}>
                <div className={styles.firstLineTitle}>We add vitality to your daily life, </div>
                <div className={styles.secondLineTitle}>find balance in body and mind, and realize sustainable health."</div>
                <div className={styles.companyName}>- Wellness Juice Company -</div>
            </div>
            <div className={styles.connect}>
                <div className={styles.instargram}>[ INSTARGRAM ]</div>
                {/* 4. 버튼 클릭 시 정의한 함수를 호출하도록 변경합니다. */}
                <div className={styles.email}>
                    <div className={styles.emailAdd}>{emailAddress}</div>
                    <div className={styles.eamilCopy}>
                        <button onClick={handleCopyEmail}>
                            {/* 5. 복사 상태에 따라 버튼 텍스트를 변경합니다. */}
                            {isCopied ? "✓ copied!" : "[ copy email ]"}
                        </button>
                    </div>
                </div>
                <div className={styles.number}>+82 (0)2-1234-5678</div>
                <div className={styles.adress}>[04321] 4F, 123, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea</div>
            </div>
            <div className={styles.copyright}>
                Copyright © 2025 wellbeingJuice All rights reserved.
            </div>
        </section>
    )
}

export default Footer;