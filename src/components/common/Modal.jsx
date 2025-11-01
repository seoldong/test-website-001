import ReactDOM from "react-dom";
import styles from "./Modal.module.css"
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/modal/modalState";

// 
function Modal({ children }) {
    const dispatch = useDispatch();
    const modalRoot = document.getElementById("modal-root");

// 💡 하나의 함수로 통일: 모달 닫기 기능만 수행합니다.
    const handleClose = (e) => {
        // e.preventDefault()는 버튼이나 링크의 기본 동작 방지용이므로,
        // 여기서는 버블링 방지 로직이 인라인으로 처리되므로 필수는 아닙니다.
        // 다만 안전을 위해 유지할 수 있습니다.
        e.preventDefault(); 
        dispatch(closeModal());
    }

    // 
    return ReactDOM.createPortal(
        <div
            className={styles.background}
            onClick={handleClose}>
            <div
                className={styles.contentsBox}
                onClick={e => e.stopPropagation()}
            >
                <div className={styles.btnBox}>
                    <button
                        className={styles.btn}
                        onClick={handleClose}>
                        close
                    </button>
                </div>
                <div className={styles.contents}>{children}</div>
            </div>
        </div>
        , modalRoot
    )
}

export default Modal;