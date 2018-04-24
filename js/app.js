$('#box-1').mouseenter(function () {
  $('#box-1').addClass('box-hover').fadeIn('2000');
});
$('#box-1').mouseleave(function () {
  $('#box-1').removeClass('box-hover');
});

$('#box-2').mouseenter(function () {
  $('#box-2').addClass('box-hover').fadeIn('2000');
});
$('#box-2').mouseleave(function () {
  $('#box-2').removeClass('box-hover');
});

$('#box-3').mouseenter(function () {
  $('#box-3').addClass('box-hover').fadeIn('2000');
});
$('#box-3').mouseleave(function () {
  $('#box-3').removeClass('box-hover');
});

$('#box-4').mouseenter(function () {
  $('#box-4').addClass('box-hover').fadeIn('2000');
});
$('#box-4').mouseleave(function () {
  $('#box-4').removeClass('box-hover');
});


$('#text-box-1').hide();
$('#text-box-2').hide();
$('#text-box-3').hide();
$('#text-box-4').hide();


$('#box-1').on('click', function () {
  $('#text-box-1').toggle();
  $('#text-box-2').hide();
  $('#text-box-3').hide();
  $('#text-box-4').hide();

});
$('#box-2').on('click', function () {
  $('#text-box-2').toggle();
  $('#text-box-1').hide();
  $('#text-box-3').hide();
  $('#text-box-4').hide();
});
$('#box-3').on('click', function () {
  $('#text-box-3').toggle();
  $('#text-box-2').hide();
  $('#text-box-1').hide();
  $('#text-box-4').hide();

});
$('#box-4').on('click', function () {
  $('#text-box-4').toggle();
  $('#text-box-2').hide();
  $('#text-box-3').hide();
  $('#text-box-1').hide();
});

$(document).ready(function(){
  $('.slider-client').slick({
    dots: true,
  infinite: true,
  speed: 300,
  autoplay:3000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});