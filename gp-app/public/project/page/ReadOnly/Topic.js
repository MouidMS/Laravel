import  TextComponent  from "./TextComponent.js";
import { currentComponent,setCurrentComponent,currentComponentFlag,setCurrentComponentFlag, setIsSupComponent} from "./Component.js";
import { compInFlag } from "./ParentComponent.js";


export default class Topic extends TextComponent{
    topicLevel;

   
  
    constructor(text,topicLevel,isLined,textEffect,wordSpace,letterSpace,lineHeight,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable){
        super(text,isLined,textEffect,wordSpace,letterSpace,lineHeight,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);   
        this.setCompomnent(this.prepairComponent());
        this.applyTextEdits();
        this.applyparentComponentEdites();
        this.applyComponentEdit(this);
        this.setTopicLevel(topicLevel);
        console.log('Topic')
    };


    prepairComponent(){
        let comp = document.createElement('p');
        comp.classList.add('topic');
        comp.classList.add('TextRoot');
        comp.classList.add('component');
        let current = document.createElement('div');
        current.classList.add('parentComponent');
        current.appendChild(comp);
        return comp;
    }

    
    setTopicLevel(value){
        this.topicLevel = value;
        this.getCompomnent().style.fontWeight = `900`;
        switch (value) {
            case "1":
                this.getCompomnent().style.fontSize = `40px`
                break;
            case "2":
                this.getCompomnent().style.fontSize = `35px`
                break;
            case "3":
                this.getCompomnent().style.fontSize = `30px`
                break;
            case "4":
                this.getCompomnent().style.fontSize = `25px`
                break;
            case "5":
                this.getCompomnent().style.fontSize = `20px`
                break;
            case "6":
            case "7":
            case "8":
            case "9":
            case "10":
                this.getCompomnent().style.fontSize = `15px`
                break;
        }
    };

    getTopicLevel(){
        return this.topicLevel;
    }

   
}
