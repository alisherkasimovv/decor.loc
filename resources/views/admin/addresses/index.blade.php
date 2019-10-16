@extends('adminlte::page')

@section('title', 'Addresses')

@section('content_header')
    <h1>Addresses</h1>
@stop

@section('content')
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">The list of available addresses</h3>
        </div>

        <div class="box-body">
            <a href="{{route('addresses.create')}}" class="btn btn-success">
                <i class="fa fa-plus" aria-hidden="true"></i> Create new address
            </a>
        </div>

        <!-- /.box-header -->
        <div class="box-body">
            @if (count($addresses) > 0)
                <table class="table table-bordered">
                    <tbody>
                    <tr>
                        <th class="table-widths">#</th>
                        <th>City</th>
                        <th>Address</th>
                        <th class="table-widths">Edit</th>
                        <th class="table-widths">Delete</th>
                    </tr>

                    @foreach($addresses as $address)
                        <tr>
                            <td>{{ $address->id }}</td>
                            <td>{{ $address->city }}</td>
                            <td>{{ $address->address }}</td>
                            <td>
                                <a href="{{route('addresses.edit', $address)}}" class="btn btn-block btn-primary btn-sm">
                                    <span class="fa fa-edit"></span>
                                </a>
                            </td>
                            <td>
                                {{Form::open(['route'=>['addresses.destroy', $address], 'method'=>'delete'])}}
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
            {{ $addresses->render() }}
        </div>
    </div>
@stop

@section('css')
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
@stop
