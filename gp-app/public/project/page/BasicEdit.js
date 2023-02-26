

export default class Edit{

    backGrounColor;
    borderColor;
    borderStyle;
    borderWidth;
    borderRadius;
    border;
    borderDesign;
    backGrounDesign;
    corner;

    constructor(){}
    setbackGrounColor(backGrounColor){
        this.backGrounColor = backGrounColor;
    }
    setborderColor(borderColor){
        this.borderColor = borderColor;
    }
    setborderStyle(borderStyle){
        this.borderStyle = borderStyle;
    };
    setborderWidth(borderWidth){
        this.borderWidth = borderWidth;
    }
    setborderRadius(borderRadius){
        this.borderRadius = borderRadius;
    };

    setBorder(border){
        this.border = border;
    };
    setborderDesign(borderDesign){
        this.borderDesign = borderDesign;
    }
    setbackGrounDesign(backGrounDesign){
        this.backGrounDesign = backGrounDesign;
    }
    setCorner(value){
        this.corner = value;
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
    getborder(){
        return this.border;
    }
    getborderDesign(){
        return this.borderDesign;
    }
    getbackGrounDesign(){
        return this.backGrounDesign;
    }
    getCorner(){return this.corner;} 

    
}