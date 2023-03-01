import ParentComponent from "../ReadOnly/ParentComponent.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag ,setIsSupComponent,currentComponentParent, setCurrentComponentParent} from "./Component.js";


export default class Shap extends ParentComponent{

    constructor(width,height,xAxis,yAxis,zAxis,
        opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
        super(width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
        this.setCompomnent(this.prepairComponent());
        this.applyparentComponentEdites();
        this.applyComponentEdit(this);
        console.log('Shap');
    };

    prepairComponent(){
        let comp = document.createElement('div');
        comp.classList.add('shap');
        // comp.classList.add('TextRoot');
        comp.classList.add('component');

        let current = document.createElement('div');
        current.classList.add('parentComponent');
        current.appendChild(comp);
        return comp;
    }
}
