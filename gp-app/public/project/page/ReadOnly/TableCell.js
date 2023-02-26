import SupTextComponent from "./SupTextComponent.js";
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
        return comp;
    }
    
    setText(value){
        this.text = value;
        this.getCompomnent().innerHTML = value;
    }

}