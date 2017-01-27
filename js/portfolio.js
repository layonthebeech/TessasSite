
(function($) {
    "use strict";
    $('.sidebar-nav a').bind('click', function(event) {
        var $anchor = $(this);

        $('.section').addClass('invisible');
        $($anchor.attr('href')).removeClass('invisible');

    });
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
    if($(window).width() <=599) {
       $('.nav-collapse').removeClass("in");
    }
  $( window ).resize(function() {
    console.log('smoll', $(window).width())
    if($(window).width() <=599)  {
    //  $('.carousel-inner').addClass('invisible');
      $('.nav-collapse').removeClass("in");
    }
    else {
    //  $('.carousel-inner').removeClass('invisible');
      $('.nav-collapse').addClass("in");
    }
  });
})(jQuery); // End of use strict
