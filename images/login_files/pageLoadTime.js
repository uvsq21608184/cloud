

(function() {
    window.onload = function() {
        var i, len = pageLoadTimeListeners.length;

        // Performance API is not available in safari
        if ((!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) && (typeof performance.now !== 'undefined')) {
            pageLoadTime = performance.now();
        } else {
            pageLoadTime = 0;
        }

        for( i = 0; i < len; i++ ) {
            pageLoadTimeListeners[i](pageLoadTime);
        }
    };


    var pageLoadTime,
        pageLoadTimeListeners = [];

    function onPageLoadTime(cb) {
        if( typeof pageLoadTime !== "undefined" ) {
            cb(pageLoadTime);
        } else {
            pageLoadTimeListeners.push(cb);
        }
    }

    if( typeof define !== "undefined" ) {
        define('onPageLoadTime', function() {
            return onPageLoadTime;
        });
    } else {
        window.onPageLoadTime = onPageLoadTime; 
    }

})();
