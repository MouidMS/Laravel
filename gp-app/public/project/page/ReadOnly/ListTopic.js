

import SupTextComponent from "./SupTextComponent.js";
import {isFullPreemption} from "./main.js";
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

}