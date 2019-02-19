/**
 *
 * toggle
 *
 * @param  {string} string
 *
 */
define(['jquery'], function($) {

    

        var $toggle = $('.Toggle');

        $toggle.each(function() {

            var $toggle = $(this),
                toggleOffestTop,
                $toggleClose = $toggle.find('.Toggle__wrap-close'),
                $ToggleHide = $toggle.find('.Toggle__wrap-hide'),
                $ToggleHideHeight = [];

            // calcul height toggle memory in tab
            var calculHeightToggleHide = function () {
                $ToggleHide.each(function() {
                    var $this = $(this);

                    $ToggleHideHeight.push($this.innerHeight());
                    if(!$this.hasClass('Toggle__wrap-hide--on')) {
                        $this.css('height',0);
                        falsePlaceToggle(this);
                    }
                });
                //console.log($ToggleHideHeight);
            }

            // move content toggle in window
            var placeToggle = function () {
                $ToggleHide.removeClass('Toggle__wrap-hide--off');
                $ToggleHide.addClass('Toggle__wrap-hide--on');
            }

            // move content toggle out window
            var falsePlaceToggle = function (target) {
                $(target).addClass('Toggle__wrap-hide--off');
                $(target).removeClass('Toggle__wrap-hide--on');
            }

            // open toggle au clic
            var openToggle = function (target, index) {
                if($(target).next().hasClass('Toggle__wrap-hide--open')) {
                    $(target).removeClass('Toggle__wrap-close--open');
                    $(target).next().removeClass('Toggle__wrap-hide--open');
                    $(target).next().css('height',0);
                }
                else {
                    $(target).addClass('Toggle__wrap-close--open');
                    $(target).next().addClass('Toggle__wrap-hide--open');
                    $(target).next().css({
                      "height": $ToggleHideHeight[index]
                    });
                    toggleOffestTop= $(target).offset().top;
                    setTimeout(function() {
                        $('html, body').animate({ scrollTop: toggleOffestTop -100 }, 300);
                    }, 300);
                }
            }

            // open single toggle once
            var openSingleToggle = function (target, index) {
                if($(target).next().hasClass('Toggle__wrap-hide--open')) {return;}
                $toggleClose.removeClass('Toggle__wrap-close--open');
                $(target).addClass('Toggle__wrap-close--open');
                $(target).next().addClass('Toggle__wrap-hide--open');
                $(target).next().css({
                  "height": $ToggleHideHeight[index]
                });
            }

            // events
            if ($toggle.find('.js-toggle').length) {
                /* single toggle - Footer */
                $toggle.find('.js-toggle').on('click', function() {
                    //e.preventDefault();
                    setTimeout(placeToggle);
                    openToggle($toggleClose,0);
                });
            } else {
                /* multiple toggles */
                $toggle.on('click','.Toggle__wrap-close', function () {
                    var index  = $toggle.find('.Toggle__wrap-close').index( this ),
                        parent = $(this).parents('.Toggle');

                    if(parent.hasClass('Toggle__v2--upper')) {
                        parent.next().toggleClass('Toggle__wrap-hide--open');
                    }
                    setTimeout(placeToggle);
                    openToggle(this,index);

                });
            }

            calculHeightToggleHide ();


            // on risize calcul the new height and move content toggle
            $( window ).resize(function() {
              $ToggleHide.css('height','auto');
              //$ToggleHideHeight = [];
              setTimeout(calculHeightToggleHide);
            });
        });

});