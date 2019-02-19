define(['jquery'], function($) {
    
    $.fn.extend({
      renameAttr: function( name, newName, removeData ) {
        var val;
        return this.each(function() {
          val = jQuery.attr( this, name );
          jQuery.attr( this, newName, val );
          jQuery.removeAttr( this, name );
          // remove original data
          if (removeData !== false){
            jQuery.removeData( this, name.replace('data-','') );
          }
        });
      }
    });
    
    var $head = $('head'),
        currentMediaQuery;

    function trigger(ev) {
        var i, evts;
        for( i in $.cache ) {
            evts = $.cache[i].events
            if( typeof evts !== "undefined" && typeof evts[ev] !== "undefined" ) {
                $($.cache[i].handle.elem).trigger(ev);
            }
        }
        $.event.trigger(ev);
    }

    $.palm = function() {
        return currentMediaQuery === 'palm';
    };

    $.lap = function() {
        return currentMediaQuery === 'lap';
    };

    $.desk = function() {
        return currentMediaQuery === 'desk';
    };

    $(window).resize(function() {
        var mq = $head.css('font-family').replace(/"/g, '').replace(/'/g, '');
        if( mq !== currentMediaQuery ) {
            if( currentMediaQuery ) {
                trigger(currentMediaQuery+'-leave');
            }
            currentMediaQuery = mq;
            $.mediaquery = currentMediaQuery;
            trigger(mq);
            trigger(mq+'-enter');

            window.CURRENT_MQ = mq; // because FF not reconize $.palm() etc.. No time to debug now
        }
    });
    $(window).resize();

});