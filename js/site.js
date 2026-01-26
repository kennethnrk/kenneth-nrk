"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Simple smooth scroll for anchor links - only if on same page */
	$('a[href^="#"]').on('click', function(e) {
		var href = $(this).attr('href');
		if (href === '#' || href === '#!') return;
		
		var targetId = href.substring(1);
		var targetElement = document.getElementById(targetId);
		
		if (targetElement) {
			// Only do smooth scroll if target exists on current page
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $(targetElement).offset().top - 100
			}, 750);
			window.location.hash = href;
		}
	});
	
	/* Handle page load with hash - scroll to top first, then to target */
	if (window.location.hash) {
		var hash = window.location.hash;
		var targetId = hash.substring(1);
		var targetElement = document.getElementById(targetId);
		
		if (targetElement) {
			// Scroll to top first, then to target after page loads
			$(window).on('load', function() {
				$('html, body').animate({
					scrollTop: 0
				}, 300, function() {
					setTimeout(function() {
						$('html, body').animate({
							scrollTop: $(targetElement).offset().top - 100
						}, 750);
					}, 100);
				});
			});
		}
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

	/* Project Tabs */
	// Function to show tab content and ensure visibility
	function showTabContent(targetTab) {
		var $targetContent = $('#' + targetTab);
		$targetContent.show();
		
		// Force visibility of all elements in the active tab
		// WOW.js sets visibility: hidden initially, so we override it
		$targetContent.find('.wow').css({
			'visibility': 'visible',
			'opacity': '1'
		});
	}
	
	// Ensure initial tab content is visible
	showTabContent('fullstack');
	
	$('.tab-button').on('click', function() {
		var targetTab = $(this).data('tab');
		
		// Remove active class from all buttons
		$('.tab-button').removeClass('active');
		// Add active class to clicked button
		$(this).addClass('active');
		
		// Hide all tab contents
		$('.tab-content').hide();
		// Show selected tab content
		showTabContent(targetTab);
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});
