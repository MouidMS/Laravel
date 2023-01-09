@extends('projects.layout.layout')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Laravel CRUD Example</h2>
            </div>
            <br>
            <div class="pull-right">

                    <a href="{{ route('project.create') }}">
                        <button type="button" class="btn btn-secondary " >Create New Project</button>
                    </a>

                <a href="{{ route('collector.index') }}">
                    <button type="button" class="btn btn-secondary">Collector</button>
                </a>

            </div>
            <br>
        </div>
    </div>

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
        @foreach ($project as $projects)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $projects->name }}</td>
                <td>{{ $projects->path }}</td>
                <td>{{ $projects->type }}</td>
                <td>{{ $projects->created_at }}</td>
                <td>
                    <form action="{{ route('project.destroy',$projects->id) }}" method="POST" onsubmit="return confirm('Are you sure?');">
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

    <div class="d-flex justify-content-center">
        {!! $project->links() !!}
    </div>

@endsection
