import ParentComponent from "./ParentComponent.js";
import {compomnentBtn,componentList,isFullPreemption} from "./main.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag,setIsSupComponent} from "./Component.js";
import { compInFlag } from "./ParentComponent.js";


export default class Icon extends ParentComponent{
    icon;
    color;
    size;
    constructor(icon,color,size,
        width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
        super(width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
        this.setCompomnent(this.prepairComponent());
        this.applyparentComponentEdites();
        this.applyComponentEdit(this);
        this.icon = icon;
        this.color = color;
        this.size = size;
        this.applyIconEdits();
        console.log('Icon');
    }
    applyIconEdits(){
        this.setIcon(this.getIcon());
        this.setColor(this.getColor());
        this.setSize(this.getSize())
    };


    prepairComponent(){
        let comp = document.createElement('i');
        comp.classList.add('ICON');
        comp.classList.add('component');
        // comp.classList.add('fa');
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

        if(currentComponentFlag){
            setIsSupComponent(false);
            setCurrentComponentFlag(false);
            if (compInFlag) {
                console.log('componentIn');
                console.log("ICON")
                compomnentBtn.setComponentName('Icon');
                setCurrentComponent(this);
                this.addControlBtn();
                compomnentBtn.prepairIconEdit(this.getIcon(),this.getColor(),this.getSize(),
                this.getWidth(),this.getHeight(),this.getOpacity(),this.getXAxis(),this.getYAxis(),this.getZAxis(),this.getRotation(),this.getPadding(),this.getskew(),
                this.getBackGrounColor(),this.getBackGrounDesign(),this.getBorderColor(),this.getBorderDesign(),this.getBorderStyle(),this.getBorderWidth(),this.getBorderRadius(),this.getpolygon(),
                this.getIsSizesEditable(),this.getIsDesignEditable(),this.getIsContentEditable());
                this.getCompomnent().parentNode.appendChild(compomnentBtn.getEditContainer());
            
            }
        }
    }


    setIcon(value){
        let classlist;
        if (isFullPreemption) {
            if (value == 'none') {
                classlist = this.icon.split(" ");
                classlist.forEach(element => {
                    this.getCompomnent().classList.remove(element);
                });
                this.icon = value;
            }else{
                classlist = this.icon.split(" ");
                classlist.forEach(element => {
                    this.getCompomnent().classList.remove(element);
                });
                this.icon = value;
                classlist = this.icon.split(" ");
                classlist.forEach(element => {
                    this.getCompomnent().classList.add(element);
                });
            }   
        } else {
            if (this.getIsContentEditable()) {
                if (value == 'none') {
                    classlist = (this.icon).split(" ");
                    classlist.forEach(element => {
                        this.getCompomnent().classList.remove(element);
                    });
                    this.icon = value;
                    
                }else{
                    classlist = this.icon.split(" ");
                    classlist.forEach(element => {
                        this.getCompomnent().classList.remove(element);
                    });
                    this.icon = value;
                    classlist = this.icon.split(" ");
                    classlist.forEach(element => {
                        this.getCompomnent().classList.add(element);
                    });
                } 
            }
        }
    }

    setColor(value){
        this.color = value;
        this.getCompomnent().style.color = value;
    }
    setSize(value){
        this.size = value;
        this.getCompomnent().style.fontSize = `${value}px`
    }

    getIcon(){
        return this.icon;
    }
    getColor(){
        return this.color;
    }
    getSize(){
        return this.size;
    }


    
    addEvents(){
        this.getCompomnent().addEventListener("click",this.compomnentIn);
    }

    removeComponentFormat(){
        //color,blur,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia
        this.setColor("#000000");
        this.setSize(20);
        this.setOpacity(1);
        this.setZAxis(0)
        this.setSkew(0);
        this.setRotation(0)
        this.setPadding(0,this);
        this.setBackGrounColor("#ffffff",0)
        this.setBackGrounDesign("none")
        this.setBorderColor("#000000")
        this.setBorderDesign("none")
        this.setBorderStyle("solid",0)
        this.setBorderWidth(0,0)
        this.setBorderRadius(0,0)
        this.setPolygon('none');
    }
}