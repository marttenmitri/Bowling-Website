// Houses
const mainHouseImages = [
    "./img/mainhouse/mainhouse_cover.jpg",
    "./img/mainhouse/doors.jpg",
    "./img/mainhouse/room_1_toilet.jpg",
    "./img/mainhouse/room_1_beds.jpg",
    "./img/mainhouse/room_2_toilets.jpg",
    "./img/mainhouse/room_2_beds.jpg",
];

const greyHouseImages = [
    "./img/greyhouse/grey_house_cover.jpg",
    "./img/greyhouse/outside.jpg",
    "./img/greyhouse/livingroom.jpg",
    "./img/greyhouse/stairs.jpg",
    "./img/greyhouse/toilets.jpg",
    "./img/greyhouse/bathroom.jpg",
    "./img/greyhouse/2_beds.jpg",
    "./img/greyhouse/2_beds_room.jpg",
    "./img/greyhouse/basement.jpg",
];

const abHouseImages = [
    "./img/abhouse/a_b_cover.jpg",
    "./img/abhouse/outside_b.jpg",
    "./img/abhouse/toilets.jpg",
    "./img/abhouse/kitchen.jpg",
    "./img/abhouse/room_11.jpg",
    "./img/abhouse/beds_2.jpg",
    "./img/abhouse/beds.jpg",
    "./img/abhouse/sofa.jpg",
    
];

const smallHouseImages = [

    "./img/smallhouse/small_house_cover.jpg",
    "./img/smallhouse/walkway.jpg",
    "./img/smallhouse/grill_area.jpg",
    "./img/smallhouse/inside_table.jpg",
    "./img/smallhouse/stairs.jpg",
    "./img/smallhouse/beds.jpg",
    "./img/smallhouse/balcony.jpg",
    "./img/smallhouse/sauna.jpg",
    "./img/smallhouse/grill.jpg",
    "./img/smallhouse/swing.jpg",

    
];

const campHouseImages = [
    "./img/camphouse/camp_house_cover.jpg",
    "./img/camphouse/outside.jpg",
    "./img/camphouse/outside_far.jpg",
    "./img/camphouse/peek_inside.jpg",
    "./img/camphouse/bed.jpg",
    "./img/camphouse/peek_outside.jpg",
];

const guestHouseImages = [
    "./img/guesthouse/guest_house_cover.jpg",
    "./img/guesthouse/room_1.jpg",
    "./img/guesthouse/balcony_room.jpg",
    "./img/guesthouse/balcony_lake_view.jpg",
    "./img/guesthouse/tennis.jpg",
    "./img/guesthouse/balcony.jpg",
    "./img/guesthouse/bedroom_2.jpg",
    "./img/guesthouse/bedroom_3.jpg",
    "./img/guesthouse/bedroom_1.jpg",
    "./img/guesthouse/bed.jpg",
    "./img/guesthouse/toilet.jpg",
    "./img/guesthouse/kitchen.jpg",
    "./img/guesthouse/room_2.jpg",
];

// Saunas
const sauna_1 = [
    "./img/sauna_1.jpg",
];

const sauna_2 = [
    "./img/sauna2/sauna_2_cover.jpg",
    "./img/sauna2/relax_area.jpg",
    "./img/sauna2/relax_area_2.jpg",
    "./img/sauna2/sauna_2.jpg",
    "./img/sauna2/pool.jpg",
];

const sauna_3 = [
    "./img/sauna3/sauna_3_cover.jpg",
    "./img/sauna3/sauna_1.jpg",
    "./img/sauna3/showers.jpg",
    "./img/sauna3/toilet.jpg",
    "./img/sauna3/pool_1.jpg",
    "./img/sauna3/pool_2.jpg",
    
];

// Halls
const smallHallImages = [
    "./img/smallhall/small_hall_cover.jpg",
    "./img/smallhall/room_2.jpg",
    "./img/smallhall/pool.jpg",
    "./img/smallhall/sauna.jpg",
    "./img/smallhall/outside.jpg",
];

const fireplaceHallImages = [
    "./img/fireplacehall/fireplace_hall_cover.jpg",
    "./img/fireplacehall/room_1.jpg",
    "./img/fireplacehall/room_2.jpg",
    "./img/fireplacehall/fireplace.jpg",
    "./img/fireplacehall/toilet.jpg",
    "./img/fireplacehall/toilet_doors.jpg",
    "./img/fireplacehall/pool.jpg",
    "./img/fireplacehall/pool_2.jpg",
    "./img/fireplacehall/showers.jpg",
    "./img/fireplacehall/sauna.jpg",


];

const cinemaHallImages = [
    "./img/cinemahall/cinema_hall_cover.jpg",
    "./img/cinemahall/chairs.jpg",
    "./img/cinemahall/chairs_2.jpg",
];

const mainHallImages = [
    "./img/mainhall/main_hall_cover.jpg",
    "./img/mainhall/room_1.jpg",
    "./img/mainhall/room_3.jpg",
    "./img/mainhall/room_4.jpg",
    "./img/mainhall/breakfest.jpg",
    "./img/mainhall/entrance.jpg",
    "./img/mainhall/upstairs_2.jpg",
    "./img/mainhall/upstairs_1.jpg",
];

// Entertainment
const tennisImages = [
    "./img/tennis/tennis_cover.jpg",
    "./img/tennis/player_1.jpg",
    "./img/tennis/players_2.jpg",
];

const grillImages = [
    "./img/grill/grill_cover.jpg",
    "./img/grill/grill.jpg",
    "./img/grill/large_grill.jpg",
];

const cafeImages = [
    "./img/mainhall/main_hall_cover.jpg",
    "./img/mainhall/room_1.jpg",
    "./img/mainhall/room_3.jpg",
    "./img/mainhall/room_4.jpg",
    "./img/mainhall/breakfest.jpg",
    "./img/mainhall/entrance.jpg",
    "./img/mainhall/upstairs_2.jpg",
    "./img/mainhall/upstairs_1.jpg",
];

const beachCafeImages = [
    "./img/beachcafe/beach_cafe_cover.jpg",
    "./img/beachcafe/room_1.jpg",
    "./img/beachcafe/room_2.jpg",
    "./img/beachcafe/menu.jpg",
    "./img/beachcafe/icecream.jpg",
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