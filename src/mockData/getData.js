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
function popularityPack(pack) {
    const length = 4;
    const popularProducts = pack.filter(product => product.popularity === true);
    return popularProducts.slice(0, length);
}
export const getPopularityPack = popularityPack(packs);

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
    let itemsLevel =  Math.floor(level) * itemLength;
    if(itemsLevel <= 0) itemsLevel = 1;
    return packs.slice(0, itemsLevel);
}