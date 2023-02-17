
import { setCurrentComponentParentFlag } from "./Component";
import {frame} from "./main.js";

export let currentFile;
export let ReadinfFiles = [];

export default class ReadingFile{

    height;
    URL;
    name;

    fileContainer;
    nameVeiw;
    deleteView;

    constructor(height,URL){
        this.prepairReadingFile();
        this.height = height;
        this.URL = URL;
    }

    prepairReadingFile(){

        this.fileContainer = document.createElement('div');
        this.fileContainer.classList.add('FS-readingFiles');

        this.nameVeiw = document.createElement('p');
        this.nameVeiw.classList.add('FS-nameFile','textOverflow');

        this.deleteView = document.createElement('div');
        this.deleteView.classList.add('FS-iconDelete');
        this.deleteView.insertAdjacentHTML("beforeend", `<i class="fa-sharp fa-solid fa-trash"></i>`);
        this.deleteView.addEventListener('click', this.deleteFile)



        this.fileContainer.appendChild(this.nameVeiw);
        this.fileContainer.appendChild(this.deleteView);

    }

    setHeight(value){
        this.height = value;
    }
    setURL(value){
        this.URL = value;
    }


    display = (e) =>{
        this.getFileContainer().appendChild(deleteFileBtn);
        currentFile = this;
        frame.src = this.getURL;
        frame.scrollBy(0,this.getHeight())
    }

    deleteFile = (e) =>{
        let index = ReadinfFiles.indexOf(this);

        ReadinfFiles.splice(index,1);
        this.getFileContainer().remove();
    }

    getHeight(){
        return this.height;
    }
    getURL(){
        return this.URL;
    }
    getFileContainer(){
        return this.fileContainer()
    }

}
