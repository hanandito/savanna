$('.carousel-ourbusiness').addClass('owl-carousel owl-theme').owlCarousel({
  loop:false,
  navText: ["<img src='images/chevron-left-square-08.png'>","<img src='images/chevron-right-square-08.png'>"],
  items:2,
  responsive:{
   0: {
     stagePadding: 30,
     items: 1,
     dots: false,
     nav: false,
     margin: 15
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