import styles from "./Footer.module.css"
// 
import useClipboard from "../../hooks/useClipboard";

// 
function Footer() {

    const { isCopied, copy } = useClipboard();
    const emailAddress = "wellbeingJuice@company.com";

    const handleCopyEmail = () => {
        copy(emailAddress);
    };

    return (
        <section className={styles.footer}>
            <div className={styles.company}>
                <div className={styles.firstLineTitle}>We add vitality to your daily life, </div>
                <div className={styles.secondLineTitle}>find balance in body and mind, and realize sustainable health."</div>
                <div className={styles.companyName}>- Wellness Juice Company -</div>
            </div>
            <div className={styles.connect}>
                <a
                    href={'https://www.instagram.com/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instargram} // 기존 스타일은 유지
                >
                    [ INSTARGRAM ]
                </a>
                <div className={styles.email}>
                    <div className={styles.emailAdd}>{emailAddress}</div>
                    <div className={styles.eamilCopy}>
                        <button onClick={handleCopyEmail}>
                            {isCopied ? "✓ copied!" : "[ copy email ]"}
                        </button>
                    </div>
                </div>
                <div className={styles.number}>+82 (00)00-1234-5678</div>
                <div className={styles.adress}>[00000] 0F, 123, myAddress-ro, myAddress-gu, Seoul, Republic of Korea</div>
            </div>
            <div className={styles.copyright}>
                Copyright © 2025 wellbeingJuice All rights reserved.
            </div>
        </section>
    )
}

export default Footer;


