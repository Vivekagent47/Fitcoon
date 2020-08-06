function responsiveMobileMenu() {
	$('.nav').each(function() {
		
		var $style = $(this).attr('nav-menu-style');
		if (typeof $style == 'undefined' || $style == false) {
			$(this).addClass('burger');
		} else {
			$(this).addClass($style);
		}


		var $width = 0;
		$(this).find('ul li').each(function() {
			$width += $(this).outerWidth();
		});

		if ($.support.leadingWhitespace) {
			// $(this).css('max-width', $width * 1.2 + 'px');
		} 
		else {
			$(this).css('width', $width * 1.2 + 'px');
		}
	});
}


function getMobileMenu() {
	
	/* 	build toggled dropdown menu list */
	$('.nav').each(function() {
		var menutitle = $(this).attr("nav-menu-title");
		if (menutitle == "") {
			menutitle = "";
		} else if (menutitle == undefined) {
			menutitle = "";
		}
		var $menulist = $(this).children('.nav-menu').html();
		var $menucontrols = "<div class='nav-toggled-controls'><div class='nav-toggled-title'>" + menutitle + "</div><div class='nav-button'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div></div>";
		$(this).prepend("<div class='nav-toggled nav-closed'>" + $menucontrols + "<ul>" + $menulist + "</ul></div>");
	});
}


function adaptMenu() {

	/* 	toggle menu on resize */
	$('.nav').each(function() {
		// var $width = $(this).css('max-width');
		// $width = $width.replace('px', ''); 
		var $width = 768;
		if ($(this).parent().width() < $width * 1.05) {
			$(this).children('.nav-menu').hide(0);
			$(this).children('.nav-toggled').show(0);
		} else {
			$(this).children('.nav-menu').show(0);
			$(this).children('.nav-toggled').hide(0);
		}
	});
}


$(function() {
	responsiveMobileMenu();
	getMobileMenu();
	adaptMenu();

	/* slide down mobile menu on click */
	$('.nav-toggled, .nav-toggled .nav-button').click(function() {
		if ($(this).is(".nav-closed")) {
			$(this).find('> ul').stop().show(300);
			$(this).removeClass("nav-closed");
		} else {
			$(this).find(' > ul').stop().hide(300);
			$(this).addClass("nav-closed");
		}
	});
});


/* 	hide mobile menu on resize */
$(window).resize(function() {
	adaptMenu();
});


$(document).ready(function() {
	//test for touch events support and if not supported, attach .no-touch class to the HTML tag.
	if (!("ontouchstart" in document.documentElement)) {
		document.documentElement.className += " no-touch";
	} else {
		document.documentElement.className += " touch";
	}

	var $submenus = $('.nav.burger .nav-menu li > ul');
	$submenus.hide();
	if ($('html').hasClass('no-touch')) {
		$submenus.parent().hover(function() {
			$(this).find('> ul').slideToggle('fast');
		});
	} else {
		$submenus.parent().click(function(e) {
			
			$(this).find('> ul').slideToggle('fast');
			e.preventDefault();
			e.stopPropagation();
		});
	}

	$submenus.parent().addClass('has-children');

	var $submenusSm = $('.nav.burger .nav-toggled li > ul');
	$submenusSm.hide();
	$submenusSm.parent().prepend('<div class="clicker"></div>');
	$submenusSm.parent().children('a').addClass('toggle-sm');
	var clicker = $('.clicker');
	clicker.on('click', function(e){
		e.stopPropagation();
		$(this).parent().find('> ul').slideToggle();
		$(this).parent().children('a').toggleClass('open');
	});	
});



const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Feb 27, 2021 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

}, second)