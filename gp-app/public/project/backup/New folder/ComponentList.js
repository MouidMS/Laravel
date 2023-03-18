import { currentPage } from "./Page.js";


export default class ComponentList{

    addComponentList ;

    constructor(){
        this.addComponentList = this.prepairAddComponent();
        
    }

    // <ul class="basic_blocks_list">
    //                 <li>
    //                     <div class="image">
    //                         <img src="./Block/Pe.png" alt="text">
    //                     </div>
    //                     <div class="text">
    //                         <p class="sss">Peste</p>
    //                         <p>Just start writing with plain textdddddd.</p>
    //                     </div>
    //                 </li>

                


    //                 <hr>
    //                 <li>
    //                     <div class="image">
    //                         <img src="./Block/T.png" alt="text">
    //                     </div>
    //                     <div class="text">
    //                         <p class="sss">Text</p>
    //                         <p>Just start writing with plain textdddddd.</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <div class="image">
    //                         <img src="./Block/To.png" alt="text">
    //                     </div>
    //                     <div class="text">
    //                         <p class="sss">Topic</p>
    //                         <p>Just start writing with plain text.</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <div class="image">
    //                         <img src="./Block/Ic.png" alt="text">
    //                     </div>
    //                     <div class="text">
    //                         <p class="sss">Icon</p>
    //                         <p>Just start writing with plain text.</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <div class="image">
    //                         <img src="./Block/I m.png" alt="text">
    //                     </div>
    //                     <div class="text">
    //                         <p class="sss">Image</p>
    //                         <p>Just start writing with plain text.</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <div class="image">
    //                         <img src="./Block/L i.png" alt="text">
    //                     </div>
    //                     <div class="text">
    //                         <p class="sss">List</p>
    //                         <p>Just start writing with plain text.</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <div class="image">
    //                         <img src="./Block/Ta.png" alt="text">
    //                     </div>
    //                     <div class="text">
    //                         <p class="sss">Table</p>
    //                         <p>Just start writing with plain text.</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <div class="image">
    //                         <img src="./Block/TaC o.png" alt="text">
    //                     </div>
    //                     <div class="text">
    //                         <p class="sss">Table Of Content</p>
    //                         <p>Just start writing with plain text.</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <div class="image">
    //                         <img src="./Block/To.png" alt="text">
    //                     </div>
    //                     <div class="text">
    //                         <p class="sss">Shap</p>
    //                         <p>Just start writing with plain text.</p>
    //                     </div>
    //                 </li>
    //             </ul>




                // <ul class="basic_blocks_list">
                //     <li>
                //         <div class="image">
                //             <img src="./Block/Pe.png" alt="text">
                //         </div>
                //         <div class="text">
                //             <p class="sss">Peste</p>
                //             <p>Just start writing with plain textdddddd.</p>
                //         </div>
                //     </li>

                    // <hr>
    prepairAddComponent(){
                // let ulList = document.createElement('ul');
                // ulList.classList.add('basic_blocks_list');

                // let currentli = document.createElement('li');

                // let imageDiv = document.createElement('div');
                // imageDiv.classList.add('image'); 

                // let image = document.createElement('img');
                // image.src = './Block/Pe.png';
                // image.alt = 'past';
                // imageDiv.appendChild(image);

                // currentli.appendChild(imageDiv);

                // let textDiv = document.createElement('div');
                // textDiv.classList.add('text');

                // let textName = document.createElement('p');
                // textName.classList.add('sss');
                // textName.innerText = 'Peste';
                // textDiv.appendChild(textName);

                // let textDes = document.createElement('p');
                // textDes.innerText = 'Peste Component';
                // textDiv.appendChild(textDes);
                
                // currentli.appendChild(textDiv);
                // currentli.dataset.type = 'Paste';
                // currentli.addEventListener('click',this.copyComponent);

                // let hr = document.createElement('hr');

                // ulList.appendChild(currentli);
                // ulList.appendChild(hr);


                //======================================


                let bPaste = document.createElement('button');
                bPaste.classList.add('mainComponentBtn');
                bPaste.innerText = 'PS';
                bPaste.addEventListener('click', this.copyComponent);

                let bText = document.createElement('button'); 
                bText.dataset.type = "Paragraph";
                bText.classList.add('mainComponentBtn');
                bText.innerText = 'TX';
                bText.addEventListener('click', this.addComponanet);
                
                let bTopic = document.createElement('button');
                bTopic.dataset.type = "Topic";
                bTopic.classList.add('mainComponentBtn');
                bTopic.innerText = 'HD';
                bTopic.addEventListener('click', this.addComponanet);

                let bImage = document.createElement('button');
                bImage.dataset.type = "Image";
                bImage.classList.add('mainComponentBtn');
                bImage.innerText = 'IM';
                bImage.addEventListener('click', this.addComponanet);

                let bIcon = document.createElement('button');
                bIcon.dataset.type = "Icon";
                bIcon.classList.add('mainComponentBtn');
                bIcon.innerText = 'IC';
                bIcon.addEventListener('click', this.addComponanet);

                let bList = document.createElement('button');
                bList.dataset.type = "List";
                bList.classList.add('mainComponentBtn');
                bList.innerText = 'LS';
                bList.addEventListener('click', this.addComponanet);

                let bTable = document.createElement('button');
                bTable.dataset.type = "Table";
                bTable.classList.add('mainComponentBtn');
                bTable.innerText = 'TB';
                bTable.addEventListener('click', this.addComponanet);


                let bTopicList = document.createElement('button');
                bTopicList.dataset.type = "TopicList";
                bTopicList.classList.add('mainComponentBtn');
                bTopicList.innerText = 'TPL';
                bTopicList.addEventListener('click', this.addComponanet);

                let bShape = document.createElement('button');
                bShape.dataset.type = "Shapes";
                bShape.classList.add('mainComponentBtn');
                bShape.innerText = 'SH';
                bShape.addEventListener('click', this.addComponanet);


                let div = document.createElement('div');
                div.style.disply = 'none';
                div.style.width = '100px';
                div.style.height = '100px';
                div.classList.add('addBlock');
                

                div.appendChild(bPaste);
                div.appendChild(bText);
                div.appendChild(bTopic);
                div.appendChild(bList);
                div.appendChild(bTable);
                div.appendChild(bIcon);
                div.appendChild(bImage);
                div.appendChild(bTopicList);
                div.appendChild(bShape);
                return div;
    }
    addComponanet = (e) =>{
        e.stopPropagation();
        let rect = this.getAddComponentList();
        currentPage.addComponanet(e.target.dataset.type,rect.offsetLeft,rect.offsetTop);
    };

    copyComponent = (e) =>{
        e.stopPropagation();
        let rect = this.getAddComponentList();
        currentPage.pasteComponent(rect.offsetLeft,rect.offsetTop);
    }

    getAddComponentList(){
        return this.addComponentList;
    }

}