// import { useEffect, useState, useRef } from 'react';
// import styles from './Allproduct.module.css';
// // 이 코드는 기존 로직을 유지하면서, Intersection Observer 구현에 초점을 맞춥니다.
// import { getPackFromLevel } from '../../mockData/getData'; 

// function AllProduct() {
    
//     // 1. 상태 및 Ref 정의
//     const [scrolled, setScrolled] = useState(0);
//     const [products, setProducts] = useState([]);
//     // 개별 packBox의 DOM 노드들을 저장할 Map을 Ref로 생성합니다.
//     const packBoxRefs = useRef(new Map()); 
//     // Intersection Observer 인스턴스를 저장할 Ref입니다.
//     const observerRef = useRef(null); 

//     // --- 기존 데이터 로딩 로직 (scrolled 기반) 유지 ---
//     // (첫 번째 useEffect: 스크롤 이벤트 리스너 제거)
//     // Intersection Observer 사용 시, 이 로직은 보통 필요하지 않지만, 
//     // 사용자가 스크롤 위치에 따라 데이터를 로드하는 기존 로직을 유지하기 위해 그대로 둡니다.
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY);
//         }
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         }
//     }, [])
    
//     // (두 번째 useEffect: 스크롤 위치에 따라 데이터 로드)
    // useEffect(() => {
    //     const SCROLL_THRESHOLD = 100;
    //     const level = scrolled / SCROLL_THRESHOLD;
    //     const callItemLength = 4;
    //     const items = getPackFromLevel(level, callItemLength);
    //     const productIds = products.map((product) => { return product.productId });

    //     items.forEach((item) => {
    //         const isExist = productIds.includes(item.productId);
    //         // setProducts 호출 시 무한 루프나 불필요한 리렌더링을 방지하기 위해 로직 조정 필요
    //         if (isExist) return; 
            
    //         // 기존 products 배열에 새 항목을 추가하도록 수정
    //         setProducts(prevProducts => {
    //             // 이미 존재하는지 다시 확인 (setState가 비동기적이기 때문에 안전 장치)
    //             if (!prevProducts.some(p => p.productId === item.productId)) {
    //                  // 새로운 배열을 반환해야 React가 상태 변경을 감지함
    //                 return [...prevProducts, item]; 
    //             }
    //             return prevProducts; 
    //         });
    //     });
    // }, [scrolled]);


//     // --- Intersection Observer 구현 ---
//     useEffect(() => {
//         // 콜백 함수: 요소가 뷰포트에 들어오거나 나갈 때 실행
//         const handleIntersect = (entries, observer) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     // console.log('✅ PackBox가 화면에 진입했습니다:', entry.target.id);
//                     // 1. active 클래스 추가
//                     entry.target.classList.add(styles.active);
                    
//                     // 2. 한 번 보이면 관찰을 중지 (옵션, 무한 스크롤 등에서는 유지)
//                     // observer.unobserve(entry.target); 
//                 } else {
//                     // console.log('❌ PackBox가 화면에서 벗어났습니다:', entry.target.id);
//                     // 화면에서 벗어났을 때 클래스를 제거하고 싶다면:
//                     // entry.target.classList.remove(styles.active); 
//                 }
//             });
//         };

//         // 옵저버 인스턴스 생성
//         const observer = new IntersectionObserver(handleIntersect, {
//             root: null, // 뷰포트를 기준으로 관찰
//             rootMargin: '0px',
//             threshold: 0.1 // 요소가 10% 이상 보일 때
//         });
        
//         observerRef.current = observer;

//         // 컴포넌트 언마운트 시 클린업
//         return () => {
//             if (observerRef.current) {
//                 observerRef.current.disconnect();
//             }
//         };
//     }, []); // 빈 배열: 컴포넌트가 마운트될 때 한 번만 실행

//     // products 목록이 업데이트될 때마다 새로운 요소들을 옵저버에 등록/갱신
//     useEffect(() => {
//         if (!observerRef.current) return;
        
//         // 이전에 관찰하던 모든 요소를 중지 (갱신을 위해)
//         observerRef.current.disconnect(); 
        
//         // 새로 생성된 모든 packBox를 관찰하도록 등록
//         packBoxRefs.current.forEach(node => {
//             if (node) {
//                 observerRef.current.observe(node);
//             }
//         });
//     }, [products]); // products 배열이 바뀔 때마다 실행

//     // --- 렌더링 부분 ---
//     return (
//         <section className={styles.allProducts} >
//             {products.map((pack, index) => {

//                 return (
//                     <div
//                         // Ref를 콜백 함수 형태로 사용하여 각 DOM 노드를 Map에 저장합니다.
//                         ref={(node) => {
//                             if (node) {
//                                 packBoxRefs.current.set(pack.productId, node);
//                             } else {
//                                 // 요소가 사라질 때 Map에서 제거 (클린업)
//                                 packBoxRefs.current.delete(pack.productId);
//                             }
//                         }}
//                         className={styles.packBox}
//                         key={pack.productId} // key는 고유 ID를 사용하는 것이 가장 좋습니다.
//                         id={`pack-box-${pack.productId}`} // 디버깅을 위한 ID
//                     >
//                         <img className={styles.image} src={pack.imageSrc} />
//                         <div className={styles.name}>{pack.productName}</div>
//                         <div className={styles.price}>{pack.price_krw}</div>
//                     </div>
//                 )
//             })}
//         </section>
//     )
// }

// export default AllProduct;