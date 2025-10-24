
const modules = import.meta.glob('../assets/review/*.{png,jpg,jpeg}', {
    eager: true // 파일을 즉시 로드하도록 설정 (필수)
});

const productImages = Object.keys(modules).map(path => {
    // path에서 파일 이름만 추출 (예: 'apple.jpg')
    const fileName = path.split('/').pop();

    return {
        name: fileName.split('.')[0],
        id: Number(fileName.split('.')[0]),
        src: modules[path].default
    };
});

const reviewObject = [
    {
        "id": 1,
        "customer_id": 48721,
        "user_name": "김**은",
        "rating": 5,
        "date": "2025-10-15",
        "product_id": "J005",
        "product_name": "Avocado Green Smoothie",
        "imageLink": "https://images.unsplash.com/photo-1542841914-747d52a23075",
        "content": "생각보다 아보카도의 비릿한 맛이 거의 없고 부드러워요! 운동 후 필수템입니다. 다음에도 꼭 재구매할 거예요. 포장도 깔끔해서 좋았습니다."
    },
    {
        "id": 2,
        "customer_id": 92358,
        "user_name": "박**영",
        "rating": 4,
        "date": "2025-10-14",
        "product_id": "J001",
        "product_name": "Carrot Fresh Juice",
        "imageLink": "https://images.unsplash.com/photo-1521798547463-54b037ed521b",
        "content": "착즙 주스라 신선하고 훌륭합니다. 다만 당근 특유의 흙냄새가 아주 살짝 나서 별 하나 뺐습니다."
    },
    {
        "id": 3,
        "customer_id": 15099,
        "user_name": "이**수",
        "rating": 5,
        "date": "2025-10-13",
        "product_id": "J004",
        "product_name": "Berry Oat Smoothie",
        "imageLink": "https://images.unsplash.com/photo-1510492723023-e4d6d9263a43",
        "content": "베리와 귀리의 조합이 든든하고 맛있어요. 아침 식사 대용으로 최고입니다. 양도 많아요."
    },
    {
        "id": 4,
        "customer_id": 77643,
        "user_name": "최**민",
        "rating": 5,
        "date": "2025-10-13",
        "product_id": "J010",
        "product_name": "Kiwi Sparkling Juice",
        "imageLink": "https://images.unsplash.com/photo-1582882297129-9e20a00e5728",
        "content": "키위의 상큼함이 터지고 탄산이 적당해서 아주 좋아요. 여름에 마시기 딱 좋습니다. 시원해요!"
    },
    {
        "id": 5,
        "customer_id": 33102,
        "user_name": "정**희",
        "rating": 3,
        "date": "2025-10-12",
        "product_id": "J007",
        "product_name": "Mango Yellow Smoothie",
        "imageLink": "https://images.unsplash.com/photo-1550759082-f5e27a7c181f",
        "content": "기대는 했는데, 생각보다 망고의 풍미가 약해서 아쉬웠어요. 그래도 성분은 믿을만합니다."
    },
    {
        "id": 6,
        "customer_id": 61287,
        "user_name": "윤**호",
        "rating": 5,
        "date": "2025-10-11",
        "product_id": "J006",
        "product_name": "Cherry Rich Juice",
        "imageLink": "https://images.unsplash.com/photo-1557997427-ef3d7e7e5d80",
        "content": "체리가 진하게 농축된 느낌이라 만족합니다. 매일 꾸준히 마시고 있는데 활력이 넘치는 기분입니다."
    },
    {
        "id": 7,
        "customer_id": 40562,
        "user_name": "서**진",
        "rating": 4,
        "date": "2025-10-11",
        "product_id": "J003",
        "product_name": "Sugarcane Sweet Juice",
        "imageLink": "https://images.unsplash.com/photo-1563604396000-880c54179e8a",
        "content": "단맛이 강해서 달달한 거 당길 때 좋아요. 배송이 하루 늦어서 별 하나 뺐습니다."
    },
    {
        "id": 8,
        "customer_id": 88714,
        "user_name": "신**아",
        "rating": 5,
        "date": "2025-10-10",
        "product_id": "J002",
        "product_name": "Tomato Red Juice",
        "imageLink": "https://images.unsplash.com/photo-1533513360216-728b182e0d37",
        "content": "다른 토마토 주스보다 훨씬 진하고 맛있습니다. 아침 식사 대용으로 최고! 시원하게 드세요."
    },
    {
        "id": 9,
        "customer_id": 21903,
        "user_name": "강**찬",
        "rating": 4,
        "date": "2025-10-09",
        "product_id": "J008",
        "product_name": "Green Detox Juice",
        "imageLink": "https://images.unsplash.com/photo-1505252814886-905eb2c53a6f",
        "content": "디톡스 주스인데 맛이 이 정도로 깔끔하다니 놀랍네요. 주변 추천으로 샀는데 만족합니다."
    },
    {
        "id": 10,
        "customer_id": 54769,
        "user_name": "황**주",
        "rating": 4,
        "date": "2025-10-08",
        "product_id": "J004",
        "product_name": "Berry Oat Smoothie",
        "imageLink": "https://images.unsplash.com/photo-1510492723023-e4d6d9263a43",
        "content": "무난하게 먹기 좋습니다. 다만 섞을 때 아주 살짝 귀리 가루가 덩어리가 지는 경향이 있습니다."
    },
    {
        "id": 11,
        "customer_id": 99011,
        "user_name": "오**성",
        "rating": 5,
        "date": "2025-10-07",
        "product_id": "J009",
        "product_name": "Papaya Tropical Juice",
        "imageLink": "https://images.unsplash.com/photo-1560384666-3d7515b13689",
        "content": "파파야의 이국적인 맛이 좋아요. 우리 아이가 일반 주스보다 이걸 더 좋아해요. 안심하고 먹일 수 있어 감사합니다."
    },
    {
        "id": 12,
        "customer_id": 10245,
        "user_name": "임**희",
        "rating": 5,
        "date": "2025-10-07",
        "product_id": "J005",
        "product_name": "Avocado Green Smoothie",
        "imageLink": "https://images.unsplash.com/photo-1542841914-747d52a23075",
        "content": "마시면 포만감이 오래가서 좋아요. 아침에 일어나기가 수월해졌어요. 바쁜 날에 딱입니다."
    },
    {
        "id": 13,
        "customer_id": 36782,
        "user_name": "전**우",
        "rating": 4,
        "date": "2025-10-06",
        "product_id": "J001",
        "product_name": "Carrot Fresh Juice",
        "imageLink": "https://images.unsplash.com/photo-1521798547463-54b037ed521b",
        "content": "착즙 주스를 막 시작한 초보자에게 딱 맞습니다. 소화가 잘 돼서 부담이 없어요."
    },
    {
        "id": 14,
        "customer_id": 70933,
        "user_name": "하**나",
        "rating": 5,
        "date": "2025-10-05",
        "product_id": "J002",
        "product_name": "Tomato Red Juice",
        "imageLink": "https://images.unsplash.com/photo-1533513360216-728b182e0d37",
        "content": "냉장고에 떨어지지 않게 쟁여둡니다. 토마토 본연의 맛이 살아있어 좋아요. 강력 추천합니다."
    },
    {
        "id": 15,
        "customer_id": 25804,
        "user_name": "고**현",
        "rating": 3,
        "date": "2025-10-04",
        "product_id": "J008",
        "product_name": "Green Detox Juice",
        "imageLink": "https://images.unsplash.com/photo-1505252814886-905eb2c53a6f",
        "content": "큰 효과는 아직 모르겠습니다. 최소 한 달은 꾸준히 먹어봐야 할 것 같아요. 맛은 괜찮습니다."
    },
    {
        "id": 16,
        "customer_id": 83491,
        "user_name": "문**식",
        "rating": 5,
        "date": "2025-10-03",
        "product_id": "J006",
        "product_name": "Cherry Rich Juice",
        "imageLink": "https://images.unsplash.com/photo-1557997427-ef3d7e7e5d80",
        "content": "우유랑 섞어 마시는데 꿀맛입니다. 식사 대용으로도 훌륭합니다. 색도 예뻐요."
    },
    {
        "id": 17,
        "customer_id": 60117,
        "user_name": "양**철",
        "rating": 5,
        "date": "2025-10-02",
        "product_id": "J010",
        "product_name": "Kiwi Sparkling Juice",
        "imageLink": "https://images.unsplash.com/photo-1582882297129-9e20a00e5728",
        "content": "스파클링이 너무 강하지 않아 목 넘김이 좋아요. 맛도 진하고 상큼해요. 추천합니다."
    },
    {
        "id": 18,
        "customer_id": 44320,
        "user_name": "홍**미",
        "rating": 3,
        "date": "2025-10-01",
        "product_id": "J007",
        "product_name": "Mango Yellow Smoothie",
        "imageLink": "https://images.unsplash.com/photo-1550759082-f5e27a7c181f",
        "content": "괜찮아요. 다만 이전 복용하던 다른 브랜드 제품에 비해 가격대가 조금 나가는 편입니다."
    },
    {
        "id": 19,
        "customer_id": 19576,
        "user_name": "배**준",
        "rating": 5,
        "date": "2025-09-30",
        "product_id": "J009",
        "product_name": "Papaya Tropical Juice",
        "imageLink": "https://images.unsplash.com/photo-1560384666-3d7515b13689",
        "content": "열대 과일 주스 중 가장 깔끔해요! 이제야 정착합니다. 대용량으로 판매해주세요."
    },
    {
        "id": 20,
        "customer_id": 73859,
        "user_name": "유**희",
        "rating": 5,
        "date": "2025-09-29",
        "product_id": "J003",
        "product_name": "Sugarcane Sweet Juice",
        "imageLink": "https://images.unsplash.com/photo-1563604396000-880c54179e8a",
        "content": "인위적인 단맛을 싫어하는데 이건 정말 깔끔한 단맛이라 고소합니다. 재구매했습니다!"
    }
]

const reviewData = reviewObject.map((review) => {
    const foundImage = productImages.find((ImgData) => {
        return review.customer_id === ImgData.id;
    });

    if (foundImage) {
        return {
            ...review,
            imageLink: foundImage.src 
        };
    }

    return review; // 👈 map에서 반드시 최종 객체를 반환해야 합니다.
});

export default reviewData;