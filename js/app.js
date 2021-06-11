$('.carousel-facilities').addClass('owl-carousel owl-theme').owlCarousel({
  loop:false,
  navText: ["<img src='images/chevron-left-square-08.png'>","<img src='images/chevron-right-square-08.png'>"],
  items:2,
  responsive:{
   0: {
     stagePadding: 40,
     items: 1,
     dots: true,
     nav: false,
     margin: 20
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
    stagePadding: 40,
     items: 2,
     dots: false,
     nav: true,
     margin: 45
   }
 }
})

/*Animation: Moving Ornament on Scroll*/

  $(window).scroll(function(){
    windowTop = $(window).scrollTop();

    $('.move-right').css({
      'transform':'translateX('+(windowTop) * 0.1  +'px)'
    });

    $('.move-left').css({
      'transform':'translateX('+(windowTop) * -0.1 +'px)'
    });

    $('.move-top').css({
      'transform':'translateY('+(windowTop) * -0.1 +'px)'
    });
  });
 // 