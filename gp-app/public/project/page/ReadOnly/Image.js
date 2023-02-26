import ImageComponent from "./ImageComponent.js"
import {isFullPreemption} from "./main.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag,setIsSupComponent} from "./Component.js";
import { compInFlag } from "./ParentComponent.js";


export default class Image extends ImageComponent{
    
    path;
    constructor(path,
        blur,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia,
        width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
        super(blur,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
        this.setCompomnent(this.prepairComponent());
        this.applyImageEdits();
        this.applyparentComponentEdites();
        this.applyComponentEdit(this);
        this.setPath(path);
        console.log('Image');
    }


    prepairComponent(){
        let comp = document.createElement('img');
        comp.classList.add('image');
        comp.classList.add('component');
        let current = document.createElement('div');
        current.classList.add('parentComponent');
        current.appendChild(comp);
        return comp;
    }
    



    
    setPath(value){
        if (isFullPreemption) {
            if (value == '' || value == null) {
                this.path = '';
                this.getCompomnent().src = './Images/ComponentList/I m.png'
            }else{
                this.path = value;
                this.getCompomnent().src = value;
            }   
        } else {
            if (this.getIsContentEditable()) {
                if (value == '' || value == null) {
                    this.path = '';
                    this.getCompomnent().src = './Images/ComponentList/images.png'
                }else{
                    this.path = value;
                    this.getCompomnent().src = value;
                }   
            }
        }
    }



    getPath(){
        return this.path;
    };
    
    

}