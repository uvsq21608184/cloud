/**
 *
 * prefix webkit module
 *
 * @param  {string} string
 *
 */
define( function() {
    /**
     * choix de la langue
     */
    var css3prefix = (function () {
        if( window.getComputedStyle ) {
            var styles = window.getComputedStyle(document.documentElement, ''),
            pre = (Array.prototype.slice
               .call(styles)
               .join('') 
               .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
                )[1];
            return '-' + pre + '-';
            } else {
         return '';
     }
    })();
    return css3prefix;
});