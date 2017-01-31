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
    $(window).resize(function(){
      windowChange();
    });
    windowChange();
    //$('#thumbnailCarousel').carousel({ interval: 2000 });
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
        $($anchor.attr('href')).removeClass('invisible');
        console.log($anchor.attr('href'))
        if ($anchor.attr('href') !== '#landing') {
            $('.carousel-text').addClass('invisible');
        } else {
            $('.carousel-text').removeClass('invisible');
        }
    });
    $('body').scrollspy({target: '.navbar-fixed-top', offset: 51});
})(jQuery); // End of use strict
