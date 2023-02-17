import ParentComponent from "./ParentComponent.js";
import {compomnentBtn, componentList, isFullPreemption, IsReadOnly} from "./main.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag,setIsSupComponent,setCurrentComponentParent,setCurrentComponentParentFlag,currentComponentParent,currentComponentParentFlag} from "./Component.js";
import { compInFlag } from "./ParentComponent.js";
import TableRow from "./TableRow.js";


export default class Table extends ParentComponent{

    isCollapse;
    isSticyCol;
    isSticyRow;
    rowSpace;
    colSpace;

    rows = [];

    constructor(isCollapse,isSticyCol,isSticyRow,rowSpace,colSpace,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable){
        super(width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
        this.setCompomnent(this.prepairComponent());
        this.applyparentComponentEdites();
        this.applyComponentEdit(this);
        this.isCollapse = isCollapse;
        this.isSticyCol = isSticyCol;
        this.isSticyRow = isSticyRow;
        this.rowSpace = rowSpace;
        this.colSpace = colSpace;
        this.applyTableEdit();
        console.log('table');
    };

    applyTableEdit(){
        this.setIsCollapse(this.getIsCollapse());
        this.setIsSticyCol(this.getIsSticyCol());
        this.setIsSticyRow(this.getIsSticyRow());
        this.setRowSpace(this.getRowSpace());
        this.setColSpace(this.getColSpace());
    }

    prepairComponent(){
        let comp = document.createElement('table');
        comp.classList.add('table');
        comp.classList.add('component');
        // if (isFullPreemption) {
        // } else {
        //     if (this.getIsContentEditable()) {
        //     }
        // }
        let current = document.createElement('div');
        current.classList.add('parentComponent');
        current.appendChild(comp);
        return comp;
    };


    newColumn(){
        if (this.getRows().length == 0) {
            this.newRow(1,0,0,true);
        };
        this.getRows().forEach(e =>{
            console.log("workyyyy///=/=/==/=//=/=")
            let cellType;
            if (this.getRows()[0] == e) {
                cellType = true;
            } else {
                cellType = false;
            }
            e.newCell(cellType);
        })
    }
    deleteColumn(){
        this.getRows().forEach(e =>{
            e.deleteCell();
        })
    }



    addRow(value){
        this.getRows().push(value);
        this.getCompomnent().appendChild(value.getCompomnent());
    }
    newRow(){
        let currentRow = new TableRow(1,0,0,true);
            currentRow.addEvents();
            this.getRows().push(currentRow);
            this.getCompomnent().appendChild(currentRow.getCompomnent());
            let cellNum;
            if (this.getRows()[0].getCells().length == 0) {
                cellNum = 1;
            } else {
                cellNum = this.getRows()[0].getCells().length;
            };
            let cellType;
            if (this.getRows()[0] == currentRow) {
                cellType = true;
            } else {
                cellType = false;
            }
            for (let index = 0; index < cellNum; index++) {
                currentRow.newCell(cellType);
            }
    }
    deleteRow(){
        if (this.getRows().length > 1) {
            this.getRows().splice(-1,1);
            this.getCompomnent().removeChild(this.getCompomnent().lastChild);
        }
    }


    setIsCollapse(value){
        this.isCollapse = value;
        console.log(value);
        if (value) {
            this.getCompomnent().style.borderCollapse = "collapse";
        } else {
            this.getCompomnent().style.borderCollapse = "separate";
        }
    }
    setIsSticyCol(value){
        this.isSticyCol = value;
        if (value) {
            this.getCompomnent().classList.add('sticyCol');
        } else {
            this.getCompomnent().classList.remove('sticyCol');
        }
    }
    setIsSticyRow(value){
        this.isSticyRow = value;
        if (value) {
            this.getCompomnent().classList.add('sticyRow');
        } else {
            this.getCompomnent().classList.remove('sticyRow');
        }
    }
    setRowSpace(value){
        this.rowSpace = value;
        this.getCompomnent().style.borderSpacing = `${this.getColSpace()}px ${value}px`;
    }
    setColSpace(value){
        this.colSpace = value;
        this.getCompomnent().style.borderSpacing = `${value}px ${this.getRowSpace()}px`;
    }


    getRows(){ return this.rows;};
    getIsCollapse(){ return this.isCollapse;};
    getIsSticyCol(){ return this.isSticyCol;};
    getIsSticyRow(){ return this.isSticyRow;};
    getRowSpace(){ return this.rowSpace;};
    getColSpace(){ return this.colSpace;};




    compomnentIn = (e) =>{
        if (!IsReadOnly){
            componentList.getAddComponentList().remove();
            e.stopPropagation();
            if (this != currentComponentParent) {
                setCurrentComponentParentFlag(true);
            }

            if (currentComponentParentFlag) {
                setCurrentComponent(null);
                compomnentBtn.getEditContainer().remove();
                setIsSupComponent(true);
                this.addControlBtn();
                // compomnentBtn.setRowColNum(this.getRows().length,this.getRows()[0].getCells().length);
                compomnentBtn.prepairTableSideBtn(this.getIsContentEditable());
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
                    console.log('componentIn//table');
                    compomnentBtn.setComponentName('Table');
                    setCurrentComponent(this);
                    compomnentBtn.prepairTableEdit(this.getIsCollapse(),this.getIsSticyCol(),this.getIsSticyRow(),this.getRowSpace(),this.getColSpace(),
                        this.getWidth(),this.getHeight(),this.getXAxis(),this.getYAxis(),this.getZAxis(),this.getOpacity(),this.getRotation(),this.getPadding(),this.getskew(),
                        this.getBackGrounColor(),this.getBackGrounDesign(),this.getBorderColor(),this.getBorderDesign(),
                        this.getBorderStyle(),this.getBorderWidth(),this.getBorderRadius(),this.getpolygon(),
                        this.getIsSizesEditable(),this.getIsDesignEditable(),this.getIsContentEditable());
                    this.getCompomnent().parentNode.appendChild(compomnentBtn.getEditContainer());
                }
            }
        }
    }





    addEvents(){
        this.getCompomnent().addEventListener("click",this.compomnentIn);
    }

    removeComponentFormat(){

        this.setIsCollapse(true);
        this.setIsSticyCol(false);
        this.setIsSticyRow(false);
        this.setRowSpace(1);
        this.setColSpace(1);
        this.setIsEmptyCellsHise(false);
        this.setOpacity(1);
        this.setZAxis(0);
        this.setRotation(0);
        this.setPadding(0, this);
        this.setSkew(0);
        this.setBackGrounColor("#ffffff",0);
        this.setBackGrounDesign("none");
        this.setBorderColor("#000000");
        this.setBorderDesign("none");
        this.setBorderStyle("solid",0);
        this.setBorderWidth(0,0);
        this.setBorderRadius(0,0);
        this.setPolygon("none");
    }
}
