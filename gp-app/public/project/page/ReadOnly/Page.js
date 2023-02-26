import {container, isFullPreemption} from './main.js';
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
                this.paragraphs.push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "Topic":
        console.log("pushing topice")
                this.getTopics().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "Image":
                this.getImage().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "Icon":
                this.getIcons().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "List":
                this.getLists().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "Table":
                //isCollapse,isSticyCol,isSticyRow,rowSpace,colSpace,isEmptyCellsHise,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable
                this.getTables().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "TopicList":
                this.getLists().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
            case "Shap":
                this.getShapes().push(component);
                this.getPage().appendChild(component.getCompomnent().parentNode);
                break;
        }
    }


   

}
