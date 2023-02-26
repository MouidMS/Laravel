import SupTextComponent from "./SupTextComponent.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag, setIsSupComponent} from "./Component.js";
import { compInFlag } from "./ParentComponent.js";


export default class TableHeader extends SupTextComponent{

    cellWidth;
    tableHeaderText;
    tableHeaderDrager;

    constructor(cellWidth,text,isLined,textEffect,wordSpace,letterSpace,lineHeight,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable){
        super(isLined,textEffect,wordSpace,letterSpace,lineHeight,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);   
        this.setCompomnent(this.prepairComponent());
        this.applyTextEdits();
        this.applyComponentEdit(this);
        this.setText(text);
        this.setCelWidth(cellWidth)
        // this.setDragerWidth();
        console.log('TableHeader');
    };

    prepairComponent(){
       
        let comp = document.createElement('td');
        comp.classList.add('TableHeader');
        let curent;
        this.tableHeaderText = document.createElement('p');
        this.tableHeaderText.classList.add('tableHeaderText');
        this.tableHeaderText.classList.add('TextRoot');
        this.tableHeaderText.innerText = null;
        comp.appendChild(this.tableHeaderText);

        this.tableHeaderDrager = document.createElement('div');
        this.tableHeaderDrager.classList.add('tableHeaderDrager');
        comp.appendChild(this.tableHeaderDrager);
        // comp.classList.add('component');
        return comp;
    }

    setCelWidth(value){
        this.cellWidth = value;
        this.getCompomnent().style.width = `${value}px`;
        this.getCompomnent().style.minWidth = `${value}px`;
    }
    
    
    setText(value){
        this.text = value;
        this.getCompomnent().children[0].innerHTML = value;
    }

    setDragerWidth(){
        console.log(this.getCompomnent())
        console.log(this.getCompomnent().parentNode)
        console.log(this.getCompomnent().parentNode.parentNode)
        console.log(this.getCompomnent().parentNode.parentNode.offsetHeight)
        let tableWidth = this.getCompomnent().parentNode.parentNode.offsetHeight;
        this.getCompomnent().children[1].style.height = `${tableWidth}px`;
    }

    setDreagerSise(value){
        this.getTableHeaderDrager().style.height = `${value}px`;
    }


    dragCol = (e) =>{
        let x = e.clientX;
        let oldWidth = this.getCellWidth();

        const mouseMoveHandler =  (e) => {
            this.getCompomnent().children[1].classList.add('resizing');
            const dx = (e.clientX ) - x;
            let newWidth = oldWidth + dx;
            if ((newWidth >= 20)) {
                this.setCelWidth(newWidth);
            }

        };
    
        // When user releases the mouse, remove the existing event listeners
        const mouseUpHandler = (e) =>{
            this.getCompomnent().children[1].classList.remove('resizing');
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    
    }
    
    saveHText = (e) =>{
        this.text = this.getTableHeaderText().innerHTML;
    }


    getCellWidth(){return this.cellWidth;}
    getTableHeaderText(){return this.tableHeaderText;}
    getTableHeaderDrager(){return this.tableHeaderDrager;}



}