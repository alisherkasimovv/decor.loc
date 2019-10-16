@extends('adminlte::page')

@section('title', 'Members')

@section('content_header')
    <h1>Members</h1>
@stop

@section('content')
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">The list of available members</h3>
        </div>

        <div class="box-body">
            <a href="{{route('members.create')}}" class="btn btn-success">
                <i class="fa fa-plus" aria-hidden="true"></i> Create new member
            </a>
        </div>

        <!-- /.box-header -->
        <div class="box-body">
            @if (count($members) > 0)
                <table class="table table-bordered">
                    <tbody>
                    <tr>
                        <th class="table-widths">#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th class="table-widths">Edit</th>
                        <th class="table-widths">Delete</th>
                    </tr>

                    @foreach($members as $member)
                        <tr>
                            <td>{{ $member->id }}</td>
                            <td>{{ $member->name }}</td>
                            <td>
                                @foreach($member->images as $image)
                                    <img src="{{ url('/') }}/{{ $image->url }}" style="width: 100px" alt="">
                                @endforeach
                            </td>
                            <td>
                                <a href="{{route('members.edit', $member)}}" class="btn btn-block btn-primary btn-sm">
                                    <span class="fa fa-edit"></span>
                                </a>
                            </td>
                            <td>
                                {{Form::open(['route'=>['members.destroy', $member], 'method'=>'delete'])}}
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
            {{ $members->render() }}
        </div>
    </div>
@stop

@section('css')
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
@stop
