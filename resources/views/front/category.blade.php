@extends('layouts.front')

@section('title', 'TheDecor')

@section('content')
    <!-- START SUB-BANNER -->
    <div class="sub-banner">
        <div class="container">
            <div class="text-detail">
                <h2>{{ $category->name }} mahsulotlar</h2>
                <p>{{ $category->description }}</p>
                <ul>
                    <li><a href="{{ url("/") }}">Bosh Sahifa</a> <span>/</span></li>
                    <li><a href="{{ route("categories") }}">Hizmatlarimiz</a> <span>/</span></li>
                    <li class="item-select"><a>{{ $category->name }}</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- END SUB-BANNER -->


    <!-- START CONTENT -->
    <div class="sub-content">


        <section>
            <div class="container">
                <div class="project-images">

                    @foreach($category->images as $image)

                    <div class="col-md-4">
                        <div class="work">
                            <div class="grid">

                                <figure class="effect-sadie">
                                    <img src="{{ $image->url }}" alt="" height="296">

                                    <figcaption>
                                        <h2><img src="{{ asset("images/plus.png") }}" alt=""></h2>
                                        <a class="fancybox-buttons" data-fancybox-group="button" href="{{ $image->url }}"></a>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </section>


    </div>
    <!-- END CONTENT -->
@endsection