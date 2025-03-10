import Container from './Container.js';
import Edit from './BasicEdit.js';
import ComponentList from './ComponentList.js';
import PageEdit from './PageEdit.js';
import {countries} from './Info/Countries.js';
import { currentComponent } from './Component.js';
import {currentPage, setCurrentPage} from './Page.js';
import CompomnentBtn from './ComponentBtn.js';
import { imoges,fontFamily } from './Info/EditData.js';
//------------------------------------------
import Paragraph from './Paragraph.js';
import Topic from './Topic.js';
import Icon from './Icon.js';
import Image from './Image.js'
import List from './List.js';
import ListItem from './ListItem.js';
import ListTopic from './ListTopic.js';
import Table from './Table.js';
import TableCell from './TableCell.js';
import TableHeader from './TableHeader.js';
import TableRow from './TableRow.js';
import Shap from './Shap.js';

//============================================




function getInfoProject(id){
    $.ajax({
        type: "GET",
        url: "/page-project/"+id,
        dataType: "json",
        success: function (response) {
            console.log(response)
            isFullPreemption = response.permission;
            IsReadOnly = response.read_only;
            projectId = response.id;
            projectName = response.name_project;
            ProjectTyp = response.type;
            readJsonOpj(response.file);

            console.log(response)
        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}


function getInfoReceive(id){
    $.ajax({
        type: "GET",
        url: "/page-receive/"+id,
        dataType: "json",
        success: function (response) {
            isFullPreemption = response.permission;
            IsReadOnly = response.read_only;
            projectId = response.id;
            projectName = response.name_project;
            ProjectTyp = response.type;
            readJsonOpj(response.file);
        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}

function getInfoCommunity(id){
    $.ajax({
        type: "GET",
        url: "/page-community/"+id,
        dataType: "json",
        success: function (response) {
            // console.log("ehheee")
            // console.log(response)
            isFullPreemption = response.permission;
            IsReadOnly = response.read_only;
            projectId = response.id;
            projectName = response.name_project;
            ProjectTyp = response.type;
            readJsonOpj(response.file);
        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}

function getInfoCollector(id){
    $.ajax({
        type: "GET",
        url: "/page-collector/"+id,
        dataType: "json",
        success: function (response) {
            console.log("klkl")
          response.forEach(e =>{
              isFullPreemption = e.permission;
              IsReadOnly = e.read_only;
              projectId = e.id;
              projectName = e.name_project;
              ProjectTyp = response.type;
              readJsonOpj(e.file);
          })
        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}


function SaveProject(id,json){

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    var data = {
        'id':id,
        'json': json,
    }

        $.ajax({
        type: "POST",
        url: "/save-project",
            data: data,
        dataType: "json",
        success: function (response) {
        console.log(response);

        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}







export let isFullPreemption = true;
export let ProjectTyp ;
export let IsReadOnly;
let projectId;
let projectDes;
let projectName;

//export function getInfo(projectId){
export function getInfo(projectId,communityId,receiveId,collectorId){
    if (projectId != 0 ){
        projectId = projectId;
        getInfoProject(projectId);
    } else if(communityId != 0){
        getInfoCommunity(communityId);
    }else if(receiveId != 0){
        getInfoReceive(receiveId);
    }else if(collectorId != 0) {
        getInfoCollector(collectorId);

    }

}



let resizer = document.getElementById('slider');
export let leftSide = document.getElementById('main-content');
let rightSide = document.getElementById('reading');



let setting = document.getElementById('setting');
let settingbtn = document.getElementById('settingbtn');
let Back = document.getElementById('Back');
let Display = document.getElementById('Display');
let Save = document.getElementById('Save');


Save.addEventListener('click',function () {
    if(!IsReadOnly){
        SaveProject(projectId,JSON.stringify(container))

    }

});


export const translateFrom = document.getElementById('translateFrom');
export const swichlang = document.getElementById('swichlang');
export const translateTO = document.getElementById('translateTO');


export let pageParent = document.getElementById('pages');
let addPage = document.getElementById('addpage');



export let componentList = new ComponentList();
export let pageEdit = new PageEdit();
export let compomnentBtn = new CompomnentBtn();



const stoppropagation = (e) =>{
    e.stopPropagation()
}


export let container = new Container();
addPage.addEventListener('click', () =>{
    if(!IsReadOnly){
        if(ProjectTyp != 'WB'){
            let current = container.addNewPage(container.getbackGrounColor(),container.getpageDesign(),
                [container.getborderColor()[0],container.getborderColor()[1],container.getborderColor()[2],container.getborderColor()[3],container.getborderColor()[4]],
                container.getborderDesign(),
                [container.getborderStyle()[0],container.getborderStyle()[1],container.getborderStyle()[2],container.getborderStyle()[3],container.getborderStyle()[4]],
                [container.getborderWidth()[0],container.getborderWidth()[1],container.getborderWidth()[2],container.getborderWidth()[3],container.getborderWidth()[4]],
                [container.getborderRadius()[0],container.getborderRadius()[1],container.getborderRadius()[2],container.getborderRadius()[3],container.getborderRadius()[4]],
                container.getPageNumber(),container.getpageNumberColor(),container.getIsDesignEditable(),container.getIsContentEditable());

            pageParent.appendChild(current.getPage().parentNode.parentNode);
            current.getPage().parentNode.parentNode.scrollIntoView({behavior: "smooth"});
        }
    }
});
// addPage.click();
// addPage.click();
// addPage.click();
// addPage.click();
// addPage.click();



//============================================================================
export function clearEdit(){
    componentList.getAddComponentList().remove();
    // pageEdit.getPageEdit().remove();
    context_menu.style.display = 'none';
    textEdit.style.display = 'none';
}


//=============================================================================
// document.addEventListener('contextmenu', event => event.preventDefault());













let bold = document.getElementById("FS-bold");
let italic = document.getElementById("FS-italic");
let underline = document.getElementById("FS-underline");
let strikethrough = document.getElementById("FS-strikethrough");
let backColor = document.getElementById("FS-backColor");
let fontSize = document.getElementById("FS-fontSize");
let fontName = document.getElementById("FS-fontName");
let foreColor = document.getElementById("FS-foreColor");
let subscript = document.getElementById("FS-subscript");
let superscript = document.getElementById("FS-superscript");
let toUpperCase = document.getElementById("FS-toUpperCase");
let toLowerCase = document.getElementById("FS-toLowerCase");
let createLink = document.getElementById("FS-createLink");
let alCenter = document.getElementById('alCenter');
let alLeft = document.getElementById('alLeft');
let alRight = document.getElementById('alRight');
let alJustify = document.getElementById('alJustify');

console.log(alCenter,alLeft,alRight,alJustify)

let translait = document.getElementById("FS-translait");

// document.querySelectorAll(".btn").forEach(element => {element.addEventListener("click",editText)});
document.querySelectorAll(".FS-change").forEach(element => {element.addEventListener("change",editText)});
document.querySelectorAll(".FS-btn").forEach(element => {element.addEventListener("mouseup",editText)});
document.querySelectorAll(".change").forEach(element => {element.addEventListener("mouseup",(e)=>{e.stopPropagation();})})




function editText(e){

    e.stopPropagation();
    e.preventDefault();
    console.log(this)
    context_menu.style.display = 'none';
    let command = this.dataset.element;
    let current = this.value;
    let sel =  window.getSelection().getRangeAt(0).toString();
    if(command == "backColor" || command == "fontSize" || command == "fontName" || command == "foreColor" ){
    document.execCommand(command,false,current);

    }else if(command == "voiceToText"){
    if (isrecog) {
        isrecog = false;
        contenuerecog = true;
        e.target.style.backgroundColor = "#aedada";
        recognition.lang = translateFrom.value;
        recognition.start();
    } else {
        isrecog = true;
        contenuerecog = false;
        e.target.style.backgroundColor = "#ffffff";
        recognition.stop();
    }
    }else if(command == "textToVoice"){
    spack(window.getSelection().getRangeAt(0).toString());
    }else if(command == "textToVoiceTranslait"){
    spack(translait.innerText);
    }else if(command == "date"){
    var date_time = new Date().toLocaleString();
    document.execCommand("insertText",false,` “${date_time}” `);
    }else if(command == "toUpperCase"){
    document.execCommand("insertText",false,sel.toUpperCase());
    }else if(command == "toLowerCase"){
    document.execCommand("insertText",false,sel.toLowerCase());
    }else if(command == "createLink"){
        let link = window.prompt("Link");
        document.execCommand(command,false,link);
    }else if(command == "readyTextDesign"){
    applayReadyTextEdit(this.value);
    }else{
    document.execCommand(command,false,null);
    }

};

// translateFrom;
// translateTO
// swichlang


 //     d
    //     bold e0e9ff
    //     italic
    //     underline
    //     strikethrough
    //     backColor
    //     for (let index = 0; index < fontSize.children.length; index++) {
    //         if (fontSize.children[index] == "") {
    //             fontSize.children[index].selected = true;
    //         }

    //     }
    //     fontSize Arial
    //     fontName
    //     foreColor
    //     subscript
    //     superscript
    //     createLink

    //     toUpperCase
    //     toLowerCase

//     bold
// italic
// underline
// strikethrough
// backColor
// fontSize
// fontName
// foreColor
// subscript
// superscript
// toUpperCase
// toLowerCase
// createLink
// alCenter
// alLeft
// alRight
// alJustify


function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+\.*\d+)?\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
   }
   function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
    export function setTextEdit(){
        resetTextEdit();
        let sel = window.getSelection()?.getRangeAt(0);
        let selText = sel.toString();
            console.log("== ///////////////////////////////// ==")
            console.log(selText)
            // let range = window.getSelection().getRangeAt(0);
            let rangeLength = sel.commonAncestorContainer.childNodes.length;
            let current = sel.commonAncestorContainer.parentElement;
            if (rangeLength == 0) {
                while(!current.classList.contains('TextRoot')){
                    switch (current.tagName) {
                        case "B":
                            console.log('B')
                            bold.style.backgroundColor = "#e0e9ff";
                            if (current.style.backgroundColor !== "") {
                                console.log(current.style.backgroundColor)
                                backColor.value = current.style.backgroundColor;
                            }
                            break;
                        case "I":
                            console.log('I')
                            italic.style.backgroundColor = "#e0e9ff";
                            if (current.style.backgroundColor !== "") {
                                console.log(current.style.backgroundColor)
                                backColor.value = current.style.backgroundColor;
                            }
                            break;
                        case "U":
                            console.log('U')
                            underline.style.backgroundColor = "#e0e9ff";
                            if (current.style.backgroundColor !== "") {
                                console.log(current.style.backgroundColor)
                                backColor.value = current.style.backgroundColor;
                            }
                            break;
                        case "STRIKE":
                            console.log('STRIKE')
                            strikethrough.style.backgroundColor = "#e0e9ff";
                            if (current.style.backgroundColor !== "") {
                                console.log(current.style.backgroundColor)
                                backColor.value = current.style.backgroundColor;
                            }
                            break;
                        case "FONT":

                            console.log(current.color)
                            if (current.color !== "") {
                                foreColor.value = current.color;
                            }
                            if(current.face !== ""){
                                console.log(current.face)
                                for (let index = 0; index <  fontName.children.length; index++) {
                                    // console.log( fontName.children[index].value,current.face)
                                    if ( fontName.children[index].value == current.face) {
                                        fontName.children[index].selected = true;
                                    }
                                }
                            }
                            if(current.size != ""){
                                console.log(current.size)
                                for (let index = 0; index <  fontSize.children.length; index++) {
                                    if ( fontSize.children[index].value == current.size) {
                                        fontSize.children[index].selected = true;
                                    }
                                }
                            }

                            if (current.style.backgroundColor !== "") {
                                console.log(current.style.backgroundColor)
                                backColor.value = current.style.backgroundColor;
                            }
                            break;
                        case "SUP":
                            console.log('sup');
                            superscript.style.backgroundColor = "#e0e9ff";
                            if (current.style.backgroundColor !== "") {
                                console.log(current.style.backgroundColor)
                                backColor.value = current.style.backgroundColor;
                            }
                            break;
                        case "SUB":
                            console.log('sub');
                            subscript.style.backgroundColor = "#e0e9ff";
                            if (current.style.backgroundColor !== "") {
                                console.log(current.style.backgroundColor)
                                backColor.value = current.style.backgroundColor;
                            }
                            break;
                        case "SPAN":
                            if (current.style.backgroundColor !== "") {
                                console.log(backColor.value,rgb2hex(current.style.backgroundColor))
                                backColor.value = rgb2hex(current.style.backgroundColor);
                                break;
                            }

                        case "DIV":
                            if (current.style.textAlign != "") {
                                console.log(current.style.textAlign)
                                switch (current.style.textAlign) {
                                    case "center":
                                        alCenter.style.backgroundColor = "#e0e9ff";
                                        break;
                                    case "right":

                                            console.log(alRight)
                                            alRight.style.backgroundColor = "#e0e9ff";
                                            break;
                                    case "left":
                                        alLeft.style.backgroundColor = "#e0e9ff";
                                        break;
                                    case "justify":
                                        alJustify.style.backgroundColor = "#e0e9ff";
                                        break;
                                }
                                if (current.style.backgroundColor !== "") {
                                console.log(current.style.backgroundColor)
                                backColor.value = current.style.backgroundColor;
                            }
                                break;
                            }

                        case "A":
                            if (current.src != "") {
                                console.log(current.src);
                                createLink.style.backgroundColor = "#e0e9ff";
                                if (current.style.backgroundColor !== "") {
                                console.log(current.style.backgroundColor)
                                backColor.value = current.style.backgroundColor;
                            }
                                break;
                            }
                    }

                    current =  current.parentElement;


            if (selText !== "" && selText !== undefined) {


                if (selText == selText.toLocaleUpperCase()) {
                    console.log('upper')
                    toUpperCase.style.backgroundColor = "#e0e9ff";
                }

                if (selText == selText.toLowerCase()) {
                    console.log('lower')
                    toLowerCase.style.backgroundColor = "#e0e9ff";
                }
            }
                // console.log (current.className)


            }
        }
    }

    //     bold
// italic
// underline
// strikethrough
// backColor
// fontSize
// fontName
// foreColor
// subscript
// superscript
// toUpperCase
// toLowerCase
// createLink
// alCenter
// alLeft
// alRight
// alJustify

    function resetTextEdit(){
            bold.style.backgroundColor = "#ffffff";
                italic.style.backgroundColor = "#ffffff";
                underline.style.backgroundColor = "#ffffff";
                strikethrough.style.backgroundColor = "#ffffff";
                backColor.value = "#000000";
                fontSize.children[0].selected = true;
                fontName.children[0].selected = true;
                foreColor.value = "#000000";
                subscript.style.backgroundColor = "#ffffff";
                superscript.style.backgroundColor = "#ffffff";
                toUpperCase.style.backgroundColor = "#ffffff";
                toLowerCase.style.backgroundColor = "#ffffff";
                createLink.style.backgroundColor = "#ffffff";
                alCenter.style.bbackgroundColor = "#ffffff";
                alLeft.style.bbackgroundColor = "#ffffff";
                alRight.style.bbackgroundColor = "#ffffff";
                alJustify.style.bbackgroundColor = "#ffffff";
    }

    function applayReadyTextEdit(Edits){



    }

const cutText = (e) =>{
    e.stopPropagation();
    // context_menu.style.display = 'none';
    let sellection = window.getSelection();
    navigator.clipboard.writeText(sellection.getRangeAt(0).toString());
    sellection.deleteFromDocument();
}
const copyText = (e) =>{
    e.stopPropagation();
    // context_menu.style.display = 'none';
    navigator.clipboard.writeText(window.getSelection().getRangeAt(0).toString())
}
const pasteText = (e) =>{
    e.stopPropagation();
    // context_menu.style.display = 'none';
    navigator.clipboard.readText().then(
        clipText => document.execCommand("insertText",false,`${clipText}`));
}
const sellectAllText = (e) =>{
    e.stopPropagation();
    // context_menu.style.display = 'none';
    document.execCommand("selectAll",false,null);
}

const undoTxt = (e) =>{
    e.stopPropagation();
    document.execCommand("undo",false,null);
}
const redoText = (e) =>{
    e.stopPropagation();
    document.execCommand("redo",false,null);

}

export let textEdit = document.getElementById("TextEditContainer");

export let context_menu = document.getElementById('context_menu');
let menuCut = document.getElementById('menuCut');
menuCut.addEventListener('click', cutText);
menuCut.addEventListener('mousedown', stoppropagation);
menuCut.addEventListener('mouseup', stoppropagation);
let menuCopy = document.getElementById('menuCopy');
menuCopy.addEventListener('click', copyText);
menuCopy.addEventListener('mousedown', stoppropagation);
menuCopy.addEventListener('mouseup', stoppropagation);
let menuPaste = document.getElementById('menuPaste');
menuPaste.addEventListener('click', pasteText);
menuPaste.addEventListener('mousedown', stoppropagation);
menuPaste.addEventListener('mouseup', stoppropagation);
let menuSelectAll = document.getElementById('menuSelectAll');
menuSelectAll.addEventListener('click', sellectAllText);
menuSelectAll.addEventListener('mousedown', stoppropagation);
menuSelectAll.addEventListener('mouseup', stoppropagation);

let menuUndo  = document.getElementById('menuUndo');
menuUndo.addEventListener('click', undoTxt);
menuUndo.addEventListener('mousedown', stoppropagation);
menuUndo.addEventListener('mouseup', stoppropagation);
let menuRedo = document.getElementById('menuRedo');
menuRedo.addEventListener('click', redoText);
menuRedo.addEventListener('mousedown', stoppropagation);
menuRedo.addEventListener('mouseup', stoppropagation);


let imog = document.getElementById('imoges');
imoges.forEach(e =>{
    imog.insertAdjacentHTML("beforeend", `<option value="${e}">${e}</option>`);
})

imog.addEventListener('change', function(){
    document.execCommand("insertText",false,imog.value);
})

fontFamily.forEach(e =>{
    fontName.insertAdjacentHTML("beforeend", `<option value="${e}">${e}</option>`);
})


// RTE

//===========================================================================================



        textEdit.addEventListener('mousedown', stoppropagation);


        leftSide.addEventListener('scroll', (e) =>{
            context_menu.style.display = 'none';
                textEdit.style.display = 'none';
        });

        window.addEventListener('mousedown', (e) =>{
            context_menu.style.display = 'none';
            textEdit.style.display = 'none';
            setting.style.display = 'none';
            addPage.style.transform = "rotate(0deg)";
            settingbtn.style.transitionDelay = "0.6s"
            Back.style.transitionDelay = "0.4s"
            Display.style.transitionDelay = "0.2s"
            Save.style.transitionDelay = "0s"
            settingbtn.style.left = `${40}px`;
            settingbtn.style.bottom = `${40}px`;
            Back.style.left = `${40}px`
            Back.style.bottom = `${40}px`
            Display.style.left = `${40}px`
            Display.style.bottom = `${40}px`
            Save.style.left = `${40}px`
            Save.style.bottom = `${40}px`
        });

            // if( (e.clientY <= leftSide.getBoundingClientRect().top + 300) ) {
                //     console.log("scrolltop")
                //     // worker.terminate()
                //     // worker.postMessage("bottom",leftSide);
                // }else{
                    //     console.log("unscroll")
                    // }

        let worker;
        export let scrollUp = document.getElementById('scrollUp')
        export let scrolldown = document.getElementById('scrolldown')
        scrollUp.addEventListener("mouseenter", (e)=>{
            startWorker();
            worker.postMessage("top");
        })
        scrolldown.addEventListener("mouseenter",(e)=>{
            startWorker();
            worker.postMessage("bottom");
        })
        scrollUp.addEventListener("mouseleave",stopWorker)
        scrolldown.addEventListener("mouseleave",stopWorker)

        function startWorker() {
            if(typeof(Worker) !== "undefined") {
                if(typeof(worker) == "undefined") {
                    if (worker == undefined) {
                        worker = new Worker("./Threeds/scroll.js");
                        worker.onmessage = function(masg){

                            if (masg.data == "top") {
                                leftSide.scrollBy(0,-5);
                            } else {
                                leftSide.scrollBy(0,5);
                            }
                        }
                    }
                }
            } else {
            console.log("Sorry, your browser does not support Web Workers...");
            }
        };



        function stopWorker() {
            worker.terminate();
            worker = undefined;
            console.log("leave")
        }



        let shift;
        window.addEventListener("keydown",(e)=>{
            if (currentComponent !== undefined) {
                if (e.key == "Shift") {
                    shift = e.location;
                }
                if (e.shiftKey) {
                    if (shift === 1) {
                        if (e.keyCode == '38') {
                            e.preventDefault();
                            currentComponent.setYAxis(currentComponent.getYAxis()-1);
                        }
                        else if (e.keyCode == '40') {
                            e.preventDefault();
                            currentComponent.setYAxis(currentComponent.getYAxis()+1);
                        }
                        else if (e.keyCode == '37') {
                            e.preventDefault();
                            currentComponent.setXAxis(currentComponent.getXAxis()-1);
                        }
                        else if (e.keyCode == '39') {
                            e.preventDefault();
                            currentComponent.setXAxis(currentComponent.getXAxis()+1);

                        }
                    } else {

                        if (e.keyCode == '38') {
                            e.preventDefault();
                            currentComponent.setHeight(currentComponent.getHeight()-1);
                        }
                        else if (e.keyCode == '40') {
                            e.preventDefault();
                            currentComponent.setHeight(currentComponent.getHeight()+1);
                        }
                        else if (e.keyCode == '37') {
                            e.preventDefault();
                            currentComponent.setWidth(currentComponent.getWidth()-1);
                        }
                        else if (e.keyCode == '39') {
                            e.preventDefault();
                            currentComponent.setWidth(currentComponent.getWidth()+1);


                        }
                    }
                }
            }
        });






        function spack(text){
            let utterannce = new SpeechSynthesisUtterance(text);
            console.log( window.speechSynthesis.getVoices())
            // utterannce.lang  = "ar-SA";
            // // utterannce.voice = "ar-SA";

            window.speechSynthesis.speak(utterannce);
        }





        let isrecog = true ;
        let contenuerecog;
        window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

        const recognition = new window.SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = translateFrom.value;

        recognition.addEventListener('result', (e) =>{
            const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
            if (e.results[0].isFinal) {
                console.log(text)
                document.execCommand('insertHTML',false,'&nbsp')
                document.execCommand('insertText',false,text);

            }
        })

        recognition.addEventListener('end', () =>{
            if (contenuerecog) {
                recognition.start();
            } else {
                recognition.stop();
            }
        })


        //=================================================================================================================================================================================





//=================================================================================================================================================================================


function removeSelation(){
    window.getSelection().removeAllRanges();
    context_menu.style.display = 'none';
    textEdit.style.display = 'none';
}



for(const country_code in countries){
    let selected;
    if (country_code == 'en-GB') {
        selected = "selected";
    }
    let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`
    translateFrom.insertAdjacentHTML("beforeend", option);
}

for(const country_code in countries){
    let selected;
    if (country_code == 'ar-SA') {
        selected = "selected";
    }
    let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`
    translateTO.insertAdjacentHTML("beforeend", option);
}
export function Translait(){
    let sel;
    try{sel = window.getSelection().getRangeAt(0).toString();}catch{}
    if (sel !== "" && sel !== undefined) {
        let translaitedtext;
        console.log(`${sel}${translateFrom.value}${translateTO.value}`);
        let apiUrl = `https://api.mymemory.translated.net/get?q=${sel}&langpair=${translateFrom.value}|${translateTO.value}`;
        fetch(apiUrl).then(res => res.json()).then(data =>{
            console.log(data)
            translait.innerText = data.responseData.translatedText;
        })
    }


}


setting.addEventListener('mousedown',(e) =>{
    e.stopPropagation()
})
settingbtn.addEventListener('mousedown',(e) =>{
    e.stopPropagation();
    if (!IsReadOnly){
        setting.style.display == 'none'? setting.style.display = 'inline' : setting.style.display = 'none';

    }
})
addPage.addEventListener('mouseover', (e) =>{
    removeSelation();
    addPage.style.transform = "rotate(360deg)";
    settingbtn.style.transitionDelay = "0s"
    Back.style.transitionDelay = "0.2s"
    Display.style.transitionDelay = "0.4s"
    Save.style.transitionDelay = "0.6s"
    settingbtn.style.left = `${15}px`;
    settingbtn.style.bottom = `${110}px`;
    Back.style.left = `${65}px`
    Back.style.bottom = `${100}px`
    Display.style.left = `${100}px`
    Display.style.bottom = `${65}px`
    Save.style.left = `${110}px`
    Save.style.bottom = `${15}px`
});

// 1
// 1
// 1
// 1

// 1
// 1
// 1
// 1
// 1
// 1
// 1
// 1
// 1

// let print = document.getElementById('print');


// print.addEventListener('click', printDiv);

// function printDiv() {
//     clearEdit();
//     pageEdit.getPageEdit().remove();
//     var a = window.open('', '',);
//     a.document.write('<html>');
//     a.document.write(' <link rel="stylesheet" href="./Css/Page.css"> ');
//     a.document.write('<body >');
//     a.document.write(pageParent.outerHTML);
//     a.document.write('</body></html>');

//     a.window.addEventListener('load',function(){ // necessary if the div contain images
//         console.log("dd")
//         myWindow.focus(); // necessary for IE >= 10
//         myWindow.print();
//         myWindow.close();
//     })

// }


// // window.jsPDF = window.jspdf.jsPDF;
// var doc = new jsPDF();
// function exportToPdf() {
//     clearEdit();
//     pageEdit.getPageEdit().remove();
//     doc.fromHTML(`<html><head><title>hello</title>` + pageParent.outerHTML + `</body></html>`);
//     doc.save('div.pdf');
// }





let leftSideWidth = 90;

let showReadingSec = document.getElementById('showReadingSec');
let uploadFile = document.getElementById('uploadFile');
export let frame = document.getElementById('frame');
let readingFiles = document.getElementById('readingFiles');
let deleteFile = document.getElementById('deleteFile');

showReadingSec.addEventListener('change', (e)=>{
    if(!IsReadOnly){
        if (showReadingSec.checked == true ){
            resizer.style.display = 'inline';
            rightSide.style.display = 'inline';
            leftSideWidth = 80;
            leftSide.style.width = '80%';

        } else {
            resizer.style.display = 'none';
            rightSide.style.display = 'none';
            leftSideWidth = 100;
            leftSide.style.width = '100%';

        }
    } else {
        resizer.style.display = 'none';
        rightSide.style.display = 'none';
        leftSideWidth = 100;
        leftSide.style.width = '100%';


    }
    scrolerChange();
});


new Sortable(readingFiles,{
    animation: 350
});

let currentFile;
frame.addEventListener("scroll",(e)=>{
    currentFile.dataset.height = window.pageYOffset || document.documentElement.scrollTop || 0;
})

let parentpop = document.getElementById('poupParent');
 let poupChild = document.getElementById('poupChild');

 let FS_popupImage = document.getElementById('FS-popupImage');

 let uploadBtn = document.getElementById('uploadBtn');
 let uploadCansel = document.getElementById('uploadCansel');
 let uploadOk = document.getElementById('uploadOk');

 let FS_pupopPDF = document.getElementById('FS-pupopPDF');

 let urlPdf = document.getElementById('urlPdf');
 let urlPdfCansel = document.getElementById('urlPdfCansel');
 let urlPdfOk = document.getElementById('urlPdfOk');

uploadFile.addEventListener('change', function(){

    // const filereader = new FileReader();
    //
    // filereader.addEventListener('load', () => {
    //
    //     let filename = this.files[0].name;
    //
    //     filename =  filename.trim();
    //     filename = filename.replace(/\s+/g,'');
    //     filename =  filename.replace(/.pdf/,'');
    //     renderPDF(filereader.result);
    //     addNewFile(filereader.result,0,filename);
    // });
    // filereader.readAsDataURL(this.files[0]);


});

function renderPDF(url){
    if (frame.children.length > 0) {
        frame.children[0].remove();
    }
    let curent = document.createElement('div');
    curent.classList.add('pdfViwer');
    frame.appendChild(curent);
    PDFObject.embed(url,curent);
}

function addNewFile(url,height,name,id){

    let current = document.createElement('span');
    current.classList.add('fileContainer');
    current.dataset.url = url;
    current.dataset.height = height;
    current.dataset.id = id;
    current.innerText = name;
    current.addEventListener('click', dispalyFile);
    readingFiles.appendChild(current);
    currentFile = current

}


const dispalyFile = (e) =>{
    currentFile.style.border = 'none';
    currentFile = e.target

    PDFObject.embed("https://mfmyteam.com/project/images/Data-Structures-and-Algorithms-in-Java-6th-Edition.pdf",frame);
    // let x = document.getElementsByClassName('pdfobject')[0];
    // x.zoom = 200;
    currentFile.style.border = '1px solid';

}


if (IsReadOnly){
    console.log(jjkfekj)
    resizer.style.display = 'none';
    rightSide.style.display = 'none';
    leftSideWidth = 100;
    leftSide.style.width = '100%';
    scrolerChange();
}




let scroler = document.getElementById('scroler');

leftSide.addEventListener('scroll', (e)=>{ scrolerChange()});


function scrolerChange(){
    let height =  leftSide.scrollHeight - leftSide.clientHeight;
    let scrolltop = leftSide.scrollTop ;
    scroler.style.width = `${(scrolltop/height) * leftSideWidth}%`;
}







        resizer.addEventListener('mousedown', mouseDownHandler);

        let x = 0;
        let y = 0
        let leftWidth = 0;

        function mouseDownHandler (e){
            x = e.clientX;
            y = e.clientY;
            leftWidth = leftSide.getBoundingClientRect().width;

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);


        };

        function mouseMoveHandler(e){
            const dx = e.clientX - x;
            const dy = e.clientY - y;

            const newLeftWidth = ((leftWidth + dx)* 100)/ resizer.parentNode.getBoundingClientRect().width;
            if (newLeftWidth <= 90 && newLeftWidth >= 20) {
                leftSideWidth = newLeftWidth;
                leftSide.style.width = `${newLeftWidth}%`;
                scrolerChange();
            };

            resizer.style.cursor = 'col-resize';
                document.body.style.cursor = 'col-resize';

                leftSide.style.userSelect = 'none';
                leftSide.style.pointerEvents = 'none';

                rightSide.style.userSelect = 'none';
                rightSide.style.pointerEvents = 'none'
        }

        function mouseUpHandler(){
            resizer.style.removeProperty('cursor');
                document.body.style.removeProperty('cursor');

                leftSide.style.removeProperty('user-select');
                leftSide.style.removeProperty('pointer-events');

                rightSide.style.removeProperty('user-select');
                rightSide.style.removeProperty('pointer-events');
            document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
        }



        let json = document.getElementById('test');
        json.addEventListener('click',(e)=>{
            // readJsonOpj
            console.log(JSON.stringify(container))
        })




function getFile(id){
    $.ajax({
        type: "GET",
        url: "/get-file-project/"+id,
        dataType: "json",
        success: function (response) {
            // readJsonOpj
            console.log(response)

        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}




        function readJsonOpj(jsonOpj){
            let cCon = JSON.parse(jsonOpj);
           container.setContainerEdit(cCon.backGrounColor,cCon.pageDesign,
            [cCon.borderColor[0],cCon.borderColor[1],cCon.borderColor[2],cCon.borderColor[3],cCon.borderColor[4]],
            cCon.borderDesign,
            [cCon.borderStyle[0],cCon.borderStyle[1],cCon.borderStyle[2],cCon.borderStyle[3],cCon.borderStyle[4]],
            [cCon.borderWidth[0],cCon.borderWidth[1],cCon.borderWidth[2],cCon.borderWidth[3],cCon.borderWidth[4]],
            [cCon.borderRadius[0],cCon.borderRadius[1],cCon.borderRadius[2],cCon.borderRadius[3],cCon.borderRadius[4]],
            cCon.pageNumber,cCon.pageNumberColor,cCon.isDesignEditable,cCon.isContentEditable);
            let cPg = cCon.pages;

            cPg.forEach(e => {
                let tempPage = container.addNewPage(e.backGrounColor,e.pageDesign,
                    [e.borderColor[0],e.borderColor[1],e.borderColor[2],e.borderColor[3],e.borderColor[4]],
                    e.borderDesign,
                    [e.borderStyle[0],e.borderStyle[1],e.borderStyle[2],e.borderStyle[3],e.borderStyle[4]],
                    [e.borderWidth[0],e.borderWidth[1],e.borderWidth[2],e.borderWidth[3],e.borderWidth[4]],
                    [e.borderRadius[0],e.borderRadius[1],e.borderRadius[2],e.borderRadius[3],e.borderRadius[4]],
                    e.pageNumber,e.pageNumberColor,e.isDesignEditable,e.isContentEditable);
                    setCurrentPage(tempPage);
                     pageParent.appendChild(tempPage.getPage().parentNode.parentNode);
                    let paragraphs = e.paragraphs;
                    paragraphs.forEach(el =>{
                        console.log('what')
                        tempPage.pushComponent(new Paragraph(el.text,el.isLined,el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,
                            el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable));
                    })
                    let topics = e.topics;
                    topics.forEach(el =>{
                        tempPage.pushComponent(new Topic(el.text,el.topicLevel,el.isLined,el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,
                            el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable));
                        })

                    let image = e.image;
                    image.forEach(el =>{
                        tempPage.pushComponent(new Image(el.path,
                            el.blur,el.brightness,el.contrast,el.grayscale,el.hueRotate,el.invert,el.saturate,el.sepia,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable))
                    })

                    let icons = e.icons;
                    icons.forEach(el =>{
                        tempPage.pushComponent(new Icon(el.icon,el.color,el.size,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable))
                    })


                    let lists = e.lists;
                    lists.forEach(el =>{
                        let currentList = new List(el.type,el.start,el.styleType,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable);

                            let Ltype = el.type;
                            el.item.forEach(el =>{
                                let curentListItem;
                                console.log(el.item)
                                switch (Ltype) {
                                    case "item":
                                        curentListItem = new ListItem(el.itemSpace,el.text,el.isLined,
                                            el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                                            el.opacity,el.rotation,el.padding,el.skew,
                                            el.backGrounColor,el.backGrounDesign,
                                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                                            el.borderDesign,
                                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                                            el.polygon,
                                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                                        break;
                                    case "topic":
                                        curentListItem = new ListTopic(el.itemSpace,el.sideText,el.text,el.isLined,
                                            el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                                            el.opacity,el.rotation,el.padding,el.skew,
                                            el.backGrounColor,el.backGrounDesign,
                                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                                            el.borderDesign,
                                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                                            el.polygon,
                                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                                        break;
                                }
                                curentListItem.addEvents();
                                currentList.addItem(curentListItem);
                            })

                            tempPage.pushComponent(currentList);

                    })


                    let tables = e.tables;
                    tables.forEach(el =>{
                        let currentTable = new Table(el.isCollapse,el.isSticyCol,el.isSticyRow,el.rowSpace,el.colSpace,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,
                            el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                        el.rows.forEach((e,i) =>{
                            let currentRow = new  TableRow(el.opacity,el.rotation,el.skew,el.isSizesEditable);
                            let curentCell;
                            if(i == 0){
                                e.cells.forEach(el =>{
                                    curentCell = new TableHeader(el.cellWidth,
                                        el.text,el.isLined,el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                                        el.opacity,el.rotation,el.padding,el.skew,
                                        el.backGrounColor,el.backGrounDesign,
                                        [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                                        el.borderDesign,
                                        [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                                        [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                                        [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                                        el.polygon,
                                        el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                                        curentCell.addEvents();
                                        currentRow.addCell(curentCell);
                                })
                            }else{
                                e.cells.forEach(el =>{
                                    curentCell = new TableCell(el.text,el.isLined,el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                                        el.opacity,el.rotation,el.padding,el.skew,
                                        el.backGrounColor,el.backGrounDesign,
                                        [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                                        el.borderDesign,
                                        [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                                        [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                                        [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                                        el.polygon,
                                        el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                                        curentCell.addEvents();
                                    currentRow.addCell(curentCell);
                                })
                            }
                            currentRow.addEvents();
                            currentTable.addRow(currentRow);
                        })
                        tempPage.pushComponent(currentTable);
                    })
                    let shapes = e.shapes;
                    shapes.forEach(el =>{
                        tempPage.pushComponent(new Shap(el.width,el.height,el.xAxis,el.yAxis,el.zAxis,
                            el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable))
                    })

            });

        }

        //===========================================================================================


        let pageNump = document.getElementById('pageNump');
        let componentNump = document.getElementById('componentNump');

        export function countPageBoxNum(){
            pageNump.innerHTML = `Number pages: ${container.getPages().length}`;


        let currentBoxNum = 0;

        container.getPages().forEach(e =>{
            currentBoxNum = currentBoxNum + e.getParagraphs().length + e.getTopics().length
            + e.getImage().length + e.getIcons().length + e.getLists().length
            + e.getTables().length + e.getTopicLists().length + e.getShapes().length;
        })

        componentNump.innerHTML = `Number boxes: ${currentBoxNum}`;
        }


        //==========================================================================================


// popupPDF js
 let FS_btn_UploadPDF = document.getElementById("FS-btn-UploadPDF");
let FS_btn_EmbedLinkPDF = document.getElementById("FS-btn-EmbedLinkPDF");
let FS_pop_UploadPDF = document.getElementById("FS-pop-UploadPDF");
let FS_pop_EmbedLinkPDF = document.getElementById("FS-pop-EmbedLinkPDF");
///////////////////////////////////////////////////
FS_btn_UploadPDF.addEventListener("click", function pupopPDF(e) {
    FS_pop_EmbedLinkPDF.style.display = "none";
    FS_pop_UploadPDF.style.display = "block";

    FS_btn_UploadPDF.style.borderBottom = "2px solid";
    FS_btn_EmbedLinkPDF.style.borderBottom = "0";
});
///////////////////////////////////////////////////
FS_btn_EmbedLinkPDF.addEventListener("click", (e) => {
    FS_pop_EmbedLinkPDF.style.display = "block";
    FS_pop_UploadPDF.style.display = "none";

    FS_btn_UploadPDF.style.borderBottom = "0";
    FS_btn_EmbedLinkPDF.style.borderBottom = "2px solid";
});

//========================================================

// let parentpop = document.getElementById('poupParent');
// poupChild
//
// FS-popupImage
//
// ImageUrl
// urlCansel
// urlOk
//
// uploadBtn
// uploadCansel
// uploadOk
//
//
//
// FS-pupopPDF
//
// pdfupbtn
// pdfupCansel
// pdfupOk
//
//
// urlPdf
// urlPdfCansel
// urlPdfOk





/*****************************************/
//
//     var CSRF_TOKEN = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
//
//     $(document).ready(function(){
//
//     $('#submit').click(function(){
//
//         // Get the selected file
//         var files = $('#file')[0].files;
//
//         if(files.length > 0){
//             var fd = new FormData();
//
//             // Append data
//             fd.append('file',files[0]);
//             fd.append('_token',CSRF_TOKEN);
//
//             // Hide alert
//             $('#responseMsg').hide();
//
//             // AJAX request
//             $.ajax({
//                 url: "{{route('uploadFileImg')}}",
//                 method: 'post',
//                 data: fd,
//                 contentType: false,
//                 processData: false,
//                 dataType: 'json',
//                 success: function(response){
//
//                     // Hide error container
//                     $('#err_file').removeClass('d-block');
//                     $('#err_file').addClass('d-none');
//
//                     if(response.success == 1){ // Uploaded successfully
//
//                         // Response message
//                         $('#responseMsg').removeClass("alert-danger");
//                         $('#responseMsg').addClass("alert-success");
//                         $('#responseMsg').html(response.message);
//                         $('#responseMsg').show();
//
//                         // File preview
//                         $('#filepreview').show();
//                         $('#filepreview img,#filepreview a').hide();
//                         if(response.extension == 'jpg' || response.extension == 'jpeg' || response.extension == 'png'){
//
//                             $('#filepreview img').attr('src',response.filepath);
//                             $('#filepreview img').show();
//                         }else{
//                             $('#filepreview a').attr('href',response.filepath).show();
//                             $('#filepreview a').show();
//                         }
//                     }else if(response.success == 2){ // File not uploaded
//
//                         // Response message
//                         $('#responseMsg').removeClass("alert-success");
//                         $('#responseMsg').addClass("alert-danger");
//                         $('#responseMsg').html(response.message);
//                         $('#responseMsg').show();
//                     }else{
//                         // Display Error
//                         $('#err_file').text(response.error);
//                         $('#err_file').removeClass('d-none');
//                         $('#err_file').addClass('d-block');
//                     }
//                 },
//                 error: function(response){
//                     console.log("error : " + JSON.stringify(response) );
//                 }
//             });
//         }else{
//             alert("Please select a file.");
//         }
//
//     });
// });
//
//
//
//
//     $('#submitPdf').click(function(){
//
//     // Get the selected file
//     var files = $('#file_pdf')[0].files;
//
//     if(files.length > 0){
//     var fd = new FormData();
//
//     // Append data
//     fd.append('file',files[0]);
//     fd.append('_token',CSRF_TOKEN);
//
//     // Hide alert
//     $('#responseMsg').hide();
//
//     // AJAX request
//     $.ajax({
//     url: "{{route('uploadFilePDF')}}",
//     method: 'post',
//     data: fd,
//     contentType: false,
//     processData: false,
//     dataType: 'json',
//     success: function(response){
//
//     // Hide error container
//     $('#err_file_pdf').removeClass('d-block');
//     $('#err_file_pdf').addClass('d-none');
//
//     if(response.success == 1){ // Uploaded successfully
//
//     // Response message
//     $('#responseMsg').removeClass("alert-danger");
//     $('#responseMsg').addClass("alert-success");
//     $('#responseMsg').html(response.message);
//     $('#responseMsg').show();
//
//     // File preview
//     $('#filepreview').show();
//     $('#filepreview img,#filepreview a').hide();
//     if(response.extension == 'jpg' || response.extension === 'jpeg' || response.extension == 'png'){
//
//     $('#filepreview img').attr('src',response.filepath);
//     $('#filepreview img').show();
// }else{
//     $('#filepreview a').attr('href',response.filepath).show();
//     $('#filepreview a').show();
// }
// }else if(response.success == 2){ // File not uploaded
//
//     // Response message
//     $('#responseMsg').removeClass("alert-success");
//     $('#responseMsg').addClass("alert-danger");
//     $('#responseMsg').html(response.message);
//     $('#responseMsg').show();
// }else{
//     // Display Error
//     $('#err_file_pdf').text(response.error);
//     $('#err_file_pdf').removeClass('d-none');
//     $('#err_file_pdf').addClass('d-block');
// }
// },
//     error: function(response){
//     console.log("error : " + JSON.stringify(response) );
// }
// });
// }else{
//     alert("Please select a file.");
// }
// });
//
//
