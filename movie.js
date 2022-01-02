$(document).ready(function(){
    $(window).scroll(function(){    
        if(this.scrollY > 160){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2.5,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// header nav bar
// Data 
//
// import { getMovie } from "./firebase-helper.js";
// const movieData = [
//     {
//         id: '',
//         image: '',
//         title: 'Spider-Man',
//     },
//     {
//         id: '',
//         image: '',
//         title: 'Hello',
//     },
//     {
//         id: '',
//         image: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61116cea2313e8bae55a536a%2F-Dune-%2F0x0.jpg%3Ffit%3Dscale',
//         title: 'Dune',
//     },
// ]
// document.getElementById('movieHolder').innerHTML = movieData.map (movie => 
//     `<a href="./trailer.html">
//     <img src="${movie.image}" alt="">
//     <p class="text-white text-2xl flex justify-center">${movie.title}</p>`
// ).join(``)

    

