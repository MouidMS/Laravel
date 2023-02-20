import {componentList,pageEdit,container,compomnentBtn, clearEdit, isFullPreemption} from './main.js';
import { ComponentCopy,ComponentCopyName } from './ComponentBtn.js';
import Paragraph from './Paragraph.js';
import Topic from './Topic.js';
import Icon from './Icon.js';
import Images from './Image.js'
import List from './List.js';
import Table from './Table.js';
import Shap from './Shap.js';
import ListItem from './ListItem.js';


export let currentPage;

let Xcord,Ycord;




export default class Page{

    page;

    paragraphs = [];
    topics = [];
    images = [];
    icons = [];
    lists = [];
    tables = [];
    topicLists = [];
    shapes = [];

    pagenContener;
    
    pageNumber;
    pageNumberColor;
    pageDesign;
    backGrounColor;
    borderColor ;
    borderDesign ;
    borderStyle ;
    borderWidth ;
    borderRadius;

    isDesignEditable;
    isContentEditable;

    constructor(backGrounColor,pageDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,pageNumber,pageNumberColor,isDesignEditable,isContentEditable){
        this.setPage();
        this.setEvent();
        this.setbackGrounColor(backGrounColor);
        this.setpageDesign(pageDesign);
        this.setborderDesign(borderDesign);
        this.setPageNumber(pageNumber);
        this.setpageNumberColor(pageNumberColor);
        this.setIsContentEditable(isContentEditable);
        this.setIsDesignEditable(isDesignEditable);
        this.borderColor = borderColor;
        this.borderStyle = borderStyle;
        this.borderWidth = borderWidth;
        this.borderRadius = borderRadius;
        this.applyEdites();

    }

    
    setPage(){
        let page = document.createElement('div');
        let outer1 = document.createElement('div');
        outer1.classList.add('outer1');
        outer1.appendChild(page);        
        let outer2 = document.createElement('div');
        outer2.classList.add('outer2');
        outer2.appendChild(outer1);
        page.classList.add("page");
        this.pagenContener = document.createElement('p');
        this.pagenContener.classList.add('pagenumber');
        page.parentNode.appendChild(this.pagenContener);
        this.page = page;

    };
    setPageNumber(pageNumber){
        this.pageNumber = pageNumber;

        if (pageNumber == "none") {
            this.getpagenContener().style.display = "none";
        } else {
            var root = document.querySelector(':root');
            let pnx;
            let pny;
            switch (this.getPageNumber()) {
                case "top":
                    pnx = '50%';
                    pny ='5px';
                    break;
                case "top-right":
                    pnx = '10px';
                    pny ='5px';
                    break;
                case "top-left":
                    pnx = '97.5%';
                    pny ='5px';
                    break;
                case "bottom":
                    pnx = '50%';
                    pny ='98.1%';
                    break;
                case "bottom-right":
                    pnx = '10px';
                    pny ='98.1%';
                    break;
                case "bottom-left":
                    pnx = '97.5%';
                    pny ='98.1%';
                    break;
                }
                this.getpagenContener().style.display = "block";   
                this.getpagenContener().style.left = pnx;
                this.getpagenContener().style.top = pny;
                root.style.setProperty('--pnX', pnx);
                root.style.setProperty('--pnY', pny);

        }
    };
    setpageDesign(value){
        if (value == 'none') {
            this.getPage().classList.remove(this.getpageDesign());
            this.pageDesign = value;
            
        }else{
            this.getPage().classList.remove(this.getpageDesign());
            this.pageDesign = value;
            this.getPage().classList.add(value);
        }
        
    };
    setborderDesign(value){
        if (value == 'none') {
            this.getPage().classList.remove(this.getborderDesign());
            this.borderDesign = value;
            
        }else{
            this.getPage().classList.remove(this.getborderDesign());
            this.borderDesign = value;
            this.getPage().classList.add(value);
        }
    }
    setbackGrounColor(backGrounColor){
        this.backGrounColor = backGrounColor;
        this.getPage().style.backgroundColor  =  this.getbackGrounColor();
        this.getPage().parentNode.parentNode.style.backgroundColor  =  this.getbackGrounColor();
    };
    setpageNumberColor(pageNumberColor){
        this.pageNumberColor = pageNumberColor;
        this.getpagenContener().style.color = `${this.getpageNumberColor()}`;
    }


    setborderColor(borderColor,index){
        if (index == 0) {
            for (let index = 0; index < this.borderColor.length; index++) {
                this.borderColor[index] = borderColor;
                
            }
        } else {
            this.borderColor[index] = borderColor;
            
        }
        this.applyEdites();


    }
    setborderStyle(borderStyle,index){
        if (index == 0) {
            for (let index = 0; index < this.borderStyle.length; index++) {
                this.borderStyle[index] = borderStyle;
            }
        } else {
            this.borderStyle[index] = borderStyle;
        }
    this.applyEdites();
        
    };
    setborderWidth(borderWidth,index){
        if (index == 0) {
            for (let index = 0; index < this.borderWidth.length; index++) {
                this.borderWidth[index] = borderWidth;
            }
        } else {
            this.borderWidth[index] = borderWidth;
        }
    this.applyEdites();
    }
    setborderRadius(borderRadius,index){
        if (index == 0) {
            for (let index = 0; index < this.borderRadius.length; index++) {
                this.borderRadius[index] = borderRadius;
                
            }
        } else {
            this.borderRadius[index] = borderRadius;
        }
        this.applyEdites();
    };

    setIsDesignEditable(value){
        this.isDesignEditable = value;
    }
    setIsContentEditable(value){
        this.isContentEditable = value;
    }

    setEvent(){
        this.getPage().addEventListener('contextmenu',this.insertComponentList);  
        this.getPage().addEventListener('click',this.deleteComponenList);
        this.getPage().addEventListener("mouseenter",this.pageIn);
        this.getPage().addEventListener('mouseout',this.pageOut);
    }

    
    
    getPage(){
        return this.page;
    };
    getPageNumber(){
        return this.pageNumber;
    };

    getParagraphs(){
        return this.paragraphs;
    };
    getTopics(){
        return this.topics;
    };
    getImages(){
        return this.images;
    }
    getIcons(){
        return this.icons;
    }
    getLists(){
        return this.lists;
    }
    getTables(){
        return this.tables;
    }
    getImageSliders(){
        return this.imageSliders;
    }
    getTopicLists(){
        return this.topicLists;
    }
    getReferences(){
        return this.references;
    }
    getCodes(){
        return this.codes;
    }
    getDataBases(){
        return this.dataBases;
    }
    getShapes(){
        return this.shapes;
    }
    getPolygons(){
        return this.polygons;
    }
    
    getbackGrounColor(){
        return this.backGrounColor;
    };
    getborderColor(){
        return this.borderColor;
    };
    getborderStyle(){
        return this.borderStyle;
    };
    getborderWidth(){
        return this.borderWidth;
    };
    getborderRadius(){
        return this.borderRadius;
    };
    getpageDesign(){
        return this.pageDesign;
    };
    getborderDesign(){
        return this.borderDesign;
    };
    getpageNumberColor(){
        return this.pageNumberColor;
    };
    getpageNumberColor(){
        return this.pageNumberColor;
    };
    getpagenContener(){
        return this.pagenContener ;
    }
    getIsDesignEditable(){return this.isDesignEditable;}
    getIsContentEditable(){return this.isContentEditable;}


    
    applyEdites(){

        this.getPage().parentNode.style.borderColor = `${this.getborderColor()[1]} ${this.getborderColor()[2]} ${this.getborderColor()[3]} ${this.getborderColor()[4]}`;
        this.getPage().parentNode.style.borderStyle = `${this.getborderStyle()[1]} ${this.getborderStyle()[2]} ${this.getborderStyle()[3]} ${this.getborderStyle()[4]}`;
        this.getPage().parentNode.style.borderWidth = `${this.getborderWidth()[1]}px ${this.getborderWidth()[2]}px ${this.getborderWidth()[3]}px ${this.getborderWidth()[4]}px`;
        this.getPage().parentNode.style.borderRadius = `${this.getborderRadius()[1]}px ${this.getborderRadius()[2]}px ${this.getborderRadius()[3]}px ${this.getborderRadius()[4]}px`;
        this.getPage().parentNode.style.borderRadius = `${this.getborderRadius()[1]}px ${this.getborderRadius()[2]}px ${this.getborderRadius()[3]}px ${this.getborderRadius()[4]}px`;
        this.getPage().style.borderRadius = `${this.getborderRadius()[1]}px ${this.getborderRadius()[2]}px ${this.getborderRadius()[3]}px ${this.getborderRadius()[4]}px`;
        this.getPage().parentNode.style.left = `${20 - this.getborderWidth()[4]}px`;
        this.getPage().parentNode.style.top = `${20 - this.getborderWidth()[1]}px`;
    }
    



    pushComponent(component){
        console.log("pushing")
        switch (component.constructor.name) {
            case "Paragraph":
        console.log("pushing paragraph")
                component.addEvents();
                this.paragraphs.push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "Topic":
        console.log("pushing topice")
                component.addEvents();
                this.getTopics().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "Image":
                component.addEvents();
                this.getImages().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "Icon":
                component.addEvents();
                this.getIcons().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "List":
                component.addEvents();
                this.getLists().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "Table":
                //isCollapse,isSticyCol,isSticyRow,rowSpace,colSpace,isEmptyCellsHise,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable
                component.addEvents();
                this.getTables().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "TopicList":
                component.addEvents();
                this.getLists().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "Shap":
                component.addEvents();
                this.getShapes().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
        }
    }


    pasteComponent(X,Y){
        console.log(ComponentCopy.isLined)
        if (ComponentCopy != null) {
            componentList.getAddComponentList().remove();
            let C = ComponentCopy;
            let component;
    
            switch (ComponentCopyName) {
                case "Paragraph":
                    console.log("h/////////////////////////")
                    component = new Paragraph(C.text,C.isLined,C.textEffect,C.wordSpace,C.letterSpace,C.lineHeight,
                        C.width,C.height,X,Y,C.zAxis,
                        C.opacity,C.rotation,C.padding,C.skew,
                        C.backGrounColor,C.backGrounDesign,C.borderColor,C.borderDesign,C.borderStyle,C.borderWidth,C.borderRadius,C.polygon,
                        C.isSizesEditable,C.isDesignEditable,C.isContentEditable);
                    component.addEvents();
                    this.getParagraphs().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
                case "Topic":
                    component = new Topic(C.getText(),C.getTopicLevel(),C.getIsLined(),C.getTextEffect(),C.getWordSpace(),C.getLetterSpace(),C.getLineHeight(),
                    C.getWidth(),C.getHeight(),X,Y,C.getZAxis(),
                    C.getOpacity(),C.getRotation(),C.getPadding(),C.getskew(),
                    C.getBackGrounColor(),C.getBackGrounDesign(),C.getBorderColor(),C.getBorderDesign(),C.getBorderStyle(),C.getBorderWidth(),C.getBorderRadius(),C.getpolygon(),
                    C.getIsSizesEditable(),C.getIsDesignEditable(),C.getIsContentEditable());
                    component.addEvents();
                    this.getTopics().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
                case "Image":
                    component = new Images(["./Images/images.png"],0,0,0,0,0,0,0,0,100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                    component.addEvents();
                    this.getImages().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
                case "Icon":
                    component = new Icon('fa-solid fa-house',"#000000",20,40,40,x,y,0,1,0,10,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                    component.addEvents();
                    this.getIcons().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
                case "List":
                    component = new List(C.getType(),C.getStart(),C.getStyleType(),
                        C.getWidth(),C.getHeight(),X,Y,C.getZAxis(),
                        C.getOpacity(),C.getRotation(),C.getPadding(),C.getskew(),
                        C.getBackGrounColor(),C.getBackGrounDesign(),C.getBorderColor(),C.getBorderDesign(),C.getBorderStyle(),C.getBorderWidth(),C.getBorderRadius(),C.getpolygon(),
                        C.getIsSizesEditable(),C.getIsDesignEditable(),C.getIsContentEditable());
                    component.addEvents();
                    console.log(C.getItem())
                    console.log(component.getItem())
                    C.getItem().forEach(e => {
                        console.log(e)
                        component.addItem(new ListItem(e.getItemSpace(),
                            e.getText(),e.getIsLined(),e.getTextEffect(),e.getWordSpace(),e.getLetterSpace(),e.getLineHeight(),
                            e.getOpacity(),e.getRotation(),e.getPadding(),e.getskew(),
                            e.getBackGrounColor(),e.getBackGrounDesign(),e.getBorderColor(),e.getBorderDesign(),e.getBorderStyle(),e.getBorderWidth(),e.getBorderRadius(),e.getpolygon(),
                            e.getIsSizesEditable(),e.getIsDesignEditable(),e.getIsContentEditable()))
                    });
                    this.getLists().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
                case "Table":
                    component = new Table(false,false,false,1,1,false,100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                    component.addEvents();
                    this.getTables().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
                case "TopicList":
                    component = new List("topic",0,"disc",100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                    component.addEvents();
                    this.getTopicLists().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
                case "Shap":
                    component = new Shape();
                    component.addEvents();
                    this.getShapes().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
            }
        }
    };


 
    deleteComponent(component){
        let compType = component.constructor.name;
        let index;
        switch (compType) {
            case "Paragraph":
                index = this.getParagraphs().indexOf(component)
                this.getParagraphs().splice(index,1)
                this.getPage().removeChild(component.getCompomnent().parentNode);
                break;
            case "Topic":
                index = this.getTopics().indexOf(component)
                this.getTopics().splice(index,1)
                this.getPage().removeChild(component.getCompomnent().parentNode);
                break;
            case "Image":
                index = this.getImages().indexOf(component)
                this.getImages().splice(index,1)
                this.getPage().removeChild(component.getCompomnent().parentNode);
                break;
            case "Icon":
                index = this.getIcons().indexOf(component)
                this.getIcons().splice(index,1)
                this.getPage().removeChild(component.getCompomnent().parentNode);
                break;
            case "List":
                index = this.getLists().indexOf(component)
                this.getLists().splice(index,1)
                this.getPage().removeChild(component.getCompomnent().parentNode);
                break;
            case "Table":
                index = this.getTables().indexOf(component)
                this.getTables().splice(index,1)
                this.getPage().removeChild(component.getCompomnent().parentNode);
                break;
            case "TopicList":
                index = this.getTopicLists().indexOf(component)
                this.getTopicLists().splice(index,1)
                this.getPage().removeChild(component.getCompomnent().parentNode);
                break;
            case "Shap":
                index = this.getShapes().indexOf(component)
                this.getShapes().splice(index,1)
                this.getPage().removeChild(component.getCompomnent().parentNode);
                break;
        }
    };
    
    addComponanet(componanet,x,y){
        componentList.getAddComponentList().remove();
        let current
        switch (componanet) {
            case "Paragraph":
            //text,isLined,textEffect,wordSpace,letterSpace,lineHeight,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable
            current = new Paragraph("","none","none","normal","normal","normal",100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                current.addEvents();
                this.paragraphs.push(current);
                this.getPage().appendChild(current.getCompomnent().parentNode);
                break;
            case "Topic":
                current = new Topic("","1","none","none","normal","normal","normal",100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                current.addEvents();
                this.getTopics().push(current);
                this.getPage().appendChild(current.getCompomnent().parentNode);
                break;
            case "Image":
                current = new Images(["./Images/images.png"],0,0,0,0,0,0,0,0,100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                current.addEvents();
                this.getImages().push(current);
                this.getPage().appendChild(current.getCompomnent().parentNode);
                break;
            case "Icon":
                current = new Icon('fa-solid fa-house',"#000000",20,40,40,x,y,0,1,0,10,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                current.addEvents();
                this.getIcons().push(current);
                this.getPage().appendChild(current.getCompomnent().parentNode);
                break;
            case "List":
                current = new List("item",0,"disc",100,100,x,y,0,1,0,0,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                current.addEvents();
                current.newItem();
                current.newItem();
                current.newItem();
                this.getLists().push(current);
                this.getPage().appendChild(current.getCompomnent().parentNode);
                break;
            case "Table":
                //isCollapse,isSticyCol,isSticyRow,rowSpace,colSpace,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable
                current = new Table(false,false,false,1,1,'auto','auto',x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                current.addEvents();
                this.getTables().push(current);
                this.getPage().appendChild(current.getCompomnent().parentNode);
                break;
            case "TopicList":
                current = new List("topic",0,"disc",100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                current.addEvents();
                this.getLists().push(current);
                this.getPage().appendChild(current.getCompomnent().parentNode);
                break;
            case "Shap":
                current = new Shape(100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                current.addEvents();
                this.getShapes().push(current);
                this.getPage().appendChild(current.getCompomnent().parentNode);
                break;
        }
    }



    insertComponentList = (e) =>{
        e.preventDefault();
        if (e.target === this.getPage()) {
            clearEdit();
            compomnentBtn.clearBlock();
            if (this.getIsContentEditable() || isFullPreemption) {
                let rect = e.target.getBoundingClientRect();
                console.log("Insert");
    
                var addleft = e.clientX - (rect.left);
                var addright = e.clientY - (rect.top );
            
                if(addleft < 0 ){
                    addleft = 0 ;
                }else if(addleft > rect.width ){
                    addleft = (addleft - (addleft -(rect.width))) - 100;
                }else if(addleft + 100 > rect.width ){
                    addleft = (addleft - ((addleft + 100) -rect.width));
                }
    
                if(addright < 0){
                    addright = 0;
                }else if(addright > rect.height  ){
                    addright = (addright - (addright - rect.height)) - 100;
                }else if(addright + 100 > (rect.height )){
                    addright = (addright - ((addright + 100) - rect.height));
                }
                componentList.getAddComponentList().style.left = `${addleft}PX`;
                componentList.getAddComponentList().style.top = `${addright}PX`;
                        
                this.page.appendChild(componentList.getAddComponentList());
            }
        }
    }

    deleteComponenList = (e) =>{
        if (e.target === this.getPage()) {
            clearEdit();
            window.getSelection()?.removeAllRanges();
            // compomnentBtn.clearBlock();
        }        
    }

    pageIn = (e) =>{
    
        if (!this.page.contains(e.relatedTarget)) {
            if (this.getIsDesignEditable() || isFullPreemption) {        
                console.log(`pageIN`);
                currentPage = this;
                this.setPageEdit();
                this.page.parentNode.parentNode.appendChild(pageEdit.getPageEdit());
                pageEdit.setev();
            }

        }

        
    }

    // pageOut = (e) =>{

        
    //     if (!this.page.contains(e.relatedTarget)) {
    //         console.log(`pageout`);
    //         componentList.getAddComponentList().remove();
    //         pageEdit.getPageEdit().remove();
            
    //     }

    // }


    //backGrounColor,pageDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,pageNumber,pageNumberColor
    setPageEdit(){
        pageEdit.setPageEdit(this.getbackGrounColor(),this.getpageDesign(), this.getborderColor(),this.getborderDesign(),
        this.getborderStyle(), this.getborderWidth(), this.getborderRadius(), this.getPageNumber(), this.getpageNumberColor());  
    }


    removeFormat(){
        this.setbackGrounColor('#ffffff');
        this.setpageDesign('none');
        this.setborderColor('#000000',0);
        this.setborderDesign('none');
        this.setborderStyle('solid',0);
        this.setborderWidth(0,0);
        this.setborderRadius(0,0);
        this.setPageNumber('none');
        this.setpageNumberColor('#000000');
        this.setPageEdit();
    }
}
