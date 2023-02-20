import {componentList, pageEdit, container, compomnentBtn, clearEdit, isFullPreemption, IsReadOnly} from './main.js';
import { ComponentCopy,ComponentCopyName } from './ComponentBtn.js';
import Paragraph from './Paragraph.js';
import Topic from './Topic.js';
import Icon from './Icon.js';
import Image from './Image.js'
import List from './List.js';
import ListItem from './ListItem.js';
import ListTopic from './ListTopic.js';
import Table from './Table.js';
import TableCell from './TableCell.js';
import TableHeader from './TableHeader.js';
import TableRow from './TableRow.js';
import Shap from './Shap.js';
import { heighestComponent } from './ParentComponent.js';


export let currentPage;

export function setCurrentPage(value) {
    currentPage = value;
}

let Xcord,Ycord;

export let heighestlowestCmponent = 1082.24;

function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }


export default class Page{

    page;

    paragraphs = [];
    topics = [];
    image = [];
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
        this.setPageNumber(pageNumber);
        this.setpageNumberColor(pageNumberColor);
        this.setIsContentEditable(isContentEditable);
        this.setIsDesignEditable(isDesignEditable);
        this.borderColor = borderColor;
        this.borderStyle = borderStyle;
        this.borderWidth = borderWidth;
        this.borderRadius = borderRadius;
        this.applyEdites();
        this.setpageDesign(pageDesign);
        this.setborderDesign(borderDesign);

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
            this.pageDesign = value;
            this.getPage().style.backgroundImage  = value;
            this.getPage().parentNode.style.backgroundImage  = value;
            this.getPage().parentNode.parentNode.style.backgroundImage  = value;
    };

    setborderDesign(value){
        console.log(value)
        let f = "ss";
        console.log(value.includes('png'))
        if (value.includes('png')) {
            this.getPage().style.borderImage  = `url(${value})`;
        } else {
            this.borderDesign = value;
            if(value != 'none'){
                this.setborderWidth(10,0)
            }
            this.getPage().style.borderImage  = value;
        }




    };


    setbackGrounColor(backGrounColor){
        this.backGrounColor = backGrounColor;
        this.setpageDesign('none');
        this.getPage().style.backgroundColor  =  this.getbackGrounColor();
        this.getPage().parentNode.parentNode.style.backgroundColor  =  this.getbackGrounColor();
    };
    setpageNumberColor(pageNumberColor){
        this.pageNumberColor = pageNumberColor;
        this.getpagenContener().style.color = `${this.getpageNumberColor()}`;
    }


    setborderColor(borderColor,index){
        this.setborderDesign('none');
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




    setPageWidth(){
        let lowestCmponent = 0;

        this.getParagraphs().forEach(e =>{
            let newHeight = e.getYAxis() + e.getHeight();
            if( newHeight > lowestCmponent){
                lowestCmponent = newHeight;
            }
        })
        this.getTopics().forEach(e =>{
            let newHeight = e.getYAxis() + e.getHeight();
            if( newHeight > lowestCmponent){
                lowestCmponent = newHeight;
            }
        })
        this.getImage().forEach(e =>{
            let newHeight = e.getYAxis() + e.getHeight();
            if( newHeight > lowestCmponent){
                lowestCmponent = newHeight;
            }
        })
        this.getIcons().forEach(e =>{
            let newHeight = e.getYAxis() + e.getHeight();
            if( newHeight > lowestCmponent){
                lowestCmponent = newHeight;
            }
        })
        this.getLists().forEach(e =>{
            let newHeight = e.getYAxis() + e.getHeight();
            if( newHeight > lowestCmponent){
                lowestCmponent = newHeight;
            }
        })
        this.getTables().forEach(e =>{
            let newHeight = e.getYAxis() + e.getHeight();
            if( newHeight > lowestCmponent){
                lowestCmponent = newHeight;
            }
        })
        this.getTopicLists().forEach(e =>{
            let newHeight = e.getYAxis() + e.getHeight();
            if( newHeight > lowestCmponent){
                lowestCmponent = newHeight;
            }
        })
        this.getShapes().forEach(e =>{
            let newHeight = e.getYAxis() + e.getHeight();
            if( newHeight > lowestCmponent){
                lowestCmponent = newHeight;
            }
        })

        heighestlowestCmponent = lowestCmponent + 20;
        this.setPageHeight(lowestCmponent + 20);
    }

    setPageHeight(value){
        this.getPage().style.height = `${value}px`;
        this.getPage().parentNode.style.height = `${value + 40}px`;
        this.getPage().parentNode.parentNode.style.height = `${value + 80}px`;
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
    getImage(){
        return this.image;
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
    getTopicLists(){
        return this.topicLists;
    }
    getShapes(){
        return this.shapes;
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
                this.getImage().push(component);
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
        // console.log(ComponentCopy.isLined)
        if (ComponentCopy != null) {
            componentList.getAddComponentList().remove();
            let C = ComponentCopy;
            let component;
            console.log(ComponentCopyName)
            switch (ComponentCopyName) {
                case "Paragraph":
                    console.log("h/////////////////////////")
                    component = new Paragraph(C.text,C.isLined,C.textEffect,C.wordSpace,C.letterSpace,C.lineHeight,
                        C.width,C.height,X,Y,C.zAxis,
                        C.opacity,C.rotation,C.padding,C.skew,
                        C.backGrounColor,C.backGrounDesign,
                        [C.borderColor[0],C.borderColor[1],C.borderColor[2],C.borderColor[3],C.borderColor[4]],
                        C.borderDesign,
                        [C.borderStyle[0],C.borderStyle[1],C.borderStyle[2],C.borderStyle[3],C.borderStyle[4]],
                        [C.borderWidth[0],C.borderWidth[1],C.borderWidth[2],C.borderWidth[3],C.borderWidth[4]],
                        [C.borderRadius[0],C.borderRadius[1],C.borderRadius[2],C.borderRadius[3],C.borderRadius[4]],
                        C.polygon,
                        C.isSizesEditable,C.isDesignEditable,C.isContentEditable);
                    component.addEvents();
                    this.getParagraphs().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
                case "Topic":
                    component = new Topic(C.text,C.topicLevel,C.isLined,C.textEffect,C.wordSpace,C.letterSpace,C.lineHeight,
                        C.width,C.height,X,Y,C.zAxis,
                        C.opacity,C.rotation,C.padding,C.skew,
                        C.backGrounColor,C.backGrounDesign,
                        [C.borderColor[0],C.borderColor[1],C.borderColor[2],C.borderColor[3],C.borderColor[4]],
                        C.borderDesign,
                        [C.borderStyle[0],C.borderStyle[1],C.borderStyle[2],C.borderStyle[3],C.borderStyle[4]],
                        [C.borderWidth[0],C.borderWidth[1],C.borderWidth[2],C.borderWidth[3],C.borderWidth[4]],
                        [C.borderRadius[0],C.borderRadius[1],C.borderRadius[2],C.borderRadius[3],C.borderRadius[4]],
                        C.polygon,
                        C.isSizesEditable,C.isDesignEditable,C.isContentEditable);
                    component.addEvents();
                    this.getTopics().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
                case "Image":
                    component = new Image(C.path,
                        C.blur,C.brightness,C.contrast,C.grayscale,C.hueRotate,C.invert,C.saturate,C.sepia,
                        C.width,C.height,X,Y,C.zAxis,C.opacity,C.rotation,C.padding,C.skew,
                        C.backGrounColor,C.backGrounDesign,
                        [C.borderColor[0],C.borderColor[1],C.borderColor[2],C.borderColor[3],C.borderColor[4]],
                        C.borderDesign,
                        [C.borderStyle[0],C.borderStyle[1],C.borderStyle[2],C.borderStyle[3],C.borderStyle[4]],
                        [C.borderWidth[0],C.borderWidth[1],C.borderWidth[2],C.borderWidth[3],C.borderWidth[4]],
                        [C.borderRadius[0],C.borderRadius[1],C.borderRadius[2],C.borderRadius[3],C.borderRadius[4]],
                        C.polygon,
                        C.isSizesEditable,C.isDesignEditable,C.isContentEditable);
                    component.addEvents();
                    this.getImage().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;


                case "Icon":
                    component = new Icon(C.icon,C.color,C.size,
                            C.width,C.height,X,Y,C.zAxis,C.opacity,C.rotation,C.padding,C.skew,
                            C.backGrounColor,C.backGrounDesign,
                            [C.borderColor[0],C.borderColor[1],C.borderColor[2],C.borderColor[3],C.borderColor[4]],
                            C.borderDesign,
                            [C.borderStyle[0],C.borderStyle[1],C.borderStyle[2],C.borderStyle[3],C.borderStyle[4]],
                            [C.borderWidth[0],C.borderWidth[1],C.borderWidth[2],C.borderWidth[3],C.borderWidth[4]],
                            [C.borderRadius[0],C.borderRadius[1],C.borderRadius[2],C.borderRadius[3],C.borderRadius[4]],
                            C.polygon,
                            C.isSizesEditable,C.isDesignEditable,C.isContentEditable );
                    component.addEvents();
                    this.getIcons().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;

                case "List":
                    component = new List(C.type,C.start,C.styleType,
                        C.width,C.height,X,Y,C.zAxis,C.opacity,C.rotation,C.padding,C.skew,
                        C.backGrounColor,C.backGrounDesign,
                        [C.borderColor[0],C.borderColor[1],C.borderColor[2],C.borderColor[3],C.borderColor[4]],
                        C.borderDesign,
                        [C.borderStyle[0],C.borderStyle[1],C.borderStyle[2],C.borderStyle[3],C.borderStyle[4]],
                        [C.borderWidth[0],C.borderWidth[1],C.borderWidth[2],C.borderWidth[3],C.borderWidth[4]],
                        [C.borderRadius[0],C.borderRadius[1],C.borderRadius[2],C.borderRadius[3],C.borderRadius[4]],
                        C.polygon,
                        C.isSizesEditable,C.isDesignEditable,C.isContentEditable);
                    component.addEvents();
                    C.item.forEach(e => {
                        let curentListItem = new ListItem(e.itemSpace,e.text,e.isLined,
                            e.textEffect,e.wordSpace,e.letterSpace,e.lineHeight,
                            e.opacity,e.rotation,e.padding,e.skew,
                            e.backGrounColor,e.backGrounDesign,
                            [e.borderColor[0],e.borderColor[1],e.borderColor[2],e.borderColor[3],e.borderColor[4]],
                            e.borderDesign,
                            [e.borderStyle[0],e.borderStyle[1],e.borderStyle[2],e.borderStyle[3],e.borderStyle[4]],
                            [e.borderWidth[0],e.borderWidth[1],e.borderWidth[2],e.borderWidth[3],e.borderWidth[4]],
                            [e.borderRadius[0],e.borderRadius[1],e.borderRadius[2],e.borderRadius[3],e.borderRadius[4]],
                            e.polygon,
                            e.isSizesEditable,e.isDesignEditable,e.isContentEditable)
                        curentListItem.addEvents();
                        component.addItem(curentListItem);
                    });
                    this.getLists().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;

                case "Table":
                    component = new Table(C.isCollapse,C.isSticyCol,C.isSticyRow,C.rowSpace,C.colSpace,
                        C.width,C.height,X,Y,C.zAxis,
                        C.opacity,C.rotation,C.padding,C.skew,
                        C.backGrounColor,C.backGrounDesign,
                        [C.borderColor[0],C.borderColor[1],C.borderColor[2],C.borderColor[3],C.borderColor[4]],
                        C.borderDesign,
                        [C.borderStyle[0],C.borderStyle[1],C.borderStyle[2],C.borderStyle[3],C.borderStyle[4]],
                        [C.borderWidth[0],C.borderWidth[1],C.borderWidth[2],C.borderWidth[3],C.borderWidth[4]],
                        [C.borderRadius[0],C.borderRadius[1],C.borderRadius[2],C.borderRadius[3],C.borderRadius[4]],
                        C.polygon,
                        C.isSizesEditable,C.isDesignEditable,C.isContentEditable);
                    component.addEvents();
                    C.rows.forEach((e,i) =>{
                        let currentRow = new TableRow(e.opacity,e.rotation,e.skew,e.isSizesEditable);
                        let curentCell;
                        if(i == 0){
                            e.cells.forEach(el =>{
                                curentCell = new TableHeader(el.cellWidth,
                                    el.text,el.isLined,el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                                    el.opacity,el.rotation,el.padding,el.skew,
                                    el.backGrounColor,el.backGrounDesign,
                                    [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                                    el.borderDesign,
                                    [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                                    [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                                    [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                                    el.polygon,
                                    el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                                    curentCell.addEvents();
                                    currentRow.addCell(curentCell);
                            })
                        }else{
                            e.cells.forEach(el =>{
                                curentCell = new TableCell(el.text,el.isLined,el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                                    el.opacity,el.rotation,el.padding,el.skew,
                                    el.backGrounColor,el.backGrounDesign,
                                    [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                                    el.borderDesign,
                                    [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                                    [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                                    [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                                    el.polygon,
                                    el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                                    curentCell.addEvents();
                                currentRow.addCell(curentCell);
                            })
                        }
                        currentRow.addEvents();
                        component.addRow(currentRow);
                    })
                    this.getTables().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
                case "TopicList":
                    component = new List(C.type,C.start,C.styleType,
                        C.width,C.height,X,Y,C.zAxis,C.opacity,C.rotation,C.padding,C.skew,
                        C.backGrounColor,C.backGrounDesign,
                        [C.borderColor[0],C.borderColor[1],C.borderColor[2],C.borderColor[3],C.borderColor[4]],
                        C.borderDesign,
                        [C.borderStyle[0],C.borderStyle[1],C.borderStyle[2],C.borderStyle[3],C.borderStyle[4]],
                        [C.borderWidth[0],C.borderWidth[1],C.borderWidth[2],C.borderWidth[3],C.borderWidth[4]],
                        [C.borderRadius[0],C.borderRadius[1],C.borderRadius[2],C.borderRadius[3],C.borderRadius[4]],
                        C.polygon,
                        C.isSizesEditable,C.isDesignEditable,C.isContentEditable);
                    component.addEvents();
                    C.item.forEach(e => {
                        let curentListItem = new ListTopic(e.itemSpace,e.text,e.isLined,
                            e.textEffect,e.wordSpace,e.letterSpace,e.lineHeight,
                            e.opacity,e.rotation,e.padding,e.skew,
                            e.backGrounColor,e.backGrounDesign,
                            [e.borderColor[0],e.borderColor[1],e.borderColor[2],e.borderColor[3],e.borderColor[4]],
                            e.borderDesign,
                            [e.borderStyle[0],e.borderStyle[1],e.borderStyle[2],e.borderStyle[3],e.borderStyle[4]],
                            [e.borderWidth[0],e.borderWidth[1],e.borderWidth[2],e.borderWidth[3],e.borderWidth[4]],
                            [e.borderRadius[0],e.borderRadius[1],e.borderRadius[2],e.borderRadius[3],e.borderRadius[4]],
                            e.polygon,
                            e.isSizesEditable,e.isDesignEditable,e.isContentEditable)
                        curentListItem.addEvents();
                        component.addItem(curentListItem);
                    });
                    this.getTopicLists().push(component);
                    this.getPage().appendChild(component.getCompomnent().parentNode);
                    break;
                case "Shap":
                    component = new Shap(C.width,C.height,X,Y,C.zAxis,
                        C.opacity,C.rotation,C.padding,C.skew,
                        C.backGrounColor,C.backGrounDesign,
                        [C.borderColor[0],C.borderColor[1],C.borderColor[2],C.borderColor[3],C.borderColor[4]],
                        C.borderDesign,
                        [C.borderStyle[0],C.borderStyle[1],C.borderStyle[2],C.borderStyle[3],C.borderStyle[4]],
                        [C.borderWidth[0],C.borderWidth[1],C.borderWidth[2],C.borderWidth[3],C.borderWidth[4]],
                        [C.borderRadius[0],C.borderRadius[1],C.borderRadius[2],C.borderRadius[3],C.borderRadius[4]],
                        C.polygon,
                        C.isSizesEditable,C.isDesignEditable,C.isContentEditable);
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
                index = this.getImage().indexOf(component)
                this.getImage().splice(index,1)
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
                console.log("image")
                current = new Image("../project/images/imagWrittiner.jpg",0,0,0,0,0,0,0,0,100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                current.addEvents();
                this.getImage().push(current);
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
                current.newColumn();
                current.newRow();
                this.getTables().push(current);
                this.getPage().appendChild(current.getCompomnent().parentNode);
                break;
            case "TopicList":
                current = new List("topic",0,"disc",100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                current.addEvents();
                current.newItem();
                current.newItem();
                current.newItem();
                this.getLists().push(current);
                this.getPage().appendChild(current.getCompomnent().parentNode);
                break;
            case "Shap":
                current = new Shap(100,100,x,y,0,1,0,5,0,"#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",true,true,true);
                current.addEvents();
                this.getShapes().push(current);
                this.getPage().appendChild(current.getCompomnent().parentNode);
                break;
        }
    }



    insertComponentList = (e) =>{
        if (!IsReadOnly) {
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
    }

    deleteComponenList = (e) =>{
        if (e.target === this.getPage()) {
            clearEdit();
            window.getSelection()?.removeAllRanges();
            // compomnentBtn.clearBlock();
        }
    }

    pageIn = (e) =>{
        if(!IsReadOnly){
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
