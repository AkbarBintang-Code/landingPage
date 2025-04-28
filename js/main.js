(function ($) {
  "use strict";
  
  // Dropdown on mouse hover
  $(document).ready(function () {
      function toggleNavbarMethod() {
          if ($(window).width() > 992) {
              $('.navbar .dropdown').on('mouseover', function () {
                  $('.dropdown-toggle', this).trigger('click');
              }).on('mouseout', function () {
                  $('.dropdown-toggle', this).trigger('click').blur();
              });
          } else {
              $('.navbar .dropdown').off('mouseover').off('mouseout');
          }
      }
      toggleNavbarMethod();
      $(window).resize(toggleNavbarMethod);
  });
  
  
  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });


  // Portfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('active');
      $(this).addClass('active');

      portfolioIsotope.isotope({filter: $(this).data('filter')});
  });


  // Post carousel
  $(".post-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      dots: false,
      loop: true,
      nav : true,
      navText : [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:2
          }
      }
  });


  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
      center: true,
      autoplay: true,
      smartSpeed: 2000,
      dots: true,
      loop: true,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });
  
})(jQuery);

$(document).ready(function(){
  var articleOwl = $("#article-carousel");
  articleOwl.owlCarousel({
    items: 3, // tampil 3 card per view
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  $("#prevArticle").click(function(){
    articleOwl.trigger('prev.owl.carousel');
  });
  $("#nextArticle").click(function(){
    articleOwl.trigger('next.owl.carousel');
  });
});

$(document).ready(function() {
  $('#product-carousel').owlCarousel({
    items: 3, // Number of items per slide
    loop: true, // Infinite loop
    margin: 10, // Space between items
    nav: false, // Default navigation
    dots: false, // Disable dots
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  // Custom Navigation
  $('#prevProduct').click(function() {
    $('#product-carousel').trigger('prev.owl.carousel');
  });

  $('#nextProduct').click(function() {
    $('#product-carousel').trigger('next.owl.carousel');
  });
});

