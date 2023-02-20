import ParentComponent from "./ParentComponent.js";
import {compomnentBtn,componentList,isFullPreemption} from "./main.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag ,setIsSupComponent,currentComponentParent, setCurrentComponentParent} from "./Component.js";


export default class Shap extends ParentComponent{

    constructor(width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable){
        super(width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
        this.setCompomnent(this.prepairComponent());
        this.applyTextEdits();
        this.applyparentComponentEdites();
        this.applyComponentEdit(this);
        console.log('paragraph');
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
    compomnentIn = (e) =>{
        componentList.getAddComponentList().remove();
        if(this != currentComponent){
            setCurrentComponentFlag(true);
        }

        console.log(currentComponentFlag)
        if(currentComponentFlag){
            setCurrentComponentParent(null);
            compomnentBtn.getSideBtnContainer().remove();
            setIsSupComponent(false);
            setCurrentComponentFlag(false);
                console.log('componentIn');
                console.log("Shap");
                compomnentBtn.setComponentName('Shap');
                setCurrentComponent(this);
                this.addControlBtn();
                compomnentBtn.prepairShapEdit(this.getWidth(),this.getHeight(),this.getXAxis(),
                this.getYAxis(),this.getZAxis(),this.getOpacity(),this.getRotation(),this.getPadding(),this.getskew(),
                this.getBackGrounColor(),this.getBackGrounDesign(),this.getBorderColor(),this.getBorderDesign(),
                this.getBorderStyle(),this.getBorderWidth(),this.getBorderRadius(),this.getpolygon(),
                this.getIsSizesEditable(),this.getIsDesignEditable(),this.getIsContentEditable());
                this.getCompomnent().parentNode.appendChild(compomnentBtn.getEditContainer());

        }
    }


    compomnentOut = (e) =>{
        console.log('componentOut');
    }

    addEvents(){
        this.getCompomnent().addEventListener("click",this.compomnentIn);
    }

    removeComponentFormat(){
        // text, isLined,textEffect,wordSpace,letterSpace,lineHeight, width,height,opacity,xAxis,yAxis,zAxis,rotation,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,isSizesEditable,isDesignEditable,isContentEditable
        //"", "none","none",0,0,0, 100,100,1,x,y,0,0,"#ffffff","none","#ffffff","none","solid",0,0,false,false,false

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
        console.log(this.getText());
    }
}
