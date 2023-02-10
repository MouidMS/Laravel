import Container from './Container.js';
import Edit from './BasicEdit.js';
import ComponentList from './ComponentList.js';
import PageEdit from './PageEdit.js';
import {countries} from './Countries.js';
import { currentComponent } from './Component.js';
import { currentPage } from './Page.js';
import CompomnentBtn from './ComponentBtn.js';
//------------------------------------------
import Paragraph from './Paragraph.js';
import Topic from './Topic.js';
import Icon from './Icon.js';
import Images from './Image.js'
import List from './List.js';
import Table from './Table.js';
import Shap from './Shap.js';

//============================================


export let isFullPreemption = true;



let resizer = document.getElementById('slider');
export let leftSide = document.getElementById('main-content');
let rightSide = document.getElementById('reading');



let setting = document.getElementById('setting');
let settingbtn = document.getElementById('settingbtn');
let Back = document.getElementById('Back');
let Display = document.getElementById('Display');
let Save = document.getElementById('Save');

export const translateFrom = document.getElementById('translateFrom');
export const swichlang = document.getElementById('swichlang');
export const translateTO = document.getElementById('translateTO');


export let pageParent = document.getElementById('pages');
let addPage = document.getElementById('addpage');


export let borderStyle = ["solid","dotted","dashed","outset","double","groove","inset","ridge"];
export let pagePostion = ["none","top","top-right","top-left","bottom","bottom-right","bottom-left"];
export let textSpacing = ["normal",1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120]
export let iconList = [["none","none"],["fa-solid fa-house","&#xf015"],["fa-brands fa-facebook","&#xf09a"],["fa-brands fa-tiktok","&#xe07b"],["fa-brands fa-instagram","&#xf16d"],["fa-brands fa-twitter","&#xf099"],["fa-solid fa-location-dot","&#xf3c5"],["fa-brands fa-github","&#xf09b"]]
export let backDesign = ["none"];
export let borderDesign = ["none"];
export let listStyles = ["disc","none","circle","square","decimal","decimal-leading-zero","lower-alpha","lower-greek","lower-latin","lower-roman","upper-alpha","upper-greek","upper-latin","upper-roman","armenian","cjk-ideographic","georgian","hebrew","hiragana","hiragana-iroha","katakana","katakana-iroha"];
export let componentList = new ComponentList();
export let pageEdit = new PageEdit();
export let compomnentBtn = new CompomnentBtn();



const stoppropagation = (e) =>{
    e.stopPropagation()
}


export let container = new Container();
addPage.addEventListener('click', () =>{
let current = container.addNewPage(container.getbackGrounColor(),container.getpageDesign(),
[container.getborderColor()[0],container.getborderColor()[1],container.getborderColor()[2],container.getborderColor()[3],container.getborderColor()[4]],
container.getborderDesign(),
[container.getborderStyle()[0],container.getborderStyle()[1],container.getborderStyle()[2],container.getborderStyle()[3],container.getborderStyle()[4]],
[container.getborderWidth()[0],container.getborderWidth()[1],container.getborderWidth()[2],container.getborderWidth()[3],container.getborderWidth()[4]],
[container.getborderRadius()[0],container.getborderRadius()[1],container.getborderRadius()[2],container.getborderRadius()[3],container.getborderRadius()[4]],
container.getPageNumber(),container.getpageNumberColor(),container.getIsDesignEditable(),container.getIsContentEditable());

pageParent.appendChild(current.getPage().parentNode.parentNode);
current.getPage().parentNode.parentNode.scrollIntoView({behavior: "smooth"});
});
addPage.click();
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

const cutText = (e) =>{
    e.stopPropagation();
    context_menu.style.display = 'none';
    let sellection = window.getSelection();
    navigator.clipboard.writeText(sellection.getRangeAt(0).toString());
    sellection.deleteFromDocument();
}
const copyText = (e) =>{
    e.stopPropagation();
    context_menu.style.display = 'none';
    navigator.clipboard.writeText(window.getSelection().getRangeAt(0).toString())
}
const pasteText = (e) =>{
    e.stopPropagation();
    context_menu.style.display = 'none';
    navigator.clipboard.readText().then(
        clipText => document.execCommand("insertText",false,`${clipText}`));
}
const sellectAllText = (e) =>{
    e.stopPropagation();
    context_menu.style.display = 'none';
    document.execCommand("selectAll",false,null);
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
        
        let bold = document.getElementById("bold"); 
        let italic = document.getElementById("italic");
        let underline = document.getElementById("underline");
        let strikethrough = document.getElementById("strikethrough");
        let backColor = document.getElementById("backColor");
        let fontSize = document.getElementById("fontSize");
        let fontName = document.getElementById("fontName");
        let foreColor = document.getElementById("foreColor");
        let subscript = document.getElementById("subscript");
        let superscript = document.getElementById("superscript");     
        let toUpperCase = document.getElementById("toUpperCase");
        let toLowerCase = document.getElementById("toLowerCase");
        let createLink = document.getElementById("createLink");

        let translait = document.getElementById("translait");

        // document.querySelectorAll(".btn").forEach(element => {element.addEventListener("click",editText)});
        document.querySelectorAll(".change").forEach(element => {element.addEventListener("change",editText)});
        document.querySelectorAll(".btn").forEach(element => {element.addEventListener("mouseup",editText)});
        document.querySelectorAll(".change").forEach(element => {element.addEventListener("mouseup",(e)=>{e.stopPropagation();})})
        



function editText(e){

    e.stopPropagation();
    e.preventDefault();
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
export function setTextEdit(){
    resetTextEdit();
    let sel = window.getSelection()?.getRangeAt(0);
    let selText = sel.toString();
    if (selText !== "" && selText !== undefined) {
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
                        // bold.style.backgroundColor = "#e0e9ff";
                        if (current.style.backgroundColor !== "") {
                            console.log(current.style.backgroundColor)
                            // backColor.value = current.style.backgroundColor;
                        } 
                        break;
                    case "I":
                        console.log('I')
                        // italic.style.backgroundColor = "#ffffff";
                        if (current.style.backgroundColor !== "") {
                            console.log(current.style.backgroundColor)
                            // backColor.value = current.style.backgroundColor;
                        } 
                        break;
                    case "U":
                        console.log('U')
                        // underline.style.backgroundColor = "#ffffff";
                        if (current.style.backgroundColor !== "") {
                            console.log(current.style.backgroundColor)
                            // backColor.value = current.style.backgroundColor;
                        } 
                        break;
                    case "STRIKE":
                        console.log('STRIKE')
                        // strikethrough.style.backgroundColor = "#ffffff";
                        if (current.style.backgroundColor !== "") {
                            console.log(current.style.backgroundColor)
                            // backColor.value = current.style.backgroundColor;
                        } 
                        break;
                    case "FONT":
                        if (current.color !== "") {
                            console.log(current.color)
                            // foreColor.value = current.color;
                        }
                        if(current.face !== ""){
                            console.log(current.face)
                            // for (let index = 0; index <  fontName.children.length; index++) {
                            //     if ( fontName.children[index] == current.face) {
                            //         fontName.children[index].selected = true;
                            //     }
                            // }
                        }
                        if(current.size !== ""){
                            console.log(current.size)
                            // for (let index = 0; index <  fontSize.children.length; index++) {
                            //     if ( fontSize.children[index] == current.size) {
                            //         fontSize.children[index].selected = true;
                            //     }
                            // }
                        }
                        if (current.style.backgroundColor !== "") {
                            console.log(current.style.backgroundColor)
                            // backColor.value = current.style.backgroundColor;
                        } 
                        break;
                    case "SUP":
                        console.log('sup');
                        // superscript.style.backgroundColor = "#ffffff";
                        if (current.style.backgroundColor !== "") {
                            console.log(current.style.backgroundColor)
                            // backColor.value = current.style.backgroundColor;
                        } 
                        break;
                    case "SUB":
                        console.log('sub');
                        // subscript.style.backgroundColor = "#ffffff";
                        if (current.style.backgroundColor !== "") {
                            console.log(current.style.backgroundColor)
                            // backColor.value = current.style.backgroundColor;
                        } 
                        break;
                    case "SPAN":
                        if (current.style.backgroundColor !== "") {
                            console.log(current.style.backgroundColor)
                            // backColor.value = current.style.backgroundColor;
                            break;
                        } 
    
                    case "DIV":
                        if (current.style.textAlign != "") {
                            console.log(current.style.textAlign)
                            if (current.style.backgroundColor !== "") {
                            console.log(current.style.backgroundColor)
                            // backColor.value = current.style.backgroundColor;
                        } 
                            break;
                        }
    
                    case "A":
                        if (current.src != "") {
                            console.log(current.src);
                            // createLink.style.backgroundColor = "#ffffff";
                            if (current.style.backgroundColor !== "") {
                            console.log(current.style.backgroundColor)
                            // backColor.value = current.style.backgroundColor;
                        } 
                            break;
                        }
                }
                if (selText == selText.toLocaleUpperCase()) {
                    console.log('upper')
                }
    
                if (selText == selText.toLowerCase()) {
                    console.log('lower')
                }
                current =  current.parentElement;
                
            }
            console.log (current.className)
    
       
        }
    }
}

function resetTextEdit(){
     // bold.style.backgroundColor = "#ffffff";
            // italic.style.backgroundColor = "#ffffff";
            // underline.style.backgroundColor = "#ffffff";
            // strikethrough.style.backgroundColor = "#ffffff";
            // backColor.value = "#000000";
            // fontSize.children[0].selected = true; 
            // fontName.children[0].selected = true;
            // foreColor.value = "#000000";
            // subscript.style.backgroundColor = "#ffffff";
            // superscript.style.backgroundColor = "#ffffff";
            // toUpperCase.style.backgroundColor = "#ffffff";
            // toLowerCase.style.backgroundColor = "#ffffff";
            // createLink.style.backgroundColor = "#ffffff";
}

function applayReadyTextEdit(Edits){



}


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
function Translait(text,from,to){
    let translaitedtext;
    console.log(`${text}${from}${to}`);
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;
    fetch(apiUrl).then(res => res.json()).then(data =>{
        console.log(data)
        translait.innerText = data.responseData.translatedText;
    })
    

}


setting.addEventListener('mousedown',(e) =>{
    e.stopPropagation()
})
settingbtn.addEventListener('mousedown',(e) =>{
    e.stopPropagation();
    setting.style.display == 'none'? setting.style.display = 'inline' : setting.style.display = 'none';
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

let print = document.getElementById('print');


print.addEventListener('click', printDiv);

function printDiv() {
    clearEdit();
    pageEdit.getPageEdit().remove();
    var a = window.open('', '',);
    a.document.write('<html>');
    a.document.write(' <link rel="stylesheet" href="./Css/Page.css"> ');
    a.document.write('<body >');
    a.document.write(pageParent.outerHTML);    
    a.document.write('</body></html>');
    a.document.close();
    a.print();

}


// window.jsPDF = window.jspdf.jsPDF;
var doc = new jsPDF();
function exportToPdf() {
    clearEdit();
    pageEdit.getPageEdit().remove();
    doc.fromHTML(`<html><head><title>hello</title>` + pageParent.outerHTML + `</body></html>`);
    doc.save('div.pdf');
}





let leftSideWidth = 90;

let showReadingSec = document.getElementById('showReadingSec');
let uploadFile = document.getElementById('uploadFile');
let frame = document.getElementById('frame');
let readingFiles = document.getElementById('readingFiles');
let deleteFile = document.getElementById('deleteFile');

showReadingSec.addEventListener('change', (e)=>{
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
    scrolerChange();
});

new Sortable(readingFiles,{
    animation: 350
});

let currentFile;
frame.addEventListener("scroll",(e)=>{
    currentFile.dataset.height = window.pageYOffset || document.documentElement.scrollTop || 0;
})


uploadFile.addEventListener('change', function(){
    
    const filereader = new FileReader();
    
    filereader.addEventListener('load', () => {
        
        let filename = this.files[0].name;
      
        filename =  filename.trim();
        filename = filename.replace(/\s+/g,'');
        filename =  filename.replace(/.pdf/,'');
        renderPDF(filereader.result);
        addNewFile(filereader.result,0,filename);
    });
    filereader.readAsDataURL(this.files[0]);


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

    PDFObject.embed(currentFile.dataset.url,frame);
    // let x = document.getElementsByClassName('pdfobject')[0];
    // x.zoom = 200;
    currentFile.style.border = '1px solid';

}

deleteFile.addEventListener('click', (e)=>{
    for (let index = 0; index < readingFiles.children.length; index++) {
        console.log(readingFiles.children[index].innerText);
        
    }
})






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
            // console.table(container.getPages()[0]);
            readJsonOpj(JSON.stringify(container))
        })
        // readJsonOpj(JSON.stringify(container))
        // let imageContainer = document.getElementById('imageContainer');
        // let addUrl = document.getElementById('addUrl');
        // let uploadImage = document.getElementById('uploadImage');
        // let addImageToList = document.getElementById('addImageToList');
        // let deleteImageFromList = document.getElementById('deleteImageFromList');
        // let imageList = document.getElementById('imageList');
        // let OK = document.getElementById('OK');
        // let cansel = document.getElementById('cansel');

        // addImageToList.addEventListener("click",(e)=>{
        //     e.preventDefault();
        //     fetch('upload-image.php',{
        //         method : "POST",
        //         body : new FormData(imageContainer)
        //     })
        // })
        // deleteImageFromList.addEventListener("click",(e)=>{

        // })
        // OK.addEventListener("click",(e)=>{

        // })
        // cansel.addEventListener("click",(e)=>{

        // })


        // uploadImage.addEventListener('change', function(){
        //     const reader = new FileReader();
        //     reader.addEventListener('load', () => {
        //         // let gg = reader.result;
        //         console.log(reader.result);
                
        //     });
        //     reader.readAsDataURL(this.files[0]);

        // });

        // element["backGrounColor"]
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
                    // let images = e.images;
                    // images.forEach(el =>{new Images})
                    // let icons = e.icons;
                    // icons.forEach(el =>{new Icon()})
                    // let lists = e.lists;
                    // lists.forEach(el =>{new List()})
                    // let tables = e.tables;
                    // tables.forEach(el =>{new Table()})
                    // let shapes = e.shapes;
                    // shapes.forEach(el =>{new Shap()})
                pageParent.appendChild(tempPage.getPage().parentNode.parentNode);
            });
            
        }

        //===========================================================================================
        // if (!('indexedDB' in window)) {
        //     console.log("This browser doesn't support IndexedDB");
        // }

        // const jsonObjDb = idb.open("jsonOpj", 1, function (upgradeDb) {
        //     console.log('Creating a new object store.');
        //     if (!upgradeDb.objectStoreNames.contains('firstOS')) {
        //         upgradeDb.createObjectStore('firstOS');
        //     }
        // });



        //===========================================================================================


        // let db;
        // const openRequest = window.indexedDB.open("jsonOpj",1);

        // openRequest.addEventListener('error', ()=>{
        //     console.error("Database failed to open")
        // });

        // openRequest.addEventListener('success', ()=>{
        //     console.log("Database opened successfully");
            
        //     db = openRequest.result;

        //     // displayData();
        // });

        // openRequest.addEventListener('upgradeneeded', (e)=>{
        //     db = e.target.result;

        //     const objectStore = db.createObjectStore("jsonOpj", {
        //         keyPath: "id",
        //         autoIncrement: true,
        //     });

        //     objectStore.createIndex("jsonopject", "jsonopject", { unique: false });
        //     objectStore.createIndex("lastupdate", "lastupdate", { unique: false });

        //     console.log("Database setup complete");
        // });



        // function addLoculjson(data){

            
        //     const newItem = { jsonopject: data, lastupdate: new Date().toLocaleString()};
        //     const transaction = db.transaction(["jsonOpj"], "readwrite");
        //     const objectStore = transaction.objectStore("jsonOpj");
        //     const addRequest = objectStore.add(newItem);

        //     addRequest.addEventListener("success", () => {
        //         console.log("success.");
        //     });

        //     transaction.addEventListener("complete", () => {
        //         console.log("Transaction completed: database modification finished.");
        //         displayData();
        //     });

        //     transaction.addEventListener("error", () =>
        //         console.log("Transaction not opened due to error")
        //     );

        //     console.log("data added")
        // }



        // function clearLoculjson(){
        //     console.log("data cleared")
        // }



        

        // window.addEventListener('load', prepairPage);

        // function prepairPage(e){

        // }

        // setInterval(upDataLoculjson, 1000);

        // window.addEventListener('unload', upDataLoculjson);

        // function upDataLoculjson(){
        //     console.log("ff")
        //     addLoculjson("ff");
        // }
        