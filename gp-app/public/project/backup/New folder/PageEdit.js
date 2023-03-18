import BasicEdit from './BasicEdit.js';
import {container,borderStyle, pagePostion, backDesign, borderDesign} from './main.js'
import { currentPage } from './Page.js';

export default class PageEdit extends BasicEdit{
    pageEdit;
    editAll;
    pageNumber;
    pageNumberColor;
    up;
    down;
    delete;
    removeFormat;

    
    constructor(){
        super();
        this.prepairPageEdit();
    }

    setev(){}

    prepairPageEdit(){
        console.log('Create PageEdits')
        this.pageEdit = document.createElement("div");
        this.pageEdit.id = 'pageEdit';
        
        let component = document.createElement("h4");
        component.id = 'topic';
        component.innerText = "All Pages";
        this.pageEdit.appendChild(component);

        this.editAll = document.createElement("input");
        this.editAll.setAttribute("type", "checkbox");
        this.editAll.addEventListener('change',this.chAll);
        this.pageEdit.appendChild(this.editAll);

        
        this.removeFormat = document.createElement("button");
        this.removeFormat.innerText = "removeFormat";
        this.removeFormat.addEventListener('click',this.RemoveFormat);
        this.pageEdit.appendChild(this.removeFormat);

        this.up = document.createElement("button");
        this.up.innerText = "Up";
        this.up.addEventListener('click',this.Up);
        this.pageEdit.appendChild(this.up);

        this.down = document.createElement("button");
        this.down.innerText = "Down";
        this.down.addEventListener('click',this.Down);
        this.pageEdit.appendChild(this.down);

        this.delete = document.createElement("button");
        this.delete.innerText = "Delete"
        this.delete.addEventListener('click',this.Delete);
        this.pageEdit.appendChild(this.delete);


        component = document.createElement("h4");
        component.id = 'topic';
        component.innerText = "Page";
        this.pageEdit.appendChild(component);
        
        this.setbackGrounColor(document.createElement('input'));
        this.getbackGrounColor().setAttribute("type", "color");
        this.getbackGrounColor().addEventListener('change',this.chBackC);
        this.pageEdit.appendChild(this.getbackGrounColor());
      
        
        component = document.createElement("h5");
        component.id = 'topic';
        component.innerText = "Number";
        this.pageEdit.appendChild(component);
        
        
        this.pageNumber = document.createElement("select");
        for (let index = 0; index < pagePostion.length; index++) {
            component = document.createElement("option");
            component.value = pagePostion[index];
            component.innerText = pagePostion[index];
            this.pageNumber.appendChild(component);
            
        }
        this.pageNumber.addEventListener('change',this.chNumberP);
        this.pageEdit.appendChild(this.pageNumber);
        
        this.pageNumberColor = document.createElement('input');
        this.getpageNumberColor().setAttribute("type", "color");
        this.getpageNumberColor().addEventListener('change',this.chPNC);
        this.pageEdit.appendChild(this.getpageNumberColor());

        component = document.createElement("h4");
        component.id = 'topic';
        component.innerText = "Border";
        this.pageEdit.appendChild(component);


        this.setborderColor(document.createElement("input"));
        this.getborderColor().setAttribute("type", "color");
        this.getborderColor().addEventListener('change',this.chBordeC);
        this.pageEdit.appendChild(this.getborderColor());


        component = document.createElement("h5");
        component.id = 'topic';
        component.innerText = "Style";
        this.pageEdit.appendChild(component);

        this.setborderStyle(document.createElement("select"));
        for (let index = 0; index < borderStyle.length; index++) {
            component = document.createElement("option");
            component.value = borderStyle[index];
            component.innerText = borderStyle[index];
            this.getborderStyle().appendChild(component);
            
        }
        this.getborderStyle().addEventListener('change',this.chBorderS);
        this.pageEdit.appendChild(this.getborderStyle());

        component = document.createElement("h5");
        component.id = 'topic';
        component.innerText = "width";
        this.pageEdit.appendChild(component);

        this.setborderWidth(document.createElement("input"));
        this.getborderWidth().setAttribute("type", "number");
        this.getborderWidth().setAttribute("min", "0");
        this.getborderWidth().setAttribute("max", "20");
        this.getborderWidth().addEventListener('change',this.chBorderW);
        this.pageEdit.appendChild(this.getborderWidth());

        this.setBorder(document.createElement("select"));
        this.getborder().insertAdjacentHTML("beforeend", `<option value="0">All</option>`);
        this.getborder().insertAdjacentHTML("beforeend", `<option value="1">Top</option>`);
        this.getborder().insertAdjacentHTML("beforeend", `<option value="2">Right</option>`);
        this.getborder().insertAdjacentHTML("beforeend", `<option value="3">Buttom</option>`);
        this.getborder().insertAdjacentHTML("beforeend", `<option value="4">Left</option>`);
        this.getborder().addEventListener('change',this.setBorderEdits);
        this.pageEdit.appendChild(this.getborder());

        component = document.createElement("h5");
        component.id = 'topic';
        component.innerText = "raduse";
        this.pageEdit.appendChild(component);

        this.setborderRadius(document.createElement("input"));
        this.getborderRadius().setAttribute("type", "number");
        this.getborderRadius().setAttribute("min", "0");
        // this.getborderRadius().setAttribute("max", "20");
        this.getborderRadius().addEventListener('change',this.chBorderR);
        this.pageEdit.appendChild(this.getborderRadius());

        
        this.setCorner(document.createElement("select"));
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="0">All</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="1">top-left</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="2">top-right</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="3">buttom-right</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="4">buttom-left</option>`);
        this.getCorner().addEventListener('change',this.setCornerEdits);
        this.pageEdit.appendChild(this.getCorner());

        
        this.setborderDesign(document.createElement("select"));
        for (let index = 0; index < borderDesign.length; index++) {
            component = document.createElement("option");
            component.value = borderDesign[index];
            component.innerText = borderDesign[index];
            this.getborderDesign().appendChild(component);
            
        }
        this.getborderDesign().addEventListener('change',this.chBorderDesign);
        this.pageEdit.appendChild(this.getborderDesign());

        this.setbackGrounDesign(document.createElement("select"));
        for (let index = 0; index < backDesign.length; index++) {
            component = document.createElement("option");
            component.value = backDesign[index];
            component.innerText = backDesign[index];
            this.getbackGrounDesign().appendChild(component);
            
        }
        this.getbackGrounDesign().addEventListener('change',this.chBackDesign);
        this.pageEdit.appendChild(this.getbackGrounDesign());

        

        component = document.createElement('div');
        component.id = "space";
        this.pageEdit.appendChild(component);


     

    }
    
    
    getPageEdit(){
        return this.pageEdit;
    }            
    geteditAll(){
        return this.editAll;
    };
    getpageNumber(){
        return this.pageNumber;
    };
    
    getup(){
        return this.up ;
    };
    getdown(){
        return this.down;
    };
    getdoublicat(){
        return this.doublicat;
    };
    getdelete(){
        return this.delete;
    };
    getpageNumberColor(){
        return this.pageNumberColor;
    }

    
    
    setPageEdit(backGrounColor,pageDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,pageNumber,pageNumberColor){
            let borderIndex = this.getborder().value;
            let cornerIndex = this.getCorner().value;

            this.getbackGrounColor().value = backGrounColor;
            // if (i == 0) {
            
            //     this.getborderColor().value = '#000000';
            //     this.getborderWidth().value = 0;
            //     this.getborderRadius().value = 0;
                
            //         for (let index = 0; index < this.getborderStyle().children.length; index++) {
            //                 if (this.getborderStyle().children[index].value == 'none') {
            //                         this.getborderStyle().children[index].selected = true;
            //                         break;
            //                     }
            //                 }
            // } else {
                this.getborderColor().value = borderColor[borderIndex];
                this.getborderWidth().value = borderWidth[borderIndex];
                this.getborderRadius().value = borderRadius[cornerIndex];
                
                    for (let index = 0; index < this.getborderStyle().children.length; index++) {
                            if (this.getborderStyle().children[index].value == borderStyle[borderIndex]) {
                                    this.getborderStyle().children[index].selected = true;
                                    break;
                                }
                            }
                
            // }


            this.getpageNumberColor().value = pageNumberColor;
        
                
                
            //         for (let index = 0; index <  this.getborder().children.length; index++) {
            // if ( this.getborder().children[index].value == border) {
            //         this.getborder().children[index].selected = true;
            //         break;
            //     }
            // }
        
            for (let index = 0; index < this.getpageNumber().children.length; index++) {
                    if (this.pageNumber.children[index].value == pageNumber) {
                            this.pageNumber.children[index].selected = true;
                            break;
                        }
                    }

                    
            for (let index = 0; index < this.getborderDesign().children.length; index++) {
                    if (this.getborderDesign().children[index].value == borderDesign) {
                            this.getborderDesign().children[index].selected = true;
                            break;
                        }
            }

            for (let index = 0; index < this.getbackGrounDesign().children.length; index++) {
                    if (this.getbackGrounDesign().children[index].value == pageDesign) {
                            this.getbackGrounDesign().children[index].selected = true;
                            break;
                        }
            }


    }

                
            
                
    

    setBorderEdits = (e) =>{
        let borderIndex = this.getborder().value;
        this.getborderColor().value = currentPage.getborderColor()[borderIndex];
        this.getborderWidth().value = currentPage.getborderWidth()[borderIndex];
        for (let index = 0; index < this.getborderStyle().children.length; index++) {
            if (this.getborderStyle().children[index].value == currentPage.getborderStyle()[borderIndex]) {
                    this.getborderStyle().children[index].selected = true;
                    break;
            }
        }
    }



    setCornerEdits = (e) =>{
        let cornerIndex = this.getCorner().value;
        this.getborderRadius().value = currentPage.getborderRadius()[cornerIndex];
    }



    chAll = (e) =>{
        console.log(this.geteditAll())
        if(!this.geteditAll().checked) {
            console.log('one');
            // currentPage.setPageEdit();
            this.getup().disabled = false;
            this.getdown().disabled = false;
            this.getdelete().disabled = false;
        }else {
            console.log('all');
            // container.setPageEdit();
            this.getup().disabled = true;
            this.getdown().disabled = true;
            this.getdelete().disabled = true;                
        }

    }

    RemoveFormat = (e)=>{
        e.stopPropagation();
        if (!this.geteditAll().checked) {
            console.log("one");
            currentPage.removeFormat();         
        } else {
            console.log("all");
            container.removeFormat();
            for (let index = 0; index < container.getPages().length; index++) {
                container.getPages()[index].removeFormat();
            }
        }
    }

    Up = (e) =>{
        e.stopPropagation();
        container.up(currentPage)
    }
    Down = (e) =>{
        e.stopPropagation();
        container.down(currentPage)
    }
    Delete = (e) =>{
        e.stopPropagation();
        container.delete(currentPage)
    }
    chBackC = (e) =>{

        if (!this.geteditAll().checked) {
            console.log("one");
            currentPage.setbackGrounColor(this.getbackGrounColor().value);         
        } else {
            console.log("all");
            container.setbackGrounColor(this.getbackGrounColor().value);
            for (let index = 0; index < container.getPages().length; index++) {
                container.getPages()[index].setbackGrounColor(this.getbackGrounColor().value);
            }
        }
    }
    
    chNumberP = (e) =>{
        if (!this.geteditAll().checked) {
            console.log("one");
            currentPage.setPageNumber(this.getpageNumber().value);         
        } else {
            console.log("all");
            container.setPageNumber(this.getpageNumber().value);
            for (let index = 0; index < container.getPages().length; index++) {
                container.getPages()[index].setPageNumber(this.getpageNumber().value);
            }
        }
    }

    chPNC = (e) =>{
        if (!this.geteditAll().checked) {
            console.log("one");
            currentPage.setpageNumberColor(this.getpageNumberColor().value);         
        } else {
            console.log("all");
            container.setpageNumberColor(this.getpageNumberColor().value);
            for (let index = 0; index < container.getPages().length; index++) {
                container.getPages()[index].setpageNumberColor(this.getpageNumberColor().value);
            }
        }
        
    }

    chBordeC = (e) =>{
        if (!this.geteditAll().checked) {
            console.log("one");
          
            currentPage.setborderColor(this.getborderColor().value,this.getborder().value);
                  
        } else {
            console.log("all");
            container.setborderColor(this.getborderColor().value,this.getborder().value);
            for (let index = 0; index < container.getPages().length; index++) {
                container.getPages()[index].setborderColor(this.getborderColor().value,this.getborder().value);
            }
        }

    }
    chBorderS = (e) =>{
         if (!this.geteditAll().checked) {
            console.log("one");
            currentPage.setborderStyle(this.getborderStyle().value,this.getborder().value);         
        } else {
            console.log("all");
            container.setborderStyle(this.getborderStyle().value,this.getborder().value);
            for (let index = 0; index < container.getPages().length; index++) {
                container.getPages()[index].setborderStyle(this.getborderStyle().value,this.getborder().value);
            }
        }
    }
    chBorderW = (e) =>{
         if (!this.geteditAll().checked) {
            console.log(`one`);
            currentPage.setborderWidth(this.getborderWidth().value,this.getborder().value);         
        } else {
            console.log("all");
            container.setborderWidth(this.getborderWidth().value,this.getborder().value);
            for (let index = 0; index < container.getPages().length; index++) {
                container.getPages()[index].setborderWidth(this.getborderWidth().value,this.getborder().value);
            }
        }
    }
    chBorderR = (e) =>{
         if (!this.geteditAll().checked) {
            console.log("one");
            currentPage.setborderRadius(this.getborderRadius().value,this.getCorner().value);         
        } else {
            console.log("all");
            container.setborderRadius(this.getborderRadius().value,this.getCorner().value);
            for (let index = 0; index < container.getPages().length; index++) {
                container.getPages()[index].setborderRadius(this.getborderRadius().value,this.getCorner().value);
            }
        }
    }

    
    
    

    chBorderDesign = (e) =>{
        if (!this.geteditAll().checked) {
            console.log("one");
            currentPage.setborderDesign(this.getborderDesign().value);         
        } else {
            console.log("all");
            container.setborderDesign(this.getborderDesign().value);
            for (let index = 0; index < container.getPages().length; index++) {
                container.getPages()[index].setborderDesign(this.getborderDesign().value);
            }
        }
    }
    chBackDesign = (e) =>{
        if (!this.geteditAll().checked) {
            console.log("one");
            currentPage.setbackGrounDesign(this.getbackGrounDesign().value);         
        } else {
            console.log("all");
            container.setbackGrounDesign(this.getbackGrounDesign().value);
            for (let index = 0; index < container.getPages().length; index++) {
                container.getPages()[index].setbackGrounDesign(this.getbackGrounDesign().value);
            }
        }
    }

}