
const drinkModules = import.meta.glob('../assets/review/drink/*.{png,jpg,jpeg}', {
    eager: true // 파일을 즉시 로드하도록 설정 (필수)
});

const maskpackModules = import.meta.glob('../assets/review/maskpack/*.{png,jpg,jpeg}', {
    eager: true // 파일을 즉시 로드하도록 설정 (필수)
});

export const drinkImages = Object.keys(drinkModules).map(path => {
    // path에서 파일 이름만 추출 (예: 'apple.jpg')
    const fileName = path.split('/').pop();

    return {
        name: fileName.split('.')[0],
        id: Number(fileName.split('.')[0]),
        src: drinkModules[path].default
    };
});

export const maskpackImages = Object.keys(maskpackModules).map(path => {
    const fileName = path.split('/').pop();

    return {
        name: fileName.split('.')[0],
        id: Number(fileName.split('.')[0]),
        src: maskpackModules[path].default
    };
});

// 
const reviewDrinkData = [
    {
        "id": 1,
        "customerId": 48721,
        "userName": "Kim E**n",
        "rating": 5,
        "date": "2025-10-15",
        "productId": "J005",
        "productName": "Avocado Green Smoothie",
        "imageLink": "",
        "content": "The fishy taste of avocado is almost non-existent, and it's much smoother than I expected! It's a must-have after my workout. I will definitely repurchase this again. The packaging was also neat."
    },
    {
        "id": 2,
        "customerId": 92358,
        "userName": "Park Y**g",
        "rating": 4,
        "date": "2025-10-14",
        "productId": "J001",
        "productName": "Carrot Fresh Juice",
        "imageLink": "",
        "content": "It's a cold-pressed juice, so it's fresh and excellent. However, I deducted one star because there's a very slight hint of the characteristic earthy smell of carrots."
    },
    {
        "id": 3,
        "customerId": 15099,
        "userName": "Lee J**u",
        "rating": 5,
        "date": "2025-10-13",
        "productId": "J004",
        "productName": "Berry Oat Smoothie",
        "imageLink": "",
        "content": "The combination of berries and oats is filling and delicious. It's the best substitute for breakfast. The quantity is generous too."
    },
    {
        "id": 4,
        "customerId": 77643,
        "userName": "Choi M**n",
        "rating": 5,
        "date": "2025-10-13",
        "productId": "J010",
        "productName": "Kiwi Sparkling Juice",
        "imageLink": "",
        "content": "The refreshing taste of kiwi bursts through, and the carbonation is just right. It's perfect for drinking in the summer. So cool!"
    },
    {
        "id": 5,
        "customerId": 33102,
        "userName": "Jung H**i",
        "rating": 3,
        "date": "2025-10-12",
        "productId": "J007",
        "productName": "Mango Yellow Smoothie",
        "imageLink": "",
        "content": "I had high hopes, but I was disappointed that the mango flavor was weaker than expected. Still, I trust the ingredients."
    },
    {
        "id": 6,
        "customerId": 61287,
        "userName": "Yoon H**o",
        "rating": 5,
        "date": "2025-10-11",
        "productId": "J006",
        "productName": "Cherry Rich Juice",
        "imageLink": "",
        "content": "I'm satisfied because it feels like the cherry is richly concentrated. I drink it consistently every day and feel energized."
    },
    {
        "id": 7,
        "customerId": 40562,
        "userName": "Seo J**n",
        "rating": 4,
        "date": "2025-10-11",
        "productId": "J003",
        "productName": "Sugarcane Sweet Juice",
        "imageLink": "",
        "content": "The sweetness is strong, which is great when I crave something sweet. I deducted one star because the delivery was one day late."
    },
    {
        "id": 8,
        "customerId": 88714,
        "userName": "Shin A**h",
        "rating": 5,
        "date": "2025-10-10",
        "productId": "J002",
        "productName": "Tomato Red Juice",
        "imageLink": "",
        "content": "It's much richer and more delicious than other tomato juices. The best for breakfast substitute! Drink it cold."
    },
    {
        "id": 9,
        "customerId": 21903,
        "userName": "Kang C**n",
        "rating": 4,
        "date": "2025-10-09",
        "productId": "J008",
        "productName": "Green Detox Juice",
        "imageLink": "",
        "content": "I bought it based on a friend's recommendation and I'm satisfied."
    },
    {
        "id": 10,
        "customerId": 54769,
        "userName": "Hwang J**u",
        "rating": 4,
        "date": "2025-10-08",
        "productId": "J004",
        "productName": "Berry Oat Smoothie",
        "imageLink": "",
        "content": "It's great for everyday drinking. However, the oat powder tends to clump slightly when mixing."
    },
    {
        "id": 11,
        "customerId": 99011,
        "userName": "Oh S**g",
        "rating": 5,
        "date": "2025-10-07",
        "productId": "J009",
        "productName": "Papaya Tropical Juice",
        "imageLink": "",
        "content": "I love the exotic taste of papaya. My child prefers this over regular juice. Thank you for making a product I can safely give to my child."
    },
    {
        "id": 12,
        "customerId": 10245,
        "userName": "Im H**i",
        "rating": 5,
        "date": "2025-10-07",
        "productId": "J005",
        "productName": "Avocado Green Smoothie",
        "imageLink": "",
        "content": "I like that it keeps me feeling full for a long time. It's become easier to wake up in the morning. Perfect for busy days."
    },
    {
        "id": 13,
        "customerId": 36782,
        "userName": "Jeon W**u",
        "rating": 4,
        "date": "2025-10-06",
        "productId": "J001",
        "productName": "Carrot Fresh Juice",
        "imageLink": "",
        "content": "It's perfect for beginners who are just starting with cold-pressed juice. It's easy to digest and not burdensome."
    },
    {
        "id": 14,
        "customerId": 70933,
        "userName": "Ha N**a",
        "rating": 5,
        "date": "2025-10-05",
        "productId": "J002",
        "productName": "Tomato Red Juice",
        "imageLink": "",
        "content": "I always keep a stock of this in the refrigerator. I love that the authentic taste of tomato is alive. Highly recommend."
    },
    {
        "id": 15,
        "customerId": 25804,
        "userName": "Ko H**n",
        "rating": 3,
        "date": "2025-10-04",
        "productId": "J008",
        "productName": "Green Detox Juice",
        "imageLink": "",
        "content": "I'm not sure about the big effects yet. I think I need to consume it consistently for at least a month. The taste is acceptable."
    },
    {
        "id": 16,
        "customerId": 83491,
        "userName": "Moon S**k",
        "rating": 5,
        "date": "2025-10-03",
        "productId": "J006",
        "productName": "Cherry Rich Juice",
        "imageLink": "",
        "content": "It's delicious when mixed with milk. It's also great as a meal replacement. The color is pretty too."
    },
    {
        "id": 17,
        "customerId": 60117,
        "userName": "Yang C**l",
        "rating": 5,
        "date": "2025-10-02",
        "productId": "J010",
        "productName": "Kiwi Sparkling Juice",
        "imageLink": "",
        "content": "The sparkling is not too strong, so it goes down smoothly. The taste is rich and refreshing. Highly recommend."
    },
    {
        "id": 18,
        "customerId": 44320,
        "userName": "Hong M**i",
        "rating": 3,
        "date": "2025-10-01",
        "productId": "J007",
        "productName": "Mango Yellow Smoothie",
        "imageLink": "",
        "content": "It's alright. However, the price is slightly higher compared to the product from another brand I used to take."
    },
    {
        "id": 19,
        "customerId": 19576,
        "userName": "Bae J**n",
        "rating": 5,
        "date": "2025-09-30",
        "productId": "J009",
        "productName": "Papaya Tropical Juice",
        "imageLink": "",
        "content": "This is the cleanest-tasting tropical fruit juice! I've finally settled on this one. Please sell it in a larger capacity."
    },
    {
        "id": 20,
        "customerId": 73859,
        "userName": "Yoo H**i",
        "rating": 5,
        "date": "2025-09-29",
        "productId": "J003",
        "productName": "Sugarcane Sweet Juice",
        "imageLink": "",
        "content": "I dislike artificial sweetness, but this has a clean and nutty sweetness. I've repurchased it!"
    }
]

const reviewMaskPackData = [
    {
        "id": 21,
        "customerId": 81023,
        "userName": "Kim M**n",
        "rating": 4,
        "date": "2025-10-01",
        "productId": "M015",
        "productName": "Organic Whole Grain Bread",
        "imageLink": "",
        "content": "Very hearty and filling! It's slightly dense but has a great texture. Will buy again."
    },
    {
        "id": 22,
        "customerId": 95412,
        "userName": "Park J**u",
        "rating": 5,
        "date": "2025-10-05",
        "productId": "M007",
        "productName": "Premium Blend Coffee Beans",
        "imageLink": "",
        "content": "Fantastic aroma and a smooth finish. Perfect for my morning routine. Highly recommended."
    },
    {
        "id": 23,
        "customerId": 14785,
        "userName": "Choi Y**g",
        "rating": 3,
        "date": "2025-10-10",
        "productId": "M003",
        "productName": "Spicy Instant Noodle Pack",
        "imageLink": "",
        "content": "Good flavor, but a bit too spicy for my taste. Next time I'll try the mild version."
    },
    {
        "id": 24,
        "customerId": 23690,
        "userName": "Lee S**k",
        "rating": 5,
        "date": "2025-10-14",
        "productId": "M011",
        "productName": "Natural Berry Yogurt",
        "imageLink": "",
        "content": "The best yogurt I've ever had! Not too sour and packed with real fruit pieces. A daily must-have."
    },
    {
        "id": 25,
        "customerId": 78901,
        "userName": "Jang H**a",
        "rating": 4,
        "date": "2025-10-18",
        "productId": "M019",
        "productName": "Almond & Cashew Mix (Roasted)",
        "imageLink": "",
        "content": "Perfectly roasted, very crunchy. Great snack for work, though the price is a little high."
    },
    {
        "id": 26,
        "customerId": 34567,
        "userName": "Han K**g",
        "rating": 5,
        "date": "2025-10-22",
        "productId": "M005",
        "productName": "Fresh Orange Juice (No Pulp)",
        "imageLink": "",
        "content": "Tastes like freshly squeezed oranges. Extremely refreshing. My kids absolutely love it."
    },
    {
        "id": 27,
        "customerId": 90123,
        "userName": "Ryu J**i",
        "rating": 4,
        "date": "2025-10-25",
        "productId": "M001",
        "productName": "Gluten-Free Pasta (Penne)",
        "imageLink": "",
        "content": "Excellent substitute for regular pasta. Holds up well to sauce and doesn't get mushy."
    },
    {
        "id": 28,
        "customerId": 45678,
        "userName": "Moon S**o",
        "rating": 5,
        "date": "2025-10-28",
        "productId": "M013",
        "productName": "Dark Chocolate Sea Salt Bar",
        "imageLink": "",
        "content": "The perfect balance of bitterness and sea salt. A truly gourmet chocolate experience. Will buy every time."
    },
    {
        "id": 29,
        "customerId": 67890,
        "userName": "Ahn C**l",
        "rating": 3,
        "date": "2025-10-30",
        "productId": "M009",
        "productName": "Frozen Shrimp Dumplings",
        "imageLink": "",
        "content": "Convenient for a quick meal, but the shrimp taste isn't as pronounced as I hoped. Decent overall."
    },
    {
        "id": 30,
        "customerId": 12345,
        "userName": "Song Y**n",
        "rating": 5,
        "date": "2025-10-31",
        "productId": "M017",
        "productName": "Herbal Green Tea Bags",
        "imageLink": "",
        "content": "A very refreshing and calming tea. The subtle herbal notes make it unique. Great quality for the price."
    },
    {
        "id": 31,
        "customerId": 43210,
        "userName": "Choi H**j",
        "rating": 5,
        "date": "2025-11-03",
        "productId": "M002",
        "productName": "Premium Jasmine Green Tea",
        "imageLink": "",
        "content": "The best jasmine tea I've found. Subtle floral notes and very clean finish. Excellent quality."
    },
    {
        "id": 32,
        "customerId": 56789,
        "userName": "Kim Y**u",
        "rating": 4,
        "date": "2025-11-07",
        "productId": "M010",
        "productName": "Frozen Organic Broccoli Florets",
        "imageLink": "",
        "content": "Convenient and maintains color well when cooked. Good for quick side dishes."
    },
    {
        "id": 33,
        "customerId": 10987,
        "userName": "Lee J**n",
        "rating": 5,
        "date": "2025-11-11",
        "productId": "M018",
        "productName": "Aged Balsamic Vinegar",
        "imageLink": "",
        "content": "Thick and rich with a complex, sweet-sour flavor. Worth the price for salads and dipping bread."
    },
    {
        "id": 34,
        "customerId": 30214,
        "userName": "Park E**n",
        "rating": 3,
        "date": "2025-11-15",
        "productId": "M006",
        "productName": "Whole Wheat Pita Bread",
        "imageLink": "",
        "content": "A bit too dry, even when warmed up. Good size for sandwiches, but the texture could be better."
    },
    {
        "id": 35,
        "customerId": 87654,
        "userName": "Jung C**l",
        "rating": 5,
        "date": "2025-11-19",
        "productId": "M014",
        "productName": "Spicy Kimchi Jar (Traditional)",
        "imageLink": "",
        "content": "Authentic and perfectly fermented. The spicy kick is just right. Will definitely repurchase this kimchi."
    },
    {
        "id": 36,
        "customerId": 21435,
        "userName": "Hong M**n",
        "rating": 4,
        "date": "2025-11-23",
        "productId": "M020",
        "productName": "Mixed Grain Cereal (High Fiber)",
        "imageLink": "",
        "content": "Great source of fiber, not too sweet. Stays crunchy in milk for a decent amount of time."
    },
    {
        "id": 37,
        "customerId": 65432,
        "userName": "Yoon S**n",
        "rating": 5,
        "date": "2025-11-25",
        "productId": "M004",
        "productName": "Artisanal Strawberry Jam",
        "imageLink": "",
        "content": "Tastes homemade! Large chunks of real strawberries and not overly sugary. Perfect on toast."
    },
    {
        "id": 38,
        "customerId": 98765,
        "userName": "Seo J**p",
        "rating": 4,
        "date": "2025-11-27",
        "productId": "M008",
        "productName": "Unsalted Butter Sticks (European Style)",
        "imageLink": "",
        "content": "Richer flavor than regular butter. Excellent for baking, gives pastries a great texture."
    },
    {
        "id": 39,
        "customerId": 23456,
        "userName": "Oh H**w",
        "rating": 3,
        "date": "2025-11-29",
        "productId": "M016",
        "productName": "Instant Miso Soup Pack",
        "imageLink": "",
        "content": "Very quick and easy, but the flavor is a little weak. Needs more tofu and seaweed for my liking."
    },
    {
        "id": 40,
        "customerId": 76543,
        "userName": "Kwon D**n",
        "rating": 5,
        "date": "2025-11-30",
        "productId": "M012",
        "productName": "Virgin Olive Oil (Cold Pressed)",
        "imageLink": "",
        "content": "Fruity and slightly peppery. High-quality oil perfect for finishing dishes and dipping."
    }
]

// 
const processedDrinkReviews = reviewDrinkData.map((review) => {
    const matchingImage = drinkImages.find((imageEntry) => review.customerId === imageEntry.id);
    if (matchingImage) {
        return {
            ...review,
            imageLink: matchingImage.src
        };
    } else {
        return review;
    }
});

//
const processedMaskPackReviews = reviewMaskPackData.map((review) => {
    const matchingImage = maskpackImages.find((imageEntry) => review.customerId === imageEntry.id);

    if (matchingImage) {
        return {
            ...review,
            imageLink: matchingImage.src
        };
    } else {
        return review;
    }

});

export { processedDrinkReviews, processedMaskPackReviews };