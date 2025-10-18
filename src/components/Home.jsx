import "./HomeStyles.css"

import Burger from "./topNav/Burger"
import About from "./topNav/About"
import Shop from "./topNav/Shop"
import Event from "./topNav/Event"
import Review from "./topNav/Review"
import Logo from "./topNav/Logo"
import Login from "./topNav/Login"
import Chat from "./topNav/Chat"
import ShopUnderside from "./topNav/Shopunderside"
import { useSelector } from "react-redux"

// 
function Home() {
    const undersidePanel = useSelector((state) => state.undersidePanel);

    return (
        <div className="base">
            <div className="topNav">
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
            </div>
            <div className={`topNav-underSide ${undersidePanel && 'active'}`}>
                <About />
                <ShopUnderside />
                <Event />
                <Review />
            </div>
            <div className="topcontents">

            </div>
            <div className="items01"></div>
            <div className="items02"></div>
            <div className="introduce01"></div>
            <div className="introduce02"></div>
            <div className="reviewSlide"></div>
        </div>
    )
}

export default Home;