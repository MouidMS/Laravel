import ParentComponent from "./ParentComponent.js";
import {compomnentBtn,componentList,isFullPreemption} from "./main.js";
import { currentComponent,setCurrentComponent,setCurrentComponentParent,currentComponentFlag,
    setCurrentComponentFlag,currentComponentParent,currentComponentParentFlag, setCurrentComponentParentFlag, setIsSupComponent} from "./Component.js";
import { compInFlag } from "./ParentComponent.js";
import ListItem from "./ListItem.js";
import ListTopic from "./ListTopic.js";


export default class List extends ParentComponent{
    
    type;
    start;
    styleType;

    item = [];

    constructor(type,start,styleType,
        width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
        super(width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable);   
        this.setCompomnent(this.prepairComponent());
        this.applyparentComponentEdites();
        this.applyComponentEdit(this);
        this.setType(type);
        this.setStart(start);
        this.setStyleType(styleType);
        console.log('List');
    };

    prepairComponent(){
        let comp = document.createElement('ol');
        comp.classList.add('list');
        comp.classList.add('component');
        if (isFullPreemption) {
        } else {
            if (this.getIsContentEditable()) {
            } 
        }
        let current = document.createElement('div');
        current.classList.add('parentComponent');
        current.appendChild(comp);
        return comp;
    };

    setType(value){
        this.type = value;
    }
    setStart(value){
        this.start = value;
        this.getCompomnent().setAttribute('start',value);
    }
    setStyleType(value){
        this.styleType = value;
        this.getCompomnent().style.listStyleType = `${value}`;
        this.setPadding(this.getPadding(), this);
    }


    addItem(value){
        this.getItem().push(value);
        this.getCompomnent().appendChild(value.getCompomnent());
    }
    
    newItem(){
        let current
        switch (this.getType()) {
            case "item":
                current = new ListItem(0,"","none","none","normal","normal","normal",1,0,0,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                break;
            case "topic":
                current = new ListTopic("","none","none","normal","normal","normal",100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                break;
        }
        current.addEvents()
        this.getItem().push(current);
        this.getCompomnent().appendChild(current.getCompomnent());
    }



    deleteItem(value){
        console.log(value)
       
        if (value != null) {
            if (this.getCompomnent().contains(value.getCompomnent())) {
                let index = this.getItem().indexOf(value);
                
                this.getItem().splice(index,1);
                this.getCompomnent().removeChild(value.getCompomnent());
            } else {
                if (this.getItem().length > 1) {
                    this.getItem().splice(-1,1);
                    this.getCompomnent().removeChild(this.getCompomnent().lastChild);
                }
            }
        }else{
            if (this.getItem().length > 1) {
                this.getItem().splice(-1,1);
                this.getCompomnent().removeChild(this.getCompomnent().lastChild);
            }        
        }
    }

    up(value){
        if (value != this) {
            let index = this.getItem().indexOf(value);
            let current = this.getItem()[index];
            if (index == 0 ) {}else{
                
                this.getItem()[index] = this.getItem()[index - 1];
                this.getItem()[index - 1] = current;
        
                this.getCompomnent().insertBefore(this.getCompomnent().children[index],this.getCompomnent().children[index - 1]);
            }
        }
    }

    down(value){
        if (value != this) {
            let index = this.getItem().indexOf(value);
            let current = this.getItem()[index];
            if (index == this.getItem().length - 1 ) {}else{
                
                this.getItem()[index] = this.getItem()[index + 1];
                this.getItem()[index + 1] = current;
        
                this.getCompomnent().insertBefore(this.getCompomnent().children[index + 1],this.getCompomnent().children[index]);
            }
        }   
    }


    compomnentIn = (e) =>{
        e.stopPropagation();
        componentList.getAddComponentList().remove();
        if (this != currentComponentParent) {
            setCurrentComponentParentFlag(true);
        }
        
        if (currentComponentParentFlag) {
            setCurrentComponent(null);
            setIsSupComponent(true);
            this.addControlBtn();
            compomnentBtn.getEditContainer().remove();
            compomnentBtn.prepairListSideBtn(this.getIsContentEditable());
            this.getCompomnent().parentNode.appendChild(compomnentBtn.getSideBtnContainer());
            setCurrentComponentParentFlag(false);
            setCurrentComponentParent(this);
        }

        if (e.detail === 2) {
            if(this != currentComponent){
                setCurrentComponentFlag(true);
            }
    
            if(currentComponentFlag){
                setIsSupComponent(false);
                setCurrentComponentFlag(false);
                console.log('componentIn//list');
                compomnentBtn.setComponentName('List');
                setCurrentComponent(this);
                compomnentBtn.prepairListEdit(this.getStart(),this.getStyleType(),
                this.getWidth(),this.getHeight(),this.getXAxis(),this.getYAxis(),this.getZAxis(),this.getOpacity(),this.getRotation(),this.getPadding(),this.getskew(),
                this.getBackGrounColor(),this.getBackGrounDesign(),this.getBorderColor(),this.getBorderDesign(),
                this.getBorderStyle(),this.getBorderWidth(),this.getBorderRadius(),this.getpolygon(),
                this.getIsSizesEditable(),this.getIsDesignEditable(),this.getIsContentEditable());
                this.getCompomnent().parentNode.appendChild(compomnentBtn.getEditContainer());
            }
        }

    }

    
    getType(){return this.type;}
    getStart(){return this.start;}
    getStyleType(){return this.styleType;}
    getItem(){return this.item;}



    addEvents(){
        this.getCompomnent().addEventListener("click",this.compomnentIn);
    }

    removeComponentFormat(){
        
        this.setStart(1);
        this.styleType("decimal");
        this.setOpacity(1)
        this.setZAxis(0)
        this.setRotation(0)
        this.setPadding(0,this);
        this.setSkew(0);
        this.setBackGrounColor("#ffffff",0)
        this.setBackGrounDesign("none")
        this.setBorderColor("#000000")
        this.setBorderDesign("none")
        this.setBorderStyle("solid",0)
        this.setBorderWidth(0,0)
        this.setBorderRadius(0,0)
        this.setPolygon("none")
    }
}