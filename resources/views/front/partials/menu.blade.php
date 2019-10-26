<!-- LOADER -->
<div id="loader-wrapper" style="text-align:center">
    @foreach($credential->images as $image)
        <div id="loader"><img src="{{ url('/') }}/{{ $image->url }}" alt="{{ $credential->name }}"><span>Yuklanish...</span></div>
        @break
    @endforeach
    <!--/#loader-->
    <div class="loader-section section-left"></div>
    <!--/#loader-section section-left-->
    <div class="loader-section section-right"></div>
    <!--/#loader-section section-right-->
</div>

<!-- CUSTOM MENU START -->
<div class="mobile-menu">
    <div class="cd-header">
        <a class="cd-primary-nav-trigger" href="javascript:void(0);">
            <span class="cd-menu-icon"></span>
        </a>
    </div>
    <!-- COPY -->
    <nav>
        <ul class="cd-primary-nav">
            <li class="cd-label">Maxsus Menyu</li>
            <li><a href="{{ route('home') }}">Bosh Sahifa</a></li>
            <li><a href="{{ route('categories') }}">Xizmatlarimiz</a></li>
            <li><a href="{{ route('about-us') }}">Biz Xaqimizda</a></li>
            <li><a href="{{ route('contacts') }}">Kontaktlar</a></li>
            <li class="cd-label">Bizga Qo`shiling</li>
            <li class="social-icons">
                <a href="{{ $credential->facebook }}"><span class="icon-facebook-1"></span></a>
                <a href="{{ $credential->telegram }}"><span class="icon-paper-plane"></span></a>
                <a href="{{ $credential->instagram }}"><span class="icon-instagram"></span></a>
                <a href="{{ $address->phone }}"><span class="icon-phone"></span></a>
            </li>

        </ul>
    </nav>
</div>
<!-- CUSTOM MENU END -->

<!-- MAIN HEADER -->
<header class="header-one cb-header">
    <div class="container">

        <div class="header">
            <div class="row">
                <div class="col-md-12">

                    <div class="logo">
                        @foreach($credential->images as $image)
                            <a href="{{ url("/") }}"><img src="{{ url('/') }}/{{ $image->url }}" alt=""></a>
                            @break
                        @endforeach
                    </div>
                    <div class="navigation">
                        <ul>
                            <li class="{{ (request()->is('/')) ? 'select' : '' }}"><a href="{{ url("/") }}">Bosh Sahifa</a></li>
                            <li class="{{ (request()->is('categories*')) ? 'select' : '' }}"><a href="{{ route('categories') }}">Xizmatlarimiz</a></li>
                            <li class="{{ (request()->is('about-us')) ? 'select' : '' }}"><a href="{{ route('about-us') }}">Biz haqimizda</a></li>
                            <li class="{{ (request()->is('contacts')) ? 'select' : '' }}"><a href="{{ route('contacts') }}">Kontaktlar</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- STICKY HEADER -->
<header class="header-two cb-header">
    <div class="container">

        <div class="header">
            <div class="row">
                <div class="col-md-12">
                    <div class="logo">
                        <a href="{{ url("/") }}"><img src="{{ url('/') }}/{{ $image->url }}" alt=""></a>
                    </div>
                    <div class="navigation">
                        <ul>
                            <li class="{{ (request()->is('/')) ? 'select' : '' }}"><a href="{{ url("/") }}">Bosh Sahifa</a></li>
                            <li class="{{ (request()->is('categories*')) ? 'select' : '' }}"><a href="{{ route('categories') }}">Xizmatlarimiz</a></li>
                            <li class="{{ (request()->is('about-us')) ? 'select' : '' }}"><a href="{{ route('about-us') }}">Biz haqimizda</a></li>
                            <li class="{{ (request()->is('contacts')) ? 'select' : '' }}"><a href="{{ route('contacts') }}">Kontaktlar</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    </div>
</header>