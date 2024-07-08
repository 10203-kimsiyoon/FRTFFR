const menuList = [
    "짜장면",
    "피자",
    "삼겹살",
    "초밥",
    "파스타",
    "치킨",
    "떡볶이",
    "갈비탕",
    "비빔밥",
    "스테이크"
];

const menuButton = document.getElementById('menuBtn');
const menuDisplay = document.getElementById('menu');

menuButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * menuList.length);
    const selectedMenu = menuList[randomIndex];
    menuDisplay.textContent = selectedMenu;
});
