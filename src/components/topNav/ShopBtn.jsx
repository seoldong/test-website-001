import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShopBtn() {
  const navigate = useNavigate();
  const [isShopEnter, setIsShopEnter] = useState(false);
  const [isMenuEnter, setIsMenuEnter] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const onClickShopBtn = () => {
    setIsClick(!isClick);
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
          <button className="topNav-shopBtn-drinkBtn" onClick={() => navigate('/shop/drink')}>DRINK</button>
          <button className="topNav-shopBtn-packBtn" onClick={() => navigate('/shop/pack')}>PACK</button>
        </div>
      }
    </div>
  );
}

export default ShopBtn;
