(function($) {

    var $document = $(document),
        $bodi = $(document.body),
        $loader = $('.loader'),
        $menu = $('.menutxt'),
        $menucont = $('.menucont'),
        prolink = '',
        $menusing = $('.menu_sing'),
        $trans = $('.transLeft'),
        $transRight = $('.transRight'),
        $leftbar = $('.leftbar');

    function clickMenu() {

        $menucont.toggleClass('apriMenu');
        $bodi.toggleClass('okay');
    }




    function menuclick(e) {
        console.log('ciao');
        var menutrans = './' + e.currentTarget.id;
        $menucont.toggleClass('apriMenu');
        setTimeout(function() {
            if (menutrans === './home') {
                $trans.css('background', '#fff');
                $trans.addClass('apriMenu');
            } else { $trans.addClass('apriMenu'); }
            setTimeout(function() {

                if (menutrans === './about') {
                    window.location.replace('index.html');

                } else if (menutrans === './home') {
                    window.location.replace('../index.html');

                } else {
                    window.location.replace(menutrans);
                }

            }, 630);
        }, 610);
    }



    $(document).ready(function() {

        setTimeout(function() {
            $loader.addClass('goOut');
            $bodi.removeClass('okay');

            setTimeout(function() {
                $leftbar.addClass('apriMenu');
                $menu.addClass('apriMenu');
            }, 500);
        }, 1300);



        $menu.on('click', clickMenu);




        $menusing.on('click', menuclick);

    });


})(jQuery);