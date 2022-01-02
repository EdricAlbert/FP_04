// Khởi tạo list account
let lstAccount = JSON.parse(localStorage.getItem('lstAccount'));
console.log('data',lstAccount);
// Lưu dữ liệu vô local storage
const elm_signup = document.getElementById('btn');
elm_signup.addEventListener('click',saveinfo)

function saveinfo(){
    const elm_name = document.getElementById('name');
    const elm_pw = document.getElementById('pw');
    const newAccount = {
        name: elm_name.value,
        pw: elm_pw.value
    }
    lstAccount.push(newAccount);
    localStorage.setItem('lstAccount', JSON.stringify(lstAccount));
}