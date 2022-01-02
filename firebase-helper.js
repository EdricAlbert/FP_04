import {
    getFirestore,
    collection,
    getDoc,
    doc,
    getDocs,
    onSnapshot,
  } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
  const db = getFirestore()
  const movies = collection(db, 'movies')
  function getMovie() {
    const movieInfo = []
    onSnapshot(movies, (docs) => {
      docs.forEach((doc) => {
        const movieList = {
            image: doc.data().poster_path,
            title: doc.data().original_title,
            id: doc.data().id,
        }
        movieInfo.push(movieList)
      })
      for (let i = 0; i < movieInfo.length; i++) {
    const box = document.getElementById('movieHolder')
    const movieContainer = document.createElement('a')
    const moviePic =  document.createElement('img')
    const movieTitle = document.createElement('p')
    box.appendChild(movieContainer)
    movieContainer.appendChild(moviePic)
    movieContainer.appendChild(movieTitle)
    movieContainer.href = "./trailer.html"
    moviePic.src = movieInfo[i].image;
    movieTitle.textContent = movieInfo[i].title;
      };
    }); 
  };
  getMovie()