// -------------------------Паралакс

// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);

// Адаптивное меню
$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){ 
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}

// Прелоадер
  document.body.onload = function () {
    setTimeout(()=>{
      const preloader = $('#preloader');
      const container = $('.preloader-container');
      if(preloader.attr('class') != 'menu-disable'){
        $(preloader).addClass('menu-disable')
        $(container).addClass('menu-disable')
      }
      
    },1000)
  }

//   $(window).resize(function() {
//     if(1150 > window.innerWidth){
//        $('.revealator-slideright').removeClass('revealator-slideright').addClass('revealator-slideup')
//        $('.revealator-slideleft').removeClass('revealator-slideleft').addClass('revealator-slideup')
//     }
//  }
 
//  );

// Кнопка наверх

$('body').append('<div class="upbtn"></div>');
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            transform: 'scale(1)'
        });
        } else {
        $('.upbtn').css({
            transform: 'scale(0)'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});
