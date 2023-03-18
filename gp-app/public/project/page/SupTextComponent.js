import { currentPage } from "./Page.js";
import Compomnent from "./Component.js";
import { textEdit,context_menu,componentList,Translait,setTextEdit} from "./main.js";

export default class SupTextComponent extends Compomnent{
    text;
    isLined;
    textEffect;
    wordSpace;
    letterSpace;
    lineHeight;


    constructor(isLined,textEffect,wordSpace,letterSpace,lineHeight,
        opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
        super(opacity,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable);
        this.isLined = isLined;
        this.textEffect = textEffect;
        this.wordSpace = wordSpace;
        this.letterSpace = letterSpace;
        this.lineHeight = lineHeight;
    };
    
    applyTextEdits(){
        this.setIsLined(this.getIsLined())
        this.setTextEffect(this.getTextEffect())
        this.setWordSpace(this.getWordSpace())
        this.setLetterSpace(this.getLetterSpace())
        this.setLineHeight(this.getLineHeight())
        this.getCompomnent().setAttribute("data-gramm",false);
        this.getCompomnent().setAttribute("data-gramm_editor",false);
        this.getCompomnent().setAttribute("data-enable-grammarly",false);
        this.getCompomnent().setAttribute("autocomplete", "on");
        this.getCompomnent().setAttribute("spellcheck", true);
        this.getCompomnent().setAttribute("autocapitalize", "sentences");
        this.getCompomnent().setAttribute("autocorrect", "no-punctuate");
    }


    setIsLined(value){
        if (value == 'none') {
            this.getCompomnent().classList.remove(this.getIsLined());
            this.isLined = value;
            
        }else{
            this.getCompomnent().classList.remove(this.getIsLined());
            this.isLined = value;
            this.getCompomnent().classList.add(value);
        }
    }
    setTextEffect(value){
        if (value == 'none') {
            this.getCompomnent().classList.remove(this.getTextEffect());
            this.textEffect = value;
            
        }else{
            this.getCompomnent().classList.remove(this.getTextEffect());
            this.textEffect = value;
            this.getCompomnent().classList.add(value);
        }
    }
    setWordSpace(value){
        this.wordSpace = value;
        if (value == "normal") {
            this.getCompomnent().style.wordSpacing = `${value}`;            
        } else {
            this.getCompomnent().style.wordSpacing = `${value}px`;
        }
        console.log(`${this.getWordSpace()}${this.getLetterSpace()}${this.getLineHeight()}`)

    }
    setLetterSpace(value){
        this.letterSpace = value;
        if (value == "normal") {
            this.getCompomnent().style.letterSpacing = `${value}`;
        } else {
            this.getCompomnent().style.letterSpacing = `${value}px`;            
        }
    }
    setLineHeight(value){
        this.lineHeight = value;
        if (value == "normal") {
            this.getCompomnent().style.lineHeight = `${value}`;
        } else {
            this.getCompomnent().style.lineHeight = `${value}px`;            
        }
    }

    addTextEvent(){
        this.getCompomnent().addEventListener('mouseup', this.addTextEdit);
        this.getCompomnent().addEventListener('contextmenu', this.context_menu);
    }

    addTextEdit = (e) =>{
        let sel;
        try{sel = window.getSelection().getRangeAt(0).toString();}catch{}
        let rect = currentPage.getPage().getBoundingClientRect();
        let textEditrect = textEdit.getBoundingClientRect();
        let menurect = context_menu.getBoundingClientRect();
        // console.log(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)
        if (sel !== "" && sel !== undefined) {
            setTextEdit();
            Translait();
            componentList.getAddComponentList().remove();
                console.log('insertTectEdit//leftClick');
                var addleft = e.clientX ;
                var addright = e.clientY -120;
                // if ((addleft + 400) > rect.width) {

                //         addleft = (addleft -(400));
                // }
                
                // if ((addright) <  0) {
                //         addright = addright + 120;
                // }
                
                textEdit.style.left = `${addleft}px`;
                textEdit.style.top = `${addright }px`;
                textEdit.style.display = 'inline'; 
                
        }; 
    }
    context_menu =(e) =>{
        e.preventDefault();
        let rect = currentPage.getPage().getBoundingClientRect();
        let sel;
        try{sel = window.getSelection().getRangeAt(0).toString();}catch{}
        setTextEdit();
        Translait();
        componentList.getAddComponentList().remove();
        console.log('insertTectEdit//rightClick');
        var addleft = e.clientX;
        var addright = e.clientY -120;

        var menuAddleft = e.clientX;
        var menuAddright = e.clientY;
         // if ((addleft + 400) > rect.width) {
         //         addleft = addleft - (400 - (rect.width - e.clientX));
         // }
         
         // if ((addright) <  0) {
         //         addright = addright + 470;
         // }

         // if(e.clientY > document.documentElement.clientHeight/1.59){
         //         addright = addright - 330;
         // }
        //     if ((addleft + 400) > rect.width) {

        //         addleft = (addleft -(400));
        // }
        
        // if ((addright) <  0) {
        //         addright = addright + 120;
        // }
        
        textEdit.style.left = `${addleft}px`;
        textEdit.style.top = `${addright }px`;
        textEdit.style.display = 'inline';   
        
        context_menu.style.left = `${menuAddleft}px`;
        context_menu.style.top = `${menuAddright}px`;
        context_menu.style.display = 'inline';
    }
    saveText = (e) =>{
        this.text = this.getCompomnent().innerHTML;
        // console.log(this.getText())
    }


    getText(){
        return this.text;
    }
    getIsLined(){
        return this.isLined;
    }
    getTextEffect(){
        return this.textEffect;
    }
    getWordSpace(){
        return this.wordSpace;
    }
    getLetterSpace(){
        return this.letterSpace;
    }
    getLineHeight(){
        return this.lineHeight;
    }

}