import { currentPage } from "./Page.js";
import Compomnent from "./Component.js";

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