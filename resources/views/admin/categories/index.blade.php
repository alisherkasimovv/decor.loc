@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Dashboard</h1>
@stop

@section('content')
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">The list of available categories</h3>
        </div>

        <div class="box-body">
            <a href="{{route('categories.create')}}" class="btn btn-success">
                <i class="fa fa-plus" aria-hidden="true"></i> Create new category
            </a>
        </div>

        <!-- /.box-header -->
        <div class="box-body">
            @if (count($categories) > 0)
                <table class="table table-bordered">
                    <tbody>
                    <tr>
                        <th class="table-widths">#</th>
                        <th>Name</th>
                        <th>Images</th>
                        <th class="table-widths">Edit</th>
                        <th class="table-widths">Delete</th>
                    </tr>

                    @foreach($categories as $category)
                        <tr>
                            <td>{{ $category->id }}</td>
                            <td>{{ $category->name }}</td>
                            <td>
                                @foreach($category->images as $image)
                                    <div class="image-thumb">
                                        <img src="{{ url('/') }}/{{ $image->url }}">
                                        <a href="{{ url('admin/categories/remove') }}/{{ $category->id }}/{{ $image->id }}" class="image__deleter">
                                            <span class="fa fa-times-circle"></span>
                                        </a>
                                    </div>
                                @endforeach
                            </td>
                            <td>
                                <a href="{{route('categories.edit', $category)}}" class="btn btn-block btn-primary btn-sm">
                                    <span class="fa fa-edit"></span>
                                </a>
                            </td>
                            <td>
                                {{Form::open(['route'=>['categories.destroy', $category], 'method'=>'delete'])}}
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

                <p>There are no any available categories in database. Please, press button above to create new one.</p>

            @endif

        </div>

        <!-- /.box-body -->
        <div class="box-footer clearfix">
            {{ $categories->render() }}
        </div>
    </div>
@stop

@section('css')
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
@stop
