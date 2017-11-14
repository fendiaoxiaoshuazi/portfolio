$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});



	// Fancybox
	$('.work-box').fancybox();

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	// change the color of the nav
	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76.5
	        	bottom = top + $(this).outerHeight();
			//console.log($(this).attr('id'));
			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
	  	});
	});
	
	// add the scroll animation to the nav click
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		if (id == "header") {
			UseOffset = 75.4;
		} else {
			UseOffset = $(id).offset().top;
		}
		console.log(UseOffset);
		$('html, body').animate({
			scrollTop: UseOffset - 75.4
		}, 500);
	  return false;
	});
	
	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});