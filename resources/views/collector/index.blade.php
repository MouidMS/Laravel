@extends('collector.layouts.layout')

@section('content')
    <h1>Collector</h1>
    <hr>

    <div class="pull-right">

        <a href="{{ route('collector.create') }}">
            <button type="button" class="btn btn-secondary " >Create New Collector</button>
        </a>

        <a href="{{ route('project.index') }}">
            <button type="button" class="btn btn-secondary">Back Projects page</button>
        </a>

    </div>
    <br>

    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif


    <table class="table">
        <thead>
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Path</th>
            <th>Type</th>
            <th>Created At</th>
            <th>Edit</th>

        </tr>
        </thead>
        <tbody>




        @foreach ($collector as $projects)
            <tr>

                <td>{{ ++$i }}</td>
                <td>{{ $projects->name }}</td>
                <td >{{   print_r(json_decode($projects->collector , true)['collector'])  }}</td>
                <td>{{ $projects->created_at }}</td>
                <td>
                    <form action="{{ route('collector.destroy',$projects->id) }}" method="POST" onsubmit="return confirm('Are you sure?');">
                        <button type="button" class="btn btn-primary">Edit</button>
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>

                </td>

                <td>

                </td>
            </tr>
        @endforeach

        </tbody>
    </table>


@endsection
