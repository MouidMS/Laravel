import ImageComponent from "./ImageComponent.js"
import {compomnentBtn, componentList, isFullPreemption, IsReadOnly} from "./main.js";
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

    compomnentIn = (e) =>{
        if(!IsReadOnly){
            componentList.getAddComponentList().remove();
            if(this != currentComponent){
                setCurrentComponentFlag(true);
            }

            if(currentComponentFlag){
                setIsSupComponent(false);
                setCurrentComponentFlag(false);
                if (compInFlag) {
                    console.log('componentIn');
                    console.log("Image")
                    compomnentBtn.setComponentName('Image');
                    setCurrentComponent(this);
                    this.addControlBtn();
                    compomnentBtn.prepairImageSideBtn(this.getIsSizesEditable(),this.getIsDesignEditable(),this.getIsContentEditable());
                    this.getCompomnent().parentNode.appendChild(compomnentBtn.getSideBtnContainer());
                    compomnentBtn.prepairImageEdit(
                        this.getBlur(),this.getBrightness(),this.getContrast(),this.getGrayscale(),this.getHueRotate(),this.getInvert(),this.getSaturate(),this.getSepia(),
                        this.getWidth(),this.getHeight(),this.getOpacity(),this.getXAxis(),this.getYAxis(),this.getZAxis(),this.getRotation(),this.getPadding(),this.getskew(),
                        this.getBackGrounColor(),this.getBackGrounDesign(),this.getBorderColor(),this.getBorderDesign(),this.getBorderStyle(),this.getBorderWidth(),this.getBorderRadius(),this.getpolygon(),
                        this.getIsSizesEditable(),this.getIsDesignEditable(),this.getIsContentEditable());
                    this.getCompomnent().parentNode.appendChild(compomnentBtn.getEditContainer());

                }
            }
        }
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


    addEvents(){
        this.getCompomnent().addEventListener("click",this.compomnentIn);
    }

    removeComponentFormat(){
        this.setBlur(0)
        this.setBrightness(0)
        this.setContrast(100)
        this.setGrayscale(0)
        this.setHueRotate(0)
        this.setInvert(0)
        this.setSaturate(0)
        this.setSepia(0)
        this.setOpacity(1)
        this.setZAxis(0)
        this.setSkew(0)
        this.setRotation(0)
        this.setPadding(0, this)
        this.setBackGrounColor("#ffffff",0)
        this.setBackGrounDesign("none")
        this.setBorderColor("#000000")
        this.setBorderDesign("none")
        this.setBorderStyle("solid",0)
        this.setBorderWidth(0,0)
        this.setBorderRadius(0,0)
        this.setPolygon('none')
    }
}
