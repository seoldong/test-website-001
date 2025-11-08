import styles from "./ShopBestProduct.module.css";
// 
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// 
import { fetchBestDrinksThunk } from "../../redux/slices/product/bestDrinks";
import { fetchBestMaskPacksThunk } from "../../redux/slices/product/bestMaskPacks";
import BestBoard from "../common/BestBoard";

// 
const getCategoryTexts = (selectedCategory) => {
    switch (selectedCategory) {
        case "bestDrinks":
            return {
                title: "Daily Vitality Boost",
                subTitle: "Your balanced choice for a healthier lifestyle"
            };
        case "bestMaskPacks":
            return {
                title: "Customized Calming Solution",
                subTitle: "Restore deep skin health with the power of nature"
            };
        default:
            return {
                title: "",
                subTitle: ""
            };
    }
};

// 
function ShopBestProduct() {
    const dispatch = useDispatch();
    const { category } = useParams();

    //
    const caseOfCategory = (category) => {
        switch (category) {
            case "drinks":
                return "bestDrinks";
            case "maskPacks":
                return "bestMaskPacks";
            default:
                return "";
        }
    }
    const selectedCategory = useMemo(() => caseOfCategory(category), [category]);

    const DEFAULT_PRODUCT_STATE = { data: [], loading: false, error: null };

    const selectedProducts = useSelector((state) => {
        return state[selectedCategory] || DEFAULT_PRODUCT_STATE;
    });

    const dataMissing = selectedProducts.data.length === 0;

    // 
    useEffect(() => {
        const fetchCategoryData = () => {
            if (!dataMissing) return;
            switch (selectedCategory) {
                case "bestDrinks":
                    dispatch(fetchBestDrinksThunk());
                    break;
                case "bestMaskPacks":
                    dispatch(fetchBestMaskPacksThunk());
                    break;
                default:
                    break;
            }
        };
        fetchCategoryData();
    }, [category, dispatch, dataMissing, selectedCategory]);

    // 
    const handleRefetch = useCallback(() => {
        switch (selectedCategory) {
            case "bestDrinks":
                return dispatch(fetchBestDrinksThunk());
            case "bestMaskPacks":
                return dispatch(fetchBestMaskPacksThunk());
            default:
                return;
        }
    }, [dispatch]);

    const { title, subTitle } = useMemo(() => getCategoryTexts(selectedCategory), [selectedCategory]);

    // 
    return (
        <section className={styles.bestProduct} >
            <div className={styles.hook}>The healthy habit chosen by many.</div>
            <div className={styles.bestProductBox}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subTitle}>{subTitle}</div>
                <BestBoard boardData={selectedProducts} onRetry={handleRefetch} dataName={selectedCategory} />
            </div>
        </section>
    )
}

export default ShopBestProduct;