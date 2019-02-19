
define(['jquery'], function($) {

    $(document).ready(function() {
        $('.othersites-palm > ul').each(function() {
            var $this = $(this);

            $this.children().first().click(function() {
                $this.toggleClass('height-auto');
                window.scrollTo(0, $(document).height());
            });
        });
    });

});