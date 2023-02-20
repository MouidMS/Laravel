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


    <link rel="icon" type="image/x-icon" href=".fr/images/Ravicon-loading.png">


    <!-- Main Writiner_home CSS File -->
    <link rel="stylesheet" href="./fr/css/mainStyle.css">
    <link rel="stylesheet" href="./fr/css/Recntl_Style.css">
    <!-- Render All Elements Normally -->
    <link rel="stylesheet" href="./fr/css/normalize.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Font Awesome library -->
    <link rel="stylesheet" href="./fr/css/all.min.css">

</head>
<body>

<div id="mainContainer">
    <div id="contanier">
        <div id="bin1">

            <div id="bin2"></div>
        </div>
        <div id="bin3"></div>
    </div>
</div>

@php
    $last_entry = \App\Models\Project::latest()->first();
    @endphp
@if (is_array($last_entry) || is_object($last_entry))

@endif

@php $ID = $last_entry; @endphp

<form action="{{route('writiner.store')}}" method="post">
    @csrf
    <button id="Buttonmenuplus--A4" name="type" value="A4">
        A4
    </button>

    <button id="Buttonmenuplus--Slide" name="type" value="Slide">Sl
    </button>
    <button id="Buttonmenuplus--Blanck" name="type" value="Blanck">
        Bl
    </button>
    <button id="Buttonmenuplus--main" name="type" value="a4">
        <i class="fa-solid fa-plus "></i>
    </button>

</form>



<!-- Start Header  -->
<header>
    <div class="container">
        <i class="fa-solid fa-bars toggle-menu"></i>
        <a href="{{url('/landpage')}}"><img src="./fr/images/landpage.jpg" alt="logo" class="logo_img"></a>
        <nav>
            <ul class="main-nav">
                <li><a class="#" href="#">Home</a></li>
                <li><a href="#">Text Design</a></li>
                <li><a href="#">Commnuity</a></li>
                <li><a href="#">Tutorial</a></li>
            </ul>
        </nav>
        <div class="navbar-account">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-bell"></i>
            <img src="./fr/images/black_noun_002_03536.jpg" alt="picture_profiles" class="profiles_img" >
        </div>

        <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('frm-logout').submit();">
            Logout
        </a>
        <form id="frm-logout" action="{{ route('logout') }}" method="POST" style="display: none;">
            {{ csrf_field() }}
        </form>
    </div>
</header>
<!-- End Header  -->
<!-- Start content -->
<div class="writiner-home-homescreenmain">
    <div class="writiner-home-header-navbar">
        <nav>
            <ul>
                <li>Recntls</li>
                <li>Drafts</li>
                <li>shared</li>
            </ul>
        </nav>
    </div>
    <div class="writiner-home-title">
        <h3>Recent</h3>
        <div class="title-header">
            <div class="title-rightsaid">
                <label class="label">Sort:</label>
                <select name="sort" class="select-box">
                    <optgroup label="Sort">
                        <option value="">Alphabetical</option>
                        <option value="">Date created</option>
                        <option value="">Last viewed</option>
                    </optgroup>
                    <optgroup label="Order">
                        <option value="">A-z</option>
                        <option value="">Z-A</option>
                    </optgroup>
                </select>
                <div>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div class="title-leftsaid">
                <label class="Fillter">Fillter:</label>
                <select name="Fillter" class="select-box2">
                    <option selected="selected" value="">All files</option>
                    <option value="">Black file</option>
                    <option value="">A4 flie</option>
                    <option value="">Pow file</option>
                </select>
            </div>
        </div>
    </div>

    <div class="grid-holder">
        <div class="grid-item-section">
{{--             <div class="grid-item">--}}
{{--                <div class="holder-item">--}}
{{--                    <div id="main">--}}
{{--                        <a href="page/" style="  all: unset;">--}}
{{--                            <div id="projectTop">--}}
{{--                                <img id="projectType" src="./m/worky/RichTextEditor/projectVeiw/ellipsis-vertical-solid.svg" >--}}
{{--                                <div id="isProjectShared">Copy</div>--}}
{{--                                <img id="projectSitting" src="./m/worky/RichTextEditor/projectVeiw/ellipsis-vertical-solid.svg"/>--}}
{{--                            </div>--}}
{{--                        </a>--}}

{{--                        <p id="projectName"></p>--}}
{{--                        <p id="projectLastUpDate"> Last update: </p>--}}
{{--                        <img id="isProjectFavre" src="./m/worky/RichTextEditor/projectVeiw/star-regular.svg" >--}}
{{--                        <div id="projectOwner"><img src="./storage/profile-photos/1nZpMnByY6jnrigJMkwfzZd61rXtyNdDZIW5Hiqa.png" alt=""></div>--}}

{{--                    </div>--}}
                </div>

            </div>

{{--        <ul class="pagination justify-content-center">--}}
{{--            <li class="page-item disabled">--}}
{{--                <a class="page-link" href="#" tabindex="-1">Previous</a>--}}
{{--            </li>--}}
{{--            <li class="page-item"><a class="page-link" href="?page=1">1</a></li>--}}
{{--            <li class="page-item"><a class="page-link" href="?page=2">2</a></li>--}}
{{--            <li class="page-item"><a class="page-link" href="?page=3">3</a></li>--}}
{{--            <li class="page-item"><a class="page-link" href="?page=4">4</a></li>--}}

{{--            <li class="page-item">--}}
{{--                <a class="page-link" href="#">Next</a>--}}
{{--            </li>--}}
{{--        </ul>--}}



{{--            @endforeach--}}


        </div>

    </div>

</div>


<!-- End content -->
<!-- Start writiner-home -->
<!-- End start writiner-home -->
    <script>


//        $(document).ready(function () {
//            // pages();
//            fetchstudent();
////
//// function pages(){
////     $('.page-link').on('click', function (e) {
////         e.preventDefault();
////         var page = $(this).attr('href').split('?page=')[1];
////         $('.grid-item-section').html(fetchstudent("?page="+page));
////         $.ajax({
////             type: "GET",
////             url: "/fetch-curd?page="+page+"",
////             dataType: "json",
////             success: function (response) {
////                 console.log(response);
////             }
////         });
////     });
//// }
//
//
//            function fetchstudent() {
//
//                $.ajax({
//                    type: "GET",
//                    url: "/fetch-curd/",
//                    dataType: "json",
//                    success: function (response) {
//                        $('.grid-item-section').html("");
//                        console.log(response);
//                        $.each(response, function (key, item) {
//                            // var v = item;
//                            // if(item.Isfavorite === false){
//                            //     var img = "./m/worky/RichTextEditor/projectVeiw/star-regular.svg";
//                            // }else {
//                            //     var img = "./m/worky/RichTextEditor/projectVeiw/star-solid.svg";
//                            // }
//                            //
//                            // if(item.isCopy === false){
//                            //     var copy = '<div id="isProjectShared" >Copy</div>';
//                            // }else {
//                            //     var copy = '<div id="isProjectShared" hidden>Copy</div>';
//                            // }
//                            //
//                            //
//                            // var d = new Date(item.created_at);
//                            // $('.grid-item-section').append(
//                            //     '<div class="grid-item"><div class="holder-item">' +
//                            //     '<div id="main"><a href="page/'+item.id+'" style="  all: unset;">' +
//                            //     '<div id="projectTop">' +
//                            //     '<img id="projectType" src="./m/worky/RichTextEditor/projectVeiw/ellipsis-vertical-solid.svg" >' +
//                            //     copy +
//                            //     '<img id="projectSitting" src="./m/worky/RichTextEditor/projectVeiw/ellipsis-vertical-solid.svg"/></div></a>  ' +
//                            //     '<p id="projectName">'+item.name+'</p><p id="projectLastUpDate"> Last update:'+ d.toLocaleDateString() +' </p>' +
//                            //     '<img id="isProjectFavre" src='+img+' ><div id="projectOwner">' +
//                            //     '<img src='+item.icon+' alt="">' +
//                            //     '</div>' +
//                            //     ' </div>' +
//                            //     '</div>' +
//                            //     '</div>');
//
//                        })
//
//                    }
//            });
//            }
//        });


    </script>


<script type="text/javascript" src="js/recnt.js"></script>

</body>
</html>


