import "./Footer.css"

function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-company">
                <div className="footer-company-title">"일상에 활력을 더하고, 몸과 마음의 균형을 찾아 지속 가능한 건강을 실현합니다."</div>
                <div className="footer-company-companyName">- 건강 주스 회사 -</div>
            </div>

            {/* <div className="footer-faqAbout">
                <a href="">FAQ</a>
                <a href="">About Us</a>
            </div> */}

            <div className="footer-connect">
                <div className="footer-instargram">INSTARGRAM</div>
                <div className="footer-email">wellbeingJuice@company.com</div>
                <div className="footer-number">+85 000-1234-5678</div>
                <div className="footer-adress">[04321] 서울특별시 강남구 테헤란로 123, 4층</div>
            </div>

            <div className="footer-copyright">
                Copyright © 2025 wellbeingJuice All rights reserved.
            </div>
        </div>
    )
}

export default Footer;