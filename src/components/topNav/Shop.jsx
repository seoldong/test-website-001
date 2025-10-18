import { useState } from "react";

function Shop() {
  const [isClick, setIsClick] = useState(false);

  const onClickShopBtn = () => {
    setIsClick(!isClick);
    console.log('clicked shop btn');
    
  };

  return (
    <button className="topNav-menu01" onClick={onClickShopBtn}>
      SHOP
    </button>
  );
}

export default Shop;
