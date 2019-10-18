@extends('layouts.front')

@section('title', 'TheDecor')

@section('content')
    <!-- START CONTENT -->
    <div class="content">

        <!-- START OUR STUDIOS -->
        <section class="our-studio">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                        <div class="icons">
                            <i class="icon-noun_35247_cc"></i>
                            <i class="icon-noun_75842_cc"></i>
                            <i class="icon-noun_301911_cc"></i>
                        </div>
                        <span>Siz biz bilan yani TheDecor, ozizga har qanday usuldagi va dizayindagi Gips, Travertin, hoxlagan uslubdagi Fantanlar va Arxitektura Dizayn xizmatlarimizadan umumli holda foydalanishingiz mumkin !!!</span>

                    </div>
                </div>
            </div>
        </section>
        <!-- END OUR STUDIOS -->

        <!-- START OUR STUDIOS -->
        <section class="sec-space ">
            <div class="container">
                <div class="row">

                    <div class="col-md-12">
                        <div class="main-heading" style="padding-top: 3rem">
                            <h4>Bizning</h4>
                            <h1>Loyihalarimiz</h1>
                            <span>Bizning ajoyib va el yurtga hizmat qiluvchi Loyhalarimiza va mahsulotlarimiza</span>
                        </div>
                    </div>

                    <div class="projects">

                    @foreach($categories as $cat)
                        <div class="col-md-6">
                            <div class="project-sec">

                                <div class="work">
                                    <div class="grid">

                                        <figure class="effect-sadie">
                                            @foreach($cat->images as $image)
                                                <div class="image"><img src="{{ $image->url }}" alt="" width="540" height="405"></div>
                                                @break
                                            @endforeach

                                            <figcaption>
                                                <h2><img src="{{ asset("images/plus.png") }}" alt=""></h2>
                                                <a href="{{ route('categories') }}/{{ $cat->slug }}"></a>
                                            </figcaption>
                                        </figure>

                                        <div class="detail">
                                            <div class="text">
                                                <h6>{{ $cat->name }}</h6>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                    </div>

                    <div class="view-all" style="padding-bottom: 3rem">
                        <a class="black-btn" href="{{ route('categories') }}">Hamma Loyihalarimizani Ko`rish</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- END OUR STUDIOS -->



        <!-- START OUR STUDIOS -->

        <section class="sec-space clients-words pt-3">
            <div class="container">

                <div class="col-md-12">
                    <div class="main-heading white" style="padding-top: 3rem">
                        <h4>Yaxshi So`zlar</h4>
                        <h1>Klientlarimizdan</h1>
                    </div>
                </div>


                <div class="col-md-12">

                    <div class="kind-words">
                        <div id="client-words" class="owl-carousel pb-3">

                            @foreach($comments as $comment)
                            <div>
                                <p>{{ $comment->text }}</p>
                                <span>- {{ $comment->client }}, <span class="client">Klient</span></span>
                            </div>
                            @endforeach

                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!-- START OUR STUDIOS -->
        <section class="sec-space">
            <div class="container">

                <div class="row">

                    <div class="col-md-12">
                        <div class="main-heading" style="padding-top: 3rem">
                            <h4>biz-nima-qilamiz</h4>
                            <br>
                            <h1>Hizmatlarimiz</h1>
                            <span>{{ $credential->brief }}</span>
                        </div>
                    </div>


                    <div class="clear"></div>
                    <div class="what-we-do ">
                        <div id="tabbed-nav">
                            <ul>
                                @foreach($categories as $cat)
                                    <li><a>{{ $cat->name }}</a></li>
                                    @if($loop->index == 3)
                                        @break
                                    @endif
                                @endforeach
                                <li style="font-size: 23px; background-color: goldenrod">The <br> Decor</li>
                            </ul>

                            @foreach($categories as $cat)
                                <div>
                                    <div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="welcome-serv-img pb-5 mb-5">
                                                    @foreach($cat->images as $image)
                                                        <img src="{{ $image->url }}" alt="" height="400">
                                                        @break
                                                    @endforeach
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="detail pb-5 ">
                                                    <p>
                                                        {{ $cat->description }}
                                                        {{--<span class="big-text">B</span>iz siz hohlagan dizayinda gips maxsulotlarimizani sizga taqdim qilamiza, bu juda sifatliy va zamon talabiga jovob beradigan darajada boliwini tammillaymiz. Agarda bizning kataligimizada sizga mos keladigan narsa topa olmagan bolsangiz, biz bilan boglanishingizni soraymiz, biz sizning goyangiz va hoxishlaringiz bilan birga hamkorlikda ham ishlaymiz !!! <br /><br />--}}
                                                    </p>
                                                    <a href="{{ route('categories') }}/{{ $cat->slug }}" class="read-more-btn">Batafsil</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                @if($loop->index == 3)
                                    @break
                                @endif
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- END CONTENT -->
@endsection