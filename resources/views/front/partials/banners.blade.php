<div class="tp-banner-container main-banner">
    <div class="tp-banner white-slide ">
        <ul>
            @for($i = 1;  $i < 8; $i++)
                <!-- SLIDE  -->
                <li data-transition="fade" data-slotamount="7" data-masterspeed="500" data-thumb="" data-saveperformance="on" data-title="Intro Slide">
                    <!-- MAIN IMAGE -->
                    <img src="{{ url('/') }}/images/banners/bg_0{{ $i }}.JPG" alt="TheDecor" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
                    <!-- LAYERS -->

                    <div class="tp-caption grey_heavy_72 fade start" data-x="60" data-y="610" data-speed="1000" data-start="1000" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" style="z-index:7; max-width: auto; font-size:20px; letter-spacing:2px; max-height: auto; white-space: nowrap;">
                    </div>
                    <div class="tp-caption black_heavy_60 fade start" data-x="60" data-y="640" data-speed="1000" data-start="1000" data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" style="z-index: 7; max-width: auto; max-height: auto; white-space: nowrap; text-transform:uppercase; line-height:72px;">The<br>decor
                    </div>

                    <div class="tp-caption customin rs-parallaxlevel-0" data-x="left" data-y="bottom" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="0" data-start="10" data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" style="z-index: 6;"><img style="width:100%;" alt="" src="{{ asset("images/slides/yellow-bg.png") }}">
                    </div>
                    <!-- LAYER NR. 11 -->
                    <div class="tp-caption customin tp-resizeme rs-parallaxlevel-0 fade" data-x="60" data-y="820" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="1000" data-start="1000" data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-linktoslide="next" style="z-index: 12; max-width: auto; max-height: auto; white-space: nowrap;"><a href='{{ route('categories') }}' class='largeredbtn'>Ishlarimizani ko`rish</a>
                    </div>
                </li>
            @endfor
        </ul>
        <div class="tp-bannertimer"></div>
    </div>
</div>
<div class="divider-dark"></div>