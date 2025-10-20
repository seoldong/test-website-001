import img01 from "../assets/topContentsImg/img01.jpg"
import img02 from "../assets/topContentsImg/img02.jpg"
import img03 from "../assets/topContentsImg/img03.jpg"
import img04 from "../assets/topContentsImg/img04.jpg"

const topSlidesData = [
    {
        src: img01,
        alt: '슬라이드 1: 첫 번째 상품',
        slideText: "첫 번째 슬라이드의 제목입니다.",
        button: { text: '첫 번째 상품 보러가기', class: 'btn-center', link: '/product/1' }
    },
    {
        src: img02,
        alt: '슬라이드 2: 이벤트',
        slideText: "두 번째 슬라이드의 제목입니다.",
        button: { text: '이벤트 참여!', class: 'btn-center', link: '/event/2' }
    },
    {
        src: img03,
        alt: '슬라이드 3: 브랜드 스토리',
        slideText: "세 번째 슬라이드의 제목입니다.",
        button: { text: '브랜드 스토리 읽기', class: 'btn-center', link: '/about' }
    },
    {
        src: img04,
        alt: '슬라이드 4: 특별 할인',
        slideText: "네 번째 슬라이드의 제목입니다.",
        button: { text: '마지막 특별 할인', class: 'btn-center', link: '/sale' }
    },
];

export default topSlidesData;