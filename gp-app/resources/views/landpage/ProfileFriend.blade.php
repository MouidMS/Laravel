<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Card</title>

    <link rel="icon" type="image/x-icon" href="../project/images/Ravicon-loading.png">
    <!-- Docments CSS File -->
    <link rel="stylesheet" href="../project/css/ProfileFriend_Style.css">
    <!-- Doc-popup CSS File -->
    <link rel="stylesheet" href="../project/css/Doc-popup.css">
    <!-- Header CSS File  -->
    <link rel="stylesheet" href="../project/css/Header_Style.css">
    <!-- Render All Elements Normally -->
    <link rel="stylesheet" href="../project/css/normalize.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Font Awesome library -->
    <link rel="stylesheet" href="../project/css/all.min.css">

</head>
<body>
<!-- Start Header  -->
<header>
    <div class="container">
        <i class="fa-solid fa-bars toggle-menu"  id="btn-toggleMenu"></i>
        <a href="{{url('/')}}" id="logoHead"><img src="../project/images/logo.png" alt="logo" class="logo_img"></a>
        <nav id="mainMenuHead">
            <ul class="main-nav" id="main-navMenu">
                <li><a class="active" href="{{url('/writiner')}}">Home</a></li>
                <li><a href="{{url('/edit-text')}}">ReadyEdit Text</a></li>
                <li><a href="{{url('/document')}}">Collector</a></li>
                <li><a href="{{url('/community')}}">Community</a></li>
            </ul>
        </nav>
        <div class="navbar-account">

            <div class="search" id="search">
                <input type="text" class="searchBar" id="searchBar" placeholder="Serach...">
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
<!-- End Header  -->

<!-- card-FriendProfile -->
<div class="container-card">
    <div class="card-FriendProfile">
        <div class="information">
            <div class="info-name textOverflow">
                <h1 class="name">{{$user->name}}</h1>
                <div class="email">
                    <i class="fa-solid fa-envelope"></i>
                    <p>{{$user->email}}</p>
                </div>
                <div class="data-creadet">
                    <i class="fa-solid fa-clock"></i>
                    <p>
                        {{ \Carbon\Carbon::parse($user->created_at)->format('F-Y') }}


                    </p>
                </div>

            </div>
            <div class="info-img">
                <div>
                    <img src="{{App\Http\Controllers\ProjectController::getIconWithAuth($id)}}" alt="image_profile">
                </div>
                <div class="follower">
                    <p><span>{{ App\Http\Controllers\ProjectController::getCountFollowerFromId($id)[0]}}</span>  Following </p>
                    <p><span>{{ App\Http\Controllers\ProjectController::getCountFollowerFromId($id)[1]}}</span>  Followers</p>
                </div>

            </div>
        </div>

        @if (\Illuminate\Support\Facades\Auth::user()->id === $id)
        @elseif(\Illuminate\Support\Facades\Auth::user()->id != $id)

            @if(App\Http\Controllers\ProjectController::ifFollowOrNot($id) == false)
                  <a href="{{url('add-friends/'.$id)}}"> <button class="follow" >FOLLOW</button></a>
            @else
                <a href="{{url('delete-friends/'.$id)}}"> <button class="follow">UNFOLLOW</button></a>

                @endif
            @endif


        <hr>
        <h3>My share projects</h3>
        <div class="list-project">
            <ul class="project">

                <?php

                $projects = \Illuminate\Support\Facades\DB::table('sher_projects')->where('owner_id', $id)->get();

                ?>


                @foreach($projects as $p)

               <a href="{{url('page-community-id/'.$p->id)}}" style="    text-decoration:none; "><li><i class="fa-solid fa-file"></i>{{App\Http\Controllers\ProjectController::getNameProject($p->project_id) }}</li></a>

                @endforeach
            </ul>
        </div>
    </div>
</div>
</div>
<!-- card-FriendProfile -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"></script>
<script src="../project/js/header.js"></script>
<script src="../project/js/popup.js"></script>

</body>
</html>
