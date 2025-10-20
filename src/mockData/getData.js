import Juices from "../mockData/product-juice";

function popularityJuice(juice) {
    return juice.filter(product => product.popularity === true)
}
export const getPopularityJuice = popularityJuice(Juices);

// 
function recommendedJuice(juice) {
    return juice.filter(product => product.recommended === true)
}
export const getRecommendedJuice = recommendedJuice(Juices);