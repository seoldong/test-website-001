import { useState } from "react";

function ShopBtn() {
  const [isShopEnter, setIsShopEnter] = useState(false);
  const [isMenuEnter, setIsMenuEnter] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const onClickShopBtn = () => {
    setIsClick(!isClick);
    console.log('clicked shop btn');
  };

  return (
    <div className="topNav-shopBox">
      <button
        className="topNav-shopBtn"
        onClick={onClickShopBtn}
        onMouseEnter={() => setIsShopEnter(true)}
        onMouseLeave={() => setIsShopEnter(false)}
      >
        SHOP
      </button>
      {(isShopEnter || isMenuEnter) &&
        <div
          className="topNav-shopBtn-menu"
          onMouseEnter={() => setIsMenuEnter(true)}
          onMouseLeave={() => setIsMenuEnter(false)}
        >
          <button className="topNav-shopBtn-drinkBtn">DRINK</button>
          <button className="topNav-shopBtn-packBtn">PACK</button>
        </div>
      }
    </div>
  );
}

export default ShopBtn;
