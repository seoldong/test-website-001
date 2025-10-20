import { useEffect, useState, useRef } from "react";
import "./Recommended.css";
import { getRecommendedJuice } from "../../mockData/getData";

// 
const ProductSlider = () => {
    const trackRef = useRef(null);
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;
    const ITEM_WIDTH_REM = 30;

    console.log(currentIndex);


    useEffect(() => {
        const allProducts = getRecommendedJuice;
        setProducts([...allProducts, ...allProducts.slice(0, itemsToShow)]);
    }, []);

    useEffect(() => {
        if (products.length === 0) return;
        const interval = setInterval(() => {
            if (currentIndex >= products.length - itemsToShow) {
                trackRef.current.style.transition = 'none';
                setCurrentIndex(0);
            } else {
                trackRef.current.style.transition = 'transform 0.3s ease-in-out';
                setCurrentIndex(currentIndex + 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [currentIndex, products]);

    return (
        <div className="recommended-container">
            <div className="recommended-title">{`RECOMMENDED JUICES - TITLE`}</div>
            <div className="recommended-description">{`recommeded juice - description`}</div>
            <div className="recommended-slide">
                <div className="recommended-slideBox">
                    <div
                        className="recommended-slideTrack"
                        ref={trackRef}
                        style={{
                            width: `${ITEM_WIDTH_REM * products.length}rem`,
                            transform: `translateX(-${currentIndex * ITEM_WIDTH_REM}rem)`,
                            transition: `transform 0.3s ease-in-out`,
                        }}
                    >
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="recommended-productBox"
                                style={{ width: `${ITEM_WIDTH_REM}rem`, height: '40rem' }}
                            >
                                {product?.productName}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="recommended-viewAllProducts"></div>
        </div>
    );
};

export default ProductSlider;