/**
 * == Select custom
 */
define([
    'jquery', 
    'lib/root.mediaquery',
    'jqueryui'
], function(
       $
) {

    $(document).ready(function() {
        
        $('.Deco__extLinks').on('change', function() {
            
            var url = $(this).val();
            
            if (this.selectedIndex != 0) {
                
                window.open(url, '_self');
                
            }
            
            return false;
            
        });
        
    });

    
    // Set all .selectcustom to jQueryUI selectmenu
    $(".selectcustom").selectmenu({
        position: {
            collision: "fit"
        }
    });
    
    
    // SW - Not sure why the arrow isn't added using the Sass mixin arrow() but have left this for the time being
    $('.ui-selectmenu-button').on('click', function() {
        
        var selectId = $(this).prev('.selectcustom').attr('id'),
            $relatedMenuHolder = $('#' + selectId + '-menu').parent('.ui-selectmenu-menu'),
            widthSelect = $(this).width(),
            leftSelect = (90 * widthSelect / 100);
                
        if ($relatedMenuHolder.find('.arrowTop-select').length === 0) {
                    
            if ($(this).prev('.selectcustom').hasClass('arrow-left')) {
            
                leftSelect = 11;
                
            }
            
            $relatedMenuHolder.append('<div class="arrowTop-select"></div>');
            $relatedMenuHolder.find('.arrowTop-select').css('left', leftSelect);
            
        }
        
    });
    
    
    if ($('.selectcommun').length) {
        
        $('.ui-widget-content').addClass('absolute');
        
    }

    
    //select custom du footer avec lien
    if ($('.selectLink').length) {

        var value,
            tabLink = [],
            oldTop,
            oldLeft,
            newTop,
            newLeft,
            index,
            link;

        $('.selectmenu.selectLink').find('~ .ui-selectmenu-button').on('click', function() {
            
            var option = $('.ui-selectmenu-open'),
                nbOption = $('.ui-selectmenu-open').find('.ui-menu-item').length;
            
            if (option.find('.ui-menu-item').length > nbOption - 1) {
                
                option.find('.ui-menu-item').eq(0).hide();
                
            }

            
            //on set top des option
            if (typeof oldTop === "undefined") {
                
                oldTop = option.css('top').match(/\d+/g);
                oldLeft = option.css('left').match(/\d+/g);
                
            }

            
            newTop = oldTop - 50;
            newLeft = oldLeft - 50;
            option.css({
                "top": newTop,
                "left": newLeft
            });
            
            if ($('.ui-selectmenu-open .arrowTop-select').length == 1) {
                
                $('.ui-selectmenu-open .arrowTop-select').remove();
                
            }
            
            
            //add arrow
            $('.ui-selectmenu-menu').append('<div class="arrowBottom-select"></div>');
            
            
            //get value option
            $('.selectmenu.selectLink').find('option').each(function() {
                
                value = $(this).attr('value');
                tabLink.push(value);
                
            });

            
            //on attribu un index au option
            $('.ui-menu-item').off('click').on('click', function() {
                
                index = $('.ui-menu-item').index(this);
                link = tabLink[index];
                window.open(link, '_self');
                
            });

        });

    }

    // useless because set above already
    /*    
    if( (window.CURRENT_MQ == "palm") || (window.CURRENT_MQ == "lap") ) {
        $('.selectLink').change(function(event) {
            var value = $(this).val();
            window.open(value);
        });
    }*/

});
