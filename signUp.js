// Define Btn
const getSignUpBtn = document.getElementById("btn")
getSignUpBtn.addEventListener("click", addVal)

// Define add value
function addVal () {
// Get value
const getNameEl = document.getElementById("name")
const getPwEl = document.getElementById("pw")
const name = getNameEl.value
const password = getPwEl.value
// Add to local storage
if (name !== "" && password !== ""){
    const newName = localStorage.setItem('userName', name)
    const newPass = localStorage.setItem('password', password)
    window.location.href = "http://127.0.0.1:5501/movie.html"
} 
else {
    alert("enter username and password")
}
}

