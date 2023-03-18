


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
    align;
    subscript;
    superscript;
    link;

    constructor(name,bold,italic,underline,strikethrough,backColor,fontSize,fontName,foreColor,align,subscript,superscript,link){
        this.name =name;
        this.bold = bold;
        this.italic = italic;
        this.underline = underline;
        this.strikethrough = strikethrough;
        this.backColor = backColor;
        this.fontSize = fontSize;
        this.fontName = fontName;
        this.foreColor = foreColor;
        this.align = align;
        this.subscript = subscript;
        this.superscript = superscript;
        this.link = link;
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
    setAlign(value){
        this.setAlign = value;
    }

    setsubscript(value){
        this.subscript = value;
    }
    setsuperscript(value){
        this.superscript = value;
    }

    setLink(value){
        this.link = value;
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
    getAlign(){
        return this.align;
    }


    getsubscript(){
        return this.subscript;
    }
    getsuperscript(){
        return this.superscript;
    }
    getLink(){return this.link};




}
