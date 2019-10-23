<script type="text/javascript" src="{{ asset("js/jquery.js") }}"></script>

<!-- Sticky Header -->
<script type="text/javascript" src="{{ asset("js/sticky-header.js") }}"></script>

<!-- SMOOTH SCROLL -->
<script type="text/javascript" src="{{ asset("js/scroll-desktop-smooth.js") }}"></script>

<!-- Custom Menu -->
<script type="text/javascript" src="{{ asset("js/main.js") }}"></script>

<!-- START REVOLUTION SLIDER -->
<script type="text/javascript" src="{{ asset("js/jquery.themepunch.revolution.min.js") }}"></script>
<script type="text/javascript" src="{{ asset("js/jquery.themepunch.tools.min.js") }}"></script>

<!-- SERVICES Tabs -->
<script type="text/javascript" src="{{ asset("js/tabs.js") }}"></script>

<!-- OWL CAROUSEL -->
<script type="text/javascript" src="{{ asset("js/owl.carousel.js") }}"></script>

<!-- CUBE PORTFOLIO -->
<script type="text/javascript" src="{{ asset("js/jquery.cubeportfolio.min.js") }}"></script>
<script type="text/javascript" src="{{ asset("js/main.portfolio.js") }}"></script>

<!-- CUSTOM -->
<script type="text/javascript" src="{{ asset("js/custom.js") }}"></script>

<script type="text/javascript" src="{{ asset("js/fancybox.js") }}"></script>

<script type="text/javascript">
    $(document).ready(function() {
        /*
        *  Button helper. Disable animations, hide close button, change title type and content
        */
        
        $('.fancybox-buttons').fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            
            prevEffect: 'none',
            nextEffect: 'none',
            
            closeBtn: false,
            
            helpers: {
                title: {
                    type: 'inside'
                },
                buttons: {}
            },
            
            afterLoad: function() {
            this.title = 'Rasm ' + (this.index + 1) + '/' + this.group.length + (this.title ? ' - ' + this.title : '');
            }
        });
    });
</script>

<!-- Revolution Slider -->
<script type="text/javascript">
    jQuery(document).ready(function() {
        jQuery('.tp-banner').show().revolution({
            dottedOverlay: "none",
            delay: 16000,
            startwidth: 1920,
            startheight: 940,
            hideThumbs: 200,

            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,

            navigationType: "bullets",
            navigationArrows: "solo",
            navigationStyle: "preview",

            touchenabled: "on",
            onHoverStop: "on",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

            keyboardNavigation: "off",

            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            shadow: 0,
            fullWidth: "on",
            fullScreen: "off",

            spinner: "spinner4",

            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,

            shuffle: "off",

            autoHeight: "off",
            forceFullWidth: "off",



            hideThumbsOnMobile: "off",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "off",
            hideArrowsOnMobile: "off",
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            videoJsPath: "rs-plugin/videojs/",
            fullScreenOffsetContainer: ""
        });
    }); //ready
</script>


</body></html>