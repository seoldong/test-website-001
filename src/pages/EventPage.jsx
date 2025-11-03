import styles from "./EventPage.module.css"
// 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TopNav from "../components/topNav";
import Footer from "../components/footerSection/Footer"
import Modal from "../components/common/Modal";
import ModalEventPage from "./ModalEvent";
import { openModal } from "../redux/slices/modal/modalState";

// 
const compareDates = (a, b) => new Date(a.info.startDate).getTime() - new Date(b.info.startDate).getTime();

// 
function EventPage() {

    const modalState = useSelector((state) => state.modalState)

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);

    const onPageItemLength = 8;
    const boardPage = Math.max(1, Math.ceil(events.length / onPageItemLength));

    // 
    useEffect(() => {
        const eventTextPath = '/data/eventList.json';
        const fetchEvents = async () => {
            try {
                const response = await fetch(eventTextPath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const eventData = await response.json();
                const sortedData = [...eventData].sort((a, b) => compareDates(b, a));
                setEvents(sortedData);

            } catch (error) {
                setError('Failed to fetch data: ' + error.message);
                console.error("Fetching data failed", error);
            } finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, [])

    // 
    if (loading) return <main className={styles.eventPage}><div className={styles.loading}>데이터를 불러오는 중입니다...</div></main>
    if (error) return <main className={styles.eventPage}><div className={styles.error}>오류: {error}</div></main>

    // 
    return (
        <main className={styles.eventPage}>
            <TopNav />
            <div className={styles.boardImgBox} />
            <div className={styles.pageTitle}>Join the Happy Farm Events!</div>

            <div className={styles.eventBox}>
                <EventList data={{ onPageItemLength, currentPage, events }} />
                <PaginationBtn data={{ currentPage, setCurrentPage, boardPage }} />
            </div>
            <Footer />
            {modalState.isOpen &&
                <Modal >
                    <ModalEventPage events={events} />
                </Modal>
            }
        </main >
    )
}

export default EventPage;

// 
function EventList({ data }) {
    const { onPageItemLength, currentPage, events } = data;
    const dispatch = useDispatch();
    const startIndex = (currentPage - 1) * onPageItemLength;
    const endIndex = startIndex + onPageItemLength;
    const currentEvents = events.slice(startIndex, endIndex);

    return (
        <div className={styles.eventList}>
            {currentEvents.map((event) => {

                return (
                    <div className={styles.box} key={event.meta.id} onClick={() => dispatch(openModal(event.meta.id))}>
                        <img className={styles.eventImage} src={event.image.mainImgSrc} alt={event.main.title} />
                        <div className={styles.eventTitle}>{event.main.title}</div>
                        <div className={styles.eventSubTitle}>{event.main.subTitle}</div>
                    </div>
                )
            })}
        </div>
    )
}

// 
function PaginationBtn({ data }) {

    const { currentPage, setCurrentPage, boardPage } = data;

    // 💡 새로운: 페이지 버튼 배열을 계산하는 함수 (최대 5개 표시)
    const getPaginationButtons = () => {
        const maxButtons = 5;
        const buttonArray = [];

        // 현재 페이지가 속한 5개 단위의 시작점 계산 (예: 1~5, 6~10, 11~15)
        const startPage = Math.floor((currentPage - 1) / maxButtons) * maxButtons + 1;
        const endPage = Math.min(startPage + maxButtons - 1, boardPage);

        for (let i = startPage; i <= endPage; i++) {
            buttonArray.push(i);
        }
        return { buttonArray, startPage, endPage };
    };
    const { buttonArray, startPage, endPage } = getPaginationButtons();


    // 💡 새로운: 처음/끝 페이지 이동 및 순차 이동 기능 추가
    const onClickBoardPageBtn = (pageNum) => {
        setCurrentPage(pageNum)
    }

    const onClickMoveLeftPageBtn = () => {
        if (currentPage === 1) return;
        setCurrentPage((prev) => prev - 1)
    }

    const onClickMoveRightPageBtn = () => {
        if (currentPage === boardPage) return;
        setCurrentPage(prev => prev + 1)
    }

    // 💡 새로운: 가장 처음/가장 끝 페이지 이동 함수
    const onClickMoveFirstPage = () => {
        setCurrentPage(1);
    }

    const onClickMoveLastPage = () => {
        setCurrentPage(boardPage);
    }

    // 
    return (
        <div className={styles.boardBtnBox}>
            <button onClick={onClickMoveFirstPage} disabled={currentPage === 1}>«</button>
            <button onClick={onClickMoveLeftPageBtn} disabled={currentPage === 1}>◀</button>
            {startPage > 1 && <button onClick={() => onClickBoardPageBtn(startPage - 1)}>...</button>}
            {buttonArray.map((pageBtn) => {
                return <button
                    key={pageBtn}
                    onClick={() => onClickBoardPageBtn(pageBtn)}
                    className={pageBtn === currentPage ? styles.activePage : ''}
                >
                    {pageBtn}
                </button>
            })}
            {endPage < boardPage && <button onClick={() => onClickBoardPageBtn(endPage + 1)}>...</button>}
            <button onClick={onClickMoveRightPageBtn} disabled={currentPage === boardPage}>▶</button>
            <button onClick={onClickMoveLastPage} disabled={currentPage === boardPage}>»</button>
        </div>
    )
}