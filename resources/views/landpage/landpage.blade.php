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
            <a href="{{url('/writiner')}}" class="logo-part">
                <img src="./project/images/Ravicon-loading.png" alt="Logopage" class="logo-img">
                <span class="logo-name">
                        Writiner
                    </span>
            </a>
        </div>
        <nav>
            <ul class="main-nav">
                <li><a href="#Overveiw">Overveiw</a></li>
                <li><a href="#Features">Features</a></li>
                <li><a href="#Team">Team</a></li>
                <li><a href="#Communiuty">Communiuty</a></li>
            </ul>

            <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
                @if (Route::has('login'))
                    <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                        @auth
{{--                            <a href="{{ url('/dashboard') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard</a>--}}
                        @else
                            <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>

                            @if (Route::has('register'))
                                <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                            @endif
                        @endauth
                    </div>
            @endif
        </nav>
    </div>
</header>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////// -->
<div class="landing">
    <div class="container">
        <div class="text">
            <h1>World Docment</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nobis earum fuga asperiores quasi architecto aliquid facilis.</p>
            <div class="butt-part2">
                <a href="{{url('/writiner')}}">Go to Writiner</a>
            </div>

            @if (Route::has('login'))
                <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    @auth
                    @else
                        <div class="signin-part3">
                            Don't have an account?
                            <button >Sign up for free</button>
                        </div>
                    @endauth
                </div>
            @endif

        </div>
        <div class="image-part4">
            <img src="./project/images/black_noun_002_03536.jpg" alt="">
        </div>
        <a href="#Features" class="go-down">
            <i class="fa-solid fa-angles-down"></i>
        </a>
    </div>
</div>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////// -->
<div class="services" id="Features">
    <div class="container">
        <div class="services-container">
            <div class="srv-box-1">
                <div class="image">
                    <img src="./project/images/black_noun_002_03536.jpg" alt="">
                </div>
                <div class="text">
                    <h1>Evant for teans</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab debitis, nemo quod tempora earum aliquid quasi magnam dolorum temporibus fugiat.
                    </p>
                </div>
            </div>
            <div class="srv-box-2">
                <div class="image">
                    <img src="./project/images/black_noun_002_03536.jpg" alt="">
                </div>
                <div class="text">
                    <h1>Evant for teans</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab debitis, nemo quod tempora earum aliquid quasi magnam dolorum temporibus fugiat.
                    </p>
                </div>
            </div>
            <div class="srv-box-3">
                <div class="image">
                    <img src="./project/images/black_noun_002_03536.jpg" alt="">
                </div>
                <div class="text">
                    <h1>Evant for teans</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab debitis, nemo quod tempora earum aliquid quasi magnam dolorum temporibus fugiat.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////// -->
<div class="community" id="Communiuty">
    <div class="container">
        <div class="text">
            <h1>Writiner Community</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis, nostrum quae temporibus incidunt autem quibusdam molestiae aperiam sint. Cumque cupiditate tempora dolor ut placeat, architecto deleniti deserunt. Quis, neque.
            </p>
            <div class="butt-gocommunty">
                <a href="Writiner_community.html">Go to Communty</a>
            </div>
        </div>
    </div>
</div>
<div class="team" id="Team">
    <div class="container">
        <h1 class="title">our team</h1>
        <div class="team-row">
            <div class="member">
                <img src="./project/images/black_noun_002_03536.jpg" alt="">
                <h2>feras yahya alzahrain</h2>
                <h3>s439003038@st.uqu.edu.sa</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div class="member">
                <img src="./project/images/black_noun_002_03536.jpg" alt="">
                <h2>feras yahya alzahrain</h2>
                <h3>s439003038@st.uqu.edu.sa</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div class="member">
                <img src="./project/images/black_noun_002_03536.jpg" alt="">
                <h2>feras yahya alzahrain</h2>
                <h3>s439003038@st.uqu.edu.sa</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div class="member">
                <img src="./project/images/black_noun_002_03536.jpg" alt="">
                <h2>feras yahya alzahrain</h2>
                <h3>s439003038@st.uqu.edu.sa</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repudiandae qui reprehenderit aperiam laudantium odit soluta,
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
            <ul class="links">
                <li><a href="">Help</a></li>
                <li><a href="">How does it work</a></li>
                <li><a href="">Tutorle</a></li>
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
                <div class="info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.
                </div>
            </div>
        </div>
    </div>
    <p class="copyright">made with feras</p>
</div>
</body>
</html>
