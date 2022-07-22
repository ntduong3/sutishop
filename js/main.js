(function ($) {
 "use strict";
	
/*----------------------------
 Navbar nav
------------------------------ */
    var menu_btn = $('.menu-btn');
    menu_btn.on("click", function () {
        $(this).toggleClass("active");
        $(".icon-header").toggleClass("active");
    });
	
/*---------------------
 TOP Menu Stick
--------------------- */
	var s = $(window);
	  var sticky_id = $("#sticker");
	  s.on('scroll',function() {    
		var scroll = s.scrollTop();
		if (scroll < 100) {
		  sticky_id.removeClass("stick");
		}else{
		  sticky_id.addClass("stick");
		}
	  });
	
/*----------------------------
Page Scroll
------------------------------ */

	jQuery('a.page-scroll').on('click', function(event) {
		var $anchor = $(this);
		  $('html, body').stop().animate({
			  scrollTop: $($anchor.attr('href')).offset().top -60
			}, 1500, 'easeInOutExpo');
		event.preventDefault();
	}); 
	
/*---------------------
  venobox
--------------------- */
    var veno_box = $('.venobox');
    veno_box.venobox();
	
	
/*----------------------------
 Menu
------------------------------ */

	$(".main-menu ul.navbar-nav li ").on('click', function(){
		$(".main-menu ul.navbar-nav li").removeClass("active");
		$(this).addClass("active");
	});	
	
/*--------------------------
preloader
---------------------------- */	
	$(window).on('load',function(){
		var pre_loader = $('#preloader')
	pre_loader.fadeOut('slow',function(){$(this).remove();});
	});	
	
	
/*----------------------------
 jQuery MeanMenu
------------------------------ */
    var mean_menu = $('nav#dropdown');
    mean_menu.meanmenu();

	
	
/*--------------------------
 scrollUp
---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	
/*----------------------------
 Counter js active
------------------------------ */
    var count = $('.counter');
    count.counterUp({
		delay: 40,
		time: 3000
	});
	
	
/*--------------------------
 MagnificPopup
---------------------------- */	
    $('.video-play').magnificPopup({
        type: 'iframe'
    });
	
	
/*--------------------------
 Parallax
---------------------------- */	
    var parallaxeffect = $(window);
    parallaxeffect.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });
	
/*----------------------------
 isotope active
------------------------------ */
	// portfolio start
    $(window).on("load",function() {
        var $container = $('.portfolio-content');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.portfolio-menu li a').on("click", function() {
            $('.portfolio-menu li a.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    //portfolio end
    
/*--------------------------
     slider carousel
---------------------------- */
    $('.intro-carousel').owlCarousel({
        loop:true,
        nav:true,		
        autoplay:false,
        dots:false,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
/*----------------------------
   Typed Text
------------------------------ */
    var content = $(".typed_text");

    $(function() {
        content.typed({
            strings: ["Portfolio", "Designer", "Marketer"],
            typeSpeed: 100,
            loop: true,
        });
    });	
	
/*---------------------
 Testimonial carousel
---------------------*/
    var test_carousel = $('.testimonial-carousel');
    test_carousel.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
		margin:50,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
	
/*--------------------------
     contact-from
---------------------------- */
    $("#contactForm").on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });
    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var msg_subject = $("#msg_subject").val();
        var message = $("#message").val();


        $.ajax({
            type: "POST",
            url: "assets/contact.php",
            data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }

    function formSuccess(){
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h3 text-center tada animated text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    
	

})(jQuery); 