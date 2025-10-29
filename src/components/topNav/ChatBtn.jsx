import styles from './index.module.css'
import { useState } from "react";

function ChatBtn() {
  const [isClick, setIsClick] = useState(false);

  const onClickChatBtn = () => {
    setIsClick(!isClick);
    console.log('clicked ChatBtn btn');
  };

  return (
    <button className={styles.chatBtn} onClick={onClickChatBtn}>
      CHAT
    </button>
  );
}

export default ChatBtn;
