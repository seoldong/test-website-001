const modules = import.meta.glob('../assets/productImg-drink/*.{png,jpg,jpeg}', {
  eager: true // 파일을 즉시 로드하도록 설정 (필수)
});

const drinkImages = Object.keys(modules).map(path => {
  // path에서 파일 이름만 추출 (예: 'apple.jpg')
  const fileName = path.split('/').pop();

  return {
    name: fileName.split('.')[0],
    src: modules[path].default
  };
});

// 
const drink = [
  {
    "productName": "Carrot Fresh Juice",
    "price_krw": 3900,
    "productId": "J001",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 9,
    "salesCount": 856,
    "description": "Freshly squeezed carrot juice, rich in Vitamin A, supporting healthy vision and skin." 
  },
  {
    "productName": "Tomato Red Juice",
    "price_krw": 3100,
    "productId": "J002",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 11,
    "salesCount": 421,
    "description": "Packed with lycopene from ripe red tomatoes, this juice is perfect for boosting vitality."
  },
  {
    "productName": "Sugarcane Sweet Juice",
    "price_krw": 4200,
    "productId": "J003",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 10,
    "salesCount": 593,
    "description": "Nature's candy! A refreshing and cool sugarcane juice to lift your spirits."
  },
  {
    "productName": "Berry Oat Smoothie",
    "price_krw": 5000,
    "productId": "J004",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 13,
    "salesCount": 910,
    "description": "A blend of various berries and oats, providing high satiety and nutrition in a hearty smoothie."
  },
  {
    "productName": "Avocado Green Smoothie",
    "price_krw": 5500,
    "productId": "J005",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 5,
    "salesCount": 745,
    "description": "Made with creamy avocado and fresh green vegetables for a nutty, healthy green smoothie."
  },
  {
    "productName": "Cherry Rich Juice",
    "price_krw": 4800,
    "productId": "J006",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 15,
    "salesCount": 387,
    "description": "A rich juice capturing the deep flavor and aroma of cherries. Perfect for a luxurious treat."
  },
  {
    "productName": "Mango Yellow Smoothie",
    "price_krw": 4500,
    "productId": "J007",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 11,
    "salesCount": 632,
    "description": "A sweet and smooth yellow smoothie, generously made with tropical mango."
  },
  {
    "productName": "Green Detox Juice",
    "price_krw": 4900,
    "productId": "J008",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 8,
    "salesCount": 204,
    "description": "A cleansing detox juice blended with various green vegetables and fruits to lighten your body."
  },
  {
    "productName": "Papaya Tropical Juice",
    "price_krw": 3500,
    "productId": "J009",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 16,
    "salesCount": 771,
    "description": "An exotic juice featuring the unique taste of papaya, known for its smooth and refreshing flavor."
  },
  {
    "productName": "Kiwi Sparkling Juice",
    "price_krw": 3700,
    "productId": "J010",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 19,
    "salesCount": 498,
    "description": "A refreshing sparkling juice where the tangy taste of kiwi meets maximum carbonation."
  },
  {
    "productName": "Pineapple Sunshine Juice",
    "price_krw": 4100,
    "productId": "J011",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 12,
    "salesCount": 135,
    "description": "Squeezed from sun-drenched pineapples, offering a perfect harmony of sweetness and zest."
  },
  {
    "productName": "Watermelon Hydration Juice",
    "price_krw": 3600,
    "productId": "J012",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 9,
    "salesCount": 982,
    "description": "The ultimate hydrator! A cool, pure watermelon juice, perfect for quenching your thirst."
  },
  {
    "productName": "Peach Calm Smoothie",
    "price_krw": 4700,
    "productId": "J013",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 18,
    "salesCount": 319,
    "description": "A sweet smoothie combining soft peaches and milk, bringing calmness and delight."
  },
  {
    "productName": "Purple Grape Delight",
    "price_krw": 3300,
    "productId": "J014",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 18,
    "salesCount": 655,
    "description": "Enjoy the rich flavor and aroma of dark purple grapes in this delightful juice."
  },
  {
    "productName": "Banana Power Smoothie",
    "price_krw": 4600,
    "productId": "J015",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 9,
    "salesCount": 523,
    "description": "Packed with banana energy and nutrition, a power smoothie perfect for pre or post-workout fuel."
  },
  {
    "productName": "Apple Cinnamon Juice",
    "price_krw": 4000,
    "productId": "J016",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 5,
    "salesCount": 178,
    "description": "The harmonious blend of apple and cinnamon creates a comforting and warm-tasting juice."
  },
  {
    "productName": "Coconut Water Pure",
    "price_krw": 3000,
    "productId": "J017",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 7,
    "salesCount": 799,
    "description": "Pure coconut water, excellent for mineral and hydration replenishment."
  },
  {
    "productName": "Cranberry Zing Juice",
    "price_krw": 4300,
    "productId": "J018",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 8,
    "salesCount": 261,
    "description": "The tart and lively taste ('Zing') of cranberry adds a burst of freshness and vitality."
  },
  {
    "productName": "Lime Mint Cooler",
    "price_krw": 3200,
    "productId": "J019",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 10,
    "salesCount": 944,
    "description": "A refreshing cooler with the perfect blend of lime and mint, guaranteed to beat the heat."
  },
  {
    "productName": "Pomegranate Antioxidant Juice",
    "price_krw": 5100,
    "productId": "J020",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 11,
    "salesCount": 680,
    "description": "A premium juice rich in antioxidants from pomegranates, supporting overall wellness."
  }
];

// 
const productDrinkData = drink.map((product) => {
  const foundImage = drinkImages.find((ImgData) => {
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

export default productDrinkData;