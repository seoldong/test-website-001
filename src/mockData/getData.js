import Juices from "../mockData/product-juice";
import maskPacks from "./product-maskPack";
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
function onSaleJuice(juice) {
    return juice.filter(product => product.onSale === true)
}
export const getOnSaleJuice = onSaleJuice(Juices);

// 
function onSalePack(pack) {
    return pack.filter(product => product.onSale === true)
}
export const getOnSalePack = onSalePack(maskPacks);

// 
function recommendedJuice(juice) {
    return juice.filter(product => product.recommended === true)
}
export const getRecommendedJuice = recommendedJuice(Juices);

// 
function recommendedPack(pack) {
    return pack.filter(product => product.recommended === true)
}
export const getRecommendedPack = recommendedPack(maskPacks);

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
export const getJuiceFromLevel = (level, itemLength) => {

    let pevLev = (Math.floor(level) * itemLength) - itemLength;
    let curLev = Math.floor(level) * itemLength;

    if (pevLev <= 0) pevLev = 0;
    if (curLev <= pevLev) curLev = 4;

    return Juices.slice(pevLev, curLev);
}

export const getPackFromLevel = (level, itemLength) => {

    let pevLev = (Math.floor(level) * itemLength) - itemLength;
    let curLev = Math.floor(level) * itemLength;

    if (pevLev <= 0) pevLev = 0;
    if (curLev <= pevLev) curLev = 4;

    return maskPacks.slice(pevLev, curLev);
}

// 
export const popularityJuice = (juiceData) => {
    const topNum = 5;
    const sortedData = [...juiceData];
    sortedData.sort((a, b) => b.salesCount - a.salesCount);
    return sortedData.slice(0, topNum);
}

// 
export const popularityPacks = (packData) => {
    const topNum = 5;
    const sortedData = [...packData];
    sortedData.sort((a, b) => b.salesCount - a.salesCount);
    return sortedData.slice(0, topNum);
};

// 
function bestJuice(juiceData) {
    const allConditionsMetPack = juiceData.filter(product =>
        product.onSale && product.recommended
    );
    return allConditionsMetPack;
}
export const getBestJuice = bestJuice(popularityJuice(Juices));

// 
function bestMaskPack(maskPackData) {
    const allConditionsMetPack = maskPackData.filter(product =>
        product.onSale && product.recommended
    );
    return allConditionsMetPack;
}
export const getBestMaskPacks = bestMaskPack(popularityPacks(maskPacks));

// 
function bestProduct(juiceData, maskPackData) {
    const bestItem = [];

    const topNum = 2;
    const sortedJuice = [...juiceData];
    const sortedMaskPack = [...maskPackData];

    sortedJuice.sort((a, b) => b.salesCount - a.salesCount);
    sortedMaskPack.sort((a, b) => b.salesCount - a.salesCount);

    bestItem.push(...sortedJuice.slice(0, topNum));
    bestItem.push(...sortedMaskPack.slice(0, topNum));

    return bestItem;
}

export const getBestProduct = bestProduct(getBestJuice, getBestMaskPacks);

// 
export function searchProduct(productId) {

    const getFirstText = productId.split('')[0];

    if (getFirstText === 'J') {
        const findJuiceData = Juices.find(product => product.productId === productId);
        return findJuiceData;
    } else if (getFirstText === 'M') {
        const findPackData = maskPacks.find(product => product.productId === productId);
        return findPackData;
    }

    return null;
}