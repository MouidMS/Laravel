<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="301">
    <meta name="author" content="Feras,Muhammad,Yazeed,Muayyad"/>
    <meta name="keywords" content="Recant, Collector, ReadyText Edit,Community"/>
    <meta name="description"
          content="It is a feature in the application that is a set of adjustments that are limited to the basic text formatting tools."/>
    <meta name="theme-color" content="#f5f5ff" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">




    <title>ReadyEdit Text</title>

    <link rel="icon" type="image/x-icon" href="./project/images/Ravicon-loading.png">
    <!-- Main Writiner_home CSS File -->
    <link rel="stylesheet" href="./project/css/EditText_Style.css">
    <!-- Render All Elements Normally -->
    <link rel="stylesheet" href="./project/css/normalize.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Font Awesome library -->
    <link rel="stylesheet" href="./project/css/all.min.css">
    <link rel="stylesheet" href="./project/css/all.min.css">

    <link rel="stylesheet" href="./project/css/bondi.css">
    <link rel="stylesheet" href="./project/css/normalize.css">
    <link rel="stylesheet" href="./project/css/bondi.css">
    <link rel="stylesheet" href="./project/css/Header_Style.css">


    <script
        src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
        crossorigin="anonymous">
    </script>



    <script src="./project/js/bootstrap.bundle.min.js"></script>

</head>
<body>
<!-- Start header  -->
<header>
    <div class="container">
        <i class="fa-solid fa-bars toggle-menu" id="btn-toggleMenu"></i>
        <a href="{{url('/')}}"><img src="./project/images/Logopage.png" alt="logo" class="logo_img"></a>
        <nav>
            <ul class="main-nav" id="main-navMenu">
                <ul class="main-nav" id="main-navMenu">
                    <li><a href="{{url('/writiner')}}">Home</a></li>
                    <li><a class="active" href="{{url('/edit-text')}}">ReadyText Edit </a></li>
                    <li><a href="{{url('/document')}}">Collector</a></li>
                    <li><a href="{{url('/community')}}">Commnuity</a></li>
                </ul>
            </ul>
        </nav>
        <div class="navbar-account">

            <div class="search" id="search">
                <input type="text" class="searchBar" placeholder="Serach...">
                <i class="fa-solid fa-magnifying-glass"></i>
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
            </div>        </div>
    </div>
        </header>
<!-- End header  -->

<!-- Start edit text -->
<div class="editText-container">
    <div class="filesText">
        <H1>ReadyText Edit</H1>
        <hr>
        <h2>Files Text</h2>
        <div class="filesText-box">
            <div class="hold-files" id="fileHolder">

            </div>
            <div class="butt-arow">
                <button id="addRDE">+</button>
                <hr>
                <button id="deleteRDE">-</button>
            </div>
        </div>
    </div>
    <div class="editText">
        <h2>Format Text</h2>
        <div class="formatText">
            <div class="formatText-box">
                <!-- <div class="format-top"> -->
                <select name="" id="font-style">
                    <option value="Option 1">Arial (headings)</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                </select>
                <select name="" id="Font-size">
                    <option value="Option 1">H1</option>
                    <option value="Option 2">H2</option>
                    <option value="Option 3">H3</option>
                    <option value="Option 4">H4</option>
                    <option value="Option 5">H5</option>
                    <option value="Option 6">H6</option>
                    <option value="Option 7">H7</option>
                </select>
                <button id="bold"><i class="fa-solid fa-bold"></i></button>
                <button id="italic"><i class="fa-solid fa-italic"></i></button>
                <button id="underline" ><i class="fa-solid fa-underline"></i></button>
                <button id="strikethrough"><i class="fa-solid fa-strikethrough"></i></button>
                <button> <i class="fa-solid fa-highlighter"></i> <input type="color" id="highlighter"></button>
                <button> <i class="fa-solid fa-a"></i><i class="fa-solid fa-caret-down"></i> <input type="color" id="color"></button>
                <button id="align-left"><i class="fa-solid fa-align-left"></i></button>
                <button id="align-center"><i class="fa-solid fa-align-center"></i></button>
                <button id="align-right"><i class="fa-solid fa-align-right"></i></button>
                <button id="align-justify"><i class="fa-solid fa-align-justify"></i></button>
                <button id="superscript"><i class="fa-solid fa-superscript"></i></button>
                <button id="subscript"><i class="fa-solid fa-subscript"></i></button>
                <button id="link"><i class="fa-solid fa-link"></i></button>
                <button id="unLink"><i class="fa-solid fa-link"></i></button>

                <!-- </div> -->
            </div>
        </div>
        <!-- <h2>Text:</h2> -->
        <div class="text">
            <div class="text-box">
                <P id="targitText">Writiner</P>
            </div>
            <div class="butt-saveText">
                <button>Save</button>
            </div>
        </div>
    </div>
</div>
<!-- End edit text -->
<script type="module" src="./project/js/readytext.js"></script>
<script type="text/javascript" src="./project/js/header.js"></script>

</body>
</html>
