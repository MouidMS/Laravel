import  TextComponent  from "../ReadOnly/TextComponent.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag ,setIsSupComponent,currentComponentParent, setCurrentComponentParent} from "../ReadOnly/Component.js";
import { compInFlag } from "../ReadOnly/ParentComponent.js";

export default class Paragraph extends TextComponent{

    constructor(text,isLined,textEffect,wordSpace,letterSpace,lineHeight,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable){
        super(text,isLined,textEffect,wordSpace,letterSpace,lineHeight,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
        this.setCompomnent(this.prepairComponent());
        this.applyTextEdits();
        this.applyparentComponentEdites();
        this.applyComponentEdit(this);
        console.log('paragraph');
    };

    prepairComponent(){
        let comp = document.createElement('p');
        comp.classList.add('paragraph');
        comp.classList.add('TextRoot');
        comp.classList.add('component');
        let current = document.createElement('div');
        current.classList.add('parentComponent');
        current.appendChild(comp);
        return comp;
    }




}
