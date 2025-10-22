import { useState } from "react";

// 
function ShopBtnUnderside() {
  const [isClick, setIsClick] = useState(false);

  const onClickShopBtn = () => {
    setIsClick(!isClick);
    console.log('clicked underside shop btn');
  };

  return (
    <div className="topNav-underside-shop">
      <button
        className="topNav-underside-shopBtn"
        onClick={onClickShopBtn}
      >
        SHOP
      </button>
      <div
        className="topNav-underside-shop-menu"
      >
        <button>DRINK</button>
        <button>PACK</button>
      </div>
    </div>
  );
}

export default ShopBtnUnderside;