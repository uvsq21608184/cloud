/**
 *
 * layer.lang
 *
 * @param  {string} string
 *
 */
define(['jquery'], function($) {

    function BrowserDetection() {

    //Check if browser is Opera or not
    if (navigator.userAgent.search("Opera") >= 0 || $('html').hasClass('ie8'))  {
            $('body').addClass('layer-update-open');
            $('nav').hide();
        }
    }

    $('.Update-navigateur__close').on('click',function () {
        $('.layer-update-open').removeClass('layer-update-open');
    });
    
    BrowserDetection ();

    

});