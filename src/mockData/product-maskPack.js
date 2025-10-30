const modules = import.meta.glob('../assets/productImg-pack/*.{png,jpg,jpeg}', {
  eager: true // 파일을 즉시 로드하도록 설정 (필수)
});

const productImages = Object.keys(modules).map(path => {
  // path에서 파일 이름만 추출 (예: 'apple.jpg')
  const fileName = path.split('/').pop();

  return {
    name: fileName.split('.')[0],
    src: modules[path].default
  };
});

// 
const maskPack = [
  {
    "productName": "Egg White Pore Tightening Pack",
    "price_krw": 3900,
    "productId": "P001",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 25,
    "salesCount": 451
  },
  {
    "productName": "Green Tea Calming Gel Pack",
    "price_krw": 3100,
    "productId": "P002",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 10,
    "salesCount": 894
  },
  {
    "productName": "Banana Nutrition Moisturizing Pack",
    "price_krw": 4200,
    "productId": "P003",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 5,
    "salesCount": 167
  },
  {
    "productName": "Potato Soothing & Cooling Sheet",
    "price_krw": 5000,
    "productId": "P004",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 30,
    "salesCount": 772
  },
  {
    "productName": "Aloe Vera Moisture Relief Pack",
    "price_krw": 5500,
    "productId": "P005",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 15,
    "salesCount": 239
  },
  {
    "productName": "Cucumber Fresh Hydration Mask",
    "price_krw": 4800,
    "productId": "P006",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 20,
    "salesCount": 605
  },
  {
    "productName": "Oatmeal Gentle Scrub Pack",
    "price_krw": 4500,
    "productId": "P007",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 40,
    "salesCount": 918
  },
  {
    "productName": "Yogurt Brightening Cream Mask",
    "price_krw": 4900,
    "productId": "P008",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 25,
    "salesCount": 353
  },
  {
    "productName": "Honey Deep Moisturizing Pack",
    "price_krw": 3500,
    "productId": "P009",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 10,
    "salesCount": 709
  },
  {
    "productName": "Lemon Vitamin Radiance Mask",
    "price_krw": 3700,
    "productId": "P010",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 35,
    "salesCount": 547
  },
  {
    "productName": "Hyaluronic Acid Moisture Cream",
    "price_krw": 4500,
    "productId": "P011",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 5,
    "salesCount": 296
  },
  {
    "productName": "Centella Repair Serum",
    "price_krw": 5200,
    "productId": "P012",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 45,
    "salesCount": 970
  },
  {
    "productName": "Green Tea Calming Toner",
    "price_krw": 2900,
    "productId": "P013",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 20,
    "salesCount": 112
  },
  {
    "productName": "Marine Collagen Eye Patch",
    "price_krw": 6800,
    "productId": "P014",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 15,
    "salesCount": 834
  },
  {
    "productName": "Charcoal Detox Cleanser",
    "price_krw": 3300,
    "productId": "P015",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 30,
    "salesCount": 381
  },
  {
    "productName": "Snail Mucin Brightening Essence",
    "price_krw": 5500,
    "productId": "P016",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 25,
    "salesCount": 642
  },
  {
    "productName": "Daily UV Defense Sunscreen",
    "price_krw": 4100,
    "productId": "P017",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 40,
    "salesCount": 508
  },
  {
    "productName": "Rosehip Oil Facial Mask",
    "price_krw": 4900,
    "productId": "P018",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 50,
    "salesCount": 199
  },
  {
    "productName": "Peptide Lifting Ampoule",
    "price_krw": 7500,
    "productId": "P019",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 10,
    "salesCount": 877
  },
  {
    "productName": "Tea Tree Spot Corrector",
    "price_krw": 3100,
    "productId": "P020",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 20,
    "salesCount": 325
  }
];

const productPackData = maskPack.map((product) => {

  const foundImage = productImages.find((ImgData) => {
    return product.productId === ImgData.name;
  });

  if (foundImage) {
    return {
      ...product,
      imageSrc: foundImage.src
    };
  }

  return product;
})

export default productPackData;