<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>community</title>

    <!-- Main Writiner  CSS File -->
    <link rel="stylesheet" href="./project/css/community.css">
    <link rel="stylesheet" href="./project/css/Doc-popup.css">


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
<div id="poupParent">
    <div id="poupChild">
        <div class="popupShare" id="popupShare">
            <ul class="pop-link">
                <li><button class="share-btn" id="btn-community">Commnuity</button></li>
                <li><button class="share-btn" id="btn-friend" >friend</button></li>
            </ul>
            <div class="pop-commnuity" id="pop-commnuity">
                <!-- <div class="communityLeft">
                </div> -->
                <div class="communityRight">

                    <div class="sharetype">
                        <i class="fa-sharp fa-solid fa-share-nodes"></i>
                        <div class="filetype-select">
                            <label for="" class="radio">

                                <input type="checkbox" class="radio__input" name="Origin">
                                Copy
                            </label>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pop-friend" id="pop-friend">
                <div class="con-pop-friend">
                    <input type="text" class="form__input-friend" id="name" placeholder="Email" required="" />
                    <div class="sharetype">
                        <i class="fa-sharp fa-solid fa-share-nodes"></i>
                        <div class="filetype-select">
                            <label for="" class="radio">

                                <input type="checkbox" class="radio__input" name="Origin">
                                Copy
                            </label>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <h1>Friend</h1>
                    <ul class="friend-list">
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

        <div class="popupRename" id="popupRename">
            <h1>Rename</h1>
            <label for="">Please enter a new name for the item:</label>
            <br>
            <br>
            <input type="text" id="renameFiled">
            <div class="butt">
                <a href="#" class="Cancel">Cancel</a>
                <a href="#" class="ok">Ok</a>
            </div>
        </div>

        <div class="popupRemove" id="popupRemove">
            <h1>Remove</h1>
            <label for="">Are you sure you want to delete the project?</label>
            <br>
            <br>
            <div class="butt">
                <a href="#" class="Cancel">Cancel</a>
                <a href="#" class="ok">Ok</a>
            </div>
        </div>
        <div class="popupDescription" id="popupDescription">
            <h1>Description</h1>
            <label>Add project description here :</label>
            <textarea id="pop-textArea" class="textarea-Description" maxlength="348" placeholder="Description...."></textarea>
            <P id="charounter" class="Char-counter">372</P>
            <div class="butt">
                <a href="#" class="Cancel">Cancel</a>
                <a href="#" class="ok">Add</a>
            </div>
        </div>
    </div>
</div>

<!-- Start header  -->
<header>
    <div class="container">
        <i class="fa-solid fa-bars toggle-menu" onclick="toggleMenuMainNav()"></i>
        <a href="Writiner_Landpage.html" class="logo"><img src="./project/images/Logopage.png" alt="logo" class="logo_img"></a>

        <nav>
            <ul class="main-nav" id="main-navMenu">
                <li><a href="{{url('/writiner')}}">Home</a></li>
                <li><a href="{{url('/edit-text')}}">Edit Text</a></li>
                <li><a href="{{url('/document')}}">Documents</a></li>
                <li><a class="active" href="Writiner_community.html">Commnuity</a></li>
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
                        <a href="Writiner_ProfileFriend.html">
                            <i class="fa-solid fa-user"></i>
                            Profile
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

<!-- Start landing  -->
<div class="landing blue">
    <h1>Writiner Community</h1>
    <p>Join the "Writtiner" community, share your research and projects, and experience while gaining new knowledge and experiences from the community.</p>
    <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
</div>

<!-- End landing  -->
<div class="writiner-home-homescreenmain" id="blur">
    <div class="doc-container">
        <!-- //////////////////////////////////////////////////////////////////// -->
        <div class="writiner-home-title">
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
        <div class="doc-container">
            <div class="grid-item-section">
                <div class="grid-item">
                    <div class="holder-item">
                        <div class="grid-item-thumbnail">
                            <i class="fa-regular fa-file-lines icon-fileline"></i>
                            <div class="icon-star">
                                <i class="fa-regular fa-star star"></i>
                            </div>
                        </div>
                        <div class="grid-item-metadata">
                            <div class="item-title">
                                <h5>Lab 7 - draft</h6>
                            </div>
                            <div class="item-body">
                                <DIV>
                                    <img src="./project/images/black_noun_002_03536.jpg" alt=""  class="profiles-item_img">
                                    <p>14 May 2022</p>
                                </DIV>
                                <div class="icon-setting">
                                    <i class="fa-solid fa-ellipsis-vertical" id="icon-sitting"></i>
                                    <!-- <a href="#" onclick="toggle()">blur-blackground</a> -->
                                </div>
                                <div class="setting-project" id="settingProject">
                                    <div class="menu-item">
                                        <button>
                                            <i class="fa-solid fa-users"></i>
                                            Share
                                        </button>
                                        <button>
                                            <i class="fa-solid fa-users-slash"></i>
                                            Unshare
                                        </button>
                                        <button>
                                            <i class="fa-solid fa-pen"></i>
                                            Rename
                                        </button>
                                        <button>
                                            <i class="fa-solid fa-comment"></i>
                                            Description
                                        </button>
                                        <button>
                                            <i class="fa-solid fa-trash"></i>
                                            Remove project
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
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
                                    <img src="./project/images/black_noun_002_03536.jpg" alt=""  class="profiles-item_img">
                                    <p>Opened 5 Apr 2022</p>
                                </DIV>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
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
                                    <img src="./project/images/black_noun_002_03536.jpg" alt=""  class="profiles-item_img">
                                    <p>Opened 5 Apr 2022</p>
                                </DIV>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
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
                                    <img src="./project/images/black_noun_002_03536.jpg" alt=""  class="profiles-item_img">
                                    <p>Opened 5 Apr 2022</p>
                                </DIV>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
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
                                    <img src="./project/images/black_noun_002_03536.jpg" alt=""  class="profiles-item_img">
                                    <p>Opened 5 Apr 2022</p>
                                </DIV>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
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
                                    <img src="./project/images/black_noun_002_03536.jpg" alt=""  class="profiles-item_img">
                                    <p>Opened 5 Apr 2022</p>
                                </DIV>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
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
                                    <img src="./project/images/black_noun_002_03536.jpg" alt=""  class="profiles-item_img">
                                    <p>Opened 5 Apr 2022</p>
                                </DIV>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
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
                                    <img src="./project/images/black_noun_002_03536.jpg" alt=""  class="profiles-item_img">
                                    <p>Opened 5 Apr 2022</p>
                                </DIV>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
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
                                    <img src="./project/images/black_noun_002_03536.jpg" alt=""  class="profiles-item_img">
                                    <p>Opened 5 Apr 2022</p>
                                </DIV>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<!-- End content -->
<!-- Start writiner-home -->
<!-- End start writiner-home -->




<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"></script>
<script src="./project/js/header.js"></script>
<script src="./project/js/Documents.js"></script>
<script src="./project/js/popup.js"></script>
</body>
</html>
