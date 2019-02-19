require([
	'jquery'
], function () {
    $.fn.tooltip = function(){        
        $(this).each(function(i){
            var $this = $(this),
                htmlTooltip = '<span class="contentTitle">&nbsp;</span>',                
                legend = $this.attr("title"),
                speed = 200;
            
            $this.removeAttr('title').append(htmlTooltip).children('.contentTitle').hide().parent().on({
                mouseover : function(){
                    $this.mousemove(function(e){
                        var $contentTitle = $('.contentTitle',$this),
                            positionTooltip = {
                                display:'block',
                                left : e.pageX - Math.round($this.offset().left) ,
                                top : e.pageY - Math.round($this.offset().top) - (($contentTitle.outerHeight(true) + parseInt(window.getComputedStyle($contentTitle[0], ':before').getPropertyValue('height')) + 10))
                            };
                        $contentTitle.css(positionTooltip);
                    });
                },
                mouseout : function(){
                    var positionTooltip = {
                        display:'none',
                        top : -50000,
                        left : -50000
                    };
                    $('.contentTitle',$this).css(positionTooltip);
                }
            }).children('.contentTitle').text(legend);
        });
    }
});