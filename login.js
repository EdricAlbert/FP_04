let lstAccount = JSON.parse(localStorage.getItem('lstAccount'));
const elm_name = document.getElementById('name');
const elm_pw = document.getElementById('pw');
const loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener('click', loginInfo)
function loginInfo () {
    let loginLength = lstAccount.length
    const loginAccount = {
        name: elm_name.value,
        pw: elm_pw.value
    }
    let loginCheck = false;
    for (let j = 0; j < loginLength; j++) {
        console.log(lstAccount[j])
        if (loginAccount.name == lstAccount[j].name && loginAccount.pw == lstAccount[j].pw ) {
            loginCheck = true
            break
        } 
    }
     if (loginCheck == true) {
        swal({
            title: 'Login successfully',
            icon: 'success',
            button: 'ok',
        })
.then(() => {
   window.location.href = './movie.html'
});
        
     } else {
        swal({
            title: "Wrong username or password",
            icon: "error",
            button: "ok",
          });
        }
    // console.log(loginAccount) 
}