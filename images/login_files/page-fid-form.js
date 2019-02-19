// each page requires the common module
require([
    'jquery',
    'common-fid',
    'page-fid',
    'lib/form.selectcustom',
    'lib/jquery.carrousel-minilist',
    'lib/jquery.tooltip',
    'lib/autotab',
    'lib/datepicker'
], function() {
    var comparator = {
        init: function() {
            var $search = $('.js-searchField, .formChoixParking');

            this.$arrivalDate = $('#arrivalDate', $search);
            this.$arrivalHour = $('#arrivalHour', $search);
            this.$departDate = $('#departDate', $search);
            this.$departHour = $('#departHour', $search);

            window.listHoursBkp = window.listHoursBkp || [];
            window.listHoursBkp['#departHour'] = window.listHoursBkp['#departHour'] || [];
            window.listHoursBkp['#arrivalHour'] = window.listHoursBkp['#arrivalHour'] || [];


            this.initForDevices();
            this.initForms();
            this.arrivalDateCustom('arrivalDate');
            this.attachEvents();
        },

        initForDevices: function() {
            if (window.CURRENT_MQ === 'palm' || window.CURRENT_MQ === 'lap') {
                var $carrousels_mini = ($('.js-carrousel-minilist').length) ? $('.js-carrousel-minilist') : false;
                if ($carrousels_mini && typeof $.fn.carrouselMiniList === 'function') {
                    $carrousels_mini.carrouselMiniList();
                }
                if ($('#conseil-pwd').length) {
                    var $conseilPwd = $('#conseil-pwd').clone();
                    $('input[type="password"]').on('focus', function() {
                        $conseilPwd.removeAttr('id').insertAfter($(this));
                    }).on('blur', function() {
                        $conseilPwd.remove();
                    });
                }
            }

            /*
             * Si focus dans le champs d'un iphone,
             * le date picker ne s'affiche pas correcrtement
             *
             */
            if (/iPhone OS/i.test(navigator.userAgent)) {
                $('.datepicker').on('focus', function() {
                    $(this).trigger('blur');
                });
            }

            if ($.palm()) {
                $('.datepicker').attr('readonly', 'readonly');
            }
        },

        initForms: function() {
            var that = this;

            $('.datepicker').datepicker('option', 'onSelect',
                function() {
                    that.arrivalDateCustom(this.id);
                }
            );
        },

        attachEvents: function() {
            var that = this;

            this.$arrivalDate.datepicker('option', {
                onClose: function() {
                    that.setDepartDate();
                    that.setArrivalHour();
                    var ad = that.$arrivalDate.datepicker('getDate');
                    var dd = that.$departDate.datepicker('getDate') || -1;
                    var ah = that.$arrivalHour.val();
                    var dh = that.$departHour.val();
                    if (ad && dd && ad.toString() == dd.toString() && +dh < +ah) {
                        that.$departHour.val(that.$arrivalHour.val());
                        that.refreshSelectUiView(that.$departHour);
                    }
                }
            })
            // fix for ipad: prevent keyboard and cursor from showing up 
            $('.datepicker').on('focus', function() {
                $(this).trigger('blur');
            });

            this.$departDate.datepicker('option', {
                onClose: function() {
                    that.setDepartHour();
                }
            });

            this.$departHour.on('selectmenuopen', this.setDepartHour.bind(this));
            //this.$arrivalHour.on('selectmenuopen', this.setArrivalHour.bind(this));

            $('#arrivalHour').on('selectmenuselect', function(e, inst) {
                var hoursSelector = "#departHour";
                var $hoursSelector = $("#departHour");
                var labelListHours = $hoursSelector.find('option').eq(0);
                $hoursSelector.find('option').eq(0).remove();
                // On remet les éléments extraits
                $hoursSelector.prepend(window.listHoursBkp[hoursSelector]);
                // On replace le l'entête
                $hoursSelector.prepend(labelListHours);
                window.listHoursBkp[hoursSelector] = [];
                var ad = that.$arrivalDate.datepicker('getDate');
                var dd = that.$departDate.datepicker('getDate') || -1;
                var ah = that.$arrivalHour.val();
                var dh = that.$departHour.val();
                if (ad.toString() == dd.toString() && +dh < +ah) {
                    that.$departHour.val(that.$arrivalHour.val());
                    that.refreshSelectUiView(that.$departHour);
                }
            });

            $(document).on('click', '#check1', function() {
                var $parrain = $(this).parent().siblings('.block-parrain');
                $(this).prop('checked') === true ? $parrain.fadeIn().removeClass('hidden') : $parrain.fadeOut().addClass('hidden');
            });
        },

        setArrivalHour: function() {
            var date = new Date(), // On est quand ?
                currentHour = date.getHours(), // Quelle heure est-il ?
                day = date.getDate(), // Quel jour est on ?
                month = date.getMonth() + 1, // Quel mois sommes nous ?
                dateToday = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + date.getFullYear(), // La date complète du jour
                dateControl = this.$arrivalDate.val(),
                listHours = this.$arrivalHour.find('option');

            if (dateToday === dateControl) {
                //window.listHoursBkp["#arrivalHour"] = [];
                this.removeHours(listHours, currentHour);
            } else {
                this.resetHours("#arrivalHour");
            }
            this.refreshSelectUiView(this.$arrivalHour);
        },

        removeHours: function(listHours, currentHour) {

            for (var i = 0; i < listHours.length; i++) {
                // si les heures sont passées
                if (+listHours[i].text.split('h')[0] < +currentHour) {
                    window.listHoursBkp["#arrivalHour"][i] = listHours[i];
                    $(listHours[i]).remove();
                }
            };
        },

        setDepartDate: function() {
            var arrivalDateVal = this.$arrivalDate.datepicker('getDate');

            if (arrivalDateVal !== null) {
                this.$departDate.datepicker('option', {
                    minDate: arrivalDateVal
                });

                this.$departDate.datepicker('refresh');
            }
        },

        resetHours: function(hoursSelector) {
            $hoursSelector = $(hoursSelector);
            // Supprimer le premier item "heure d'entrée" pour le rajouter ensuite
            var labelListHours = $hoursSelector.find('option').eq(0);
            $hoursSelector.find('option').eq(0).remove();
            // On remet les éléments extraits
            $hoursSelector.prepend(window.listHoursBkp[hoursSelector]);
            // On replace le l'entête
            $hoursSelector.prepend(labelListHours);
            window.listHoursBkp[hoursSelector] = [];
        },

        setDepartHour: function() {
            var $departOptions = $('#departHour-menu').find('li'),
                i = $departOptions.length - 1,
                arrivalDateVal = this.$arrivalDate.datepicker('getDate'),
                departDateVal = this.$departDate.datepicker('getDate');

            if (departDateVal == null) {
                $departOptions.hide();
                return;
            }

            if (departDateVal.toString() === arrivalDateVal.toString()) {
                $departOptions.hide();
                var dh;
                var arrivalHour = $('#arrivalHour').val();
                for (; i >= 0; i--) {

                    $departOptions.eq(i).show();
                    dh = $departOptions.eq(i).text();
                    if (arrivalHour === dh) {
                        break;
                    }
                }
                if (+this.$departHour.val() < +this.$arrivalHour.val()) {
                    this.$departHour.val(this.$arrivalHour.val())
                }
            } else {
                $departOptions.show();
            }
            //this.refreshSelectUiView(this.$departHour);
        },

        refreshSelectUiView: function(ob) {
            var $ob = $(ob)
            if ($ob.is('select')) {
                $ob.selectmenu().selectmenu('refresh', true);
            };
            return false;
        },

        arrivalDateCustom: function(selector) {

            if (selector == "arrivalDate") {
                // on relance le test si il faut disabled les champs slaves
                this.disabledFields(['#arrivalDate', '#arrivalHour'], ['#departDate', '#departHour']);
            };
        },

        disabledFields: function(ArrFieldMaster, ArrFieldSlave) {
            var that = this;
            var disabledEnabled = function(ArrFieldSlave, disabled) {
                disabled != true ? disabled = false : disabled = true;

                if (disabled === true) {
                    for (var i = 0; i < ArrFieldSlave.length; i++) {
                        // on disabed l'element
                        $(ArrFieldSlave[i]).prop('disabled', true);
                        that.refreshSelectUiView($(ArrFieldSlave[i]));
                    }
                } else {
                    for (var i = 0; i < ArrFieldSlave.length; i++) {
                        $(ArrFieldSlave[i]).prop('disabled', false);
                        that.refreshSelectUiView($(ArrFieldSlave[i]));
                    }
                }


            }

            //Est ce que le champ est remplis
            var fieldsEmpty = function(ArrFieldMaster) {
                var disabled = false; //Par default on ne disabled pas

                for (var i = 0; i <= ArrFieldMaster.length; i++) {
                    if ($(ArrFieldMaster[i]).val() == "" || $(ArrFieldMaster[i]).val() == -1) {
                        disabled = true;
                    }
                }
                return disabled;
            };

            var reloadFunctionOnSelectChange = function(ArrField) {
                // On parcours les elements pour coller au select l'envenement qui lancera la fonction voulu
                for (var i = 0; i <= ArrField.length; i++) {
                    if ($(ArrField[i]).is('select')) {
                        // c'est un select
                        $(ArrField[i]).on("selectmenuchange", function() {
                            init();
                        });
                    }
                };
            };

            var init = function() {
                if (fieldsEmpty(ArrFieldMaster)) { //Si Un des champs est vide
                    disabledEnabled(ArrFieldSlave, true); // Les champs dépendant doivents êtres disabled
                    reloadFunctionOnSelectChange(ArrFieldMaster);
                } else {
                    disabledEnabled(ArrFieldSlave, false); // Les champs dépendant doivents êtres enabled
                }
            };

            init();
        }
    }


    $('document').ready(function() {
        comparator.init();
    });

    //Mobile table page fid mon status
    var activateCol = function(table,index){
        var trs = table.find(".fidAdvantagesDetails_content_line"),
            ths = table.find(".fidAdvantagesDetails_header_line_name").slice(1);

        ths.removeClass("activecell");
        trs.find("td").removeClass("activecell");
        //activate cell
        ths.eq(index).addClass("activecell");
        trs.each(function(){
            $(this).find("td").slice(1).eq(index).addClass("activecell");
        });
     };

    //toggle
     if ($(window).width() < 768){
        var dropdown = $(".fidAdvantagesDetails_dropdown"),
            items = dropdown.find("li"),
            table = $(".fidAdvantagesDetails");

        //activate first col
        activateCol(table, 0);

        $(".fidAdvantagesDetails_header_line th").slice(1).click(function(){
            dropdown.slideToggle();
        });

        items.click(function(){
            var index = $(this).attr("data-index");
            activateCol(table, index);
            dropdown.slideToggle();
            items.removeClass("active");
            items.filter('[data-index="'+index+'"]').addClass("active");
        });
     }
});