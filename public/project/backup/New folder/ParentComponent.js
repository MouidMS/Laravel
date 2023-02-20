import Compomnent from "./Component.js";
import { currentPage } from "./Page.js";
import { compomnentBtn} from "./main.js";


export let compInFlag = true;

export function setCompInFlag(value){
    compInFlag = value;
}


export default class ParentComponent extends Compomnent{

    width;
    height;
    xAxis;
    yAxis;
    zAxis;

    
    

    constructor(width,height,xAxis,yAxis,zAxis,
        opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
            super(opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
            this.width = width;
            this.height = height;
            this.xAxis = xAxis;
            this.yAxis = yAxis;
            this.zAxis = zAxis;
            
    }

    applyparentComponentEdites(){
        this.setWidth(this.getWidth());
        this.setHeight(this.getHeight());
        this.setXandY(this.getXAxis(),this.getYAxis());
        this.setZAxis(this.getZAxis());
    }

    
    // if(addleft < 0 ){
    //     addleft = addleft ;
    // }else if(addleft > rect.width ){
    //     addleft = (addleft - (addleft -(rect.width))) - 100;
    // }else if(addleft + 100 > rect.width ){
    //     addleft = (addleft - ((addleft + 100) -rect.width));
    // }

    setWidth(value){
        if (value == 'auto') {
            this.width = value;
            this.getCompomnent().parentNode.style.width = `${value}`;
        } else {
            if (((value >= 0)&&(this.getXAxis() + value <= currentPage.getPage().getBoundingClientRect().width))) {
                this.width = value;
                this.getCompomnent().parentNode.style.width = `${value}px`;
            }
        }
        compomnentBtn.setSize(this.getWidth(),this.getHeight());
    }
    setHeight(value){
        if (value == 'auto') {
            this.getCompomnent().parentNode.style.height = `${value}`;
            this.height = value;
        } else {
            if (((value >= 0)&&(this.getYAxis() +  value <= currentPage.getPage().getBoundingClientRect().height))) {
                this.getCompomnent().parentNode.style.height = `${value}px`;
                this.height = value;
            }
        }
        compomnentBtn.setSize(this.getWidth(),this.getHeight());
    }
    setXandY(X,Y){
        let rect = currentPage.getPage().getBoundingClientRect();
        if (X < 0) {
            X = 0;
        } else if(X > rect.width){
            X = (X - (X - rect.width)) - this.getWidth();
        }else if(X + this.getWidth() > rect.width){
            X = (X - ((X + this.getWidth()) - rect.width))
        }
        this.setXAxis(X);
        if (Y < 0) {
            Y = 0;
        } else if(Y > rect.height){
            Y = (Y - (Y - rect.height)) - this.getWidth();
        }else if(Y + this.getWidth() >rect.height){
            Y = (Y - ((Y + this.getWidth()) - rect.height))
        }
        this.setYAxis(Y);
    }

    setXAxis(value){
        if (value >= 0 && this.getWidth() == 'auto') {
            this.xAxis = value;
            this.getCompomnent().parentNode.style.left = `${value}px`;
            this.setMaxWidth(value);

        } else {
            if (((value >= 0)&&(value + this.getWidth() <= currentPage.getPage().getBoundingClientRect().width))){    
                this.xAxis = value;
                this.getCompomnent().parentNode.style.left = `${value}px`;
                this.setMaxWidth(value);
            }
        }
        compomnentBtn.setCoordnait(this.getXAxis(),this.getYAxis());
    }

    setYAxis(value){
        if (false) {
            if(value >= 0){
                this.yAxis = value;
                this.getCompomnent().parentNode.style.top = `${value}px`;
                this.getCompomnent().parentNode.style.maxHeight = `unset`;
            }
        } else if(value >= 0 && this.getHeight() == 'auto'){
            this.yAxis = value;
                this.getCompomnent().parentNode.style.top = `${value}px`;
                this.setMaxHeight(value);
        } else{
            if(((value >= 0)&&(value + this.getHeight() <= currentPage.getPage().getBoundingClientRect().height))){
                this.yAxis = value;
                this.getCompomnent().parentNode.style.top = `${value}px`;
                this.setMaxHeight(value);
            }
        }
        compomnentBtn.setCoordnait(this.getXAxis(),this.getYAxis());
    }

    setZAxis(value){
        this.zAxis = value;
        this.getCompomnent().style.zIndex = `${value}`;
    }

    setMaxWidth(value){
        let rect = currentPage.getPage().getBoundingClientRect();
        this.getCompomnent().parentNode.style.maxWidth = `${Math.floor(rect.width - value)}px`;
        this.getCompomnent().style.maxWidth = `${Math.floor(rect.width - value)}px`;
    }
    setMaxHeight(value){
        let rect = currentPage.getPage().getBoundingClientRect();
        this.getCompomnent().parentNode.style.maxHeight = `${(rect.height - value)-1}px`;
        this.getCompomnent().style.maxHeight = `${(rect.height - value)-1}px`;
    }

    addControlBtn(){
        if (compInFlag) {
            this.getCompomnent().parentNode.appendChild(compomnentBtn.getDrager());
            this.getCompomnent().parentNode.appendChild(compomnentBtn.getCopy());
            this.getCompomnent().parentNode.appendChild(compomnentBtn.getDelete());
            this.getCompomnent().parentNode.appendChild(compomnentBtn.getEdit());
            this.getCompomnent().parentNode.appendChild(compomnentBtn.getResizer());
            this.getCompomnent().parentNode.appendChild(compomnentBtn.getCoordinates());
            this.getCompomnent().parentNode.appendChild(compomnentBtn.getSize());
            this.getCompomnent().parentNode.appendChild(compomnentBtn.getComponentName());
        }
    }




    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    getXAxis(){
        return this.xAxis;
    }
    getYAxis(){
        return this.yAxis;
    }
    getZAxis(){
        return this.zAxis;
    }
}