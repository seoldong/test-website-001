import "./index.css"
import BurgerBtn from "./BurgerBtn";
import AboutBtn from "./AboutBtn";
import ShopBtn from "./ShopBtn";
import EventBtn from "./EventBtn";
import ReviewBtn from "./ReviewBtn";
import Logo from "./LogoBtn";
import Login from "./LoginBtn";
import ChatBtn from "./ChatBtn";
import { useSelector } from "react-redux";
import ShopBtnUnderside from "./ShopBtnUnderside";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 50;

//
function TopNav() {

    const [scrolled, setScrolled] = useState(false);


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

    const undersidePanel = useSelector((state) => state.undersidePanel);
    // const location = useLocation();

    return (
        <section className={`topNav ${scrolled && 'active'}`}>
            <div className={`topNav-underSide ${undersidePanel && "active"}`}>
                <AboutBtn />
                <ShopBtnUnderside />
                <EventBtn />
                <ReviewBtn />
            </div>
            <div className="topNav-leftBox">
                <BurgerBtn />
                <AboutBtn />
                <ShopBtn />
                <EventBtn />
                <ReviewBtn />
            </div>
            <div className="topNav-centerBox">
                <Logo />
            </div>
            <div className="topNav-rightBox">
                <Login />
                <ChatBtn />
            </div>
        </section>
    )
}

export default TopNav;