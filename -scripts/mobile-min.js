(function($) {

    // $( "input[level='100']" ).next().text( "Hot Fuzz" );

    var $window = $(window),
        $body = $(document.body),
        $resizer = $('.resizer'),
        $warning = $('.cont-warning'),
        $windowAlert = $('.warning-window'),
        $ope = $('.ope'),
        $chiudi = $('.chiudi'),
        $contNum = $('.lolll'),
        i = 0;

    function showResize() {

        var $winWidth = $window.width();

        if ($winWidth < 780) {
            $resizer.addClass('activo');
            $body.css('overflow', 'hidden')
        }
        if ($winWidth > 780) {
            $resizer.removeClass('activo');
            $body.css('overflow', 'auto')
        }
    }

    function checkElementToScroll(e) {
        var element = e.currentTarget.id,
            $elementScrollTo = '.' + element + '-section',
            offset = $($elementScrollTo).offset().top;
        $('html, body').animate({
            scrollTop: offset
        }, 800);
    }

    function getMenu() {
        //HOME
        if ($('.home-section').hasClass('visibile')) {

            $('#home').addClass('vis');

        } else {

            $('#home').removeClass('vis');
        }

        //ABOUT
        if ($('.about-section').hasClass('visibile')) {

            $('#about').addClass('vis');

        } else {

            $('#about').removeClass('vis');
        }

        //workflow
        if ($('.workflow-section').hasClass('visibile')) {

            $('#workflow').addClass('vis');

        } else {

            $('#workflow').removeClass('vis');
        }

        //skills
        if ($('.skills-section').hasClass('visibile')) {

            $('#skills').addClass('vis');

        } else {

            $('#skills').removeClass('vis');
        }
    }


    function closeAlert() {

        $windowAlert.addClass('anim-alert');
        setTimeout(function() {

            $warning.css('display', 'none');
            $body.css('overflow', 'auto');
            $($windowAlert).removeClass('anim-alert');
        }, 700);

    }

    function openAlert() {

        $warning.css('display', 'flex');
        $body.css('overflow', 'hidden');

    }




    function checkSkill(element, value) {
        console.log('checking');
        var $element = element,
            $value = value;

        function loop() {
            setTimeout(function() {
                if (i <= $value) {
                    $($element).text(i + '%');
                    i++;
                    loop();
                }
            }, 90);
        }
        if ($('.skills-section').hasClass('visibile')) {
            loop();
        }
    }


    $(document).ready(function() {

        $(window).on('scroll', getMenu);
        $(window).on('scroll', function() {
            checkSkill('#first-skill', 97);
            checkSkill('#second-skill', 75);
            checkSkill('#third-skill', 90);
            checkSkill('#fourth-skill', 78);

        });



        $(".menu-li").on('click', checkElementToScroll);
        $(".scrollIcon").on('click', function() {
            var offsetAbout = $('.about-section').offset().top;
            $('html, body').animate({
                scrollTop: offsetAbout
            }, 800);
        });
        $(".start-withme").on('click', function() {
            var offsetContact = $('.contact-section').offset().top;
            $('html, body').animate({
                scrollTop: offsetContact
            }, 800);
        });


        $window.on('resize', showResize);
        $chiudi.on('click', closeAlert);
        $ope.on('click', openAlert);

    });


})(jQuery);

