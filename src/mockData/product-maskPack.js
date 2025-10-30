const modules = import.meta.glob('../assets/productImg-maskPack/*.{png,jpg,jpeg}', {
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
    "productId": "M001",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 25,
    "salesCount": 451,
    "description": "달걀흰자 성분이 모공을 탄탄하게 잡아주고 피부 결을 매끄럽게 하는 팩입니다."
  },
  {
    "productName": "Green Tea Calming Gel Pack",
    "price_krw": 3100,
    "productId": "M002",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 10,
    "salesCount": 894,
    "description": "녹차 성분이 민감해진 피부를 진정시키고 수분을 공급하는 젤 팩입니다."
  },
  {
    "productName": "Banana Nutrition Moisturizing Pack",
    "price_krw": 4200,
    "productId": "M003",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 5,
    "salesCount": 167,
    "description": "바나나의 풍부한 영양을 담아 건조하고 푸석한 피부에 보습을 더하는 팩입니다."
  },
  {
    "productName": "Potato Soothing & Cooling Sheet",
    "price_krw": 5000,
    "productId": "M004",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 30,
    "salesCount": 772,
    "description": "감자 추출물이 햇볕에 그을리거나 자극받은 피부를 빠르게 진정시키고 쿨링 효과를 줍니다."
  },
  {
    "productName": "Aloe Vera Moisture Relief Pack",
    "price_krw": 5500,
    "productId": "M005",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 15,
    "salesCount": 239,
    "description": "알로에 베라 성분이 피부에 깊은 수분을 공급하고 진정 효과를 주는 릴리프 팩입니다."
  },
  {
    "productName": "Cucumber Fresh Hydration Mask",
    "price_krw": 4800,
    "productId": "M006",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 20,
    "salesCount": 605,
    "description": "오이의 신선함이 피부에 즉각적인 수분을 공급하여 촉촉하고 생기 있게 만드는 마스크입니다."
  },
  {
    "productName": "Oatmeal Gentle Scrub Pack",
    "price_krw": 4500,
    "productId": "M007",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 40,
    "salesCount": 918,
    "description": "오트밀 알갱이가 부드럽게 각질을 제거하고 피부를 정화시키는 순한 스크럽 팩입니다."
  },
  {
    "productName": "Yogurt Brightening Cream Mask",
    "price_krw": 4900,
    "productId": "M008",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 25,
    "salesCount": 353,
    "description": "요거트의 발효 성분이 피부 톤을 밝게 하고 활력을 주는 크림 마스크입니다."
  },
  {
    "productName": "Honey Deep Moisturizing Pack",
    "price_krw": 3500,
    "productId": "M009",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 10,
    "salesCount": 709,
    "description": "꿀의 보습력으로 건조하고 거친 피부에 깊고 풍부한 보습감을 선사하는 팩입니다."
  },
  {
    "productName": "Lemon Vitamin Radiance Mask",
    "price_krw": 3700,
    "productId": "M010",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 35,
    "salesCount": 547,
    "description": "레몬의 비타민C가 피부에 활력을 주고 맑고 빛나는 광채를 선사하는 마스크입니다."
  },
  {
    "productName": "Hyaluronic Acid Moisture Cream",
    "price_krw": 4500,
    "productId": "M011",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 5,
    "salesCount": 296,
    "description": "히알루론산이 피부 깊숙이 수분을 채워 하루 종일 촉촉함을 유지시켜주는 크림입니다."
  },
  {
    "productName": "Centella Repair Serum",
    "price_krw": 5200,
    "productId": "M012",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 45,
    "salesCount": 970,
    "description": "병풀 추출물(시카)이 민감하고 손상된 피부를 빠르게 진정시키고 회복을 돕는 세럼입니다."
  },
  {
    "productName": "Green Tea Calming Toner",
    "price_krw": 2900,
    "productId": "M013",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 20,
    "salesCount": 112,
    "description": "녹차 성분이 세안 후 남은 노폐물을 제거하고 피부를 편안하게 진정시키는 토너입니다."
  },
  {
    "productName": "Marine Collagen Eye Patch",
    "price_krw": 6800,
    "productId": "M014",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 15,
    "salesCount": 834,
    "description": "해양 콜라겐이 눈가 피부에 탄력과 수분을 집중적으로 공급하는 아이 패치입니다."
  },
  {
    "productName": "Charcoal Detox Cleanser",
    "price_krw": 3300,
    "productId": "M015",
    "onSale": false,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 30,
    "salesCount": 381,
    "description": "숯 성분이 모공 속 노폐물과 과도한 피지를 흡착하여 깨끗하게 정화하는 클렌저입니다."
  },
  {
    "productName": "Snail Mucin Brightening Essence",
    "price_krw": 5500,
    "productId": "M016",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 25,
    "salesCount": 642,
    "description": "달팽이 점액 성분이 피부 장벽을 강화하고 맑고 투명한 광채를 부여하는 에센스입니다."
  },
  {
    "productName": "Daily UV Defense Sunscreen",
    "price_krw": 4100,
    "productId": "M017",
    "onSale": false,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 40,
    "salesCount": 508,
    "description": "매일 사용하는 순한 자외선 차단제로, 강력한 UV로부터 피부를 안전하게 보호합니다."
  },
  {
    "productName": "Rosehip Oil Facial Mask",
    "price_krw": 4900,
    "productId": "M018",
    "onSale": true,
    "recommended": false,
    "imageSrc": "",
    "discountRate": 50,
    "salesCount": 199,
    "description": "로즈힙 오일 성분이 피부에 영양을 공급하고 활력을 주어 건강하게 가꿔주는 페이셜 마스크입니다."
  },
  {
    "productName": "Peptide Lifting Ampoule",
    "price_krw": 7500,
    "productId": "M019",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 10,
    "salesCount": 877,
    "description": "펩타이드 성분이 피부 탄력을 집중적으로 개선하여 리프팅 효과를 선사하는 고농축 앰플입니다."
  },
  {
    "productName": "Tea Tree Spot Corrector",
    "price_krw": 3100,
    "productId": "M020",
    "onSale": true,
    "recommended": true,
    "imageSrc": "",
    "discountRate": 20,
    "salesCount": 325,
    "description": "티트리 성분이 문제성 피부의 스팟을 집중 케어하고 트러블을 빠르게 진정시키는 코렉터입니다."
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