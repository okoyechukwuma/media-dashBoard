const toggleAdd = document.querySelector('.toggle-round');
const body = document.querySelector('body');
let currentTheme = localStorage.getItem('currentTheme');
   
if (currentTheme) {
    body.classList.add('white-theme');
    toggleAdd.classList.toggle('toggle-change');
} 

toggleAdd.addEventListener('click', function () {
    toggleAdd.classList.toggle('toggle-change');
    body.classList.toggle('white-theme');

    if (body.classList.contains('white-theme')) {
        localStorage.setItem('currentTheme', 'active');
    }else{
    localStorage.removeItem('currentTheme');
    }
});

$(function(){
    $(document).scroll(function(){
        var $scrollUp = $(".scroll-up");
        var $header = $("#header");
        $scrollUp.toggleClass("scroll-up-display", $(this).scrollTop() > $header.height());
    });
});