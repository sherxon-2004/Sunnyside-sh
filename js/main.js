var elButton = document.querySelector('.burger-btn');
var elMenu = document.querySelector('.menu');

elButton.addEventListener('click', function(){
    elMenu.classList.toggle("menu--open")
})