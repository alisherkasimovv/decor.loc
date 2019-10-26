@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Dashboard</h1>
@stop

@section('content')
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">The list of available banners</h3>
        </div>

        <div class="box-body">
            <a href="{{route('banners.create')}}" class="btn btn-success">
                <i class="fa fa-plus" aria-hidden="true"></i> Create new banner
            </a>
        </div>

        <!-- /.box-header -->
        <div class="box-body">
            @if (count($banners) > 0)
                <table class="table table-bordered">
                    <tbody>
                    <tr>
                        <th class="table-widths">#</th>
                        <th>Name</th>
                        <th>Images</th>
                        <th class="table-widths">Edit</th>
                        <th class="table-widths">Delete</th>
                    </tr>

                    @foreach($banners as $banner)
                        <tr>
                            <td>{{ $banner->id }}</td>
                            <td>{{ $banner->name }}</td>
                            <td>
                                @foreach($banner->images as $image)
                                    <img src="{{ url('/') }}/{{ $image->url }}" style="height: 100px;">
                                    @break
                                @endforeach
                            </td>
                            <td>
                                <a href="{{route('banners.edit', $banner)}}" class="btn btn-block btn-primary btn-sm">
                                    <span class="fa fa-edit"></span>
                                </a>
                            </td>
                            <td>
                                {{Form::open(['route'=>['banners.destroy', $banner], 'method'=>'delete'])}}
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

                <p>There are no any available banners in database. Please, press button above to create new one.</p>

            @endif

        </div>

        <!-- /.box-body -->
        <div class="box-footer clearfix">
            {{ $banners->render() }}
        </div>
    </div>
@stop

@section('css')
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
@stop
