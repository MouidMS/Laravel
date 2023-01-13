<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Writiner_home</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}" />



    <link rel="icon" type="image/x-icon" href=".fr/images/Ravicon-loading.png">


    <script
        src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
        crossorigin="anonymous"></script>

    <!-- Main Writiner_home CSS File -->
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
<!- rename ->

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

            @foreach ($project as $projects)
            <div class="grid-item">
                <div id="PRJmain">
                    <div id="PRJprojectTop">
                        <img id="PRJprojectType" src=".m/worky/RichTextEditor/projectVeiw/ellipsis-vertical-solid.svg" >
                        <div id="PRJisProjectShared">Copy</div>
                        <img id="PRJprojectSitting" src="./ellipsis-vertical-solid.svg"/>
                    </div>
                    <h2 id="PRJprojectName">Porject-1</h2>
                    <h6 id="PRJprojectLastUpDate"> Last update: 2023/10/20</h6>
                    <img id="PRJisProjectFavre" src="./star-regular.svg" >
                    <span id="PRJownerImageBorder"></span>
                    <div id="PRJprojectOwner"><img src="./istockphoto-1309328823-170667a.jpg" alt=""></div>

                </div>



{{--                <div class="holder-item">--}}
{{--                    <div class="grid-item-thumbnail">--}}
{{--                        <a href="page/{{$projects->id}}" style="  all: unset;">--}}

{{--                        <i class="fa-regular fa-file-lines icon-fileline"></i>--}}
{{--                        <div class="icon-star">--}}
{{--                            <i class="fa-regular fa-star star"></i>--}}
{{--                        </div>--}}
{{--                        </a>--}}

{{--                    </div>--}}
{{--                    <div class="grid-item-metadata">--}}
{{--                        <div class="item-title">--}}
{{--                            <h5>{{$projects->name}}</h5>--}}
{{--                        </div>--}}

{{--                        <div class="item-body">--}}

{{--                            <DIV>--}}
{{--                                <img src="./fr/images/black_noun_002_03536.jpg" alt=""  class="profiles-item_img">--}}
{{--                                <p>{{Carbon\Carbon::parse($projects->created_at)->format('Y-m-d')}}</p>--}}
{{--                            </DIV>--}}
{{--                            <div>--}}
{{--                                <!----}}
{{--                                <form action="{{route('writiner.edit',($projects->id))}}" method="put">--}}
{{--                                    <input name="name" placeholder="rename" style="width: 70px" id="save">--}}
{{--                                    <input type="submit">--}}
{{--                                </form>--}}

{{--                                -->--}}
{{--                                <div>--}}
{{--                                    @csrf--}}
{{--                                    <input type="hidden" name="_token" value="{{ csrf_token() }}">--}}
{{--                                    <input type="hidden" name="_method" value="PUT">--}}
{{--                                    <input id='id' name="id" placeholder="id" style="width: 70px" value="{{$projects->id}}">--}}
{{--                                    <input id='name' name="name" placeholder="name" style="width: 70px">--}}
{{--                                    <button id="save" onclick="reNameFun()">jj</button>--}}
{{--                                </div>--}}

{{--                            </div>--}}
{{--                            <i class="fa-solid fa-ellipsis-vertical"></i>--}}
{{--                        </div>--}}
{{--                    </div>--}}

{{--                </div>--}}

            </div>





            @endforeach

        </div>

    </div>
    <div class="d-flex justify-content-center" style="padding-bottom: 40px">

        {{ $project->links() }}

    </div>
</div>


<!-- End content -->
<!-- Start writiner-home -->
<!-- End start writiner-home -->
<script type="text/javascript">


    function reNameFun() {
        /*
        var id = $('#id').val();
        var name = $('#name').val();

        console.log(id)
        console.log(name)

        alert("Handler for .submit() called.   " + name);
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            method: 'PUT',
            url: '{{route('writiner.update',2)}}',
            contentType: 'application/json; charset=utf-8',
            data: {
                "_token": "{{ csrf_token() }}",
                "name": name,
    },
            success: function (data) {
                alert("Data Updated"+ name);
                location.reload();
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
*/


        if (window.XMLHttpRequest) {
            req = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            req = new ActiveXObject("Microsoft.XMLHTTP");
        }

        req.open("POST",`{{route('writiner.update',2)}}`, true)
        req.onreadystatechange = getInfo;
        req.send("name=Henry");





    function getInfo(req, res, done) {
        {
        if (req.readyState !== 4) // check to see if we’re done
        { return; }
        else {
            if (req.status === 200) // check to see if successful
            { // process server data here. . .
                var val = req.responseText;
                document.getElementById('id').innerHTML = val;
            }
            else {
                alert("Request failed: " + req.statusText);
            }
        }
    }}
    }

/*
    /open edit modal
    $(document).on('click','button#save',function() {
        var id = $('#id').val();
        var name = $('#name').val();

        let id = $(this).data('id');
        let dataAction = $(this).data('action');
        $('#formData').attr('action',dataAction);
        $.ajax({
            type: 'GET',
            url : baseUrl+`/writiner/${id}/edit`,
            dataType: "json",
            success: function(res) {
                $('input[name=title]').val(res.post.title);
                $('textarea[name=post_content]').val(res.post.post_content);
                $('#exampleModal').modal('show');
                console.log(res);
            },
            error:function(error) {
                console.log(error)
            }
        })
    })
    */
    /*
    let loadingView = document.getElementById('loading');
    window.addEventListener('load', function loading(){
        setTimeout(function(){
            loadingView.style.display='none';
        },5000)
    })
    */
</script>
</body>
</html>

