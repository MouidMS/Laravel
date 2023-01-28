<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Writiner_home</title>
    <link rel="icon" type="image/x-icon" href="./project/images/Ravicon-loading.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <script
        src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
        crossorigin="anonymous"></script>


    <!-- Main Writiner_home CSS File -->
    <link rel="stylesheet" href="./project/css/Recntl_Style.css">

    <!-- Render All Elements Normally -->
    <link rel="stylesheet" href="./project/css/normalize.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Font Awesome library -->
    <link rel="stylesheet" href="./project/css/all.min.css">
    <link rel="stylesheet" href="./project/css/all.min.css">
    <link rel="stylesheet" href="./project/css/Doc-popup.css">
    <link rel="stylesheet" href="./project/css/Header_Style.css">



</head>
<body id="body">


<div id="mainContainer">
    <div id="contanier">
        <div id="bin1">

            <div id="bin2"></div>
        </div>
        <div id="bin3"></div>
    </div>
</div>


<div id="poupParent">
    <div id="poupChild">
        <div class="popupShare" id="popupShare">
            <ul class="pop-link">
                <li><button class="share-btn" id="btn-community">Commnuity</button></li>
                <li><button class="share-btn" id="btn-friend" >Friend</button></li>
            </ul>
            <div class="pop-commnuity" id="pop-commnuity">
                <div class="copyshare">
                    <i class="fa-sharp fa-solid fa-share-nodes"></i>
                    <div class="copyshare-checkbox">
                        <label for="" class="checkbox">
                            <input type="checkbox" class="checkbox-input">
                            Copy
                        </label>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div class="pop-friend" id="pop-friend">
                <div class="con-pop-friend">
                    <input type="text" class="form__input-friend" id="name" placeholder="Email" required="" />
                    <div class="copyshare">
                        <i class="fa-sharp fa-solid fa-share-nodes"></i>
                        <div class="copyshare-checkbox">
                            <label for="" class="checkbox">
                                <input type="checkbox" class="checkbox-input">
                                Copy
                            </label>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <h1>Friend</h1>
                    <ul class="friend-list scrollDesign">
                        <li>
                            <img src="./project/images/black_noun_002_03536.jpg" alt="" class="profile_img">
                            <div class="profile_info">
                                <h3>feras yahya al zahrani</h3>
                                <p>dddddd</p>
                            </div>
                        </li>
                        <li>
                            <img src="./project/images/black_noun_002_03536.jpg" alt="" class="profile_img">
                            <div class="profile_info">
                                <h3>feras yahya al zahrani</h3>
                                <p>dddddd</p>
                            </div>
                        </li>
                        <li>
                            <img src="./project/images/black_noun_002_03536.jpg" alt="" class="profile_img">
                            <div class="profile_info">
                                <h3>feras yahya al zahrani</h3>
                                <p>dddddd</p>
                            </div>
                        </li>                    <li>
                            <img src="./project/images/black_noun_002_03536.jpg" alt="" class="profile_img">
                            <div class="profile_info">
                                <h3>feras yahya al zahrani</h3>
                                <p>dddddd</p>
                            </div>
                        </li>                    <li>
                            <img src="./project/images/black_noun_002_03536.jpg" alt="" class="profile_img">
                            <div class="profile_info">
                                <h3>feras yahya al zahrani</h3>
                                <p>dddddd</p>
                            </div>
                        </li>                    <li>
                            <img src="./project/images/black_noun_002_03536.jpg" alt="" class="profile_img">
                            <div class="profile_info">
                                <h3>feras yahya al zahrani</h3>
                                <p>dddddd</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="butt">
                <button class="copylink">Copy link</button>
                <div class="buttright">
                    <button class="cancel">Cancel</button>
                    <button class="ok">Share</button>
                </div>
            </div>
        </div>

        <!-- popupRename -->
        <div class="popupRename" id="popupRename">
            <h1>Rename</h1>
            <label for="">Please enter a new name for the item:</label>
            <br>
            <br>
            <input type="text" id="renameFiled">
            <div class="butt">
                <button class="Cancel" id="popReneameCansel">Cancel</button>
                <button type="button" class="ok" id="popReneameOk" disabled>Ok</button>
            </div>
        </div>

        <!-- popupRemove -->
        <div class="popupRemove" id="popupRemove">
            <h1>Remove</h1>
            <label for="">Are you sure you want to delete the project?</label>
            <br>
            <br>
            <div class="butt">
                <button class="popRemoveCancel" id="popRemoveCancel">Cancel</button>
                <button class="popRemoveok" id="popRemoveok">Ok</button>
            </div>
        </div>

        <!-- popupDescription -->
        <div class="popupDescription" id="popupDescription">
            <h1>Description</h1>
            <label>Add project description here :</label>
            <textarea id="pop-textArea" class="textarea-Description scrollDesign" maxlength="255" placeholder="Description...."></textarea>
            <P id="charounter" class="Char-counter">372</P>
            <div class="butt">
                <button class="Cancel">Cancel</button>
                <button class="ok">Add</button>
            </div>
        </div>
    </div>
</div>

<div id="blur">
    <button id="Buttonmenuplus--A4">
        <img src="./project/images/A4.png">
    </button>
    <button id="Buttonmenuplus--Slide">
        <img src="./project/images/Slide.png">
    </button>
    <button id="Buttonmenuplus--Blanck">
        <img src="./project/images/blackboard.png">
    </button>
    <button id="Buttonmenuplus--main">
        <i class="fa-solid fa-plus "></i>
    </button>
    <!-- Start Header  -->
    <header>
        <div class="container">
            <i class="fa-solid fa-bars toggle-menu" onclick="toggleMenuMainNav()"></i>
            <a href="{{url('/')}}"><img src="./project/images/Logopage.png" alt="logo" class="logo_img"></a>
            <nav>
                <ul class="main-nav" id="main-navMenu">
                    <li><a class="active" href="{{url('/writiner')}}">Home</a></li>
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
    <!-- End Header  -->
    <!-- Start content -->
    <div class="writiner-home-homescreenmain" id="blur">
        <div class="doc-container">
            <div class="writiner-home-header-navbar">
                <nav>
                    <ul>
                        <li class="active">Recntls</li>
                        <li>Drafts</li>
                    </ul>
                </nav>
            </div>

            <!-- //////////////////////////////////////////////////////////////////// -->
            <div class="writiner-home-title">
                <h1>Recent</h1>
                <hr>
                <div class="title-header">
                    <div class="title-rightsaid">
                        <label class="label">Sort:
                            <select name="sort" class="select-box">
                                <option value="">Last viewed</option>
                                <option value="">Alphabetical</option>
                                <option value="">Date created</option>
                            </select>
                        </label>

                        <div class="star">
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
                    </div>
        <div class="grid-holder">

{{--            <div class="doc-container">--}}
{{--                <!--Jacascrpit continer-->--}}


{{--            </div>--}}


            <div class="grid-item-section">


                <!---   <div class="grid-item">
                       <div class="holder-item">
                           <div class="grid-item-thumbnail">
                               <i class="fa-regular fa-file icon-fileline"></i>
                               <div class="icon-star">
                                   <i class="fa-regular fa-star star"></i>
                               </div>
                           </div>
                           <div class="grid-item-metadata">
                               <div class="item-title">
                                   <h5>Image Enancmet</h6>
                               </div>
                               <div class="item-body">
                                   <DIV>
                                   <img src="/images/black_noun_002_03536.jpg" alt=""  class="profiles-item_img">
                                   <p>Opened 5 Apr 2022</p>
                                   </DIV>
                                   <i class="fa-solid fa-ellipsis-vertical"></i>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           -->
            </div>

        </div>
        <!-- End content -->
        <!-- Start writiner-home -->
        <!-- End start writiner-home -->
    </div>
</div>

</body>
<script src="./project/js/bootstrap.bundle.min.js"></script>
<script src="./project/js/popup.js"></script>
    <!-- <script src="/js/Buttonmenuplus.js"></script> -->
<script type="text/javascript" src="./project/js/recnt.js"></script>
<script type="text/javascript" src="./project/js/header.js"></script>


</html>
