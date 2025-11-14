import styles from './ProductPage.module.css';
// 
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { orderMinus, orderPlus } from '../redux/slices/order/order';
import Loading from '../components/common/Loading';
import NoData from '../components/common/NoData';
import Error from '../components/common/Error';
import { fetchDrinksThunk } from '../redux/slices/product/drinks';
import { fetchMaskPacksThunk } from '../redux/slices/product/maskPacks';
import { fetchDrinkReviewsThunk } from '../redux/slices/review/drinkRevews';
import { fetchMaskPackReviewsThunk } from '../redux/slices/review/maskPackRivews';
import productDetails from '../mockData/productDetails/productDetails';
import questionAndAnswer from '../mockData/productDetails/questionAndAnswer';


// ====================================================================
// 💡 컴포넌트 외부 정의: 재사용 및 불필요한 재생성 방지
// ====================================================================

// Redux 상태가 없을 때 안전하게 반환할 기본 객체 (useSelector 경고 방지)
const DEFAULT_PRODUCT_STATE = { data: [], loading: false, error: null };

// ID의 첫 글자를 기반으로 Redux Slice 이름을 결정하는 함수
const caseOfId = (id) => {
    if (typeof id !== 'string' || id.length === 0) {
        return "";
    }
    const firstChar = id[0].toUpperCase();
    switch (firstChar) {
        case "D":
            return "drinks";
        case "M":
            return "maskPacks";
        default:
            return "";
    }
}

// ====================================================================
// 🌟 메인 컴포넌트: ProductPage
// ====================================================================

function ProductPage() {
    // 
    const { id } = useParams();
    const dispatch = useDispatch();

    const productType = useMemo(() => caseOfId(id), [id]);

    const { data, loading, error } = useSelector((state) => {
        return state[productType] || DEFAULT_PRODUCT_STATE;
    });

    // 💡 최적화: data.find()를 사용하여 단일 객체 추출 (find는 효율적)
    const productData = useMemo(() => {
        return data.find(product => product.productId === id);
    }, [data, id]);

    // 데이터가 로드되지 않았거나, 해당 ID의 제품이 없을 경우 (안전성 강화)
    const dataMissing = data.length === 0 || !productData;

    // 
    const productOrder = useSelector((state) => state.productsOrder);
    const [pageView, setPageView] = useState('details');


    useEffect(() => {
        // 내부 함수로 비동기 로직 분리 (React 권장 패턴)
        const fetchIdData = () => {
            if (!dataMissing) return;

            switch (productType) {
                case "drinks":
                    dispatch(fetchDrinksThunk());
                    break;
                case "maskPacks":
                    dispatch(fetchMaskPacksThunk());
                    break;
                default:
                    break;
            }
        };
        fetchIdData();
    }, [productType, dispatch, dataMissing]);

    // 💡 리팩토링: handleRefetch에서 category 대신 productType 사용
    const handleRefetch = useCallback(() => {
        switch (productType) {
            case "drinks":
                return dispatch(fetchDrinksThunk());
            case "maskPacks":
                return dispatch(fetchMaskPacksThunk());
            default:
                return;
        }
    }, [dispatch, productType]);

    // 💡 수정: productData를 참조하여 totalPrice 계산
    const totalPrice = useMemo(() => {
        if (productData?.priceUsd) {
            return (productData.priceUsd * productOrder).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            });
        }
        return '0';
    }, [productData, productOrder]);

    // 렌더링 가드
    if (loading) return <Loading />
    if (error) return <Error onRetry={handleRefetch} dataName={id} />;
    if (!productData) return <NoData onRetry={handleRefetch} dataName={id} />

    // 
    return (
        <section className={styles.ProductPage}>
            {/* productData가 존재함이 보장됨 */}
            <Breadcrumbs productData={productData} />

            <div className={styles.productInfoBox}>
                <img className={styles.infoImg} src={productData.imageSrc} alt={productData.productName} />
                <div className={styles.tumbnailBox}>
                    {/* 썸네일 컴포넌트 위치 */}
                </div>
                <div className={styles.title}>{productData.productName}</div>
                <div className={styles.description}>{productData.description}</div>
                <div className={styles.purchaseInfo}>
                    <div>
                        <p>Purchase Benefits</p>
                        <p>**Earn 1% Points**</p>
                    </div>
                    <div>
                        <p>Shipping Method</p>
                        <p>**Drone Delivery**</p>
                    </div>
                    <div>
                        <p>Shipping Fee</p>
                        <p>**Free (Orders over 30,000 KRW)**</p>
                    </div>
                </div>
                <div className={styles.orderQuantity}>
                    <OrderQuantity productData={productData} />
                </div>
                <div className={styles.orderPrice}>
                    <div className={styles.totalPriceText}>total price</div>
                    <div className={styles.totalPrice}>{totalPrice}</div>
                </div>
                <div className={styles.orderMenu}>
                    <button className={styles.buyBtn} onClick={() => alert(`Thank you for your order.`)} >Buy Now</button>
                    <button className={styles.cart}>Cart</button>
                    <button className={styles.Wishlist}>Wishlist</button>
                </div>
            </div>

            <div className={styles.pageMenu}>
                <button
                    className={`${styles.detailsBtn} ${pageView === 'details' ? styles.active : ''}`}
                    onClick={() => setPageView('details')}
                >details</button>
                <button
                    className={`${styles.reviewBtn} ${pageView === 'review' ? styles.active : ''}`}
                    onClick={() => setPageView('review')}
                >review</button>
                <button
                    className={`${styles.qnaBtn} ${pageView === 'qna' ? styles.active : ''}`}
                    onClick={() => setPageView('qna')}
                >Q n A</button>
            </div>

            {pageView === 'details' && <Details />}
            {pageView === 'review' && <ProductReview productData={productData} onRetry={handleRefetch} />}
            {pageView === 'qna' && <QuestionAndAnswer />}
        </section>
    )
}

export default ProductPage;

// ====================================================================
// 🧩 서브 컴포넌트: Breadcrumbs
// ====================================================================

function Breadcrumbs({ productData }) {
    const location = useLocation();

    // 💡 최적화: useMemo를 사용하여 경로 계산 캐싱
    const pathnames = useMemo(() => {
        const paths = location.pathname.split('/').filter(x => x);
        paths.pop(); // 마지막 요소 (ID) 제거
        return paths;
    }, [location.pathname]);

    return (
        <div className={styles.breadcrumbsBox}>
            <div className={styles.breadcrumbs}>
                <p>Home</p>
                {pathnames.map((path, index) => {
                    return (
                        <p key={path + index}>{path}</p>
                    )
                })}
                <p>{productData.productName}</p>
            </div>
        </div>
    )
}

// ====================================================================
// 🧩 서브 컴포넌트: OrderQuantity
// ====================================================================

function OrderQuantity({ productData }) {
    const dispatch = useDispatch();
    const productsOrder = useSelector((state) => state.productsOrder);
    const [breakPoint, setBreakPoint] = useState(false);

    const updateItemLength = () => {
        const width = window.innerWidth;

        if (width <= 992) {
            setBreakPoint(true);
        } else {
            setBreakPoint(false);
        }
    };

    useEffect(() => {
        updateItemLength();
        window.addEventListener('resize', updateItemLength);

        return () => {
            window.removeEventListener('resize', updateItemLength);
        };
    }, []);

    const onClickMinus = () => {
        dispatch(orderMinus());
    }

    const onClickPlus = () => {
        dispatch(orderPlus())
    }

    return (
        <div className={styles.orderBox}>
            <div className={styles.orderTitle}>order {breakPoint && ' : ' + ' $ ' + productData.priceUsd}</div>
            <div className={styles.quantityBox}>
                <button onClick={onClickMinus} disabled={productsOrder <= 1}>-</button> {/* 최소 수량 1 제한 */}
                <div className={styles.quantity}>{productsOrder}</div>
                <button onClick={onClickPlus}>+</button>
            </div>
            <div className={styles.priceBox}>
                {productData.priceUsd}
            </div>
        </div>
    )
}

// ====================================================================
// 🧩 서브 컴포넌트: Details
// ====================================================================

function Details() {
    const [isExpand, setIsExpand] = useState(false);

    return (
        <section>
            <div className={`
            ${styles.productDetails} 
            ${isExpand ? styles.active : ''} /* 🌟 클래스 토글 */
        `}>
                <div className={styles.detailTitle}>{productDetails.title}</div>
                <div className={styles.detailsDescription}>{productDetails.description}</div>
            </div>
            <div className={styles.expandPageBox}>
                <button className={styles.expandPageBtn} onClick={() => setIsExpand(!isExpand)}>
                    {isExpand ? 'Collapse Page' : 'Expand Page'}
                </button>
            </div>
        </section>
    )
}

// ====================================================================
// 🧩 서브 컴포넌트: ProductReview
// ====================================================================

function ProductReview({ productData, onRetry }) {

    const dispatch = useDispatch();

    const productIdChar = productData.productId?.[0].toUpperCase();
    const reviewSliceName = productIdChar === 'D' ? 'drinkReviews' :
        productIdChar === 'M' ? 'maskPackReviews' :
            null;

    const { data, loading, error } = useSelector((state) => state[reviewSliceName] || []);
    const dataMissing = data.length === 0;

    const reviewData = useMemo(() => {
        if (dataMissing) return [];
        return data.filter(review => review.productId === productData.productId);
    }, [data, productData.productId]);

    useEffect(() => {
        // 내부 함수로 비동기 로직 분리 (React 권장 패턴)
        const fetchIdData = () => {
            if (!dataMissing) return;

            switch (reviewSliceName) {
                case "drinkReviews":
                    dispatch(fetchDrinkReviewsThunk());
                    break;
                case "maskPackReviews":
                    dispatch(fetchMaskPackReviewsThunk());
                    break;
                default:
                    break;
            }
        };
        fetchIdData();
    }, [dispatch, dataMissing]);

    const getStarRating = (rating) => {
        const roundedRating = Math.round(rating);

        switch (roundedRating) {
            case 1:
                return '★☆☆☆☆';
            case 2:
                return '★★☆☆☆';
            case 3:
                return '★★★☆☆';
            case 4:
                return '★★★★☆';
            case 5:
                return '★★★★★';
            default:
                return '☆☆☆☆☆';
        }
    }

    if (loading) return <Loading />
    if (error) return <Error onRetry={onRetry} dataName={'product details review'} />;
    if (dataMissing) return <NoData onRetry={onRetry} dataName={'product details review'} />
    if (reviewData.length === 0) return <div className={styles.noReviewBox}>"No reviews written yet. We look forward to your honest opinion."</div>

    //
    //
    return (
        <section className={styles.productReviewBox} >
            {reviewData.map((review, index) => {
                return (
                    <div className={styles.reveiw} key={review.productId + index}>
                        <div className={styles.reveiwTop}>
                            <img className={styles.userPhoto} src={review.userImageLink} alt={`${review.userName}'s review photo`} />
                            <div className={styles.userReview}>{review.content}</div>
                        </div>
                        <div className={styles.reviewBottom}>
                            <div className={styles.date}>{review.date}</div>
                            <div className={styles.name}>{review.userName}</div>
                            <div className={styles.rating}>{getStarRating(review.rating)}</div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

// ====================================================================
// 🧩 서브 컴포넌트: QuestionAndAnswer
// ====================================================================

function QuestionAndAnswer() {

    const initState = {
        Question01: false,
        Question02: false,
    }

    const [isOpen, setIsOpen] = useState(initState);

    return (
        <section className={styles.qna}>
            <div className={styles.qnaTitle}>Question and Answer</div>
            <div className={styles.questionBox} onClick={() => setIsOpen({ ...isOpen, Question01: !isOpen.Question01 })}>Q. {questionAndAnswer.question_01}
                {isOpen.Question01 && <div className={styles.answerBox}>A. {questionAndAnswer.answer_01}</div>}
            </div>
            <div className={styles.questionBox} onClick={() => setIsOpen({ ...isOpen, Question02: !isOpen.Question02 })}>Q. {questionAndAnswer.question_02}
                {isOpen.Question02 && <div className={styles.answerBox}>A. {questionAndAnswer.answer_02}</div>}
            </div>
        </section>
    )
}