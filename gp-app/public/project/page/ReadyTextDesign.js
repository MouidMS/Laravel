


export default class ReadyTextDesign{

    name;
    bold;
    italic;
    underline;
    strikethrough;
    backColor;
    fontSize;
    fontName;
    foreColor;
    justifyCenter;
    justifyLeft;
    justifyRight;
    justifyFull;
    subscript;
    superscript;
                    
    constructor(name,bold,italic,underline,strikethrough,backColor,fontSize,fontName,foreColor,justifyCenter,justifyLeft,justifyRight,justifyFull,subscript,superscript){
        this.name =name;
        this.bold = bold;
        this.italic = italic;
        this.underline = underline;
        this.strikethrough = strikethrough;
        this.backColor = backColor;
        this.fontSize = fontSize;
        this.fontName = fontName;
        this.foreColor = foreColor;
        this.justifyCenter = justifyCenter;
        this.justifyLeft = justifyLeft;
        this.justifyRight = justifyRight;
        this.justifyFull = justifyFull;
        this.subscript = subscript;
        this.superscript = superscript;
    };

    setName(value){
        this.name = value;
    }
    setbold(value){
        this.bold = value;
    }
    setitalic(value){
        this.italic = value;
    }
    setunderline(value){
        this.underline = value;
    }
    setstrikethrough(value){
        this.strikethrough = value;
    }
    setbackColor(value){
        this.backColor = value;
    }
    setfontSize(value){
        this.fontSize = value;
    }
    setfontName(value){
        this.fontName = value;
    }
    setforeColor(value){
        this.foreColor = value;
    }
    setjustifyCenter(value){
        this.justifyCenter = value;
    }
    setjustifyLeft(value){
        this.justifyLeft = value;
    }
    setjustifyRight(value){
        this.justifyRight = value;
    }
    setjustifyFull(value){
        this.justifyFull = value;
    }
    setsubscript(value){
        this.subscript = value;
    }
    setsuperscript(value){
        this.superscript = value;
    }


    getName(){
        return this.name;
    }
    getbold(){
        return this.bold;
    }
    getitalic(){
        return this.italic;
    }
    getunderline(){
        return this.underline;
    }
    getstrikethrough(){
        return this.strikethrough;
    }
    getbackColor(){
        return this.backColor;
    }
    getfontSize(){
        return this.fontSize;
    }
    getfontName(){
        return this.fontName;
    }
    getforeColor(){
        return this.foreColor;
    }
    getjustifyCenter(){
        return this.justifyCenter;
    }
    getjustifyLeft(){
        return this.justifyLeft;
    }
    getjustifyRight(){
        return this.justifyRight;
    }
    getjustifyFull(){
        return this.justifyFull;
    }
    getsubscript(){
        return this.subscript;
    }
    getsuperscript(){
        return this.superscript;
    }

  


}