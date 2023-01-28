<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="icon" type="image/x-icon" href="./project/images/Ravicon-loading.png">
    <!-- Docments CSS File -->
    <link rel="stylesheet" href="./project/css/ProfileFriend_Style.css">
    <!-- Doc-popup CSS File -->
    <link rel="stylesheet" href="./project/css/Doc-popup.css">
    <!-- Header CSS File  -->
    <link rel="stylesheet" href="./project/css/Header_Style.css">

    <!-- Render All Elements Normally -->
    <link rel="stylesheet" href="./project/css/normalize.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Font Awesome library -->
    <link rel="stylesheet" href="./project/css/all.min.css">

</head>
<body>
<!-- Start header  -->
<header>
    <div class="container">
        <i class="fa-solid fa-bars toggle-menu" onclick="toggleMenuMainNav()"></i>
        <a href="{{url('/')}}"><img src="./project/images/Logopage.png" alt="logo" class="logo_img"></a>
        <nav>
            <ul class="main-nav" id="main-navMenu">
                <li><a href="{{url('/writiner')}}">Home</a></li>
                <li><a href="{{url('/edit-text')}}">Edit Text</a></li>
                <li><a href="{{url('/document')}}">Documents</a></li>
                <li><a href="{{url('/writiner')}}">Commnuity</a></li>
            </ul>
        </nav>
        <div class="navbar-account">
            <div class="search" id="search">
                <input type="text" class="searchBar" placeholder="Serach...">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="ballStar">
                <div class="star"></div>
                <i class="fa-solid fa-bell" onclick="toggleMenuNot()"></i>
            </div>
            <div class="notification-menu">
                <div class="notification-menu-wrap" id="notificationMenu">
                    <div class="menu">
                        <button>
                            <div class="massage">
                                <i class="fa-solid fa-bell"></i>
                                <p class="Message-text">ssssssssssssssssssssss</p>
                            </div>
                            <div class="close">
                                <i class="fa-solid fa-xmark close"></i>
                            </div>
                        </button>
                        <button>
                            <div class="massage">
                                <i class="fa-solid fa-bell"></i>
                                <p class="Message-text">ssssssssssssssssssssss</p>
                            </div>
                            <div class="close">
                                <i class="fa-solid fa-xmark close"></i>
                            </div>
                        </button>
                        <button>
                            <div class="massage">
                                <i class="fa-solid fa-bell"></i>
                                <p class="Message-text">ssssssssssssssssssssss</p>
                            </div>
                            <div class="close">
                                <i class="fa-solid fa-xmark close"></i>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="fff">
                <img src="./project/images/black_noun_002_03536.jpg" alt="picture_profiles" class="profiles_img" onclick="toggleMenuPro()">
                <div class="profile-menu-wrap" id="profileMenu">
                    <div class="menu">
                        <div class="menu-info">
                            <img src="./project/images/black_noun_002_03536.jpg" alt=""class="hhh">
                            <h2>feras yahay</h2>
                        </div>
                        <a href="{{url('/profile-friend')}}">
                            <i class="fa-solid fa-user"></i>
                            Profile
                        </a>
                        <a href="#">
                            <i class="fa-solid fa-fill-drip"></i>
                            Theme
                        </a>
                        <a href="#">
                            <i class="fa-solid fa-pen"></i>
                            Log out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- End header  -->

<!-- card-FriendProfile -->
<div class="container-card">
    <div class="card-FriendProfile">
        <div class="information">
            <div class="info-name textOverflow">
                <h1 class="name">feras yahydddddddddddddddddddddddddddddddddddddddddddddddda</h1>
                <div class="email">
                    <i class="fa-solid fa-envelope"></i>
                    <p>s439003038@st.uqu.ddddddddddddddddddddddddddddddedu.sa</p>
                </div>
                <div class="data-creadet">
                    <i class="fa-solid fa-clock"></i>
                    <p>Joined April 2022</p>
                </div>

            </div>
            <div class="info-img">
                <div>
                    <img src="./project/images/black_noun_002_03536.jpg" alt="image_profile">
                </div>
                <div class="follower">
                    <p><span>1000</span>  Following </p>
                    <p><span>1000</span>  Followers</p>
                </div>

            </div>
        </div>
        <button class="follow">FOLLOW</button>
        <hr>
        <h3>My share projects</h3>
        <div class="list-project">
            <ul class="project">
                <li><i class="fa-solid fa-file"></i>project CS</li>
                <li><i class="fa-solid fa-file"></i>project CS</li>
                <li><i class="fa-solid fa-file"></i>project CS</li>
                <li><i class="fa-solid fa-file"></i>project CS</li>
            </ul>
        </div>
    </div>
</div>
</div>
<!-- card-FriendProfile -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"></script>
<script src="./project/js/header.js"></script>
<script src="./project/js/popup.js"></script>

</body>
</html>
