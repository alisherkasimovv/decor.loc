@extends('adminlte::page')

@section('title', 'Address')

@section('content_header')
    <h1>Edit address</h1>
@stop

@section('content')
    {{Form::open([
		'route'	=> ['addresses.update', $address],
		'method' =>	'put'
	])}}

    @include('admin.partials.errors')
    <div class="row">
        <div class="col-md-10 col-xs-12">

            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Address creation</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="form-group">
                        {{ Form::label('city', 'City', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-map-pin"></i></span>
                            {{ Form::text("city",
                                old("city") ? old("city") : (!empty($address) ? $address->city : null),
                                ["class" => "form-control", "placeholder" => "City"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('address', 'Address', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-building"></i></span>
                            {{ Form::text("address",
                                old("address") ? old("address") : (!empty($address) ? $address->address : null),
                                ["class" => "form-control", "placeholder" => "Address"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('phone', 'Phone', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-phone"></i></span>
                            {{ Form::text("phone",
                                old("phone") ? old("phone") : (!empty($address) ? $address->phone : null),
                                ["class" => "form-control", "id" => "phone", "placeholder" => "Phone"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('email', 'Email', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-at"></i></span>
                            {{ Form::text("email",
                                old("email") ? old("email") : (!empty($address) ? $address->email : null),
                                ["class" => "form-control", "placeholder" => "Email"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('main_office', 'Select type of the office', array("class"=> "control-label")) }}
                        <select class="form-control" id="main" name="main">
                            <option value="0">Branch</option>
                            <option value="1">Main office</option>
                        </select>
                    </div>

                </div>
                <!-- /.box-body -->

                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">Submit</button>
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
