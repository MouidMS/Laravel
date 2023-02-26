<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Datatables</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.12.1/datatables.min.css" />
</head>

<body>
<div class="container-fluid">
    <div class="row">
        <h1 class="text-center fw-bold">Bootstrap Datatable</h1>
    </div>
    <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
            <div class="mb-3">
                <!-- Button trigger modal -->
                <button type="button" id="createNewBook" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#addmodel">
                    Add Record
                </button>
            </div>



            <table id="datatables" class="table">
                <thead>
                <tr>
                    <th scope="col">Book_ID</th>
                    <th scope="col">Book_Name</th>
                    <th scope="col">Auther</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody id="tbody">

                @foreach ($books as $row)
                    <tr>
                        <th scope="row">{{ $row->id }}</th>
                        <td>{{ $row->name }}</td>
                        <td>{{ $row->user_id }}</td>
                        <td>
                            <a href="javascript:void(0)" data-toggle="tooltip" data-id="' . $row->id . '"
                               data-original-title="Edit" class="edit btn btn-primary btn-sm editBook">Edit


                                <form id="bookForm" name="bookForm" class="form-horizontal">
                                    @csrf
                                    <input type="hidden" name="book_id" id="book_id" value="{{$row->id}}">

                                    <div class="form-group">
                                        <label for="name" class="col-sm-2 control-label">Title</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="title" name="title"
                                                   placeholder="Enter Title" value="" maxlength="50" required="">
                                        </div>
                                    </div>

                                    <div class="form-group mt-3">
                                        <label class="col-sm-2 control-label">Author</label>
                                        <div class="col-sm-12">
                            <textarea id="author" name="author" required="" placeholder="Enter Author"
                                      class="form-control"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-sm-offset-2 col-sm-10 mt-3">
                                        <button type="submit" class="btn btn-primary" id="saveBtn" value="create">Save changes
                                        </button>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </form>
                            </a>
                            <a href="javascript:void(0)" data-toggle="tooltip" data-id="' . $row->id . '"
                               data-original-title="Delete" class="btn btn-danger btn-sm deleteBook">Delete</a>
                        </td>
                    </tr>

                @endforeach
                </tbody>
            </table>





        </div>
        <div class="col-lg-2"></div>
    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="addmodel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add New Book</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">




            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>



<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.12.1/datatables.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">
</script>





<script type="text/javascript">



    $("#bookForm").submit(function(e) {
        e.preventDefault();

        var id = $("#book_id").val();
        var title = $("#title").val();
       var _token = $("input[name=_token]").val();

       console.log(id)
        $.ajax({
            type: "PUT",
            url: "{{route('writiner.update',2)}}",
            data: {
                name: title,
                _token: _token
            },
            success: function(response) {
                if (response) {
                    $('#tbody').load(document.URL +  ' #tbody');
                    $("#bookForm")[0].reset();
                    $("#addmodel").modal("hide");
                }
            }
        });
        });
</script>
