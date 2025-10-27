const modules = import.meta.glob('../assets/productImg-pack/*.{png,jpg,jpeg}', {
  eager: true // 파일을 즉시 로드하도록 설정 (필수)
});

const productImages = Object.keys(modules).map(path => {
  // path에서 파일 이름만 추출 (예: 'apple.jpg')
  const fileName = path.split('/').pop();

  return {
    name: fileName.split('.')[0],
    // id: Number(fileName.split('.')[0]),
    src: modules[path].default
  };
});

// 
const pack = [
  {
    "productName": "Egg White Pore Tightening Pack",
    "price_krw": 3900,
    "productId": "P001",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Green Tea Calming Gel Pack",
    "price_krw": 3100,
    "productId": "P002",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": false
  },
  {
    "productName": "Banana Nutrition Moisturizing Pack",
    "price_krw": 4200,
    "productId": "P003",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Potato Soothing & Cooling Sheet",
    "price_krw": 5000,
    "productId": "P004",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Aloe Vera Moisture Relief Pack",
    "price_krw": 5500,
    "productId": "P005",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": false
  },
  {
    "productName": "Cucumber Fresh Hydration Mask",
    "price_krw": 4800,
    "productId": "P006",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Oatmeal Gentle Scrub Pack",
    "price_krw": 4500,
    "productId": "P007",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Yogurt Brightening Cream Mask",
    "price_krw": 4900,
    "productId": "P008",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Honey Deep Moisturizing Pack",
    "price_krw": 3500,
    "productId": "P009",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": false
  },
  {
    "productName": "Lemon Vitamin Radiance Mask",
    "price_krw": 3700,
    "productId": "P010",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Hyaluronic Acid Moisture Cream",
    "price_krw": 4500,
    "productId": "P011",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Centella Repair Serum",
    "price_krw": 5200,
    "productId": "P012",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Green Tea Calming Toner",
    "price_krw": 2900,
    "productId": "P013",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": false
  },
  {
    "productName": "Marine Collagen Eye Patch",
    "price_krw": 6800,
    "productId": "P014",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Charcoal Detox Cleanser",
    "price_krw": 3300,
    "productId": "P015",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Snail Mucin Brightening Essence",
    "price_krw": 5500,
    "productId": "P016",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": false
  },
  {
    "productName": "Daily UV Defense Sunscreen",
    "price_krw": 4100,
    "productId": "P017",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Rosehip Oil Facial Mask",
    "price_krw": 4900,
    "productId": "P018",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "popularity": true
  },
  {
    "productName": "Peptide Lifting Ampoule",
    "price_krw": 7500,
    "productId": "P019",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": false
  },
  {
    "productName": "Tea Tree Spot Corrector",
    "price_krw": 3100,
    "productId": "P020",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": true
  }
]

const productPackData = pack.map((product) => {

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