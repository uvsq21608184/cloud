/**
 * carrousel-minilist
 */
 
define(['jquery','hammer'], function($,Hammer) {
    /**
     * Add the function to jQuery for chaining
     * @return {Object}         Instanciate new one
     */
    $.fn.carrouselMiniList = function (options) {
        var CarrouselMiniList = function () {
            return this.init.apply(this, arguments);
        };
        CarrouselMiniList.prototype = {
            init: function (element, options) {
                //this.options = $.extend(true, {}, this.options, options);
    
                this.$wrapper = $(element);
                this.$ulContent = this.$wrapper.find('.Carrousel__minilist--content');
                this.$ulDots = this.$wrapper.find('.Carrousel__minilist--pagination');
    
                this.totalDots = this.$ulContent.find('li').length;
                this.numPos = 0;
                this.addEvents();
            },
            addEvents: function() {
                var _this = this;
                this.$ulDots.on('click', function(e) {
                    var $thatUl = $(this),
                        $thatLis = $thatUl.find('li'),
                        eTarget = $(e.target),
                        $target = ( eTarget.is('button') ) ? eTarget : false;
                    if($target && typeof $target === 'object') {
                        // get index
                        _this.prevPos = _this.numPos;
                        _this.numPos = $thatLis.index( eTarget.parent('li') );
                        // run slide
                        _this.doSlide();
                    }
                });
                // swipe
                //
                _this.$ulContent.find('li').map(function(i, elt) {
                    var that = this;
                    Hammer(elt).on("dragleft", function(event) {
                       
                        event.gesture.preventDefault();
                        event.gesture.stopDetect();
                        event.stopPropagation();
                        if(_this.numPos+1 < _this.totalDots) {
                            _this.prevPos = _this.numPos;
                            _this.numPos += 1;
                            _this.doSlide();
                        }
                    }).on("dragright", function(event) {
                        event.gesture.preventDefault();
                        event.gesture.stopDetect();
                        event.stopPropagation();
                        if(_this.numPos != 0) {
                            _this.prevPos = _this.numPos;
                            _this.numPos -= 1;
                            _this.doSlide();
                        }
                    });
                });
            },
            updateDots: function() {
                this.$ulDots.find('li').eq(this.prevPos).find('button').removeClass('selected');
                this.$ulDots.find('li').eq(this.numPos).find('button').addClass('selected');
            },
            doSlide: function() {
                this.updateDots();
                this.$ulContent.removeClass('left-'+this.prevPos).addClass('left-'+this.numPos);
            }
        };
        this.each(function () {
            $(this).data('carrouselMiniList', new CarrouselMiniList(this, options));
        });
    };
});