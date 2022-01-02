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
        }
        movieInfo.push(movieList)
      })
      for (let i = 0; i < movieInfo.length; i++){
        // console.log(movieInfo[i].title)
       const movieContainer = document.createElement('a')
       
       const moviePic =  document.createElement('img')
       const movieTitle = document.createElement('p')

      }
    }) 
  }
  getMovie()


