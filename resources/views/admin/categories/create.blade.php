@extends('adminlte::page')

@section('title', 'Category')

@section('content_header')
    <h1>Create category</h1>
@stop

@section('content')
    {{Form::open([
		'route'	=> 'categories.store',
        'files' => true
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
                                old("name") ? old("name") : (!empty($category) ? $category->name : null),
                                ["class" => "form-control", "placeholder" => "Name"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('description', 'Description', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-sticky-note"></i></span>
                            {{ Form::textarea("description",
                                old("description") ? old("description") : (!empty($category) ? $category->description : null),
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
            <div class="box box-solid box-warning">
                <div class="box-header with-border">
                    <h3 class="box-title">Parent category</h3>
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="form-group">
                        <select class="form-control" name="parent_id">
                            <option value="0">-- No parent category --</option>
                            @include('admin.partials.listing', ['categories' => $categories])
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-4 col-xs-12">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Upload images</h3>
                </div>
                <div class="box-body">
                    <div class="input-group control-group increment-images" >
                        <input type="file" name="images[]" class="form-control">
                        <div class="input-group-btn">
                            <button class="btn btn-success" id="btn-add-image" type="button"><i class="glyphicon glyphicon-plus"></i>Add</button>
                        </div>
                    </div>
                    <div class="clone-img hide">
                        <div class="control-group input-group" id="image-field" style="margin-top:10px">
                            <input type="file" name="images[]" class="form-control">
                            <div class="input-group-btn">
                                <button class="btn btn-danger" id="btn-remove-image" type="button"><i class="glyphicon glyphicon-remove"></i> Remove</button>
                            </div>
                        </div>
                    </div>

                    <span class="help-block">You can upload multiple images by pressing Add button</span>
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
