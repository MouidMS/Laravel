import { container } from './main.js';
import Page from './Page.js';
import {pageParent,} from "./main.js"



export default class Container extends Page{

    pages = [];
    
    constructor(){
        // backGrounColor,pageDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,pageNumber,pageNumberColor
        super('#ffffff',"none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[0,0,0,0,0],[0,0,0,0,0],"none","#000000",true,true);
    };

    setContainerEdit(backGrounColor,pageDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,pageNumber,pageNumberColor,isDesignEditable,isContentEditable){
        this.setPageNumber(pageNumber);
        this.setpageDesign(pageDesign);
        this.setborderDesign(borderDesign);
        this.setbackGrounColor(backGrounColor);
        this.setpageNumberColor(pageNumberColor);
        this.setborderColor(borderColor);
        this.setborderStyle(borderStyle);
        this.setborderWidth(borderWidth);
        this.setborderRadius(borderRadius);
        this.setIsDesignEditable(isDesignEditable);
        this.setIsContentEditable(isContentEditable);

    }

    addNewPage(backGrounColor,pageDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,pageNumber,pageNumberColor,isDesignEditable,isContentEditable){
        var page = new Page(backGrounColor,pageDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,pageNumber,pageNumberColor,isDesignEditable,isContentEditable);
        this.pages.push(page);
        return page;
    };



    getPages(){
        return this.pages;
    };

    up(page){
        let index = this.getPages().indexOf(page);
        let current = this.getPages()[index];
        console.log(index)
        console.log(index == 0 )
        if (index == 0 ) {}else{
            
            this.getPages()[index] = this.getPages()[index - 1];
            this.getPages()[index - 1] = current;
    
            pageParent.insertBefore(pageParent.children[index],pageParent.children[index - 1]);
            pageParent.children[index - 1].scrollIntoView();

        }
    }
    down = (page) =>{
        let index = this.getPages().indexOf(page);
        let current = this.getPages()[index];
        console.log(index)
        console.log(index == 0 )
        if (index == this.getPages().length - 1 ) {}else{
            
            this.getPages()[index] = this.getPages()[index + 1];
            this.getPages()[index + 1] = current;
    
            pageParent.insertBefore(pageParent.children[index + 1],pageParent.children[index]);
            pageParent.children[index + 1].scrollIntoView();

        }   
    }
    delete = (page) =>{
        let index = this.getPages().indexOf(page);
        
        this.getPages().splice(index,1);
        console.log(pageParent)
        pageParent.removeChild(page.getPage().parentNode.parentNode);


    }



};