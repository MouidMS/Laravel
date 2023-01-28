{{--@foreach ($project as $projects)--}}
{{--    {{$projects->name}}<br>--}}
{{--    {{$projects->path}}<br>--}}
{{--    {{$projects->type}}<br>--}}
{{--    {{$filename}}--}}
{{--    <p id="borderColor"></p>--}}
{{--    <p id="borderStyle"></p>--}}

{{--@endforeach--}}

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Writiner_home</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <script
        src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
        crossorigin="anonymous"></script>


</head>
<body>


<!-- End content -->
<!-- Start writiner-home -->
<!-- End start writiner-home -->
<script>

    $(document).ready(function () {
        fetchstudent();

        function fetchstudent() {

            $.ajax({
                type: "GET",
                url: "/page/56",
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    $.each(response, function (key, item) {
                        console.log(item);
                        $('body').html(item);


                    })

                }
            });
        }
    });


</script>

</body>
</html>





<!- #################################################### ->
<script>
    //ajax



    //json path []list

    {{--var path = "{{ $projects->path }}"--}}

    {{--console.log(name);--}}
    {{--console.log('------------------');--}}
    {{--console.log(solve('{{$filename}}'));--}}
    {{--console.log('------------------');--}}
    {{--const v = solve('{{$filename}}');--}}
    {{--const vf = (JSON.parse(v));--}}
    {{--console.log(vf)--}}
    {{--console.log('------------------');--}}
    {{--console.log(vf['borderColor'])--}}
    {{--borderColor = vf['borderColor'];--}}
    {{--borderStyle = vf['borderStyle'];--}}
    {{--console.log('------------------');--}}
    {{--document.getElementById('borderColor').innerHTML= borderColor;--}}
    {{--document.getElementById('borderStyle').innerHTML= borderStyle;--}}


    // function solve(input) {
    //     const replaceWith = '"' // e.g. replace &quot; by "
    //     const result = input.replace(/&quot;/g, replaceWith)
    //     return result;
    // }

    {{--var name= [--}}
    {{--     @foreach ($project as $projects)--}}
    {{--    [ "{{ $projects->name }}", "{{ $projects->id }}", "{{ $projects->path }}" ,[v]],--}}
    {{--    @endforeach--}}
    {{--];--}}


    // console.log(name)



</script>
