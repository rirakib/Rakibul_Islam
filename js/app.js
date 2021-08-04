const menu = document.querySelector('#mobileToggle');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

$(window).on("load",function(){
    $(".my_lodear").fadeOut(1000);
});



$('.skill-per').each(function () {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({
        animatedValue: 0
    }).animate({
        animatedValue: per
    }, {
        duration: 1000,
        step: function () {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function () {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
    });
});

$(".num").counterUp({
    delay: 10,
    time: 1000
});


$(window).on("load", function () {
    $(".loader-container").fadeOut(1000);
});

$(".filter-button").click(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
    } else {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');

    }
});

$('.zoom').magnificPopup({
    items: [
      {
        src: './img/galary_one.jpg'
      },
      {
        src: './img/galary_two.jpg'
      },
      {
        src: './img/galary_three.jpg'
      },
      {
        src: './img/galary_four.jpg'
      },
      {
        src: './img/galary_five.jpg'
      },
      {
        src: './img/galary_six.jpg'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });

  $(".theme_btn li").click(function(){
    $("body").toggleClass("dark_theme");
  });

  AOS.init({
    offset:"300",
    delay:"30",
    duration:"2000"
});

var typed = new Typed('.type', {
    strings: ['Md. Rakibul Islam'],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true
  });