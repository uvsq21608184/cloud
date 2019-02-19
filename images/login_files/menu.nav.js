/**
 *
 * menu.pushMenu
 *
 * @param  {string} string
 *
 */

define(['jquery', 'hammer', 'transitionEvents', 'iscroll'], function($, Hammer) {

    var navOpened = false,
        isHalf = false;/*,
        openBurger,
        close;*/

        // ============== No time to make beautifull JS, please don't be cruel !
    // -- Temp!! toggle nav
    var $body = $('body'),
        $navclic = $('.js-nav-toggle'),
        $navLeft = $('.NavB__content'),
        $navPushMenu = $('.Nav__pushMenu'),
        $leftButtons = $navLeft.find('.NavListB__btn--n0'),
        $navULMenu = $navLeft.find('.NavListB__menu'),
        $BtnBack = $navLeft.find('.btn-rewind'),
        $BtnBack_n0 = $navLeft.find('.btn-rewind--n0'),
        $BtnBack_n1 = $navLeft.find('.btn-rewind--n1'),
        $main = $('main'),
        $mainOverlay = $('.main-overlay'),
        $header = $('.js-header-swipe'),
        nestedLevel = 0,
        clickEvent = $.Event( "click"),
        $btnclose = $(".btn-close");


    $btnclose.on('click', function(){
        console.log("click", this);
        $(this).parent().hide();
    });



    // Wifi pages require that the menu is visible on desktop
    if ((!$navLeft.hasClass('NavB--wifi')) || ($navLeft.hasClass('NavB--wifi') && ($.palm())) || $.lap()) {
        
        $navclic.on('click', function(e) {
            if( $(this).parent().is('.Nav__item') ) {
                // clic on floating pushmenu
                $('.NavListB .NavPan__n0').removeClass('showed');
                $('.NavListB > li').removeClass('selected').eq( $('.Nav li').index( $(this).parent('.Nav__item') ) )
                    .addClass('selected').find('.NavPan__n0').addClass('showed');
                toogleStates();
            } else if( $(this).hasClass('btn-rewind') ) {
                // header leftmenu top button
                if(nestedLevel > 0) {
                    if(nestedLevel === 1) {
                        switchBtnBack('n0');
                        $navLeft.find('.NavPan__n0.sub-opened').removeClass('sub-opened');
                    }
                    $navLeft.find('.NavPan__nx.slided ').last().addClass('no-transition');
                    setTimeout(function() {
                        $navLeft.find('.NavPan__nx.slided ').last().removeClass('no-transition slided');
                    });
                    nestedLevel -= 1;
                } else {
                    toogleStates();
                }
            } else {
                if( window.CURRENT_MQ != "desk" ) {
                    $('.NavListB .NavPan__n0').removeClass('showed');
                }
                toogleStates();
                if(isHalf) {
                    $navULMenu.removeClass('half');
                }
            }
        });

        $('.js-remoteTrigger').on('click', function() {
            remoteClick($(this).parent('li').index());
        });

        function remoteClick($btnIndex) {
            toogleStates();
            clickEvent.target = $('.NavListB__category').eq($btnIndex).find('.NavListB__btn--n0');
            $navULMenu.trigger(clickEvent);
        }

        function getSubmenuPanelOnFocus() {
            var $focusedPan = $('.NavPan.focused'),
                $currentPan = $focusedPan,
                popped,
                promises = [],
                buttonsToTrigger = [];

            // debugger;
            buttonsToTrigger.push($focusedPan.parent());

            while( $currentPan.hasClass('NavPan__nx') ) {
                buttonsToTrigger.push($currentPan.prev());
                $currentPan = $currentPan.parents('.NavPan').first();
                $currentPan.addClass('no-transition');
            }

            buttonsToTrigger.push($currentPan.prev());

            while( buttonsToTrigger.length > 0 ) {
                promises.push(simulateClick(buttonsToTrigger.pop()));
            }

            $.when.apply($, promises).then(function() {
                $('.NavPan.no-transition').removeClass('no-transition');
            });
        }

        function simulateClick($btn) {
            var defer = $.Deferred();

            setTimeout(function() {
                clickEvent.target = $btn;
                $navULMenu.trigger(clickEvent);

                defer.resolve();
            });

            return defer;
        }

        function preventDefault(e) {
            e.preventDefault();
        }

        function toogleStates() {
            $navLeft.toggleClass('nav2-opened');
            $mainOverlay.toggleClass('showed');
            $navLeft.find('.NavPan__n0').removeClass('sub-opened');
            switchBtnBack('n0');
            navOpened = !navOpened;
            if(navOpened) {
                $navLeft.removeClass('NavB__content--closed');
                $navPushMenu.hide();
                if ($navULMenu.find('.focused').length === 1) {
                    getSubmenuPanelOnFocus();
                    $navULMenu.find('.focused').removeClass('focused');
                }
                setTimeout(function() {
                    if( Modernizr.touch ) {
                        if( !$.palm() ) {
                            $body.on('touchmove', preventDefault);
                        }
                        $body.css('overflow', 'hidden');
                    }
                    $leftButtons.removeAttr('disabled');
                    $('.Main, .mainpan').addClass('bezier');
                    $main.scrollTop(0);
                    $navLeft.afterTransition(function() {
                        $('.Main, .mainpan').removeClass('bezier');
                    });
                });
            } else {
                if( Modernizr.touch ) {
                    if( !$.palm() ) {
                        $body.off('touchmove', preventDefault);
                    }
                    $body.css('overflow', '');
                }
                $leftButtons.attr('disabled', 'disabled');

                $main.afterTransition(function() {
                    setTimeout(function() {
                        $navLeft.addClass('NavB__content--closed');
                        $navPushMenu.show();
                    });
                });
            }
        }


        // temp!
        $navULMenu.on('click', function(e) {
            var $this = $(this),
                $target = ($(e.target).is('.NavListB__btn--n0 div, .NavListB__btn--n0 span')) ? $(e.target).parents('.NavListB__btn--n0') : $(e.target),
                $targetParentLI = $target.parent('li'),
                indexRef = $targetParentLI.index(); //$navULMenu.find('> li').eq( $targetParentLI.index() );

            if ($target.is('.NavListB__btn--n0') && !$targetParentLI.hasClass('NavListB__category--color-wifi')) {
                // button changes
                $('.NavListB__category').removeClass('selected'); // remove all
                $navULMenu.find('> li').eq(indexRef).addClass('selected'); // add to selected one

                $this.find('.has-submenu .NavPan__nx').removeClass('slided');
                $this.find('.NavPan__n0').removeClass('sub-opened'); // reset sub-openeded's

                // Level 0 pan slide
                $('.NavPan__n0').removeClass('showed'); // remove for all
                $targetParentLI.find('.NavPan__n0').addClass('showed'); // add to the one

                //
                nestedLevel = 0;
                switchBtnBack('n0');

    //alert( $.palm() )
    // There is a bug with FF !? $.palm() and brothers always return false !!
    // And FF add quotes around string

                if( window.CURRENT_MQ === "palm" || window.CURRENT_MQ === "lap" ) {

                    $this.addClass('half');
                    isHalf = true;
                }

            }

            if( $target.is('.has-submenu button') ) {
                $target.parents('.NavPan__n0').addClass('sub-opened');
                $target.find('~ .NavPan__nx').addClass('slided');
                nestedLevel += 1;
                switchBtnBack('nx');

            }

        });

        if( Modernizr.touch ) {
            Hammer($header[0]).on('dragleft', function(event) { //alert('swipe')
                event.gesture.preventDefault();
                event.gesture.stopDetect();
                $navLeft.toggleClass('nav2-opened');
                $mainOverlay.toggleClass('showed');
                $navLeft.find('.NavPan__n0').removeClass('sub-opened');
                navOpened = !navOpened;
                $main.afterTransition(function() {
                    $navLeft.addClass('NavB__content--closed');
                });
            });
            Hammer($header[0]).on('dragright', function(event) { //alert('swipe')
                event.gesture.preventDefault();
                event.gesture.stopDetect();
                $navLeft.toggleClass('nav2-opened');
                $mainOverlay.toggleClass('showed');
                $navLeft.find('.NavPan__n0').removeClass('sub-opened');
                navOpened = !navOpened;
                $navLeft.removeClass('NavB__content--closed');
            });
        }

        function switchBtnBack(state) {
            if(state === 'n0') {
                $BtnBack_n0.closest('.btn-rewind').removeClass('arrow');
            } else {                
                $BtnBack_n0.closest('.btn-rewind').addClass('arrow');
            }
        }

        function readDeviceOrientation() {

            if(navOpened) {
                if( window.CURRENT_MQ != "desk" ) {
                    $('.NavListB .NavPan__n0').removeClass('showed');
                }
                toogleStates();
                if(isHalf) {
                    $navULMenu.removeClass('half');
                }
            }
        }
        window.onorientationchange = readDeviceOrientation;

        if( $.palm() ) {
            $('.NavPan').each(function(i, elt) {
                $(elt).height(window.innerHeight - 45);
                new IScroll(elt, {preventDefault: false});
                setTimeout(function() {
                    $navLeft.addClass('NavB__content--closed');
                });
            });
            $(window).resize(function() {
                $('.NavPan').each(function(i, elt) {
                    $(elt).height(window.innerHeight - 45);
                });
            });
        } else {
            $navLeft.addClass('NavB__content--closed');
        }


        return {
            //openHalf: openHalf,
            //openBurger: openBurger,
            //close: close,
            isOpened: function() {
                return navOpened;
            }
        };

        /*$('.Nav__item button').on('click', function() {

        });*/

        /*var navOpened = false,
            openHalf,
            openBurger,
            close;


        $(document).ready(function() {

            var $body = $('body'),
                $header = $('.Header__HP'),
                $main = $('.main'),
                $mainOverlay = $('.main-overlay'),
                $backnav = $('.Nav__back'),
                $BtnBack = $backnav.find('.btn-back'),
                $BtnBack_n0 = $backnav.find('.btn-back--n0'),
                $BtnBack_n1 = $backnav.find('.btn-back--n1'),
                $backnavRight = $('.Nav__back__right'),
                $backnavFirstLevel = $backnavRight.children('.Nav__back__right--wrapper').hide(),
                $backnavItems = $('.Nav__back__left .Nav__item'),
                $backnavOverlay = $('.Nav__back__overlay'),
                $navItems = $('.Nav__pushMenu .Nav__item'),
                $palmNav = $('.Nav__push__palm'),
                $palmNavItems = $('.Nav__push__palm .Nav__item'),
                $nav = $('.Nav__pushMenu'),
                $currentSelectedItem,
                $currentSelectedBackNav;

            $backnavItems.each(function(i, elt) {
                var $this = $(this);
                $this.click(function() {
                    if( $currentSelectedItem ) {
                        $currentSelectedItem.removeClass('selected');
                        $currentSelectedBackNav.removeClass('active');
                        $currentSelectedBackNav.afterTransition(function() {
                            var $prevSelectedBackNav = $currentSelectedBackNav.hide();
                            $currentSelectedBackNav = $($backnavFirstLevel[i]).show();
                            setTimeout(function() {
                                $currentSelectedBackNav.addClass('active');
                                $currentSelectedBackNav.afterTransition(function() {
                                    resetNestedBacknav($prevSelectedBackNav);
                                });
                            });
                        });
                    }
                    $this.addClass('selected');
                    $currentSelectedItem = $this;
                    switchBtnBack('n0');
                });
            });
            $navItems.each(function(i, elt) {
                $(this).click(function() {
                    $backnav.show();
                    $mainOverlay.show();
                    setTimeout(function() {
                        $currentSelectedItem = $($backnavItems[i]).addClass('selected');
                        $body.addClass('nav-opened');
                        // $main.afterTransition(function() {
                            // $main.css('overflow', 'hidden');
                        // });
                        navOpened = true;
                        $currentSelectedBackNav = $($backnavFirstLevel[i]).show();
                        setTimeout(function() {
                            $currentSelectedBackNav.addClass('active');
                        });
                    });
                });
            });

            $palmNavItems.each(function(i, elt) {
                $(this).click(function() {
                    $currentSelectedBackNav = $($backnavFirstLevel[i]).show().addClass('active no-transition');
                    setTimeout(function() {
                        $currentSelectedBackNav.removeClass('no-transition');
                        $body.removeClass('nav-half-opened').addClass('nav-opened');
                        // $main.afterTransition(function() {
                            // $main.css('overflow', 'hidden');
                        // });
                        navOpened = true;
                        $palmNav.afterTransition(function() {
                            setTimeout(function() {
                                $currentSelectedItem = $($backnavItems[i]).addClass('selected');
                            });
                        });
                    });
                });
            });

            openBurger = function() {
                if( navOpened ) {
                    close();
                } else {
                    openHalf();
                }
            }
    /*
            if( 'ontouchstart' in document.documentElement ) {
                $('.header-burger').on('touchstart', openBurger);
            } else {
                $('.header-burger').on('click', openBurger);
            }
    */
            // seems buggy touchstart on Nexus ? Removing if else above resolve problem...
      /*      $('.header-burger').on('click', openBurger);
            //
            //
            var $activeNestedNavStack = [];
            $('.Nav__back__right--wrapper').each(function() {
                var $this = $(this),
                    //$overlay = $this.children('.Nav__back__overlay'),
                    $nestedNavs = $this.children('.Nav__back__right--nested');
                $this.children('.togglable').each(function(i, elt) {
                    $(this).click(function() {
                        //$backnavOverlay.show();
                        switchBtnBack();
                        setTimeout(function() {
                            $activeNestedNavStack.push($($nestedNavs[i]).addClass('active'));
                            $this.addClass('inactive');
                        });
                    });
                });
                $BtnBack.click(function(e) {
                    e.stopImmediatePropagation();
                    var nestedLevel = $activeNestedNavStack.length;
                    if( nestedLevel > 0 ) {
                        if(nestedLevel === 1) {
                            switchBtnBack('n0');
                        }
                        $activeNestedNavStack.pop().removeClass('active');
                    } else {
                        close();
                    }
                    $this.parent().removeClass('inactive');
                    //var $overlay = $this.parent().children('.Nav__back__overlay');
                    /*$backnavOverlay.afterTransition(function() { console.log('hide')
                        $backnavOverlay.hide();
                    });*/
       /*         });
            });

            function switchBtnBack(state) {
                if(state === 'n0') {
                    $BtnBack_n0.removeClass('hidden');
                    $BtnBack_n1.addClass('hidden');
                } else {
                    $BtnBack_n0.addClass('hidden');
                    $BtnBack_n1.removeClass('hidden');

                }
            }

            function resetNestedBacknav($backnav) {
                if(typeof $backnav !== 'undefined') {
                    $backnav.addClass('no-transition');
                    $backnav.find('.active').removeClass('active');
                    $backnav.removeClass('inactive').find('.inactive').removeClass('inactive');
                    $backnavOverlay.hide();
                    setTimeout(function() {
                        $backnav && $backnav.removeClass('no-transition');
                    });
                }
            }

            openHalf = function() {
                $backnav.show();
                setTimeout(function() {
                    $body.addClass('nav-half-opened');
                    $palmNav.addClass('no-transition');
                    // $main.afterTransition(function() {
                    //     $main.css('overflow', 'hidden');
                    // });
                    $nav.addClass('nav-hidden');
                    navOpened = true;
                    setTimeout(function() {
                        $palmNav.removeClass('no-transition');
                    });
                });
            };

            close = function() {
                // $main.css('overflow', 'visible');
                $body.removeClass('nav-opened').removeClass('nav-half-opened');
                $palmNav.addClass('no-transition');
                $nav.toggleClass('nav-hidden', $(window).scrollTop() > 0 );
                $main.afterTransition(function() {
                    $palmNav.removeClass('no-transition');
                    $currentSelectedItem && $currentSelectedItem.removeClass('selected');
                    $currentSelectedBackNav && $currentSelectedBackNav.removeClass('active');
                    $currentSelectedBackNav && $currentSelectedBackNav.hide();
                    resetNestedBacknav($currentSelectedBackNav);
                    $backnav.hide();
                    navOpened = false;
                });
                $mainOverlay.afterTransition(function() {
                    $mainOverlay.hide();
                });
                $currentSelectedItem = undefined;
            };

            // fixe la fermeture du menu quand on clic en dehors.
            $mainOverlay.click(close);

            $body.on('mousewheel', function(e) {
                if( navOpened ) {
                    e.preventDefault();
                }
            });

            $main.on('touchstart touchend touchmove scroll', function(e) {
                $nav.toggleClass('nav-hidden', $('.main').scrollTop() > 0 );
            });

            if( Modernizr.touch ) {
                Hammer($header[0]).on('dragleft', function(event) {
                    event.gesture.preventDefault();
                    event.gesture.stopDetect();
                    navOpened && close();
                });
                Hammer($header[0]).on('dragright', function(event) {
                    event.gesture.preventDefault();
                    event.gesture.stopDetect();
                    !navOpened && openHalf();
                });
            }

        });

        return {
            openHalf: openHalf,
            openBurger: openBurger,
            close: close,
            isOpened: function() {
                return navOpened;
            }
        };*/
    }
});
