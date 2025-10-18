import { useState } from "react";

function Chat() {
  const [isClick, setIsClick] = useState(false);

  const onClickChatBtn = () => {
    setIsClick(!isClick);
    console.log('clicked Chat btn');
  };

  return (
    <button className="chat" onClick={onClickChatBtn}>
      CHAT
    </button>
  );
}

export default Chat;
