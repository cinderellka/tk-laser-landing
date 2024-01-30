jQuery(document).ready(function ($) {

/*  //popup
  $(".sale-page .fancybox").fancybox({
    touch:false,
    autoFocus:false,
    beforeShow : function(e){
      $('body').addClass('is-popup')
    },
    afterClose: function(e){
      $('body').removeClass('is-popup')
    },
  });


  //marquee
  $('.marquee1').marquee({
    duration: 30000,
    gap:0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    loop:true,
    startVisible: true,
  });

  //marquee
  $('.marquee2').marquee({
    duration: 30000,
    gap:0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    loop:true,
    startVisible: true,
  });

  //marquee
  $('.marquee3').marquee({
    duration: 30000,
    gap:0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    loop:true,
    startVisible: true,
  });



  //scroll to block
  $(document).on('click', '.sale-page .top-menu ul li a', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  //scroll to block
  $(document).on('click', '.mob-menu li a', function (e) {
    e.preventDefault();
    $.fancybox.close();
    $('html').removeClass('is-menu-open');
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });


  //fix header
  $(".top-line").sticky({
    topSpacing:0
  });

  /!* mob-menu*!/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();


    $('body').toggleClass('is-menu');

    if($('body').hasClass('is-menu')){
      $.fancybox.open( $('#menu-responsive'), {
        touch:false,
        autoFocus:false,
        afterShow: function (e){
          $('.marquee4').marquee({
            duration: 50000,
            gap:0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            loop:true,
            startVisible: true,
          });
        }
      });
      setTimeout(function() {
        $('html').addClass('is-menu-open');
      }, 100);
    }else{
      $('html').removeClass('is-menu-open');
      setTimeout(function() {
        $.fancybox.close();
      }, 100);
    }
  });

  $(document).on('click', '.popup-sale .delete', function (e) {
    e.preventDefault();
    $(this).closest('.input-radio').hide();
  })*/

  $(".sale-page .fancybox").fancybox({
    touch:false,
    autoFocus:false,
    beforeShow : function(e){
      $('body').addClass('is-popup')
    },
    afterClose: function(e){
      $('body').removeClass('is-popup')
    },
  });

  /*--------------------NEW----------12.01.24--------------*/
  //bg site - hover menu
  $(".item-sub-menu").hover(function() {
    $('.page').addClass("is-hover");
  }, function() {
    $('.page').removeClass("is-hover");
  });


  //select-1
  $(document).on('click', '.select-1 a', function (e) {
    e.preventDefault();
    $('.select-1 li').removeClass('is-active')
    $(this).closest('li').addClass('is-active');
  });

  //select-1
  $(document).on('click', '.select-2 a', function (e) {
    e.preventDefault();
    $('.select-2 li').removeClass('is-active')
    $(this).closest('li').addClass('is-active');
  });

  //select
  $('.popup-order .select-block select').niceSelect();

  var swiperOffer = new Swiper(".slider-offer", {
    spaceBetween: 30,
    pagination: {
      el: ".offer-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".offer-next",
      prevEl: ".offer-prev",
    },
  });
  /*mac or pc*/
  if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $("body").addClass("mac");
  } else {
    $("body").addClass("pc");
  }

  $(document).on('click', '.soc-icon', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-open');

    if($(this).hasClass('is-open')){
      $('.sub-soc-icon').slideDown();
    }else{
      $('.sub-soc-icon').slideUp();
    }
  });

});