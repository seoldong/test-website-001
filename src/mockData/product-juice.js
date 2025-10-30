const modules = import.meta.glob('../assets/productImg/*.{png,jpg,jpeg}', {
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
const juice = [
  {
    "productName": "Carrot Fresh Juice",
    "price_krw": 3900,
    "productId": "J001",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 9,
    "salesCount": 856 
  },
  {
    "productName": "Tomato Red Juice",
    "price_krw": 3100,
    "productId": "J002",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 11,
    "salesCount": 421 
  },
  {
    "productName": "Sugarcane Sweet Juice",
    "price_krw": 4200,
    "productId": "J003",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 10,
    "salesCount": 593 
  },
  {
    "productName": "Berry Oat Smoothie",
    "price_krw": 5000,
    "productId": "J004",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 13,
    "salesCount": 910 
  },
  {
    "productName": "Avocado Green Smoothie",
    "price_krw": 5500,
    "productId": "J005",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 5,
    "salesCount": 745 
  },
  {
    "productName": "Cherry Rich Juice",
    "price_krw": 4800,
    "productId": "J006",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 15,
    "salesCount": 387 
  },
  {
    "productName": "Mango Yellow Smoothie",
    "price_krw": 4500,
    "productId": "J007",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 11,
    "salesCount": 632 
  },
  {
    "productName": "Green Detox Juice",
    "price_krw": 4900,
    "productId": "J008",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 8,
    "salesCount": 204 
  },
  {
    "productName": "Papaya Tropical Juice",
    "price_krw": 3500,
    "productId": "J009",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 16,
    "salesCount": 771 
  },
  {
    "productName": "Kiwi Sparkling Juice",
    "price_krw": 3700,
    "productId": "J010",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 19,
    "salesCount": 498 
  },
  {
    "productName": "Pineapple Sunshine Juice",
    "price_krw": 4100,
    "productId": "J011",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 12,
    "salesCount": 135 
  },
  {
    "productName": "Watermelon Hydration Juice",
    "price_krw": 3600,
    "productId": "J012",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 9,
    "salesCount": 982 
  },
  {
    "productName": "Peach Calm Smoothie",
    "price_krw": 4700,
    "productId": "J013",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 18,
    "salesCount": 319 
  },
  {
    "productName": "Purple Grape Delight",
    "price_krw": 3300,
    "productId": "J014",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 18,
    "salesCount": 655 
  },
  {
    "productName": "Banana Power Smoothie",
    "price_krw": 4600,
    "productId": "J015",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 9,
    "salesCount": 523 
  },
  {
    "productName": "Apple Cinnamon Juice",
    "price_krw": 4000,
    "productId": "J016",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 5,
    "salesCount": 178 
  },
  {
    "productName": "Coconut Water Pure",
    "price_krw": 3000,
    "productId": "J017",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 7,
    "salesCount": 799 
  },
  {
    "productName": "Cranberry Zing Juice",
    "price_krw": 4300,
    "productId": "J018",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 8,
    "salesCount": 261 
  },
  {
    "productName": "Lime Mint Cooler",
    "price_krw": 3200,
    "productId": "J019",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 10,
    "salesCount": 944 
  },
  {
    "productName": "Pomegranate Antioxidant Juice",
    "price_krw": 5100,
    "productId": "J020",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 11,
    "salesCount": 680 
  }
];

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