// دة بتاع اظهار البحث
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
// دة بتاع اللوجن يخفى ويظهر
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
// بتخلى القايمه تدخل جواها الهيدر
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');







// دة بتاع اما يعمل اسكرول البحث يختفى
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
// بتخلى القايمه تدخل جواها الهيدر
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// دة بتاع اظهار البحث
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
// دة بتاع اللوجن يخفى ويظهر
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
// دة بتاع اللوجن يخفى ويظهر
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click' , () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
// بتخلى الصور تتحرك
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        dealy:2500,
        disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidespreview: 1,
            },
            768: {
                slidespreview: 2,
            },
            1024: {
                slidespreview: 3,

            },
        },
    });
// بتخلى الصور تتحرك بتاعت البراند
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        dealy:2500,
        disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidespreview: 1,
            },
            768: {
                slidespreview: 2,
            },
            1024: {
                slidespreview: 3,

            },
        },
    });