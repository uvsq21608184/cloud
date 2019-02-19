// each page requires the common module
require([
    'jquery',
    'common-fid',
    'lib/jquery.carrousel-worldwide'
], function () {
    var $basic = $('[basic-id]'),
        $closeRoads = $('.Roadmap__block').find('button');

    function findRowToInsert (el, event) {
        var node = event.target.nodeName.toLowerCase(),
            currentIdBlock;

        if (node === 'button') {
            currentIdBlock = $(el).parents('[road-id]').attr('road-id');
        } else {
            currentIdBlock = $(el).attr('basic-id');
        }

        if (window.CURRENT_MQ === 'desk') {
            // block numburering starts at 0
            if (currentIdBlock < 3) {
                return 2;
            } else {
                return 5;
            }
        } else {
            if (currentIdBlock < 3) {
                return 1;
            } else if(currentIdBlock == 3 || currentIdBlock == 4) {
                return 3;
            } else {
                return 5;
            }
        }

    }

    $basic.each(function () {
        var data = [],
            _this = this,
            id = $(_this).attr('basic-id');

        $('[road-id="'+id+'"]').each(function() {
            data.push($(this));
            $(_this).data('roadBlock', data);
        });

        $(this).on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            $('[basic-id]').not(this).removeClass('open');
            $(this).toggleClass('open');
            $('.items-js .Roadmap__block').remove();

            if ($(this).is('.open')) {
                // display first item in dataset
                if ($(this).data('roadBlock')) {
                    var clone = $(this).data('roadBlock')[0].clone(true);
                    clone.insertAfter($('.Basic-push__box').eq(findRowToInsert(this, e))).attr('index', 0);
                }
            }
        });
    });
    // store dataset of all Roadmap blocks as an array
    $closeRoads.each(function () {
        $(this).on('click', function (e) {
            var parentEl =  $(this).parents('[road-id]'),
                currentIndex = parseInt(parentEl.attr('index')),
                id = parentEl.attr('road-id'),
                blockSet = $('[basic-id="'+id+'"]').data('roadBlock');

                parentEl.remove();

            // if block exists at index
            if (blockSet[currentIndex + 1]) {
                blockSet[currentIndex + 1].clone(true).insertAfter($('.Basic-push__box').eq(findRowToInsert(this, e))).attr('index', currentIndex + 1);
            } else {
                // loop
                blockSet[0].clone(true).insertAfter($('.Basic-push__box').eq(findRowToInsert(this, e))).attr('index', 0);
            }
        });
    });

    $('.ui-selectmenu-button').on('click',function(){
        var $el = $(this).prev();
        /*if ($el.is('select')) {
            $el.selectmenu( "refresh" );
        }*/
    });
});
