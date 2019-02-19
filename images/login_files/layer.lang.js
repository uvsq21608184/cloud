/**
 *
 * layer.lang
 *
 * @param  {string} string
 *
 */
define(['jquery', 'transitionEvents', 'css3prefix'], function($, Hammer, css3prefix) {



    $(document).ready(function() {
        var $body = $('body'),
            $main = $('.main, .Main'),
            $topLayer = $('.top-layer'),
            $connectLayer = $('.connect-layer'),
            $langToggle = $('.lang-toggle'),
            $langClose = $('.lang-close'),
            $connectToggle = $('.connect-toggle'),
            $airportToggle = $('.airport-toggle'),
            $connectClose = $('.connect-close'),
            $airportClose = $('.airport-close'),
            $nav = $('.NavB__content--n1');

        if( window.CURRENT_MQ == "desk" ) {
            $(window).scroll(function() {
                if (!Modernizr.touch) {
                    if( $body.hasClass('connect-layer-opened' )  || $body.hasClass('lang-layer-opened' ) || $body.hasClass('layer-update-open' )  || $body.hasClass('airport-layer-open' ) ) {
                        setTimeout( "$nav.css('height','110%')",500 ); //omg
                    };
                    $body.removeClass('connect-layer-opened layer-update-open lang-layer-opened airport-layer-open');
                }
            });
        };
        $topLayer.on('touchstart touchmove', function(e) {
            // e.preventDefault();
            e.stopPropagation();
        });

        if( window.CURRENT_MQ == "palm" ) {
            $('.home').on('touchstart touchmove', function(e) {
                // debugger;
                if( $body.hasClass('connect-layer-opened') || $body.hasClass('lang-layer-opened') || $body.hasClass('airport-layer-opened') ) {
                    e.preventDefault();
                }
            });
        }

        $langToggle.click(function (e) {
            e.preventDefault();
            $nav.removeAttr('style');
            $body.toggleClass('lang-layer-opened');
            $body.removeClass('connect-layer-opened layer-update-open airport-layer-opened');
        });

        $langClose.click(function() {
            $body.removeClass('lang-layer-opened');
        });

        $connectToggle.click(function() {
            $nav.removeAttr('style');
            /*if( $body.hasClass('connect-layer-opened') ) {
                topLayer.close();
            } else {
                topLayer.open();
            }*/
            $body.toggleClass('connect-layer-opened');
            $body.removeClass('lang-layer-opened airport-layer-opened');
        });

        $connectClose.click(function() {
            $body.removeClass('connect-layer-opened');
            /*topLayer.close();*/
        });

        $airportToggle.click(function() {
            $nav.removeAttr('style');
            /*if( $body.hasClass('airport-layer-opened') ) {
                topLayer.close();
            } else {
                topLayer.open();
            }*/
            $body.toggleClass('airport-layer-opened');
            $body.removeClass('lang-layer-opened connect-layer-opened');
        });

        $airportClose.click(function() {
            $body.removeClass('airport-layer-opened');
            /*topLayer.close();*/
        });

        var topLayer = {
            isFullscreenMode: function() {
                return !$.desk() && window.innerHeight < 856;
            },
            updateHeight: function() {
                if( this.isFullscreenMode() ) {
                    $connectLayer.height(window.innerHeight - 45);
                    if( $body.hasClass('connect-layer-opened') || $body.hasClass('airport-layer-opened') ) {
                        this.open();
                    }
                }
            },
            open: function() {
                // debugger;
                if( this.isFullscreenMode() ) {
                    $main.css(css3prefix+'transform', 'translateY('+(window.innerHeight)+'px)');
                }
            },
            close: function() {
                if( this.isFullscreenMode() ) {
                    $main.css(css3prefix+'transform', '');
                }
            }
        };

        /*topLayer.updateHeight();
        $(window).resize(function() {
            topLayer.updateHeight();
        });*/

    });

});