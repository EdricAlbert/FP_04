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

// Alert
const getMovieBtn = document.getElementById('toMoviePage')
const getUsername = document.getElementById('username')
let presentAccount = JSON.parse(localStorage.getItem('presentAccount'));
let lstAccount = JSON.parse(localStorage.getItem("lstAccount"))
let test = JSON.parse(localStorage.getItem('test'))
getMovieBtn.addEventListener("click", () => {
    if (lstAccount && !test){
        window.location.href = './movie.html'
    }
     else {
        swal({
            title: "You must login first!",
            icon: "error",
            button: "Ok",
          });
    }
})

// Check
const getLoginBtn = document.getElementById('loginbtn')
if (lstAccount && test) {
    getUsername.innerHTML = 'Guest'
} else if (lstAccount && presentAccount) {
    getUsername.innerHTML = presentAccount
    console.log(presentAccount.name)
    getUsername.href = ''
}
getLoginBtn.addEventListener('click', () => {
    if (lstAccount) {
        window.location.href = './login.html'
    } 
    else{
        swal({
            title: "You must sign up first!",
            icon: "error",
            button: "Ok",
          })
    }
    
})

