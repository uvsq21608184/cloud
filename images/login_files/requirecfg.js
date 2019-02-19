// requirejs / r.js config
require.config({
    baseUrl: '/Adp.IdentityFederation.Web/content/js',
    paths: {
        jquery: 'vendor/jquery.min', //['//code.jquery.com/jquery-1.11.1.min', 'vendor/jquery.min'],
        validate: 'vendor/jquery.validate', //['//ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min', 'vendor/jquery.validate'],
        transitionEvents: '../custom/transition-events',
        hammer: '../custom/hammer.min',
        underscore: 'vendor/underscore-min',
        l33teral: 'vendor/l33teral',
        salvattore: 'vendor/salvattore.min',
        masonry: 'vendor/masonry.pkgd.min',
        imagesloaded: 'vendor/imagesloaded.pkgd.min',
        iscroll: 'vendor/iscroll-lite',
        tween: '../custom/tween.min',
        mina: '../custom/snap.svg-min',
        svgIcon: '../custom/svgicons',
        bandwidth: 'lib/root.getBandwidth',
        browser: 'lib/root.getBrowser',
        css3prefix: 'lib/css3prefix',
        'svg-pan-zoom': 'lib/svg-pan-zoom',
        jqueryui: '../custom/jqueryui/jquery-ui',
        jqueryuii18n: '../../Scripts/jquery-ui-i18n.min'
    },
    waitSeconds: 15,
    shim: {
        validate: {
            deps: ['jquery'],
            exports: 'validate'
        },
        transitionEvents: {
            deps: ['jquery'],
            exports: 'transitionEvents'
        },
        l33teral: {
            deps: ['underscore'],
            exports: 'l33teral'
        },
        jqueryui: {
            deps: ['jquery'],
            exports: 'jqueryui'
        },
        hammer: {
            deps: ['jquery'],
            exports: 'hammer'
        },
        svgIcon: {
            deps: ['mina'],
            exports: 'svgIcon'
        },
        tween: {
            exports: 'Tween'
        },
        underscore : {
            exports: '_'
        },
        jqueryuii18n: {
            deps: ['jqueryui'],
            exports: 'jqueryuii18n'
        }
    }
});

