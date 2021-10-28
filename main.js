// Elements
let userImg = document.querySelector('#userImg')
let infoSpan = document.querySelector('#infoSpan')
let userInfo = document.querySelector('#userInfo')
let btn = document.querySelectorAll('.btn')
let url = 'https://randomuser.me/api/'


fetch(url)
.then(resp => resp.json())
.then(data => {
   let author = data.results

   return author.map((author) => {
      userImg.src = author.picture.large
      let name = `${author.name.first} ${author.name.last}`
      showUser(name)
      activeClass(btn, 0)
      btn[0].addEventListener('click', () => {
         let name = `${author.name.first} ${author.name.last}`
         showUser(name)
         activeClass(btn, 0)
      })
      btn[1].addEventListener('click', () => {
         let mail = `${author.email}`
         showMail(mail)
         activeClass(btn, 1)
      })
      btn[2].addEventListener('click', () => {
         let birthday = `${author.dob.date}`
         showBirthday(birthday)
         activeClass(btn, 2)
      })
      btn[3].addEventListener('click', () => {
         let addres = `${author.location.city}`
         showAddres(addres)
         activeClass(btn, 3)
      })
      btn[4].addEventListener('click', () => {
         let phone = `${author.phone}`
         showPhone(phone)
         activeClass(btn, 4)
      })
      btn[5].addEventListener('click', () => {
         let password = `${author.login.password}`
         showPassword(password)
         activeClass(btn, 5)
      })
   })
})


function showUser(info){
   infoSpan.innerText = 'Hi, My name is'
   userInfo.innerText = `${info}`
}
function showMail(info){
   infoSpan.innerText = 'My email address is'
   userInfo.innerText = `${info}`
}
function showBirthday(info){
   infoSpan.innerText = 'My birthday is'
   userInfo.innerText = `${info}`
}
function showAddres(info){
   infoSpan.innerText = 'My addres is'
   userInfo.innerText = `${info}`
}
function showPhone(info){
   infoSpan.innerText = 'My phone number is'
   userInfo.innerText = `${info}`
}
function showPassword(info){
   infoSpan.innerText = 'My password is'
   userInfo.innerText = `${info}`
}


function activeClass(arr, activeItem){
   for(let i = 0; i < arr.length; i++){
      if(i === activeItem){
         btn[activeItem].classList.add('active')
      }else{
         btn[i].classList.remove('active')
      }
   }
}