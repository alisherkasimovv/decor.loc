@extends('layouts.front')

@section('title', 'TheDecor')

@section('content')

<!-- START SUB-BANNER -->
<div class="sub-banner">
    <div class="container">
        <div class="text-detail">
            <h2>Loyiha zakaz qilmoqchi bo`lsangiz. Biz bilan ulaning</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, alias eaque nemo. Eos et sapiente, vero illo ipsum exercitationem distinctio.</p>
            <ul>
                <li><a href="{{ url("/") }}">Bosh Sahifa</a> <span>/</span></li>
                <li class="item-select"><a>Kontaktlar</a></li>
            </ul>
        </div>
    </div>
</div>
<!-- END SUB-BANNER -->


<!-- START CONTENT -->
<div class="sub-content">

    <!--Start Map-->
    <div id='map'>
        <div class="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95865.25941813164!2d69.27646719999998!3d41.3351936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1568381194284!5m2!1sru!2s" width="1200" height="600" frameborder="0" style="border:0; padding-bottom: 3rem " allowfullscreen=""></iframe>
        </div>
    </div>
    <!--End Map-->


    <!-- START CONTACT DETAIL -->
    <section class="sec-space pt-5 mt-5">
        <div class="container">
            <div class="contact-detail">
                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                            @foreach($branches as $branch)
                                <div class="col-md-6">
                                    <h5>{{ $branch->city }}dagi o`fis</h5>
                                    <div class="detail">
                                        <span><strong>Telefon:</strong> {{ $branch->phone }}</span><br>
                                        <span><strong>E-mail:</strong> {{ $branch->email }}</span><br>
                                        <span class="address">{{ $branch->address }}</span>
                                    </div>
                                </div>
                            @endforeach

                        </div>
                    </div>


                    <div class="col-md-4" style="padding-bottom: 3rem">
                        <div class="inquiries">
                            <h5>Ma'lumotlar</h5>
                            <div class="form">
                                <input name=" " type="text" value="" placeholder="Ism">
                                <input name=" " type="text" value="" placeholder="E-mail Addressi">
                                <textarea name="message" placeholder="Maktub"></textarea>
                                <input name=" " type="submit" value="Jo`natish">
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </section>
    <!-- END CONTACT DETAIL -->
</div>
<!-- END CONTENT -->

@endsection