import "./indexStyles.css"
import Burger from "./Burger";
import About from "./About";
import Shop from "./Shop";
import Event from "./Event";
import Review from "./Review";
import Logo from "./Logo";
import Login from "./Login";
import Chat from "./Chat";
import { useSelector } from "react-redux";
import ShopUnderside from "./Shopunderside";


function TopNav() {

    const undersidePanel = useSelector((state) => state.undersidePanel);

    return (
        <>
            <div className={`topNav-underSide ${undersidePanel && "active"}`}>
                <About />
                <ShopUnderside />
                <Event />
                <Review />
            </div>
            <div className="topNav-left">
                <Burger />
                <About />
                <Shop />
                <Event />
                <Review />
            </div>
            <div className="topNav-center">
                <Logo />
            </div>
            <div className="topNav-right">
                <Login />
                <Chat />
            </div>
        </>
    )
}

export default TopNav;