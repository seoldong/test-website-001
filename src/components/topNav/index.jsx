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


function TopNav() {

    const undersidePanel = useSelector((state) => state.undersidePanel);

    return (
        <>
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
        </>
    )
}

export default TopNav;