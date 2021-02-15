const openNav = document.querySelector('#toggle')
const closeNav = document.querySelector('#nav-toggle')
const navBar = document.querySelector('#nav-bar')


openNav.addEventListener('click',function(){
  navBar.classList.add('active')

})

closeNav.addEventListener('click',function(){
  navBar.classList.remove('active')
})