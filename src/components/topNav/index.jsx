import styles from "./index.module.css"
// 
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// 
import BurgerBtn from "./BurgerBtn";
import ShopBtn from "./ShopBtn";
import Logo from "./LogoBtn";
import ShopBtnUnderside from "./ShopBtnUnderside";

//
function TopNav() {
    const undersidePanel = useSelector((state) => state.undersidePanel);
    const [scrolled, setScrolled] = useState(false);

    const SCROLL_THRESHOLD = 50;
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > SCROLL_THRESHOLD;
            setScrolled(isScrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <section className={`${styles.nav} ${scrolled && styles.active}`}>
            <div className={`${styles.underSide} ${undersidePanel && styles.active}`}>
                <Link to={'/About'}><button className={styles.aboutBtn}>ABOUT</button></Link>
                <ShopBtnUnderside />
                <button className={styles.eventBtn} >EVENT</button>
            </div>
            <div className={styles.leftBox}>
                <BurgerBtn />
                <Link to={'/About'}><button className={styles.aboutBtn}>ABOUT</button></Link>
                <ShopBtn />
                <Link to={'/Event'}><button className={styles.eventBtn}>EVENT</button></Link>
            </div>
            <div className={styles.centerBox}>
                <Logo />
            </div>
            <div className={styles.rightBox}>
                <button className={styles.cartBtn}>
                    CART
                </button>
                <button className={styles.loginBtn}>
                    LOGIN
                </button>
                <button className={styles.languageBtn}>
                    LANGUAGE
                </button>
            </div>
        </section>
    )
}

export default TopNav;



