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
const getLoginBtn = document.getElementById('loginbtn')
let presentAccount = JSON.parse(localStorage.getItem('presentAccount'));
getMovieBtn.addEventListener("click", () => {
    if (presentAccount){
        window.location.href = './movie.html'
        getLoginBtn.innerHTML = presentAccount[presentAccount.length-1];
    } else {
        swal({
            title: "You must login first!",
            icon: "error",
            button: "Ok",
          });
    }
    
})
