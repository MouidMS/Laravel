<!DOCTYPE html>
<html>
<head>
    <title>How to upload a file using jQuery AJAX in Laravel 8</title>

    <!-- Meta -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <style type="text/css">
        .displaynone{
            display: none;
        }
    </style>
</head>
<body>

<div class="container">


    <div class="row">

        <div class="col-md-12 col-sm-12 col-xs-12">
            <h4>Upload img</h4>

            <!-- Response message -->
            <div class="alert displaynone" id="responseMsg"></div>

            <!-- File preview -->
            <div id="filepreview" class="displaynone" >
                <img src="" class="displaynone" with="200px" height="200px"><br>

                <a href="#" class="displaynone" >Click Here..</a>
            </div>

            <!-- Form -->
            <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">File    <span class="required">*</span></label>
                <div class="col-md-6 col-sm-6 col-xs-12">

                    <input type='file' id="file" name='file' class="form-control">

                    <!-- Error -->
                    <div class='alert alert-danger mt-2 d-none text-danger' id="err_file"></div>

                </div>
            </div>

            <div class="form-group">
                <div class="col-md-6">
                    <input type="button" id="submit" value='Submit' class='btn btn-success'>
                </div>
            </div>
        </div>
    </div>





    <div class="row">

        <div class="col-md-12 col-sm-12 col-xs-12">
            <h4>Upload PDF</h4>

            <!-- Response message -->
            <div class="alert displaynone" id="responseMsg"></div>

            <!-- File preview -->
            <div id="filepreview" class="displaynone" >
                <img src="" class="displaynone" with="200px" height="200px"><br>

                <a href="#" class="displaynone" >Click Here..</a>
            </div>

            <!-- Form -->
            <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">File    <span class="required">*</span></label>
                <div class="col-md-6 col-sm-6 col-xs-12">

                    <input type='file' id="file_pdf" name='file_pdf' class="form-control">

                    <!-- Error -->
                    <div class='alert alert-danger mt-2 d-none text-danger' id="err_file_pdf"></div>

                </div>
            </div>

            <div class="form-group">
                <div class="col-md-6">
                    <input type="button" id="submitPdf" value='Submit' class='btn btn-success'>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Script -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript">

    var CSRF_TOKEN = document.querySelector('meta[name="csrf-token"]').getAttribute("content");

    $(document).ready(function(){

        $('#submit').click(function(){

            // Get the selected file
            var files = $('#file')[0].files;

            if(files.length > 0){
                var fd = new FormData();

                // Append data
                fd.append('file',files[0]);
                fd.append('_token',CSRF_TOKEN);

                // Hide alert
                $('#responseMsg').hide();

                // AJAX request
                $.ajax({
                    url: "<?php echo e(route('uploadFileImg')); ?>",
                    method: 'post',
                    data: fd,
                    contentType: false,
                    processData: false,
                    dataType: 'json',
                    success: function(response){

                        // Hide error container
                        $('#err_file').removeClass('d-block');
                        $('#err_file').addClass('d-none');

                        if(response.success == 1){ // Uploaded successfully

                            // Response message
                            $('#responseMsg').removeClass("alert-danger");
                            $('#responseMsg').addClass("alert-success");
                            $('#responseMsg').html(response.message);
                            $('#responseMsg').show();

                            // File preview
                            $('#filepreview').show();
                            $('#filepreview img,#filepreview a').hide();
                            if(response.extension == 'jpg' || response.extension == 'jpeg' || response.extension == 'png'){

                                $('#filepreview img').attr('src',response.filepath);
                                $('#filepreview img').show();
                            }else{
                                $('#filepreview a').attr('href',response.filepath).show();
                                $('#filepreview a').show();
                            }
                        }else if(response.success == 2){ // File not uploaded

                            // Response message
                            $('#responseMsg').removeClass("alert-success");
                            $('#responseMsg').addClass("alert-danger");
                            $('#responseMsg').html(response.message);
                            $('#responseMsg').show();
                        }else{
                            // Display Error
                            $('#err_file').text(response.error);
                            $('#err_file').removeClass('d-none');
                            $('#err_file').addClass('d-block');
                        }
                    },
                    error: function(response){
                        console.log("error : " + JSON.stringify(response) );
                    }
                });
            }else{
                alert("Please select a file.");
            }

        });
    });




    $('#submitPdf').click(function(){

        // Get the selected file
        var files = $('#file_pdf')[0].files;

        if(files.length > 0){
            var fd = new FormData();

            // Append data
            fd.append('file',files[0]);
            fd.append('_token',CSRF_TOKEN);

            // Hide alert
            $('#responseMsg').hide();

            // AJAX request
            $.ajax({
                url: "<?php echo e(route('uploadFilePDF')); ?>",
                method: 'post',
                data: fd,
                contentType: false,
                processData: false,
                dataType: 'json',
                success: function(response){

                    // Hide error container
                    $('#err_file_pdf').removeClass('d-block');
                    $('#err_file_pdf').addClass('d-none');

                    if(response.success == 1){ // Uploaded successfully

                        // Response message
                        $('#responseMsg').removeClass("alert-danger");
                        $('#responseMsg').addClass("alert-success");
                        $('#responseMsg').html(response.message);
                        $('#responseMsg').show();

                        // File preview
                        $('#filepreview').show();
                        $('#filepreview img,#filepreview a').hide();
                        if(response.extension == 'jpg' || response.extension === 'jpeg' || response.extension == 'png'){

                            $('#filepreview img').attr('src',response.filepath);
                            $('#filepreview img').show();
                        }else{
                            $('#filepreview a').attr('href',response.filepath).show();
                            $('#filepreview a').show();
                        }
                    }else if(response.success == 2){ // File not uploaded

                        // Response message
                        $('#responseMsg').removeClass("alert-success");
                        $('#responseMsg').addClass("alert-danger");
                        $('#responseMsg').html(response.message);
                        $('#responseMsg').show();
                    }else{
                        // Display Error
                        $('#err_file_pdf').text(response.error);
                        $('#err_file_pdf').removeClass('d-none');
                        $('#err_file_pdf').addClass('d-block');
                    }
                },
                error: function(response){
                    console.log("error : " + JSON.stringify(response) );
                }
            });
        }else{
            alert("Please select a file.");
        }
    });
</script>

</body>
</html>
<?php /**PATH C:\Users\Mouyd\Desktop\Graduation Project II\gp-app\resources\views/landpage/upload.blade.php ENDPATH**/ ?>