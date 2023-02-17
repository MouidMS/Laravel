import BasicEdit from './BasicEdit.js';
import {container} from './main.js'
import { currentPage } from './Page.js';
import {pagePostion,borderStyle,gradient,borderImage} from "./Info/EditData.js";

export default class PageEdit extends BasicEdit{
    pageEdit;
    editAll;
    pageNumber;
    pageNumberColor;
    up;
    down;
    delete;
    removeFormat;

    isContentEditable;
    isDesignEditable;

    
    constructor(){
        super();
        this.prepairPageEdit();
    }

    setev(){}


    // <div class="FS-Format_Page">
// </div>

    prepairPageEdit(){

        
        console.log('Create PageEdits')
        this.pageEdit = document.createElement("div");
        this.pageEdit.id = 'pageEdit';
        this.pageEdit.classList.add('FS-Format_Page');

         /* <div class="FS-page">
        <h4>Page</h4>
        <!-- /////////// Up Down Delete /////////////// -->
        <button class="FS-butt tooltip"><span class="FS-tooltiptext">Page Up</span><i class="fa-solid fa-arrow-up"></i></button>
        <button class="FS-butt tooltip"><span class="FS-tooltiptext">Page Down</span><i class="fa-solid fa-arrow-down"></i></button>
        <button class="FS-butt tooltip FS-PD"><span class="FS-tooltiptext">Delete Page</span><i class="fa-solid fa-trash"></i></button>
    </div> */
        let FS_page = document.createElement("div");
        FS_page.classList.add('FS-page');
        FS_page.insertAdjacentHTML("beforeend", `<h4>Page</h4>`);

         this.up = document.createElement("button");
        this.up.insertAdjacentHTML("beforeend", `<span class="FS-tooltiptext">Page Up</span><i class="fa-solid fa-arrow-up"></i>`);
        this.up.classList.add('FS-butt','tooltip');
        this.up.addEventListener('click',this.Up);
        FS_page.appendChild(this.up);

        this.down = document.createElement("button");
        this.down.insertAdjacentHTML("beforeend", `<span class="FS-tooltiptext">Page Down</span><i class="fa-solid fa-arrow-down"></i>`);
        this.down.classList.add('FS-butt','tooltip');
        this.down.addEventListener('click',this.Down);
        FS_page.appendChild(this.down);

        this.delete = document.createElement("button");
        this.delete.insertAdjacentHTML("beforeend", `<span class="FS-tooltiptext">Delete Page</span><i class="fa-solid fa-trash"></i>`);
        this.delete.classList.add('FS-butt','tooltip');
        this.delete.addEventListener('click',this.Delete);
        FS_page.appendChild(this.delete);

        this.pageEdit.appendChild(FS_page);

        //=====================================================================================================================

        

    //        <div class="FS-color ">
    //     <h4>Color Page</h4>
    //     <div class="FS-info">
    //         <!-- /////////// color /////////////// -->
    //         <input type="color">
    //         <h4>Color</h4>
    //     </div>
    //     <h4>All Pages</h4>
    //     <!-- /////////// All Pages /////////////// -->
    //     <div class="tooltip FS-checkboxes ">
    //         <label><span>Pages :</span><input type="checkbox"></label>
    //     </div>
    // </div> 
        
    this.editAll = document.createElement("input");
    this.editAll.setAttribute("type", "checkbox");
    this.editAll.addEventListener('change',this.chAll);

    this.setbackGrounColor(document.createElement('input'));
    this.getbackGrounColor().setAttribute("type", "color");
    this.getbackGrounColor().addEventListener('change',this.chBackC);

    let FS_color = document.createElement('div')
    FS_color.classList.add('FS-color');
    FS_color.insertAdjacentHTML("beforeend", `<h4>Color Page</h4>`);

    let FS_info = document.createElement('div');
    FS_info.appendChild(this.getbackGrounColor());
    FS_info.classList.add('FS-info');
    FS_info.insertAdjacentHTML("beforeend", `<h4>Color</h4>`);
    FS_color.appendChild(FS_info);

    FS_color.insertAdjacentHTML("beforeend", `<h4>All Pages</h4>`);

    let FS_checkboxes = document.createElement('div');
    FS_checkboxes.classList.add('tooltip','FS-checkboxes');

    let FS_checkboxesL = document.createElement('label');
    FS_checkboxesL.insertAdjacentHTML("beforeend", `<span>Pages :</span>`);
    FS_checkboxesL.appendChild(this.editAll);
    FS_checkboxes.appendChild(FS_checkboxesL);
    FS_color.appendChild(FS_checkboxes);


    this.pageEdit.appendChild(FS_color);
//=========================================================================================

 /* <div class="FS-format">
        <h4>Is Editable ?</h4>
        <!-- /////////// Is Editable /////////////// -->
        <div class="FS-checkboxes">
            <label><span>Design :</span><input type="checkbox"></label>
            <label><span>Content :</span><input type="checkbox"></label>
        </div>
        <hr>
        <h4>Number Page</h4>


        <!-- /////////// Page Number /////////////// -->
        <label for="">Page :
            <select id="" class="FS-NumPage ">
                <option value="">Top-right</option>
                <option value="">Top-Left</option>
                <option value="">Bottom-right</option>
                <option value="">Bottom-Left</option>

            </select> <br>
        </label>

        <!-- /////////// Color Number /////////////// -->
        <label for="">Color :
            <input type="color" id="" class="FS-NumColor tooltip">
        </label>
    </div> */

    this.isContentEditable = document.createElement("input");
    this.isContentEditable.setAttribute("type", "checkbox");
    this.isContentEditable.addEventListener("click",this.changeisContentEditable);

    this.isDesignEditable = document.createElement("input");
    this.isDesignEditable.setAttribute("type", "checkbox");
    this.isDesignEditable.addEventListener("click",this.changeisDesignEditable);

    let FS_format = document.createElement('div');
    FS_format.classList.add('FS-format');
    FS_format.insertAdjacentHTML("beforeend", `<h4>Is Editable ?</h4>`);

    let FS_Fcheckboxes = document.createElement('div');
        FS_Fcheckboxes.classList.add('FS-checkboxes');

    let FS_FcheckboxesL1  = document.createElement('label');
    FS_FcheckboxesL1.insertAdjacentHTML("beforeend", `<span>Design :</span>`);
    FS_FcheckboxesL1.appendChild(this.isDesignEditable);
    FS_Fcheckboxes.appendChild(FS_FcheckboxesL1);

    let FS_FcheckboxesL2  = document.createElement('label');
    FS_FcheckboxesL2.insertAdjacentHTML("beforeend", `<span>Content :</span>`);
    FS_FcheckboxesL2.appendChild(this.isContentEditable);
    FS_Fcheckboxes.appendChild(FS_FcheckboxesL2);

    FS_format.appendChild(FS_Fcheckboxes);
    FS_format.insertAdjacentHTML("beforeend", `<hr>`);
    FS_format.insertAdjacentHTML("beforeend", `<h4>Number Page</h4>`);

    this.pageNumber = document.createElement("select");
    pagePostion.forEach(e =>{
        this.pageNumber.insertAdjacentHTML("beforeend", `<option value="${e}">${e}</option>`);
    })
    this.pageNumber.addEventListener('change',this.chNumberP);
    this.pageNumber.classList.add('FS-NumPage');
    

    this.pageNumberColor = document.createElement('input');
    this.getpageNumberColor().setAttribute("type", "color");
    this.getpageNumberColor().addEventListener('change',this.chPNC);
    this.pageNumberColor.classList.add('FS-NumColor','tooltip');

    let labelbn = document.createElement('label');
    labelbn.insertAdjacentHTML("beforeend", `Page :`);
    labelbn.appendChild(this.pageNumber);
    labelbn.insertAdjacentHTML("beforeend", `<br>`);
    
    let labelbc = document.createElement('label');
    labelbc.insertAdjacentHTML("beforeend", `Color :`);
    labelbc.appendChild(this.pageNumberColor);

    FS_format.appendChild(labelbn);
    FS_format.appendChild(labelbc);

    this.pageEdit.appendChild(FS_format);
//=========================================================================================================

 /* <div class="FS-border">
        <h4>Border</h4>
        <div class="FS-border-col">
            <!-- /////////// Color Border /////////////// -->
            <label for="">Color :
                <input type="color" id="" class="FS-colorBorder">
            </label>
            <!-- /////////// Style Border /////////////// -->
            <label for="">Style :
                <select class="FS-borderStyle">
                    <option value="">---------</option>
                    <option value="">_________</option>
                </select>
            </label>


            <div class="FS-border-row">
                <!-- /////////// Width /////////////// -->
                <label for="" class="FS-WidthLabel">Width :
                    <input type="text" class="FS-NumBorder1" value="0" maxlength="3">
                </label>
                <!-- /////////// Border /////////////// -->
                <label for="" class="FS-borderLabel">Border :
                    <select id="" class="FS-borderSelect">
                        <option value="">Top</option>
                        <option value="">Bottom</option>
                        <option value="">Right</option>
                        <option value="">Left</option>
                    </select>
                </label>
            </div>

            <div class="FS-border-row">
                <!-- /////////// Degree /////////////// -->
                <label for="">Degree :
                    <input type="text" class="FS-NumBorder2" value="0" maxlength="3">
                </label>
                <!-- /////////// Radius /////////////// -->
                <label for="">Radius :
                    <select id="" class="FS-RadiusSelect"> 
                        <option value="">Top-right</option>
                        <option value="">Top-Left</option>
                        <option value="">Bottom-right</option>
                        <option value="">Bottom-Left</option>
                    </select>
                </label>
            </div>
        </div>
    </div> */

    let FS_border = document.createElement('div');
    FS_border.classList.add('FS-border');
    FS_border.insertAdjacentHTML("beforeend", `<h4>Border</h4>`);

    // let FS_border_col = document.createElement('');
    
    this.setborderColor(document.createElement("input"));
    this.getborderColor().setAttribute("type", "color");
    this.getborderColor().addEventListener('change',this.chBordeC);
    this.getborderColor().classList.add('FS-colorBorder');

    this.setborderStyle(document.createElement("select"));
    borderStyle.forEach(e =>{
        this.getborderStyle().insertAdjacentHTML("beforeend", `<option value="${e}">${e}</option>`);
    })
    this.getborderStyle().addEventListener('change',this.chBorderS);
    this.getborderStyle().classList.add('FS-borderStyle');

    
    let FS_border_col = document.createElement('div');
    FS_border_col.classList.add('FS-border-col');
    
    let FS_border_colL1 = document.createElement('label');
    FS_border_colL1.insertAdjacentHTML("beforeend", `Color :`);
    FS_border_colL1.appendChild(this.getborderColor());
    FS_border_col.appendChild(FS_border_colL1);


    let FS_border_colL2 = document.createElement('label');
    FS_border_colL2.insertAdjacentHTML("beforeend", `Style :`);
    FS_border_colL2.appendChild(this.getborderStyle());
    FS_border_col.appendChild(FS_border_colL2);


    
    



    
    this.setborderWidth(document.createElement("input"));
    this.getborderWidth().setAttribute("type", "number");
    this.getborderWidth().setAttribute("min", "0");
    this.getborderWidth().setAttribute("max", "20");
    this.getborderWidth().addEventListener('change',this.chBorderW);
    this.getborderWidth().classList.add('FS-NumBorder1');

    this.setBorder(document.createElement("select"));
    this.getborder().insertAdjacentHTML("beforeend", `<option value="0">All</option>`);
    this.getborder().insertAdjacentHTML("beforeend", `<option value="1">Top</option>`);
    this.getborder().insertAdjacentHTML("beforeend", `<option value="2">Right</option>`);
    this.getborder().insertAdjacentHTML("beforeend", `<option value="3">Buttom</option>`);
    this.getborder().insertAdjacentHTML("beforeend", `<option value="4">Left</option>`);
    this.getborder().addEventListener('change',this.setBorderEdits);
    this.getborder().classList.add('FS-borderSelect');

    let FS_border_row1 = document.createElement('div');
    FS_border_row1.classList.add('FS-border-row');

    let FS_border_row1L1 = document.createElement('label');
    FS_border_row1L1.insertAdjacentHTML("beforeend", `Width :`);
    FS_border_row1L1.appendChild(this.getborderWidth());
    FS_border_row1L1.classList.add('FS-WidthLabel');
    FS_border_row1.appendChild(FS_border_row1L1);

    let FS_border_row1L2  =document.createElement('label');
    FS_border_row1L2.insertAdjacentHTML("beforeend", `Border :`);
    FS_border_row1L2.appendChild(this.getborder());
    // FS_border_row1L2.classList.add('FS-borderLabel');
    FS_border_row1.appendChild( FS_border_row1L2);

    FS_border_col.appendChild(FS_border_row1);




    
    this.setborderRadius(document.createElement("input"));
    this.getborderRadius().setAttribute("type", "number");
    this.getborderRadius().setAttribute("min", "0");
    // this.getborderRadius().setAttribute("max", "20");
    this.getborderRadius().addEventListener('change',this.chBorderR);
    this.getborderRadius().classList.add('FS-NumBorder2');

    
    this.setCorner(document.createElement("select"));
    this.getCorner().insertAdjacentHTML("beforeend", `<option value="0">All</option>`);
    this.getCorner().insertAdjacentHTML("beforeend", `<option value="1">top-left</option>`);
    this.getCorner().insertAdjacentHTML("beforeend", `<option value="2">top-right</option>`);
    this.getCorner().insertAdjacentHTML("beforeend", `<option value="3">buttom-right</option>`);
    this.getCorner().insertAdjacentHTML("beforeend", `<option value="4">buttom-left</option>`);
    this.getCorner().addEventListener('change',this.setCornerEdits);
    this.getCorner().classList.add('FS-RadiusSelect');


    let FS_border_row2 = document.createElement('div');
    FS_border_row2.classList.add('FS-border-row');

    let FS_border_row2L1 = document.createElement('label');
    FS_border_row2L1.insertAdjacentHTML("beforeend", `Degree :`);
    FS_border_row2L1.appendChild(this.getborderRadius());
    FS_border_row2.appendChild(FS_border_row2L1);


    let FS_border_row2L2 = document.createElement('label');
    FS_border_row2L2.insertAdjacentHTML("beforeend", `Radius :`);
    FS_border_row2L2.appendChild(this.getCorner());
    FS_border_row2.appendChild(FS_border_row2L2);


    FS_border_col.appendChild(FS_border_row2);

    FS_border.appendChild(FS_border_col);

    this.pageEdit.appendChild(FS_border);
    //==============================================================================

    

    //     <div class="FS-ReadyDesign">
    //     <h4>Format</h4>
    //     <!-- /////////// Remove Format /////////////// -->
    //     <button class="FS-butt FS-RF"><span style="color: red;">Remove</span> Format</button>
    //     <hr>
    //     <h4>Ready Design</h4>
    //     <!-- /////////// Ready Design /////////////// -->
    //     <label for="">Border :
    //         <select  class="FS-ReadyDesignBorder">
    //             <option value="">Default</option>
    //         </select>
    //     </label>
    //     <!-- /////////// Ready Page /////////////// -->
    //     <label for="">Pages :
    //         <select  class="FS-ReadyDesignPages">
    //             <option value="">Default</option>
    //         </select>
    //     </label>
    // </div> 

      
    this.removeFormat = document.createElement("button");
    this.removeFormat.addEventListener('click',this.RemoveFormat);
    this.removeFormat.classList.add('FS-butt','FS-RF');
    this.removeFormat.insertAdjacentHTML("beforeend", `<span style="color: red;">Remove</span> Format`);
    
    let FS_ReadyDesign = document.createElement('div');
    FS_ReadyDesign.insertAdjacentHTML("beforeend", `<h4>Format</h4>`);
    FS_ReadyDesign.classList.add('FS-ReadyDesign');
    FS_ReadyDesign.appendChild(this.removeFormat);
    FS_ReadyDesign.insertAdjacentHTML("beforeend", `<hr>`);
    FS_ReadyDesign.insertAdjacentHTML("beforeend", `<h4>Ready Design</h4>`);


    
    this.setborderDesign(document.createElement("select"));
    this.getborderDesign().insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
    borderImage.forEach(e =>{
        this.getborderDesign().insertAdjacentHTML("beforeend", `<option value="${e[1]}">${e[0]}</option>`);
    })
    gradient.forEach(e =>{
        this.getborderDesign().insertAdjacentHTML("beforeend", `<option value="${e[1]}">${e[0]}</option>`);
    })
    this.getborderDesign().addEventListener('change',this.chBorderDesign);
    this.getborderDesign().classList.add('FS-ReadyDesignBorder');

    

    this.setbackGrounDesign(document.createElement("select"));
    this.getbackGrounDesign().insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
    gradient.forEach(e =>{
        this.getbackGrounDesign().insertAdjacentHTML("beforeend", `<option value="${e[1]}">${e[0]}</option>`);
    })
    this.getbackGrounDesign().addEventListener('change',this.chBackDesign);
    this.getbackGrounDesign().classList.add('FS-ReadyDesignPages');


    let FS_ReadyDesignL1 = document.createElement('label');
    FS_ReadyDesignL1.insertAdjacentHTML("beforeend", `Border :`);
    FS_ReadyDesignL1.appendChild(this.getborderDesign());
    FS_ReadyDesign.appendChild(FS_ReadyDesignL1);

    let FS_ReadyDesignL2 = document.createElement('label');
    FS_ReadyDesignL2.insertAdjacentHTML("beforeend", `Pages :`);
    FS_ReadyDesignL2.appendChild(this.getbackGrounDesign());
    FS_ReadyDesign.appendChild(FS_ReadyDesignL2);
    
    
    this.pageEdit.appendChild(FS_ReadyDesign);



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
    getIsContentEditable(){return this.isContentEditable};
    getIsDesignEditable(){return this.isDesignEditable};

    
    
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

    changeisContentEditable = (e) =>{
        currentPage.setIsContentEditable(this.getIsContentEditable().checked);
    }
    changeisDesignEditable = (e) =>{
        currentPage.setIsDesignEditable(this.getIsDesignEditable().checked);
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
            currentPage.setpageDesign(this.getbackGrounDesign().value);         
        } else {
            console.log("all");
            container.setpageDesign(this.getbackGrounDesign().value);
            for (let index = 0; index < container.getPages().length; index++) {
                container.getPages()[index].setpageDesign(this.getbackGrounDesign().value);
            }
        }
    }

}