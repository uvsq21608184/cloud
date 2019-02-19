/**
 *
 * cookies
 *
 * @param  {string} string
 *
 */
define(['jquery'], function($) {
    
    var $target = $('.backToTop');

    $target.on('click',function () {
        $('html,body').animate({
                scrollTop: 0
            }, 1200);
    });
 
});