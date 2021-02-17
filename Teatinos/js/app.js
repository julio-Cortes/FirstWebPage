const openNav = document.querySelector('#toggle')
const closeNav = document.querySelector('#nav-toggle')
const navBar = document.querySelector('#nav-bar')
const button =document.querySelector('#toggle')
const container = document.getElementsByClassName('main')[0];


window.onscroll = function() {myFunction()};
var sticky = header.offsetTop;
openNav.addEventListener('click',function(){
  navBar.classList.add('active')

})

closeNav.addEventListener('click',function(){
  navBar.classList.remove('active')
})


function myFunction() {
  if (window.pageYOffset > sticky) {
    navBar.classList.add('sticky')
    button.classList.add('sticky')

  } else {
    navBar.classList.remove('sticky')
    button.classList.remove('sticky')
  }
}

container.addEventListener('click', function (event) {
  navBar.classList.remove('active')
});
