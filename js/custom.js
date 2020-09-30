$(function(){
    
      $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        asNavFor:'.banner-slider-main',
        autoplaySpeed: 1500,
          infinite:true,
          dots:false,
          
    });
    
      $('.banner-slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        asNavFor: '.banner-main',
        centerMode:true,
        arrows:false,
        centerPadding:0,
        infinite:true,
          dots:false,
          focusOnSelect: true,
    });
    
    $('.services-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
          
        arrows:false,
        dots: true,
    });
    
    $('.test-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
          infinite:true,
        arrows:false,
        dots: true,
    });
  
    
});