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
    <link rel="stylesheet" href="../project/page/Css/ControlStyle.css">
    <meta name="csrf-token" content="{{ csrf_token() }}" />


    <script
        src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
        crossorigin="anonymous"></script>


    <!--
        font-family: 'Bebas Neue', cursive;
        font-family: 'Dancing Script', cursive; -->

    <link rel="stylesheet" href="../project/page/Css/Stayle.css">
    <link rel="stylesheet" href="../project/page/Css/Responseve.css">

    @if($type == "A4")
        <link rel="stylesheet" href="../project/page/Css/Page.css">
        <link rel="stylesheet" href="../project/page/Css/Responseve.css">

    @elseif($type == "SL")
         <link rel="stylesheet" href="../project/page/Css/Slide.css">
        <link rel="stylesheet" href="../project/page/Css/ResponsevSlid.css">

    @elseif($type == "WB")
        <link rel="stylesheet" href="../project/page/Css/WhightBlank.css">
        <link rel="stylesheet" href="../project/page/Css/ResponsevSlid.css">

    @endif

    <link rel="stylesheet" href="../project/page/Css/ControlBtn.css">
    <link rel="stylesheet" href="../project/page/Css/Component.css">
    <link rel="stylesheet" href="../project/page/Bootstrap/all.min.css">
</head>
<body id="body">

<div id="TextEditContainer">

    <div id="FS-TextEditContainer" class="FS-TextEditContainer">

        <div class="FS-col">
            <div class="FS-row">
                <div class="tooltip">
                    <select type="button"  id="FS-fontName" class="FS-change" data-element="fontName">
                        <option value="Arial">Arial</option>
                        <option value="cursive">cursive</option>
                        <option value="'Bebas Neue', cursive">'Bebas Neue', cursive</option>
                        <option value="'Rubik 80s Fade', cursive">'Rubik 80s Fade', cursive</option>
                        <option value="cursive">cursive</option>
                        <option value="cursive">cursive</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                    <span class="FS-tooltiptext">FontName</span>
                </div>
                <!-- --------------------------------------------------- -->
                <div class="FS-fontSize tooltip">
                    <select id="FS-fontSize" class="FS-change " data-element="fontSize">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <span class="FS-tooltiptext">FontSize</span>
                </div>

                <!-- --------------------------------------------------- -->
                <button type="button" id="FS-toUpperCase" class="FS-btn tooltip" data-element="toUpperCase">
                    <span class="FS-tooltiptext">Up Case</span>Aa
                </button>
                <!-- --------------------------------------------------- -->
                <button type="button" id="FS-toLowerCase" class="FS-btn tooltip" data-element="toLowerCase">
                    <span class="FS-tooltiptext">Low Case</span>aA
                </button>
                <!-- --------------------------------------------------- -->
                <div class="FS-block FS-row">
                    <button type="button" id="FS-createLink" class="FS-btn tooltip" data-element="createLink">
                        <span class="FS-tooltiptext">Link</span><i class="fa fa-link"></i>
                    </button>
                    <!-- --------------------------------------------------- -->
                    <button type="button" class="FS-btn tooltip" data-element="unlink">
                        <span class="FS-tooltiptext">Unlink</span><i class="fa fa-unlink"></i>
                    </button>
                    <!-- --------------------------------------------------- -->
                    <button type="button" class="FS-btn tooltip" data-element="textToVoice">
                        <span class="FS-tooltiptext">Text</span><i class="fa-solid fa-volume-high"></i>
                    </button>
                    <!-- --------------------------------------------------- -->
                    <button type="button" class="FS-btn tooltip" data-element="voiceToText">
                        <span class="FS-tooltiptext">Voice</span><i class="fa-solid fa-microphone"></i>
                    </button>
                    <!-- --------------------------------------------------- -->
                    <button class="FS-btn tooltip" data-element="date">
                        <span class="FS-tooltiptext">Date</span><i class="fa-solid fa-calendar"></i>
                    </button>
                    <!-- --------------------------------------------------- -->
                    <button type="button" class="FS-btn tooltip" data-element="removeFormat">
                        <span class="FS-tooltiptext">Remove Format</span><i class="fa-solid fa-trash"></i>
                    </button>
                    <!-- --------------------------------------------------- -->
                </div>
            </div>
            <div class="FS-row">

                <button type="button" id="FS-bold" class="FS-btn tooltip" data-element="bold">
                    <span class="FS-tooltiptext">Bold</span><i class="fa-solid fa-bold"></i>
                </button>
                <!-- --------------------------------------------------- -->
                <button type="button" id="FS-italic" class="FS-btn tooltip" data-element="italic">
                    <span class="FS-tooltiptext">Italic</span><i class="fa fa-italic"></i>
                </button>
                <!-- --------------------------------------------------- -->
                <button type="button" id="FS-underline" class="FS-btn tooltip" data-element="underline">
                    <span class="FS-tooltiptext">Underline</span><i class="fa fa-underline"></i>
                </button>
                <!-- --------------------------------------------------- -->
                <button type="button" id="FS-strikethrough" class="FS-btn tooltip" data-element="strikethrough">
                    <span class="FS-tooltiptext">Strike</span><i class="fa fa-strikethrough"></i>
                </button>
                <!-- --------------------------------------------------- -->
                <button type="button" id="FS-subscript" class="FS-btn tooltip" data-element="subscript">
                    <span class="FS-tooltiptext">Subscript</span><i class="fa fa-subscript"></i>
                </button>
                <!-- --------------------------------------------------- -->
                <button type="button" id="FS-superscript" class="FS-btn tooltip" data-element="superscript">
                    <span class="FS-tooltiptext">Superscript</span><i class="fa fa-superscript"></i>
                </button>
                <div class="FS-block FS-row">
                    <!-- --------------------------ggggggggggggggggg------------------------- -->
                    <div class="FS-highlightButt tooltip">
                        <i class="fa-solid fa-highlighter"></i>
                        <input type="color" id="FS-backColor" class="FS-highlight FS-change" data-element="backColor">
                        <span class="FS-tooltiptext">Highlight</span>
                    </div>
                    <!-- --------------------------------------------------- -->
                    <div class="FS-backColorButt tooltip">
                        <i class="fa-solid fa-a"></i>
                        <input type="color" id="FS-foreColor" class="FS-change FS-backColor" data-element="foreColor">
                        <span class="FS-tooltiptext">Back Color</span>
                    </div>
                    <!-- --------------------------------------------------- -->
                </div>
                <div class="FS-block FS-row">
                    <button type="button" id="alCenter" class="FS-btn tooltip" data-element="justifyCenter">
                        <span class="FS-tooltiptext" >Justify Center</span><i class="fa fa-align-center"></i>
                    </button>
                    <!-- --------------------------------------------------- -->
                    <button type="button" id="alLeft" class="FS-btn tooltip" data-element="justifyLeft">
                        <span class="FS-tooltiptext" >Justify Left</span><i class="fa fa-align-left"></i>
                    </button>
                    <!-- --------------------------------------------------- -->
                    <button type="button" id="alRight" class="FS-btn tooltip" data-element="justifyRight">
                        <span class="FS-tooltiptext" >Justify Right</span><i class="fa fa-align-right"></i>
                    </button>
                    <!-- --------------------------------------------------- -->
                    <button type="button" id="alJustify" class="FS-btn tooltip" data-element="justifyFull">
                        <span class="FS-tooltiptext" >Justify Full</span><i class="fa fa-align-justify"></i>
                    </button>
                    <!-- --------------------------------------------------- -->
                </div>
            </div>
        </div>
        <div class="FS-col">
            <div class=" tooltip" style="margin-bottom:0.8rem ;">
                <select  id="imoges" data-element="refactor">
                    <option value="">images</option>
                </select>
                <span class="FS-tooltiptext">Images</span>
            </div>
            <div class=" tooltip">
                <select type="button" id="RTE" class="FS-chang " data-element="readyTextDesign">
                    <option>readyTextDesign</option>
                </select>
                <span class="FS-tooltiptext">Ready Text Design</span>
            </div>
            <!-- --------------------------------------------------- -->

        </div>
        <div class="FS-Translait">
            <div class="FS-row">
                <button type="button" class="FS-Translait-voice FS-btn" data-element="textToVoiceTranslait">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
                <i class="fa-solid fa-language FS-Translait-icon"></i>
                <p id="FS-translait">Translat</p>
            </div>

        </div>

    </div>
</div>

<div id="context_menu">
    <button id="menuCut"><i class="fa-solid fa-scissors"></i> cut</button>
    <button id="menuCopy"><i class="fa-solid fa-clipboard"></i> copy</button>
    <button id="menuPaste"><i class="fa-solid fa-paste"></i> paste</button>
    <button id="menuUndo" ><i class="fa-solid fa-rotate-left"></i> undo</button>
    <button id="menuRedo" ><i class="fa-solid fa-rotate-right"></i> redo</button>
    <button id="menuSelectAll"><i class="fa-solid fa-highlighter"></i> select-all</button>
</div>

<div id="main-content">
    <div id="scroler"></div>
    <div id="scrollUp"></div>
    <div id="scrolldown"></div>
    <!-- <div dir="auto" contenteditable="true" style="width: 400px; height: 400px; background-color: wheat;"> </div> -->
    <div id="pages"></div>

    <div id="setting">
        <h5>Translait / Voice</h5>
        <div class="FS-boxButt">
            <p>form :</p>
            <select id="translateFrom" class="FS-selectPR"></select>
        </div>
        <p class="FS-centerP">TO</p>
        <div class="FS-boxButt">
            <select id="translateTO" style="margin-left: 61px;"></select>
        </div>
        <hr>
        <div class="FS-boxButt">
            <label><span>Reading Section :</span><input type="checkbox" checked id="showReadingSec"> </label>

        </div>
        <div style="padding: 4px;">
            <p  id="pageNump">Number pages: 0</p>
            <br>
            <p id="componentNump">Number boxes: 0</p>
        </div>
        <button id="print">print</button>
        <button id="test">JSON</button>
    </div>


    <button class="controlbtn" id="settingbtn" ><i class="fa-solid fa-gear"></i></button>

    @if($linkBack == 'recent')
        <a href="{{url('writiner')}}"> <button class="controlbtn" id="Back" ><i class="fa-solid fa-circle-arrow-left"></i></button></a>
    @elseif($linkBack == 'collector')
        <a href="{{url('document')}}"> <button class="controlbtn" id="Back" ><i class="fa-solid fa-circle-arrow-left"></i></button></a>

    @elseif($linkBack == 'commuinty')
        <a href="{{url('community')}}"> <button class="controlbtn" id="Back" ><i class="fa-solid fa-circle-arrow-left"></i></button></a>


    @elseif($linkBack == 'receive')
        <a href="{{url('recent')}}"> <button class="controlbtn" id="Back" ><i class="fa-solid fa-circle-arrow-left"></i></button></a>

    @endif

    <button class="controlbtn" id="Display" ><i class="fa-solid fa-display"></i></button>
    <button class="controlbtn" id="Save" ><i class="fa-solid fa-floppy-disk"></i></button>
    <button class="controlbtn" id="addpage">+</button>


</div>
    <div id="poupParent">
        <div id="poupChild">
            <div class="FS-popupImage" id="FS-popupImage">

                <ul class="FS-pop-link">
                    <li><button  id="FS-btn-Upload">Upload</button></li>
                    <li><button  id="FS-btn-EmbedLink">Embed link</button></li>
                    <li><button  id="FS-btn-PhotoAlbums">Photo albums</button></li>
                </ul>

                <div class="FS-pop-Upload" id="FS-pop-Upload">
                    <div class="FS-Upload">
                        <button id="uploadBtn">Upload file</button>
                    </div>
                    <br>
                    <h4>The maximum size file is 5 MB</h4>
                    <hr>
                    <div class="FS-buttRight">
                        <div class="FS-buttPopupImage">
                            <button class="FS-cancel" id="uploadCansel">Cancel</button>
                            <button class="FS-ok" id="uploadOk">Done</button>
                        </div>
                    </div>
                </div>

                <div class="FS-pop-EmbedLink" id="FS-pop-EmbedLink">
                    <div class="FS-EmbedLink">
                        <input type="text" id="ImageUrl" placeholder="Paste the image link ...">
                    </div>
                    <br>
                    <h4>works with any image form the web</h4>
                    <hr>
                    <div class="FS-buttRight">
                        <div class="FS-buttPopupImage">
                            <button class="FS-cancel" id="urlCansel">Cancel</button>
                            <button class="FS-ok" id="urlOk">Done</button>
                        </div>
                    </div>
                </div>

                <div class="FS-pop-PhotoAlbums" id="FS-pop-PhotoAlbums">
                    <div class="FS-PhotoAlbums"
                        <img src="./Images/ComponentList/I m.png" alt="">
                        <img src="./Images/ComponentList/I m.png" alt="">
                        <img src="./Images/ComponentList/I m.png" alt="">
                        <img src="./Images/ComponentList/I m.png" alt="">
                        <img src="./Images/ComponentList/I m.png" alt="">
                        <img src="./Images/ComponentList/I m.png" alt="">
                        <img src="./Images/ComponentList/I m.png" alt="">
                        <img src="./Images/ComponentList/I m.png" alt="">
                        <img src="./Images/ComponentList/I m.png" alt="">
                        <img src="./Images/ComponentList/I m.png" alt="">
                        <img src="./Images/ComponentList/I m.png" alt="">
                        <img src="./Images/ComponentList/I m.png" alt="">
                    </div>
                    <hr>
                    <div class="FS-buttRight">
                        <div class="FS-buttPopupImage">
                            <button class="FS-cancel">Cancel</button>
                            <button class="FS-ok">Done</button>
                        </div>
                    </div>
                </div>
            </div>
            {{-- pupopPDF --}}
            <div class="FS-pupopPDF" id="FS-pupopPDF">
                <ul class="FS-pop-link">
                    <li><button id="FS-btn-UploadPDF">Upload</button></li>
                    <li><button id="FS-btn-EmbedLinkPDF">Embed link</button></li>
                </ul>
                <div class="FS-pop-UploadPDF" id="FS-pop-UploadPDF">
                    <div class="FS-UploadPDF">
                        <button id="pdfupbtn">Upload file</button>
                    </div>
                    <br>
                    <h4>The maximum size file is 10 MB</h4>
                    <hr>
                    <div class="FS-buttRight">
                        <div class="FS-buttpopupPDF">
                            <button class="FS-cancel" id="pdfupCansel">Cancel</button>
                            <button class="FS-ok" id="pdfupOk">Done</button>
                        </div>
                    </div>
                </div>
                <div class="FS-pop-EmbedLinkPDF" id="FS-pop-EmbedLinkPDF">
                    <div class="FS-EmbedLinkPDF">
                        <input type="text" id="urlPdf" placeholder="Paste the image link ...">Cansel
                     </div>
                    <br>
                    <h4>works with any PDF form the web</h4>
                    <hr>
                    <div class="FS-buttRight">
                        <div class="FS-buttpopupPDF">
                            <button class="FS-cancel" id="urlPdfCansel">Cancel</button>
                            <button class="FS-ok" id="urlPdfOk">Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





<!-- ////////////////////////////////////////////////////////////////////// -->



<div id="slider"></div>
<div id="reading">
    <div id="readingHeed">
        <label for="uploadFile" class="FS-uploadFile tooltip">
            <span class="FS-tooltiptextUploadFile">Upload file PDF</span>
            <i class="fa-solid fa-file-arrow-up"></i>
        </label>
        <input type="file" id="uploadFile" style=" display: none;">

        <div id="readingFiles"></div></div>

    <div id="frame"></div>

</div>
<!--
        <form id="imageContainer">
            <input id="addUrl" type="text" name="url"/>
            <label for="uploadImage">Chose Image</label>
            <input id="uploadImage" type="file" accept="image/*" name="image"/>
            <button id="addImageToList">Upload</button>
            <button id="deleteImageFromList">Delete</button>
            <div id="imageList"></div>
            <button id="OK">OK</button>
            <button id="cansel">cansel</button>
        </form> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.2.8/pdfobject.min.js" integrity="sha512-MoP2OErV7Mtk4VL893VYBFq8yJHWQtqJxTyIAsCVKzILrvHyKQpAwJf9noILczN6psvXUxTr19T5h+ndywCoVw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="module" src="../project/page/main.js"></script>
<script type="module" src="../project/page/TextFormat.js"></script>

<!-- <script src="https://use.fontawesome.com/a31a3f8384.js"></script> -->

<script type="module">
    import {getInfo} from '../project/page/main.js';

{{--    {{json_decode(App\Http\Controllers\ProjectController::getProjectType($id))}}--}}
    //projectId,communityId,receiveId,collectorId


    getInfo({{$project}},{{$commuinty}},{{$receive}},{{$collector}})
    console.log({{$project}})
    {{--console.log({{$data}})--}}


    // setProjectMetaData
    // console.log(isFullPreemption,ProjectTyp,IsReadOnly,'s',projectDes,projectName);

</script>
</body>
</html>
