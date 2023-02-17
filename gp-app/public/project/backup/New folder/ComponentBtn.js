import { currentPage } from "./Page.js";
import { currentComponent, currentComponentParent,isSupComponent, resetFlages} from "./Component.js";
import { setCompInFlag } from "./ParentComponent.js";
import { leftSide,scrollUp,scrolldown,borderStyle, backDesign, borderDesign,isFullPreemption,textSpacing,iconList,listStyles} from "./main.js";
import BasicEdit from './BasicEdit.js';
import ListItem from "./ListItem.js";

let W,H,X,Y;
export let ComponentCopy = null;
export let ComponentCopyName = null;


export default class CompomnentBtn extends BasicEdit{


    drager;
    coordinates;
    delete;
    copy;
    edit;
    resizer;
    size;
    componentName;
    
    editContainer;
    onOf = true;
    editFlag = false;
    
    
    sizesContainer;
    width;
    autoWidth;
    height;
    autoHeight;
    xAxis;
    yAxis;
    zAxis;
    opacity;
    rotation;
    removeFormat;
    padding;
    skew;

    resetBackGroundColor;
    polygon;
    //========================
    textContainer;
    isLined;
    textEffect;
    wordSpace;
    letterSpace;
    lineHeight;

    //==========================
    imageContainer;
    blur;
    brightness;
    contrast;
    grayscale;
    hueRotate;
    invert;
    saturate;
    sepia;

    //==========================
    designContainer;

    controlContainer;
    allEditable;
    isSizesEditable;
    isDesignEditable;
    isContentEditable;
    

    customContainer;
    sideBtnContainer;

    //topic
    topicLevel;

    //icon
    icon;
    iconColor;
    iconSize;

    //image
    imageList;
    sellectImage;
    transationTime;

    //list
    listType;
    listStart;
    addItem;
    deleteItem;
    upItem;
    dowenItem;

    //listItem
    listItemSpace;

    //topicList
    generate;

    //table
    isCollapse
    isSticyCol
    isSticyRow
    rowSpace
    colSpace
    addCol;
    deleteCol
    addRow;
    deleteRow;
    rowColumnNum;


    





    constructor(){
        super();
        this.prepairEdit();
    }   
    
    prepairEdit(){
        let component;
        this.drager = document.createElement('button');
        this.drager.id = 'cddrager';
        this.drager.innerText = "DR";
        this.drager.addEventListener('mousedown', this.dragElement);

        this.coordinates = document.createElement('div');
        this.coordinates.id = 'coordinate';

        this.delete = document.createElement('button');
        this.delete.id = 'cddelete';
        this.delete.innerText = "DL";
        this.delete.addEventListener('click', this.deleteElement);
        
        this.copy = document.createElement('button');
        this.copy.id = 'cdcopy';
        this.copy.innerText = "C";
        this.copy.addEventListener('click', this.copyElement);
        
        this.edit = document.createElement('button');
        this.edit.id = 'cdedit';
        this.edit.innerText = "E";
        this.edit.addEventListener('click', this.editElement);
        
        this.resizer = document.createElement('div');
        this.resizer.id = 'cdresize';
        this.resizer.innerText = "R";
        this.resizer.addEventListener('mousedown', this.resizeElement);

        this.size = document.createElement('div');
        this.size.id = 'size';

        this.componentName = document.createElement('p');
        this.componentName.id = 'componentName';
        
        //=========================================================================
        
        
        this.editContainer = document.createElement('div');
        this.editContainer.id = 'editContainer';
        
        //=====================================================================================================
        // SIZE
        this.sizesContainer = document.createElement('div');
        this.sizesContainer.id = 'sizesContainer';
        
        this.width = document.createElement('input')
        this.width.id = 'width';
        this.width.setAttribute('type','number');
        this.width.setAttribute('min','50');
        this.width.addEventListener('change', this.changewidth)
        this.sizesContainer.appendChild(this.width);

        this.autoWidth = document.createElement('button');
        this.autoWidth.id = 'autoWidth';
        this.autoWidth.classList.add('autoWidth');
        this.autoWidth.addEventListener('click', this.changeautoWidth);
        this.autoWidth.innerText = "Auto";
        this.sizesContainer.appendChild(this.autoWidth);
        
        this.height = document.createElement('input')
        this.height.id = 'height';
        this.height.setAttribute('type','number');
        this.height.setAttribute('min','0');
        this.height.addEventListener('change', this.changeheight)
        this.sizesContainer.appendChild(this.height);

        this.autoHeight = document.createElement('button');
        this.autoHeight.id = 'autoHeight';
        this.autoHeight.classList.add('autoHeight');
        this.autoHeight.addEventListener('click', this.changeautoHeight);
        this.autoHeight.innerText = "Auto";
        this.sizesContainer.appendChild(this.autoHeight);
        
        this.xAxis = document.createElement('input')
        this.xAxis.id = 'xAxis';
        this.xAxis.setAttribute('type','number');
        this.xAxis.setAttribute('min','10');
        this.xAxis.addEventListener('change', this.changexAxis)
        this.sizesContainer.appendChild(this.xAxis);

        this.yAxis = document.createElement('input')
        this.yAxis.id = 'yAxis';
        this.yAxis.setAttribute('type','number');
        this.yAxis.setAttribute('min','10');
        this.yAxis.addEventListener('change', this.changeyAxis)
        this.sizesContainer.appendChild(this.yAxis);
        
        this.zAxis = document.createElement('input')
        this.zAxis.id = 'zAxis';
        this.zAxis.setAttribute('type','number');
        this.zAxis.setAttribute('min','0');
        this.zAxis.addEventListener('change', this.changezAxis)
        this.sizesContainer.appendChild(this.zAxis);

         //=====================================================================================================
        // SIZE
        this.viewContainer = document.createElement('div');
        this.viewContainer.id = 'viewContainer';
        
        this.opacity = document.createElement('input')
        this.opacity.id = 'opacity';
        this.opacity.setAttribute('type','number');
        this.opacity.setAttribute('min','0');
        this.opacity.setAttribute('max','1');
        this.opacity.setAttribute('step','0.01');
        this.opacity.addEventListener('change', this.changeopacity)
        this.viewContainer.appendChild(this.opacity);
        
        this.rotation = document.createElement('input')
        this.rotation.id = 'rotation';
        this.rotation.setAttribute('type','number');
        this.rotation.setAttribute('min','0');
        this.rotation.addEventListener('change', this.changerotation)
        this.viewContainer.appendChild(this.rotation);
        
        this.padding = document.createElement('input')
        this.padding.id = 'padding';
        this.padding.setAttribute('type','number');
        this.padding.setAttribute('min','0');
        this.padding.addEventListener('change', this.changepadding)
        this.viewContainer.appendChild(this.padding);

        
        this.skew = document.createElement('input')
        this.skew.id = 'skew';
        this.skew.setAttribute('type','number');
        this.skew.setAttribute('min','0');
        this.skew.addEventListener('change', this.changeskew)
        this.viewContainer.appendChild(this.skew);

        
        //====================================================================================================================
        this.textContainer = document.createElement('div');
        this.textContainer.id = 'textContainer';
        
        this.isLined = document.createElement('select');
        this.isLined.insertAdjacentHTML("beforeend", `<option value="none">White Peper</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="normalL">Normal Line</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="englishL">English Line</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="numbered">Numbered</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="numberedL">Numbered Line</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="circle">Circle</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="circleL">Circle Line</option>`);
        this.isLined.addEventListener('change', this.changeIsLined);
        this.textContainer.appendChild(this.isLined);
        
        
        this.textEffect = document.createElement('select');
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontEffect1">Effect1</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontCloud">Cloud</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontWaves" >Waves</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontUnderLine">Underline</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontEffect2" >Effict2</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontTyping" >Typing</option>`);
        this.textEffect.addEventListener('change', this.changeTextEffect);
        this.textContainer.appendChild(this.textEffect);
        
        
        this.wordSpace = document.createElement('select');
        this.wordSpace.addEventListener('change', this.changeWordSpace);
        
        
        this.letterSpace = document.createElement('select');
        this.letterSpace.addEventListener('change', this.changeLetterSpace);
        
        
        this.lineHeight = document.createElement('select');
        this.lineHeight.addEventListener('change', this.changeLineHeight);
        
        for (let index = 0; index < textSpacing.length; index++) {
            this.lineHeight.insertAdjacentHTML("beforeend", `<option value="${textSpacing[index]}">${textSpacing[index]}</option>`);
            this.letterSpace.insertAdjacentHTML("beforeend", `<option value="${textSpacing[index]}">${textSpacing[index]}</option>`);
            this.wordSpace.insertAdjacentHTML("beforeend", `<option value="${textSpacing[index]}">${textSpacing[index]}</option>`);
        }
        
        
        this.textContainer.appendChild(this.wordSpace);
        this.textContainer.appendChild(this.letterSpace);
        this.textContainer.appendChild(this.lineHeight);
        //=================================================================================
        //IMAGE
        this.imageContainer = document.createElement('div');
        this.imageContainer.id = 'imageContainer';
        
        
        
        this.blur = document.createElement('input')
        this.blur.id = 'blur';
        this.blur.setAttribute('type','number');
        this.blur.setAttribute('min','0');
        this.blur.addEventListener('change', this.changeblur)
        this.imageContainer.appendChild(this.blur);

        this.brightness = document.createElement('input')
        this.brightness.id = 'brightness';
        this.brightness.setAttribute('type','number');
        this.brightness.setAttribute('min','0');
        this.brightness.addEventListener('change', this.changebrightness)
        this.imageContainer.appendChild(this.brightness);

        this.contrast = document.createElement('input')
        this.contrast.id = 'contrast';
        this.contrast.setAttribute('type','number');
        this.contrast.setAttribute('min','0');
        this.contrast.addEventListener('change', this.changecontrast)
        this.imageContainer.appendChild(this.contrast);

        this.grayscale = document.createElement('input')
        this.grayscale.id = 'grayscale';
        this.grayscale.setAttribute('type','number');
        this.grayscale.setAttribute('min','0');
        this.grayscale.addEventListener('change', this.changegrayscale)
        this.imageContainer.appendChild(this.grayscale);

        this.hueRotate = document.createElement('input')
        this.hueRotate.id = 'hueRotate';
        this.hueRotate.setAttribute('type','number');
        this.hueRotate.setAttribute('min','0');
        this.hueRotate.addEventListener('change', this.changehueRotate)
        this.imageContainer.appendChild(this.hueRotate);

        this.invert = document.createElement('input')
        this.invert.id = 'invert';
        this.invert.setAttribute('type','number');
        this.invert.setAttribute('min','0');
        this.invert.addEventListener('change', this.changeinvert)
        this.imageContainer.appendChild(this.invert);

        this.saturate = document.createElement('input')
        this.saturate.id = 'saturate';
        this.saturate.setAttribute('type','number');
        this.saturate.setAttribute('min','0');
        this.saturate.addEventListener('change', this.changesaturate)
        this.imageContainer.appendChild(this.saturate);

        this.sepia = document.createElement('input')
        this.sepia.id = 'sepia';
        this.sepia.setAttribute('type','number');
        this.sepia.setAttribute('min','0');
        this.sepia.addEventListener('change', this.changesepia)
        this.imageContainer.appendChild(this.sepia);

        //==========================================================================
        
        this.designContainer = document.createElement('div');
        this.designContainer.id = 'designContainer';
        
        
        this.setbackGrounColor(document.createElement('input'));
        this.getbackGrounColor().setAttribute("type", "color");
        this.getbackGrounColor().addEventListener('change',this.chBackC);
        this.designContainer.appendChild(this.getbackGrounColor());
        
        this.resetBackGroundColor = document.createElement('button');
        this.resetBackGroundColor.id = 'resetBGC';
        this.resetBackGroundColor.addEventListener('click', this.changeresetBGC)
        this.resetBackGroundColor.innerText = 'Transparent';
        this.designContainer.appendChild(this.resetBackGroundColor);
        
    
        
        this.setborderColor(document.createElement("input"));
        this.getborderColor().setAttribute("type", "color");
        this.getborderColor().addEventListener('change',this.chBordeC);
        this.designContainer.appendChild(this.getborderColor());
        
        this.setborderStyle(document.createElement("select"));
        for (let index = 0; index < borderStyle.length; index++) {
            component = document.createElement("option");
            component.value = borderStyle[index];
            component.innerText = borderStyle[index];
            this.getborderStyle().appendChild(component);
            
        }
        this.getborderStyle().addEventListener('change',this.chBorderS);
        this.designContainer.appendChild(this.getborderStyle());
        
        this.setborderWidth(document.createElement("input"));
        this.getborderWidth().setAttribute("type", "number");
        this.getborderWidth().setAttribute("min", "0");
        this.getborderWidth().addEventListener('change',this.chBorderW);
        this.designContainer.appendChild(this.getborderWidth());

        this.setBorder(document.createElement("select"));
        this.getborder().insertAdjacentHTML("beforeend", `<option value="0">All</option>`);
       this.getborder().insertAdjacentHTML("beforeend", `<option value="1">Top</option>`);
       this.getborder().insertAdjacentHTML("beforeend", `<option value="2">Right</option>`);
       this.getborder().insertAdjacentHTML("beforeend", `<option value="3">Buttom</option>`);
       this.getborder().insertAdjacentHTML("beforeend", `<option value="4">Left</option>`);
       this.getborder().addEventListener('change',this.changeborder);
       this.designContainer.appendChild(this.getborder());
        
        this.setborderRadius(document.createElement("input"));
        this.getborderRadius().setAttribute("type", "number");
        this.getborderRadius().setAttribute("min", "0");
        this.getborderRadius().addEventListener('change',this.chBorderR);
        this.designContainer.appendChild(this.getborderRadius());

        
        this.setCorner(document.createElement("select"));
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="0">All</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="1">top-left</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="2">top-right</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="3">buttom-right</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="4">buttom-left</option>`);
        this.getCorner().addEventListener('change',this.changecorner);
        this.designContainer.appendChild(this.getCorner());
        
        
        
        
        this.setborderDesign(document.createElement("select"));
        this.getborderDesign().insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        this.getborderDesign().insertAdjacentHTML("beforeend", `<option value="BRD1">BRD1</option>`);
        this.getborderDesign().insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        this.getborderDesign().insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        this.getborderDesign().addEventListener('change',this.chBorderDesign);
        this.designContainer.appendChild(this.getborderDesign());
        
        
        this.setbackGrounDesign(document.createElement("select"));
        this.getbackGrounDesign().insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        this.getbackGrounDesign().insertAdjacentHTML("beforeend", `<option value="BCD1">BCD1</option>`);
        this.getbackGrounDesign().insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        this.getbackGrounDesign().insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        this.getbackGrounDesign().insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        this.getbackGrounDesign().addEventListener('change',this.chBackDesign);
        this.designContainer.appendChild(this.getbackGrounDesign());

        
        this.polygon = document.createElement("select");
        this.polygon.insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        this.polygon.insertAdjacentHTML("beforeend", `<option value="Triangle">Triangle</option>`);
        this.polygon.insertAdjacentHTML("beforeend", `<option value="Star">Star</option>`);
        this.polygon.insertAdjacentHTML("beforeend", `<option value="Message">Message</option>`);
        this.polygon.insertAdjacentHTML("beforeend", `<option value="Ocagon">Ocagon</option>`);
        this.polygon.addEventListener('change',this.changepolygon);
        this.designContainer.appendChild(this.polygon);



        //================================================================================================
        
        this.controlContainer = document.createElement('div');
        this.controlContainer.id = "controlContainer";
        
        
        this.allEditable = document.createElement('input');
        this.allEditable.setAttribute('type','checkbox');
        this.allEditable.id = "allEditable";
        this.allEditable.addEventListener('change', this.changeallEditablZe)
        this.controlContainer.appendChild(this.allEditable);
        
        this.isSizesEditable = document.createElement('input');
        this.isSizesEditable.setAttribute('type','checkbox');
        this.isSizesEditable.id = "isSizesEditable";
        this.isSizesEditable.addEventListener('change', this.changeisSizesEditable)
        this.controlContainer.appendChild(this.isSizesEditable);
        
        this.isDesignEditable = document.createElement('input');
        this.isDesignEditable.setAttribute('type','checkbox');
        this.isDesignEditable.id = "isDesignEditable";
        this.isDesignEditable.addEventListener('change', this.changeisDesignEditable)
        this.controlContainer.appendChild(this.isDesignEditable);
        
        this.isContentEditable = document.createElement('input');
        this.isContentEditable.setAttribute('type','checkbox');
        this.isContentEditable.id = "isContentEditable";
        this.isContentEditable.addEventListener('change', this.changeisContentEditable)
        this.controlContainer.appendChild(this.isContentEditable);
        
        //CUSTOM customContainer topicLevel 
        
        this.removeFormat = document.createElement('button');
        this.removeFormat.id = 'removeFormat';
        this.removeFormat.innerText = "RMV";
        this.removeFormat.addEventListener('mousedown', this.removeElementFormat);

        
    
        this.customContainer = document.createElement('div');
        this.customContainer.id = 'customContainer';

        this.sideBtnContainer = document.createElement('div');
        this.sideBtnContainer.id = 'sideBtnContainer';

         //controlBtn
        this.generate = document.createElement('button');
        this.generate.innerText = "generate";
        this.generate.id = 'generate';
        this.generate.addEventListener("click", this.changegenerate);

        //topic
        this.topicLevel = document.createElement('input')
        this.topicLevel.id = 'topicLevel';
        this.topicLevel.setAttribute('type','number');
        this.topicLevel.setAttribute('min','1');
        this.topicLevel.setAttribute('max','10');
        this.topicLevel.addEventListener('change', this.changetopicLevel)

        //icon  
        this.icon = document.createElement('select');
        this.icon.id = "icon";
        iconList.forEach(element => {
            this.icon.insertAdjacentHTML("beforeend", `<option value="${element[0]}">${element[1]}</option>`);
        });
        this.icon.addEventListener('change',this.changeIcon);            

        this.iconColor = document.createElement('input');
        this.iconColor.id = "iconColor"
        this.iconColor.setAttribute("type", "color");
        this.iconColor.addEventListener('change',this.changeIconColor); 
        
        this.iconSize = document.createElement("input");
        this.iconSize.id = 'iconSize';
        this.iconSize.setAttribute('type','number');
        this.iconSize.setAttribute('min','0');
        this.iconSize.addEventListener('change', this.changeiconSize)
        
        //image

        this.SellectImage
         // this.imageUrl = document.createElement('input');
        // this.imageUrl.setAttribute('type','text');
        // this.imageUrl.id = 'imageUrl';
        // this.imageUrl.placholder = "URL...";

        // this.uploadImage = document.createElement('label');
        // this.uploadImage.setAttribute('for','');
        // this.uploadImage.id = 
        // this.uploadImage
        // this.uploadImage
        // this.uploadImage

        // this.chooseImage = document.createElement('');
        // this.chooseImage
        // this.chooseImage
        // this.chooseImage
        // this.chooseImage
        // this.chooseImage

        // this.imageList = document.createElement('');
        // this.imageList
        // this.imageList
        // this.imageList
        // this.imageList
        // this.imageList

        // this.transationTime = document.createElement('');
        // this.transationTime
        // this.transationTime
        // this.transationTime
        // this.transationTime
        // this.transationTime

        
        //list ======================================================
        this.listType = document.createElement('select');
        this.listType.id = "listType";
        listStyles.forEach(element => {
            this.listType.insertAdjacentHTML("beforeend", `<option value="${element}">${element}</option>`);
        });
        this.listType.addEventListener("change", this.changelistType);


        this.listStart = document.createElement('input');
        this.listStart.id = "listStart";
        this.listStart.setAttribute('type','number');
        this.listStart.addEventListener("change", this.changelistStart);

        this.addItem = document.createElement('button');
        this.addItem.innerText = "addItem";
        this.addItem.id = 'addItem';
        this.addItem.addEventListener("click", this.changeaddItem);
        
        this.deleteItem = document.createElement('button');
        this.deleteItem.innerText = "deleteItem";
        this.deleteItem.id = 'deleteItem';
        this.deleteItem.addEventListener("click", this.changedeleteItem);
        
        this.upItem = document.createElement('button');
        this.upItem.innerText = "upItem";
        this.upItem.id = 'upItem';
        this.upItem.addEventListener("click", this.changeupItem);
        
        this.dowenItem = document.createElement('button');
        this.dowenItem.innerText = "dowenItem";
        this.dowenItem.id = 'dowenItem';
        this.dowenItem.addEventListener("click", this.changedowenItem);


        //listItem ==========================================================
        this.listItemSpace = document.createElement('input');
        this.listItemSpace.id = "listItemSpace";
        this.listItemSpace.setAttribute('type','number');
        this.listItemSpace.setAttribute('min','0');
        this.listItemSpace.addEventListener("change", this.changelistItemSpace);


        //table ==============================================================
        this.isCollapse = document.createElement('input');
        this.isCollapse.id = 'isCollapse';
        this.isCollapse.setAttribute("type", "checkbox");
        this.isCollapse.addEventListener('change', this.changeisCollapse);

        this.isSticyCol = document.createElement('input');
        this.isSticyCol.id = 'isSticyCol';
        this.isSticyCol.setAttribute("type", "checkbox");
        this.isSticyCol.addEventListener('change', this.changeisSticyCol);

        this.isSticyRow = document.createElement('input');
        this.isSticyRow.id = 'isSticyRow';
        this.isSticyRow.setAttribute("type", "checkbox");
        this.isSticyRow.addEventListener('change', this.changeisSticyRow);

        this.rowSpace = document.createElement('input');
        this.rowSpace.id = 'rowSpace';
        this.rowSpace.setAttribute('type','number');
        this.rowSpace.setAttribute("min", 0);
        this.rowSpace.addEventListener('change', this.changerowSpace);

        this.colSpace = document.createElement('input');
        this.colSpace.id = 'colSpace';
        this.colSpace.setAttribute('type','number');
        this.colSpace.setAttribute("min", 0);
        this.colSpace.addEventListener('change', this.changecolSpace);


        this.addCol = document.createElement('button');
        this.addCol.id = 'addCol';
        this.addCol.classList.add('addCol');
        this.addCol.addEventListener('click', this.changeaddCol);
        this.addCol.innerText = "AC";

        this.deleteCol = document.createElement('button');
        this.deleteCol.id = 'deleteCol';
        this.deleteCol.classList.add('deleteCol');
        this.deleteCol.addEventListener('click', this.changedeleteCol);
        this.deleteCol.innerText = "DC";

        this.addRow = document.createElement('button');
        this.addRow.id = 'addRow';
        this.addRow.classList.add('addRow');
        this.addRow.addEventListener('click', this.changeaddRow);
        this.addRow.innerText = "AR";

        this.deleteRow = document.createElement('button');
        this.deleteRow.id = 'deleteRow';
        this.deleteRow.classList.add('deleteRow');
        this.deleteRow.addEventListener('click', this.changedeleteRow);
        this.deleteRow.innerText = "DR";

        this.rowColumnNum = document.createElement('button');
        this.rowColumnNum.id = 'rowColumnNum';
        this.rowColumnNum.classList.add('rowColumnNum');
        this.rowColumnNum.addEventListener('click', this.changerowColumnNum);
        this.rowColumnNum


        



    }
    
    
    

    setCoordnait(x,y){
        this.getCoordinates().innerText = `X:${Math.floor(x)},Y:${Math.floor(y)}`;
        this.getXAxis().value = Math.floor(x);
        this.getYAxis().value = Math.floor(y);
    }
    setSize(w,h){
        this.getSize().innerText = `W:${Math.floor(w)},H:${Math.floor(h)}`;
        this.getWidth().value = Math.floor(w);
        this.getHeight().value = Math.floor(h);
    }
    setRowColNum(R,C){
        this.getRowColumnNum().innerText = `Row:${R},Col:${C}`
    }
    hideBtn(){
        this.getDrager().style.display = "none";
        this.getCopy().style.display = "none";
        this.getDelete().style.display = "none";
        this.getResizer().style.display = "none";
        this.getEdit().style.display = "none";
        this.getEdit().style.display = "none";
    }

    displayBtn(){
        this.getDrager().style.display = "inline";
        this.getCopy().style.display = "inline";
        this.getDelete().style.display = "inline";
        this.getResizer().style.display = "inline";
        this.getEdit().style.display = "inline";
        this.getEdit().style.display = "inline";

    }

    dragElement = (e) =>{
        console.log('drag');
        setCompInFlag(false);
        this.hideBtn();
        this.getCoordinates().style.display = 'inline';
        let current = e.target
        let page = currentPage;

        let mousemove = (e) =>{ 
                let pagerect =  current.parentNode.parentNode.getBoundingClientRect();
                scrollUp.style.display = "inline";
                scrolldown.style.display = "inline";
                let newLeft = (e.clientX) - pagerect.left;
                let newTop = (e.clientY) - pagerect.top;
                if (isSupComponent) {
                    currentComponentParent.setXAxis(newLeft);
                    currentComponentParent.setYAxis(newTop);
                    if (page !== currentPage) {
                        page.deleteComponent(currentComponentParent);
                        currentPage.pushComponent(currentComponentParent);
                        pagerect = current.parentNode.parentNode.getBoundingClientRect();
                        page = currentPage;
                        
                    }          
                } else {
                    currentComponent.setXAxis(newLeft);
                    currentComponent.setYAxis(newTop);
                    if (page !== currentPage) {
                        page.deleteComponent(currentComponent);
                        currentPage.pushComponent(currentComponent);
                        pagerect = current.parentNode.parentNode.getBoundingClientRect();
                        page = currentPage;
                        
                    }                
                }
        };
                
        let  mouseup = (e) =>{
            scrollUp.style.display = "none";
            scrolldown.style.display = "none";
            setCompInFlag(true);
            this.displayBtn();
            this.getCoordinates().style.display = 'none';
            window.removeEventListener('mousemove', mousemove);
            window.removeEventListener('mouseup', mouseup);
        };

        window.addEventListener('mousemove', mousemove);
        window.addEventListener('mouseup', mouseup);
    };

    deleteElement = (e) =>{
        if (isSupComponent) {
            currentPage.deleteComponent(currentComponentParent);
        } else {
            currentPage.deleteComponent(currentComponent);        }
       
    };

    copyElement = (e) =>{
        console.log("coped");
        if (isSupComponent) {
            ComponentCopyName = currentComponentParent.constructor.name;
            ComponentCopy = JSON.parse(JSON.stringify(currentComponentParent));
        } else {
            ComponentCopyName = currentComponent.constructor.name;
            ComponentCopy = JSON.parse(JSON.stringify(currentComponent));
        }
    }
    
    editElement = (e) =>{
        if (this.onOf) {
            this.editFlag  = true;
            this.onOf = false;
        } else {
            this.editFlag = false;
            this.onOf = true;
        }
        this.displayEditsBtn();
    }

    displayEditsBtn(){
        if (this.editFlag) {
            this.getEditContainer().style.display = "inline";
            
        } else {
            this.getEditContainer().style.display = "none";
        }
    }




    resizeElement = (e) =>{
        console.log("resise");
        this.getSize().style.display = "inline";
        let current = e.target;
        let Rmousemove = (e) =>{
            let pagerect =  current.parentNode.parentNode.getBoundingClientRect();
            let newWidth = (e.clientX - pagerect.left) - current.parentNode.offsetLeft;
            let newHeight = (e.clientY - pagerect.top) - current.parentNode.offsetTop;
            if (isSupComponent) {
                currentComponentParent.setWidth(newWidth);             
                currentComponentParent.setHeight(newHeight);
            } else {
                currentComponent.setWidth(newWidth);             
                currentComponent.setHeight(newHeight);
            }
        }
        
        let Rmouseup = (e) =>{
            setCompInFlag(true);
            this.getSize().style.display = "none";
            window.removeEventListener('mousemove', Rmousemove);
            window.removeEventListener('mouseup', Rmouseup);
        }
        
        
        window.addEventListener('mousemove', Rmousemove);
        window.addEventListener('mouseup', Rmouseup);
    };

    removeElementFormat = (e) =>{
        this.resetEdit();
        currentComponent.removeComponentFormat();
    }
    
    changeIsLined = (e) =>{
        currentComponent.setIsLined(this.getIsLined().value)
        currentComponent.setTextEffect("none");
        this.getTextEffect().children[0].selected = true;
    };
    
    changeTextEffect = (e) =>{
        currentComponent.setTextEffect(this.getTextEffect().value)
        currentComponent.setIsLined("none");
        this.getIsLined().children[0].selected = true;
    };
    
    changeWordSpace = (e) =>{
        currentComponent.setWordSpace(this.getWordSpace().value)
    };
    
    changeLetterSpace = (e) =>{
        currentComponent.setLetterSpace(this.getLetterSpace().value)
    };
    
    changeLineHeight = (e) =>{
        currentComponent.setLineHeight(this.getLineHeight().value)
    };


    //===========================================================

    changeborder = (e) =>{
        this.getborderColor().value = currentComponent.getBorderColor()[this.getborder().value];

        for (let index = 0; index < this.getborderStyle().children.length; index++) {
            if (this.getborderStyle().children[index].value == currentComponent.getBorderStyle()[this.getborder().value]) {
                this.getborderStyle().children[index].selected = true;
                break;
            }
        }
        this.getborderWidth().value = currentComponent.getBorderWidth()[this.getborder().value];
       
        
    }

    changecorner = (e) =>{
        this.getborderRadius().value = currentComponent.getBorderRadius()[this.getCorner().value];
    }

    chBackC = (e) =>{
            currentComponent.setBackGrounColor(this.getbackGrounColor().value);         
    }
    chBordeC = (e) =>{
        currentComponent.setBorderColor(this.getborderColor().value,this.getborder().value);
    }
    chBorderS = (e) =>{
            currentComponent.setBorderStyle(this.getborderStyle().value,this.getborder().value);         
    }
    chBorderW = (e) =>{
            currentComponent.setBorderWidth(this.getborderWidth().value,this.getborder().value);         
    }
    chBorderR = (e) =>{
            currentComponent.setBorderRadius(this.getborderRadius().value,this.getCorner().value);         
    }
    chBorderDesign = (e) =>{
            currentComponent.setBorderDesign(this.getborderDesign().value);     
            currentComponent.setBorderColor("#000000",0);
            this.getborderColor().value = "#000000";
            currentComponent.setBorderStyle("solid",0);
            this.getborderStyle().children[0].selected = true;
            currentComponent.setBorderWidth(5,0);    
            this.getborderWidth().value = 5;
    }
    chBackDesign = (e) =>{
            currentComponent.setBackGrounDesign(this.getbackGrounDesign().value);
            currentComponent.setBackGrounColor("#ffffff");   
            this.getbackGrounColor().value = "#ffffff";
    }

    changeresetBGC = (e) =>{
        currentComponent.setBackGrounColor('transparent');   
        this.getbackGrounColor().value = "#ffffff";      
    }

    changepolygon = (e) =>{
        currentComponent.setPolygon(this.getPolygon().value);
    }

    //===============================================================================

    changewidth = (e) =>{
        if (isSupComponent) {
            currentComponentParent.setWidth(parseInt(this.getWidth().value));
        } else {
            currentComponent.setWidth(parseInt(this.getWidth().value));
        }
    }

    changeautoWidth = (e) =>{
        if (isSupComponent) {
            currentComponentParent.setWidth('auto');
        } else {
            currentComponent.setWidth('auto');
        }
    }
    changeheight = (e) =>{
        if (isSupComponent) {
            currentComponentParent.setHeight(parseInt(this.getHeight().value));
        } else {
            currentComponent.setHeight(parseInt(this.getHeight().value));
        }
    }

    changeautoHeight = (e) =>{
        if (isSupComponent) {
            currentComponentParent.setHeight('auto');
        } else {
            currentComponent.setHeight('auto');
        }
    }
    changexAxis = (e) =>{
        if (isSupComponent) {
            currentComponentParent.setXAxis(parseInt(this.getXAxis().value));
        } else {
            currentComponent.setXAxis(parseInt(this.getXAxis().value));
        }
    }
    changeyAxis = (e) =>{
        if (isSupComponent) {
            currentComponentParent.setYAxis(parseInt(this.getYAxis().value));
        } else {
            currentComponent.setYAxis(parseInt(this.getYAxis().value));
        }
    }
    changezAxis = (e) =>{
        if (isSupComponent) {
            currentComponentParent.setZAxis(this.getZAxis().value);
        } else {
            currentComponent.setZAxis(this.getZAxis().value);
        }
    }
    changeopacity = (e) =>{
        currentComponent.setOpacity(this.getOpacity().value);
    }
    changerotation = (e) =>{
        console.log("heeeeereeeerlkjnsfj'olnkl'rh///////////////////////===////")
        currentComponent.setSkew(this.getSkew().value);
        this.getSkew().value = 0;
        currentComponent.setRotation(this.getRotation().value);
    }
    changepadding = (e) =>{
        currentComponent.setPadding(this.getPadding().value,currentComponent);
    }
    changeskew = (e) =>{
        currentComponent.setRotation(this.getRotation().value);
        this.getRotation().value = 0;
        currentComponent.setSkew(this.getSkew().value);
    }
    //======================================================

    changeallEditablZe = (e) =>{
        this.getIsSizesEditable().checked = this.getAllEditable().checked;
        this.getIsDesignEditable().checked = this.getAllEditable().checked;
        this.getIsContentEditable().checked = this.getAllEditable().checked;
        currentComponent.setIsSizesEditable(this.getIsSizesEditable().checked);
        currentComponent.setIsDesignEditable(this.getIsDesignEditable().checked);
        currentComponent.setIsContentEditable(this.getIsContentEditable().checked);
    }
    changeisSizesEditable = (e) =>{
        currentComponent.setIsSizesEditable(this.getIsSizesEditable().checked);
    }
    changeisDesignEditable = (e) =>{
        currentComponent.setIsDesignEditable(this.getIsDesignEditable().checked);
    }
    changeisContentEditable = (e) =>{
        currentComponent.setIsContentEditable(this.getIsContentEditable().checked);
    }

    //==========================================================================
  
    
    

changeblur = (e) =>{
    currentComponent.setBlur(this.getBlur().value);
}
changebrightness = (e) =>{
    currentComponent.setBrightness(this.getBrightness().value);
}
changecontrast = (e) =>{
    currentComponent.setContrast(this.getContrast().value);
}
changegrayscale = (e) =>{
    currentComponent.setGrayscale(this.getGrayscale().value);
}
changehueRotate = (e) =>{
    currentComponent.setHueRotate(this.getHueRotate().value);
}
changeinvert = (e) =>{
    currentComponent.setInvert(this.getInvert().value);
}
changesaturate = (e) =>{
    currentComponent.setSaturate(this.getSaturate().value);
}
changesepia = (e) =>{
    currentComponent.setSepia(this.getSepia().value);
}
//===========================customContainer=================================
    
    //controlBtn
    changegenerate = (e) =>{
        currentComponent.Generate(this.getGenerate().value);
    }
    //topic
    changetopicLevel = (e) =>{
        currentComponent.setTopicLevel(this.getTopicLevel().value);
    }
    //icon
    changeIcon = (e) =>{
        currentComponent.setIcon(this.getIcon().value);
    }
    changeIconColor = (e) =>{
        currentComponent.setColor(this.getIconColor().value);
    }

    changeiconSize = (e) =>{
        currentComponent.setSize(this.getIconSize().value)
    }
    //image
    //list
    changelistType = (e) =>{
        currentComponent.setStyleType(this.getListType().value);
    }
    changelistStart = (e) =>{
        currentComponent.setStart(this.getListStart().value)
    }
    changeaddItem = (e) =>{
        currentComponentParent.newItem();
    }
    changedeleteItem = (e) =>{
        currentComponentParent.deleteItem(currentComponent);
    }
    changeupItem = (e) =>{
        currentComponentParent.up(currentComponent);
    }
    changedowenItem = (e) =>{
        currentComponentParent.down(currentComponent);
    }
    //listItem

    changelistItemSpace = (e) =>{
        currentComponent.setItemSpace(this.getListItemSpace().value)
    }
    //table
    changeisCollapse = (e) =>{
        currentComponent.setIsCollapse(this.getCollapse().checked)
    }
    changeisSticyCol = (e) =>{
        currentComponent.setIsSticyCol(this.getIsSticyCol().checked)
    }
    changeisSticyRow = (e) =>{
        currentComponent.setIsSticyRow(this.getIsSticyRow().checked)
    }
    changerowSpace = (e) =>{
        currentComponent.setRowSpace(this.getRowSpace().value)
    }
    changecolSpace = (e) =>{
        currentComponent.setColSpace(this.getColSpace().value)
    }

    



    changeaddCol = (e) =>{
        if (isSupComponent) {
            currentComponentParent.newColumn();
        } else {
            currentComponent.newColumn();
        }
    }
    changedeleteCol = (e) =>{
        if (isSupComponent) {
            currentComponentParent.deleteColumn();
        } else {
            currentComponent.deleteColumn();
        }
    }
    changeaddRow = (e) =>{
        if (isSupComponent) {
            currentComponentParent.newRow();
        } else {
            currentComponent.newRow();
        }
    }
    changedeleteRow = (e) =>{
        if (isSupComponent) {
            currentComponentParent.deleteRow();
        } else {
            currentComponent.deleteRow();
        }
    }
    changerowColumnNum = (e) =>{
        // if (isSupComponent) {
        //     currentComponentParent.();
        // } else {
        //     currentComponent.();
        // }
    }




//=========================================================
    clearEdit(value){
        let list = value.children
        let listL = list.length;
     for (let index = 0; index < listL; index++) {
        value.removeChild(list[0])
     } 
    }


    resetEdit(){
        this.getIsLined().children[0].selected = true;
        this.getTextEffect().children[0].selected = true;
        this.getWordSpace().children[0].selected = true;
        this.getLetterSpace().children[0].selected = true;
        this.getLineHeight().children[0].selected = true;
        this.getOpacity().value = 1;
        this.getZAxis().value = 0;
        this.getRotation().value = 0;
        this.getPadding().value = 0;
        this.getbackGrounColor().value = "#ffffff";
        this.getbackGrounDesign().children[0].selected = true;;
        this.getborderColor().value = "#000000";
        this.getborderDesign().children[0].selected = true;;
        this.getborderStyle().children[0].selected = true;;
        this.getborderWidth().value = 0;
        this.getborderRadius().value = 0;
        this.getSkew().value = 0;
        this.getPolygon().children[0].selected = true;
        this.getIconColor().value = "#000000";
        this.getIconSize().value = 20;
    }


    clearBlock(){
        resetFlages();
        this.getEditContainer().remove();
        this.getSideBtnContainer().remove();
        this.getDrager().remove();
        this.getResizer().remove();
        this.getCopy().remove();
        this.getDelete().remove();
        this.getEdit().remove();
    }




    prepairParagraphEdit(isLined,textEffect,wordSpace,letterSpace,lineHeight,
        width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
            this.reDisplayBtn();
        this.clearEdit(this.getEditContainer());
        this.clearEdit(this.getCustomContainer());
        if (isSizesEditable || isFullPreemption) {
            this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew));
            this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
        }
        if (isContentEditable || isFullPreemption) {
            this.getEditContainer().appendChild(this.getTextContainer(isLined,textEffect,wordSpace,letterSpace,lineHeight));
        }
        if (isDesignEditable || isFullPreemption) {
            // this.getCustomContainer().appendChild(this.getRemoveFormat());
            this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
        }
        if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
            this.getCustomContainer().appendChild(this.getRemoveFormat());
        }
        if (isFullPreemption) {
            this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
        }   
        this.getEditContainer().insertBefore(this.getCustomContainer(), this.getEditContainer().children[0]);
    }


    prepairTopicEdit(topicLevel,isLined,textEffect,wordSpace,letterSpace,lineHeight,
        width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
            this.reDisplayBtn();
        this.clearEdit(this.getEditContainer());
        this.clearEdit(this.getCustomContainer());
        if (isSizesEditable || isFullPreemption) {
            this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
            this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
        }
        if (isDesignEditable || isFullPreemption) {
            // this.getCustomContainer().appendChild(this.getRemoveFormat());
            this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
        }
        if (isContentEditable || isFullPreemption) {
            this.getCustomContainer().appendChild(this.getTopicLevel(topicLevel));
            this.getEditContainer().appendChild(this.getTextContainer(isLined,textEffect,wordSpace,letterSpace,lineHeight));
        }
        if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
            this.getCustomContainer().appendChild(this.getRemoveFormat());
        }    
        if (isFullPreemption) {
            this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
        }
        this.getEditContainer().insertBefore(this.getCustomContainer(), this.getEditContainer().children[0]);
        
    }

    



        prepairIconEdit(icon,color,size,
            width,height,opacity,xAxis,yAxis,zAxis,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable){
                this.reDisplayBtn();
            this.clearEdit(this.getEditContainer());
            this.clearEdit(this.getCustomContainer());
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
            this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
                this.getCustomContainer().appendChild(this.getIconSize(size));
            }
            if (isDesignEditable || isFullPreemption) {
            // this.getCustomContainer().appendChild(this.getRemoveFormat());
                this.getCustomContainer().appendChild(this.getIconColor(color));
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }
            if (isContentEditable || isFullPreemption) {
                this.getCustomContainer().appendChild(this.getIcon(icon));
            }
            if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
                this.getCustomContainer().appendChild(this.getRemoveFormat());
            }    
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            }
            this.getEditContainer().insertBefore(this.getCustomContainer(), this.getEditContainer().children[0]);
        }


        prepairImageEdit(blur,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia,
            width,height,opacity,xAxis,yAxis,zAxis,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable){
                this.reDisplayBtn();
            this.clearEdit(this.getEditContainer());
            this.clearEdit(this.getCustomContainer());
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
            }
            if (isDesignEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getImageContainer(blur,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia))
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }
            if (isContentEditable || isFullPreemption) {
                // this.getCustomContainer().appendChild(this.getAddItem());
                // this.getCustomContainer().appendChild(this.getDeleteItem());
                // this.getCustomContainer().appendChild(this.getSellectImage());
            }
            if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
                this.getCustomContainer().appendChild(this.getRemoveFormat());
            }       
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            } 
            this.getEditContainer().insertBefore(this.getCustomContainer(), this.getEditContainer().children[0]);
        }



        prepairListEdit(start,styleType,
            width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable){
                this.reDisplayBtn();
            this.clearEdit(this.getEditContainer());
            this.clearEdit(this.getCustomContainer());
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
            }
            if (isDesignEditable || isFullPreemption) {
                this.getCustomContainer().appendChild(this.getRemoveFormat());
                this.getCustomContainer().appendChild(this.getListStart(start));
                this.getCustomContainer().appendChild(this.getListType(styleType));
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            }
            
            this.getEditContainer().insertBefore(this.getCustomContainer(), this.getEditContainer().children[0]);
        }

        prepairListSideBtn(isContentEditable){
            this.clearEdit(this.getSideBtnContainer());
            if (isContentEditable){
                this.getSideBtnContainer().appendChild(this.getAddItem());
                this.getSideBtnContainer().appendChild(this.getDeleteItem());
                this.getSideBtnContainer().appendChild(this.getUpItem());
                this.getSideBtnContainer().appendChild(this.getDowenItem());
            }
        }




        prepairListItemEdit(itemSpace,
            isLined,textEffect,wordSpace,letterSpace,lineHeight
            ,opacity,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable){
                this.reDisplayBtn();
            this.clearEdit(this.getEditContainer());
            this.clearEdit(this.getCustomContainer());
            if (isSizesEditable || isFullPreemption) {
                this.getCustomContainer().appendChild(this.getListItemSpace(itemSpace));
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));

            }
            if (isDesignEditable || isFullPreemption) {
            this.getCustomContainer().appendChild(this.getRemoveFormat());
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }
            if (isContentEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getTextContainer(isLined,textEffect,wordSpace,letterSpace,lineHeight));
            }
            if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
                this.getCustomContainer().appendChild(this.getRemoveFormat());
            }  
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            }   
            this.getEditContainer().insertBefore(this.getCustomContainer(), this.getEditContainer().children[0]);
        }

      
        
        


        prepairTableEdit(isCollapse,isSticyCol,isSticyRow,rowSpace,colSpace,
            width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable){
                this.reDisplayBtn();
            this.clearEdit(this.getEditContainer());
            this.clearEdit(this.getCustomContainer());
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
                this.getCustomContainer().appendChild(this.getColSpace(colSpace));
                this.getCustomContainer().appendChild(this.getRowSpace(rowSpace));
            }
            if (isDesignEditable || isFullPreemption) {
            this.getCustomContainer().appendChild(this.getRemoveFormat());
                this.getCustomContainer().appendChild(this.getCollapse(isCollapse));
                this.getCustomContainer().appendChild(this.getIsSticyCol(isSticyCol));
                this.getCustomContainer().appendChild(this.getIsSticyRow(isSticyRow));
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }
            // if (isContentEditable || isFullPreemption) {
               
            // }
            if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
                this.getCustomContainer().appendChild(this.getRemoveFormat());
            }  
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            }
            
            this.getEditContainer().insertBefore(this.getCustomContainer(), this.getEditContainer().children[0]);
        }
        
        
        prepairTableSideBtn(isContentEditable){
            this.clearEdit(this.getSideBtnContainer());
            if (isContentEditable){
                this.getSideBtnContainer().appendChild(this.getAddCol());
                this.getSideBtnContainer().appendChild(this.getDeleteCol());
                this.getSideBtnContainer().appendChild(this.getAddRow());
                this.getSideBtnContainer().appendChild(this.getDeleteRow());
                this.getSideBtnContainer().appendChild(this.getRowColumnNum());
            }
        }



        prepairTbleRowEdit(opacity,rotation,skew,isSizesEditable){
            this.reDisplayBtn();
            this.clearEdit(this.getEditContainer());
            this.clearEdit(this.getCustomContainer());
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,0,skew));
                this.getPadding().style.display = "none";
                this.getCustomContainer().appendChild(this.getRemoveFormat());
            }
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable));
                this.getIsContentEditable().style.display = "none";
                this.getIsDesignEditable().style.display = "none";
                this.getAllEditable().style.display = "none";
            }   
            this.getEditContainer().insertBefore(this.getCustomContainer(), this.getEditContainer().children[0]);
        }

        reDisplayBtn(){
            this.getPadding().style.display = "inline";
            this.getIsContentEditable().style.display = "inline";
            this.getIsDesignEditable().style.display = "inline";
            this.getAllEditable().style.display = "inline";

        }


        prepairTableCellEdit(isLined,textEffect,wordSpace,letterSpace,lineHeight
            ,opacity,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable){
            this.reDisplayBtn(); 
            this.clearEdit(this.getEditContainer());
            this.clearEdit(this.getCustomContainer());
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));

            }
            if (isDesignEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }
            if (isContentEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getTextContainer(isLined,textEffect,wordSpace,letterSpace,lineHeight));
            }
            if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
                this.getCustomContainer().appendChild(this.getRemoveFormat());
            }  
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            }   
            this.getEditContainer().insertBefore(this.getCustomContainer(), this.getEditContainer().children[0]);
        }


        setComponentName(value){
            this.componentName.innerText = value;
        }

    getComponentName(){return this.componentName;}
    getDrager(){return this.drager;}
    getDelete(){return this.delete;}
    getCopy(){return this.copy;}
    getEdit(){return this.edit;}
    getResizer(){return this.resizer;}
    getCoordinates(){return this.coordinates;}
    getSize(){return this.size;}
    getRemoveFormat(){return this.removeFormat;}
    getEditContainer(){return this.editContainer;}

    getTextContainer(isLined,textEffect,wordSpace,letterSpace,lineHeight){
        for (let index = 0; index < this.getIsLined().children.length; index++) {
            if (this.getIsLined().children[index].value == isLined) {
                    this.getIsLined().children[index].selected = true;
                    break;
                }
            }
        for (let index = 0; index < this.getTextEffect().children.length; index++) {
            if (this.getTextEffect().children[index].value == textEffect) {
                    this.getTextEffect().children[index].selected = true;
                    break;
                }
            }

            for (let index = 0; index < this.getWordSpace().children.length; index++) {
                if (this.getWordSpace().children[index].value === wordSpace) {
                        this.getWordSpace().children[index].selected = true;
                        break;
                }
            }
            for (let index = 0; index < this.getLetterSpace().children.length; index++) {
                if (this.getLetterSpace().children[index].value === letterSpace) {
                        this.getLetterSpace().children[index].selected = true;
                        break;
                }
            }
            for (let index = 0; index < this.getLineHeight().children.length; index++) {
                if (this.getLineHeight().children[index].value === lineHeight) {
                        this.getLineHeight().children[index].selected = true;
                        break;
                }
            }
        return this.textContainer;
    }

    getIsLined(){
        return this.isLined;
    }
    getTextEffect(){
        return this.textEffect;
    }
    getWordSpace(){
        return this.wordSpace;
    }
    getLetterSpace(){
        return this.letterSpace;
    }
    getLineHeight(){
        return this.lineHeight;
    }

    getSizesContainer(width,height,xAxis,yAxis,zAxis,){
        this.getWidth().value = width;
        this.getHeight().value = height;
        this.getXAxis().value = xAxis;
        this.getYAxis().value = yAxis;
        this.getZAxis().value = zAxis;
        this.setCoordnait(xAxis,yAxis);
        this.setSize(width,height);
        return this.sizesContainer;
    }
    getViewContainer(opacity,rotation,padding,skew){
        this.getOpacity().value = opacity;
        this.getRotation().value = rotation;
        this.getPadding().value = padding;
        this.getSkew().value = skew
        return this.viewContainer;
    }
    
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    getXAxis(){
        return this.xAxis;
    }
    getYAxis(){
        return this.yAxis;
    }
    getZAxis(){
        return this.zAxis;
    }
    getOpacity(){
        return this.opacity;
    }
    getRotation(){
        return this.rotation;
    }
    getPadding(){
        return this.padding;
    }
    getSkew(){
        return this.skew;
    }
    getControlContainer(isSizesEditable,isDesignEditable,isContentEditable){
        this.getIsContentEditable().checked = isContentEditable;
        this.getIsDesignEditable().checked = isDesignEditable;
        this.getIsSizesEditable().checked = isSizesEditable;
        if (isContentEditable && isDesignEditable && isSizesEditable) {
            this.getAllEditable().checked = true;
        } else{
            this.getAllEditable().checked = false;
        }
        return this.controlContainer;
    }
    getAllEditable(){
        return this.allEditable;
    }
    getIsSizesEditable(){
        return this.isSizesEditable;
    }
    getIsDesignEditable(){
        return this.isDesignEditable;
    }
    getIsContentEditable(){
        return this.isContentEditable;
    }
    getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon){
        let i = this.getborder().value;
        this.getbackGrounColor().value = backGrounColor;

        for (let index = 0; index < this.getbackGrounDesign().children.length; index++) {
            if (this.getbackGrounDesign().children[index].value == backGrounDesign) {
                this.getbackGrounDesign().children[index].selected = true;
                break;
            }
        }
        
        this.getborderColor().value = borderColor[i];
        
        for (let index = 0; index < this.getborderDesign().children.length; index++) {
            if (this.getborderDesign().children[index].value == borderDesign) {
                this.getborderDesign().children[index].selected = true;
                break;
            }
        }
        
        for (let index = 0; index < this.getborderStyle().children.length; index++) {
            if (this.getborderStyle().children[index].value == borderStyle[i]) {
                this.getborderStyle().children[index].selected = true;
                break;
            }
        }

        for (let index = 0; index < this.getPolygon().children.length; index++) {
            if (this.getPolygon().children[index].value == polygon) {
                this.getPolygon().children[index].selected = true;
                break;
            }
        }
        
        
        this.getborderWidth().value = borderWidth[i];
        this.getborderRadius().value = borderRadius[i];
        
        return this.designContainer;
    };
    
    getResetBackGroundColor(){
        return this.resetBackGroundColor;
    }
    getPolygon(){
        return this.polygon;
    }
    


    //====================================================
    //====================================================
    //====================================================
    getImageContainer(blur,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia){
        this.getBlur().value = blur; 
        this.getBrightness().value = brightness; 
        this.getContrast().value = contrast; 
        this.getGrayscale().value = grayscale; 
        this.getHueRotate().value = hueRotate; 
        this.getInvert().value = invert; 
        this.getSaturate().value = saturate; 
        this.getSepia().value = sepia; 
        return this.imageContainer;
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

    //==========================================
    getCustomContainer(){
        return this.customContainer;
    }
    getSideBtnContainer(){return this.sideBtnContainer;}
    getTopicLevel(topicLevel){
        if (topicLevel != undefined) {
            this.topicLevel.value = topicLevel;
        }
        return this.topicLevel;
    }
    getAddItem(){
        return this.addItem;
    }
    getDeleteItem(){
        return this.deleteItem;
    }
    getUpItem(){
        return this.upItem;
    }
    getDowenItem(){
        return this.dowenItem;
    }
    getGenerate(){
        return this.generate;
    }
    getIcon(value){
        if (value != undefined) {
            for (let index = 0; index < this.icon.children.length; index++) {
                if (this.icon.children[index].value == value) {
                        this.icon.children[index].selected = true;
                        break;
                    }
                }
        }
        return this.icon;
    }
    getIconStyle(value){
        if (value != undefined) {
            for (let index = 0; index < this.iconStyle.children.length; index++) {
                if (this.iconStyle.children[index].value == value) {
                        this.iconStyle.children[index].selected = true;
                        break;
                    }
                }
        }
        return this.iconStyle;
    }
    getIconColor(value){
        if (value != undefined) {
            this.iconColor.value = value;
        }
        return this.iconColor;
    }
    getIconSize(value){
        if (value != undefined) {
            this.iconSize.value = value;
        }
        return this.iconSize;
    }
    getListItem(value){
        if (value != undefined) {
            for (let index = 0; index < this.listItem.children.length; index++) {
                if (this.listItem.children[index].value == value) {
                        this.listItem.children[index].selected = true;
                        break;
                    }
                }
        }
        return this.listItem;
    }
    getListType(value){
        if (value != undefined) {
            for (let index = 0; index < this.listType.children.length; index++) {
                if (this.listType.children[index].value == value) {
                        this.listType.children[index].selected = true;
                        break;
                    }
                }
        }
        return this.listType;
    }
    getListStart(value){
        if (value != undefined) {
            this.listStart.value = value;
        }
        return this.listStart;
    }

    getListItemSpace(value){
        if (value != undefined) {
            this.listItemSpace.value = value;
        }
        return this.listItemSpace;
    }
    getTableItem(value){
        if (value != undefined) {
            for (let index = 0; index < this.tableItem.children.length; index++) {
                if (this.tableItem.children[index].value == value) {
                        this.tableItem.children[index].selected = true;
                        break;
                    }
                }
        }
        return this.tableItem;
    }
    //table ===========================================================
    getCollapse(value){
        if (value != undefined) {
            this.isCollapse.checked = value;
        }
        return this.isCollapse;
    }

    getIsSticyCol(value){
        if(value != undefined){
            this.isSticyCol.checked = value;
        }
        return this.isSticyCol;
    }
    getIsSticyRow(value){
        if(value != undefined){
            this.isSticyRow.checked = value;
        }
        return this.isSticyRow;
    }
    getRowSpace(value){
        if (value != undefined) {
            this.rowSpace.value = value;
        }
        return this.rowSpace;
    }
    getColSpace(value){
        if (value != undefined) {
            this.colSpace.value = value;
        }
        return this.colSpace;
    }
    getAddCol(){return this.addCol;}
    getDeleteCol(){return this.deleteCol;}
    getAddRow(){return this.addRow;}
    getDeleteRow(){return this.deleteRow;}
    getRowColumnNum(){return this.rowColumnNum;}
    //TableCells ================================================
    getRowSpan(value){
        if (value != undefined) {
            this.rowSpan.value = value;
        }
        return this.rowSpan;
    }
    getColSpan(value){
        if (value != undefined) {
            this.colSpan.value = value;
        }
        return this.colSpan;
    }
    // getTableType(value){
    //     if (value != undefined) {
    //         for (let index = 0; index < this.tableType.children.length; index++) {
    //             if (this.tableType.children[index].value == value) {
    //                     this.tableType.children[index].selected = true;
    //                     break;
    //                 }
    //             }
    //     }
    //     return this.tableType;
    // }
    
}
