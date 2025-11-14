import styles from "./index.module.css"
// 
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// 
import BurgerBtn from "./BurgerBtn";
import ShopBtn from "./ShopBtn";
import Logo from "./LogoBtn";
import { isOpenUndersidePanel } from "../../redux/slices/topnav/undersideSlice";

//
function TopNav() {
    const dispatch = useDispatch();
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
                <Link to={'/'}><button className={styles.aboutBtn} onClick={() => dispatch(isOpenUndersidePanel())}>HOME</button></Link>
                <Link to={'/About'}><button className={styles.aboutBtn} onClick={() => dispatch(isOpenUndersidePanel())}>ABOUT</button></Link>
                <Link to={'/shop/drinks'}><button className={styles.drinkBtn} onClick={() => dispatch(isOpenUndersidePanel())}>SHOP : DRINK</button></Link>
                <Link to={'/shop/maskPacks'}><button className={styles.maskPackBtn} onClick={() => dispatch(isOpenUndersidePanel())}>SHOP : MASK PACK</button></Link>
                <Link to={'/Event'}><button className={styles.eventBtn} onClick={() => dispatch(isOpenUndersidePanel())}>EVENT</button></Link>
                <Link to={'/Blog'} ><button className={styles.blogBtn} disabled={true} onClick={() => dispatch(isOpenUndersidePanel())}>BLOG</button></Link>
                <button className={styles.cartBtn} onClick={() => dispatch(isOpenUndersidePanel())} disabled={true}>
                    CART
                </button>
                <button className={styles.loginBtn} onClick={() => dispatch(isOpenUndersidePanel())} disabled={true}>
                    LOGIN
                </button>
                <button className={styles.languageBtn} onClick={() => dispatch(isOpenUndersidePanel())} disabled={true}>
                    <p>EN</p>
                </button>
            </div>
            <div className={styles.leftBox}>
                <Link to={'/About'}><button className={styles.aboutBtn}>ABOUT</button></Link>
                <ShopBtn />
                <Link to={'/Event'}><button className={styles.eventBtn}>EVENT</button></Link>
                <Link to={'/Blog'}><button className={styles.blogBtn} >BLOG</button></Link>
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