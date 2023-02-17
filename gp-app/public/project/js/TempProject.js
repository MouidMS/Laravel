
export default class TempFile{

    id;
    name;
    type;
    date;
    flag;

    container;
    nameView;
    typeView;

    constructor(id,name,type,date){
        this.prepairContainer();

        this.setId(id);
        this.setName(name);
        this.setDate(date);
        this.setType(type);
        this.setFalg(false);
    }

    prepairContainer(){
        this.container = document.createElement('li');
        this.container.addEventListener('click', this.selectFile)

        this.typeView = document.createElement('img');
        this.typeView.classList.add('typefolder');
        this.container.appendChild(this.typeView);

        let nameViewContainer = document.createElement('div');
        nameViewContainer.classList.add('typefile');
        nameViewContainer.classList.add('textOverflow');

        this.nameView = document.createElement('h3');
        nameViewContainer.appendChild(this.nameView)

        this.container.appendChild(nameViewContainer);
    }


    selectFile = (e) =>{
        this.setFalg(!this.getFlag())
    }
    setId(value){
        this.id = value;
    }
    setName(value){
        this.name = value;
        this.getNameView().innerText = value;
    }

    setType(value){
        this.type = value;
        console.log(value);
        switch (value) {
            case 'A4':
                this.getTypeView().src = './project/images/A4B.png';
                break;
            case 'SL':
                this.getTypeView().src = './project/images/SLB.png';
                break;
            case 'WB':
                this.getTypeView().src = './project/images/WBB.png';
                break;
        }
    }
    setDate(value){
        this.date = value;
    }

    setFalg(value){
        this.flag = value;
        if (value) {
            this.getContainer().style.border = '2px solid blue';
        } else {
            this.getContainer().style.border = '1px solid black';
        }
    }


    getId(){return this.id;}
    getName(){return this.name;}
    getType(){return this.type;}
    getContainer(){return this.container;}
    getNameView(){return this.nameView;}
    getTypeView(){return this.typeView;}
    getFlag(){return this.flag;}
    getDate(){return this.date;}

}
