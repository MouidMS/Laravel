import ParentComponent from "../ReadOnly/ParentComponent.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag,setIsSupComponent,setCurrentComponentParent,setCurrentComponentParentFlag,currentComponentParent,currentComponentParentFlag} from "../ReadOnly/Component.js";
import { compInFlag } from "../ReadOnly/ParentComponent.js";
import TableRow from "../ReadOnly/TableRow.js";


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




}
