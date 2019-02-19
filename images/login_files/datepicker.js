
define(['jquery', 'jqueryui'], function($) {

    $(document).ready(function() {
        
        $('.datepicker').not('.no-global').datepicker({
            minDate: 0,
            monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
            monthNamesShort: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
            dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
            dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
            dayNamesMin: ['D','L','M','M','J','V','S'],
            weekHeader: 'Sem.',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            showButtonPanel: true,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        });
        
        if( $.palm() ) {
            $('.datepicker').attr('readonly', 'readonly');
        }
    });

});