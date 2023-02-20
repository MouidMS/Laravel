

import SupTextComponent from "./SupTextComponent.js";
import {compomnentBtn, isFullPreemption, IsReadOnly} from "./main.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag, setIsSupComponent} from "./Component.js";
import { compInFlag } from "./ParentComponent.js";


export default class ListTopic extends SupTextComponent{

    itemSpace;
    sideText;


    itemText;
    itemNum;


    constructor(itemSpace,sideText,text,isLined,textEffect,wordSpace,letterSpace,lineHeight,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable){
        super(isLined,textEffect,wordSpace,letterSpace,lineHeight,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
        this.setCompomnent(this.prepairComponent());
        this.applyTextEdits();
        this.applyComponentEdit(this);
        this.setText(text);
        this.setsideText(sideText);
        this.setItemSpace(itemSpace);
        console.log('ListItem');
    };

    prepairComponent(){
    // <li><div id="itemContainer"><span id="itemText" contenteditable="true">fbssssssssdt</span><span id="itemDot"></span><span id="itemNum" contenteditable="true">12233234</span></div></li>


        let comp = document.createElement('li');
        comp.classList.add('listItem');

        let curent = document.createElement('div');
        curent.classList.add('itemContainer');

        this.itemText = document.createElement('span');
        this.itemText.classList.add("itemText");

        let itemDot = document.createElement('span');
        itemDot.classList.add("itemDot");

        this.itemNum = document.createElement('span');
        this.itemNum.classList.add("itemNum");

        if(!IsReadOnly){
            if (isFullPreemption) {
                this.itemText.setAttribute("contenteditable", true);
                this.itemNum.setAttribute("contenteditable", true);
            } else {
                if (this.getIsContentEditable()) {
                    this.itemText.setAttribute("contenteditable", true);
                    this.itemNum.setAttribute("contenteditable", true);
                }
            }
        }


        curent.appendChild(this.itemText);
        curent.appendChild(itemDot);
        curent.appendChild(this.itemNum);

        comp.appendChild(curent);


        return comp;
    }

    setText(value){
        this.text = value;
        this.getitemText().innerHTML = value;
    }

    setsideText(value){
        this.sideText = value;
        this.getitemNum().innerHTML = value;
    }


    setItemSpace(value){
        this.itemSpace = value;
        this.getCompomnent().style.marginBottom = `${value}px`;
    }


    getItemSpace(){
        return this.itemSpace;
    }



    getsideText(){return this.sideText;}
    getitemText(){return this.itemText;}
    getitemNum(){return this.itemNum;}

    saveItemText = (e) =>{
        this.text = this.getitemText().innerHTML;
    }

    saveItemNum = (e) =>{
        this.sideText = this.getitemNum().innerHTML;
        console.log(this.text,this.sideText)
    }

    compomnentIn = (e) =>{
        if (!IsReadOnly){
            // console.log(e.clintX,e.clintY,this.getCompomnent().offsetLeft,this.getCompomnent().offsetTop);
            if(this != currentComponent){
                setCurrentComponentFlag(true);
            }
            if(currentComponentFlag){
                setIsSupComponent(true);
                setCurrentComponentFlag(false);
                console.log('componentIn//listItem');
                compomnentBtn.setComponentName('List Item');
                setCurrentComponent(this);
                compomnentBtn.prepairListItemEdit(this.getItemSpace(),this.getIsLined(),this.getTextEffect(),this.getWordSpace(),this.getLetterSpace(),this.getLineHeight(),
                    this.getOpacity(),this.getRotation(),this.getPadding(),this.getskew(),
                    this.getBackGrounColor(),this.getBackGrounDesign(),this.getBorderColor(),this.getBorderDesign(),
                    this.getBorderStyle(),this.getBorderWidth(),this.getBorderRadius(),this.getpolygon(),
                    this.getIsSizesEditable(),this.getIsDesignEditable(),this.getIsContentEditable());
                this.getCompomnent().parentNode.parentNode.appendChild(compomnentBtn.getEditContainer());
            }
        }
    }



    addEvents(){
        this.getCompomnent().addEventListener("click",this.compomnentIn);
        this.getitemText().addEventListener('input',this.saveItemText);
        this.getitemNum().addEventListener('input',this.saveItemNum);
        this.addTextEvent();
    }

    removeComponentFormat(){

        this.setItemSpace(0);
        this.setIsLined("none")
        this.setTextEffect("none")
        this.setWordSpace("normal")
        this.setLetterSpace("normal")
        this.setLineHeight("normal")
        this.setOpacity(1)
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
