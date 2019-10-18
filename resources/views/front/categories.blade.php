@extends('layouts.front')

@section('title', 'TheDecor')

@section('content')

<!-- START CONTENT -->
<div class="sub-content">

    <div class="all-work">

        <!--Start Work-->
        <div class="container">
            <div class="clearfix">
                <div id="js-filters-lightbox-gallery2" class="cbp-l-filters-button cbp-l-filters-center">
                    <div data-filter="*" class="cbp-filter-item-active cbp-filter-item">Hamma Maxsulotlarimiz</div>
                </div>
            </div>

            <div id="js-grid-lightbox-gallery" class="cbp">


            @foreach($categories as $cat)
                <div class="cbp-item featured housing">
                    <a href="{{ url("/") }}/{{ $cat->slug }}">
                        <div class="cbp-caption">
                            <div class="cbp-caption-defaultWrap">
                                <div class="work">
                                    <figure class="effect-sadie">
                                        @foreach($cat->images as $image)
                                            <div class="image"><img src="{{ $image->url }}" alt="" width="100%" height="305"></div>
                                            @break
                                        @endforeach
                                        <figcaption>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </a>

                    <div class="cbp-l-grid-projects-title">{{ $cat->name }}</div>
                    <!--			<div class="cbp-l-grid-projects-desc">Cultural, Museum</div>-->
                </div>
            @endforeach
            </div>

            <div id="js-loadMore-lightbox-gallery" class="cbp-l-loadMore-button">
                <a href="{{ asset("ajax-lightbox-gallery/loadMore.html") }}" class="cbp-l-loadMore-link" rel="nofollow">
                    <span class="cbp-l-loadMore-defaultText">Ko`proq Ko`rsatish</span>
                    <span class="cbp-l-loadMore-loadingText">Yuklanish...</span>
                    <span class="cbp-l-loadMore-noMoreLoading">Boshqa Yo`q</span>
                </a>
            </div>

        </div>

    </div>
    <!--End Work-->

</div>
<!-- END CONTENT -->
@endsection