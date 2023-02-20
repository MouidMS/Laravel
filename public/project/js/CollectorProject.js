import {currentCollector} from "./CollectorObj.js";

export default class CollectorProject{

    id;
    name;
    date;
    type;

    container;
    nameView;
    dateView;
    typeView;

    constructor(id,name,date,type){
        this.prepairContainer();
        console.log(type)
        this.setId(id);
        this.setName(name);
        this.setDate(date);
        this.setType(type);
    }

    prepairContainer(){
        this.container = document.createElement('div');
        this.container.classList.add('project');
        this.container.addEventListener('dragend', this.moveFile)

        this.typeView = document.createElement('img');
        this.typeView.classList.add('typefolder');
        this.container.appendChild(this.typeView);

        let nameViewContainer = document.createElement('div');
        nameViewContainer.classList.add('title');
        nameViewContainer.classList.add('textOverflow');

        this.nameView = document.createElement('p');
        nameViewContainer.appendChild(this.nameView)

        this.container.appendChild(nameViewContainer);


        this.dateView = document.createElement('div');
        this.dateView.classList.add('date');
        this.dateView.classList.add('textOverflow');
        this.container.appendChild(this.dateView);

        let xDiv = document.createElement('div');
        xDiv.classList.add('butt-short');

        let xBtn = document.createElement('div');
        xBtn.classList.add('trash');
        xBtn.addEventListener('click', this.deletDocFile)

        let xIcon = document.createElement('div');
        xIcon.classList.add('fa-solid');
        xIcon.classList.add('fa-trash');

        xBtn.appendChild(xIcon);
        xDiv.appendChild(xBtn);

        this.container.appendChild(xDiv);
    }

    setId(value){
        this.id = value;
    }
    setName(value){
        this.name = value;
        this.getNameView().innerText = value;
    }
    setDate(value){
        this.date = new Date(value);
        this.getDateView().innerText = this.getDate()
    }
    setType(value){
        this.type = value;
        console.log(value)
        switch (value) {
            case 'A4':
                this.getTypeView().src = './project/images/A4W.png';
                break;
            case 'SL':
                this.getTypeView().src = './project/images/SLW.png';
                break;
            case 'WB':
                this.getTypeView().src = './project/images/WBW.png';
                break;
        }
    }

    deletDocFile = (e) =>{
        console.log(this,currentCollector)
        // if(this == currentCollector){
            currentCollector.deleteFile(this);
        // }
    }

    moveFile = (e) =>{
        currentCollector.moveFile(this);
    }



    getId(){return this.id;}
    getName(){return this.name;}
    getDate(){return this.date;}
    getType(){return this.type;}
    getContainer(){return this.container;}
    getNameView(){return this.nameView;}
    getDateView(){return this.dateView;}
    getTypeView(){return this.typeView;}

}
