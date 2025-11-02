// import aboutTextData from "../mockData/aboutPageText"
// import { processedDrinkReviews, processedMaskPackReviews } from "../mockData/review";
// import productDrinkData from "./product-drink.js";
// import productMaskPackData from "./product-maskPack";
// import topSlidesData from "./topSlide";

// // 
// function onSaleDrink(drink) {
//     return drink.filter(product => product.onSale === true)
// }
// function onSaleMaskPack(maskpack) {
//     return maskpack.filter(product => product.onSale === true)
// }
// function recommendedDrink(drink) {
//     return drink.filter(product => product.recommended === true)
// }
// function recommendedMaskPack(pack) {
//     return pack.filter(product => product.recommended === true)
// }
// function aboutText() {
//     return aboutTextData
// }
// function allReview() {
//     const allReviews = [...processedDrinkReviews, ...processedMaskPackReviews];
//     return allReviews;
// }
// function aboutImages() {
//     const modules = import.meta.glob('../assets/ingredients/*.{png,jpg,jpeg}', {
//         eager: true // 파일을 즉시 로드하도록 설정 (필수)
//     });

//     const ingredientsImages = Object.keys(modules).map(path => {
//         // path에서 파일 이름만 추출 (예: 'apple.jpg')
//         const fileName = path.split('/').pop();

//         return {
//             name: fileName.split('.')[0],
//             // id: Number(fileName.split('.')[0]), 
//             src: modules[path].default
//         };
//     });
//     return ingredientsImages;
// }
// const getDrinkFromLevel = (level, itemLength) => {

//     let pevLev = (Math.floor(level) * itemLength) - itemLength;
//     let curLev = Math.floor(level) * itemLength;

//     if (pevLev <= 0) pevLev = 0;
//     if (curLev <= pevLev) curLev = 4;

//     return drinkData.slice(pevLev, curLev);
// }
// const getMaskPackFromLevel = (level, itemLength) => {

//     let pevLev = (Math.floor(level) * itemLength) - itemLength;
//     let curLev = Math.floor(level) * itemLength;

//     if (pevLev <= 0) pevLev = 0;
//     if (curLev <= pevLev) curLev = 4;

//     return maskPackData.slice(pevLev, curLev);
// }
// const popularityDrink = (drinkData) => {
//     const topNum = 5;
//     const sortedData = [...drinkData];
//     sortedData.sort((a, b) => b.salesCount - a.salesCount);
//     return sortedData.slice(0, topNum);
// }
// const popularityMaskPacks = (maskPackData) => {
//     const topNum = 5;
//     const sortedData = [...maskPackData];
//     sortedData.sort((a, b) => b.salesCount - a.salesCount);
//     return sortedData.slice(0, topNum);
// };
// function bestDrink(drinkData) {
//     const allConditionsMetDrink = drinkData.filter(product =>
//         product.onSale && product.recommended
//     );
//     return allConditionsMetDrink;
// }
// function bestMaskPack(maskPackData) {
//     const allConditionsMetPack = maskPackData.filter(product =>
//         product.onSale && product.recommended
//     );
//     return allConditionsMetPack;
// }
// function bestProduct(drinkData, maskPackData) {
//     const bestItem = [];

//     const topNum = 2;
//     const sortedDrink = [...drinkData];
//     const sortedMaskPack = [...maskPackData];

//     sortedDrink.sort((a, b) => b.salesCount - a.salesCount);
//     sortedMaskPack.sort((a, b) => b.salesCount - a.salesCount);

//     bestItem.push(...sortedDrink.slice(0, topNum));
//     bestItem.push(...sortedMaskPack.slice(0, topNum));

//     return bestItem;
// }
// function searchProduct(productId) {
//     const getFirstText = productId.split('')[0];
//     if (getFirstText === 'J') {
//         const findDrinkData = drinkData.find(product => product.productId === productId);
//         return findDrinkData;
//     } else if (getFirstText === 'M') {
//         const findPackData = maskPackData.find(product => product.productId === productId);
//         return findPackData;
//     } else {
//         return null;
//     }
// }
// function searchReview(productId) {
//     const getFirstText = productId.split('')[0];

//     if (getFirstText === 'J') {
//         const findDrinkData = processedDrinkReviews.filter(product => product.productId === productId);
//         return findDrinkData;
//     } else if (getFirstText === 'M') {
//         const findPackData = processedMaskPackReviews.filter(product => product.productId === productId);
//         return findPackData;
//     } else {
//         return null;
//     }
// }

// // drink
// export const getOnSaleDrink = onSaleDrink(drinkData);
// export const getRecommendedDrink = recommendedDrink(drinkData);
// export const getDrinkReviews = processedDrinkReviews;
// export const getPopularityDrink = popularityDrink(drinkData);
// export const getBestDrink = bestDrink(getPopularityDrink);
// export const getAllDrinkData = productDrinkData;
// export { getDrinkFromLevel }

// // maskpack
// export const getOnSaleMaskPack = onSaleMaskPack(maskPackData);
// export const getRecommendedMaskPack = recommendedMaskPack(maskPackData);
// export const getMaskPackReviews = processedMaskPackReviews;
// export const getPopularityMaskPacks = popularityMaskPacks(maskPackData);
// export const getBestMaskPacks = bestMaskPack(getPopularityMaskPacks);
// export const getAllMaskPackData = productMaskPackData;
// export { getMaskPackFromLevel }

// // drink + maskpack
// export const getAllReviews = allReview();
// export const getBestProduct = bestProduct(getBestDrink, getBestMaskPacks);

// // other
// export const getAboutText = aboutText();
// export const getAboutImages = aboutImages();
// export const getSlideData = topSlidesData;
// export { searchProduct, searchReview }





