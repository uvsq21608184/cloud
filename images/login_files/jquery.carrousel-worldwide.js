/**
 *
 * choix de la langue jquery module
 *
 * @param  {string} string
 *
 */

define(['jquery', 'css3prefix', 'hammer'], function($, css3prefix, Hammer) {

    /**
     * carousel
     */
     $('.Carrousel--worldwide').each(function() {

        var mainCarrousel = $(this),
            indexAuto = 1,
            statuIndexAuto = true,
            compt = 0,
            element = mainCarrousel.find('.Carrousel__content__li'),
            nbLi = element.length,
            paginate = mainCarrousel.find('.Carrousel__paginate'),
            links = mainCarrousel.find('.Carrousel__links'),
            linksAnchor = links.find('li'),
            carrousel = mainCarrousel.find('.Carrousel__content'),
            extra = mainCarrousel.find('.Carrousel__extra'),
            baseWidth = mainCarrousel.width(),
            widthUl = (baseWidth) * (nbLi);

        var initCarousel = function() {
            carrousel
                .removeAttr('style')
                .width(widthUl)
                .find('li')
                .removeAttr('style')
                .width(baseWidth);
        };

        var makePaginate = function() {
            var i,
                nbPuce = nbLi;

            paginate.empty();

            for (i = 0; i < nbPuce; i++) {
                $('<li><button title="' + (i + 1) + '"></button></li>').appendTo(paginate);
            }

            paginate.find('button').eq(0).addClass('selected');
            linksAnchor.eq(0).addClass('selected');
            extra.insertBefore(mainCarrousel);
        };

        // Translation des LI en css3
        var moveCarrousel = function(index) {
            var valueTranslate = baseWidth * index;

            linksAnchor.removeClass('selected').eq(index).addClass('selected');
            paginate.find('button').removeClass('selected').eq(index).addClass('selected');

            carrousel.css(css3prefix + 'transform', 'translateX(' + (-valueTranslate) + 'px)');

            if (indexAuto === (nbLi - 1)) indexAuto = 0; // on resete la variable si celle ci depasse le nombre de slide
            else indexAuto++;

            if (statuIndexAuto === false) compt = index;
            else compt = indexAuto;

        };

        element.each(function(i, elt) {
            var $this = $(this),
                mode =false,
                lnk = $this.find('a').attr('href'),
                title = $this.find('a').attr('title'),
                classes = mode !== undefined && mode ? $this.find('a').attr('class') : null;
            $this
                .attr('title', title)
                .addClass(classes)
                .on('click', function () {
                    if (classes && classes.indexOf('popUp') > -1) {
                        window.open(lnk, '');
                    } else {
                        window.location.href = lnk;
                    }
                });

            Hammer(elt).on('dragleft', function(event) {
                event.gesture.preventDefault();
                event.gesture.stopDetect();
                event.stopPropagation();
                clearInterval(AutoView);
                var i = $(this).index();
                if (i < (nbLi - 1)) {
                    //(-1, because we start to count at 0)
                    moveCarrousel(i + 1, $('.Carrousel--worldwide').width());
                }

            }).on('dragright', function(event) {
                event.stopPropagation();
                event.gesture.stopDetect();
                event.stopPropagation();
                clearInterval(AutoView);
                var i = $(this).index();
                if (i > 0) {
                    moveCarrousel(i - 1, $('.Carrousel--worldwide').width());
                }
            });
            $(this).find('button').removeClass('selected');
        });


        var getIndexPaginate = function(elem) {
            var index = paginate.find('button').index(elem);
            moveCarrousel(index, baseWidth);
        };

        // Récupération de l'index de la bull cliquer
        paginate.on('click', 'button', function(e) {
            clearInterval(AutoView); // au clic sur la pagination on stop le défilement automatique du carousel
            e.preventDefault();
            getIndexPaginate($(this));
            statuIndexAuto = false;
        });

        $(window).resize(function() {
            initCarousel();
            makePaginate();
        });

        initCarousel();
        makePaginate();
        // link for extra layer on top of carousel
        linksAnchor.on('click', function() {
            clearInterval(AutoView); // au clic sur la pagination on stop le défilement automatique du carousel
            moveCarrousel($(this).index());
        });
        var AutoView = setInterval(function() {
            moveCarrousel(indexAuto);
        }, 5000);
     });

});
