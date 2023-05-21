const slider document.querySelector("#slider");
let sliderSection=document.queryselectorall("slider__section");
let sliderSectionLast,sliderSection[sliderSection.lenght-1];


const btnleft = document.querySelector("#btn_left");
const btnright = document.queryselector("#btn_right");


slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next () {

let slidersectionfirst = document.querySelectorall (".slider__section") [0];
slider.style.narginLeft ="-200%";
slider.style.transition=" all 0.5s";
setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement ('beforeend', slidersectionfirst );
    slider.style.marginleft ="100%";
    
}, 500);

}

var slideIndex = 0;

showSlides();

function showSlides() {

    var i;

    var slides = document.getElementsByClassName(«mySlides»);

    for (i = 0; i < slides.length; i++) {

    slides[i].style.display = «none»;

    }

    slideIndex++;

    if(slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = «block»;

    setTimeout(showSlides,2000);

}