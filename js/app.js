$(document).ready(function() {
  $('.fa-bars').click(function() {
    $('.side-menu').addClass("active");
  })
  $('.fa-times, .nav-savanna ul li a').click(function() {
    $('.side-menu').removeClass("active");
  })
});
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
 $(document).ready(function(){
  // Add smooth scrolling to all links
  $(".side-menu a, .nav-savanna ul li a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(window).scroll(function() {
  // checks if window is scrolled more than 500px, adds/removes solid class
  if($(this).scrollTop() > 70) {
      $('.nav-arandra').addClass('solid');
      $(".nav-arandra img").attr("src", 'http://okular.co.id/staging/arandra/wp-content/themes/arandra/images/logo-arandra-color.png');
      $('.menu-icon').addClass('scrolled');
  } else {
      $('.nav-arandra').removeClass('solid');
      $(".nav-arandra img").attr("src", 'http://okular.co.id/staging/arandra/wp-content/themes/arandra/images/logo-arandra.png');
      $('.menu-icon').removeClass('scrolled');
  }
});