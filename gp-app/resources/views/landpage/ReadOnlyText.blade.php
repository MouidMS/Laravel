<!DOCTYPE html>
<html lang="en" dir="auto">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&display=swap" rel="stylesheet">
    <!-- <link rel="stylesheet" href="./Css/ControlStyle.css"> -->

    <!--
        font-family: 'Bebas Neue', cursive;
        font-family: 'Dancing Script', cursive; -->


    <script
        src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
        crossorigin="anonymous"></script>

    <link  href="../project/page/Css/Stayle.css">
    <link rel="stylesheet" href="../project/page/Css/Responseve.css">
    <link rel="stylesheet" href="../project/page/Css/Page.css">


    @if($type == "A4")
        <link rel="stylesheet" href="../project/page/Css/Page.css">

    @elseif($type == "SL")
        <link rel="stylesheet" href="../project/page/Css/Slide.css">

    @elseif($type == "WB")
        <link rel="stylesheet" href="../project/page/Css/WhightBlank.css">
    @endif

    <!-- <link rel="stylesheet" href="../Css/Slide.css"> -->
    <!-- <link rel="stylesheet" href="../Css/WhightBlank.css"> -->
    <!-- <link rel="stylesheet" href="../Css/ControlBtn.css"> -->
    <link rel="stylesheet" href="../project/page/Css/Component.css">
    <link rel="stylesheet" href="../project/page/Bootstrap/all.min.css">
</head>
<body id="body">


<!-- <div id="context_menu">
    <button id="menuCut"><i class="fa-solid fa-scissors"></i> cut</button>
    <button id="menuCopy"><i class="fa-solid fa-clipboard"></i> copy</button>
    <button id="menuPaste"><i class="fa-solid fa-paste"></i> paste</button>
    <button id="menuUndo" ><i class="fa-solid fa-rotate-left"></i> undo</button>
    <button id="menuRedo" ><i class="fa-solid fa-rotate-right"></i> redo</button>
    <button id="menuSelectAll"><i class="fa-solid fa-highlighter"></i> select-all</button>
</div>
 -->

<div id="main-content">
    <div id="pages"></div>

    <!-- <button class="controlbtn" disabled id="settingbtn" >ST</button>
    <button class="controlbtn" id="Back" >BK</button>
    <button class="controlbtn" id="Display" >DS</button>
    <button class="controlbtn" disabled id="Save" >SV</button>
    <button class="controlbtn" id="addpage" >+</button> -->
</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.2.8/pdfobject.min.js" integrity="sha512-MoP2OErV7Mtk4VL893VYBFq8yJHWQtqJxTyIAsCVKzILrvHyKQpAwJf9noILczN6psvXUxTr19T5h+ndywCoVw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="module" src="../project/page/ReadOnly/main.js"></script>
<!-- <script type="module" src="./TextFormat.js"></script> -->

<!-- <script src="https://use.fontawesome.com/a31a3f8384.js"></script> -->



<script type="module">
    import {getInfo} from '../project/page/ReadOnly/main.js';

    //export function getInfo(communityId,receiveId,collectorId){

    getInfo({{$project}},{{$commuinty}},{{$receive}},{{$collector}})
    console.log({{$project}})


</script>
</body>
</html>
