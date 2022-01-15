const elm_name = document.getElementById('name');
const elm_pw = document.getElementById('pw');
const elm_signup = document.getElementById('btn');
elm_signup.addEventListener('click', saveinfo)

function saveinfo(){
    // Khởi tạo list account
    if (localStorage.getItem('lstAccount') == null) {
        localStorage.setItem('lstAccount','[]');
    }
    // Lưu dữ liệu vô local storage
    let lstAccount = JSON.parse(localStorage.getItem('lstAccount'));
    console.log('data',lstAccount);
    const newAccount = {
        name: elm_name.value,
        pw: elm_pw.value
    }
    let check = true;
    for (let i = 0; i < lstAccount.length; i++) {
        if (newAccount.name == lstAccount[i].name) {
        alert('This username has been taken')
        check = false;
        break;
        } 
    }
    if (check == true) {
        window.location.href = './login.html'
        lstAccount.push(newAccount);
    localStorage.setItem('lstAccount', JSON.stringify(lstAccount));
    }
}

   


   