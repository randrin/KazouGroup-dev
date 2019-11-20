var kazouImageTextCarousel = $('.kazou-imageTextCarousel-wrapper').find('.kazou-imageTextCarousel-container-items');

kazouImageTextCarousel.each(function () {
  $(this).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(this).siblings('.kazou-container-navigation-left').find('.kazou-button-left'),
    nextArrow: $(this).siblings('.kazou-container-navigation-right').find('.kazou-button-right'),
    dots: false,
    autoplay: $('.kazou-imageTextCarousel-wrapper').data('autoplay'),
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 768,
      settings: {
        speed: 600,
        touchThreshold: 50,
        cssEase: 'linear'
      }
    }]
  });
});

$(document).ready(function () {
  $('.kazou-imageTextCarousel-wrapper').css("visibility", "visible");
});