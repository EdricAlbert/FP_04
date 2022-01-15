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
getMovieBtn.addEventListener("click", () => {
    if (presentAccount){
        window.location.href = './movie.html'
    } else {
        swal({
            title: "You must login first!",
            icon: "error",
            button: "Ok",
          });
    }
    
})

// Check
const getLoginBtn = document.getElementById('loginbtn')
if (lstAccount) {
    getUsername.innerHTML = presentAccount[presentAccount.length-1];
    getUsername.href = ''
} 
getLoginBtn.addEventListener('click', () => {
    if (presentAccount) {
        window.location.href = './login.html'
    } else{
        swal({
            title: "You must sign up first!",
            icon: "error",
            button: "Ok",
          })
    }
    
})

