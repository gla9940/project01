$(document).ready(function () { //start

  //헤더
  $(".gnb").mouseover(function () {
    $("#header").stop().animate({
      height: '330px'
    }, 100)
  });

  $(".gnb").mouseout(function () {
    $("#header").stop().animate({
      height: '80px'
    }, 100)
  });

 /* var offset = $("header").offset();
  $(window).scroll(function () {

    if ($(document).scrollTop() > offset.top) {
      $("header").addClass("header-scroll");

    } else {
      $("header").removeClass("header-scroll");

    }




  });*/

  $(window).on("hashchange", function(){

    var hashname = location.hash;

    if(hashname == "#section01"){
      $("header").removeClass("header-scroll");
    }else if(hashname == "#section02"){
      $("header").addClass("header-scroll");
    }else if(hashname == "#section03"){
      $("header").addClass("header-scroll");
    }else if(hashname == "#section04"){
      $("header").addClass("header-scroll");
    }else if(hashname == "#section05"){
      $("header").addClass("header-scroll");
    }else if(hashname == "#section06"){
      $("header").addClass("header-scroll");
    }else if(hashname == "#section07"){
      $("header").addClass("header-scroll");
    }else if(hashname == "#section08"){
      $("header").addClass("header-scroll");
    }else if(hashname == "#section09"){
      $("header").addClass("header-scroll");
    }else if(hashname == "#section10"){
      $("header").addClass("header-scroll");
    }else{
      $("header").removeClass("header-scroll");
    }
  });


  $(".ham").click(function () {
    $(".dim").fadeIn();
    $(".mgnb-wrap").animate({
      "right": "0"
    })
  });

  //모바일 메뉴 닫기
  $(".m-close").click(function () {
    $(".dim").fadeOut();
    $(".mgnb-wrap").animate({
      "right": "-100%"
    });
  });

  //모바일 depth2
  $(".mdepth2").hide();

  $(".mgnb>li").click(function () {
    if ($(this).children(".mdepth2").css("display") == "block") {
      $(this).children(".mdepth2").stop().slideUp();
    } else {
      $(".mdepth2").slideUp(500);
      $(this).children(".mdepth2").stop().slideDown();
    }
  });


  $('#fullpage').fullpage({
    navigation: true,
    anchors: ['section01', 'section02', 'section03', 'section04', 'section05','section06','section07','section08','section09','section10'],
    navigationTooltips: ['01', '02','03','04','05','06','07','08','09','10'],
    showActiveTooltip: true,
    autoScrolling: true,
    responsiveWidth: 1024,
    responsiveWidth: 768, 
    responsiveWidth: 320, 
    
    
  });
  

  var mainswiper = new Swiper(".main-visual", {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    speed: 1000,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    /*autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },*/
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

  $(".start").click(function(){
    mainswiper.autoplay.start();
    return false;
  });

  $(".stop").click(function(){
    mainswiper.autoplay.stop();
    return false;
  });


  var swiper = new Swiper(".product", {
    slidesPerView: 2,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3.7,
        spaceBetwwen: 40,

      },
      1024: {
        slidesPerView: 4.3,
        spaceBetwwen: 50,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

  var swiper = new Swiper(".system", {
    slidesPerView: 1.5,
    spaceBetween: 0,

    breakpoints: {
      768: {
        slidesPerView: 2.5,
        spaceBetwwen: 40,

      },
      1024: {
        slidesPerView: 5,
        spaceBetwwen: 0,
      }
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


  });






 



  var magazine = new Swiper(".magazine", {
    slidesPerView: 1.4,
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    breakpoints: {
      768: {
        slidesPerView: 2.5,
        spaceBetwwen: 40,

      },
      1024: {
        slidesPerView: 5,
        spaceBetwwen: 0,
      }
    },


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });


  AOS.init();
  /*
  $(function() {
    $('a[href*=#category]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
*/

}); //end

