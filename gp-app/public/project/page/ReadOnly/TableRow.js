import Compomnent, { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag, setIsSupComponent} from "../ReadOnly/Component.js";
import { compInFlag } from "../ReadOnly/ParentComponent.js";
import TableHeader from "../ReadOnly/TableHeader.js";
import TableCell from "../ReadOnly/TableCell.js";


export default class TableRow{

    compomnent;
    opacity;
    rotation;
    skew;
    isSizesEditable;
    cells = [];
    constructor(opacity,rotation,skew,isSizesEditable){
        this.compomnent = this.prepairComponent();
        console.log(opacity,rotation,skew,isSizesEditable)
        this.setOpacity(opacity);
        this.setRotation(rotation);
        this.setSkew(skew);
        this.setIsSizesEditable(isSizesEditable);
        console.log('TableRow');
    };




    addCell(value){
        this.getCells().push(value);
        this.getCompomnent().appendChild(value.getCompomnent());
    }

    newCell(type){
        let curentCell;
        if (type) {
            console.log('Header');
            curentCell = new TableHeader(60,
                "","none","none","normal","normal","normal",
                1,0,5,0,
                "#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",
                true,true,true);
        } else {
            console.log('cell');
            curentCell = new TableCell("","none","none","normal","normal","normal",
                1,0,5,0,
                "#ffffff","none",['#000000','#000000','#000000','#000000','#000000'],"none",['solid','solid','solid','solid','solid'],[1,1,1,1,1],[0,0,0,0,0],"none",
                true,true,true)
        }
        curentCell.addEvents();
        this.getCells().push(curentCell);
        this.getCompomnent().appendChild(curentCell.getCompomnent());
    }

    deleteCell(){
        if (this.getCells().length > 1) {
            this.getCells().splice(-1,1);
            this.getCompomnent().removeChild(this.getCompomnent().lastChild);
        }
    }

    prepairComponent(){
        let comp = document.createElement('tr');
        comp.classList.add('tableRow');
        return comp;
    }



    setOpacity(value){
        this.opacity = value;
        this.getCompomnent().style.opacity = `${value}`;
    }
    setRotation(value){
        this.rotation = value;
        this.getCompomnent().style.transform = `rotate(${value}deg)`;
    }
    setSkew(value){
        this.skew = value;
        this.getCompomnent().style.transform = `skew(${value}deg)`;
    }
    setIsSizesEditable(value){
        this.isSizesEditable = value;
    }

    getCompomnent(){return this.compomnent;}
    getOpacity(){return this.opacity;}
    getRotation(){return this.rotation;}
    getSkew(){return this.skew;}
    getIsSizesEditable(){return this.isSizesEditable;}
    getCells(){return this.cells;}


}
