function customjs(){

var mouse_is_inside;
$('.multiLevel').hover(function() {
       mouse_is_inside = true;
}, function() {
       mouse_is_inside = false;
});

$("html").mouseup(function() {
       if (!mouse_is_inside) {
              $('.subglobal').hide();
       }
});

if ($(".sub-menu-wrapper").length > 0) {
       $(".nav-wrapper").css("height", "70px");
}

$('#masonry_container').masonry({
       itemSelector : '.item',
       columnWidth : 3
});

$("#masonry_container").imagesLoaded(function() {
       $('#masonry_container').masonry({
              itemSelector : '.item',
              columnWidth : 3,
              isAnimated : true,
              animationOptions : {
                     duration : 700,
                     easing : 'linear',
                    queue : false
              }
       });
});

$(".accordion-heading").click(
              function() {
                     if ($(this).hasClass('toggler-header-collapsed')) {
                           $(this).next().removeClass("toggler-content-collapsed")
                                         .addClass("toggler-content-expanded");
                           $(this).removeClass("toggler-header-collapsed").addClass(
                                         "toggler-header-expanded");
                     } else {
                           $(this).next().removeClass("toggler-content-expanded")
                                         .addClass("toggler-content-collapsed");
                           $(this).removeClass("toggler-header-expanded").addClass(
                                         "toggler-header-collapsed");
                     }
              });

$(document).on('click', '.sp-card-share', function(event) {
       $(".articleShareInfo").hide();
       $(event.target).next().css("display", "block");
       $(event.target).next().mouseleave(function() {
              $(this).css("display", "none");
       });
});

}

function showSubMenu() {
       if ($("ul#cpwdId").css("display") == "block") {
              $("ul#cpwdId").css("display", "none");
       } else {
              $("ul#cpwdId").css("display", "block");
       }
}

customjs();

jQuery(function ($) {
                                customjs();
                                // Fix for the IE8 font issues
                                if ($.browser.msie && 8 >= parseInt($.browser.version)) {
                                                setTimeout(function(){
                                                                $('.heading').trigger('focus');
                                                }, 3000);
                                                
                                                
                                                var head = document.getElementsByTagName('head')[0], style = document.createElement('style');
                                                style.type = 'text/css';
                                                style.styleSheet.cssText = ':before,:after{content:none !important';
                                                head.appendChild(style);
                                                setTimeout(function(){
                                                                head.removeChild(style);
                                                }, 0);
                                }
                                
                                
});
