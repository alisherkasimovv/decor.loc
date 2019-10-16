@extends('adminlte::page')

@section('title', 'Comment')

@section('content_header')
    <h1>Create comment</h1>
@stop

@section('content')
    {{Form::open([
		'route'	=> ['comments.update', $comment],
		'method' =>	'put'
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
                                old("name") ? old("name") : (!empty($comment) ? $comment->name : null),
                                ["class" => "form-control", "placeholder" => "Name"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('info', 'Information', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-sticky-note"></i></span>
                            {{ Form::text("info",
                                old("info") ? old("info") : (!empty($comment) ? $comment->info : null),
                                ["class" => "form-control"]
                            ) }}
                        </div>
                    </div>
                    <div class="form-group">
                        {{ Form::label('published', 'Status', array("class"=> "control-label")) }}
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-check"></i></span>
                            {!! Form::select('published', [0 => 'Not published', 1 => 'Published'], null, ['class' => 'form-control']) !!}
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
