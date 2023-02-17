


export let currentFile;

export default class ReadingFile{

    height;
    URL;
    fileContainer;

    constructor(height,URL){
        this.height = height;
        this.URL = URL;
        this.setFileContainer();

    }

    setHeight(value){
        this.height = value;
    }
    setURL(value){
        this.URL = value;
    }
    setFileContainer(){
        this.fileContainer = document.createElement('div');
        this.fileContainer.classList.add('fileContainer');
        this.fileContainer.addEventListener('click',this.display);
    };

    display = (e) =>{
        this.getFileContainer().appendChild(deleteFileBtn);
        currentFile = this;
        frame.src = this.getURL;
        frame.scrollBy(0,this.getHeight())
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