/**
 * == form.select-anchor
 */
define(['jquery'], function($) {

   if(window.CURRENT_MQ === 'palm' || window.CURRENT_MQ === 'lap') {      
        // link menu special mobile
        $('.Breadcrumb').on('click', function() {
            $(this).toggleClass('list-showed');
        });
    }


});