const imges = [
    "0.jpg", "1.jpg", "2.png", "3.png", "4.png", "5.png", "6.jpg", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg"
];

const background = imges[Math.floor(Math.random() * imges.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${background}`;

document.body.appendChild(bgImage);