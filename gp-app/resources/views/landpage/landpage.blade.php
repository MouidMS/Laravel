
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Writiner</title>
    <link rel="icon" type="image/x-icon" href="./project/images/Ravicon-loading.png">

    <!-- Main Writiner_home CSS File -->
    <link rel="stylesheet" href="./project/css/Landpage_Style.css">
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
<!-- /////////////////////////////////////////////////////////////////////////////////////////////// -->
<header id="Overveiw">
    <div class="container">
        <div class="logo-part">
            <a href="{{url('/')}}"><img src="./project/images/Logopage.png" alt="logo" class="logo_img"></a>
        </div>
        <!-- start new update -->
        <div class="nav-part">
            <nav>

                <ul class="main-nav" id="main-nav-js">
                    <li><a href="#Overveiw">Overveiw</a></li>
                    <li><a href="#Features">Features</a></li>
                    <li><a href="#Team">Team</a></li>
                    <li><a href="#Communiuty">Communiuty</a></li>
                </ul>
            </nav>


            <div class="login-part">
                <!-- choose one  -->

                @if (Route::has('login'))
                    @auth

                        <a class="login" href="#" onclick="document.getElementById('form1').submit();">
                            log out
                        </a>

                        <form id="form1" action="{{ route('logout') }}" method="POST">
                            @csrf
                        </form>
                        <img src="{{App\Http\Controllers\ProjectController::getIcon()}}" alt="" class="profile-img">

            </div>
            @else

                <a class="logout" href="{{ route('login') }}">log in</a>

            @endauth
            @endif

                <i class="fa-solid fa-bars bar-menu" id="bar-menu-js"></i>
            </div>


        <!-- End new update -->
    </div>
    </div>
</header>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////// -->
<div class="landing">
    <div class="container">
        <div class="text">
            <h1>
                Our App Is Ready For You! <br />
                Take A Look & Enjoy
            </h1>
            <p>
                Build a beautiful,modern document with flexible environment and
                creative interfaces.
            </p>
            <div class="butt-part2">
                <a href="Writiner_Recntl.html">Go to Writiner</a>
            </div>

            @if (Route::has('login'))
                    @auth
                    @else
                        <form action="{{ route('register') }}" >
                            <div class="signin-part3">
                                Don't have an account?
                                <button>Sign up for free</button>
                            </div>
                        </form>
                    @endauth
            @endif
        </div>
        <div class="image-part4">
            <img src="./project/images/black_noun_002_03536.jpg" alt="">
        </div>

        <div class="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>

    </div>
</div>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////// -->
<div class="services" id="Features">
    <div class="container">
        <div class="services-container">
            <div class="srv-box-1">
                <div class="image">
                    <img src="./project/images/black_noun_002_03536.jpg" alt="" />
                </div>
                <div class="text">
                    <h1>Host your space</h1>
                    <p>
                        By using the block system, users can simply and freely control a
                        variety of elements on the page.
                    </p>
                </div>
            </div>
            <div class="srv-box-2">
                <div class="image">
                    <img src="./project/images/black_noun_002_03536.jpg" alt="" />
                </div>
                <div class="text">
                    <h1>
                        A custom ready text edit for your <br />
                        form and no one else
                    </h1>
                    <p>
                        Now you can create your own form in a polished and contemporary
                        manner using the ready text edit tool.
                    </p>
                </div>
            </div>
            <div class="srv-box-3">
                <div class="image">
                    <img src="./project/images/black_noun_002_03536.jpg" alt="" />
                </div>
                <div class="text">
                    <h1>Do it all with file collector</h1>
                    <p>
                        With file collector you get the tools you need to work in team ,
                        and supervising the work at the same time , take your work to
                        the next level!
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////// -->
<div class="community" id="Communiuty">
    <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
    <!-- <div class="container"> -->
    <div class="text">
        <h1>Writiner Community</h1>
        <p>
            Join the "Writtiner" community, share your research and projects,
            and experience while gaining new knowledge and experiences from the
            community.
        </p>
        <div class="butt-gocommunty">
            <a href="Writiner_community.html">Go to Communty</a>
        </div>
        <!-- </div> -->
    </div>
</div>
<div class="team" id="Team">
    <div class="container">
        <h1 class="title">our team</h1>
        <div class="team-row">
            <div class="member">
                <img src="./project/images/black_noun_002_03536.jpg" alt="" />
                <h2>Muhammad Y Alyamni</h2>
                <h3>439005652@st.uqu.edu.sa</h3>
            </div>
            <div class="member">
                <img src="./project/images/black_noun_002_03536.jpg" alt="" />
                <h2>Muayyad M Alsubhi</h2>
                <h3>439005487@st.uqu.edu.sa</h3>
            </div>
            <div class="member">
                <img src="./project/images/black_noun_002_03536.jpg" alt="" />
                <h2>Yazeed K Alhomidhi</h2>
                <h3>439004374@st.uqu.edu.sa</h3>
            </div>
            <div class="member">
                <img src="./project/images/black_noun_002_03536.jpg" alt="" />
                <h2>Feras Y Alzahrain</h2>
                <h3>s439003038@st.uqu.edu.sa</h3>
            </div>
        </div>
    </div>
</div>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////// -->
<div class="footer">
    <div class="container">
        <div class="box">
            <h3>Writiner</h3>
            <ul class="social">
                <li>
                    <a class="twitter" href="">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a class="youtube" href="">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </li>
                <li>
                    <a class="github" href="">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </li>
            </ul>
            <p class="text">
                build a beautiful, modern document with flexible environment and
                creative interfaces.
            </p>
        </div>
        <div class="box">
            <ul class="links">
                <li><a href="#Overveiw">Overveiw</a></li>
                <li><a href="#Features">Features</a></li>
                <li><a href="#Team">Team</a></li>
                <li><a href="#Communiuty">Communiuty</a></li>
            </ul>
        </div>
        <div class="box">
            <div class="line">
                <i class="fa-solid fa-envelope"></i>
                <div class="info">
                    <a href="">xxxxxxxx@hotmail.com</a>
                </div>
            </div>
            <div class="line">
                <i class="fa-solid fa-location-dot"></i>
                <div class="info">Umm Al-Qura University</div>
            </div>
        </div>
    </div>
    <p class="copyright">2023</p>
</div>
</body>
</html>
