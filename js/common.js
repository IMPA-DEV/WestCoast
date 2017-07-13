$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $('.hid').hide();
            $('.thanks').show();
            $('.thanks .popup').animate({
                top: '30%',
                opacity: 1
            }, 800 );
            th.trigger("reset");
            $('.popup-sms').slideUp( 100 ).delay( 800 ).fadeIn( 400 );
        }).success (function(){
            $(dataLayer.push({'event': 'west_coast_nadia'}));
        });

        return false;
    });

	/* pagescroll2id */
    $(".down, nav a").mPageScroll2id({
        scrollSpeed: 1000,
        offset:30
    });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

//scroll top-link transparent
$(function() {
    var header = $("#top-line");
    $(window).scroll(function(scrlevt) {
        scrlevt.preventDefault();
        var scroll = $(window).scrollTop();

        if (scroll > 20) {
            header.removeClass('header-scroll-off').addClass("header-scroll");
        } else {
            header.removeClass("header-scroll").addClass('header-scroll-off');
        }

        return false;
    });
});

/* open menu */
$('.nav-menu').not('.close-btn').click(function(){
    $(this).hide();
   $('.close-btn').show();
   $('.menu').addClass('mobile-menu');
   $('#top-line').css('top','0');
});
/* close menu */
$('.mobile-menu nav a, .close-btn').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('.nav-menu').show();
    $('.menu').removeClass('mobile-menu')
});
/* close menu */
$('nav a').click(function() {
    if (innerWidth < 992) {
        $('.close-btn').hide();
        $('.nav-menu').show();
        $('.menu').removeClass('mobile-menu');
    }

});

// slider reviews
$(".rev-block").not(":first").hide();
$(".rev-img").click(function() {
    $(".rev-img").removeClass("active").eq($(this).index()).addClass("active");
    $(".rev-block").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
