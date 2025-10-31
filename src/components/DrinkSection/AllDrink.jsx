import styles from './AllDrink.module.css';

import { useEffect, useState, useRef } from 'react';
// 이 코드는 기존 로직을 유지하면서, Intersection Observer 구현에 초점을 맞춥니다.
import { getDrinkFromLevel } from '../../mockData/getData';
import { Link } from 'react-router-dom';

// 
function AllDrink() {

    // 1. 상태 및 Ref 정의
    const [scrolled, setScrolled] = useState(0);
    const [products, setProducts] = useState([]);
    // 개별 packBox의 DOM 노드들을 저장할 Map을 Ref로 생성합니다.
    const drinkBoxRefs = useRef(new Map());
    // Intersection Observer 인스턴스를 저장할 Ref입니다.
    const observerRef = useRef(null);

    // --- 기존 데이터 로딩 로직 (scrolled 기반) 유지 ---
    // (첫 번째 useEffect: 스크롤 이벤트 리스너 제거)
    // Intersection Observer 사용 시, 이 로직은 보통 필요하지 않지만,
    // 사용자가 스크롤 위치에 따라 데이터를 로드하는 기존 로직을 유지하기 위해 그대로 둡니다.
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
        const newItems = getDrinkFromLevel(level, callItemLength);

        setProducts(prevProducts => {
            // `prevProducts`가 배열이 아닐 경우(null, undefined, Set 등)를 대비해 Array.isArray()로 확인하고 빈 배열([])을 기본값으로 사용합니다.
            // 이렇게 하면 .map() 호출 전에 항상 배열임을 보장합니다.
            const safeProducts = Array.isArray(prevProducts) ? prevProducts : [];

            // 1. 기존 제품 ID를 빠르게 조회하기 위해 Set을 생성합니다.
            // 아이디만 추출 [id]
            const existingIds = new Set(safeProducts.map(p => p.productId));

            // 2. 기존 목록에 없는 새로운 항목만 필터링합니다.
            // 새로 받은 값에 기존의 아이디가 존재하는지 확인.
            const uniqueNewItems = newItems.filter(item => !existingIds.has(item.productId));

            // 3. 중복이 제거된 새로운 항목이 있다면, 이전 상태와 합쳐서 반환합니다.
            // 새로운 내용이 있으면 기존 내용과 같이 합쳐서 반환.
            if (uniqueNewItems.length > 0) {
                return [...safeProducts, ...uniqueNewItems];
            }

            // 4. 추가된 항목이 없다면 불필요한 리렌더링을 방지하기 위해 이전 상태를 그대로 반환합니다.
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
                // else {
                // 화면에서 벗어났을 때 클래스를 제거하고 싶다면:
                // entry.target.classList.remove(styles.active); 
                // }
            });
        };

        // 옵저버 인스턴스 생성
        const observer = new IntersectionObserver(handleIntersect, {
            root: null, // 뷰포트를 기준으로 관찰
            rootMargin: '0px',
            threshold: 0.1 // 요소가 10% 이상 보일 때
        });

        // 옵저버를 Ref에 저장(* 대상을 설정하는게 아님)
        observerRef.current = observer;

        // 컴포넌트 언마운트 시 클린업
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []); // 빈 배열: 컴포넌트가 마운트될 때 한 번만 실행

    // products 목록이 업데이트될 때마다 새로운 요소들을 옵저버에 등록/갱신
    useEffect(() => {
        if (!observerRef.current) return;

        // 이전에 관찰하던 모든 요소를 중지 (갱신을 위해)
        observerRef.current.disconnect();

        // 새로 생성된 모든 packBox를 관찰하도록 등록
        drinkBoxRefs.current.forEach(node => {
            if (node) {
                observerRef.current.observe(node);
            }
        });
    }, [products]); // products 배열이 바뀔 때마다 실행

    // --- 렌더링 부분 ---
    return (
        <section className={styles.allProducts} >
            <div className={styles.hook}>Experience the fresh vitality that fills you from within.</div>
            <div className={styles.productContainer}>
                {products.map((drink, index) => {

                    return (
                        <Link
                            // Ref를 콜백 함수 형태로 사용하여 각 DOM 노드를 Map에 저장합니다.
                            ref={(node) => {
                                if (node) {
                                    // Map에 키(id)와 값(node) 추가
                                    drinkBoxRefs.current.set(drink.productId, node);
                                } else {
                                    // 요소가 사라질 때 Map에서 제거 (클린업)
                                    // map.delete(key) 맵에서 키 제거
                                    drinkBoxRefs.current.delete(drink.productId);
                                }
                            }}
                            className={styles.drinkBox}
                            key={drink.productId} // key는 고유 ID를 사용하는 것이 가장 좋습니다.
                            id={`drink-box-${drink.productId}`} // 디버깅을 위한 ID
                            to={`/product/${drink.productId}`}
                        >
                            <img className={styles.image} src={drink.imageSrc} />
                            <div className={styles.name}>{drink.productName}</div>
                            <PriceState drink={drink} />
                            {drink.popularity ? <div className={styles.popularity}>popularity</div> : ""}
                        </Link>
                    )
                })}
            </div>
        </section >
    )
}

export default AllDrink;

// 
function PriceState({ drink }) {

    const discount = (drink.price_krw * drink.discountRate / 100);

    const saleElemetnt = () => {
        return (
            <>
                <div className={styles.saleBox} >
                    <p className={styles.discountPrice}>{`${drink.price_krw - discount}`}</p>
                    <p className={styles.nomalPrice}>{drink.price_krw}</p>
                </div>
                <div className={styles.discountState}>{drink.discountRate}% off</div>
            </>
        )
    }

    const normalElement = () => {
        return (
            <div className={styles.priceBox} >
                <p>{drink.price_krw}</p>
            </div>
        )
    }

    return (
        <div>
            {drink.onSale ? saleElemetnt() : normalElement()}
        </div>
    )
}