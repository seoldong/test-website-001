import Juices from "../mockData/product-juice";
import reviewData from "../mockData/review"

function popularityJuice(juice) {
    return juice.filter(product => product.popularity === true)
}
export const getPopularityJuice = popularityJuice(Juices);

// 
function recommendedJuice(juice) {
    return juice.filter(product => product.recommended === true)
}
export const getRecommendedJuice = recommendedJuice(Juices);

//
export function getAllReview() {
    const reviews = reviewData;
    return reviews
}