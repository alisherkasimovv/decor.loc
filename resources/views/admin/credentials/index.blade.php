@extends('adminlte::page')

@section('title', 'Information about company')

@section('content_header')
    <h1>Overall information about company</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-md-12 col-xs-12">
            <div class="box box-success">
                <div class="box-header with-border">
                    <h3 class="box-title">Company information</h3>
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                        </button>
                    </div>
                    <!-- /.box-tools -->
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div id="lang-en">
                        <span class="badge bg-green" id="lang-help-ru"></span>
                        <dl class="dl-horizontal">
                            <dt>Comapny name</dt>
                            <dd><h2>{{ $credential->name }}</h2><br></dd>
                            <dt>Brief</dt>
                            <dd>{{ $credential->brief }}</dd><br>
                            <dt>Information</dt>
                            <dd>{{ $credential->info }}</dd><br>
                            <dt>Logo</dt>
                            <dd>
                                @foreach($credential->images as $logo)
                                    <div class="col-xs-6">
                                        <img src="{{ url('/') }}/{{ $logo->url }}" alt="{{ $logo->url }}" style="width: 200px;">
                                    </div>
                                @endforeach
                            </dd>
                        </dl><br><br>

                        <h4 class="text-center">Ссылки на социальные сети</h4>

                        <div class="col-md-6 col-md-offset-3">
                            <table class="table">
                                <tbody>
                                <tr>
                                    <th class="text-center"><a href="http://{{ $credential->facebook }}" target="_blank"><i style="font-size: 25px;" class="fa fa-facebook-official"></i></a></th>
                                    <th class="text-center"><a href="http://{{ $credential->telegram }}" target="_blank"><i style="font-size: 25px;" class="fa fa-telegram"></i></a></th>
                                    <th class="text-center"><a href="http://{{ $credential->instagram }}" target="_blank"><i style="font-size: 25px;" class="fa fa-instagram"></i></a></th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <a href="{{route('credentials.edit', $credential)}}" class="btn btn-block btn-primary btn-sm">
                        Edit Credentials
                    </a>
                </div>
            </div>
        </div>
    </div>
@stop