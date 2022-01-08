import {
    getFirestore,
    collection,
    query, where, getDocs
  } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
  const db = getFirestore()
  const trailerVid = collection(db, 'videos')
  const info = collection(db, 'movies')
  const urlParams = new URLSearchParams(window.location.search); // URL params
const movieId =  urlParams.get('movie_id')

// header nav bar
console.log(movieId)
// Fb
const bigContainer = document.getElementById('upperContainer')
    const titleContainer = document.getElementById('title')
    const imageContainer = document.getElementById('imageCtn')
    const videoContainer = document.getElementById('videoContainer')

async function getTrailer () {
    
    // Get ID and Link
    const q = query(trailerVid, where("id", "==", Number(movieId) ));
    getDocs(q).then((snapShot) => {
        snapShot.forEach((trailerInfo) => {
            const trailerVideo = trailerInfo.data()
            console.log(trailerVideo)
            const newQuery = query(info, where("id", "==", Number(movieId)));
            getDocs(newQuery).then((snapShot) => {
                snapShot.forEach((mvInfo) => {
            const movieInfo = mvInfo.data()
            console.log(movieInfo)
            createMovieList(movieInfo, trailerVideo)
                })
            })
        })
    }).catch((error) => {
        console.log(error)
    })
}
getTrailer()
        
function createMovieList (movie, trailer) {
    if (trailer.type == 'Trailer' && movie.media_type == 'movie') {
        const trailerLink = document.createElement('iframe')
        trailerLink.src = trailer.key
        videoContainer.appendChild(trailerLink)
        const newImage = document.createElement('img')
        newImage.src = movie.backdrop_path
        imageContainer.appendChild(newImage)
    
        const newh1 = document.createElement('h1')
        newh1.className = "movieName text-6xl"
        newh1.textContent = movie.original_title
        titleContainer.appendChild(newh1)
    
        const newSpan = document.createElement('span')
        newSpan.className = 'movieLength text-3xl mt-12'
        newSpan.textContent = `Release date: ${movie.release_date}`
        titleContainer.appendChild(newSpan)
        
        const newP = document.createElement('p')
        newP.textContent = movie.overview
        newP.className = "descrip w-2/3 mt-12 text-lg leading-9"
        titleContainer.appendChild(newP)
    
        // Append
        bigContainer.appendChild(imageContainer)
        bigContainer.appendChild(titleContainer)
    }
}

// Scroll 
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