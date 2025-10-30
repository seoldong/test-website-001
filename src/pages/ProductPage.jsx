import { useLocation, useParams } from 'react-router-dom';
import TopNav from '../components/topNav';
import styles from './ProductPage.module.css'
import Footer from '../components/footer/Footer';
import { useEffect, useMemo, useState } from 'react';
import { searchProduct } from '../mockData/getData';
import { useDispatch, useSelector } from 'react-redux';
import { orderMinus, orderPlus } from '../redux/slices/order/order';

function ProductPage() {

    const location = useLocation();
    const { id } = useParams();
    const pathnames = location.pathname.split('/').filter(x => x);
    pathnames.pop();
    const productOrder = useSelector((state) => state.productOrder);
    const [productData, setProductData] = useState(null);
    const [pageView, setPageView] = useState('details');

    // 
    useEffect(() => {
        const findProduct = searchProduct(id);
        setProductData(findProduct)
    }, [id]);

    const totalPrice = useMemo(() => {
        // productData가 null이 아니고, price_krw가 있을 때만 계산
        if (productData?.price_krw) {
            return (productData.price_krw * productOrder).toLocaleString('ko-KR');
        }
        return '0'; // 로딩 중이거나 데이터가 없을 때
    }, [productData, productOrder]);

    if (!productData) {
        return <section className={styles.ProductPage}><TopNav /><div>Loading...</div><Footer /></section>;
    }

    return (
        <section className={styles.ProductPage}>
            <TopNav />
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
            {pageView === 'review' && <Review />}
            {pageView === 'qna' && <QuestionAndAnswer />}

            <div className={styles.review}>
            </div>
            <Footer />
        </section>
    )
}

export default ProductPage;

// 
function OrderQuantity({ productData }) {

    const dispatch = useDispatch();
    const productOrder = useSelector((state) => state.productOrder);


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
                <div className={styles.quantity}>{productOrder}</div>
                <button onClick={onClickPlus}>+</button>
            </div>

            <div className={styles.priceBox}>
                {productData.price_krw}
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

function Review() {



    return (
        <section>

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