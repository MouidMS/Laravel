import Container from './Container.js';

import Paragraph from './Paragraph.js';
import Topic from './Topic.js';
import Icon from './Icon.js';
import Images from './Image.js'
import List from './List.js';
import ListItem from './ListItem.js';
import ListTopic from './ListTopic.js';
import Table from './Table.js';
import TableCell from './TableCell.js';
import TableHeader from './TableHeader.js';
import TableRow from './TableRow.js';
import Shap from './Shap.js';

//============================================
export let container = new Container();

export let isFullPreemption = true;
export let ProjectTyp = 'WB';


export function setProjectMetaData(isFullPreemption,ProjectTyp){
    isFullPreemption = isFullPreemption;
    ProjectTyp = ProjectTyp;
}





let setting = document.getElementById('setting');
let settingbtn = document.getElementById('settingbtn');
let Back = document.getElementById('Back');
let Display = document.getElementById('Display');




export let pageParent = document.getElementById('pages');
export let main_content = document.getElementById('main-content');
main_content.style.width = "100%";




        // let json = document.getElementById('test');
        // json.addEventListener('click',(e)=>{
        //     // readJsonOpj
        //     console.log(JSON.stringify(container))
        // })
  




        function readJsonOpj(jsonOpj){
            let cCon = JSON.parse(jsonOpj);
           container.setContainerEdit(cCon.backGrounColor,cCon.pageDesign,
            [cCon.borderColor[0],cCon.borderColor[1],cCon.borderColor[2],cCon.borderColor[3],cCon.borderColor[4]],
            cCon.borderDesign,
            [cCon.borderStyle[0],cCon.borderStyle[1],cCon.borderStyle[2],cCon.borderStyle[3],cCon.borderStyle[4]],
            [cCon.borderWidth[0],cCon.borderWidth[1],cCon.borderWidth[2],cCon.borderWidth[3],cCon.borderWidth[4]],
            [cCon.borderRadius[0],cCon.borderRadius[1],cCon.borderRadius[2],cCon.borderRadius[3],cCon.borderRadius[4]],
            cCon.pageNumber,cCon.pageNumberColor,cCon.isDesignEditable,cCon.isContentEditable); 
            let cPg = cCon.pages;  

            cPg.forEach(e => {
                let tempPage = container.addNewPage(e.backGrounColor,e.pageDesign,
                    [e.borderColor[0],e.borderColor[1],e.borderColor[2],e.borderColor[3],e.borderColor[4]],
                    e.borderDesign,
                    [e.borderStyle[0],e.borderStyle[1],e.borderStyle[2],e.borderStyle[3],e.borderStyle[4]],
                    [e.borderWidth[0],e.borderWidth[1],e.borderWidth[2],e.borderWidth[3],e.borderWidth[4]],
                    [e.borderRadius[0],e.borderRadius[1],e.borderRadius[2],e.borderRadius[3],e.borderRadius[4]],
                    e.pageNumber,e.pageNumberColor,e.isDesignEditable,e.isContentEditable);
                    
                    let paragraphs = e.paragraphs;
                    paragraphs.forEach(el =>{
                        console.log('what')
                        tempPage.pushComponent(new Paragraph(el.text,el.isLined,el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,
                            el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable));
                    })
                    let topics = e.topics;
                    topics.forEach(el =>{
                        tempPage.pushComponent(new Topic(el.text,el.topicLevel,el.isLined,el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,
                            el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable));
                        })

                    let images = e.images;
                    images.forEach(el =>{
                        tempPage.pushComponent(new Images(el.path,
                            el.blur,el.brightness,el.contrast,el.grayscale,el.hueRotate,el.invert,el.saturate,el.sepia,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable))
                    })

                    let icons = e.icons;
                    icons.forEach(el =>{
                        tempPage.pushComponent(new Icon(el.icon,el.color,el.size,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable))
                    })


                    let lists = e.lists;
                    lists.forEach(el =>{
                        let currentList = new List(el.type,el.start,el.styleType,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                            
                            let Ltype = el.type;
                            el.item.forEach(el =>{
                                let curentListItem;
                                console.log(el.item)
                                switch (Ltype) {
                                    case "item":
                                        curentListItem = new ListItem(el.itemSpace,el.text,el.isLined,
                                            el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                                            el.opacity,el.rotation,el.padding,el.skew,
                                            el.backGrounColor,el.backGrounDesign,
                                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                                            el.borderDesign,
                                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                                            el.polygon,
                                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                                        break;
                                    case "topic":
                                        curentListItem = new ListTopic(el.itemSpace,el.text,el.isLined,
                                            el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                                            el.opacity,el.rotation,el.padding,el.skew,
                                            el.backGrounColor,el.backGrounDesign,
                                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                                            el.borderDesign,
                                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                                            el.polygon,
                                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                                        break;
                                }
                                currentList.addItem(curentListItem);
                            })

                            tempPage.pushComponent(currentList);

                    })


                    let tables = e.tables;
                    tables.forEach(el =>{
                        let currentTable = new Table(el.isCollapse,el.isSticyCol,el.isSticyRow,el.rowSpace,el.colSpace,
                            el.width,el.height,el.xAxis,el.yAxis,el.zAxis,
                            el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                        el.rows.forEach((e,i) =>{
                            let currentRow = new  TableRow(el.opacity,el.rotation,el.skew,el.isSizesEditable);
                            let curentCell;
                            if(i == 0){
                                e.cells.forEach(el =>{
                                    curentCell = new TableHeader(el.cellWidth,
                                        el.text,el.isLined,el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                                        el.opacity,el.rotation,el.padding,el.skew,
                                        el.backGrounColor,el.backGrounDesign,
                                        [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                                        el.borderDesign,
                                        [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                                        [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                                        [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                                        el.polygon,
                                        el.isSizesEditable,el.isDesignEditable,el.isContentEditable);
                                        currentRow.addCell(curentCell);
                                })
                            }else{
                                e.cells.forEach(el =>{
                                    curentCell = new TableCell(el.text,el.isLined,el.textEffect,el.wordSpace,el.letterSpace,el.lineHeight,
                                        el.opacity,el.rotation,el.padding,el.skew,
                                        el.backGrounColor,el.backGrounDesign,
                                        [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                                        el.borderDesign,
                                        [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                                        [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                                        [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                                        el.polygon,
                                        el.isSizesEditable,el.isDesignEditable,el.isContentEditable); 
                                    currentRow.addCell(curentCell);
                                })
                            }
                            currentTable.addRow(currentRow);
                        })
                        tempPage.pushComponent(currentTable);
                    })
                    let shapes = e.shapes;
                    shapes.forEach(el =>{
                        tempPage.pushComponent(new Shap(el.width,el.height,el.xAxis,el.yAxis,el.zAxis,
                            el.opacity,el.rotation,el.padding,el.skew,
                            el.backGrounColor,el.backGrounDesign,
                            [el.borderColor[0],el.borderColor[1],el.borderColor[2],el.borderColor[3],el.borderColor[4]],
                            el.borderDesign,
                            [el.borderStyle[0],el.borderStyle[1],el.borderStyle[2],el.borderStyle[3],el.borderStyle[4]],
                            [el.borderWidth[0],el.borderWidth[1],el.borderWidth[2],el.borderWidth[3],el.borderWidth[4]],
                            [el.borderRadius[0],el.borderRadius[1],el.borderRadius[2],el.borderRadius[3],el.borderRadius[4]],
                            el.polygon,
                            el.isSizesEditable,el.isDesignEditable,el.isContentEditable))
                    })
                pageParent.appendChild(tempPage.getPage().parentNode.parentNode);
            });
            
        }


        