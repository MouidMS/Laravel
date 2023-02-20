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
        <a href="<?php echo e(url('/')); ?>" id="logoHead"><img src="../project/images/logo.png" alt="logo" class="logo_img"></a>
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

<!-- card-FriendProfile -->
<div class="container-card">
    <div class="card-FriendProfile">
        <div class="information">
            <div class="info-name textOverflow">
                <h1 class="name"><?php echo e(\Illuminate\Support\Facades\Auth::user()->where('id',$id)->get('name')[0]->name); ?></h1>
                <div class="email">
                    <i class="fa-solid fa-envelope"></i>
                    <p><?php echo e(\Illuminate\Support\Facades\Auth::user()->where('id',$id)->get('email')[0]->email); ?></p>
                </div>
                <div class="data-creadet">
                    <i class="fa-solid fa-clock"></i>
                    <p>
                        <?php echo e(\Carbon\Carbon::parse(\Illuminate\Support\Facades\Auth::user()->where('id',$id)->get('created_at')[0]->created_at)->format('F-Y')); ?>



                    </p>
                </div>

            </div>
            <div class="info-img">
                <div>
                    <img src="<?php echo e(App\Http\Controllers\ProjectController::getIconWithAuth($id)); ?>" alt="image_profile">
                </div>
                <div class="follower">
                    <p><span><?php echo e(App\Http\Controllers\ProjectController::getCountFollowerFromId($id)[0]); ?></span>  Following </p>
                    <p><span><?php echo e(App\Http\Controllers\ProjectController::getCountFollowerFromId($id)[1]); ?></span>  Followers</p>
                </div>

            </div>
        </div>

        <?php if(\Illuminate\Support\Facades\Auth::user()->id === $id): ?>
        <?php elseif(\Illuminate\Support\Facades\Auth::user()->id != $id): ?>

            <?php if(App\Http\Controllers\ProjectController::ifFollowOrNot($id) == false): ?>
                  <a href="<?php echo e(url('add-friends/'.$id)); ?>"> <button class="follow" >FOLLOW</button></a>
            <?php else: ?>
                <a href="<?php echo e(url('delete-friends/'.$id)); ?>"> <button class="follow">UNFOLLOW</button></a>

                <?php endif; ?>
            <?php endif; ?>


        <hr>
        <h3>My share projects</h3>
        <div class="list-project">
            <ul class="project">

                <?php

                $projects = \Illuminate\Support\Facades\DB::table('sher_projects')->where('owner_id', $id)->get();

                ?>


                <?php $__currentLoopData = $projects; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $p): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

               <a href="<?php echo e(url('page-community-id/'.$p->id)); ?>" style="    text-decoration:none; "><li><i class="fa-solid fa-file"></i><?php echo e(App\Http\Controllers\ProjectController::getNameProject($p->project_id)); ?></li></a>

                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
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
<?php /**PATH C:\Users\Mouyd\Desktop\Graduation Project II\project ll\gp-app\resources\views/landpage/ProfileFriend.blade.php ENDPATH**/ ?>