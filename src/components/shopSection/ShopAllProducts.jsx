import styles from './ShopAllProducts.module.css';
// 
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// 
import { fetchDrinksThunk } from '../../redux/slices/product/drinks';
import { fetchMaskPacksThunk } from '../../redux/slices/product/maskPacks';
import ProductsBoard from '../common/productsBoard';

// 
function ShopAllProducts() {
    const dispatch = useDispatch();
    const { category } = useParams();

    // 
    const DEFAULT_PRODUCT_STATE = { data: [], loading: false, error: null };

    const selectedProducts = useSelector((state) => {
        return state[category] || DEFAULT_PRODUCT_STATE;
    });

    const dataMissing = selectedProducts.data.length === 0;

    // 
    useEffect(() => {
        const fetchCategoryData = () => {
            if (!dataMissing) return;
            switch (category) {
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
        fetchCategoryData();
    }, [category, dispatch, dataMissing]);

    // 
    const handleRefetch = useCallback(() => {
        switch (category) {
            case "drinks":
                return dispatch(fetchDrinksThunk());
            case "maskPacks":
                return dispatch(fetchMaskPacksThunk());
            default:
                return;
        }
    }, [dispatch]);

    //
    return (
        <section className={styles.allProducts}>
            <div className={styles.hook}>Experience the fresh vitality that fills you from within.</div>
            <ProductsBoard boardData={selectedProducts} onRetry={handleRefetch} dataName={category} />
        </section >
    )
}
export default ShopAllProducts;
