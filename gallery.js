// Houses
const mainHouseImages = [
    "./img/out-1.png",
    "./img/room-1.png",
    "./img/room-2.png"
];

const greyHouseImages = [
    "./img/out-large-2.png",
];

const abHouseImages = [
    "./img/out-large-3.png",
];

const smallHouseImages = [
    "./img/out-large-4.png",
];

const campHouseImages = [
    "./img/sauna_1.jpg",
];

const guestHouseImages = [
    "./img/sauna_2.jpg",
];

// Saunas
const sauna_1 = [
    "./img/sauna_1.jpg",
];

const sauna_2 = [
    "./img/sauna_2.jpg",
];

const sauna_3 = [
    "./img/sauna_2.jpg",
    "./img/sauna_1.jpg",
];

// Halls
const smallHallImages = [
    "./img/sauna_1.jpg",
];

const fireplaceHallImages = [
    "./img/sauna_2.jpg",
];

const cinemaHallImages = [
    "./img/sauna_2.jpg",
];

const mainHallImages = [
    "./img/sauna_2.jpg",
];

// Entertainment
const tennisImages = [
    "./img/sauna_2.jpg",
];

const grillImages = [
    "./img/sauna_2.jpg",
];

const cafeImages = [
    "./img/sauna_2.jpg",
];

const beachCafeImages = [
    "./img/sauna_2.jpg",
];

const houseImages = {
    mainHouse: mainHouseImages,
    greyHouse: greyHouseImages,
    abHouse: abHouseImages,
    smallHouse: smallHouseImages,
    sauna_1: sauna_1,
    sauna_2: sauna_2,
    sauna_3: sauna_3,
    campHouse: campHouseImages,
    guestHouse: guestHouseImages,
    smallHall: smallHallImages,
    fireplaceHall: fireplaceHallImages,
    cinemaHall: cinemaHallImages,
    mainHall: mainHallImages,
    tennis: tennisImages,
    grill: grillImages,
    cafe: cafeImages,
    beachCafe: beachCafeImages,

};

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const slidesContainer = modal.querySelector('.modal-content > div');
    slidesContainer.innerHTML = ''; // Clear existing slides

    const images = houseImages[modalId];
    images.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = 'mySlides';
        slide.innerHTML = `<img src="${src}" style="width:auto; max-width:100%; max-height:90vh;">`; // Ensure img element adapts to modal size
        slidesContainer.appendChild(slide);
    });

    modal.style.display = 'flex'; // Display modal as flex to center content
    document.querySelector('.navbar').style.zIndex = 13;
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
    sauna_3: 1,
    campHouse: 1,
    guestHouse: 1,
    smallHall: 1,
    fireplaceHall: 1,
    cinemaHall: 1,
    mainHall: 1,
    tennis: 1,
    grill: 1,
    cafe: 1,
    beachCafe: 1,
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