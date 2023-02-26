import  TextComponent  from "./TextComponent.js";
import {compomnentBtn, componentList, isFullPreemption, IsReadOnly} from "./main.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag, setIsSupComponent} from "./Component.js";
import { compInFlag } from "./ParentComponent.js";


export default class Topic extends TextComponent{
    topicLevel;



    constructor(text,topicLevel,isLined,textEffect,wordSpace,letterSpace,lineHeight,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable){
        super(text,isLined,textEffect,wordSpace,letterSpace,lineHeight,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
        this.setCompomnent(this.prepairComponent());
        this.applyTextEdits();
        this.applyparentComponentEdites();
        this.applyComponentEdit(this);
        this.setTopicLevel(topicLevel);
        console.log('Topic')
    };


    prepairComponent(){
        let comp = document.createElement('p');
        comp.classList.add('topic');
        comp.classList.add('TextRoot');
        comp.classList.add('component');
        if (!IsReadOnly){
            if (isFullPreemption) {
                comp.setAttribute("contenteditable", true);
            } else {
                if (this.getIsContentEditable()) {
                    comp.setAttribute("contenteditable", false);
                }
            }
        }
        let current = document.createElement('div');
        current.classList.add('parentComponent');
        current.appendChild(comp);
        return comp;
    }

    compomnentIn = (e) =>{
        if (!IsReadOnly) {
            componentList.getAddComponentList().remove();
            if(this != currentComponent){
                setCurrentComponentFlag(true);
            }

            if(currentComponentFlag){
                compomnentBtn.getSideBtnContainer().remove();
                setIsSupComponent(false);
                setCurrentComponentFlag(false);
                if (compInFlag) {
                    console.log('componentIn');
                    console.log("Topic")
                    compomnentBtn.setComponentName('Topic');
                    setCurrentComponent(this);
                    this.addControlBtn();
                    compomnentBtn.prepairParagraphSideBtn(this.getIsSizesEditable(),this.getIsDesignEditable(),this.getIsContentEditable());
                    this.getCompomnent().parentNode.appendChild(compomnentBtn.getSideBtnContainer());
                    compomnentBtn.prepairTopicEdit(this.getTopicLevel(),this.getIsLined(),this.getTextEffect(),this.getWordSpace(),this.getLetterSpace(),this.getLineHeight(),this.getWidth(),this.getHeight(),this.getXAxis(),
                        this.getYAxis(),this.getZAxis(),this.getOpacity(),this.getRotation(),this.getPadding(),this.getskew(),this.getBackGrounColor(),this.getBackGrounDesign(),this.getBorderColor(),this.getBorderDesign(),
                        this.getBorderStyle(),this.getBorderWidth(),this.getBorderRadius(),this.getpolygon(),
                        this.getIsSizesEditable(),this.getIsDesignEditable(),this.getIsContentEditable());
                    this.getCompomnent().parentNode.appendChild(compomnentBtn.getEditContainer());

                }
            }
        }
    }

    setTopicLevel(value){
        this.topicLevel = value;
        this.getCompomnent().style.fontWeight = `900`;
        switch (value) {
            case "1":
                this.getCompomnent().style.fontSize = `40px`
                break;
            case "2":
                this.getCompomnent().style.fontSize = `35px`
                break;
            case "3":
                this.getCompomnent().style.fontSize = `30px`
                break;
            case "4":
                this.getCompomnent().style.fontSize = `25px`
                break;
            case "5":
                this.getCompomnent().style.fontSize = `20px`
                break;
            case "6":
            case "7":
            case "8":
            case "9":
            case "10":
                this.getCompomnent().style.fontSize = `15px`
                break;
        }
    };

    getTopicLevel(){
        return this.topicLevel;
    }

    compomnentOut = (e) =>{
        console.log('componentOut');
    }

    addEvents(){
        this.getCompomnent().addEventListener("click",this.compomnentIn);
        this.getCompomnent().addEventListener('input',this.saveText);
        this.addTextEvent();
    }

    removeComponentFormat(){
        // text, isLined,textEffect,wordSpace,letterSpace,lineHeight, width,height,opacity,xAxis,yAxis,zAxis,rotation,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,isSizesEditable,isDesignEditable,isContentEditable
        //"", "none","none",0,0,0, 100,100,1,x,y,0,0,"#ffffff","none","#ffffff","none","solid",0,0,false,false,false

        this.setIsLined("none")
        this.setTextEffect("none")
        this.setWordSpace("normal")
        this.setLetterSpace("normal")
        this.setLineHeight("normal")
        this.setOpacity(1)
        this.setZAxis(0)
        this.setSkew(0);
        this.setRotation(0)
        this.setPadding(0, this);
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
