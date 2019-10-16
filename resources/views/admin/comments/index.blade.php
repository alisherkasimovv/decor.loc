@extends('adminlte::page')

@section('title', 'Comments')

@section('content_header')
    <h1>Comments</h1>
@stop

@section('content')
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">The list of available comments</h3>
        </div>

        <div class="box-body">
            <a href="{{route('comments.create')}}" class="btn btn-success">
                <i class="fa fa-plus" aria-hidden="true"></i> Create new comment
            </a>
        </div>

        <!-- /.box-header -->
        <div class="box-body">
            @if (count($comments) > 0)
                <table class="table table-bordered">
                    <tbody>
                    <tr>
                        <th class="table-widths">#</th>
                        <th>Client</th>
                        <th>Text</th>
                        <th class="table-widths">Edit</th>
                        <th class="table-widths">Delete</th>
                    </tr>

                    @foreach($comments as $comment)
                        <tr>
                            <td>{{ $comment->id }}</td>
                            <td>{{ $comment->client }}</td>
                            <td>{{ $comment->text }}</td>
                            <td>
                                <a href="{{route('comments.edit', $comment)}}" class="btn btn-block btn-primary btn-sm">
                                    <span class="fa fa-edit"></span>
                                </a>
                            </td>
                            <td>
                                {{Form::open(['route'=>['comments.destroy', $comment], 'method'=>'delete'])}}
                                <button onclick="return confirm('Are you sure?')" type="submit" class="delete btn btn-block btn-danger btn-sm">
                                    <i class="fa fa-remove"></i>
                                </button>
                                {{Form::close()}}
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            @else

                <p>There are no any available comments in database. Please, press button above to create new one.</p>

            @endif

        </div>

        <!-- /.box-body -->
        <div class="box-footer clearfix">
            {{ $comments->render() }}
        </div>
    </div>
@stop

@section('css')
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
@stop
