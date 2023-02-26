<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="301">
    <meta name="author" content="Feras,Muhammad,Yazeed,Muayyad"/>
    <meta name="keywords" content="Recant, Collector, ReadyText Edit,Community"/>
    <meta name="description"
          content="This feature allows people to upload their files and research papers to the community page"/>
    <meta name="theme-color" content="#f5f5ff" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">



    <title>community</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>

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

        <!-- popupSearch -->
<div class="popupSearch" id="popupSearch">
            <div class="popupSearchHeader">
                <h1>Search</h1>
                <div class="popupSearchClose">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div class="popupSearchContainer">
                <label class="popupSearchLabel">Find someone's profile :</label><br>
                <input type="text" class="popupSearchBar">
                <button class="popupSearchButt">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    </div>
</div>

<!-- Start header  -->
<header>
    <div class="container">
        <i class="fa-solid fa-bars toggle-menu" id="btn-toggleMenu"></i>
        <a href="<?php echo e(url('/')); ?>" id="logoHead"><img src="./project/images/logo.png" alt="logo" class="logo_img"></a>
        <nav>
            <ul class="main-nav" id="main-navMenu">
                <li><a href="<?php echo e(url('writiner')); ?>">Home</a></li>
                <li><a href="<?php echo e(url('edit-text')); ?>">ReadyText Edit</a></li>
                <li><a href="<?php echo e(url('document')); ?>">Collector</a></li>
                <li><a class="active" href="<?php echo e(url('community')); ?>">Community</a></li>
            </ul>
        </nav>
        <div class="navbar-account">
            <form id="form1" action="<?php echo e(url('search-community')); ?>" method="POST">
                <?php echo csrf_field(); ?>

                <div class="search" id="search">
                    <input type="text" class="searchBar" placeholder="Serach..." name="serach">
                    <a href="#" onclick="document.getElementById('form1').submit();">   <i class="fa-solid fa-magnifying-glass"></i></a>
                </div>
            </form>


            <?php if(\Illuminate\Support\Facades\Auth::id()): ?>

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
            <?php else: ?>

            <?php endif; ?>
            <div class="fff">
                <?php if(\Illuminate\Support\Facades\Auth::id()): ?>
                <img src="<?php echo e(App\Http\Controllers\ProjectController::getIcon()); ?>" alt="picture_profiles" class="profiles_img" onclick="toggleMenuPro()">
                <?php else: ?>

                <?php endif; ?>


                <?php if(\Illuminate\Support\Facades\Auth::id()): ?>
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
                        <form id="formLogOut" action="<?php echo e(route('logout')); ?>" method="POST">
                            <?php echo csrf_field(); ?>
                        </form>
                        <a href="#" onclick="document.getElementById('formLogOut').submit();">
                            <i class="fa-solid fa-pen"></i>
                            <?php echo e(__('Logout')); ?>

                        </a>

                    </div>
                </div>
            </div>

            <?php else: ?>

            <?php endif; ?>
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
        <!-- Start Community -->
        <div class="writiner-home-title">
            <div class="title-header">
                <div class="title-rightsaid">


                    <label class="label">Sort:

                    <form name="sortform" action="<?php echo e(url('sort-post')); ?>" method="post">
                        <?php echo csrf_field(); ?>
                        <select name="sort" class="select-box" onchange="submitform()">
                            <option value="null" selected="selected">Select</option>
                            <option value="last_view">Last viewed</option>
                            <option value="alphabetical">Alphabetical</option>
                            <option value="created">Date created</option>
                        </select>
                    </form>
                    </label>


                    <div class="star">
                        <?php if($fav == false): ?>

                            <form id="fav" action="<?php echo e(url('fav-post')); ?>" method="get">
                                <a color="black" onclick="document.getElementById('fav').submit();"><i class="fa-regular fa-star"></i></a>
                            </form>

                        <?php else: ?>
                       <a href="<?php echo e(url('community')); ?>"><i class="fa-solid fa-star"></i></a>
                        <?php endif; ?>
                    </div>

                </div>
                <div class="title-leftsaid">

                    <form name="fillterform" id ="fillterform" method="post" action="<?php echo e(url('fullter-post')); ?>">
                        <label class="Fillter">Fillter:</label>
                        <?php echo csrf_field(); ?>

                        <select class="select-box2" name="fillter" onchange="submitformflluter();">

                            <option selected="selected">Select</option>
                            <option value="null">All files</option>
                                <option value="WB">Black file</option>
                                <option value="A4">A4 flie</option>
                                <option value="SL">Pow file</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="grid-holder">
        <div class="doc-container">
            <div class="grid-item-section">
                <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="grid-item">
                    <div class="holder-item">
                    <div id="main">
                        <div id="projectTop">
                            <a href="<?php echo e(url('page-community-id/'.base64_encode($value->id))); ?>">
                                <img id="projectType" src="./project/images/<?php echo e($value->type); ?>B.png">
                            </a>
                        </div>
                        <p id="projectName"><?php echo e($value->name); ?></p>
                        <p id="projectLastUpDate"><?php echo e($value->created_at); ?></p>


                        <?php if(Route::has('login')): ?>
                            <?php if(auth()->guard()->check()): ?>
                                <?php if($value->isLike == true): ?>
                                    <a href="<?php echo e(url('delete-like/'.\Illuminate\Support\Facades\Auth::id().'/'.$value->id)); ?>"> <img id="isProjectFavre" src="./project/images/heart-solid.svg"></a>
                                <?php elseif($value->isLike == false): ?>
                                    <a href="<?php echo e(url('like/'.\Illuminate\Support\Facades\Auth::id().'/'.$value->id)); ?>">  <img id="isProjectFavre" src="./project/images/heart-regular.svg"></a>
                                <?php endif; ?>
                            <?php else: ?>
                                <?php if($value->isLike == true): ?>
                                    <a href="<?php echo e(url('delete-like/0/'.$value->id)); ?>"> <img id="isProjectFavre" src="./project/images/heart-solid.svg"></a>
                                <?php elseif($value->isLike == false): ?>
                                    <a href="<?php echo e(url('like/0/'.$value->id)); ?>">  <img id="isProjectFavre" src="./project/images/heart-regular.svg"></a>
                                <?php endif; ?>
                            <?php endif; ?>
                        <?php endif; ?>

                            <div class="setting-project" style="left: 110.004px; top: 78.2305px;">
                            
                            
                            
                            
                        </div>

                        <div class="likeContainer" id="likeContainer" style="display: block;">
                            <div class="bbbb">
                                <i id="likeIcon" class="fa-solid fa-heart"></i>
                                <div id="likeViewer" style="display: block;">
                                    <?php echo e($value->likes); ?>

                                </div>
                            </div>
                        </div>
                        <div class="fakeDiv"></div>
                        <div class="aaaa">
                            <p class="textOverflow" id="desViewer" style="display: block;">
                                <?php echo e($value->dec); ?>

                            </p>
                            <h5>Description</h5>
                        </div>
                        <div class="FS-option">
                           <a href="<?php echo e(url('receive-community-project/'.$value->id)); ?>"><button class="FS-optionButt tooltip"><span class="tooltiptext">Add my project</span><i class="fa-solid fa-plus"></i></button></a>
                            <?php if($value->isCopy): ?>
                                <?php if(Route::has('login')): ?>
                                    <?php if(auth()->guard()->check()): ?>
                                        <?php if($value->owner_id == \Illuminate\Support\Facades\Auth::id()): ?>
                                        <?php else: ?>
                                         <a href="<?php echo e(url('share-community-project/'.$value->id)); ?>">   <button class="FS-optionButt tooltip"><span class="tooltiptext">Copy project</span><i class="fa-solid fa-copy"></i></button></a>
                                        <?php endif; ?>
                                        <?php else: ?>
                                        <a href="<?php echo e(url('share-community-project/'.$value->id)); ?>">   <button class="FS-optionButt tooltip"><span class="tooltiptext">Copy project</span><i class="fa-solid fa-copy"></i></button></a>
                                    <?php endif; ?>
                                <?php endif; ?>
                            <?php else: ?>
                            <?php endif; ?>
                            <button class="FS-optionButt tooltip" onclick="myFunction(<?php echo e($value->id); ?>)">
                                <span class="tooltiptext">Copy link</span>
                                <i class="fa-solid fa-link"></i>
                            </button>
                        </div>
                       <a href="<?php echo e(url('profile-friend/'.$value->owner_id)); ?>"><div id="projectOwner"><img src="<?php echo e(App\Http\Controllers\ProjectController::getIconWithAuth($value->owner_id)); ?>" alt=""></div></a>

                    </div>
                    </div>
                    </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    </div>
</div>
</div>

</div>
</div>
<!-- End content -->
<!-- Start writiner-home -->
<!-- End start writiner-home -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"></script>
<script src="../project/js/header.js"></script>
<script src="../project/js/Documents.js"></script>
<script src="../project/js/popup.js"></script>

<script>
    // justAlert()
    function myFunction(id) {
        var id_hash = btoa(id)
        navigator.clipboard.writeText('http://127.0.0.1:8000/page-community-id/'+id_hash);
        // window.location.reload();

        alert("Copied the link!");
    }
    //
    // function justAlert(){
    //     alert("Done!");
    // }



    // let btn_toggleMenu =document.getElementById("btn-toggleMenu")
    // let main_navMenu =document.getElementById("main-navMenu")

    // let menuFlagm = true;
    // btn_toggleMenu.addEventListener("click", function (e) {
    //     if (menuFlagm){
    //         main_navMenu.style.display="flex";
    //     }else {
    //         main_navMenu.style.display="none";
    //     };
    //     menuFlagm = !menuFlagm;
    // });

    function submitform()
    {
        document.sortform.submit();

    }
    function submitformflluter()
    {
        document.fillterform.submit();

    }

</script>

</body>
</html>

<?php /**PATH C:\Users\Mouyd\Desktop\Graduation Project II\project ll\gp-app\resources\views/landpage/Writiner_community.blade.php ENDPATH**/ ?>