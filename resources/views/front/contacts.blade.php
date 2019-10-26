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
		    <div id='find-us'></div>
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
                                <form action="{{ route('contact.store') }}" method="POST">
                                    <input name="name" type="text" value="{{ old('name') }}" placeholder="Ism">
                                    <input name="email" type="text" value="{{ old('email') }}" placeholder="E-mail Addressi">
                                    <textarea name="message" placeholder="Maktub">{{ old('message') }}</textarea>
                                    @csrf

                                    <input type="submit" value="Jo`natish">
                                </form>
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

<script src='https://maps.googleapis.com/maps/api/js?key=&sensor=false&extension=.js'></script> 
 
<script> 
    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(41.337473,69.225052),
            zoom: 19,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: false,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
        var mapElement = document.getElementById('find-us');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['TheDecor', '{{ $address->address }}', '{{ $address->phone }}', '{{ $address->email }}', 'thedecor.uz', 41.337473, 69.225052, 'http://wahabali.com/themeforest_images/archi-map-icon.png']
        ];
        for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
     }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());
           iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
               if (infoWindowVisible()) {
                   iw.close();
                   infoWindowVisible(false);
               } else {
                   var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a></div>";
                   iw = new google.maps.InfoWindow({content:html});
                   iw.open(map,marker);
                   infoWindowVisible(true);
               }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
 }
}
</script>

@endsection