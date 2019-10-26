@extends('adminlte::page')

@section('title', 'Category')

@section('content_header')
    <h1>Create banner</h1>
@stop

@section('content')
    {{Form::open([
		'route'	=> ['banners.update', $banner],
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
                            <span class="input-group-addon"><i class="fa fa-list"></i></span>
                            {{ Form::text("name",
                                old("name") ? old("name") : (!empty($banner) ? $banner->name : null),
                                ["class" => "form-control", "placeholder" => "Name"]
                            ) }}
                        </div>
                    </div>
                    <br><br>
                    Old images <br>
                    @foreach($banner->images as $image)
                        <img src="{{ url('/') }}/{{ $image->url }}" style="height: 100px !important;" alt="">
                        <input type="hidden" name="old" value="{{ $image->url }}">
                    @endforeach

                    <div class="form-group">
                        {{ Form::label('image', 'Image', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-list"></i></span>
                            <div class="input-group control-group" >
                                <input type="file" name="image" class="form-control">
                            </div>
                        </div>
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
    <script>
        $(document).ready(function() {
            $("#btn-add-image").click(function(){
                var html = $(".clone-img").html();
                $(".increment-images").after(html);
            });

            $("body").on("click","#btn-remove-image",function(){
                $(this).parents("#image-field").remove();
            });
        });
    </script>
@stop
