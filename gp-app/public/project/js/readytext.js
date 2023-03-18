
import ReadyTextDesign from "../page/ReadyTextDesign.js";
// import {fontFamily} from "../page/Info/EditData";


let fileHolder = document.getElementById('fileHolder');
let RDEContainer = [];
let RDECurrent;


// getReadyText();
// updateReadyText(JSON.stringify(RDEContainer));



class RDE extends ReadyTextDesign{

    container;
    nameVeiw;

    constructor(name,bold,italic,underline,strikethrough,backColor,fontSize,fontName,foreColor,align,subscript,superscript,link) {
        super(bold,italic,underline,strikethrough,backColor,fontSize,fontName,foreColor,align,subscript,superscript,link);
        this.prepairRDE();
        this.setName(name);
    }

    prepairRDE(){
        this.container = document.createElement('div');
        this.container.classList.add('file');
        this.container.addEventListener('click',this.displayEdit)

        this.container.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-pen-to-square"></i>');

        this.nameVeiw = document.createElement('p');
        this.nameVeiw.setAttribute("contenteditable", true);
        this.nameVeiw.addEventListener('input', this.saveName);
        this.nameVeiw.addEventListener('blur', this.checkIfNull)

        this.container.appendChild(this.nameVeiw);
    }


    setName(value){
        if (value == "" || value == null){
            this.name = 'UnTitled';
            this.nameVeiw.innerText = 'UnTitled';
        } else{
            this.name = value;
            this.nameVeiw.innerText = value;
        }

    }

    saveName = (e) =>{
        this.name = this.getnameVeiw().innerText;
    }

    checkIfNull = (e) =>{
        let text = this.nameVeiw.innerText;
        if (text == "" || text  == null){
            this.setName('UnTitled')
        }
    }

    displayEdit = (e) =>{
        RDECurrent = this;
        applayEdit(this);
    }


    getcontainer(){return this.container;}
    getnameVeiw(){return this.nameVeiw;}


}




let addRDE = document.getElementById('addRDE');
addRDE.addEventListener('click',function (){
    // name,bold,italic,underline,strikethrough,backColor,fontSize,fontName,foreColor,justifyCenter,justifyLeft,justifyRight,justifyFull,subscript,superscript,link
    let crRDE = new RDE('Untiteld',false,false,false,false,'#ffffff',1,'Sans-serif','#000000',false,false,false,false,false,false,null);
    RDEContainer.push(crRDE);
    fileHolder.appendChild(crRDE.getcontainer());
})

let deleteRDE = document.getElementById('deleteRDE');
deleteRDE.addEventListener('click',function (){
    console.log(JSON.stringify(RDEContainer));


})


let targitText = document.getElementById('targitText');













let font_style = document.getElementById('font-style');
font_style.addEventListener('click',function () {
    RDECurrent.setfontName(font_style.value);
    applayEdit(RDECurrent);
})
let Font_size = document.getElementById('Font-size');
Font_size.addEventListener('click',function () {
    RDECurrent.setfontSize(Font_size.value)
})
let bold = document.getElementById('bold');
bold.addEventListener('click',function () {
    RDECurrent.setbold(!RDECurrent.getbold());
})
let italic = document.getElementById('italic');
italic.addEventListener('click',function () {
    RDECurrent.setitalic(!RDECurrent.getitalic());
})
let underline = document.getElementById('underline');
underline.addEventListener('click',function () {
    RDECurrent.setunderline(!RDECurrent.getunderline());

})
let strikethrough = document.getElementById('strikethrough');
strikethrough.addEventListener('click',function () {
    RDECurrent.setstrikethrough(!RDECurrent.getstrikethrough());
})



let highlighter = document.getElementById('highlighter');
highlighter.addEventListener('click',function () {
    RDECurrent.setbackColor(highlighter.value);
})

let color = document.getElementById('color');
color.addEventListener('click',function () {
    RDECurrent.setforeColor(color.value)
})






let align_left = document.getElementById('align-left');
align_left.addEventListener('click',function () {
    RDECurrent.setAlign('left');
})


let align_center = document.getElementById('align-center');
align_center.addEventListener('click',function () {
    RDECurrent.setAlign('center');
})
let align_right = document.getElementById('align-right');
align_right.addEventListener('click',function () {
    RDECurrent.setAlign('right');
})
let align_justify = document.getElementById('align-justify');
align_justify.addEventListener('click',function () {
    RDECurrent.setAlign('justify');
})





let superscript = document.getElementById('superscript');
superscript.addEventListener('click',function () {
    RDECurrent.setsubscript(!RDECurrent.getsubscript());
})


let subscript = document.getElementById('subscript');
subscript.addEventListener('click',function () {
    RDECurrent.setsuperscript(!RDECurrent.getsuperscript());
})


let link = document.getElementById('link');
link.addEventListener('click',function () {
    let url = window.prompt("Link")
    RDECurrent.setLink(url);
})


let unLink = document.getElementById('unLink');
unLink.addEventListener('click',function () {
    RDECurrent.setLink("");
})









function applayEdit(RDE){


    if (RDE.getbold()){
        targitText.style.fontWeight = 'bold';
        bold.style.backgroundColor = "#e0e9ff";

    } else {
        targitText.style.fontWeight = 'normal';
        bold.style.backgroundColor = "#ffffff";
    }


    if (RDE.getitalic()){
        targitText.style.fontStyle = 'italic';
        italic.style.backgroundColor = "#e0e9ff";
    } else {
        targitText.style.fontStyle = 'normal';
        italic.style.backgroundColor = "#ffffff";
    }

    if (RDE.getunderline()){
        targitText.style.textDecoration = 'underline';
        underline.style.backgroundColor = "#e0e9ff";
    } else {
        targitText.style.textDecoration = 'inital';
        underline.style.backgroundColor = "#ffffff";
    }

    if (RDE.getstrikethrough()){
        targitText.style.textDecoration = 'line-through';
        strikethrough.style.backgroundColor = "#e0e9ff";
    } else {
        targitText.style.textDecoration = 'inital';
        strikethrough.style.backgroundColor = "#ffffff";

    }

    targitText.style.backgroundColor = RDE.getbackColor();
    highlighter.value = RDE.getbackColor();



    targitText.style.fontSize = RDE.getfontSize();
    for (let index = 0; index < Font_size.children.length; index++) {
        if (Font_size.children[index].value == RDE.getfontSize()) {
            Font_size.children[index].selected = true;
            break;
        }
    }


    targitText.style.fontFamily = RDE.getfontName();
    for (let index = 0; index < font_style.children.length; index++) {
        if (font_style.children[index].value == RDE.getfontName() ) {
            font_style.children[index].selected = true;
            break;
        }
    }


    targitText.style.color = RDE.getforeColor();
    color.value = RDE.getforeColor();



    targitText.style.textAlign = RDE.getAlign();

    align_left.style.backgroundColor = "#ffffff";
    align_center.style.backgroundColor = "#ffffff";
    align_right.style.backgroundColor = "#ffffff";
    align_justify.style.backgroundColor = "#ffffff";
    switch (RDE.getAlign()) {
        case 'center':
            align_left.style.backgroundColor = "#e0e9ff";
            break;
        case 'left':
            align_center.style.backgroundColor = "#e0e9ff";
            break;
        case 'right':
            align_right.style.backgroundColor = "#e0e9ff";
            break;
        case 'justify':
            align_justify.style.backgroundColor = "#e0e9ff";
            break;

    }


    if (RDE.getsubscript()){
        subscript.style.backgroundColor = "#e0e9ff";
        superscript.style.backgroundColor = "#ffffff";
    } else {
        subscript.style.backgroundColor = "#ffffff";
    }
    if (RDE.getsuperscript()){
        superscript.style.backgroundColor = "#e0e9ff";
        subscript.style.backgroundColor = "#ffffff";
    } else {
        superscript.style.backgroundColor = "#ffffff";
    }


    if (RDE.getLink() != null || RDE.getLink() != ""){
        link.style.backgroundColor = "#e0e9ff";
    } else {
        link.style.backgroundColor = "#ffffff";
    }
}


function resetEdit(){

}



function readEdit(valye) {
    let edit = JSON.parse(valye[0].json)

    edit.forEach(e => {
        let cEdit = new RDE(e.name, e.bold, e.italic, e.underline, e.strikethrough, e.backColor, e.fontSize, e.fontName, e.foreColor, e.align, e.subscript, e.superscript, e.link);
        fileHolder.appendChild(cEdit.getcontainer());
        RDEContainer.push(cEdit);
    })

}

$(document).ready(function () {

    getReadyText();
    // addReadyText('testFromAjax');
    // updateReadyText('readytext_id','json');
    // deleteReadyText('readytext_id');





    function getReadyText(){
        $.ajax({
            type: "GET",
            url: "/readytext/",
            dataType: "json",
            success: function (response) {
                console.log(response)
                readEdit(response);

            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }


    function addReadyText(json){
        $.ajax({
            type: "GET",
            url: "/add-readytext/"+json,
            dataType: "json",
            success: function (response) {
                console.log(response)
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }


    function updateReadyText(json){
        $.ajax({
            type: "GET",
            url: "/update-readytext/"+json,
            dataType: "json",
            success: function (response) {
                console.log(response)
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }

    function deleteReadyText(){
        $.ajax({
            type: "GET",
            url: "/delete-readytext",
            dataType: "json",
            success: function (response) {
                console.log(response)
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }


//
// function pages(){
//     $('.page-link').on('click', function (e) {
//         e.preventDefault();
//         var page = $(this).attr('href').split('?page=')[1];
//         $('.grid-item-section').html(fetchstudent("?page="+page));
//         $.ajax({
//             type: "GET",
//             url: "/fetch-curd?page="+page+"",
//             dataType: "json",
//             success: function (response) {
//                 console.log(response);
//             }
//         });
});

