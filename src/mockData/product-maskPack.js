// const modules = import.meta.glob('../assets/productImg-maskPack/*.{png,jpg,jpeg}', {
//   eager: true // 파일을 즉시 로드하도록 설정 (필수)
// });

// const productImages = Object.keys(modules).map(path => {
//   // path에서 파일 이름만 추출 (예: 'apple.jpg')
//   const fileName = path.split('/').pop();

//   return {
//     name: fileName.split('.')[0],
//     src: modules[path].default
//   };
// });

// // 
// const maskPack = [
//   {
//     "productName": "Egg White Pore Tightening MaskPack",
//     "price_krw": 3900,
//     "productId": "M001",
//     "onSale": false,
//     "recommended": false,
//     "imageSrc": "",
//     "discountRate": 25,
//     "salesCount": 451,
//     "description": "This pack uses egg white ingredients to firmly tighten pores and smooth the skin texture."
//   },
//   {
//     "productName": "Green Tea Calming Gel MaskPack",
//     "price_krw": 3100,
//     "productId": "M002",
//     "onSale": true,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 10,
//     "salesCount": 894,
//     "description": "This gel pack uses green tea ingredients to soothe sensitive skin and provide hydration."
//   },
//   {
//     "productName": "Banana Nutrition Moisturizing MaskPack",
//     "price_krw": 4200,
//     "productId": "M003",
//     "onSale": false,
//     "recommended": false,
//     "imageSrc": "",
//     "discountRate": 5,
//     "salesCount": 167,
//     "description": "Containing the rich nutrition of banana, this pack moisturizes dry and rough skin."
//   },
//   {
//     "productName": "Potato Soothing & Cooling Sheet",
//     "price_krw": 5000,
//     "productId": "M004",
//     "onSale": true,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 30,
//     "salesCount": 772,
//     "description": "Potato extract quickly soothes sunburnt or irritated skin and provides a cooling effect."
//   },
//   {
//     "productName": "Aloe Vera Moisture Relief MaskPack",
//     "price_krw": 5500,
//     "productId": "M005",
//     "onSale": false,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 15,
//     "salesCount": 239,
//     "description": "Aloe vera ingredients provide deep hydration and a soothing effect to the skin."
//   },
//   {
//     "productName": "Cucumber Fresh Hydration Mask",
//     "price_krw": 4800,
//     "productId": "M006",
//     "onSale": false,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 20,
//     "salesCount": 605,
//     "description": "The freshness of cucumber instantly hydrates the skin, making it moist and vitalized."
//   },
//   {
//     "productName": "Oatmeal Gentle Scrub MaskPack",
//     "price_krw": 4500,
//     "productId": "M007",
//     "onSale": true,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 40,
//     "salesCount": 918,
//     "description": "Oatmeal particles gently exfoliate and purify the skin with a mild scrubbing effect."
//   },
//   {
//     "productName": "Yogurt Brightening Cream Mask",
//     "price_krw": 4900,
//     "productId": "M008",
//     "onSale": false,
//     "recommended": false,
//     "imageSrc": "",
//     "discountRate": 25,
//     "salesCount": 353,
//     "description": "Yogurt's fermented ingredients brighten the skin tone and revitalize the skin."
//   },
//   {
//     "productName": "Honey Deep Moisturizing MaskPack",
//     "price_krw": 3500,
//     "productId": "M009",
//     "onSale": true,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 10,
//     "salesCount": 709,
//     "description": "The moisturizing power of honey delivers deep and rich hydration to dry and rough skin."
//   },
//   {
//     "productName": "Lemon Vitamin Radiance Mask",
//     "price_krw": 3700,
//     "productId": "M010",
//     "onSale": true,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 35,
//     "salesCount": 547,
//     "description": "Lemon's Vitamin C revitalizes the skin and provides a clear, radiant glow."
//   },
//   {
//     "productName": "Hyaluronic Acid Moisture Cream",
//     "price_krw": 4500,
//     "productId": "M011",
//     "onSale": false,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 5,
//     "salesCount": 296,
//     "description": "Hyaluronic acid deeply replenishes moisture to the skin, keeping it hydrated all day long."
//   },
//   {
//     "productName": "Centella Repair Serum",
//     "price_krw": 5200,
//     "productId": "M012",
//     "onSale": true,
//     "recommended": false,
//     "imageSrc": "",
//     "discountRate": 45,
//     "salesCount": 970,
//     "description": "Centella Asiatica (Cica) extract quickly soothes sensitive and damaged skin and aids in recovery."
//   },
//   {
//     "productName": "Green Tea Calming Toner",
//     "price_krw": 2900,
//     "productId": "M013",
//     "onSale": false,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 20,
//     "salesCount": 112,
//     "description": "Green tea ingredients remove residue after cleansing and comfortably soothe the skin."
//   },
//   {
//     "productName": "Marine Collagen Eye Patch",
//     "price_krw": 6800,
//     "productId": "M014",
//     "onSale": true,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 15,
//     "salesCount": 834,
//     "description": "Marine collagen intensively supplies elasticity and moisture to the skin around the eyes."
//   },
//   {
//     "productName": "Charcoal Detox Cleanser",
//     "price_krw": 3300,
//     "productId": "M015",
//     "onSale": false,
//     "recommended": false,
//     "imageSrc": "",
//     "discountRate": 30,
//     "salesCount": 381,
//     "description": "Charcoal ingredients absorb waste and excessive sebum in the pores, purifying them cleanly."
//   },
//   {
//     "productName": "Snail Mucin Brightening Essence",
//     "price_krw": 5500,
//     "productId": "M016",
//     "onSale": true,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 25,
//     "salesCount": 642,
//     "description": "Snail Mucin ingredients strengthen the skin barrier and give a clear, transparent radiance."
//   },
//   {
//     "productName": "Daily UV Defense Sunscreen",
//     "price_krw": 4100,
//     "productId": "M017",
//     "onSale": false,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 40,
//     "salesCount": 508,
//     "description": "A mild daily sunscreen that safely protects the skin from powerful UV rays."
//   },
//   {
//     "productName": "Rosehip Oil Facial Mask",
//     "price_krw": 4900,
//     "productId": "M018",
//     "onSale": true,
//     "recommended": false,
//     "imageSrc": "",
//     "discountRate": 50,
//     "salesCount": 199,
//     "description": "Rosehip oil ingredients provide nutrition and vitality to the skin, keeping it healthy."
//   },
//   {
//     "productName": "Peptide Lifting Ampoule",
//     "price_krw": 7500,
//     "productId": "M019",
//     "onSale": true,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 10,
//     "salesCount": 877,
//     "description": "Peptide ingredients intensively improve skin elasticity, offering a lifting effect with this highly concentrated ampoule."
//   },
//   {
//     "productName": "Tea Tree Spot Corrector",
//     "price_krw": 3100,
//     "productId": "M020",
//     "onSale": true,
//     "recommended": true,
//     "imageSrc": "",
//     "discountRate": 20,
//     "salesCount": 325,
//     "description": "Tea Tree ingredients intensively care for spots on problematic skin and quickly soothe breakouts."
//   }
// ];

// const productMaskPackData = maskPack.map((product) => {

//   const foundImage = productImages.find((ImgData) => {
//     return product.productId === ImgData.name;
//   });

//   if (foundImage) {
//     return {
//       ...product,
//       imageSrc: foundImage.src
//     };
//   }

//   return product;
// })

// export default productMaskPackData;