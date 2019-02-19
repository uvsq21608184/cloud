/**
 *
 * fakeInput  jquery module
 *
 * @param  {string} string
 *
 */
 define(['jquery'], function($, scrollbarTextarea, docIsAdded) {
  $.fn.openPopin = function(openPopin) {
     var $Triggers = $('.openPopin'),
         $closePopin =  $('.closePopin'),
         margeWidthPopin;
      var speed = 400;

        var openWrapPopin = function (e) {
        var $popinId = $(this).attr('data-popin-id');

         $target =  $('.Popin');

              margeWidthPopin =  ($('#'+$popinId).outerWidth())/2,
              margeHeight  = $('#'+$popinId).outerHeight() > $(window).height() ? 50 : ($(window).height() - $('#'+$popinId).outerHeight())/2,
              scrollAmount = $(window).scrollTop(),
              margeHeightPopin = margeHeight + scrollAmount,
              heightTotal = $(window).height() + scrollAmount,
              $layout_my_dashboard =  $( ".layout_my_dashboard" );


          // prevent scroll to top on href #
          if (typeof e != "undefined") {
            e.preventDefault();
          }

          $('<div class="shield"></div>').prependTo('body');
          $('#'+$popinId).prependTo('body');
          $('#'+$popinId).css({
               "left": "50%",
               "marginLeft" : -margeWidthPopin,
               "top": margeHeightPopin + 25,
               "position":"absolute",
               "z-index": 120,
               'opacity' : .01
           }).show().stop(true).animate({
               'opacity' : 1,
               "top": margeHeightPopin,
           },speed);

          $('.shield').css('height',heightTotal);

          if( window.CURRENT_MQ === 'desk' ) {
                $('.scroll-pane').jScrollPane();
            }
      }

      var CloseWrapPopin = function (e) {
          if (typeof e != "undefined") {
            e.preventDefault();
          }
          $(this).parent().parent().fadeOut(speed, function() {
              $('.shield').remove();
          });
      }


      // events
      $Triggers.on('click', openWrapPopin);
      $closePopin.on('click', CloseWrapPopin);
  };
});
