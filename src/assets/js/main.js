(function ($) {
    "use strict";

    // Document ready
    $(document).ready(function () {
        
        // Testimonial sliders
        $(".testimonial-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            responsive: {
                0: { items: 1, nav: false },
                600: { items: 1, nav: false },
                1000: { items: 1, nav: false, loop: true }
            }
        });

        // Homepage slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive: {
                0: { items: 1, nav: false, loop: true },
                600: { items: 1, nav: true, loop: true },
                1000: { items: 1, nav: true, loop: true }
            }
        });

        // Logo carousel
        $(".logo-carousel-inner").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 30,
            responsive: {
                0: { items: 1, nav: false },
                600: { items: 3, nav: false },
                1000: { items: 4, nav: false, loop: true }
            }
        });

        // Countdown
        if ($('.time-countdown').length) {  
            $('.time-countdown').each(function () {
                var $this = $(this), finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function (event) {
                    $(this).html(event.strftime('' +
                        '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' +
                        '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div> ' +
                        '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div> ' +
                        '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'
                    ));
                });
            });
        }

        // Projects filters (Isotope)
        $(".product-filters li").on('click', function () {
            $(".product-filters li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".product-lists").isotope({ filter: selector });
        });

        // Initialize isotope
        $(".product-lists").isotope();

        // Magnific popup (YouTube)
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // Lightbox
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: { verticalFit: true }
        });

        // Homepage slides animations
        $(".homepage-slider").on("translate.owl.carousel", function () {
            $(".hero-text-tablecell .subtitle").removeClass("animated fadeInUp").css({ 'opacity': '0' });
            $(".hero-text-tablecell h1").removeClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.3s' });
            $(".hero-btns").removeClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.5s' });
        });

        $(".homepage-slider").on("translated.owl.carousel", function () {
            $(".hero-text-tablecell .subtitle").addClass("animated fadeInUp").css({ 'opacity': '1' });
            $(".hero-text-tablecell h1").addClass("animated fadeInUp").css({ 'opacity': '1', 'animation-delay': '0.3s' });
            $(".hero-btns").addClass("animated fadeInUp").css({ 'opacity': '1', 'animation-delay': '0.5s' });
        });

        // Sticky menu
        $("#sticker").sticky({ topSpacing: 0 });

        // Mobile menu
        $('.main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });

        // Search form toggle
        $(".search-bar-icon").on("click", function () {
            $(".search-area").addClass("search-active");
        });

        $(".close-btn").on("click", function () {
            $(".search-area").removeClass("search-active");
        });
    });

    // Window load
    $(window).on("load", function () {
        $(".loader").fadeOut(1000);
    });

}(jQuery));
