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
                    @foreach($categories as $cat)
                        <div data-filter=".{{ $cat->slug }}" class="cbp-filter-item">{{ $cat->name }}</div>
                    @endforeach
                </div>
            </div>

            <div id="js-grid-lightbox-gallery" class="cbp">

                @foreach($categories as $category)
                    <div class="cbp-item {{ $category->slug }}">
                        <a href="{{ route('categories') }}/{{ $category->slug }}">
                            <div class="cbp-caption">
                                <div class="cbp-caption-defaultWrap">
                                    <div class="work">
                                        <figure class="effect-sadie">
                                            <div class="image">
                                                @foreach($category->images as $image)
                                                    <img src="{{ url('/') }}/{{ $image->url }}" alt="" width="100%" height="305">
                                                    @break
                                                @endforeach
                                            </div>
                                            <figcaption>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <div class="cbp-l-grid-projects-title">{{ $category->name }}</div>
                        <div class="cbp-l-grid-projects-desc"> </div>
                    </div>
                @endforeach
            </div>
            
            {{--<div id="js-loadMore-lightbox-gallery" class="cbp-l-loadMore-button">--}}
                {{--<a href="#" class="cbp-l-loadMore-link" rel="nofollow">--}}
                    {{--<span class="cbp-l-loadMore-defaultText">Ko`proq Ko`rsatish</span>--}}
                    {{--<span class="cbp-l-loadMore-loadingText">Yuklanish...</span>--}}
                    {{--<span class="cbp-l-loadMore-noMoreLoading">Boshqa Yo`q</span>--}}
                {{--</a>--}}
            {{--</div>--}}
        </div>
    </div>
    <!--End Work-->

</div>
<!-- END CONTENT -->
@endsection