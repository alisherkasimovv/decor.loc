@extends('adminlte::page')

@section('title', 'Category')

@section('content_header')
    <h1>Create member</h1>
@stop

@section('content')
    {{Form::open([
		'route'	=> ['members.update', $member],
		'method' =>	'put',
		'files'  => true
	])}}

    @include('admin.partials.errors')
    <div class="row">
        <div class="col-md-8 col-xs-12">

            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Category creation</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="form-group">
                        {{ Form::label('name', 'Name', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            {{ Form::text("name",
                                old("name") ? old("name") : (!empty($member) ? $member->name : null),
                                ["class" => "form-control", "placeholder" => "Name"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('info', 'Information', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-sticky-note"></i></span>
                            {{ Form::text("info",
                                old("info") ? old("info") : (!empty($member) ? $member->info : null),
                                ["class" => "form-control"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('phone', 'Phone', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-phone"></i></span>
                            {{ Form::text("phone",
                                old("phone") ? old("phone") : (!empty($member) ? $member->phone : null),
                                ["class" => "form-control", "id" => "phone"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('facebook', 'Facebook', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-facebook"></i></span>
                            {{ Form::text("facebook",
                                old("facebook") ? old("facebook") : (!empty($member) ? $member->facebook : null),
                                ["class" => "form-control"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('instagram', 'Instagram', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-instagram"></i></span>
                            {{ Form::text("instagram",
                                old("instagram") ? old("instagram") : (!empty($member) ? $member->instagram : null),
                                ["class" => "form-control"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('telegram', 'Telegram', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-telegram"></i></span>
                            {{ Form::text("telegram",
                                old("telegram") ? old("telegram") : (!empty($member) ? $member->telegram : null),
                                ["class" => "form-control"]
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
                    Old image<br>
                    @foreach($member->images as $image)
                        <img src="{{ url('/') }}/{{ $image->url }}" style="height: 100px !important;" alt="">
                        <input type="hidden" name="oldImages[]" value="{{ $image->url }}">
                    @endforeach
                    <br>
                    <div class="input-group control-group increment-images" >
                        <input type="file" name="image" class="form-control">
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
