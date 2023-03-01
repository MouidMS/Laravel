import SupTextComponent from "../ReadOnly/SupTextComponent.js";
import {isFullPreemption} from "../ReadOnly/main.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag, setIsSupComponent} from "../ReadOnly/Component.js";
import { compInFlag } from "../ReadOnly/ParentComponent.js";


export default class ListItem extends SupTextComponent{

    itemSpace;

    constructor(itemSpace,text,isLined,textEffect,wordSpace,letterSpace,lineHeight,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable){
        super(isLined,textEffect,wordSpace,letterSpace,lineHeight,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
        this.setCompomnent(this.prepairComponent());
        this.applyTextEdits();
        this.applyComponentEdit(this);
        this.setText(text);
        this.setItemSpace(itemSpace);
        console.log('ListItem');
    };

    prepairComponent(){

        let comp = document.createElement('li');
        comp.classList.add('listItem');
        comp.classList.add('TextRoot');
        // comp.classList.add('component');
        return comp;
    }


    setText(value){
        this.text = value;
        this.getCompomnent().innerHTML = value;
    }


    setItemSpace(value){
        this.itemSpace = value;
        this.getCompomnent().style.marginBottom = `${value}px`;
    }


    getItemSpace(){
        return this.itemSpace;
    }

}
