jQuery(window).on("load", function() {
    "use strict";

    /*  ===================================
       Loading Timeout
       ====================================== */
    $("#loader-fade").fadeOut(3000);
});

jQuery(function($) {
    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    /* ===================================
         Cube Portfolio
         ====================================== */

    (function($, window, document, undefined) {
        // init cubeportfolio
        $("#js-grid-mosaic-flat").cubeportfolio({
            filters: "#js-filters-mosaic-flat",
            layoutMode: "mosaic",
            defaultFilter: "*",
            animationType: "scaleSides",
            gapHorizontal: -1,
            gapVertical: -1,
            gridAdjustment: "responsive",
            caption: "zoom",
            displayType: "fadeIn",
            displayTypeSpeed: 100,
            sortByDimension: true,
            mediaQueries: [{
                    width: 1500,
                    cols: 4,
                },
                {
                    width: 1100,
                    cols: 4,
                },
                {
                    width: 768,
                    cols: 2,
                },
                {
                    width: 480,
                    cols: 1,
                },
                {
                    width: 320,
                    cols: 1,
                },
            ],
            // lightbox
            lightboxDelegate: ".cbp-lightbox",
            lightboxGallery: true,
            lightboxTitleSrc: "data-title",
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            plugins: {
                loadMore: {
                    element: "#js-loadMore-mosaic-flat",
                    action: "click",
                    loadItems: 3,
                },
            },
        });

        /*Blog Masonry*/
        $("#blog-masonry").cubeportfolio({
            layoutMode: "grid",
            defaultFilter: "*",
            animationType: "scaleSides",
            gapHorizontal: 30,
            gapVertical: 30,
            gridAdjustment: "responsive",
            mediaQueries: [{
                    width: 1500,
                    cols: 3,
                },
                {
                    width: 1100,
                    cols: 3,
                },
                {
                    width: 992,
                    cols: 2,
                },
                {
                    width: 600,
                    cols: 2,
                },
                {
                    width: 480,
                    cols: 1,
                },
                {
                    width: 320,
                    cols: 1,
                },
            ],
        });
        /*Portfolio Three*/
        $("#js-grid-mosaic").cubeportfolio({
            filters: ".filtering",
            layoutMode: "grid",
            sortByDimension: true,
            mediaQueries: [{
                    width: 1500,
                    cols: 2,
                },
                {
                    width: 1100,
                    cols: 2,
                },
                {
                    width: 768,
                    cols: 2,
                },
                {
                    width: 600,
                    cols: 2,
                },
                {
                    width: 320,
                    cols: 1,
                },
            ],
            defaultFilter: "*",
            animationType: "fadeOut",
            gapHorizontal: 20,
            gapVertical: 60,
            gridAdjustment: "responsive",
            caption: "zoom",

            // lightbox
            lightboxDelegate: ".cbp-lightbox",
            lightboxGallery: true,
            lightboxTitleSrc: "data-title",
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            plugins: {
                loadMore: {
                    element: "#js-loadMore-lightbox-gallery",
                    action: "click",
                    loadItems: 5,
                },
            },
        });
    })(jQuery, window, document);




    /* ===================================
         Owl Carousel
         ====================================== */


    /* ===================================
         Revolution Slider
         ====================================== */

    /*Design Studio*/
    $("#rev_slider_8_1")
        .show()
        .revolution({
            sliderType: "standard",
            jsFileLocation: "//localhost/revslider/revslider/public/assets/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    touchOnDesktop: "off",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false,
                },
                arrows: {
                    style: "uranus",
                    enable: false,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="hvr-pulse"></div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0,
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0,
                    },
                },
                bullets: {
                    enable: false,
                    hide_onmobile: true,
                    hide_under: 600,
                    style: "hephaistos",
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: "",
                },
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 600, 500, 400],
            lazyType: "smart",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                speedbg: 0,
                speedls: 0,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 10, 11, 12, 13, 14, 55],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            },
        });
});


// navbar 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}