import styles from './ProductPage.module.css'
// 
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { orderMinus, orderPlus } from '../redux/slices/order/order';
import TopNav from '../components/topNav';

// 
function ProductPage() {
    const { id } = useParams();
    const drinks = useSelector((state) => state.drinks);
    const maskPacks = useSelector((state) => state.maskPacks);
    const productOrder = useSelector((state) => state.productsOrder);

    // 
    const [productData, setProductData] = useState(null);
    const [pageView, setPageView] = useState('details');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 
    useEffect(() => {
        const filterDrink = drinks.find((drink) => drink.productId === id);
        const filterMaskPack = maskPacks.find((maskPack) => maskPack.productId === id);
        const findProduct = filterDrink || filterMaskPack;

        if (findProduct) {
            setProductData(findProduct);
            setLoading(false);
        } else {
            setError('Product not found');
        }
    }, [drinks, id, maskPacks]);

    // 
    const totalPrice = useMemo(() => {
        // productData가 null이 아니고, priceKrw가 있을 때만 계산
        // console.log(productData);

        if (productData?.priceKrw) {
            return (productData.priceKrw * productOrder).toLocaleString('ko-KR');
        }
        return '0'; // 로딩 중이거나 데이터가 없을 때
    }, [productData, productOrder]);

    // 
    if (loading) return <div className={styles.bestProducts}>Loading...</div>;
    if (error) return <div className={styles.bestProducts}>Error: {error}</div>;

    // 
    return (
        <section className={styles.ProductPage}>
            <Breadcrumbs productData={productData} />

            <div className={styles.productInfoBox}>
                <img className={styles.infoImg} src={productData.imageSrc} />
                <div className={styles.tumbnailBox}>
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
                    <button className={styles.buyBtn}>Buy Now</button>
                    <button className={styles.cart}>Cart</button>
                    <button className={styles.Wishlist}>Wishlist</button>
                </div>
            </div>

            <div className={styles.pageMenu}>
                <button className={styles.detailsBtn} onClick={() => setPageView('details')} >details</button>
                <button className={styles.reviewBtn} onClick={() => setPageView('review')}>review</button>
                <button className={styles.qnaBtn} onClick={() => setPageView('qna')}>Q n A</button>
            </div>

            {pageView === 'details' && <Details />}
            {pageView === 'review' && <ProductReview productData={productData} />}
            {pageView === 'qna' && <QuestionAndAnswer />}
        </section>
    )
}

export default ProductPage;

// 
function Breadcrumbs({ productData }) {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);
    pathnames.pop();

    return <div className={styles.breadcrumbsBox}>
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
}

// 

function OrderQuantity({ productData }) {

    const dispatch = useDispatch();
    const productsOrder = useSelector((state) => state.productsOrder);


    const onClickMinus = () => {
        dispatch(orderMinus());
    }

    const onClickPlus = () => {
        dispatch(orderPlus())
    }

    return (
        <div className={styles.orderBox}>

            <div className={styles.orderTitle}>order</div>

            <div className={styles.quantityBox}>
                <button onClick={onClickMinus}>-</button>
                <div className={styles.quantity}>{productsOrder}</div>
                <button onClick={onClickPlus}>+</button>
            </div>

            <div className={styles.priceBox}>
                {productData.priceKrw}
            </div>
        </div>
    )
}

function Details() {
    const [isExpand, setIsExpand] = useState(false);

    const detailsTitle = 'Product Details & Key Features'
    const detailsDescription = `This section serves as a placeholder for the detailed description of the product, showcasing its unique benefits, specifications, and usage instructions.

When the live product data is loaded, this area will be replaced with comprehensive information, including:

Core Specifications: Dimensions, materials, and ingredients.

Benefits & Effectiveness: How the product helps the user.

How to Use: Recommended application methods or instructions.

Delivery & Return Policy Highlights.

Please wait a moment while the full product details are being fetched.`


    return (
        <section>
            <div className={`${styles.productDetails} ${isExpand && styles.active}`}>
                <div className={styles.detailTitle}>{detailsTitle}</div>
                <div className={styles.detailsDescription}>{detailsDescription}</div>
            </div>
            <div className={styles.expandPageBox}>
                <button className={styles.expandPageBtn} onClick={() => setIsExpand(!isExpand)}>Expand Page</button>
            </div>
        </section>
    )
}

function ProductReview({ productData }) {

    console.log(productData);
    
    const drinkReviews = useSelector((state) => state.drinkReviews);
    const maskPackReviews = useSelector((state) => state.maskPackReviews);
    // 
    const [reviewData, setReviewData] = useState([]);

    // 
    useEffect(() => {
        const findDrinkReview = drinkReviews.filter(review => review.productId === productData.productId);
        const findMaskPackReview = maskPackReviews.filter(review => review.productId === productData.productId);
        setReviewData([...findDrinkReview, ...findMaskPackReview]);

    }, [drinkReviews, maskPackReviews, productData.productId])

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

    // 
    return (
        <section className={styles.productReviewBox} >
            {reviewData.map((review, index) => {
                return (
                    <div className={styles.reveiw} key={review.productId + index}>
                        <div className={styles.reveiwTop}>
                            <img className={styles.userPhoto} src={review.imageLink} />
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

// 
function QuestionAndAnswer() {

    const initState = {
        Question01: false,
        Question02: false,
    }

    const [isOpen, setIsOpen] = useState(initState);

    return (
        <section className={styles.qna}>
            <div className={styles.qnaTitle}>Question and Answer</div>
            <div className={styles.questionBox} onClick={() => setIsOpen({ ...isOpen, Question01: !isOpen.Question01 })}>Q. What are the most important ingredients to look for when choosing a wellness drink?
                {isOpen.Question01 && <div className={styles.answerBox}>A. It is crucial to check the content of added sugars and artificial sweeteners. It's best to choose products flavored with natural ingredients whenever possible.</div>}
            </div>
            <div className={styles.questionBox} onClick={() => setIsOpen({ ...isOpen, Question02: !isOpen.Question02 })}>Q. What wellness drinks can replace sports drinks for electrolyte replenishment after exercise?
                {isOpen.Question02 && <div className={styles.answerBox}>A. Coconut water or water mixed with a little lemon juice and salt are excellent alternatives. They provide natural electrolytes without artificial components.</div>}
            </div>
        </section>
    )
}