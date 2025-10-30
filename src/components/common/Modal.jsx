import ReactDOM from "react-dom";
import styles from "./Modal.module.css"
import { useDispatch } from "react-redux";
import { isOpenModal } from "../../redux/slices/modal/modalState";

// 
function Modal({ children }) {
    const dispatch = useDispatch();
    const modalRoot = document.getElementById("modal-root");

    // 
    return ReactDOM.createPortal(
        <div className={styles.modalBackground}>
            <div className={styles.modalContents}>
                <button className={styles.closeBtn} onClick={() => dispatch(isOpenModal())}>close</button>
                {children}
            </div>
        </div>
        , modalRoot
    )
}

export default Modal;