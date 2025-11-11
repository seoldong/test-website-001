import styles from "./index.module.css"
// 
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// 
import BurgerBtn from "./BurgerBtn";
import ShopBtn from "./ShopBtn";
import Logo from "./LogoBtn";

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
                <Link to={'/'}><button className={styles.aboutBtn}>HOME</button></Link>
                <Link to={'/About'}><button className={styles.aboutBtn}>ABOUT</button></Link>
                <Link to={'/shop/drinks'}><button className={styles.drinkBtn}>SHOP : DRINK</button></Link>
                <Link to={'/shop/maskPacks'}><button className={styles.maskPackBtn}>SHOP : MASK PACK</button></Link>
                <Link to={'/Event'}><button className={styles.eventBtn}>EVENT</button></Link>
                <Link to={'/Blog'} ><button className={styles.blogBtn} disabled={true} >BLOG</button></Link>
                <button className={styles.cartBtn} disabled={true}>
                    CART
                </button>
                <button className={styles.loginBtn} disabled={true}>
                    LOGIN
                </button>
                <button className={styles.languageBtn} disabled={true}>
                    <p>EN</p>
                </button>
            </div>
            <div className={styles.leftBox}>
                <Link to={'/About'}><button className={styles.aboutBtn}>ABOUT</button></Link>
                <ShopBtn />
                <Link to={'/Event'}><button className={styles.eventBtn}>EVENT</button></Link>
                <Link to={'/Blog'}><button className={styles.blogBtn} disabled={true} >BLOG</button></Link>
            </div>
            <div className={styles.centerBox}>
                <Logo />

            </div>
            <div className={styles.rightBox}>
                <button className={styles.cartBtn} disabled={true}>
                    CART
                </button>
                <button className={styles.loginBtn} disabled={true}>
                    LOGIN
                </button>
                <button className={styles.languageBtn} disabled={true}>
                    <p>EN</p>
                </button>
            </div>
            <BurgerBtn />
        </section>
    )
}

export default TopNav;