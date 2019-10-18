<!-- START FOOTER -->
<footer class="footer" style="margin-top: 3rem">
    <div class="container">
        <div class="footer-detail">
            <div class="row">
                <div class="col-md-4">
                    <div class="footer-sec">
                        <h3>Telefon Raqamimiz</h3>
                        <span>{{ $address->phone }}<br />{{ $address->email }}</span>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="footer-sec">
                        <h3>Manzilimiz</h3>
                        <span>{{ $address->address }}</span>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="footer-sec">
                        <h3>Biz Bilan Bog`lanish</h3>
                        <div class="social-icons">
                            <a href="{{ $credential->facebook }}" class="fb"><i class="icon-facebook-1"></i></a>
                            <a href="{{ $credential->instagram }}" class="tw"><i class="icon-instagram"></i></a>
                            <a href="{{ $credential->telegram }}" class="gp"><i class="icon-paper-plane"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="copyrights pb-5">
            <div class="container">
            </div>
        </div>
    </div>
</footer>
<!-- END FOOTER -->


</div>