import styles from "./index.module.css"
import BurgerBtn from "./BurgerBtn";
import ShopBtn from "./ShopBtn";
import Logo from "./LogoBtn";
import Login from "./LoginBtn";
import ChatBtn from "./ChatBtn";
import { useDispatch, useSelector } from "react-redux";
import ShopBtnUnderside from "./ShopBtnUnderside";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../common/Modal";
import eventData from "../../mockData/eventData";
import event01Img from "../../assets/etcImg/event01.png";
import event02Img from "../../assets/etcImg/event02.jpg";
import { isOpenModal } from "../../redux/slices/modal/modalState";



// 
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
        <section className={`${styles.nav} ${scrolled && styles.active}`}>
            <div className={`${styles.underSide} ${undersidePanel && styles.active}`}>
                <Link to={'/About'}><button className={styles.topNavAaboutBtn}>ABOUT</button></Link>
                <ShopBtnUnderside />
                <button className={styles.eventBtn} >EVENT</button>
                <Link to={'/Review'}><button className={styles.reviewBtn}>REVIEW</button></Link>
            </div>
            <div className={`${styles.leftBox}`}>
                <BurgerBtn />
                <Link to={'/About'}><button className={styles.aboutBtn}>ABOUT</button></Link>
                <ShopBtn />
                <EventBtn />
                <Link to={'/Review'}><button className={styles.reviewBtn}>REVIEW</button></Link>
            </div>
            <div className={styles.centerBox}>
                <Logo />
            </div>
            <div className={styles.rightBox}>
                <Login />
                <ChatBtn />
            </div>
        </section>
    )
}

export default TopNav;

// 
function EventBtn() {
    const dispatch = useDispatch();

    const modalState = useSelector((state) => state.modalState);
    const [event, setEvent] = useState({});

    useEffect(() => {
        setEvent(eventData)
    }, []);

    return (
        <>
            <button onClick={() => dispatch(isOpenModal())} className={styles.eventBtn} >EVENT</button>
            {modalState && (
                <Modal>
                    <section className={styles.contents}>
                        <div className={styles.eventMain}>
                            <div className={styles.eventTitle}>{event.main.title}</div>
                            <div className={styles.eventSubTitle}>{event.main.subTitle}</div>
                        </div>

                        <div className={styles.eventDetails}>
                            <div className={styles.event01Box}>
                                <img src={event01Img} />
                                <div className={styles.event01Title}>{event.details.event01.title}</div>
                                <div className={styles.event01Description}>{event.details.event01.description}</div>
                            </div>
                            <div className={styles.event02Box}>
                                <img src={event02Img} />
                                <div className={styles.event02Title}>{event.details.event02.title}</div>
                                <div className={styles.event02Description}>{event.details.event02.description}</div>
                            </div>
                        </div>

                        <div className={styles.eventInfo}>
                            <div className={styles.eventTime}>{event.info.date}</div>
                            <div className={styles.eventLocation}>{event.info.time}</div>
                            <div className={styles.eventFee}>{event.info.location}</div>
                            <div className={styles.eventPreparation}>{event.info.fee}</div>
                            <div className={styles.eventPreparation}>{event.info.preparation}</div>
                        </div>
                    </section>
                </Modal>)}
        </>

    )
}