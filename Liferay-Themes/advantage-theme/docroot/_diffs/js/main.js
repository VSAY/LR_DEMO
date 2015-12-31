AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {
  //$("select, input:checkbox, input:radio").uniform();
	$("body:not(.dockbar-ready) input:checkbox,body:not(.dockbar-ready) input:radio").uniform();
  $('#regional-select').uniform();
  $('.columns-max .portlet-search .aui-form select#_3_groupId').uniform();

  //$('.portlet-document-library-display select').uniform();
	
	$('.nav-menu .level-1 li ul.level-2').parent().addClass('has-children');
  //console.log($('.nav-menu .level-1 li .level-2 li.selected .level-3 li.selected').closest('.level-1 li'));
  $('.nav-menu .level-1 li .level-2 li.selected').parent().parent().addClass('child-open');
  $('.nav-menu .level-1 li .level-2 li .level-3 li.selected').closest('ul.level-1 li.has-children').addClass('child-open');

  // fix uniformed checkboxes 
  
  if ($('.checker').length > 0) {
    $('.aui-field-choice ').each(function() {
      var temp = $(this).find('input[type="hidden"]').detach()
      temp.prependTo($(this).find('.checker span'));
    });
  }
  
  $('.column-1 #portlet_status').parent().css('text-align','center');
  
	}
);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(portletId, node) {
	 //console.log(portletId);
	
	}
);

Liferay.on(
	'allPortletsReady',
	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
		
/*
		var tallest = 245;
		$('.home .portlet-layout.bottom-row .portlet, .portlet-layout.bottom-row .portlet-borderless-container').each(function(index){
			if ( $(this).height() > tallest ) {
				tallest = $(this).height();
			}
			$('.home .portlet-layout.bottom-row .portlet, .portlet-layout.bottom-row .portlet-borderless-container').css({'min-height': tallest});
		});

		
		$('.search-wrap input[name="_3_keywords"]').attr('placeholder','Search Site...');
		
    if ($('#main-rotor #login .portlet-login .portlet-title .portlet-title-text').text() != 'Forgot Password') {
      $('#main-rotor #login .portlet-login .portlet-title .portlet-title-text').text('Cisco NetSpace Sign In');  
    }
  
    if ($('#login .portlet-msg-error').length > 0) {
      $('#login').addClass('error');
    }
  
    if ($('#login .taglib-captcha').length > 0) {
      $('#login').addClass('captcha');
    }
*/
	}
	
);