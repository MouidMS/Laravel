import { currentPage } from "./Page.js";
import { currentComponent, currentComponentParent,isSupComponent, resetFlages} from "./Component.js";
import { heighestComponent, setCompInFlag } from "./ParentComponent.js";
import { leftSide,scrollUp,scrolldown,isFullPreemption} from "./main.js";
import {borderStyle,textSpacing,iconList,listStyles,polygon,gradient,borderImage,} from "./Info/EditData.js"
import BasicEdit from './BasicEdit.js';
import ListItem from "./ListItem.js";

// let W,H,X,Y;
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
    backGroundContainer;
    borderContainer;

    controlContainer;
    allEditable;
    isSizesEditable;
    isDesignEditable;
    isContentEditable;


    customContainer;
    sideBtnContainer;

    //topic
    customTopicContainer;
    topicLevel;

    //icon
    customIconContainer
    fs_icon1
    fs_icon2
    fs_icon3

    icon;
    iconColor;
    iconSize;

    //image
    sellectImage;

    //list
    customListContainer
    fs_list1;
    fs_list2;

    listType;
    listStart;
    addItem;
    deleteItem;
    upItem;
    dowenItem;

    //listItem
    customListItemContainer
    fs_listItem;

    listItemSpace;

    //topicList
    generate;

    //table
    customTableContainer
    FS_table1;
    FS_table2;
    FS_table3;
    FS_table4;

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
        this.drager = document.createElement('div');
        this.drager.id = 'cddrager';
        this.drager.addEventListener('mousedown', this.dragElement);

        this.coordinates = document.createElement('div');
        this.coordinates.id = 'coordinate';

        this.delete = document.createElement('button');
        this.delete.id = 'cddelete';
        this.delete.insertAdjacentHTML('beforeend','<i class="fa-solid fa-trash"></i>');
        this.delete.addEventListener('click', this.deleteElement);

        this.copy = document.createElement('button');
        this.copy.id = 'cdcopy';
        this.copy.insertAdjacentHTML('beforeend','<i class="fa-solid fa-copy"></i>');
        this.copy.addEventListener('click', this.copyElement);

        this.edit = document.createElement('button');
        this.edit.id = 'cdedit';
        this.edit.insertAdjacentHTML('beforeend','<i class="fa-solid fa-gear"></i>');
        this.edit.addEventListener('click', this.editElement);

        this.resizer = document.createElement('div');
        this.resizer.id = 'cdresize';
        // this.resizer.innerText = "R";
        this.resizer.addEventListener('mousedown', this.resizeElement);

        this.size = document.createElement('div');
        this.size.id = 'size';

        this.componentName = document.createElement('p');
        this.componentName.id = 'componentName';


        this.removeFormat = document.createElement('button');
        this.removeFormat.id = 'removeFormat';
        this.removeFormat.insertAdjacentHTML('beforeend','<i class="fa-solid fa-trash"></i>');
        this.removeFormat.addEventListener('mousedown', this.removeElementFormat);

        this.sideBtnContainer = document.createElement('div');
        this.sideBtnContainer.id = 'sideBtnContainer';

        //=========================================================================


        // setAttribute
        // addEventListener
        // insertAdjacentHTML("beforeend", `<h4>Color Page</h4>`);
        // appendChild

        this.editContainer = document.createElement('div');
        this.editContainer.classList.add('FS-properties');
        this.editContainer.id = 'editContainer';

        //=====================================================================================================
        // SIZE
        this.sizesContainer = document.createElement('div');
        this.sizesContainer.classList.add('FS-boxRed');
        // this.sizesContainer.id = 'sizesContainer';

        //====WH===//
        let FS_rowPR = document.createElement('div');
        FS_rowPR.classList.add('FS-rowPR');


        let FS_rowPRB1 = document.createElement('div');
        FS_rowPRB1.classList.add('FS-boxButt');
        FS_rowPRB1.insertAdjacentHTML("beforeend", `<p>W</p>`);

        this.width = document.createElement('input')
        this.width.id = 'width';
        this.width.setAttribute('type','number');
        this.width.setAttribute('min','50');
        this.width.addEventListener('change', this.changewidth)
        this.width.classList.add('FS-inputNum');



        this.autoWidth = document.createElement('button');
        this.autoWidth.id = 'autoWidth';
        this.autoWidth.classList.add('autoWidth');
        this.autoWidth.addEventListener('click', this.changeautoWidth);
        this.autoWidth.classList.add('FS-buttonPR');
        this.autoWidth.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_rowPRB1.appendChild(this.width);
        FS_rowPRB1.appendChild(this.autoWidth);



        let FS_rowPRB2 = document.createElement('div');
        FS_rowPRB2.classList.add('FS-boxButt');
        FS_rowPRB2.insertAdjacentHTML("beforeend", `<p>H</p>`);

        this.height = document.createElement('input')
        this.height.id = 'height';
        this.height.setAttribute('type','number');
        this.height.setAttribute('min','0');
        this.height.addEventListener('change', this.changeheight)
        this.height.classList.add('FS-inputNum');


        this.autoHeight = document.createElement('button');
        this.autoHeight.id = 'autoHeight';
        this.autoHeight.classList.add('autoHeight');
        this.autoHeight.addEventListener('click', this.changeautoHeight);
        this.autoHeight.classList.add('FS-buttonPR');
        this.autoHeight.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_rowPRB2.appendChild(this.height);
        FS_rowPRB2.appendChild(this.autoHeight);

        FS_rowPR.appendChild(FS_rowPRB1);
        FS_rowPR.appendChild(FS_rowPRB2);




        //==XY==//
        let FS_rowPR2 = document.createElement('div');
        FS_rowPR2.classList.add('FS-rowPR');


        let FS_rowPR2B1 = document.createElement('div');
        FS_rowPR2B1.classList.add('FS-boxButt');
        FS_rowPR2B1.insertAdjacentHTML("beforeend", `<p>X</p>`);


        this.xAxis = document.createElement('input')
        this.xAxis.id = 'xAxis';
        this.xAxis.setAttribute('type','number');
        this.xAxis.setAttribute('min','10');
        this.xAxis.addEventListener('change', this.changexAxis)
        this.xAxis.classList.add('FS-inputNum');


        FS_rowPR2B1.appendChild(this.xAxis);


        let FS_rowPR2B2 = document.createElement('div');
        FS_rowPR2B2.classList.add('FS-boxButt','FS-boxButt2');
        FS_rowPR2B2.insertAdjacentHTML("beforeend", `<p>Y</p>`);

        this.yAxis = document.createElement('input')
        this.yAxis.id = 'yAxis';
        this.yAxis.setAttribute('type','number');
        this.yAxis.setAttribute('min','10');
        this.yAxis.addEventListener('change', this.changeyAxis)
        this.yAxis.classList.add('FS-inputNum');



        FS_rowPR2B2.appendChild(this.yAxis);


        FS_rowPR2.appendChild(FS_rowPR2B1);
        FS_rowPR2.appendChild(FS_rowPR2B2);

        //===Z====//
        let FS_rowPR3 = document.createElement('div');
        FS_rowPR3.classList.add('FS-boxButt');
        FS_rowPR3.insertAdjacentHTML("beforeend", `<p>Z</p>`);

        this.zAxis = document.createElement('input')
        this.zAxis.id = 'yAxis';
        this.zAxis.setAttribute('type','number');
        this.zAxis.setAttribute('min','1');
        this.zAxis.addEventListener('change', this.changezAxis)
        this.zAxis.classList.add('FS-inputNum');

        let autozAxis = document.createElement('button');
        autozAxis.id = 'autozAxis';
        autozAxis.classList.add('autozAxis');
        autozAxis.addEventListener('click', this.changeautozAxis);//not
        autozAxis.classList.add('FS-buttonPR');
        autozAxis.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_rowPR3.appendChild(this.zAxis);
        FS_rowPR3.appendChild(autozAxis);

        this.sizesContainer.appendChild(FS_rowPR);
        this.sizesContainer.appendChild(FS_rowPR2);
        this.sizesContainer.appendChild(FS_rowPR3);




         //=====================================================================================================
        // SIZE

        this.viewContainer = document.createElement('div');
        this.viewContainer.classList.add('FS-boxBlue');
        this.viewContainer.id = 'viewContainer';

        let FS_boxBlue1 = document.createElement('div');
        FS_boxBlue1.classList.add('FS-boxButt');
        FS_boxBlue1.insertAdjacentHTML("beforeend", `<p>Opacity :</p>`);


        this.opacity = document.createElement('input')
        this.opacity.id = 'opacity';
        this.opacity.setAttribute('type','number');
        this.opacity.setAttribute('min','0');
        this.opacity.setAttribute('max','1');
        this.opacity.setAttribute('step','0.01');
        this.opacity.addEventListener('change', this.changeopacity)
        this.opacity.classList.add('FS-inputNum');


        let autoOpacity = document.createElement('button');
        autoOpacity.id = 'autoOpacity';
        autoOpacity.classList.add('autoOpacity');
        autoOpacity.addEventListener('click', this.changeautoOpacity);//not
        autoOpacity.classList.add('FS-buttonPR');
        autoOpacity.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxBlue1.appendChild(this.opacity);
        FS_boxBlue1.appendChild(autoOpacity);


        let FS_boxBlue2 = document.createElement('div');
        FS_boxBlue2.classList.add('FS-boxButt');
        FS_boxBlue2.insertAdjacentHTML("beforeend", `<p>Rotation :</p>`);

        this.rotation = document.createElement('input')
        this.rotation.id = 'rotation';
        this.rotation.setAttribute('type','number');
        this.rotation.setAttribute('min','-360');
        this.rotation.setAttribute('max','360');
        this.rotation.addEventListener('change', this.changerotation)
        this.rotation.classList.add('FS-inputNum');


        let autoRotation = document.createElement('button');
        autoRotation.id = 'autoRotation';
        autoRotation.classList.add('autoRotation');
        autoRotation.addEventListener('click', this.changeautoRotation);
        autoRotation.classList.add('FS-buttonPR');
        autoRotation.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxBlue2.appendChild(this.rotation);
        FS_boxBlue2.appendChild(autoRotation);


        let FS_boxBlue3 = document.createElement('div');
        FS_boxBlue3.classList.add('FS-boxButt');
        FS_boxBlue3.insertAdjacentHTML("beforeend", `<p>Padding :</p>`);


        this.padding = document.createElement('input')
        this.padding.id = 'padding';
        this.padding.setAttribute('type','number');
        this.padding.setAttribute('min','0');
        this.padding.addEventListener('change', this.changepadding)
        this.padding.classList.add('FS-inputNum');


        let autoPadding = document.createElement('button');
        autoPadding.id = 'autoPadding';
        autoPadding.classList.add('autoPadding');
        autoPadding.addEventListener('click', this.changeautoPadding);
        autoPadding.classList.add('FS-buttonPR');
        autoPadding.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxBlue3.appendChild(this.padding);
        FS_boxBlue3.appendChild(autoPadding);


        let FS_boxBlue4 = document.createElement('div');

        FS_boxBlue4.classList.add('FS-boxButt');
        FS_boxBlue4.insertAdjacentHTML("beforeend", `<p>Skew :</p>`);

        this.skew = document.createElement('input')
        this.skew.id = 'skew';
        this.skew.setAttribute('type','number');
        this.skew.setAttribute('min','0');
        this.skew.addEventListener('change', this.changeskew)
        this.skew.classList.add('FS-inputNum');


        let autoSkew = document.createElement('button');
        autoSkew.id = 'autoSkew';
        autoSkew.classList.add('autoSkew');
        autoSkew.addEventListener('click', this.changeautoSkew);
        autoSkew.classList.add('FS-buttonPR');
        autoSkew.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxBlue4.appendChild(this.skew);
        FS_boxBlue4.appendChild(autoSkew);


        this.viewContainer.appendChild(FS_boxBlue1);
        this.viewContainer.appendChild(FS_boxBlue2);
        this.viewContainer.appendChild(FS_boxBlue3);
        this.viewContainer.appendChild(FS_boxBlue4);



        //====================================================================================================================
        this.textContainer = document.createElement('div');
        this.textContainer.id = 'textContainer';
        this.textContainer.classList.add('FS-boxGreen');
        this.textContainer.insertAdjacentHTML("beforeend", `<h3>Text</h3>`);

        let FS_boxGreen1 = document.createElement('div');
        FS_boxGreen1.classList.add('FS-boxButt');
        FS_boxGreen1.insertAdjacentHTML("beforeend", `<p>Line:</p>`);

        this.isLined = document.createElement('select');
        this.isLined.insertAdjacentHTML("beforeend", `<option value="none">White Peper</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="normalL">Normal Line</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="englishL">English Line</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="numbered">Numbered</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="numberedL">Numbered Line</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="circle">Circle</option>`);
        this.isLined.insertAdjacentHTML("beforeend", `<option value="circleL">Circle Line</option>`);
        this.isLined.addEventListener('change', this.changeIsLined);
        this.isLined.classList.add('FS-selectPR');

        FS_boxGreen1.appendChild(this.isLined);


        let FS_boxGreen2 = document.createElement('div');
        FS_boxGreen2.classList.add('FS-boxButt');
        FS_boxGreen2.insertAdjacentHTML("beforeend", `<p>Effect:</p>`);


        this.textEffect = document.createElement('select');
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontEffect1">Effect1</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontCloud">Cloud</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontWaves" >Waves</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontUnderLine">Underline</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontEffect2" >Effict2</option>`);
        this.textEffect.insertAdjacentHTML("beforeend", `<option value="FontTyping" >Typing</option>`);
        this.textEffect.addEventListener('change', this.changeTextEffect);
        this.textEffect.classList.add('FS-selectPR');

        FS_boxGreen2.appendChild(this.textEffect);


        let FS_boxGreen3 = document.createElement('div');
        FS_boxGreen3.classList.add('FS-boxButt');
        FS_boxGreen3.insertAdjacentHTML("beforeend", `<p>Word:</p>`);


        this.wordSpace = document.createElement('input')
        this.wordSpace.setAttribute('type','number');
        this.wordSpace.setAttribute('min','0');
        this.wordSpace.addEventListener('change', this.changeWordSpace);
        this.wordSpace.classList.add('FS-inputNum');


        let autowordSpace = document.createElement('button');
        autowordSpace.id = 'autowordSpace';
        autowordSpace.classList.add('autowordSpace');
        autowordSpace.addEventListener('click', this.changeautowordSpace);
        autowordSpace.classList.add('FS-buttonPR');
        autowordSpace.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxGreen3.appendChild(this.wordSpace);
        FS_boxGreen3.appendChild(autowordSpace);


        let FS_boxGreen4 = document.createElement('div');
        FS_boxGreen4.classList.add('FS-boxButt');
        FS_boxGreen4.insertAdjacentHTML("beforeend", `<p>Letter:</p>`);





        this.letterSpace = document.createElement('input')
        this.letterSpace.id = 'letterSpace';
        this.letterSpace.setAttribute('type','number');
        this.letterSpace.setAttribute('min','0');
        this.letterSpace.addEventListener('change', this.changeLetterSpace);
        this.letterSpace.classList.add('FS-inputNum');


        let autoletterSpace = document.createElement('button');
        autoletterSpace.id = 'autoletterSpace';
        autoletterSpace.classList.add('autoletterSpace');
        autoletterSpace.addEventListener('click', this.changeautoletterSpace);
        autoletterSpace.classList.add('FS-buttonPR');
        autoletterSpace.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxGreen4.appendChild(this.letterSpace);
        FS_boxGreen4.appendChild(autoletterSpace);


        let FS_boxGreen5 = document.createElement('div');
        FS_boxGreen5.classList.add('FS-boxButt');
        FS_boxGreen5.insertAdjacentHTML("beforeend", `<p>Line:</p>`);


        this.lineHeight = document.createElement('input')
        this.lineHeight.id = 'lineHeight';
        this.lineHeight.setAttribute('type','number');
        this.lineHeight.setAttribute('min','0');
        this.lineHeight.addEventListener('change', this.changeLineHeight);
        this.lineHeight.classList.add('FS-inputNum');


        let autolineHeight = document.createElement('button');
        autolineHeight.id = 'autolineHeight';
        autolineHeight.classList.add('autolineHeight');
        autolineHeight.addEventListener('click', this.changeautolineHeight);
        autolineHeight.classList.add('FS-buttonPR');
        autolineHeight.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxGreen5.appendChild(this.lineHeight);
        FS_boxGreen5.appendChild(autolineHeight);



        this.textContainer.appendChild(FS_boxGreen1);
        this.textContainer.appendChild(FS_boxGreen2);
        this.textContainer.insertAdjacentHTML("beforeend", `<h4>Space</h4>`);
        this.textContainer.appendChild(FS_boxGreen3);
        this.textContainer.appendChild(FS_boxGreen4);
        this.textContainer.appendChild(FS_boxGreen5);



        //=================================================================================
        //IMAGE
        this.imageContainer = document.createElement('div');
        this.imageContainer.id = 'imageContainer';
        this.imageContainer.classList.add("FS-boxFilter");
        this.imageContainer.insertAdjacentHTML("beforeend", `<p class="FS-p2">Filter Images</p>`);

        let FS_boxFilter1 =  document.createElement('div');
        FS_boxFilter1.classList.add('FS-boxButt');
        FS_boxFilter1.insertAdjacentHTML("beforeend", `<p>Blur:</p>`);


        this.blur = document.createElement('input')
        this.blur.id = 'blur';
        this.blur.setAttribute('type','number');
        this.blur.setAttribute('min','0');
        this.blur.addEventListener('change', this.changeblur)
        this.blur.classList.add('FS-inputNum');


        let autoblur = document.createElement('button');
        autoblur.id = 'autoblur';
        autoblur.classList.add('autoblur');
        autoblur.addEventListener('click', this.changeautoblur);
        autoblur.classList.add('FS-buttonPR');
        autoblur.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxFilter1.appendChild(this.blur);
        FS_boxFilter1.insertAdjacentHTML("beforeend", `px`);
        FS_boxFilter1.appendChild(autoblur);


        let FS_boxFilter2 =  document.createElement('div');
        FS_boxFilter2.classList.add('FS-boxButt');
        FS_boxFilter2.insertAdjacentHTML("beforeend", `<p>Brightness:</p>`);



        this.brightness = document.createElement('input')
        this.brightness.id = 'brightness';
        this.brightness.setAttribute('type','number');
        this.brightness.setAttribute('min','0');
        this.brightness.addEventListener('change', this.changebrightness)
        this.brightness.classList.add('FS-inputNum');


        let autobrightness = document.createElement('button');
        autobrightness.id = 'autobrightness';
        autobrightness.classList.add('autobrightness');
        autobrightness.addEventListener('click', this.changeautobrightness);
        autobrightness.classList.add('FS-buttonPR');
        autobrightness.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxFilter2.appendChild(this.brightness);
        FS_boxFilter2.insertAdjacentHTML("beforeend", `%`);
        FS_boxFilter2.appendChild(autobrightness);



        let FS_boxFilter3 =  document.createElement('div');
        FS_boxFilter3.classList.add('FS-boxButt');
        FS_boxFilter3.insertAdjacentHTML("beforeend", `<p>Contrast:</p>`);


        this.contrast = document.createElement('input')
        this.contrast.id = 'contrast';
        this.contrast.setAttribute('type','number');
        this.contrast.setAttribute('min','0');
        this.contrast.addEventListener('change', this.changecontrast)
        this.contrast.classList.add('FS-inputNum');


        let autocontrast = document.createElement('button');
        autocontrast.id = 'autocontrast';
        autocontrast.classList.add('autocontrast');
        autocontrast.addEventListener('click', this.changeautocontrast);
        autocontrast.classList.add('FS-buttonPR');
        autocontrast.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxFilter3.appendChild(this.contrast);
        FS_boxFilter3.insertAdjacentHTML("beforeend", `%`);
        FS_boxFilter3.appendChild(autocontrast);


        let FS_boxFilter4 =  document.createElement('div');
        FS_boxFilter4.classList.add('FS-boxButt');
        FS_boxFilter4.insertAdjacentHTML("beforeend", `<p>Grayscale:</p>`);

        this.grayscale = document.createElement('input')
        this.grayscale.id = 'grayscale';
        this.grayscale.setAttribute('type','number');
        this.grayscale.setAttribute('min','0');
        this.grayscale.addEventListener('change', this.changegrayscale)
        this.grayscale.classList.add('FS-inputNum');


        let autograyscale = document.createElement('button');
        autograyscale.id = 'autograyscale';
        autograyscale.classList.add('autograyscale');
        autograyscale.addEventListener('click', this.changeautograyscale);
        autograyscale.classList.add('FS-buttonPR');
        autograyscale.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxFilter4.appendChild(this.grayscale);
        FS_boxFilter4.insertAdjacentHTML("beforeend", `%`);
        FS_boxFilter4.appendChild(autograyscale);


        let FS_boxFilter5 =  document.createElement('div');
        FS_boxFilter5.classList.add('FS-boxButt');
        FS_boxFilter5.insertAdjacentHTML("beforeend", `<p>HueRotate:</p>`);


        this.hueRotate = document.createElement('input')
        this.hueRotate.id = 'hueRotate';
        this.hueRotate.setAttribute('type','number');
        this.hueRotate.setAttribute('min','0');
        this.hueRotate.addEventListener('change', this.changehueRotate)
        this.hueRotate.classList.add('FS-inputNum');


        let autohueRotate = document.createElement('button');
        autohueRotate.id = 'autohueRotate';
        autohueRotate.classList.add('autohueRotate');
        autohueRotate.addEventListener('click', this.changeautohueRotate);
        autohueRotate.classList.add('FS-buttonPR');
        autohueRotate.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxFilter5.appendChild(this.hueRotate);
        FS_boxFilter5.insertAdjacentHTML("beforeend", `deg`);
        FS_boxFilter5.appendChild(autohueRotate);


        let FS_boxFilter6 =  document.createElement('div');
        FS_boxFilter6.classList.add('FS-boxButt');
        FS_boxFilter6.insertAdjacentHTML("beforeend", `<p>Invert:</p>`);


        this.invert = document.createElement('input')
        this.invert.id = 'invert';
        this.invert.setAttribute('type','number');
        this.invert.setAttribute('min','0');
        this.invert.addEventListener('change', this.changeinvert)
        this.invert.classList.add('FS-inputNum');


        let autoinvert = document.createElement('button');
        autoinvert.id = 'autoinvert';
        autoinvert.classList.add('autoinvert');
        autoinvert.addEventListener('click', this.changeautoinvert);
        autoinvert.classList.add('FS-buttonPR');
        autoinvert.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxFilter6.appendChild(this.invert);
        FS_boxFilter6.insertAdjacentHTML("beforeend", `px`);
        FS_boxFilter6.appendChild(autoinvert);


        let FS_boxFilter7 =  document.createElement('div');
        FS_boxFilter7.classList.add('FS-boxButt');
        FS_boxFilter7.insertAdjacentHTML("beforeend", `<p>Saturate:</p>`);


        this.saturate = document.createElement('input')
        this.saturate.id = 'saturate';
        this.saturate.setAttribute('type','number');
        this.saturate.setAttribute('min','0');
        this.saturate.addEventListener('change', this.changesaturate)
        this.saturate.classList.add('FS-inputNum');


        let autosaturate = document.createElement('button');
        autosaturate.id = 'autosaturate';
        autosaturate.classList.add('autosaturate');
        autosaturate.addEventListener('click', this.changeautosaturate);
        autosaturate.classList.add('FS-buttonPR');
        autosaturate.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxFilter7.appendChild(this.saturate);
        FS_boxFilter7.insertAdjacentHTML("beforeend", `%`);
        FS_boxFilter7.appendChild(autosaturate);


        let FS_boxFilter8 =  document.createElement('div');
        FS_boxFilter8.classList.add('FS-boxButt');
        FS_boxFilter8.insertAdjacentHTML("beforeend", `<p>Sepia:</p>`);


        this.sepia = document.createElement('input')
        this.sepia.id = 'sepia';
        this.sepia.setAttribute('type','number');
        this.sepia.setAttribute('min','0');
        this.sepia.addEventListener('change', this.changesepia)
        this.sepia.classList.add('FS-inputNum');


        let autosepia = document.createElement('button');
        autosepia.id = 'autosepia';
        autosepia.classList.add('autosepia');
        autosepia.addEventListener('click', this.changeautosepia);
        autosepia.classList.add('FS-buttonPR');
        autosepia.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        FS_boxFilter8.appendChild(this.sepia);
        FS_boxFilter8.insertAdjacentHTML("beforeend", `%`);
        FS_boxFilter8.appendChild(autosepia);


        this.imageContainer.appendChild(FS_boxFilter1);
        this.imageContainer.appendChild(FS_boxFilter2);
        this.imageContainer.appendChild(FS_boxFilter3);
        this.imageContainer.appendChild(FS_boxFilter4);
        this.imageContainer.appendChild(FS_boxFilter5);
        this.imageContainer.appendChild(FS_boxFilter6);
        this.imageContainer.appendChild(FS_boxFilter7);
        this.imageContainer.appendChild(FS_boxFilter8);


        //==========================================================================

        this.designContainer = document.createElement('div');


        this.backGroundContainer = document.createElement('div');
        this.backGroundContainer.id = 'backGroundContainer';
        this.backGroundContainer.classList.add('FS-boxRed2');
        this.backGroundContainer.insertAdjacentHTML("beforeend", `<h4>BackGround</h4>`);


        let fs_backGround1 = document.createElement('div');
        fs_backGround1.insertAdjacentHTML("beforeend", `Color :`);

        this.setbackGrounColor(document.createElement('input'));
        this.getbackGrounColor().setAttribute("type", "color");
        this.getbackGrounColor().addEventListener('change',this.chBackC);
        this.getbackGrounColor().classList.add('FS-background-color');


        this.resetBackGroundColor = document.createElement('button');
        this.resetBackGroundColor.id = 'resetBGC';
        this.resetBackGroundColor.addEventListener('click', this.changeresetBGC)
         this.resetBackGroundColor.classList.add('FS-buttonPR');
         this.resetBackGroundColor.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        fs_backGround1.appendChild(this.getbackGrounColor());
        fs_backGround1.appendChild( this.resetBackGroundColor);






        let fs_backGround2 = document.createElement('div');
        fs_backGround2.classList.add('FS-boxButt');
        fs_backGround2.insertAdjacentHTML("beforeend", `<p>Effect:</p>`);

        this.setbackGrounDesign(document.createElement("select"));
        this.getbackGrounDesign().insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        gradient.forEach(e =>{
            this.getbackGrounDesign().insertAdjacentHTML("beforeend", `<option value="${e[1]}">${e[0]}</option>`);
        })
        this.getbackGrounDesign().addEventListener('change',this.chBackDesign);

        fs_backGround2.appendChild(this.getbackGrounDesign());



        let fs_backGround3 = document.createElement('div');
        fs_backGround3.classList.add('FS-boxButt');
        fs_backGround3.insertAdjacentHTML("beforeend", `<p>Shap:</p>`);

        this.polygon = document.createElement("select");
        polygon.forEach(e =>{

            this.polygon.insertAdjacentHTML("beforeend", `<option value="${e[1]}">${e[0]}</option>`);
        })
        this.polygon.addEventListener('change',this.changepolygon);
         this.polygon.classList.add('FS-selectPR');

        fs_backGround3.appendChild( this.polygon);



        this.backGroundContainer.appendChild(fs_backGround1);
        this.backGroundContainer.appendChild(fs_backGround2);
        this.backGroundContainer.appendChild(fs_backGround3);





        //border======================================================
        this.borderContainer = document.createElement('div');
        this.borderContainer.id = 'borderContainer';
        this.borderContainer.classList.add('FS-boxRed2');
        this.borderContainer.insertAdjacentHTML("beforeend", `<p>Border</p>`);

        let fs_border1 = document.createElement('div');
        fs_border1.classList.add('FS-boxButt');
        fs_border1.insertAdjacentHTML("beforeend", `<p>Color :</p>`);

        this.setborderColor(document.createElement("input"));
        this.getborderColor().setAttribute("type", "color");
        this.getborderColor().addEventListener('change',this.chBordeC);
        this.getborderColor().classList.add('FS-Bordercolor');

        fs_border1.appendChild(this.getborderColor());




        let fs_border2 = document.createElement('div');
        fs_border2.classList.add('FS-boxButt');
        fs_border2.insertAdjacentHTML("beforeend", `<p>Style :</p>`);

        this.setborderStyle(document.createElement("select"));
        for (let index = 0; index < borderStyle.length; index++) {
            component = document.createElement("option");
            component.value = borderStyle[index];
            component.innerText = borderStyle[index];
            this.getborderStyle().appendChild(component);

        }
        this.getborderStyle().addEventListener('change',this.chBorderS);
        this.getborderStyle().classList.add('FS-selectPR');


        fs_border2.appendChild(this.getborderStyle())




        let fs_border3 = document.createElement('div');
        fs_border3.classList.add('FS-boxButt');
        fs_border3.insertAdjacentHTML("beforeend", `<p>Width :</p>`);


        this.setborderWidth(document.createElement("input"));
        this.getborderWidth().setAttribute("type", "number");
        this.getborderWidth().setAttribute("min", "0");
        this.getborderWidth().addEventListener('change',this.chBorderW);
        this.getborderWidth().classList.add('FS-inputNum');


        let autoborderWidth = document.createElement('button');
        autoborderWidth.id = 'autoborderWidth';
        autoborderWidth.classList.add('autoborderWidth');
        autoborderWidth.addEventListener('click', this.changeautoborderWidth);
        autoborderWidth.classList.add('FS-buttonPR');
        autoborderWidth.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        fs_border3.appendChild(this.getborderWidth());
        fs_border3.appendChild(autoborderWidth);




        let fs_border4 = document.createElement('div');
        fs_border4.classList.add('FS-boxButt');
        fs_border4.insertAdjacentHTML("beforeend", `<p>Degrer :</p>`);



        this.setborderRadius(document.createElement("input"));
        this.getborderRadius().setAttribute("type", "number");
        this.getborderRadius().setAttribute("min", "0");
        this.getborderRadius().addEventListener('change',this.chBorderR);
        this.getborderRadius().classList.add('FS-inputNum');


        let autoborderRadius = document.createElement('button');
        autoborderRadius.id = 'autoborderRadius';
        autoborderRadius.classList.add('autoborderRadius');
        autoborderRadius.addEventListener('click', this.changeautoborderRadius);
        autoborderRadius.classList.add('FS-buttonPR');
        autoborderRadius.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        fs_border4.appendChild(this.getborderRadius());
        fs_border4.appendChild(autoborderRadius);





        let fs_border5 = document.createElement('div');
        fs_border5.classList.add('FS-boxButt');
        fs_border5.insertAdjacentHTML("beforeend", `<p>Border :</p>`);
        this.setBorder(document.createElement("select"));
        this.getborder().insertAdjacentHTML("beforeend", `<option value="0">All</option>`);
       this.getborder().insertAdjacentHTML("beforeend", `<option value="1">Top</option>`);
       this.getborder().insertAdjacentHTML("beforeend", `<option value="2">Right</option>`);
       this.getborder().insertAdjacentHTML("beforeend", `<option value="3">Buttom</option>`);
       this.getborder().insertAdjacentHTML("beforeend", `<option value="4">Left</option>`);
       this.getborder().addEventListener('change',this.changeborder);
        this.getborder().classList.add('FS-selectPR');


        fs_border5.appendChild(this.getborder());



        let fs_border6 = document.createElement('div');
         fs_border6.classList.add('FS-boxButt');
        fs_border6.insertAdjacentHTML("beforeend", `<p>Corner :</p>`);
        this.setCorner(document.createElement("select"));
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="0">All</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="1">top-left</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="2">top-right</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="3">buttom-right</option>`);
        this.getCorner().insertAdjacentHTML("beforeend", `<option value="4">buttom-left</option>`);
        this.getCorner().addEventListener('change',this.changecorner);
        this.getCorner().classList.add('FS-selectPR');


        fs_border6.appendChild(this.getCorner());



        let fs_border7 = document.createElement('div');
        fs_border7.classList.add('FS-boxButt');
        fs_border7.insertAdjacentHTML("beforeend", `<p>Effect :</p>`);

        this.setborderDesign(document.createElement("select"));
        this.getborderDesign().insertAdjacentHTML("beforeend", `<option value="none">none</option>`);
        borderImage.forEach(e =>{
            this.getborderDesign().insertAdjacentHTML("beforeend", `<option value="${e[1]}">${e[0]}</option>`);
        })

        gradient.forEach(e =>{
            this.getborderDesign().insertAdjacentHTML("beforeend", `<option value="${e[1]}">${e[0]}</option>`);
        })

        this.getborderDesign().addEventListener('change',this.chBorderDesign);
         this.getborderDesign().classList.add('FS-selectPR');


        fs_border7.appendChild( this.getborderDesign());

        this.borderContainer.appendChild(fs_border1);
        this.borderContainer.appendChild(fs_border2);
        this.borderContainer.appendChild(fs_border3);
        this.borderContainer.appendChild(fs_border4);
        this.borderContainer.appendChild(fs_border5);
        this.borderContainer.appendChild(fs_border6);
        this.borderContainer.appendChild(fs_border7);




        this.designContainer.appendChild(this.backGroundContainer);
        this.designContainer.appendChild(this.borderContainer);

        //================================================================================================

        this.controlContainer = document.createElement('div');
        this.controlContainer.id = "controlContainer";
        this.controlContainer.classList.add('FS-checkboxPR');
        this.controlContainer.insertAdjacentHTML("beforeend", `<p>Is Editable ?</p>`);

        let FS_rowcheckbox1 =  document.createElement('div');
        FS_rowcheckbox1.classList.add('FS-rowcheckbox');

        let FS_rowcheckbox1C1 = document.createElement('div');
        FS_rowcheckbox1C1.classList.add('FS-boxButt');

        let FS_rowcheckbox1C1L = document.createElement('label');
        FS_rowcheckbox1C1L.insertAdjacentHTML("beforeend", `<span class="FS-allCheckboxPR">All :</span>`);


        this.allEditable = document.createElement('input');
        this.allEditable.setAttribute('type','checkbox');
        this.allEditable.id = "allEditable";
        this.allEditable.addEventListener('change', this.changeallEditablZe)
        // this.allEditable.classList.add('FS-allCheckboxPR');

        FS_rowcheckbox1C1L.appendChild(this.allEditable);
        FS_rowcheckbox1C1.appendChild(FS_rowcheckbox1C1L);


        let FS_rowcheckbox1C2 = document.createElement('div');
        FS_rowcheckbox1C2.classList.add('FS-boxButt');

        let FS_rowcheckbox1C2L = document.createElement('label');
        FS_rowcheckbox1C2L.insertAdjacentHTML("beforeend", `<span class="FS-resizeCheckboxPR">Resize :</span>`);



        this.isSizesEditable = document.createElement('input');
        this.isSizesEditable.setAttribute('type','checkbox');
        this.isSizesEditable.id = "isSizesEditable";
        this.isSizesEditable.addEventListener('change', this.changeisSizesEditable)
        // this.isSizesEditable.classList.add('FS-allCheckboxPR');

        FS_rowcheckbox1C2L.appendChild(this.isSizesEditable);
        FS_rowcheckbox1C2.appendChild(FS_rowcheckbox1C2L);


        FS_rowcheckbox1.appendChild(FS_rowcheckbox1C1);
        FS_rowcheckbox1.appendChild(FS_rowcheckbox1C2);



        //2222
        let FS_rowcheckbox2 =  document.createElement('div');
        FS_rowcheckbox2.classList.add('FS-rowcheckbox');


        let FS_rowcheckbox2C1 = document.createElement('div');
        FS_rowcheckbox1C1.classList.add('FS-boxButt');

        let FS_rowcheckbox2C1L = document.createElement('label');
        FS_rowcheckbox2C1L.insertAdjacentHTML("beforeend", `<span>Design  :</span>`);


        this.isDesignEditable = document.createElement('input');
        this.isDesignEditable.setAttribute('type','checkbox');
        this.isDesignEditable.id = "isDesignEditable";
        this.isDesignEditable.addEventListener('change', this.changeisDesignEditable)
        // this.allEditable.classList.add('FS-allCheckboxPR');

        FS_rowcheckbox2C1L.appendChild(this.isDesignEditable);
        FS_rowcheckbox2C1.appendChild(FS_rowcheckbox2C1L);


        let FS_rowcheckbox2C2 = document.createElement('div');
        FS_rowcheckbox2C2.classList.add('FS-boxButt');

        let FS_rowcheckbox2C2L = document.createElement('label');
        FS_rowcheckbox2C2L.insertAdjacentHTML("beforeend", `Content :`);



        this.isContentEditable = document.createElement('input');
        this.isContentEditable.setAttribute('type','checkbox');
        this.isContentEditable.id = "isContentEditable";
        this.isContentEditable.addEventListener('change', this.changeisContentEditable)
        // this.isSizesEditable.classList.add('FS-allCheckboxPR');

        FS_rowcheckbox2C2L.appendChild(this.isContentEditable);
        FS_rowcheckbox2C2.appendChild(FS_rowcheckbox2C2L);


        FS_rowcheckbox2.appendChild(FS_rowcheckbox2C1);
        FS_rowcheckbox2.appendChild(FS_rowcheckbox2C2);

        this.controlContainer.appendChild(FS_rowcheckbox1);
        this.controlContainer.appendChild(FS_rowcheckbox2);






        //
        //
        //
        //
        //
        //
        //==================customContainer =============================//


        this.customContainer = document.createElement('div');
        this.customContainer.id = 'customContainer';


        //topic
        this.customTopicContainer = document.createElement('div');
        this.customTopicContainer.classList.add('FS-boxGreen');
        this.customTopicContainer.insertAdjacentHTML("beforeend", `<h3>Topic:</h3>`);

        let fs_topic = document.createElement('div');
        fs_topic.classList.add('FS-boxButt');
        fs_topic.insertAdjacentHTML("beforeend", `<p>Level:</p>`);

        this.topicLevel = document.createElement('input')
        this.topicLevel.id = 'topicLevel';
        this.topicLevel.setAttribute('type','number');
        this.topicLevel.setAttribute('min','1');
        this.topicLevel.setAttribute('max','10');
        this.topicLevel.addEventListener('change', this.changetopicLevel)
        this.topicLevel.classList.add('FS-selectPR');

        fs_topic.appendChild(this.topicLevel);
        this.customTopicContainer.appendChild(fs_topic);


        //icon

        this.customIconContainer = document.createElement('div');
        this.customIconContainer.classList.add('FS-boxRed2');
        this.customIconContainer.insertAdjacentHTML("beforeend", `<h3>Icon:</h3>`);


        this.fs_icon1 = document.createElement('div');
        this.fs_icon1.classList.add('FS-boxButt');
        this.fs_icon1.insertAdjacentHTML("beforeend", `<p>Icon :</p>`);

        this.icon = document.createElement('select');
        this.icon.id = "icon";
        iconList.forEach(element => {
            this.icon.insertAdjacentHTML("beforeend", `<option value="${element[0]}">${element[1]}</option>`);
        });
        this.icon.addEventListener('change',this.changeIcon);
        this.icon.classList.add('FS-Bordercolor');

        this.fs_icon1.appendChild(this.icon);




        this.fs_icon2 = document.createElement('div');
        this.fs_icon2.classList.add('FS-boxButt');
        this.fs_icon2.insertAdjacentHTML("beforeend", `<p>Color :</p>`);

        this.iconColor = document.createElement('input');
        this.iconColor.id = "iconColor"
        this.iconColor.setAttribute("type", "color");
        this.iconColor.addEventListener('change',this.changeIconColor);
        this.iconColor.classList.add('FS-selectPR');


        this.fs_icon2.appendChild(this.iconColor)




        this.fs_icon3 = document.createElement('div');
        this.fs_icon3.classList.add('FS-boxButt');
        this.fs_icon3.insertAdjacentHTML("beforeend", `<p>Size :</p>`);



        this.iconSize = document.createElement("input");
        this.iconSize.id = 'iconSize';
        this.iconSize.setAttribute('type','number');
        this.iconSize.setAttribute('min','0');
        this.iconSize.addEventListener('change', this.changeiconSize)
        this.iconSize.classList.add('FS-inputNum');

        this.fs_icon3.appendChild(this.iconSize);





        //list
        this.customListContainer = document.createElement('div');
        this.customListContainer.classList.add('FS-boxRed2');
        this.customListContainer.insertAdjacentHTML("beforeend", `<h3>List:</h3>`);


        this.fs_list1 = document.createElement('div');
        this.fs_list1.classList.add('FS-boxButt');
        this.fs_list1.insertAdjacentHTML("beforeend", `<p>Style :</p>`);

        this.listType = document.createElement('select');
        this.listType.id = "listType";
        listStyles.forEach(element => {
            this.listType.insertAdjacentHTML("beforeend", `<option value="${element}">${element}</option>`);
        });
        this.listType.addEventListener("change", this.changelistType);
        this.listType.classList.add('FS-selectPR');

        this.fs_list1.appendChild(this.listType);

        this.fs_list2 = document.createElement('div');
        this.fs_list2.classList.add('FS-boxButt');
        this.fs_list2.insertAdjacentHTML("beforeend", `<p>Start :</p>`);



        this.listStart = document.createElement('input');
        this.listStart.id = "listStart";
        this.listStart.setAttribute('type','number');
        this.listStart.setAttribute('min','0');
        this.listStart.addEventListener("change", this.changelistStart);
        this.listStart.classList.add('FS-inputNum');

        let autolistStart = document.createElement('button');
        autolistStart.id = 'autolistStart';
        autolistStart.classList.add('autolistStart');
        autolistStart.addEventListener('click', this.changeautolistStart);
        autolistStart.classList.add('FS-buttonPR');
        autolistStart.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        this.fs_list2.appendChild(this.listStart);
        this.fs_list2.appendChild(autolistStart);








        //listitem



        this.customListItemContainer = document.createElement('div');
        this.customListItemContainer.classList.add('FS-boxRed2');
        this.customListItemContainer.insertAdjacentHTML("beforeend", `<h3>List Item:</h3>`);

        this.fs_listItem = document.createElement('div');
        this.fs_listItem.classList.add('FS-boxButt');
        this.fs_listItem.insertAdjacentHTML("beforeend", `<p>Space :</p>`);


        this.listItemSpace = document.createElement('input');
        this.listItemSpace.id = "listItemSpace";
        this.listItemSpace.setAttribute('type','number');
        this.listItemSpace.setAttribute('min','0');
        this.listItemSpace.addEventListener("change", this.changelistItemSpace);
        this.listItemSpace.classList.add('FS-inputNum');

        let autolistItemSpace = document.createElement('button');
        autolistItemSpace.id = 'autolistItemSpace';
        autolistItemSpace.classList.add('autolistItemSpace');
        autolistItemSpace.addEventListener('click', this.changeautolistItemSpace);
        autolistItemSpace.classList.add('FS-buttonPR');
        autolistItemSpace.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        this.fs_listItem.appendChild(this.listItemSpace);
        this.fs_listItem.appendChild(autolistItemSpace);
        this.customListItemContainer.appendChild(this.fs_listItem);




        // table
        this.customTableContainer = document.createElement('div');
        this.customTableContainer.classList.add('FS-boxRed2');
        this.customTableContainer.insertAdjacentHTML("beforeend", `<h3>Table:</h3>`);
////////////////////////////////////////////////////////////////////
        this.FS_table1 =  document.createElement('div');
        this.FS_table1.classList.add('FS-rowcheckbox');

        let FS_table1C1 = document.createElement('div');
        FS_table1C1.classList.add('FS-boxButt');

        let FS_table1C1L = document.createElement('label');
        FS_table1C1L.insertAdjacentHTML("beforeend", `<span class="FS-allCheckboxPR">Is Collapse :</span>`);


        this.isCollapse = document.createElement('input');
        this.isCollapse.id = 'isCollapse';
        this.isCollapse.setAttribute("type", "checkbox");
        this.isCollapse.addEventListener('change', this.changeisCollapse);
        // this.allEditable.classList.add('FS-allCheckboxPR');

        FS_table1C1L.appendChild(this.isCollapse);
        FS_table1C1.appendChild(FS_table1C1L);

        this.FS_table1.appendChild(FS_table1C1);


        //2222
        this.FS_table2 =  document.createElement('div');
        this.FS_table2.classList.add('FS-rowcheckbox');


        let FS_table2C1 = document.createElement('div');
        FS_table2C1.classList.add('FS-boxButt');

        let FS_table2C1L = document.createElement('label');
        FS_table2C1L.insertAdjacentHTML("beforeend", `<span>Is Sticy Row:</span>`);



        this.isSticyRow = document.createElement('input');
        this.isSticyRow.id = 'isSticyRow';
        this.isSticyRow.setAttribute("type", "checkbox");
        this.isSticyRow.addEventListener('change', this.changeisSticyRow);

        // this.allEditable.classList.add('FS-allCheckboxPR');

        FS_table2C1L.appendChild(this.isSticyRow);
        FS_table2C1.appendChild(FS_table2C1L);


        let FS_table2C2 = document.createElement('div');
        FS_table2C2.classList.add('FS-boxButt');

        let FS_table2C2L = document.createElement('label');
        FS_table2C2L.insertAdjacentHTML("beforeend", `Is Sticy Col :`);



        this.isSticyCol = document.createElement('input');
        this.isSticyCol.id = 'isSticyCol';
        this.isSticyCol.setAttribute("type", "checkbox");
        this.isSticyCol.addEventListener('change', this.changeisSticyCol);
        // this.isSizesEditable.classList.add('FS-allCheckboxPR');

        FS_table2C2L.appendChild(this.isSticyCol);
        FS_table2C2.appendChild(FS_table2C2L);


        this.FS_table2.appendChild(FS_table2C1);
        this.FS_table2.appendChild(FS_table2C2);





        this.FS_table3 = document.createElement('div');
        this.FS_table3.classList.add('FS-boxButt');
        this.FS_table3.insertAdjacentHTML("beforeend", `<p>Row Space :</p>`);



        this.rowSpace = document.createElement('input');
        this.rowSpace.id = 'rowSpace';
        this.rowSpace.setAttribute('type','number');
        this.rowSpace.setAttribute("min", 0);
        this.rowSpace.addEventListener('change', this.changerowSpace);
        this.rowSpace.classList.add('FS-inputNum');

        let autorowSpace = document.createElement('button');
        autorowSpace.id = 'autorowSpace';
        autorowSpace.classList.add('autorowSpace');
        autorowSpace.addEventListener('click', this.changeautorowSpace);
        autorowSpace.classList.add('FS-buttonPR');
        autorowSpace.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        this.FS_table3.appendChild(this.rowSpace);
        this.FS_table3.appendChild(autorowSpace);


        this.FS_table4 = document.createElement('div');
        this.FS_table4.classList.add('FS-boxButt');
        this.FS_table4.insertAdjacentHTML("beforeend", `<p>Col Space :</p>`);



        this.colSpace = document.createElement('input');
        this.colSpace.id = 'colSpace';
        this.colSpace.setAttribute('type','number');
        this.colSpace.setAttribute("min", 0);
        this.colSpace.addEventListener('change', this.changecolSpace);
        this.colSpace.classList.add('FS-inputNum');

        let autocolSpace = document.createElement('button');
        autocolSpace.id = 'autocolSpace';
        autocolSpace.classList.add('autocolSpace');
        autocolSpace.addEventListener('click', this.changeautocolSpace);
        autocolSpace.classList.add('FS-buttonPR');
        autocolSpace.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);

        this.FS_table4.appendChild(this.colSpace);
        this.FS_table4.appendChild(autocolSpace);







        this.editContainer.appendChild(this.customTopicContainer)
        this.editContainer.appendChild(this.customIconContainer)
        this.editContainer.appendChild(this.customListContainer)
        this.editContainer.appendChild(this.customListItemContainer)
        this.editContainer.appendChild(this.customTableContainer)


         //controlBtn
        this.generate = document.createElement('button');
        this.generate.innerText = "generate";
        this.generate.id = 'generate';
        this.generate.addEventListener("click", this.changegenerate);



        //image

        this.sellectImage = document.createElement('button');
        this.sellectImage.id = 'sellectImage';
        this.sellectImage.classList.add('sellectImage');
        this.sellectImage.addEventListener('click', this.changesellectImage);
        this.sellectImage.classList.add('FS-buttonPR');
        this.sellectImage.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-arrow-rotate-left"></i>`);
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

        this.addItem = document.createElement('button');
        this.addItem.insertAdjacentHTML('beforeend','<i class="fa-solid fa-plus"></i>');
        this.addItem.id = 'addItem';
        this.addItem.addEventListener("click", this.changeaddItem);

        this.deleteItem = document.createElement('button');
        this.deleteItem.insertAdjacentHTML('beforeend','<i class="fa-solid fa-trash"></i>');
        this.deleteItem.id = 'deleteItem';
        this.deleteItem.addEventListener("click", this.changedeleteItem);

        this.upItem = document.createElement('button');
        this.upItem.insertAdjacentHTML('beforeend','<i class="fa-solid fa-arrow-up"></i>');
        this.upItem.id = 'upItem';
        this.upItem.addEventListener("click", this.changeupItem);

        this.dowenItem = document.createElement('button');
        this.dowenItem.insertAdjacentHTML('beforeend','<i class="fa-solid fa-arrow-down"></i>');
        this.dowenItem.id = 'dowenItem';
        this.dowenItem.addEventListener("click", this.changedowenItem);


        //table ==============================================================

        this.addCol = document.createElement('button');
        this.addCol.id = 'addCol';
        this.addCol.classList.add('addCol');
        this.addCol.addEventListener('click', this.changeaddCol);
        this.addCol.insertAdjacentHTML('beforeend','<i class="fa-solid fa-table-columns"></i>');

        this.deleteCol = document.createElement('button');
        this.deleteCol.id = 'deleteCol';
        this.deleteCol.classList.add('deleteCol');
        this.deleteCol.addEventListener('click', this.changedeleteCol);
        this.deleteCol.insertAdjacentHTML('beforeend','<i class="fa-solid fa-minus"></i>');

        this.addRow = document.createElement('button');
        this.addRow.id = 'addRow';
        this.addRow.classList.add('addRow');
        this.addRow.addEventListener('click', this.changeaddRow);
        this.addRow.insertAdjacentHTML('beforeend','<i class="fa-solid fa-table"></i>');

        this.deleteRow = document.createElement('button');
        this.deleteRow.id = 'deleteRow';
        this.deleteRow.classList.add('deleteRow');
        this.deleteRow.addEventListener('click', this.changedeleteRow);
        this.deleteRow.insertAdjacentHTML('beforeend','<i class="fa-solid fa-minus"></i>');

        this.rowColumnNum = document.createElement('button');
        this.rowColumnNum.id = 'rowColumnNum';
        this.rowColumnNum.classList.add('rowColumnNum');
        this.rowColumnNum.addEventListener('click', this.changerowColumnNum);
        this.rowColumnNum






    }



    changesellectImage = (e) =>{
        console.log("imageUploader")
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
            currentPage.setPageWidth();
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
        console.log(currentComponent)
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
            this.getEditContainer().style.display = "flex";

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
    changeautowordSpace = (e) =>{
        currentComponent.setWordSpace('normal')
        this.getWordSpace().value = null;
    }



    changeLetterSpace = (e) =>{
        currentComponent.setLetterSpace(this.getLetterSpace().value)
    };
    changeautoletterSpace = (e) =>{
        currentComponent.setLetterSpace('normal')
        this.getLetterSpace().value = null;
    }



    changeLineHeight = (e) =>{
        currentComponent.setLineHeight(this.getLineHeight().value)
    };
    changeautolineHeight = (e) =>{
        currentComponent.setLineHeight('normal')
        this.getLineHeight().value = null;
        }




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
    changeautoborderWidth = (e)=>{
        currentComponent.setBorderWidth(0,this.getborder().value);
        this.getborderWidth().value = 0;
    }
    chBorderR = (e) =>{
            currentComponent.setBorderRadius(this.getborderRadius().value,this.getCorner().value);
    }
    changeautoborderRadius = (e)=>{
        currentComponent.setBorderRadius(0,this.getCorner().value);
        this.getborderRadius().value = 0;
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


    changeautozAxis = (e) =>{
        let heighZ = heighestComponent + 1;
        if (isSupComponent) {
            currentComponentParent.setZAxis(heighZ);
        } else {
            currentComponent.setZAxis(heighZ);
        }
        this.getZAxis().value = heighZ;
    }
    //==================================================
    changeopacity = (e) =>{
        currentComponent.setOpacity(this.getOpacity().value);
    }
    changeautoOpacity = (e) =>{
        currentComponent.setOpacity(1);
        this.getOpacity().value = 1;
    }



    changerotation = (e) =>{
        currentComponent.setSkew(0);
        this.getSkew().value = 0;
        currentComponent.setRotation(this.getRotation().value);
    }
    changeautoRotation = (e) =>{
        currentComponent.setRotation(0);
        this.getRotation().value = 0;
    }



    changepadding = (e) =>{
        currentComponent.setPadding(this.getPadding().value,currentComponent);
    }

    changeautoPadding = (e) =>{
        currentComponent.setPadding(0,currentComponent);
        this.getPadding().value = 0;
    }



    changeskew = (e) =>{
        currentComponent.setRotation(0);
        this.getRotation().value = 0;
        currentComponent.setSkew(this.getSkew().value);
    }
     changeautoSkew = (e) =>{
        currentComponent.setSkew(0);
        this.getSkew().value = 0;
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
    currentComponent.setBlur(`${this.getBlur().value}px`);
}
changeautoblur = (e) =>{
    currentComponent.setBlur(0);
    this.getBlur().value = 0;
}



changebrightness = (e) =>{
    currentComponent.setBrightness(`${this.getBrightness().value}%`);
}
changeautobrightness = (e) =>{
currentComponent.setBrightness(1);
this.getBrightness().value = 0;
    }



changecontrast = (e) =>{
    currentComponent.setContrast(`${this.getContrast().value}%`);
}
 changeautocontrast = (e) =>{
currentComponent.setContrast(`${100}%`);
this.getContrast().value = 100;
    }



changegrayscale = (e) =>{
    currentComponent.setGrayscale(`${this.getGrayscale().value}%`);
}
 changeautograyscale = (e) =>{
currentComponent.setGrayscale(1);
this.getGrayscale().value = 0;
    }



changehueRotate = (e) =>{
    currentComponent.setHueRotate(`${this.getHueRotate().value}deg`);
}
 changeautohueRotate = (e) =>{
currentComponent.setHueRotate(0);
this.getHueRotate().value = 0;
    }



changeinvert = (e) =>{
    currentComponent.setInvert(`${this.getInvert().value}%`);
}
 changeautoinvert = (e) =>{
currentComponent.setInvert(0);
this.getInvert().value = 0;
    }



changesaturate = (e) =>{
    currentComponent.setSaturate(`${this.getSaturate().value}`);
}
 changeautosaturate = (e) =>{
currentComponent.setSaturate();
this.getSaturate().value = 0;
    }



changesepia = (e) =>{
    currentComponent.setSepia(`${this.getSepia().value}%`);
}
 changeautosepia = (e) =>{
 currentComponent.setSepia(0);
 this.getSepia().value = 0;
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
    changeautolistStart = (e) =>{
        currentComponent.setStart(1)
        this.getListStart().value = 1;
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
    changeautolistItemSpace = (e) =>{
        currentComponent.setItemSpace(0)
        this.getListItemSpace().value = 0;
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
    changeautorowSpace = (e) =>{
        currentComponent.setRowSpace(0)
        this.getRowSpace().value = 0;
    }

    changecolSpace = (e) =>{
        currentComponent.setColSpace(this.getColSpace().value)
    }
    changeautocolSpace = (e) =>{
        currentComponent.setColSpace(0)
        this.getColSpace().value = 0;
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
setComponentName(value){
    this.componentName.innerText = value;
}

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
        this.getWordSpace().value = null;
        this.getLetterSpace().value = null;
        this.getLineHeight().value = null;
        this.getOpacity().value = 1;
        this.getZAxis().value = 0;
        this.getRotation().value = 0;
        this.getPadding().value = 0;
        this.getbackGrounColor().value = "transparent";
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
        this.getListType().children[0].selected = true;
        this.getListStart().value = 1;
       this.getListItemSpace().value = 0;
        this.getIsCollapse().children[0].selected = true;
        this.getIsSticyCol().children[0].selected = true;
        this.getIsSticyRow().children[0].selected = true;
        this.getRowSpace().value = 0;
       this.getColSpace().value = 0;
       this.getBlur().value = 0;
       this.getBrightness().value = 0;
       this.getContrast().value = 100;
       this.getGrayscale().value = 0;
       this.getHueRotate().value = 0;
       this.getInvert().value = 0;
       this.getSaturate().value = 0;
        this.getSepia().value = 0;
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
        this.getComponentName().innerText = "";
        this.getComponentName().remove();
    }





//         ((isSizesEditable || isContentEditable || isDesignEditable) || isFullPreemption)
//

    prepairParagraphEdit(isLined,textEffect,wordSpace,letterSpace,lineHeight,
        width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
            this.reDisplayBtn();
        this.clearEdit(this.getEditContainer());
        if (isSizesEditable || isFullPreemption) {
            this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
            this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
        }
        if (isContentEditable || isFullPreemption) {
            this.getEditContainer().appendChild(this.getTextContainer(isLined,textEffect,wordSpace,letterSpace,lineHeight));
        }
        if (isDesignEditable || isFullPreemption) {
            this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
        }
        if (isFullPreemption) {
            this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
        }
    }


    prepairParagraphSideBtn(isSizesEditable,isDesignEditable,isContentEditable){
        this.clearEdit(this.getSideBtnContainer());
        if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
            this.getSideBtnContainer().appendChild(this.getRemoveFormat());
    }
}



    prepairTopicEdit(topicLevel,isLined,textEffect,wordSpace,letterSpace,lineHeight,
        width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
            this.reDisplayBtn();
        this.clearEdit(this.getEditContainer());
        this.setTopicLevel(topicLevel);
        if (isSizesEditable || isFullPreemption) {
            this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
            this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
        }
        if (isDesignEditable || isFullPreemption) {
            this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
        }
        if (isContentEditable || isFullPreemption) {
            this.getEditContainer().appendChild(this.getTextContainer(isLined,textEffect,wordSpace,letterSpace,lineHeight));
        }
        if (isFullPreemption) {
            this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
        }
        if (isSizesEditable || isFullPreemption) {

            this.getEditContainer().insertBefore(this.getCustomTopicContainer(), this.getEditContainer().children[0]);
        }

    }

    prepairTopicSideBtn(isSizesEditable,isDesignEditable,isContentEditable){
        this.clearEdit(this.getSideBtnContainer());
        if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
            this.getSideBtnContainer().appendChild(this.getRemoveFormat());
    }
}



        prepairIconEdit(icon,color,size,
            width,height,opacity,xAxis,yAxis,zAxis,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable){
                this.reDisplayBtn();
            this.clearEdit(this.getEditContainer());
            this.setIconSize(size);
            this.setIconColor(color);
            this.setIcon(icon);
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
            this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
            }
            if (isDesignEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            }
            this.getEditContainer().insertBefore(this.getCustomIconContainer(), this.getEditContainer().children[0]);
        }

        prepairIconSideBtn(isSizesEditable,isDesignEditable,isContentEditable){
            this.clearEdit(this.getSideBtnContainer());
            if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
                this.getSideBtnContainer().appendChild(this.getRemoveFormat());
        }
    }




        prepairImageEdit(blur,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia,
            width,height,opacity,xAxis,yAxis,zAxis,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable){
                this.reDisplayBtn();
            this.clearEdit(this.getEditContainer());
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
            }
            if (isDesignEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getImageContainer(blur,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia))
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }
            if (isContentEditable || isFullPreemption) {

            }
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            }
        }

        prepairImageSideBtn(isSizesEditable,isDesignEditable,isContentEditable){
            this.clearEdit(this.getSideBtnContainer());
            if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
                this.getSideBtnContainer().appendChild(this.getRemoveFormat());
            }

            if (isContentEditable || isFullPreemption) {
                this.getSideBtnContainer().appendChild(this.getSellectImage());
            }
    }



        prepairListEdit(start,styleType,
            width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable){
                this.reDisplayBtn();
            this.clearEdit(this.getEditContainer());
            this.setListStart(start)
            this.setListType(styleType)
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
            }
            if (isDesignEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            }
            this.getEditContainer().insertBefore(this.getCustomListContainer(), this.getEditContainer().children[0]);
        }

        prepairListSideBtn(isSizesEditable,isDesignEditable,isContentEditable){
            this.clearEdit(this.getSideBtnContainer());
              if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
                this.getSideBtnContainer().appendChild(this.getRemoveFormat());
            }
            if (isContentEditable || isFullPreemption){
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
            this.setListItemSpace(itemSpace);
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
            }
            if (isDesignEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }
            if (isContentEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getTextContainer(isLined,textEffect,wordSpace,letterSpace,lineHeight));
            }
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            }
            if (isSizesEditable) {

                this.getEditContainer().insertBefore(this.getCustomListItemContainer(), this.getEditContainer().children[0]);
            }
        }







        prepairTableEdit(isCollapse,isSticyCol,isSticyRow,rowSpace,colSpace,
            width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
            backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
            isSizesEditable,isDesignEditable,isContentEditable){
                this.reDisplayBtn();
            this.clearEdit(this.getEditContainer());
            this.setCollapse(isCollapse);
            this.setIsSticyCol(isSticyCol);
            this.setIsSticyRow(isSticyRow);
            this.setRowSpace(rowSpace);
            this.setColSpace(colSpace);
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
            }
            if (isDesignEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }

            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            }

            this.getEditContainer().insertBefore(this.getCustomTableContainer(isSizesEditable,isDesignEditable,isContentEditable), this.getEditContainer().children[0]);
        }


        prepairTableSideBtn(isSizesEditable,isDesignEditable,isContentEditable){
            this.clearEdit(this.getSideBtnContainer());
            if ((isSizesEditable && isContentEditable && isDesignEditable) || isFullPreemption) {
                this.getSideBtnContainer().appendChild(this.getRemoveFormat());
            }
            if (isContentEditable || isFullPreemption){
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
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,0,skew));
                this.getPadding().style.display = "none";
            }
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable));
                this.getIsContentEditable().style.display = "none";
                this.getIsDesignEditable().style.display = "none";
                this.getAllEditable().style.display = "none";
            }
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
            if (isSizesEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
            }
            if (isDesignEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
            }
            if (isContentEditable || isFullPreemption) {
                this.getEditContainer().appendChild(this.getTextContainer(isLined,textEffect,wordSpace,letterSpace,lineHeight));
            }
            if (isFullPreemption) {
                this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
            }


        }




        prepairShapEdit(width,height,xAxis,yAxis,zAxis,opacity,rotation,padding,skew,
        backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon,
        isSizesEditable,isDesignEditable,isContentEditable){
            this.reDisplayBtn();
        this.clearEdit(this.getEditContainer());
        if (isSizesEditable || isFullPreemption) {
            this.getEditContainer().appendChild(this.getSizesContainer(width,height,xAxis,yAxis,zAxis));
            this.getEditContainer().appendChild(this.getViewContainer(opacity,rotation,padding,skew));
        }
        if (isDesignEditable || isFullPreemption) {
            this.getEditContainer().appendChild(this.getDesignContainer(backGrounColor,backGrounDesign,borderColor,borderDesign,borderStyle,borderWidth,borderRadius,polygon));
        }
        if (isFullPreemption) {
            this.getEditContainer().appendChild(this.getControlContainer(isSizesEditable,isDesignEditable,isContentEditable));
        }
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
    getTopicLevel(){
        return this.topicLevel;
    }
    getSellectImage(){
        return this.sellectImage;
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
    getIcon(){
        return this.icon;
    }
    getIconColor(){
        return this.iconColor;
    }
    getIconSize(){
        return this.iconSize;
    }
    getListItem(){
        return this.listItem;
    }
    getListType(){
        return this.listType;
    }
    getListStart(){
        return this.listStart;
    }

    getListItemSpace(){
        return this.listItemSpace;
    }
    //table ===========================================================
    getCollapse(){
        return this.isCollapse;
    }

    getIsSticyCol(){
        return this.isSticyCol;
    }
    getIsSticyRow(){
        return this.isSticyRow;
    }
    getRowSpace(){
        return this.rowSpace;
    }
    getColSpace(){
        return this.colSpace;
    }
    getAddCol(){return this.addCol;}
    getDeleteCol(){return this.deleteCol;}
    getAddRow(){return this.addRow;}
    getDeleteRow(){return this.deleteRow;}
    getRowColumnNum(){return this.rowColumnNum;}
    //TableCells ================================================
    getRowSpan(){
        return this.rowSpan;
    }
    getColSpan(){
        return this.colSpan;
    }
    getIsCollapse(){return this.isCollapse;}
    getIsSticyCol(){return this.isSticyCol;}
    getIsSticyRow(){return this.isSticyRow;}




    getCustomTopicContainer(){
        return this.customTopicContainer;
    }


    getCustomIconContainer(isSizesEditable,isDesignEditable,isContentEditable){
    this.clearEdit(this.customIconContainer);
    if (isContentEditable || isFullPreemption) {

        this.customIconContainer.appendChild(this.fs_icon1);
    }
    if (isDesignEditable || isFullPreemption) {

        this.customIconContainer.appendChild(this.fs_icon2);
    }
    if (isSizesEditable || isFullPreemption) {

        this.customIconContainer.appendChild(this.fs_icon3);
    }
        return this.customIconContainer;
    }



    getCustomListContainer(isSizesEditable,isDesignEditable,isContentEditable){
        this.clearEdit(this.customListContainer)
        if (isSizesEditable || isFullPreemption) {

            this.customListContainer.appendChild(this.fs_list1);
        }
        if (isDesignEditable || isFullPreemption) {

            this.customListContainer.appendChild(this.fs_list2);
        }
        return this.customListContainer;
    }
    getCustomListItemContainer(){
        return this.customListItemContainer;
    }
    getCustomTableContainer(isSizesEditable,isDesignEditable,isContentEditable){

        if (isDesignEditable || isFullPreemption) {
            this.customTableContainer.appendChild(this.FS_table1);
            this.customTableContainer.appendChild(this.FS_table2);
        }
        if (isContentEditable || isFullPreemption) {
            this.customTableContainer.appendChild(this.FS_table3);
            this.customTableContainer.appendChild(this.FS_table4);

        }

        return this.customTableContainer;
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


    setTopicLevel(value){
        if (value != undefined) {
            this.topicLevel.value = value;
        }
    }

    setCollapse(value){
        if (value != undefined) {
            this.isCollapse.checked = value;
        }
    }

    setIsSticyCol(value){
        if(value != undefined){
            this.isSticyCol.checked = value;
        }
    }
    setIsSticyRow(value){
        if(value != undefined){
            this.isSticyRow.checked = value;
        }
    }
    setRowSpace(value){
        if (value != undefined) {
            this.rowSpace.value = value;
        }
    }
    setColSpace(value){
        if (value != undefined) {
            this.colSpace.value = value;
        }
    }



    setListItemSpace(value){
        if (value != undefined) {
            this.listItemSpace.value = value;
        }
    }






setListType(value){
    if (value != undefined) {
        for (let index = 0; index < this.listType.children.length; index++) {
            if (this.listType.children[index].value == value) {
                    this.listType.children[index].selected = true;
                    break;
                }
            }
    }
}
setListStart(value){
    if (value != undefined) {
        this.listStart.value = value;
    }
}








setIcon(value){
    if (value != undefined) {
        for (let index = 0; index < this.icon.children.length; index++) {
            if (this.icon.children[index].value == value) {
                    this.icon.children[index].selected = true;
                    break;
                }
            }
    }
}

setIconColor(value){
    if (value != undefined) {
        this.iconColor.value = value;
    }
}
setIconSize(value){
    if (value != undefined) {
        this.iconSize.value = value;
    }
}
}
