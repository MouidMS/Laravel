import SupTextComponent from "./SupTextComponent.js";
import {compomnentBtn,isFullPreemption} from "./main.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag, setIsSupComponent} from "./Component.js";
import { compInFlag } from "./ParentComponent.js";


export default class TableCell extends SupTextComponent{

    constructor(text,isLined,textEffect,wordSpace,letterSpace,lineHeight,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable){
        super(isLined,textEffect,wordSpace,letterSpace,lineHeight,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);   
        this.setCompomnent(this.prepairComponent());
        this.applyTextEdits();
        this.applyComponentEdit(this);
        this.setText(text)
        console.log('TableCell');
    };

    prepairComponent(){
       
        let comp = document.createElement('td');
        comp.classList.add('TableCell');
        comp.classList.add('TextRoot');
        // comp.classList.add('component');
        if (isFullPreemption) {
            comp.setAttribute("contenteditable", true);
        } else {
            if (this.getIsContentEditable()) {
                comp.setAttribute("contenteditable", true);
            } 
        }
        return comp;
    }
    
    setText(value){
        this.text = value;
        this.getCompomnent().innerHTML = value;
    }

    compomnentIn = (e) =>{
        if(this != currentComponent){
            setCurrentComponentFlag(true);
        }
        if(currentComponentFlag){
            setIsSupComponent(true);
            setCurrentComponentFlag(false);
            console.log('componentIn//TableCell');
            compomnentBtn.setComponentName('Table Cell');
            setCurrentComponent(this);
            compomnentBtn.prepairTableCellEdit(this.getIsLined(),this.getTextEffect(),this.getWordSpace(),this.getLetterSpace(),this.getLineHeight(),
            this.getOpacity(),this.getRotation(),this.getPadding(),this.getskew(),
            this.getBackGrounColor(),this.getBackGrounDesign(),this.getBorderColor(),this.getBorderDesign(),
            this.getBorderStyle(),this.getBorderWidth(),this.getBorderRadius(),this.getpolygon(),
            this.getIsSizesEditable(),this.getIsDesignEditable(),this.getIsContentEditable());
            this.getCompomnent().parentNode.parentNode.parentNode.appendChild(compomnentBtn.getEditContainer());
        }
    }
    


    addEvents(){
        this.getCompomnent().addEventListener("click",this.compomnentIn);
        this.getCompomnent().addEventListener('input',this.saveText);
        this.addTextEvent();
    }

    removeComponentFormat(){
        this.setIsLined("none")
        this.setTextEffect("none")
        this.setWordSpace("normal")
        this.setLetterSpace("normal")
        this.setLineHeight("normal")
        this.setOpacity(1)
        this.setZAxis(0)
        this.setRotation(0)
        this.setPadding(0, this);
        this.setSkew(0);
        this.setBackGrounColor("#ffffff",0)
        this.setBackGrounDesign("none")
        this.setBorderColor("#000000")
        this.setBorderDesign("none")
        this.setBorderStyle("solid",0)
        this.setBorderWidth(0,0)
        this.setBorderRadius(0,0)
        this.setPolygon("none")
    }
}