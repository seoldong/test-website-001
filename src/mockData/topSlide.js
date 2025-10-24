import img01 from "../assets/topContentsImg/img01.jpg"
import img02 from "../assets/topContentsImg/img02.jpg"
import img03 from "../assets/topContentsImg/img03.jpg"
import img04 from "../assets/topContentsImg/img04.jpg"

const topSlidesData = [
    {
        src: img01,
        alt: 'Slide 1: First Health Drink Product',
        slideText: "Discover Our Best-Selling Health Drink.",
        button: { text: 'Shop Now', class: 'btn-center', link: '/product/1' }
    },
    {
        src: img02,
        alt: 'Slide 2: Seasonal Event/Promotion',
        slideText: "Boost Your Immunity: Special Offer Inside!",
        button: { text: 'Join Event!', class: 'btn-center', link: '/event/2' }
    },
    {
        src: img03,
        alt: 'Slide 3: Brand Story/Mission',
        slideText: "Our Commitment to Your Wellness Journey.",
        button: { text: 'Read Our Story', class: 'btn-center', link: '/about' }
    },
    {
        src: img04,
        alt: 'Slide 4: Limited Time Sale',
        slideText: "Final Call: Up to 20% Off All Drinks.",
        button: { text: 'View All Sales', class: 'btn-center', link: '/sale' }
    },
];

export default topSlidesData;