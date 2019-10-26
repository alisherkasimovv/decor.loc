@extends('adminlte::page')

@section('title', 'Credential')

@section('content_header')
    <h1>Edit credential</h1>
@stop

@section('content')
    {{Form::open([
		'route'	=> ['credentials.update', $credential],
		'method' =>	'put'
	])}}

    @include('admin.partials.errors')
    <div class="row">
        <div class="col-md-8 col-xs-12">

            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Credential creation</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="form-group">
                        {{ Form::label('name', 'Company name', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-map-pin"></i></span>
                            {{ Form::text("name",
                                old("name") ? old("name") : (!empty($credential) ? $credential->name : null),
                                ["class" => "form-control", "placeholder" => "Name"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('brief', 'Brief information', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-building"></i></span>
                            {{ Form::text("brief",
                                old("brief") ? old("brief") : (!empty($credential) ? $credential->brief : null),
                                ["class" => "form-control", "placeholder" => "Credential"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('info', 'Full information', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-building"></i></span>
                            {{ Form::textarea("info",
                                old("info") ? old("info") : (!empty($credential) ? $credential->info : null),
                                ["class" => "form-control", "placeholder" => "Full information"]
                            ) }}
                        </div>
                    </div>

                    <h3>Social networks</h3>
                    <div class="form-group">
                        {{ Form::label('instagram', 'Instagram', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="far fa-instagram"></i></span>
                            {{ Form::text("instagram",
                                old("instagram") ? old("instagram") : (!empty($credential) ? $credential->instagram : null),
                                ["class" => "form-control", "placeholder" => "Instagram"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('facebook', 'Facebook', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-facebook-f"></i></span>
                            {{ Form::text("facebook",
                                old("facebook") ? old("facebook") : (!empty($credential) ? $credential->facebook : null),
                                ["class" => "form-control", "placeholder" => "Facebook"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('telegram', 'Telegram', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-telegram-plane"></i></span>
                            {{ Form::text("telegram",
                                old("telegram") ? old("telegram") : (!empty($credential) ? $credential->telegram : null),
                                ["class" => "form-control", "placeholder" => "Telegram"]
                            ) }}
                        </div>
                    </div>

                    <h3>Fun facts section</h3>

                    <div class="form-group">
                        {{ Form::label('finished', 'Finished works', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-times"></i></span>
                            {{ Form::text("finished",
                                old("finished") ? old("finished") : (!empty($credential) ? $credential->finished : null),
                                ["class" => "form-control", "placeholder" => "Finished works"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('happy', 'Happy customers', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            {{ Form::text("happy",
                                old("happy") ? old("happy") : (!empty($credential) ? $credential->happy : null),
                                ["class" => "form-control", "placeholder" => "Happy customers"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('hours', 'Spent hours', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-calendar-times"></i></span>
                            {{ Form::text("hours",
                                old("hours") ? old("hours") : (!empty($credential) ? $credential->hours : null),
                                ["class" => "form-control", "placeholder" => "Spent hours"]
                            ) }}
                        </div>
                    </div>

                </div>
                <!-- /.box-body -->

                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>

        <div class="col-md-4 col-xs-12">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Upload image</h3>
                </div>
                <div class="box-body">
                    Old logo<br>
                    @foreach($credential->images as $logo)
                        <img src="{{ url('/') }}/{{ $logo->url }}" style="height: 100px !important;" alt="">
                        <input type="hidden" name="oldLogo" value="{{ $logo->url }}">
                    @endforeach
                    <br>
                    <div class="input-group control-group increment-images" >
                        <input type="file" name="logo" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        {{Form::close()}}
    </div>

@stop

@section('js')
    <script src="{{ asset('vendor/jquery.mask.min.js') }}"></script>
    <script> $('#phone').mask('+000 (00) 000-00-00');</script>
@stop
