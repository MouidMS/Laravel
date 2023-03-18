import {compomnentBtn} from "./main.js";
import { currentPage } from "./Page.js";


export let currentComponent;
export let currentComponentParent;
export let currentComponentFlag = true;
export let currentComponentParentFlag = true;
export let isSupComponent;


export function setCurrentComponent(value){
    currentComponent = value;
}

export function setCurrentComponentParent(value){
    currentComponentParent = value;
}

export function setCurrentComponentFlag(value){
    currentComponentFlag = value;
};

export function setCurrentComponentParentFlag(value){
    currentComponentParentFlag = value;
}

export function setIsSupComponent(value){
    isSupComponent = value;
}

export function resetFlages(){
    currentComponentFlag = true;
    currentComponentParentFlag = true;
}


export default class Compomnent{

    compomnent;

    opacity;
    rotation;
    padding;
    skew;
    
    backGrounColor;
    backGrounDesign;
    borderColor ;
    borderDesign ;
    borderStyle ;
    borderWidth ;
    borderRadius;
    polygon;

    isDesignEditable;
    isContentEditable;
    isSizesEditable;


    constructor(opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
        this.opacity = opacity
        this.rotation = rotation;
        this.padding = padding;
        this.skew = skew;
        this.backGrounColor = backGrounColor;
        this.backGrounDesign = backGrounDesign; 
        this.borderColor = borderColor;
        this.borderDesign = borderDesign;
        this.borderStyle = borderStyle;
        this.borderWidth = borderWidth;
        this.borderRadius = borderRadius;
        this.polygon = polygon;
        this.isDesignEditable = isDesignEditable;
        this.isContentEditable = isContentEditable;
        this.isSizesEditable = isSizesEditable;
    }




    applyComponentEdit(objName){
        this.setOpacity(this.getOpacity());
        this.setRotation(this.getRotation());
        this.setPadding(this.getPadding(),objName);
        this.setSkew(this.getskew());
        this.setBackGrounColor(this.getBackGrounColor());
        this.setBackGrounDesign(this.getBackGrounDesign());
        
        for (let index = 1; index <= 4; index++) {
            this.setBorderColor(this.getBorderColor()[index],index);
            this.setBorderStyle(this.getBorderStyle()[index],index);
            this.setBorderWidth(this.getBorderWidth()[index],index);
            this.setBorderRadius(this.getBorderRadius()[index],index);
            
        }
        this.setBorderDesign(this.getBorderDesign());
        this.setPolygon(this.getpolygon());
    }
    
    setCompomnent(value){
        this.compomnent = value;
    }
    
    setOpacity(value){
        this.opacity = value;
        this.getCompomnent().style.opacity = `${value}`;
    }
    
    setRotation(value){
        this.rotation = value;    
        this.getCompomnent().style.transform = `rotate(${value}deg)`;
    }
    setPadding(value,obj){
        this.padding = value;
        if (obj.constructor.name == "List") {
            if (obj.getStyleType() != "none") {
                let paddingLeft = (parseInt(value) + ((obj.getItem().length.toString().length * 10) + 15)) 
                this.getCompomnent().style.padding = `${value}px ${value}px ${value}px ${paddingLeft}px`;
                console.log(paddingLeft)
            } else {
            this.getCompomnent().style.padding = `${value}px`;
            }
        } else {
            this.getCompomnent().style.padding = `${value}px`;
        }
    }
    setSkew(value){
        this.skew = value;
        this.getCompomnent().style.transform = `skew(${value}deg)`;
    }
    
    
    
    setBackGrounColor(value){
        this.backGrounColor = value;
        this.getCompomnent().style.backgroundColor  =  this.getBackGrounColor();
    }
    setBackGrounDesign(value){
        
        if (value == 'none') {
            this.getCompomnent().classList.remove(this.getBackGrounDesign());
            this.backGrounDesign = value;
            
        }else{
            this.getCompomnent().classList.remove(this.getBackGrounDesign());
            this.backGrounDesign = value;
            this.getCompomnent().classList.add(value);
        }
    }
    setBorderDesign(value){
        
        if (value == 'none') {
            this.getCompomnent().classList.remove(this.getBorderDesign());
            this.borderDesign = value;
            
        }else{
            this.getCompomnent().classList.remove(this.getBorderDesign());
            this.borderDesign = value;
            this.getCompomnent().classList.add(value);
        }
    }


    setBorderColor(value,index){
        if (index == 0) {
            for (let index = 0; index < this.borderColor.length; index++) {
                this.borderColor[index] = value;
                
            }
        } else {
            this.borderColor[index] = value;
            
        }
        this.applyBorderEdites();
    }

    setBorderStyle(value,index){
        if (index == 0) {
            for (let index = 0; index < this.borderStyle.length; index++) {
                this.borderStyle[index] = value;
            }
        } else {
            this.borderStyle[index] = value;
        }
    this.applyBorderEdites();
    }

    setBorderWidth(value,index){
        if (index == 0) {
            for (let index = 0; index < this.borderWidth.length; index++) {
                this.borderWidth[index] = value;
            }
        } else {
            this.borderWidth[index] = value;
        }
    this.applyBorderEdites();
    }

    setBorderRadius(value,index){
        if (index == 0) {
            for (let index = 0; index < this.borderRadius.length; index++) {
                this.borderRadius[index] = value;
                
            }
        } else {
            this.borderRadius[index] = value;
        }
        this.applyBorderEdites();
    }
    
    setPolygon(value){
        this.polygon = value;
        switch (value) {
            case "none":
                this.getCompomnent().style.clipPath = "none";
                break;
            case "Triangle":
                this.getCompomnent().style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
                break;
            case "Star":
                this.getCompomnent().style.clipPath = " polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
                break;
            case "Message":
                this.getCompomnent().style.clipPath = "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)";
                break;
            case "Ocagon":
                this.getCompomnent().style.clipPath = " polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
                break;

        }
        
    }

    setIsDesignEditable(value){
        this.isDesignEditable = value;
    };
    setIsContentEditable(value){
        this.isContentEditable = value;
    };
    setIsSizesEditable(value){
        this.isSizesEditable = value;
    };
    
    
    applyBorderEdites(){

        this.getCompomnent().style.borderColor = `${this.getBorderColor()[1]} ${this.getBorderColor()[2]} ${this.getBorderColor()[3]} ${this.getBorderColor()[4]}`;
        this.getCompomnent().style.borderStyle = `${this.getBorderStyle()[1]} ${this.getBorderStyle()[2]} ${this.getBorderStyle()[3]} ${this.getBorderStyle()[4]}`;
        this.getCompomnent().style.borderWidth = `${this.getBorderWidth()[1]}px ${this.getBorderWidth()[2]}px ${this.getBorderWidth()[3]}px ${this.getBorderWidth()[4]}px`;
        this.getCompomnent().style.borderRadius = `${this.getBorderRadius()[1]}px ${this.getBorderRadius()[2]}px ${this.getBorderRadius()[3]}px ${this.getBorderRadius()[4]}px`;
    }


    getCompomnent(){
        return this.compomnent;
    }
    getOpacity(){
        return this.opacity;
    }
    getRotation(){
        return this.rotation;
    }
    getPadding(){
        return this.padding;
    }
    getskew(){
        return this.skew;
    }
    getBackGrounColor(){
        return this.backGrounColor;
    }
    getBackGrounDesign(){
        return this.backGrounDesign;
    }
    getBorderColor(){
        return this.borderColor;
    }
    getBorderDesign(){
        return this.borderDesign;
    }
    getBorderStyle(){
        return this.borderStyle;
    }
    getBorderWidth(){
        return this.borderWidth;
    }
    getBorderRadius(){
        return this.borderRadius;
    }
    getpolygon(){
        return this.polygon;
    }
    getIsDesignEditable(){
        return this.isDesignEditable;
    }
    getIsContentEditable(){
        return this.isContentEditable;
    }
    getIsSizesEditable(){
        return this.isSizesEditable;
    }

}