import {
  getFirestore,
  collection,
  getDoc,
  doc,
  getDocs,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
const db = getFirestore();
const movies = collection(db, "movies");

function getMovie() {
  const movieInfo = [];
  onSnapshot(movies, (docs) => {
    docs.forEach((doc) => {
      let movie = {
        ...doc.data(),
        movieId: doc.id,
      };
      movieInfo.push(movie);
    });
    for (let i = 0; i < movieInfo.length; i++) {
      const box = document.getElementById("movieHolder");

      // Create
      const movieContainer = document.createElement("a");
      const moviePic = document.createElement("img");
      const movieTitle = document.createElement("p");

      // Append & Give content
      box.appendChild(movieContainer);
      movieContainer.appendChild(moviePic);
      movieContainer.appendChild(movieTitle);
      movieContainer.href = `./trailer.html?movie_id=${movieInfo[i].id}`;
      moviePic.src = movieInfo[i].poster_path;
      movieTitle.textContent = movieInfo[i].original_title;
    }
  });
}
getMovie();

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
// header nav bar

// Log out button

const logOut = document.getElementById('logOutBtn')
logOut.addEventListener("click", () => {
swal("Are you sure you want to log out?", "", "warning")
.then(() => {
window.location.href = './main.html'
});
})


