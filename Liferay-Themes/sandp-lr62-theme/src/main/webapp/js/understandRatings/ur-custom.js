$(document).ready(function() {

	/*$("#c-circle-nav__toggle").click(function(){
			$(".c-circle-nav.is-active .c-circle-nav__item").toggleClass("rectcanim");
	});
*/
 
	/* Fullpage Section Animation */

	$('#fullpage').fullpage({
	 	anchors: ['firstPage', 'secondPage', 'thirdPage'],
	 	navigation: true,
	 	navigationPosition: 'left',
	 	navigationTooltips: ['WHAT ARE CREDIT RATINGS?', 'WHY ARE CREDIT RATINGS USEFUL?', 'THE RATING PROCESS'],
	 	scrollingSpeed: 100,
	 	fitToSection: false,
	 	scrollBar: true,
	 	autoScrolling: false,
	 	
	 	afterLoad: function(anchorLink, index){
	 		if(index == 2){
	 			$(this).addClass('active');
	 		}
	 	},
	 	'onLeave': function(index, nextIndex, direction){
	 		if (index == 2 && direction == 'down'){
	 			$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
	 		}
	 		else if(index == 2 && direction == 'up'){
	 			$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
	 		}
	 		$('#section2').toggleClass('active', (index == 1 && direction == 'down' ) || (index == 3 && direction == 'up'));
	 		$('#section3').toggleClass('active', (index == 2 && direction == 'down' ));
	 		$('#section1').toggleClass('active', (index == 2 && direction == 'up' ));
	 	}
	});	 
	


	/* Viewpoint Animation */
	
	$(function() {
		$('.entry').waypoint(
				function(direction) {
					$(".c-circle-nav.is-active .c-circle-nav__item")
							.addClass("rectcanim");
				}, {
					offset : '90%'
				});
	
		$('.entry').waypoint(
				function(direction) {
					$(".c-circle-nav.is-active .c-circle-nav__item")
							.removeClass("rectcanim");
				}, {
					offset : '-1'
				});
	
		$('.main').waypoint(function(direction) {
			$('.main div').each(function() {
				$(this).hide().delay().fadeIn();
			});
		}, {
			offset : '90%'
		});
	
	});



	/* Show More and Less Cards */
	
	$('.showMoreButton').click(function(){
		var link = $(this);
		$('#more-tiles' + $(this).data('target')).slideToggle('slow', function() {
			if ($(this).is(":visible")) {
				 link.text('SHOW LESS');          
			} else {
				 link.text('SHOW MORE'); 
				 $('.slidediv').hide();
				$('.sp-card.sp-card-topic').removeClass('active-card');
			  
			}        
		});
	});
 
	/* Cards Animation to show Divs */	

    $('.sp-card.sp-card-topic').on(
		'click',
		function() {
			// .position() uses position relative to the
			// offset parent,
			// so it supports position: relative parent
			// elements
			var pos = $(this).position();
			// .outerWidth() takes into account border and
			// padding.
			var width = $(this).outerWidth();

			$('.sp-card.sp-card-topic').removeClass(
					'active-card');
			$('.slidediv').hide();
			$(this).addClass('active-card').siblings()
					.removeClass('active-card');
			// $('#slidediv' +
			// $(this).data('target')).slideToggle();

			$('#slidediv' + $(this).data('target')).css({
				position : "absolute",
				top : (pos.top + 378) + "px",
				left : (pos.left - pos.left + 6) + '%',
				width : 70 + "%"
			}).slideToggle();

			$(this).parent().find('.readm').hide();
			
			$( document ).on( 'keydown', function ( e ) {
                if ( e.keyCode === 27 ) {
                    $('.slidediv').hide();
                    $('.sp-card.sp-card-topic').removeClass('active-card');
                }
			});
			
		});
	
	
	$('.close-btn').click(function(){
		$('.slidediv').hide();
		$('.slidediv2').hide();
		$('.sp-card.sp-card-topic').removeClass('active-card');
		$('.readm').show();
	});


	/* Read More in expanded Divs */
	
	$('.readmore').click(function(){
        var link = $(this);
         $(this).parent().find('.readmoretxt').slideToggle('slow', function() {
            if ($(this).is(":visible")) {
            	$('.info').hide();
            	link.text('Show Less');
            } else {
                 link.text('Read More'); 
                 $('.readmoretxt').hide();
                 $('.info').show();
            }        
        });
    });

	/* 3 circles Animation */
	
	$("#issuers-block").show();
	$("#flip1").addClass('scale');
	$("#issuers").show();
	$("#intermediaries-block").hide();
  	$("#investors-block").hide();
  	
	$("#issuers-block").show();
	$("#flip1").addClass('scale');
	$("#issuers").fadeIn();
	$("#intermediaries-block").hide();
  	$("#investors-block").hide();
  	
	$("#flip1").click(function(){
			$("#intermediaries").delay(500).fadeOut();
			$("#investors").delay(500).fadeOut();
			$("#issuers").delay(500).fadeIn();
			$(this).addClass('scale');
			$("#flip2").removeClass('scale');
			$("#flip3").removeClass('scale');			
	    
	    	$("#issuers-block").show("slow");	
			$("#intermediaries-block").hide("slow");
		  	$("#investors-block").hide("slow");			
		
	});
	$("#flip2").click(function(){
			$("#issuers").delay(500).fadeOut();
			$("#investors").delay(500).fadeOut();
			$("#intermediaries").delay(500).fadeIn();
			$("#flip1").removeClass('scale');
			$("#flip3").removeClass('scale');
			$(this).addClass('scale');
	    
	    	$("#intermediaries-block").show("slow");		
			$("#issuers-block").hide("slow");
  			$("#investors-block").hide("slow");
		
	});
	$("#flip3").click(function(){
			$("#issuers").delay(500).fadeOut();
			$("#intermediaries").delay(500).fadeOut();
			$("#investors").delay(500).fadeIn();
			$("#flip1").removeClass('scale');
			$("#flip2").removeClass('scale');
			$(this).addClass('scale');
	    
		    $("#investors-block").show("slow");
			$("#issuers-block").hide("slow");
			$("#intermediaries-block").hide("slow");
		
	});


	/* Step by Step modal popup Animation */
	
	$(".inline").colorbox({rel:'inline', inline:true, width:"60%", loop:false});
	$(".next-topic").click(function(){
		$.colorbox.next();
	});
	$(".prv-topic").click(function(){
		$.colorbox.prev();
	});


	/* Social Share */
	$(document).on('click', '.sp-card-share', function(event) {
		       $(".articleShareInfo").hide();
		       $(".slidediv").hide();
		       $('.sp-card.sp-card-topic').removeClass('active-card');
		       $(event.target).next().css("display", "block");
		       $(event.target).next().mouseleave(function() {
		              $(this).css("display", "none");
		       });
			   			
				$(".articleShareInfo").click(function(e) {
			        e.stopPropagation();
			   });
		});

	});


	/* Scroll Up and Down */
	
	$(function() {
		// the element inside of which we want to scroll
	    //   var $elem = $('#crert');
			
	        // show the buttons
		$('#scroll_up').fadeIn('slow');
		$('#scrolldwn').fadeIn('slow');  
	
	        // whenever we scroll fade out both buttons
		$(window).bind('scrollstart', function(){
			$('#scroll_up,#scrolldwn').stop().animate({'opacity':'0.2'});
		});
	        // ... and whenever we stop scrolling fade in both buttons
		$(window).bind('scrollstop', function(){
			$('#scroll_up,#scrolldwn').stop().animate({'opacity':'1'});
		});
	
	        // clicking the "down" button will make the page scroll to the $elem's height
		$('#scrolldwn').click(
			function (e) {
				$('html, body').animate({scrollTop: 650}, 1000);
			}
		);
	        // clicking the "up" button will make the page scroll to the top of the page
		$('#scroll_up').click(
			function (e) {
				$('html, body').animate({scrollTop: '0px'}, 1000);
			}
		);
	 });

function showSubMenu() {
       if ($("ul#cpwdId").css("display") == "block") {
              $("ul#cpwdId").css("display", "none");
       } else {
              $("ul#cpwdId").css("display", "block");
       }
}
	