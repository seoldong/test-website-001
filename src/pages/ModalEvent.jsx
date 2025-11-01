import { useSelector } from "react-redux";
import styles from "./ModalEvent.module.css"

function ModalEventPage({ events }) {

    const selectedEvent = useSelector((state) => state.modalState)
    const eventData = events.find((event) => event.meta.id === selectedEvent.eventId);
    console.log(eventData);

    const styeleData = {
        backgroundImage: `url('${eventData.image.mainImgSrc}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    }

    return (
        <section className={styles.modalEventPage} style={styeleData}>
            <div className={styles.title}><p>{eventData.main.title}</p></div>
            <div className={styles.subTitle}><p>{eventData.main.subTitle}</p></div>
            <div className={styles.description}><p>{eventData.main.description}</p></div>
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