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

	/*
	// Fancybox
	$('.work-box').fancybox();
*/
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
	
	// Get the modal
	var modal = document.getElementById('Modal_resume');
	var btnVF = document.getElementById('VF');
	btnVF.onclick = function(){
		modal.style.display = "block";
		document.getElementsByTagName("BODY")[0].className = "noscroll";
	}
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	  document.getElementsByTagName("BODY")[0].className = "";
	}
	
	// Get the modal2
	var modal1 = document.getElementById('Model_project');
	var btnpj1 = document.getElementById('project1');
	btnpj1.onclick = function(){
		modal1.style.display = "block";
		document.getElementsByTagName("BODY")[0].className = "noscroll";
	}
	// Get the <span> element that closes the modal
	var span1 = document.getElementsByClassName("close")[1];

	// When the user clicks on <span> (x), close the modal
	span1.onclick = function() { 
	  modal1.style.display = "none";
	  document.getElementsByTagName("BODY")[0].className = "";
	}
	
	
	
	var slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	var next = document.getElementsByClassName("next")[0];
	next.onclick = function(){plusSlides(1)};
	var prev = document.getElementsByClassName("prev")[0];
	prev.onclick = function(){plusSlides(-1)};
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	var dot0 = document.getElementsByClassName("dot")[0];
	dot0.onclick = function(){currentSlide(1)};
	var dot1 = document.getElementsByClassName("dot")[1];
	dot1.onclick = function(){currentSlide(2)};
	var dot2 = document.getElementsByClassName("dot")[2];
	dot2.onclick = function(){currentSlide(3)};
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1} 
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
		  slides[i].style.display = "none"; 
	  }
	  for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block"; 
	  dots[slideIndex-1].className += " active";
	}

	
});