import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
// 
import { fetchMainSlideThunk } from "../../redux/slices/mainSlide/mainSlide";
import TopSlide from "../common/TopSlide"
// 
function MainSlide() {
    const dispatch = useDispatch();
    const slideData = useSelector((state) => state.mainSlide);

    useEffect(() => {
        dispatch(fetchMainSlideThunk())
    }, [dispatch]);

    const handleRefetch = useCallback(() => {
        dispatch(fetchMainSlideThunk());
    }, [dispatch]);

    return (
        <TopSlide slideData={slideData} onRetry={handleRefetch} dataName={'mainSlide'} />
    );
}

export default MainSlide;

