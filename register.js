let Firstname = document.querySelector('#Firstname')
let Lastname = document.querySelector('#Lastname')
let Email = document.querySelector('#Email')
let Password = document.querySelector('#Password')
let Confirm__password = document.querySelector('#Confirm__password')
let small = document.querySelectorAll('small')
let span = document.querySelectorAll('span')
let form = document.querySelector('.form')
let i = document.querySelectorAll('i')
let submit = document.querySelector('.submit')
let colorWanning = '1px solid red'
let color = '1px solid #ccc'
function checkEmptyLastname() {
    if (Lastname.value === "") {
        span[1].style.display = 'flex'
        small[1].innerHTML = 'Không được bổ trống '
        Lastname.style.border = colorWanning
    }
}
function checkEmptyFirtname() {
    if (Firstname.value === '') {
        span[0].style.display = 'flex'
        small[0].innerHTML = 'Không được bỏ trống'
        Firstname.style.border = colorWanning
    }
}
function checkEmptyEmail() {
    if (Email.value === "") {
        span[2].style.display = 'flex'
        small[2].innerHTML = 'Không được bỏ trống'
        Email.style.border = colorWanning
    }
    if (Email.value !== "") {
        checkEmailFormat()
    }

}

function checkEmptyPassword() {
    if (Password.value === "") {
        span[3].style.display = 'flex'
        small[3].innerHTML = 'Không được bỏ trống'
        Password.style.border = colorWanning
    }
    if (Password.value !== "") {
        lengthPassword()
        if (Confirm__password.value != "") {
            checkConfirm()
        }
    }

}
function checkEmptyConfirm() {
    if (Confirm__password.value === "") {
        span[4].style.display = 'flex'
        small[4].innerHTML = 'Không được bỏ trống'
        Confirm__password.style.border = colorWanning
    }
    if (Confirm__password.value !== "") {
        checkConfirm()
    }
}
function checkConfirm() {
    if (Confirm__password.value !== Password.value) {
        span[4].style.display = 'flex'
        small[4].innerHTML = 'Mật khẩu không trùng nhau'
        Confirm__password.style.border = colorWanning
    }
    if (Confirm__password.value === Password.value) {
        span[4].style.display = 'none'
        Confirm__password.style.border = color
    }
}
function lengthPassword() {
    if (Password.value.length < 3) {
        span[3].style.display = 'flex'
        small[3].innerHTML = 'Mật khẩu phải có ít nhất 3 kí tự'
        Password.style.border = colorWanning
    }
}
function checkEmpty(e) {
    e.preventDefault();
    successful()
}
function hidenSmall(e) {
    const targetID = e.target.id
    if (targetID == 'Firstname') {
        span[0].style.display = 'none'
        Firstname.style.border = color
    }
    if (targetID == 'Lastname') {
        span[1].style.display = 'none'
        Lastname.style.border = color
    }
    if (targetID == 'Email') {
        span[2].style.display = 'none'
        Email.style.border = color
    }
    if (targetID == 'Password') {
        span[3].style.display = 'none'
        Password.style.border = color
    }
    if (targetID == 'Confirm__password') {
        span[4].style.display = 'none'
        Confirm__password.style.border = color
    }
}

function checkEmailFormat() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = emailRegex.test(Email.value)
    if (!email) {
        span[2].style.display = 'flex'
        small[2].innerHTML = 'Email không hợp lệ'
        Email.style.border = colorWanning
    }
}
function successful() {
    checkEmptyFirtname()
    checkEmptyLastname()
    checkEmptyEmail()
    checkEmptyPassword()
    checkEmptyConfirm()
    let count = 0
    for (a = 0; a < span.length; a++) {
        if (span[a].style.display == 'flex') {
            count++
        }
    }
    if (count == 0) {
        alert('Đăng kí thành công')
    }
}
submit.addEventListener('click', checkEmpty, true)
Firstname.addEventListener('click', hidenSmall)
Firstname.addEventListener('blur', checkEmptyFirtname)
Lastname.addEventListener('click', hidenSmall)
Lastname.addEventListener('blur', checkEmptyLastname)
Email.addEventListener('click', hidenSmall)
Email.addEventListener('blur', checkEmptyEmail)
Password.addEventListener('click', hidenSmall)
Password.addEventListener('blur', checkEmptyPassword)
Confirm__password.addEventListener('click', hidenSmall)
Confirm__password.addEventListener('blur', checkEmptyConfirm)
