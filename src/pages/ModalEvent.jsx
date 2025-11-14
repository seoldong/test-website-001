import styles from "./ModalEvent.module.css"
// 
import { useSelector } from "react-redux";

// 
function ModalEventPage({ events }) {

    const selectedEvent = useSelector((state) => state.modalState)
    const eventData = events.find((event) => event.meta.id === selectedEvent.eventId);
    if (!eventData) return null;

    const styeleData = {
        backgroundImage: `url('${eventData?.image?.mainImgSrc || ''}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <section className={styles.modalEventPage} style={styeleData}>
            <div className={styles.titleBox}>
                <div className={styles.title}>{eventData.main.title}</div>
                <div className={styles.subTitle}>{eventData.main.subTitle}</div>
                <div className={styles.description}>{eventData.main.description}</div>
            </div>
            <div className={styles.info}>
                <div className={styles.time}>
                    <p>{eventData.info.startDate}</p>
                    <p>{eventData.info.startTime}</p>
                    <p>~</p>
                    <p>{eventData.info.endDate}</p>
                    <p>{eventData.info.endTime}</p>
                </div>
                <div className={styles.location}><p>{eventData.info.location}</p></div>
            </div>
        </section>
    )
}

export default ModalEventPage;