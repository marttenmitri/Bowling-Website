const mainHouseImages = [
    "./img/out-1.png",
    "./img/room-1.png",
    "./img/room-2.png"
];

const greyHouseImages = [
    "./img/out-large-2.png",
    // Add other image paths here
];

const abHouseImages = [
    "./img/out-large-3.png",
    // Add other image paths here
];

const smallHouseImages = [
    "./img/out-large-4.png",
    // Add other image paths here
];

const sauna_1 = [
    "./img/sauna_1.jpg",
];

const sauna_2 = [
    "./img/sauna_2.jpg",

];

const houseImages = {
    mainHouse: mainHouseImages,
    greyHouse: greyHouseImages,
    abHouse: abHouseImages,
    smallHouse: smallHouseImages,
    sauna_1: sauna_1,
    sauna_2: sauna_2,
};

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const slidesContainer = modal.querySelector('.modal-content > div');
    slidesContainer.innerHTML = ''; // Clear existing slides

    const images = houseImages[modalId];
    console.log("images")
    console.log(images)
    images.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = 'mySlides';
        slide.innerHTML = `<img src="${src}" style="width:100%">`;
        slidesContainer.appendChild(slide);
    });

    modal.style.display = 'block';
    document.querySelector('.navbar').style.zIndex = 1;
    document.body.style.overflow = 'hidden';

    // Show the first slide
    showSlides(1, modalId);
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.querySelector('.navbar').style.display = 'block'; // Show the navbar
    document.body.style.overflow = '';
}

var slideIndices = {
    mainHouse: 1,
    greyHouse: 1,
    abHouse: 1,
    smallHouse: 1,
    sauna_1: 1,
    sauna_2: 1,
};

function plusSlides(n, modalId) {
    showSlides(slideIndices[modalId] += n, modalId);
}

function showSlides(n, modalId) {
    var i;
    var modal = document.getElementById(modalId);
    var slides = modal.querySelectorAll('.mySlides');
    if (n > slides.length) { slideIndices[modalId] = 1 }
    if (n < 1) { slideIndices[modalId] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndices[modalId] - 1].style.display = "block";
}