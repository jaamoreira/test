(function ($)
  { "use strict"
    $(window).on('load', function () {
      $('#loader').fadeOut('slow');
      $('.site-body').delay(1200).css({
        'display': 'inherit'
      });
    });
})(jQuery);

jQuery(function($) {
    $(window).on('scroll', function() {
    if ($(this).scrollTop() >= 200) {
      $('.navbar').addClass('fixed-top');
    } else if ($(this).scrollTop() == 0) {
      $('.navbar').removeClass('fixed-top');
    }
  });
});