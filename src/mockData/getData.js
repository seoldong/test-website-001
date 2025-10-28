import Juices from "../mockData/product-juice";
import packs from "../mockData/product-pack";
import reviewData from "../mockData/review"
import {
    introductionTitle,
    introductionDescription,
    brandStoryTitle,
    brandStoryDescription,
    value,
    explain,
    promise,
    ingredientsTitle,
    ingredientsDescription,
    description_first,
    description_second,
    description_third
} from "../mockData/aboutPageText"

// 
function popularityJuice(juice) {
    const length = 4;
    const popularProducts = juice.filter(product => product.popularity === true);
    return popularProducts.slice(0, length);
}
export const getPopularityJuice = popularityJuice(Juices);

// 
// function popularityPack(pack) {
//     const length = 4;
//     const popularProducts = pack.filter(product => product.popularity === true);
//     return popularProducts.slice(0, length);
// }
// export const getPopularityPack = popularityPack(packs);

function popularityPack(pack) {
    const popularProducts = pack.filter(product => product.popularity === true);
    return popularProducts;
}
export const getPopularityPack = popularityPack(packs);

// 
function onSaleJuice(juice) {
    return juice.filter(product => product.onSale === true)
}
export const getOnSaleJuice = onSaleJuice(Juices);

// 
function onSalePack(pack) {
    return pack.filter(product => product.onSale === true)
}
export const getOnSalePack = onSalePack(packs);

// 
function recommendedJuice(juice) {
    return juice.filter(product => product.recommended === true)
}
export const getRecommendedJuice = recommendedJuice(Juices);

// 
function recommendedPack(pack) {
    return pack.filter(product => product.recommended === true)
}
export const getRecommendedPack = recommendedPack(packs);

//
export function getAllReview() {
    const reviews = reviewData;
    return reviews
}

// 
export function getAboutText() {
    const aboutText = {
        introductionTitle,
        introductionDescription,
        brandStoryTitle,
        brandStoryDescription,
        value,
        explain,
        promise,
        ingredientsTitle,
        ingredientsDescription,
        description_first,
        description_second,
        description_third,
    }
    return aboutText
}

// 
const modules = import.meta.glob('../assets/ingredients/*.{png,jpg,jpeg}', {
    eager: true // 파일을 즉시 로드하도록 설정 (필수)
});

const ingredientsImages = Object.keys(modules).map(path => {
    // path에서 파일 이름만 추출 (예: 'apple.jpg')
    const fileName = path.split('/').pop();

    return {
        name: fileName.split('.')[0],
        // id: Number(fileName.split('.')[0]), 
        src: modules[path].default
    };
});

export function getAboutImages() {
    const aboutImages = ingredientsImages;
    return aboutImages;
}

// 
export const getPackFromLevel = (level, itemLength) => {

    let pevLev = (Math.floor(level) * itemLength) - itemLength;
    let curLev = Math.floor(level) * itemLength;

    if(pevLev <= 0) pevLev = 0;
    if(curLev <= pevLev) curLev = 4;

    return packs.slice(pevLev, curLev);
}

// 
export function bestPack(pack) {
  // 세 가지 조건(onSale, recommended, popularity)이 모두 true인 상품만 필터링합니다.
  const allConditionsMetPack = pack.filter(product =>
    product.onSale && product.recommended && product.popularity
  );
  return allConditionsMetPack;
}

export const getBestPack = bestPack(packs);

//  