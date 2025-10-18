import "./App.css";
import About from "./components/topNav/About";
import Burger from "./components/topNav/burger";
import Chat from "./components/topNav/Chat";
import Event from "./components/topNav/Event";
import Login from "./components/topNav/Login";
import Logo from "./components/topNav/Logo";
import Review from "./components/topNav/Review";
import Shop from "./components/topNav/Shop";

function App() {
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
      <div className="mainSlide"></div>
      <div className="items01"></div>
      <div className="items02"></div>
      <div className="introduce01"></div>
      <div className="introduce02"></div>
      <div className="reviewSlide"></div>
    </div>
  );
}

export default App;
