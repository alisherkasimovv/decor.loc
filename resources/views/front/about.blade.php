@extends('layouts.front')

@section('title', 'TheDecor')

@section('content')

    <!-- START CONTENT -->
    <div class="sub-content">

        <!-- START ABOUT US -->
        <section>
            <div class="container">

                <div class="some-about">

                    <div class="row">

                        <div class="col-md-12">
                            <div id="about-slide" class="owl-carousel owl-theme">

                                <div class="item"><img src="images/about-img1.jpg" alt=""></div>
                                <div class="item"><img src="images/about-img2.jpg" alt=""></div>
                                <div class="item"><img src="images/about-img3.jpg" alt=""></div>

                            </div>
                        </div>

                        <div class="about-detail">

                            <div class="col-md-8">
                                <p>{!! $credential->info !!}</p>
                            </div>

                            <div class="col-md-4">
                                <ul>
                                    <li><span class="number">1)</span> <span>Ko`ntseptsiya & Dizayn</span></li>
                                    <li><span class="number">2)</span> <span>Lorem ipsum</span></li>
                                    <li><span class="number">3)</span> <span>Lorem & Ipsum</span></li>
                                    <li><span class="number">4)</span> <span>Lorem Ipsum</span></li>
                                    <li><span class="number">5)</span> <span>Lorem Ipsum</span></li>
                                    <li><span class="number">6)</span> <span>Lorem Ipsum</span></li>
                                </ul>
                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </section>
        <!-- END ABOUT US -->
        <!-- START TEAM -->
        <section class="sec-space">
            <div class="container">

                <div class="row">

                    <div class="col-md-12">
                        <div class="main-heading">
                            <h4 style="padding-top:3rem">Bizning Komandamiz</h4>
                            <br>
                            <h1>thinker</h1>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, reprehenderit?</span>
                        </div>
                    </div>

                    <div class="our-team">

                        @foreach($members as $member)
                        <div class="col-md-4">
                            <div class="team">
                                @foreach($member->images as $image)
                                    <img src="{{ $image->url }}" alt="">
                                    @break
                                @endforeach
                                <div class="detail">

                                    <div class="name">
                                        <h5>{{ $member->name }}</h5>
                                        <span>{{ $member->position }}</span>
                                    </div>

                                    <div class="social-icons">
                                        @if($member->instagram != null)
                                            <a href="{{ $member->instagram }}"><i class="icon-instagram"></i></a>
                                        @endif
                                        @if($member->telegram != null)
                                            <a href="{{ $member->telegram }}"><i class="icon-telegram"></i></a>
                                        @endif
                                        @if($member->facebook != null)
                                            <a href="{{ $member->facebook}}"><i class="icon-facebook"></i></a>
                                        @endif
                                        <a href="tel: {{ $member->phone }}"><i class="icon-phone"></i></a>
                                    </div>

                                    <p>{{ $member->info }}</p>

                                </div>

                            </div>
                        </div>
                        @endforeach

                        <div class="clear"></div>
                    </div>

                </div>

            </div>
        </section>
        <!-- END TEAM -->
        <!-- START CLIENTS -->
        <section class="sec-space gray-bg">
            <div class="container">

                <div class="clients py-5">
                    <div class="row">

                        <div class="col-md-12">
                            <div class="main-heading">
                                <h4>Yaqin</h4>
                            <br>
                                <h1>Klientlar</h1>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae assumenda, dolor a corporis, explicabo ipsam!</span>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="clients-logo">
                                <img src="{{ asset("images/clients-logo.jpg") }}" alt="">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <!-- END CLIENTS -->


    </div>
    <!-- END CONTENT -->

@endsection