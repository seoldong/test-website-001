
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
        "user_name": "Kim E**n",
        "rating": 5,
        "date": "2025-10-15",
        "product_id": "J005",
        "product_name": "Avocado Green Smoothie",
        "imageLink": "",
        "content": "The fishy taste of avocado is almost non-existent, and it's much smoother than I expected! It's a must-have after my workout. I will definitely repurchase this again. The packaging was also neat."
    },
    {
        "id": 2,
        "customer_id": 92358,
        "user_name": "Park Y**g",
        "rating": 4,
        "date": "2025-10-14",
        "product_id": "J001",
        "product_name": "Carrot Fresh Juice",
        "imageLink": "",
        "content": "It's a cold-pressed juice, so it's fresh and excellent. However, I deducted one star because there's a very slight hint of the characteristic earthy smell of carrots."
    },
    {
        "id": 3,
        "customer_id": 15099,
        "user_name": "Lee J**u",
        "rating": 5,
        "date": "2025-10-13",
        "product_id": "J004",
        "product_name": "Berry Oat Smoothie",
        "imageLink": "",
        "content": "The combination of berries and oats is filling and delicious. It's the best substitute for breakfast. The quantity is generous too."
    },
    {
        "id": 4,
        "customer_id": 77643,
        "user_name": "Choi M**n",
        "rating": 5,
        "date": "2025-10-13",
        "product_id": "J010",
        "product_name": "Kiwi Sparkling Juice",
        "imageLink": "",
        "content": "The refreshing taste of kiwi bursts through, and the carbonation is just right. It's perfect for drinking in the summer. So cool!"
    },
    {
        "id": 5,
        "customer_id": 33102,
        "user_name": "Jung H**i",
        "rating": 3,
        "date": "2025-10-12",
        "product_id": "J007",
        "product_name": "Mango Yellow Smoothie",
        "imageLink": "",
        "content": "I had high hopes, but I was disappointed that the mango flavor was weaker than expected. Still, I trust the ingredients."
    },
    {
        "id": 6,
        "customer_id": 61287,
        "user_name": "Yoon H**o",
        "rating": 5,
        "date": "2025-10-11",
        "product_id": "J006",
        "product_name": "Cherry Rich Juice",
        "imageLink": "",
        "content": "I'm satisfied because it feels like the cherry is richly concentrated. I drink it consistently every day and feel energized."
    },
    {
        "id": 7,
        "customer_id": 40562,
        "user_name": "Seo J**n",
        "rating": 4,
        "date": "2025-10-11",
        "product_id": "J003",
        "product_name": "Sugarcane Sweet Juice",
        "imageLink": "",
        "content": "The sweetness is strong, which is great when I crave something sweet. I deducted one star because the delivery was one day late."
    },
    {
        "id": 8,
        "customer_id": 88714,
        "user_name": "Shin A**h",
        "rating": 5,
        "date": "2025-10-10",
        "product_id": "J002",
        "product_name": "Tomato Red Juice",
        "imageLink": "",
        "content": "It's much richer and more delicious than other tomato juices. The best for breakfast substitute! Drink it cold."
    },
    {
        "id": 9,
        "customer_id": 21903,
        "user_name": "Kang C**n",
        "rating": 4,
        "date": "2025-10-09",
        "product_id": "J008",
        "product_name": "Green Detox Juice",
        "imageLink": "",
        "content": "I'm surprised at how clean the taste of this detox juice is. I bought it based on a friend's recommendation and I'm satisfied."
    },
    {
        "id": 10,
        "customer_id": 54769,
        "user_name": "Hwang J**u",
        "rating": 4,
        "date": "2025-10-08",
        "product_id": "J004",
        "product_name": "Berry Oat Smoothie",
        "imageLink": "",
        "content": "It's great for everyday drinking. However, the oat powder tends to clump slightly when mixing."
    },
    {
        "id": 11,
        "customer_id": 99011,
        "user_name": "Oh S**g",
        "rating": 5,
        "date": "2025-10-07",
        "product_id": "J009",
        "product_name": "Papaya Tropical Juice",
        "imageLink": "",
        "content": "I love the exotic taste of papaya. My child prefers this over regular juice. Thank you for making a product I can safely give to my child."
    },
    {
        "id": 12,
        "customer_id": 10245,
        "user_name": "Im H**i",
        "rating": 5,
        "date": "2025-10-07",
        "product_id": "J005",
        "product_name": "Avocado Green Smoothie",
        "imageLink": "",
        "content": "I like that it keeps me feeling full for a long time. It's become easier to wake up in the morning. Perfect for busy days."
    },
    {
        "id": 13,
        "customer_id": 36782,
        "user_name": "Jeon W**u",
        "rating": 4,
        "date": "2025-10-06",
        "product_id": "J001",
        "product_name": "Carrot Fresh Juice",
        "imageLink": "",
        "content": "It's perfect for beginners who are just starting with cold-pressed juice. It's easy to digest and not burdensome."
    },
    {
        "id": 14,
        "customer_id": 70933,
        "user_name": "Ha N**a",
        "rating": 5,
        "date": "2025-10-05",
        "product_id": "J002",
        "product_name": "Tomato Red Juice",
        "imageLink": "",
        "content": "I always keep a stock of this in the refrigerator. I love that the authentic taste of tomato is alive. Highly recommend."
    },
    {
        "id": 15,
        "customer_id": 25804,
        "user_name": "Ko H**n",
        "rating": 3,
        "date": "2025-10-04",
        "product_id": "J008",
        "product_name": "Green Detox Juice",
        "imageLink": "",
        "content": "I'm not sure about the big effects yet. I think I need to consume it consistently for at least a month. The taste is acceptable."
    },
    {
        "id": 16,
        "customer_id": 83491,
        "user_name": "Moon S**k",
        "rating": 5,
        "date": "2025-10-03",
        "product_id": "J006",
        "product_name": "Cherry Rich Juice",
        "imageLink": "",
        "content": "It's delicious when mixed with milk. It's also great as a meal replacement. The color is pretty too."
    },
    {
        "id": 17,
        "customer_id": 60117,
        "user_name": "Yang C**l",
        "rating": 5,
        "date": "2025-10-02",
        "product_id": "J010",
        "product_name": "Kiwi Sparkling Juice",
        "imageLink": "",
        "content": "The sparkling is not too strong, so it goes down smoothly. The taste is rich and refreshing. Highly recommend."
    },
    {
        "id": 18,
        "customer_id": 44320,
        "user_name": "Hong M**i",
        "rating": 3,
        "date": "2025-10-01",
        "product_id": "J007",
        "product_name": "Mango Yellow Smoothie",
        "imageLink": "",
        "content": "It's alright. However, the price is slightly higher compared to the product from another brand I used to take."
    },
    {
        "id": 19,
        "customer_id": 19576,
        "user_name": "Bae J**n",
        "rating": 5,
        "date": "2025-09-30",
        "product_id": "J009",
        "product_name": "Papaya Tropical Juice",
        "imageLink": "",
        "content": "This is the cleanest-tasting tropical fruit juice! I've finally settled on this one. Please sell it in a larger capacity."
    },
    {
        "id": 20,
        "customer_id": 73859,
        "user_name": "Yoo H**i",
        "rating": 5,
        "date": "2025-09-29",
        "product_id": "J003",
        "product_name": "Sugarcane Sweet Juice",
        "imageLink": "",
        "content": "I dislike artificial sweetness, but this has a clean and nutty sweetness. I've repurchased it!"
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