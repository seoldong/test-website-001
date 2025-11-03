import styles from './ShopAllProducts.module.css';
// 
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// 
import { getAllDrinks } from '../../redux/slices/product/drinks';
import { getBestDrinks } from '../../redux/slices/product/bestDrinks';
import { getAllMaskPacks } from '../../redux/slices/product/maskPacks';
import { getBestMaskPacks } from '../../redux/slices/product/bestMaskPacks';
//
const getProductFromLevel = (products, level, itemLength) => {
    let pevLev = (Math.floor(level) * itemLength) - itemLength;
    let curLev = Math.floor(level) * itemLength;
    if (pevLev <= 0) pevLev = 0;
    if (curLev <= pevLev) curLev = 4;
    return products.slice(pevLev, curLev);
}

// 
function ShopAllProducts() {
    const { category } = useParams();
    const dispatch = useDispatch();
    const drinks = useSelector((state) => state.drinks);
    const maskPacks = useSelector((state) => state.maskPacks);

    const [scrolled, setScrolled] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const drinkBoxRefs = useRef(new Map());
    const observerRef = useRef(null);
    const caseOfCategory = (category) => {
        switch (category) {
            case "drink":
                return drinks;
            case "maskPack":
                return maskPacks;
            default:
                return [];
        }
    }
    const allProducts = caseOfCategory(category);
    //
    useEffect(() => {
        const topCount = 4;
        if (category === 'drink' && drinks.length === 0) {
            const fetchDrink = async () => {
                setLoading(true);
                setError(null);
                const drinkPath = '/data/product-drink.json';
                try {
                    const response = await fetch(drinkPath);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const drinks = await response.json();
                    dispatch(getAllDrinks(drinks));
                    dispatch(getBestDrinks({ productData: drinks, topCount: topCount }));
                } catch (error) {
                    setError('Failed to fetch data: ' + error.message);
                    console.error("Fetching data failed", error);
                } finally {
                    setLoading(false);
                }
            }
            fetchDrink();
        } else if (category === 'maskPack' && maskPacks.length === 0) {
            const fetchMaskPack = async () => {
                setLoading(true);
                setError(null);
                const maskpackPath = '/data/product-maskPack.json';
                try {
                    const response = await fetch(maskpackPath);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const maskPacks = await response.json();
                    dispatch(getAllMaskPacks(maskPacks));
                    dispatch(getBestMaskPacks({ productData: maskPacks, topCount: topCount }));
                } catch (error) {
                    setError('Failed to fetch data: ' + error.message);
                    console.error("Fetching data failed", error);
                } finally {
                    setLoading(false);
                }
            }
            fetchMaskPack();
        } else {
            setLoading(false);
            setError(null);
            return;
        }

    }, [drinks.length, maskPacks.length, category, dispatch])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // 
    useEffect(() => {
        const SCROLL_THRESHOLD = 200;
        const level = Math.floor(scrolled / SCROLL_THRESHOLD);
        const callItemLength = 4;
        const data = caseOfCategory(category);

        const newItems = getProductFromLevel(data, level, callItemLength);

        setProducts(prevProducts => {
            const safeProducts = Array.isArray(prevProducts) ? prevProducts : [];
            const existingIds = new Set(safeProducts.map(p => p.productId));
            const uniqueNewItems = newItems.filter(item => !existingIds.has(item.productId));
            if (uniqueNewItems.length > 0) {
                return [...safeProducts, ...uniqueNewItems];
            }
            return prevProducts;
        });
    }, [scrolled]);

    // --- Intersection Observer 구현 ---
    useEffect(() => {
        // 콜백 함수: 요소가 뷰포트에 들어오거나 나갈 때 실행
        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.active);
                    // observer.unobserve(entry.target); 
                }
                else {
                entry.target.classList.remove(styles.active); 
                }
            });
        };

        // 옵저버 인스턴스 생성
        const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        // 옵저버를 Ref에 저장(* 대상을 설정하는게 아님)
        observerRef.current = observer;
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []); // 빈 배열: 컴포넌트가 마운트될 때 한 번만 실행

    useEffect(() => {
        if (!observerRef.current) return;
        observerRef.current.disconnect();

        drinkBoxRefs.current.forEach(node => {
            if (node) {
                observerRef.current.observe(node);
            }
        });
    }, [products]);

    // 
    if (loading) return <div className={styles.bestProducts}>Loading...</div>;
    if (error) return <div className={styles.bestProducts}>Error: {error}</div>;

    // --- 렌더링 부분 ---
    return (
        <section className={styles.allProducts} >
            <div className={styles.hook}>Experience the fresh vitality that fills you from within.</div>
            <div className={styles.productContainer}>
                {allProducts.map((product, index) => {

                    return (
                        <Link
                            // Ref를 콜백 함수 형태로 사용하여 각 DOM 노드를 Map에 저장합니다.
                            ref={(node) => {
                                if (node) {
                                    // Map에 키(id)와 값(node) 추가
                                    drinkBoxRefs.current.set(product.productId, node);
                                } else {
                                    // 요소가 사라질 때 Map에서 제거 (클린업)
                                    // map.delete(key) 맵에서 키 제거
                                    drinkBoxRefs.current.delete(product.productId);
                                }
                            }}
                            className={styles.productBox}
                            key={product.productId} // key는 고유 ID를 사용하는 것이 가장 좋습니다.
                            id={`drink-box-${product.productId}`} // 디버깅을 위한 ID
                            to={`/product/${product.productId}`}
                        >
                            <img className={styles.image} src={product.imageSrc} />
                            <div className={styles.name}>{product.productName}</div>
                            <PriceState product={product} />
                        </Link>
                    )
                })}
            </div>
        </section >
    )
}

export default ShopAllProducts;

// 
function PriceState({ product }) {

    const discount = (product.priceKrw * product.discountRate / 100);

    const saleElemetnt = () => {
        return (
            <>
                <div className={styles.saleBox} >
                    <p className={styles.discountPrice}>{`₩ ${product.priceKrw - discount}`}</p>
                    <p className={styles.nomalPrice}>₩ {product.priceKrw}</p>
                </div>
                <div className={styles.discountState}>{product.discountRate}% off</div>
            </>
        )
    }

    const normalElement = () => {
        return (
            <div className={styles.priceBox} >
                <p>₩ {product.priceKrw}</p>
            </div>
        )
    }

    return (
        <div>
            {product.onSale ? saleElemetnt() : normalElement()}
        </div>
    )
}