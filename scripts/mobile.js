(function($) {

    var $document = $(document),
        $descr = $('.namepro'),
        $descri = $('.desc--text'),
        $bodi = $(document.body),
        $loader = $('.loader'),
        $menu = $('.menutxt'),
        $menucont = $('.menucont');

    function parallax() {

        var scrolled = $document.scrollTop(),
            delta = -(scrolled * 0.13) + '%';
        $descr.css({
            transform: "translate3d(0," + delta + ", 0)"
        });

    }

    function parallaxtit() {

        var scrolled = $document.scrollTop(),
            delta = -(scrolled * 0.05) + '%';
        $descri.css({
            transform: "translate3d(0," + delta + ", 0)"
        });

    }


    function clickMenu() {

        $menucont.toggleClass('apriMenu');
        $bodi.toggleClass('okay');
    }

    $(document).ready(function() {

        setTimeout(function() {
            $loader.addClass('goOut');
            $bodi.removeClass('okay');
        }, 1000);


        $menu.on('click', clickMenu);
        $(document).on('scroll', parallax);
        $(document).on('scroll', parallaxtit);

    });


})(jQuery);