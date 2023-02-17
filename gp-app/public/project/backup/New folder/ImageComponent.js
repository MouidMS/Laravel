import ParentComponent from "./ParentComponent.js"

export default class ImageComponent extends ParentComponent{


    blur
    brightness
    contrast
    grayscale
    hueRotate
    invert
    saturate
    sepia

    constructor(blur,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia,width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable){
        super(width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,isSizesEditable,isDesignEditable,isContentEditable);
        this.blur = blur;
        this.brightness = brightness;
        this.contrast = contrast;
        this.grayscale = grayscale;
        this.hueRotate = hueRotate;
        this.invert = invert;
        this.saturate = saturate;
        this.sepia = sepia;
    }
    
    applyImageEdits(){
        this.setBlur(this.getBlur());
        this.setBrightness(this.getBrightness());
        this.setContrast(this.getContrast());
        this.setGrayscale(this.getGrayscale());
        this.setHueRotate(this.getHueRotate());
        this.setInvert(this.getInvert());
        this.setSaturate(this.getSaturate());
        this.setSepia(this.getSepia());
    }

    setBlur(value){
        this.blur = value;
        this.getCompomnent().style.filter = `blur(${value}px)`;
    }
    setBrightness(value){
        this.brightness = value;
        this.getCompomnent().style.filter = `brightness(${value}%)`;
    }
    setContrast(value){
        this.contrast = value;
        this.getCompomnent().style.filter = `contrast(${value}%)`;
    }
    setGrayscale(value){
        this.grayscale = value;
        this.getCompomnent().style.filter = `grayscale(${value}%)`;
    }
    setHueRotate(value){
        this.hueRotate = value;
        this.getCompomnent().style.filter = `hue-rotate(${value}deg)`;
    }
    setInvert(value){
        this.invert = value;
        this.getCompomnent().style.filter = `invert(${value}%)`;
    }
    setSaturate(value){
        this.saturate = value;
        this.getCompomnent().style.filter = `saturate(${value})`;
    }
    setSepia(value){
        this.sepia = value;
        this.getCompomnent().style.filter = `sepia(${value}%)`;
    }

    getBlur(){
        return this.blur;
    }
    getBrightness(){
        return this.brightness;
    }
    getContrast(){
        return this.contrast;
    }
    getGrayscale(){
        return this.grayscale;
    }
    getHueRotate(){
        return this.hueRotate;
    }
    getInvert(){
        return this.invert;
    }
    getSaturate(){
        return this.saturate;
    }
    getSepia(){
        return this.sepia;
    }


}