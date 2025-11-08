import styles from "./EventPage.module.css"
// 
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// 
import Modal from "../components/common/Modal";
import ModalEventPage from "./ModalEvent";
import { openModal } from "../redux/slices/modal/modalState";
import { fetchEventsThunk } from "../redux/slices/event/events";
import Loading from "../components/common/Loading";
import NoData from "../components/common/NoData";
import Error from "../components/common/Error";

// 
function EventPage() {

    const dispatch = useDispatch();
    const { category } = useParams();
    const modalState = useSelector((state) => state.modalState);
    const { data, loading, error } = useSelector((state) => state.events);

    const [currentPage, setCurrentPage] = useState(1);

    const dataMissing = data.length === 0;

    const onPageItemLength = 8;
    const boardPage = Math.max(1, Math.ceil(data.length / onPageItemLength));

    // 
    useEffect(() => {
        if (dataMissing && !loading && !error) {
            dispatch(fetchEventsThunk());
        }
    }, [dataMissing, loading, error, dispatch]);

    const handleRefetch = useCallback(() => {
        dispatch(fetchEventsThunk());
    }, [dispatch]);

    // 
    if (loading) return <Loading />
    if (dataMissing) return <NoData onRetry={handleRefetch} dataName={category} />
    if (error) return <Error onRetry={handleRefetch} dataName={category} />;

    // 
    return (
        <main className={styles.eventPage}>
            <div className={styles.boardImgBox} />
            <div className={styles.pageTitle}>Join the Happy Farm Events!</div>

            <div className={styles.eventBox}>
                <EventList eventData={{ onPageItemLength, currentPage, data }} />
                <PaginationBtn data={{ currentPage, setCurrentPage, boardPage }} />
            </div>
            {modalState.isOpen &&
                <Modal >
                    <ModalEventPage events={data} />
                </Modal>
            }
        </main >
    )
}

export default EventPage;

// 
function EventList({ eventData }) {
    const { onPageItemLength, currentPage, data } = eventData;
    const dispatch = useDispatch();
    const startIndex = (currentPage - 1) * onPageItemLength;
    const endIndex = startIndex + onPageItemLength;
    const currentEvents = data.slice(startIndex, endIndex);

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

    const getPaginationButtons = () => {
        const maxButtons = 5;
        const buttonArray = [];

        const startPage = Math.floor((currentPage - 1) / maxButtons) * maxButtons + 1;
        const endPage = Math.min(startPage + maxButtons - 1, boardPage);

        for (let i = startPage; i <= endPage; i++) {
            buttonArray.push(i);
        }
        return { buttonArray, startPage, endPage };
    };
    const { buttonArray, startPage, endPage } = getPaginationButtons();


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

    const onClickMoveFirstPage = () => {
        setCurrentPage(1);
    }

    const onClickMoveLastPage = () => {
        setCurrentPage(boardPage);
    }

    // 
    return (
        <div className={styles.boardBtnBox}>
            <button className={styles.arrow} onClick={onClickMoveFirstPage} disabled={currentPage === 1}>⟪</button>
            <button className={styles.boubbleArrow} onClick={onClickMoveLeftPageBtn} disabled={currentPage === 1}>⟨</button>
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
            <button className={styles.arrow} onClick={onClickMoveRightPageBtn} disabled={currentPage === boardPage}>⟩</button>
            <button className={styles.boubbleArrow} onClick={onClickMoveLastPage} disabled={currentPage === boardPage}>⟫</button>
        </div>
    )
}