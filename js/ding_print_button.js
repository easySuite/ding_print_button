(function($) {
  'use strict';

  // On document ready.
  $(function() {

    // Print button functionality.
    $('.print-button').click(function(e) {
      e.preventDefault();
      window.print();
    });
  });
})(jQuery);
