<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="301">
    <meta name="author" content="Feras,Muhammad,Yazeed,Muayyad"/>
    <meta name="keywords" content="Recant, Collector, ReadyText Edit,Community"/>
    <meta name="description"
          content="It is a page that displays projects that have been created recently. Projects are also received from friends or from the community page."/>
    <meta name="theme-color" content="#f5f5ff" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">



    <title>Writiner_home</title>
    <link rel="icon" type="image/x-icon" href="./project/images/Ravicon-loading.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>" />

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
                <li><button class="share-btn" id="btn-community">Community</button></li>
                <li><button class="share-btn" id="btn-friend" >Friend</button></li>
            </ul>
            <div class="pop-commnuity" id="pop-commnuity">
                <div class="copyshare">
                    <i class="fa-sharp fa-solid fa-share-nodes"></i>
                    <div class="copyshare-checkbox">
                        <label for="" class="checkbox">
                            <input type="checkbox" id="commuintyCheck" class="checkbox-input">
                            Copy
                        </label>
                        <p>authorizes users to take a copy.</p>
                    </div>
                </div>
                <hr>
                <div class="butt">
                    <div class="buttright">
                        <button class="cancel" id="communityCansel">Cancel</button>
                        <button class="ok" id="communityOK">Share</button>
                    </div>
                </div>
            </div>



            <div class="pop-friend" id="pop-friend">
                <div class="con-pop-friend">
                    <input type="text"  class="form__input-friend" id="charEmail" placeholder="Email" required="" />
                    <div class="copyshare">
                        <i class="fa-sharp fa-solid fa-share-nodes"></i>
                        <div class="copyshare-checkbox">
                            <label for="" class="checkbox">
                                <input type="checkbox" id="friendCheck" class="checkbox-input">
                                Copy
                            </label>
                            <p>authorizes users to take a copy.</p>
                        </div>
                    </div>
                    <h1>Friend</h1>
                    <ul class="friend-list" id="friendList">

                    </ul>
                </div>
                <hr>
                <div class="butt">
                    <div class="buttright">
                        <button class="cancel" id="friendCancel">Cancel</button>
                        <button class="ok" id="friendOk" disabled>send</button>
                    </div>
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
                <button class="Cancel" id="popupDescriptionCancel">Cancel</button>
                <button class="ok" id="popupDescriptionOk">Add</button>
            </div>
        </div>
    </div>
</div>


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



<div id="blur">
    <button id="Buttonmenuplus--A4">
        <img src="./project/images/A4B.png">
    </button>
    <button id="Buttonmenuplus--Slide">
        <img src="./project/images/SLB.png">
    </button>
    <button id="Buttonmenuplus--Blanck">
        <img src="./project/images/WBB.png">
    </button>
    <button id="Buttonmenuplus--main">
        <i class="fa-solid fa-plus "></i>
    </button>
    <!-- Start Header  -->
    <header>
        <div class="container">
            <i class="fa-solid fa-bars toggle-menu"  id="btn-toggleMenu"></i>
            <a href="<?php echo e(url('/')); ?>" id="logoHead"><img src="./project/images/logo.png" alt="logo" class="logo_img"></a>
            <nav id="mainMenuHead">
                <ul class="main-nav" id="main-navMenu">
                    <li><a class="active" href="<?php echo e(url('/writiner')); ?>">Home</a></li>
                    <li><a href="<?php echo e(url('/edit-text')); ?>">ReadyEdit Text</a></li>
                    <li><a href="<?php echo e(url('/document')); ?>">Collector</a></li>
                    <li><a href="<?php echo e(url('/community')); ?>">Community</a></li>
                </ul>
            </nav>
            <div class="navbar-account">

                <div class="search" id="search">
                    <input type="text" class="searchBar" id="searchBar" placeholder="Serach...">
                    <i id="iconSearch" class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="ballStar">

                    <?php if(\Illuminate\Support\Facades\DB::table('notifications')->where('user_id_receive',\Illuminate\Support\Facades\Auth::id())->exists()): ?>
                    <div class="star"></div>
                    <?php else: ?>

                    <?php endif; ?>

                    <i class="fa-solid fa-bell" onclick="toggleMenuNot()"></i>
                </div>
                <div class="notification-menu">
                    <div class="notification-menu-wrap" id="notificationMenu">

                        <?php if(\Illuminate\Support\Facades\DB::table('notifications')->where('user_id_receive',\Illuminate\Support\Facades\Auth::id())->exists()): ?>

                            <?php $__currentLoopData = \Illuminate\Support\Facades\DB::table('notifications')->where('user_id_receive',\Illuminate\Support\Facades\Auth::id())->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="menu">
                                    <button>
                                        <div class="massage">
                                            <i class="fa-solid fa-bell"></i>
                                            <p class="Message-text"><?php echo e($value->text); ?></p>
                                        </div>
                                        <a href="<?php echo e(url('delete-notification/'.$value->id)); ?>"><div class="close">
                                            <i class="fa-solid fa-xmark close"></i>
                                        </div></a>
                                    </button>

                            </div>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                        <?php else: ?>
                            <div class="menu">
                                <button>
                                    <div class="massage">
                                        <p class="Message-text">There are no new alerts for you</p>
                                    </div>

                                </button>

                            </div>
                        <?php endif; ?>


                    </div>
                </div>
                <div class="fff">
                    <img src="<?php echo e(App\Http\Controllers\ProjectController::getIcon()); ?>" alt="picture_profiles" class="profiles_img" onclick="toggleMenuPro()">
                    <div class="profile-menu-wrap" id="profileMenu">
                        <div class="menu">
                            <div class="menu-info">
                                <img src="<?php echo e(App\Http\Controllers\ProjectController::getIcon()); ?>" alt=""class="hhh">
                                <h2><?php echo e(\Illuminate\Support\Facades\Auth::user()->name); ?></h2>
                            </div>
                            <a href="<?php echo e(url('/user/profile')); ?>">
                                <i class="fa-solid fa-user"></i>
                                Profile
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                Search Friends
                            </a>

                            <a href="#" onclick="document.getElementById('form1').submit();">
                                <i class="fa-solid fa-pen"></i>
                                <?php echo e(__('Logout')); ?>

                            </a>
                                <form id="form1" action="<?php echo e(route('logout')); ?>" method="POST">
                                    <?php echo csrf_field(); ?>
                            </form>
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
                        <li class="active"  id="recent">Recntls</li>
                        <li id="draft">Drafts</li>
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
                            <select name="sort" id="sortProject" class="select-box">
                                <option value="">sort</option>
                                <option value="alph">Alphabetical</option>
                                <option value="lDate">Last viewed</option>
                                <option value="cDate">Date created</option>
                            </select>
                        </label>
                        <div class="star">
                            <img id="favFilter" src="./project/images/star-regular.svg">
                        </div>
                    </div>
                    <div class="title-leftsaid">
                        <label class="Fillter">Fillter:</label>
                        <select id="typeFilter" name="Fillter" class="select-box2">
                            <option selected="selected" value="ALL">All files</option>
                            <option value="A4">A4 flie</option>
                            <option value="SL">Pow file</option>
                            <option value="WB">Black file</option>
                        </select>
                    </div>
                </div>
            </div>
                    </div>


            <div class="doc-container">
                <div class="grid-item-section">

                <!--Jacascrpit continer-->

                </div>
            </div>





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
<?php /**PATH C:\Users\Mouyd\Desktop\Graduation Project II\project ll\gp-app\resources\views/landpage/writinerNew.blade.php ENDPATH**/ ?>