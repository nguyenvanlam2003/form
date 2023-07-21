let Email = document.querySelector('#Email')
let Password = document.querySelector('#Password')
let small = document.querySelectorAll('small')
let span = document.querySelectorAll('span')
let form = document.querySelector('.form')
let submit = document.querySelector('.submit')
let i = document.querySelectorAll('i')
let colorWanning = '1px solid red'
let color = '1px solid #ccc'
function checkEmptyEmail() {
    if (Email.value === "") {
        span[0].style.display = 'flex'
        small[0].innerHTML = 'Không được bỏ trống'
        Email.style.border = colorWanning

    }
    else {
        checkEmailFormat()

    }
}
function checkEmptyPassword() {
    if (Password.value === "") {
        span[1].style.display = 'flex'
        small[1].innerHTML = 'Không được bỏ trống'
        Password.style.border = colorWanning
    }
    else {
        lengthPassword()
    }

}
function lengthPassword() {
    if (Password.value.length < 3) {
        span[1].style.display = 'flex'
        small[1].innerHTML = 'Mật khẩu phải có ít nhất 3 kí tự'
        Password.style.border = colorWanning
    }

}
function checkEmpty(e) {
    e.preventDefault();
    checkEmptyEmail()
    checkEmptyPassword()
    successful()
}
function hidenSmall(e) {
    const targetID = e.target.id
    if (targetID == 'Email') {
        span[0].style.display = 'none'
        Email.style.border = color
    }
    if (targetID == 'Password') {
        span[1].style.display = 'none'
        Password.style.border = color
    }
}
function checkEmailFormat() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = emailRegex.test(Email.value)
    if (!email) {
        span[0].style.display = 'flex'
        small[0].innerHTML = 'Email không hợp lệ'
        Email.style.border = colorWanning
    }
}
function successful() {

    let count = 0
    for (a = 0; a < span.length; a++) {
        if (span[a].style.display == 'flex') {
            count++
        }
    }
    if (count == 0) {
        alert('Đăng nhập thành công')
    }
}
form.addEventListener('submit', checkEmpty)
Email.addEventListener('click', hidenSmall)
Email.addEventListener('blur', checkEmptyEmail)
Password.addEventListener('click', hidenSmall)
Password.addEventListener('blur', checkEmptyPassword)



