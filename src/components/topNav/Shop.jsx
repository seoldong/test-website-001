import { useState } from "react";

function Shop() {
  const [isShopEnter, setIsShopEnter] = useState(false);
  const [isMenuEnter, setIsMenuEnter] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const onClickShopBtn = () => {
    setIsClick(!isClick);
    console.log('clicked shop btn');
  };

  return (
    <div className="shop-container">
      <button
        className="shopBtn"
        onClick={onClickShopBtn}
        onMouseEnter={() => setIsShopEnter(true)}
        onMouseLeave={() => setIsShopEnter(false)}
      >
        SHOP
      </button>
      {(isShopEnter || isMenuEnter) &&
        <div
          className="shop-menu"
          onMouseEnter={() => setIsMenuEnter(true)}
          onMouseLeave={() => setIsMenuEnter(false)}
        >
          <button className="shop-drinkBtn">DRINK</button>
          <button className="shop-packBtn">PACK</button>
        </div>
      }
    </div>
  );
}

export default Shop;
