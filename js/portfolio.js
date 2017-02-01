(function($) {
    "use strict";
    function windowChange() {
        console.log('smoll', $(window).width())
        if ($(window).width() <= 763) {

            $('.nav-collapse').removeClass("in");
            var photos = $('#photos > .indicator > .carousel > .carousel-inner > .item');
            console.log(photos)
            for (var i = 0; i < photos.length; i++) {
                photos.eq(i).addClass('active');
            }
            $('#myGalleryCarousel').addClass('invisible');
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
      console.log('yo', $('#landing').hasClass('invisible'))

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
        console.log($anchor.attr('href'))
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
    $('body').scrollspy({target: '.navbar-fixed-top', offset: 51});

    var menuTimeout = null;
    function mouseMoveHandler(e) {
        if (e.pageY > $(window).height()-150 || $('#thumbnails').is(':hover')) {
            // Show the menu if mouse is within 20 pixels from the left or we are hovering over it
            clearTimeout(menuTimeout);
            menuTimeout = null;
            $('#thumbnails').fadeIn();
        } else if (menuTimeout === null) {
            // Hide the menu if the mouse is further than 20 pixels from the left and it is not hovering over the menu and we aren't already scheduled to hide it
            menuTimeout = setTimeout(function() {
                $('#thumbnails').fadeOut();
            }, 500);
        }
      }
    if($('#landing').hasClass('invisible')) {
      console.log('yo')
      $('.sidebar-brand').removeClass('invisible');
    } else {
      $('.sidebar-brand').addClass('invisible');
    }

})(jQuery); // End of use strict
