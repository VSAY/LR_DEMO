jQuery(document).ready(function($){	
  //console.log('cycle init');
  var timeout_seconds = 10000;//parseInt("$rotor-seconds.getData()") * 1000;

  //$('.home-rotor .portlet-body .final-separator').remove();
  $('.home-rotor .portlet-body .final-separator').before('<nav id="slideshow-controls" />');
  $('.home-rotor .portlet-body .asset-abstract').each(function (index) {
    //console.log($(this));
    $(this).wrapInner('<div class="slide-wrap" />');
    });
  

  $('.home-rotor .portlet-body .portlet-borderless-container').append('<a id="prev" href="#"></a>');
  $('.home-rotor .portlet-body .portlet-borderless-container').append('<a id="next" href="#"></a>');
  //console.log('wait');



  if (timeout_seconds == 0) {
    timeout_seconds = 10000;
  }
  if ($('.home-rotor').length > 0) {
    $('.home-rotor .portlet-borderless-container .portlet-body').cycle({ 
        fx:     'fade', 
        speed:  'slow', 
        timeout: timeout_seconds,
        slideExpr : '.asset-abstract',
        prev: '#prev',
        next: '#next',
        pager:  '#slideshow-controls',       
        pagerAnchorBuilder: function(idx, slide) { 
          slideImg = $(slide).find('img.asset-small-image');
          //console.log(slideImg.attr("src"));
          return '<a href="#"><img src="' + slideImg.attr("src") + '" width="20" height="20" alt="'+idx+'"/></a>'; 
        }
          
    });
  }
  $('.portlet-asset-publisher .portlet-body .asset-abstract').each(function(){
    var theDate = $(this).children('.asset-metadata').detach();
    //console.log(theDate);
    $(this).children('.asset-title').after(theDate);
  });
});

