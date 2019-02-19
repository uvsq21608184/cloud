/**
 *
 * toggle.list
 *
 * @param  {string} string
 *
 */
define(['jquery'], function($) {

    $('.List').each(function() {

        var $parentList = $(this).find('.List__item'),
            isOpened = false;

        function toggleList() {
            if ($parentList.children().length > 3) {
                if (!isOpened) {
                    $parentList.height(3 * 65);
                } else {
                    $parentList.height($parentList.children().length * 65);
                }
            }
            isOpened = !isOpened;
        }

        if( $parentList.children().length > 3 ) {
            toggleList();
        } else {
            $(this).find('.js-list-plus').hide();
        }

        $(this).on('click', function(e) {
            var $target = ($(e.target).is('.js-list-plus span')) ? $(e.target).parents('.js-list-plus') : $(e.target);

            if ($target.is('.js-list-plus')) {

                toggleList();

                $target.toggleClass('icon-less');
                $target.find('span').eq(0).toggleClass('showed')
                $target.find('span').eq(1).toggleClass('showed')
            }
        })

    });

});