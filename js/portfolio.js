(function($) {
    "use strict";
    var menuTimeout = null;
    function windowChange() {
        if ($(window).width() <= 763) {
          $('#thumbnails .right').addClass("invisible");
          $('#thumbnails .left').addClass("invisible");
            $('.nav-collapse').removeClass("in");
            $('#myGalleryCarousel').addClass('invisible');
            var photos = $('#photos > .indicator > .carousel > .carousel-inner > .item');
            for (var i = 0; i < photos.length; i++) {
                photos.eq(i).addClass('active');
            }
        } else {
            $('#thumbnails').fadeIn();
            setTimeout(function(){$(window).on('mousemove', mouseMoveHandler);},1000);
            $('.nav-collapse').addClass("in");
            var photos = $('#photos > .indicator > .carousel > .carousel-inner > .item');
            console.log(photos)
            //photos.eq(0).addClass('active');
            for (var i = 0; i < photos.length; i++) {
                photos.eq(i).removeClass('active');
            }
            photos.eq(0).addClass('active');
            $('#myGalleryCarousel').removeClass('invisible');
            $('#thumbnails .right').removeClass("invisible");
            $('#thumbnails .left').removeClass("invisible");
        }
    }

    function mouseMoveHandler(e) {
        if (e.pageY > $(window).height()-150 || $('#thumbnails').is(':hover')) {
            // Show the menu if mouse is within 20 pixels from the left or we are hovering over it
            clearTimeout(menuTimeout);
            menuTimeout = null;
            $('#thumbnails').fadeIn();
        } else if (menuTimeout === null && $(window).width() >= 763) {
            // Hide the menu if the mouse is further than 20 pixels from the left and it is not hovering over the menu and we aren't already scheduled to hide it
            menuTimeout = setTimeout(function() {
                $('#thumbnails').fadeOut();
            }, 500);
        }
      }

    $(window).resize(function() {
        windowChange();
    });
    windowChange();

    $('.carousel-showsixmoveone .item').each(function() {
        var itemToClone = $(this);
        for (var i = 1; i < 4; i++) {
            itemToClone = itemToClone.next();
            // wrap around if at end of item collection
            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }
            // grab item, clone, add marker class, add to collection
            itemToClone.children(':first-child').clone().addClass("cloneditem-" + (i)).appendTo($(this));
        }
    });

    $('.sidebar-nav a').bind('click', function(event) {
        var $anchor = $(this);
        $('.section').addClass('invisible');
        if ($(window).width() <= 763) {
            $('#thumbnails').fadeIn();
            $('.nav-collapse').removeClass("in");
        } else {
          $('#thumbnails').fadeIn();
          setTimeout(function(){$('#thumbnails').fadeOut();},1000);
        }
        $($anchor.attr('href')).removeClass('invisible');
        if ($anchor.attr('href') !== '#landing') {
            $('.carousel-text').addClass('invisible');
        } else {
            $('.carousel-text').removeClass('invisible');
        }
        if($('#landing').hasClass('invisible')) {
          console.log('yo')
          $('.sidebar-brand').removeClass('invisible');
        } else {
          $('.sidebar-brand').addClass('invisible');
        }
    });

    if($('#landing').hasClass('invisible')) {
      $('.sidebar-brand').removeClass('invisible');
    } else {
      $('.sidebar-brand').addClass('invisible');
    }
  $('body').scrollspy({target: '.navbar-fixed-top', offset: 51});
})(jQuery); // End of use strict
