<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="301">
    <meta name="author" content="Feras,Muhammad,Yazeed,Muayyad"/>
    <meta name="keywords" content="Recant, Collector, ReadyText Edit,Community"/>
    <meta name="description"
          content="It is a feature that collects the selected projects in one project and organizes them in the form of folders called collectors"/>
    <meta name="theme-color" content="#f5f5ff" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">


    <title>Collector</title>

    <link rel="icon" type="image/x-icon" href="./project/images/Ravicon-loading.png">
    <!-- Docments CSS File -->
    <link rel="stylesheet" href="./project/css/Documents_Style.css">
    <!-- Doc-popup CSS File -->
    <link rel="stylesheet" href="./project/css/Doc-popup.css">
    <!-- Header CSS File  -->
    <link rel="stylesheet" href="./project/css/Header_Style.css">

    <meta name="csrf-token" content="{{ csrf_token() }}" />


    <script
        src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
        crossorigin="anonymous">
    </script>




    <!-- Render All Elements Normally -->
    <link rel="stylesheet" href="./project/css/normalize.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Font Awesome library -->
    <link rel="stylesheet" href="./project/css/all.min.css">

</head>
<body id="gg">


<!-- popupRedXmark-->
<div class="P-popupRedXmark" id="popupRedXmark">
    <div class="popupRedXmark" >
        <button id="closePopRedXmark"><i class="fa-solid fa-xmark"></i></button>
        <div class="poptext">
            <h1 id="H-puptext">Oopes!</h1>
            <P id="P-puptext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt harum iste molestias adipisci repudiandae! Vitae excepturi officia nihil odio perspiciatis accusamus suscipit soluta voluptas nesciunt et debitis, enim earum nostrum!</P>
        </div>
    </div>
</div>


<!-- Start header  -->
<header>
    <div class="container">
        <i class="fa-solid fa-bars toggle-menu" id="btn-toggleMenu"></i>
        <a href="{{url('/')}}"><img src="./project/images/logo.png" alt="logo" class="logo_img"></a>
        <nav>
{{--            <ul class="main-nav" id="main-navMenu">--}}
                <ul class="main-nav" id="main-navMenu">
                    <li><a href="{{url('/writiner')}}">Home</a></li>
                    <li><a href="{{url('/edit-text')}}">ReadyText Edit</a></li>
                    <li><a class="active" href="{{url('/document')}}">Collector</a></li>
                    <li><a href="{{url('/community')}}">Commnuity</a></li>
                </ul>
{{--            </ul>--}}
        </nav>
        <div class="navbar-account">
            <div class="search" id="search">
                <input type="text" class="searchBar" placeholder="Serach...">
                <i id="iconSearch" class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="ballStar">

                @if(\Illuminate\Support\Facades\DB::table('notifications')->where('user_id_receive',\Illuminate\Support\Facades\Auth::id())->exists())
                    <div class="star"></div>
                @else

                @endif

                <i class="fa-solid fa-bell" onclick="toggleMenuNot()"></i>
            </div>
            <div class="notification-menu">
                <div class="notification-menu-wrap" id="notificationMenu">

                    @if(\Illuminate\Support\Facades\DB::table('notifications')->where('user_id_receive',\Illuminate\Support\Facades\Auth::id())->exists())

                        @foreach(\Illuminate\Support\Facades\DB::table('notifications')->where('user_id_receive',\Illuminate\Support\Facades\Auth::id())->get() as $value)
                            <div class="menu">
                                <button>
                                    <div class="massage">
                                        <i class="fa-solid fa-bell"></i>
                                        <p class="Message-text">{{$value->text}}</p>
                                    </div>
                                    <a href="{{url('delete-notification/'.$value->id)}}"><div class="close">
                                            <i class="fa-solid fa-xmark close"></i>
                                        </div></a>
                                </button>

                            </div>
                        @endforeach

                    @else
                        <div class="menu">
                            <button>
                                <div class="massage">
                                    <p class="Message-text">There are no new alerts for you</p>
                                </div>

                            </button>

                        </div>
                    @endif


                </div>
            </div>
            <div class="fff">
                <img src="{{App\Http\Controllers\ProjectController::getIcon()}}" alt="picture_profiles" class="profiles_img" onclick="toggleMenuPro()">
                <div class="profile-menu-wrap" id="profileMenu">
                    <div class="menu">
                        <div class="menu-info">
                            <img src="{{App\Http\Controllers\ProjectController::getIcon()}}" alt=""class="hhh">
                            <h2>{{\Illuminate\Support\Facades\Auth::user()->name}}</h2>
                        </div>
                        <a href="{{url('/user/profile')}}">
                            <i class="fa-solid fa-user"></i>
                            Profile
                        </a>
                        <a href="#">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            Search Friends
                        </a>

                        <a href="#" onclick="document.getElementById('form1').submit();">
                            <i class="fa-solid fa-pen"></i>
                            {{ __('Logout') }}
                        </a>
                        <form id="form1" action="{{ route('logout') }}" method="POST">
                            @csrf
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- End header  -->

<!-- Start documents -->
<div class="doc-container">
    <div class="documents">
        <h1>Collector</h1>
        <hr>
        <div class="doc-title">
            <h2>My collector list</h2>
            <button class="newFolder"  id="addNewProject"><i class="fa-solid fa-folder-plus"></i>New Collector</button>
            <hr>
        </div>
        <div class="doc-list">
            <div class="doc-header">
                <div class="typefolder">
                    Type / Name
                </div>
                <div class="username">
                    Owned
                </div>
                <div class="date">
                    Last open
                </div>
            </div>
            <div class="doc-body">
            </div>
        </div>
    </div>
</div>
<!-- End documents -->


{{--    <div class="setting-menu-wrap" id="settMenu">--}}
{{--        <div class="menu">--}}
{{--            <a href="#">--}}
{{--                <i class="fa-solid fa-folder-open"></i>--}}
{{--                Open--}}
{{--            </a>--}}
{{--            <a href="#">--}}
{{--                <i class="fa-solid fa-file-circle-plus"></i>--}}
{{--                Add project--}}
{{--            </a>--}}
{{--            <!-- <a href="#">--}}
{{--                <i class="fa-solid fa-users"></i>--}}
{{--                Share--}}
{{--            </a> -->--}}
{{--            <a href="#">--}}
{{--                <i class="fa-solid fa-pen"></i>--}}
{{--                Rename--}}
{{--            </a>--}}
{{--            <a href="#">--}}
{{--                <i class="fa-solid fa-trash"></i>--}}
{{--                Remove folder--}}
{{--            </a>--}}
{{--        </div>--}}
{{--    </div>--}}
<!-- popupAddFile  -->


<div id="poupParent">
    <div id="poupChild">
        // pop add file
        <div class="popupAddFile" id="popupAddFile">
            <h1><i class="fa-solid fa-file-circle-plus"></i> Add project</h1>
            <div class="con-pop-AddFile">
                <h1>What you type project is added ?</h1>
                <ul class="AddFile-list" id="AddFileList">
                    <li>
                        <i class="fa-solid fa-file"></i>
                        <div class="typefile">
                            <h3 class="textOverflow">feras yahya al zahrani</h3>
                        </div>
                        <input type="checkbox" class="checkbox-input">
                    </li>

                </ul>
            </div>
            <div class="butt">
                <button class="cancel" id="addProjectCansel">Cancel</button>
                <button class="ok" id="addProjectOk"> Add</button>
            </div>
        </div>


        <!-- popupAddFolder -->
        <div class="popupAddFolder" id="popupAddFolder">
            <h1><i class="fa-solid fa-folder-plus"></i></i> New Collectors</h1>
            <div class="input-container">
                <label class="text">Name Collector :</label>	<br>
                <input type="text" id="collectorName">
                <labal class="text" >What you type collector ?</labal>
            </div>

            <div>
            </div>
            <ul class="typeFolder">
                <li>A4<input type="radio" name="type" checked value="A4"></li>
                <li>Slide<input type="radio" name="type" value="SL"></li>
                <li>White Blank<input type="radio" name="type" value="WB"></li>
            </ul>
            <div class="butt">
                <button class="cancel" id="newCollectorCansel">Cancel</button>
                <button class="ok" id="newCollectorOk" >Create</button>
            </div>
        </div>



        <!-- popupRename -->
        <div class="popupRename" id="popupRename">
            <h1>Rename</h1>
            <label for="">Please enter a new name for the item:</label>
            <br>
            <br>
            <input type="text"  id="renameFiled">
            <div class="butt">
                <a href="#" class="Cancel" id="renameCansel">Cancel</a>
                <a href="#" class="ok" disabled id="renameOk">Ok</a>
            </div>
        </div>

        <!-- popupRemove -->
        <div class="popupRemove" id="popupRemove">
            <h1>Remove</h1>
            <label for="">Are you sure you want to delete the project?</label>
            <br>
            <br>
            <div class="butt">
                <a href="#" class="Cancel" id="removeCansel">Cancel</a>
                <a href="#" class="ok" id="removeOk">Ok</a>
            </div>
        </div>



        <!-- popupRedXmark-->
        <div class="P-popupRedXmark" id="popupRedXmark">
            <div class="popupRedXmark" >
                <i class="fa-solid fa-xmark"></i>
                <div class="poptext">
                    <h1 id="H-puptext">Oopes!</h1>
                    <P id="P-puptext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt harum iste molestias adipisci repudiandae! Vitae excepturi officia nihil odio perspiciatis accusamus suscipit soluta voluptas nesciunt et debitis, enim earum nostrum!</P>
                </div>
            </div>
        </div>
    </div>
</div>




<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"></script>
<script type="module" src="./project/js/collector.js"></script>
<script type="text/javascript" src="./project/js/header.js"></script>
<script type="text/javascript" src="./project/js/Documents.js"></script>
<script type="text/javascript" src="./project/js/popup.js"></script>


</body>
</html>
