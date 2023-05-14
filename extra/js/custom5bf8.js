(function($) {
"use strict";

/* Cart search */
$(".account-satting-active , .search-active, .icon-login").on("click", function(e) {
    e.preventDefault();
    $(this).parent().find('.account-dropdown , .search-content, .login-m').slideToggle('medium');
})

/* Cart dropdown */
var iconCart = $('.icon-cart');
iconCart.on('click', function() {
    $('.shopping-cart-content').toggleClass('cart-visible');
})

})(jQuery);

$('#myCarousel').carousel({
    interval: 3000
});

//scroll slides on swipe for touch enabled devices

$("#myCarousel").on("touchstart", function(event){

var yClick = event.originalEvent.touches[0].pageY;
$(this).one("touchmove", function(event){

var yMove = event.originalEvent.touches[0].pageY;
if( Math.floor(yClick - yMove) > 1 ){
  $(".carousel").carousel('next');
}
else if( Math.floor(yClick - yMove) < -1 ){
  $(".carousel").carousel('prev');
}
});
$(".carousel").on("touchend", function(){
$(this).off("touchmove");
});
});

function myFunction(x) {
x.classList.toggle("change");
}

$(document).ready(function(){
$('.navbar-toggler').click(function(){
    $('.navbar-collapse').slideToggle(300);
});

/*smallScreenMenu();
let temp;
function resizeEnd(){
    smallScreenMenu();
}*/
/*
$(window).resize(function(){
    clearTimeout(temp);
    temp = setTimeout(resizeEnd, 100);
    resetMenu();
});*/
});

/*
const subMenus = $('.sub-menu');*/
/*const menuLinks = $('.menu-link');*/

/*function smallScreenMenu(){
if($(window).innerWidth() <= 992){
    menuLinks.each(function(item){
        $(this).click(function(){
            $(this).next().slideToggle();
        });
    });
} else {
    menuLinks.each(function(item){
        $(this).off('click');
    });
}
}*/

/*function resetMenu(){
if($(window).innerWidth() > 992){
    subMenus.each(function(item){
        $(this).css('display', 'none');
    });
}
}*/


$(document).ready(function(){
  $('.menu-link').click(function(){
    $(this).parent().siblings().find('.sub-menu').slideUp()
    $(this).next().slideToggle();
  });

  /*$('.add_cart').click(function(){
    $(this).find('.spinner-border').fadeIn()
  })*/


  
//Quick view slider
var sync1 = $(".slider");
var sync2 = $(".navigation-thumbs");
var thumbnailItemClass = '.owl-item';
var slides = sync1.owlCarousel({
    video:true,
  startPosition: 1,
  items:1,
  loop:true,
  margin:10,
  autoplay:false,
  autoplayTimeout:6000,
  autoplayHoverPause:false,
  nav: false,
  dots: false
}).on('changed.owl.carousel', syncPosition);

function syncPosition(el) { 
  $owl_slider = $(this).data('owl.carousel');
  var loop = $owl_slider.options.loop;

  if(loop){
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    if(current < 0) {
        current = count;
    }
    if(current > count) {
        current = 0;
    }
  }else{
    var current = el.item.index;
  }

  var owl_thumbnail = sync2.data('owl.carousel');
  var itemClass = "." + owl_thumbnail.options.itemClass;


  var thumbnailCurrentItem = sync2
  .find(itemClass)
  .removeClass("synced")
  .eq(current);

  thumbnailCurrentItem.addClass('synced');

  if (!thumbnailCurrentItem.hasClass('active')) {
    var duration = 300;
    sync2.trigger('to.owl.carousel',[current, duration, true]);
  }   
}
var thumbs = sync2.owlCarousel({
  startPosition: 1,
  items:4,
  loop:false,
  margin:10,
  autoplay:false,
  nav: true,
  dots: false,
  onInitialized: function (e) {
    var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
    thumbnailCurrentItem.addClass('synced');
  },
})
.on('click', thumbnailItemClass, function(e) {
    e.preventDefault();
    var duration = 300;
    var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
    sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
}).on("changed.owl.carousel", function (el) {
  var number = el.item.index;
  $owl_slider = sync1.data('owl.carousel');
  $owl_slider.to(number, 100, true);
});


// Quick View overlay
$('.btn-quick-view').click(function(){
  $('body').addClass('overlay')
})

})


$('nav.lt-menu').coreNavigation({
menuPosition: "right",
container: true, 
dropdownEvent: 'click',
onInit: function(){
    $('ul.tabs > li > a').hover(function(e){
        e.preventDefault();
        var tab_id = $(this).closest('li.tab-link').attr('data-tab');

        $('ul.tabs li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).closest('li.tab-link').addClass('active');
        $("#"+tab_id).addClass('active');
        $('.lt-menu .tab-content.active').parents().find('nav').addClass('hoverVisible')   ;
    });
  /*  $('ul.tabs > li > a').bind('mouseleave', function(){
       $('ul.tabs li').removeClass('active');
       $('.tab-content').removeClass('active');
       $(this).closest('li.tab-link').removeClass('active');
    });*/  
    }
});

$(document).click(function (e){
    var element = $(".megamenu-cus");

    if (!element.is(e.target) && element.has(e.target).length === 0){
       $('ul.tabs li').removeClass('active');
       $('.tab-content').removeClass('active');
       $(this).closest('li.tab-link').removeClass('active');
    }
        
});

$(document).click(function(event){
        if (!$(event.target).hasClass('hoverVisible')) {
            $("nav").removeClass("hoverVisible");
        }
    });

$(document).ready(function(){
  $('.drp-m').click(function(){
    $(this).siblings().find('.drp-menu-m').removeClass('open');
    $(this).find('.drp-menu-m').toggleClass('open')
  });

  $('.close-m').click(function(){
    $('.side-tab').toggleClass('in');
     /*$('body').removeClass('overlay-sideTab')*/
  });

  $('.sidefixed-heading').click(function(e){
  /*   e.stopPropagation();  */
    $('.side-tab').toggleClass('in');
    /*$('body').addClass('overlay-sideTab')*/

  });



  
    /*  $(document).click(function (evt) {      
       
          var container = $(".top-menu");
            if (!container.is(evt.target) && !container.has(evt.target).length && container.has('a') ) { // if you don't want that remove the condition and write container.hide(); only
            console.log("red")
            $('.side-tab').toggleClass('in');
             $('body').removeClass('overlay-sideTab')
          }
        

      });*/



})

$(document).ready(function() {


$("#owl-demo1").owlCarousel({

  autoplay: 3000, //Set AutoPlay to 3 seconds
lazyLoad : true,
  items : 6,
loop:true,
nav : false,
dots: false,
transitionStyle : "fade",
responsive:{
    0:{
        items:3
  },
    600:{
        items:5
    },
    1000:{
        items:5
    }
}

});



$("#owl-demoN1").owlCarousel({
margin:20,
  autoplay: 1500, //Set AutoPlay to 3 seconds
lazyLoad : true,
  items : 6,
loop:true,
nav : false,
dots: false,
transitionStyle : "fade",
responsive:{
    0:{
        items:3
  },
    600:{
        items:4
    },
    1000:{
        items:6
    }
}

});


});

$(".featuredCrousel").owlCarousel({

autoplay: 4000, //Set AutoPlay to 3 seconds
lazyLoad : false,
items : 4,
dots: false,
margin:20,
animateOut: true,
nav : false,
smartSpeed :900,
autoplayHoverPause: true,
/*navText : ["<i class='lni lni-arrow-left'></i>","<i class='lni lni-arrow-right'></i>"],*/
responsive:{
0:{
  items:2,
  nav:false,
mouseDrag: false,
touchDrag: true
},
420:{
  items:1,
  nav:false,
mouseDrag: false,
touchDrag: true
},
600:{
  items:3,
  nav:false
},
1000:{
  items:4,
  nav:false,
  loop:true
}
}

});


$(".benqCrousel").owlCarousel({

autoplay: 4000, //Set AutoPlay to 3 seconds
lazyLoad : false,
items : 4,
dots: false,
margin:20,
animateOut: true,
nav : false,
smartSpeed :900,
autoplayHoverPause: true,
/*navText : ["<i class='lni lni-arrow-left'></i>","<i class='lni lni-arrow-right'></i>"],*/
responsive:{
0:{
  items:2,
  nav:false,
mouseDrag: false,
touchDrag: true
},
420:{
  items:1,
  nav:false,
mouseDrag: false,
touchDrag: true
},
600:{
  items:3,
  nav:false
},
1000:{
  items:4,
  nav:false,
  loop:true
}
}

});


$(document).ready(function () {
  $(".benq-sec .dropdown-menu").on("click", "a", function () {             
   $('#myTabs a[href="#' + $(this).attr("class") + '"]').tab('show');               
 });

});



/*
$(function() {
$('.pd-tabs').responsiveTabs();
});*/

$(document).ready(function(){

  $('.search-active').click(function(){
    $('.search-full').fadeIn('slow');
  })
  $('.search-full .close-search').click(function(){
    $('.search-full').fadeOut('slow');
  });

   $( ".shop-cat-inn" ).mouseover(function() {
    $('.megamenu-cus-inn').addClass('menuIn')
  });
   $( ".core-nav" ).mouseleave(function() {
    $('.megamenu-cus-inn').removeClass('menuIn')
  });

   $('.filter-h').click(function(){

    $(this).parent().siblings().find('.filter-options').slideUp('slow');
    $(this).parent().find('.filter-options').slideToggle('slow')
   });


    // product Gallery and Zoom

      // activation carousel plugin
      
      // activation zoom plugin
      var $easyzoom = $('.easyzoom').easyZoom();


      //Share box toggle
      $('.share-heading').click(function(){
        $('.share-box').slideDown();  
      });

      $('.close-share-box').click(function(){
        $('.share-box').slideUp();
      });


      // Cart view more toggle
      $('.cart-pConfigBtn').click(function(){
       $(this).parents().siblings().find('.cart-pConfigContent').slideUp()
       $(this).parent().find('.cart-pConfigContent').slideToggle()
     });

      //Bootstrap tooltip init

       $('[data-toggle="tooltip"]').tooltip();

       //Checkout page

       $('.chkoutBilling-address .chkout-subheading').click(function(){
        $('.chkoutBilling-form').slideToggle();        
       });

       $('.filter-list-heading').click(function(){
           $(this).parent().find('.filter-options-light').slideToggle()           
        });

       /* $('.q-plus').click(function () {
            $(this).prev().val(+$(this).prev().val() + 1);
        });
        $('.q-minus').click(function () {
            if ($(this).next().val() > 1) {
                if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
            }
        });*/


     
 
        var addInput = '#qtyid'; //This is the id of the input you are changing
        var n = 1; //n is equal to 1
        
        //Set default value to n (n = 1)
        $(addInput).val(n);

        //On click add 1 to n
        $('.q-plus').on('click', function(){
          $(addInput).val(++n);
        })

        $('.q-minus').on('click', function(){
          //If n is bigger or equal to 1 subtract 1 from n
          if (n >= 1) {
           $(addInput).val(--n);
         } else {
            //Otherwise do nothing
          }
        });

        //Tabs active on button click
        $('.btn-nxt').click(function(){  
          $('a[href="#addons"]').tab('show');
          $(this).hide();
          $('.btn-addToCartM-fixed').show()
        });

        


        $('.chkoutSelect-address .chkout-subheading').click(function(){         
           $('.chkoutSadd-box:nth-child(1), .chkoutSadd-box:nth-child(2)').addClass('defaultVisible');
          $('.chkoutSadd-box').toggleClass('visibleToggle');        
        });


        $('.chkoutSadd-box').click(function(){
          $(this).siblings().removeClass('chkboxActive');
          $(this).addClass('chkboxActive')
        })








});



$(document).ready(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();
    
    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 992) {
            $('.pd-tabs').addClass('pd-tabs-m');
            $('.pd-tabs').removeClass('feat-list');
        }
        else
        {
            $('.pd-tabs').removeClass('pd-tabs-m');
        }
    };

});


$(function() {
$('.pd-tabs.pd-tabs-m').responsiveTabs();
});


$(document).ready(function(){
  var hidWidth;
    var scrollBarWidths = 40;

    var widthOfList = function() {
      var itemsWidth = 0;
      $('.feat-list li').each(function() {
        var itemWidth = $(this).outerWidth();
        itemsWidth += itemWidth;
      });
      return itemsWidth;
    };

    var widthOfHidden = function() {
      return (($('.wrapper').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;
    };

    var getLeftPosi = function() {
      return $('.feat-list').position().left;
    };

    var reAdjust = function() {
      if (($('.wrapper').outerWidth()) < widthOfList()) {
        $('.scroller-right').show();
        $('.scroller-left').show();
      } else {
       /* $('.scroller-right').hide();*/
      }

      if (getLeftPosi() < 0) {
        $('.scroller-left').show();
      } else {
        $('.item').animate({
          left: "-=" + getLeftPosi() + "px"
        }, 'slow');
       /* $('.scroller-left').hide();*/
      }
    }

    reAdjust();

    $(window).on('resize', function(e) {
      reAdjust();
    });

    $('.scroller-right').click(function() {

      $('.scroller-left').fadeIn('slow');
     /* $('.scroller-right').fadeOut('slow');*/

      $('.feat-list').animate({
        left: "+=" + widthOfHidden() + "px"
      }, 'slow', function() {

      });
    });

    $('.scroller-left').click(function() {

      $('.scroller-right').fadeIn('slow');
      /*$('.scroller-left').fadeOut('slow');*/

      $('.feat-list').animate({
        left: "-=" + getLeftPosi() + "px"
      }, 'slow', function() {

      });
    });
});


  $(document).ready(function(){
        $('.grid-btn').click(function(){
             $('span.list-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
           
            if ($('.grid-list').hasClass('p-list')) {
                $('.grid-list').removeClass('col-lg-12 col-md-12 col-sm-12 p-list').addClass('p-grid');
            }           
        });
        $('.list-btn').click(function(){
             $('span.grid-btn').removeClass('active-btn');
             $(this).addClass('active-btn');
           
            if ($('.grid-list').hasClass('p-grid')) {
                $('.grid-list').removeClass('p-grid').addClass('col-lg-12 col-md-12 col-sm-12 p-list');
            }   
          /* $('.grid-list').addClass('col-lg-12 col-md-12 col-sm-12 p-list') */       
        });

        $('.track-drpMobile').click(function(){
          $('#progressbar').slideToggle()
        })
    });

  




$(document).ready(function(){
  $('.faq-ques').click(function(){
    $(this).parent().siblings().find('.faq-ans').slideUp();
    $(this).parent().find('.faq-ans').slideToggle();
   
  });


  $('.drp-nImg').click(function(){
    /*$(this).parent().siblings().find("drp-menu-m").removeClass("menuInnN");*/
    $(this).parent().siblings().find(".drp-menu-m").removeClass("menuInnN"); 
    $(this).find('.drp-menu-m').toggleClass("menuInnN")
  });

  $('.header-search').click(function(){
    $('input#search-box').focus(); 
  });


 

  
});