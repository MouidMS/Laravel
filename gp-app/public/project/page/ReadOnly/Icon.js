import ParentComponent from "../ReadOnly/ParentComponent.js";
import {isFullPreemption} from "../ReadOnly/main.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag,setIsSupComponent} from "../ReadOnly/Component.js";
import { compInFlag } from "../ReadOnly/ParentComponent.js";


export default class Icon extends ParentComponent{
    icon;
    color;
    size;
    constructor(icon,color,size,
        width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
        super(width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
        this.setCompomnent(this.prepairComponent());
        this.applyparentComponentEdites();
        this.applyComponentEdit(this);
        this.icon = icon;
        this.color = color;
        this.size = size;
        this.applyIconEdits();
        console.log('Icon');
    }
    applyIconEdits(){
        this.setIcon(this.getIcon());
        this.setColor(this.getColor());
        this.setSize(this.getSize())
    };


    prepairComponent(){
        let comp = document.createElement('i');
        comp.classList.add('ICON');
        comp.classList.add('component');
        // comp.classList.add('fa');
        let current = document.createElement('div');
        current.classList.add('parentComponent');
        current.appendChild(comp);
        return comp;
    }



    setIcon(value){
        let classlist;
        if (isFullPreemption) {
            if (value == 'none') {
                classlist = this.icon.split(" ");
                classlist.forEach(element => {
                    this.getCompomnent().classList.remove(element);
                });
                this.icon = value;
            }else{
                classlist = this.icon.split(" ");
                classlist.forEach(element => {
                    this.getCompomnent().classList.remove(element);
                });
                this.icon = value;
                classlist = this.icon.split(" ");
                classlist.forEach(element => {
                    this.getCompomnent().classList.add(element);
                });
            }
        } else {
            if (this.getIsContentEditable()) {
                if (value == 'none') {
                    classlist = (this.icon).split(" ");
                    classlist.forEach(element => {
                        this.getCompomnent().classList.remove(element);
                    });
                    this.icon = value;

                }else{
                    classlist = this.icon.split(" ");
                    classlist.forEach(element => {
                        this.getCompomnent().classList.remove(element);
                    });
                    this.icon = value;
                    classlist = this.icon.split(" ");
                    classlist.forEach(element => {
                        this.getCompomnent().classList.add(element);
                    });
                }
            }
        }
    }

    setColor(value){
        this.color = value;
        this.getCompomnent().style.color = value;
    }
    setSize(value){
        this.size = value;
        this.getCompomnent().style.fontSize = `${value}px`
    }

    getIcon(){
        return this.icon;
    }
    getColor(){
        return this.color;
    }
    getSize(){
        return this.size;
    }


}
