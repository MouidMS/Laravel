import CollectorProject from './CollectorProject.js';
import {menuFlag, sitting, doc_body, colletorList, UpdateCollector} from "./collector.js";

export let currentCollector;


function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    console.log("::"+arr);
    arr.splice(toIndex, 0, element);
}

export default class Collector{

    id;
    userName;
    name;
    date;
    type;
    projects = [];

    container;
    typefolder;
    title;
    owner;
    lastUpdate;
    documentFile;

    constructor(id,userName,name,date,type,projects){
        this.prepairDocument();
        this.id = id;
        this.setUserName(userName);
        this.setName(name);
        this.setDate(date);
        this.setType(type);
        this.setProjects(projects);
    }


    prepairDocument(){
        this.container = document.createElement('details');
        this.container.addEventListener('mousedown', this.docIn)
        this.container.addEventListener('contextmenu', this.addMenu)
        this.container.addEventListener('dragend', this.drage);


        let sumary = document.createElement('summary');

        this.typefolder = document.createElement('img');
        this.typefolder.classList.add('typefolder');
        sumary.appendChild(this.typefolder);

        this.title = document.createElement('div');
        this.title.classList.add('title','textOverflow');
        sumary.appendChild(this.title);

        this.owner = document.createElement('div');
        this.owner.classList.add('username','textOverflow');
        sumary.appendChild(this.owner);

        this.lastUpdate = document.createElement('div');
        this.lastUpdate.classList.add('date','textOverflow');
        sumary.appendChild(this.lastUpdate);

        this.container.appendChild(sumary);

        this.documentFile = document.createElement('div');
        this.documentFile.classList.add('details-content');
        new Sortable(this.documentFile,{
            animation: 350
        });
        this.container.appendChild(this.documentFile);
    }

    setName(value){
        this.name = value;
        this.getTitle().innerText = value;

    }

    setDate(value){
        this.date = value;
        this.getLastUpdate().innerText = value;
    }

    setType(value){
        this.type = value;
        if (value == "A4") {
            this.getTypefolder().src = './project/images/A4W.png';
        } else if (value == "SL") {
            this.getTypefolder().src = './project/images/SLW.png';
        } else if (value == "WB") {
            this.getTypefolder().src = './project/images/WBW.png';
        }
    }

    setProjects(value){
        value.forEach(e=>{
            let project  = new CollectorProject(e.id_project,e.name_project,e.updated_at,e.type);
            this.getProject().push(project);
            this.getDocumentFile().appendChild(project.getContainer());
        })


    }


    setUserName(value){
        this.userName = value;
        this.getOwner().innerText = value;

    }

    deleteDoc(){
        let index = colletorList.indexOf(this);
        colletorList.splice(index,1);

        this.getContainer().remove();
    }

    addFile(value){
            let project = new CollectorProject(value.getId(),value.getName(),value.getDate(),value.getType());
            this.getProject().push(project);
            this.getDocumentFile().appendChild(project.getContainer())
        this.saveFiles();
    }

    // newFile(){
    //     let file = new DecumentFile(e.getId(),e.);
    //     document.push(file);
    //     this.getFiles().appendChild(file.getContainer());

    //     this.saveFiles();
    // }

    deleteFile(page){
        console.log(page)
        let index = this.getProject().indexOf(page);
        this.getProject().splice(index,1);
        page.getContainer().remove();
        this.saveFiles();
    }

    displayDoc(){
        window.location('')
    }
    drage = (e)=>{
    console.log("draggged")
}

    docIn = (e) =>{
        console.log(e.target)
        currentCollector = this;
    }

    saveFiles(){
        let filesJson = [];
        this.getProject().forEach(e =>{
            filesJson.push(e.getId())
        })
        UpdateCollector(this.getId(),JSON.stringify(filesJson));

    }

    moveFile(value){
        let fromIndex = this.getProject().indexOf(value);
        let toIndex = Array.from(this.getDocumentFile().children).indexOf(value.getContainer());
        arraymove(this.getProject(), fromIndex, toIndex)

        this.saveFiles();
    }

    addMenu = (e) =>{
        e.preventDefault();
        if (currentCollector != null){
            currentCollector.getContainer().style.zIndex = 1;
        }
        console.log('dkr')
        if (menuFlag) {
            currentCollector = this;
            this.getContainer().style.zIndex = 10;
            let rect = e.target.getBoundingClientRect();
            let x = e.clientX ;
            let y = e.clientY - 200 ;
            // sitting.style.disply = 'block';
            sitting.style.left = `${x}px`;
            sitting.style.top = `${y}px`;
            doc_body.appendChild(sitting);
        }
    }

    getId(){return this.id;}
    getUserName(){return this.userName;}
    getName(){return this.name;}
    getDate(){return this.date;}
    getType(){return this.type};

    getProject(){return this.projects;}

    getContainer(){return this.container;}
    getTypefolder(){return this.typefolder;}
    getTitle(){return this.title;}
    getOwner(){return this.owner;}
    getLastUpdate(){return this.lastUpdate;}
    getDocumentFile(){return this.documentFile;}
// addEventListener
}
