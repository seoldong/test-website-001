const modules = import.meta.glob('../assets/productImg/*.{png,jpg,jpeg}', {
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
const juice = [
  {
    "productName": "Carrot Fresh Juice",
    "price_krw": 3900,
    "productId": "J001",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": false,
    "discountRate": 9
  },
  {
    "productName": "Tomato Red Juice",
    "price_krw": 3100,
    "productId": "J002",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": false,
    "discountRate": 11
  },
  {
    "productName": "Sugarcane Sweet Juice",
    "price_krw": 4200,
    "productId": "J003",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "popularity": false,
    "discountRate": 10
  },
  {
    "productName": "Berry Oat Smoothie",
    "price_krw": 5000,
    "productId": "J004",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": true,
    "discountRate": 13
  },
  {
    "productName": "Avocado Green Smoothie",
    "price_krw": 5500,
    "productId": "J005",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": true,
    "discountRate": 5
  },
  {
    "productName": "Cherry Rich Juice",
    "price_krw": 4800,
    "productId": "J006",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": true,
    "discountRate": 15
  },
  {
    "productName": "Mango Yellow Smoothie",
    "price_krw": 4500,
    "productId": "J007",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "popularity": false,
    "discountRate": 11
  },
  {
    "productName": "Green Detox Juice",
    "price_krw": 4900,
    "productId": "J008",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "popularity": true,
    "discountRate": 8
  },
  {
    "productName": "Papaya Tropical Juice",
    "price_krw": 3500,
    "productId": "J009",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": true,
    "discountRate": 16
  },
  {
    "productName": "Kiwi Sparkling Juice",
    "price_krw": 3700,
    "productId": "J010",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": true,
    "discountRate": 19
  },
  {
    "productName": "Pineapple Sunshine Juice",
    "price_krw": 4100,
    "productId": "J011",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": false,
    "discountRate": 12
  },
  {
    "productName": "Watermelon Hydration Juice",
    "price_krw": 3600,
    "productId": "J012",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "popularity": true,
    "discountRate": 9
  },
  {
    "productName": "Peach Calm Smoothie",
    "price_krw": 4700,
    "productId": "J013",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": false,
    "discountRate": 18
  },
  {
    "productName": "Purple Grape Delight",
    "price_krw": 3300,
    "productId": "J014",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "popularity": false,
    "discountRate": 18
  },
  {
    "productName": "Banana Power Smoothie",
    "price_krw": 4600,
    "productId": "J015",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": true,
    "discountRate": 9
  },
  {
    "productName": "Apple Cinnamon Juice",
    "price_krw": 4000,
    "productId": "J016",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "popularity": false,
    "discountRate": 5
  },
  {
    "productName": "Coconut Water Pure",
    "price_krw": 3000,
    "productId": "J017",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "popularity": true,
    "discountRate": 7
  },
  {
    "productName": "Cranberry Zing Juice",
    "price_krw": 4300,
    "productId": "J018",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": false,
    "discountRate": 8
  },
  {
    "productName": "Lime Mint Cooler",
    "price_krw": 3200,
    "productId": "J019",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "popularity": true,
    "discountRate": 10
  },
  {
    "productName": "Pomegranate Antioxidant Juice",
    "price_krw": 5100,
    "productId": "J020",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "popularity": true,
    "discountRate": 11
  }
]

const productJuiceData = juice.map((product) => {
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

export default productJuiceData;