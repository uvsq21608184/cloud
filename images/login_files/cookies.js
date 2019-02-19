/**
 *
 * cookies
 *
 * @param  {string} string
 *
 */
define(['jquery'], function($) {
    var $body = $('body'),
        $cookies = $('.Cookies'),
        $cookiesDetails = $('.Cookies-detail');

    //$body.addClass('cookies-layer-opened');

    $('.Cookies__close').on('click',function () {
        $body.removeClass('cookies-layer-opened cookies-layer-opened-more');
        setTimeout(function() {
            $(window).resize();
        });
    });

    /*
    * Desactivate layer, replaced by direct link : JIRA ADPREBII-33

    $('.Cookies').find('.Link-more').on('click',function () {
        $body.addClass('cookies-layer-opened-more');
    });
    */
    $('.Cookies-detail__close').on('click',function () {
         $body.removeClass('cookies-layer-opened-more');
    });

    function resizeCookiesDetail() {
        $cookiesDetails.css('max-height', window.innerHeight - $cookies.height());
    }
    $(document).ready(function() {
        resizeCookiesDetail();
    });

    $(window).resize(resizeCookiesDetail);
});
