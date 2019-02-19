//\\internetval-v1\c$\inetpub\wwwroot\ADP.Internet.Web\ADPInternetTheme\js
//The build will inline common dependencies into this file.

//Place any third party dependencies, like jQuery, in the lib folder.
require([
    'jquery',
    'lib/root.mediaquery',
    'lib/update_navigateur',
    'lib/breadcrumb',
    'lib/cookies',
    'lib/menu.nav',
    'lib/backToTop',
    'lib/layer.lang',
    'lib/toggle.list',
    'lib/toggle',
    'lib/jquery.openPopin',
    'lib/footer',
    'lib/jquery.tooltip', //@fix: tooltip is used inside but not called
    'lib/jquery.dotdotdot.min'
], function ($) {

    $(document).ready(function () {
        // display loader
        $.when($('.Wraploader').fadeOut('slow'))
            .then(function () {
                $('.Layout').addClass('okscroll');
            });

        // mobile select list
        var tabSelect = $('.js-tabs-onChange');
        if (tabSelect.length) {
            tabSelect.on('change', function () {
                window.location.href = this.value;
            });
        }

        //handle no placeholder browsers
        if (!Modernizr.input.placeholder) {
            $("input,textarea").each(function () {
                if ($(this).val() === "" && $(this).attr("placeholder") !== "") {
                    $(this).val($(this).attr("placeholder"));
                    $(this).focus(function () {
                        if ($(this).val() === $(this).attr("placeholder")) $(this).val("");
                    });
                    $(this).blur(function () {
                        if ($(this).val() === "") $(this).val($(this).attr("placeholder"));
                    });
                }
            });
        }
        setTimeout(function () {
            $("main").each(function () {
                var $target = $(this);
                var maxScroll = $target[0].scrollHeight - $target.height();
                $target.scrollTop(1);
                $target.on("scroll", function () {
                    if ($(this).scrollTop() === 0) {
                        $(this).scrollTop(1);
                    } else if ($(this).scrollTop() === maxScroll) {
                        $(this).scrollTop(maxScroll - 1);
                    }
                });
            });
        });

        $('.Alert').dotdotdot({watch: true});
    });


    // Make it safe to do console.log() always.
    (function (con) {
        var method;
        var dummy = function () {
        };
        var methods = ('assert,count,debug,dir,dirxml,error,exception,group,' +
        'groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,' +
        'time,timeEnd,trace,warn').split(',');
        while (method = methods.pop()) {
            con[method] = con[method] || dummy;
        }
    })(window.console = window.console || {});


    $('#resaParkingStep2 .listeCommande .checkbox input').on('change', function (e) {
        var input = $(this),
            speed = 200,
            fieldset = input.parent().next();
        if (input.is(':checked')) {
            fieldset.slideDown(speed);
        } else {
            fieldset.slideUp(speed);
        }
    }).parent().next().hide();


    var tableResponsive = $('*[id^=resaParking] table[class^=detail]'),
        titleTableResponsive = [],
        contenuCellule = [],
        cCellule = [],
        ccTd = [],
        ancreTableResponsive = [],
        elAction = "",
        btnAction = false,
        htmlTable = '';

    tableResponsive.each(function () {
        var table = $(this),
            ccTitle = [];
        $('th', table).each(function () {
            ccTitle.push($(this).text().trim());
        });

        titleTableResponsive.push(ccTitle);

        $('tr:gt(0)', table).each(function () {
            var tr = $(this);

            $('td', tr).each(function () {
                ccTd.push($(this).html());

                //gestion button
                var elCellule = [];
                if ($(this).find('a.action').length > 0) {
                    btnAction = true;

                    $(this).find('a.action').each(function (i) {
                        elCellule.push($(this).clone());
                    });

                    ancreTableResponsive.push(elCellule);
                }
                cCellule.push($(this).html());
                //fin de gestion button

            });
            contenuCellule.push(ccTd);
            ccTd = [];
        });
    });

    //Exkais-JS 25/02/2016 : Mise ee commentaire de la construction dynamique des tables Responsive.
    /*if (titleTableResponsive.length == 1) {
     for (var i = 0 ; i < contenuCellule.length ; i++) {
     htmlTable = '<div class="datasDetailResa pbm"><table class="responsive man">';
     for (var k = 0; k < contenuCellule[i].length ; k++) {
     htmlTable += '<tr>';
     htmlTable += '<th>'+ titleTableResponsive[0][k] +'</th><td>'+ contenuCellule[i][k] +'</td>';
     htmlTable += '</tr>';
     }
     htmlTable += '</table></div>';
     tableResponsive.before(htmlTable);
     }
     }else{
     for (var i = 0 ; i < titleTableResponsive.length ; i++) {
     htmlTable = '<div class="datasDetailResa pbm"><table class="responsive man">';

     for (var k = 0; k < contenuCellule[i].length ; k++) {
     htmlTable += '<tr>';
     htmlTable += '<th>'+ titleTableResponsive[i][k] +'</th><td>'+ contenuCellule[i][k] +'</td>';
     htmlTable += '</tr>';
     }

     htmlTable += '</table></div>';
     tableResponsive.eq(i).before(htmlTable);
     }
     }*/

    //Exkais-JS 25/02/2016 : Mise ee commentaire de la construction dynamique des tables Responsive.
    //ajout boutons action dans les tableaux (gestion button)
    /*if (btnAction) {
     $('.datasDetailResa tr td .action').remove();

     $('.datasDetailResa table').append('<tr><td colspan="2"></td></tr>');
     for (var i = 0 ; i < ancreTableResponsive.length ; i++) {
     for (var k = 0 ; k < ancreTableResponsive[i].length ; k++) {
     $('.datasDetailResa:eq('+i+') tr:last td').addClass('grid').append(ancreTableResponsive[i][k]);
     }
     }
     $('.datasDetailResa .suppr').text('Supprimer').addClass('btn info');
     $('.datasDetailResa .checkIcone').html('supprimer de la feuille de route').addClass('btn info');
     $('.datasDetailResa .plus').html('ajouter à la feuille de route').addClass('btn info');
     $('.datasDetailResa .ajout').html('feuille de route').addClass('btn info');
     $('.datasDetailResa .pdf').addClass('btn info');
     $('.datasDetailResa .edit').addClass('btn info');
     }*/

    if ($('table.responsive select').length > 0) {
      //  $("table.responsive .selectcustom").next().remove();
        $("table.responsive .selectcustom").selectmenu({
            position: {
                collision: "fit",
                at: "left"
            }
        });
    }

    var listeCommande = $('.listeCommande');
    $('.required input', listeCommande).on({
        'focus': function () {
            if ($(this).hasClass('error')) {
                $(this).removeClass('error').parent().removeClass('error');
                $(this).siblings('p.error').hide();
            }
        },
        'blur': function () {
            if ($('.checkbox input', listeCommande).is(':checked')) {
                if ($(this).hasClass('js-email') && !/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,}$/i.test($(this).val().trim())) {
                    $(this).addClass('error').parent().addClass('error');
                }
            }
            if ($('.checkbox input', listeCommande).is(':checked')) {
                if ($(this).hasClass('js-telephone') && !/^[0-9. -]{5,}$/i.test($(this).val().trim())) {
                    $(this).addClass('error').parent().addClass('error');
                }
            }

            if ($('.checkbox input', listeCommande).is(':checked')) {
                if ($(this).hasClass('js-societe') && !$(this).val().length) {
                    $(this).addClass('error').parent().addClass('error');
                    $(this).siblings('p.error').show();
                }
            }
        }
    });

    $('.checkbox input', listeCommande).on('click', function () {
        if (!$(this).is(':checked')) {
            listeCommande.find('.js-societe').val('');
            listeCommande.find('p.error').hide();
        }
    });

    listeCommande.find('p.error').hide();

    $('.openPopin').openPopin();

    $('.infobulle').tooltip();

    //@fix: don't show date at the begining
    //var dateToArrival = new Date();
    //$('#arrivalDate').val( ((dateToArrival.getDate())<10 ? '0' : '') + (dateToArrival.getDate()) +'/'+ ((dateToArrival.getMonth() + 1)<10 ? '0' : '') + (dateToArrival.getMonth() + 1)  +'/'+ (dateToArrival.getFullYear()) );

    $(document).on('click', '#check1', function () {
        var $parrain = $(this).parent().siblings('.block-parrain');
        $(this).prop('checked') === true ? $parrain.fadeIn().removeClass('hidden') : $parrain.fadeOut().addClass('hidden');
    });

    $('.check-number', '.block-parrain').on({
        'keypress': function (evt) {
            var regex = /^\d{0,1}$/;
            if (evt.which < 48 || evt.which > 57 || !regex.test($(this).val())) {
                evt.preventDefault();
            }
        },
        'keyup': function () {
            if ($(this).val() > 55) {
                $(this).addClass('error').siblings('label').addClass('error');
            } else {
                $(this).removeClass('error').siblings('label').removeClass('error');
            }
        }
    });

    $('.phone-js').on({
        'focus': function () {
            if ($(this).hasClass('error')) {
                $(this).removeClass('error').siblings('label').removeClass('error');
            }
        },
        'blur': function () {
            if ($(this).val().length < 8 || $(this).val().length > 25) {
                $(this).addClass('error').siblings('label').addClass('error');
            }
        }
    });

    $('.panel').hide();

    $('.toggle__panel').on('click', function () {
        if (!$('.panel').is(':visible')) {
            $('.panel').show();
        }
        else {
            $('.panel').hide();
        }
    });


    $('.travelers').each(function () {
        var $self = $(this);
        var counter = 0,
            lessButton = $self.find('.less').addClass('disabled'),
            moreButton = $self.find('.more'),
            numberTravelers = $self.find('input'),
            limit = numberTravelers.data('limit-min'),
            limitMax = numberTravelers.data('limit-max');

        // decrement traveler numbers
        lessButton.on('click', function () {
            numberTravelers.val(counter -= 1);
            if (counter <= limit) {
                counter = 0;
                numberTravelers.val(counter);
                lessButton.addClass('disabled');
            }
            if (counter < limitMax) {
                moreButton.removeClass('disabled');
            }
        });
        // increment traveler numbers
        moreButton.on('click', function () {
            numberTravelers.val(counter += 1);
            if (counter > limit) {
                lessButton.removeClass('disabled');
            }
            if (counter >= limitMax) {
                counter = limitMax;
                numberTravelers.val(counter);
                moreButton.addClass('disabled');

            }



        });
    });
});
