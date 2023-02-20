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
                let ulList = document.createElement('ul');
                ulList.classList.add('FS-basic_blocks_list');

                let currentli = document.createElement('li');

                let imageDiv = document.createElement('div');
                imageDiv.classList.add('FS-image');

                let image = document.createElement('img');
                image.src = '../project/page/Images/ComponentList/Pe.png';
                image.alt = 'past';
                imageDiv.appendChild(image);

                currentli.appendChild(imageDiv);

                let textDiv = document.createElement('div');
                textDiv.classList.add('FS-text');

                let textName = document.createElement('p');
                textName.classList.add('FS-sss');
                textName.innerText = 'Peste';
                textDiv.appendChild(textName);

                let textDes = document.createElement('p');
                textDes.innerText = 'Peste Component';
                textDiv.appendChild(textDes);

                currentli.appendChild(textDiv);
                currentli.dataset.type = 'Paste';
                currentli.addEventListener('click',this.copyComponent);

                let hr = document.createElement('hr');

                    ulList.appendChild(currentli);
                    ulList.appendChild(hr);

                //====================================================================


                currentli = document.createElement('li');

                imageDiv = document.createElement('div');
                imageDiv.classList.add('FS-image');

                image = document.createElement('img');
                image.src = '../project/page/Images/ComponentList/T.png';
                image.alt = 'text';
                imageDiv.appendChild(image);

                currentli.appendChild(imageDiv);

                textDiv = document.createElement('div');
                textDiv.classList.add('FS-text');

                textName = document.createElement('p');
                textName.classList.add('FS-sss');
                textName.innerText = 'Text';
                textDiv.appendChild(textName);

                textDes = document.createElement('p');
                textDes.innerText = 'Text';
                textDiv.appendChild(textDes);

                currentli.appendChild(textDiv);
                currentli.dataset.type = 'Paragraph';
                currentli.addEventListener('click', (e)=>{e.stopPropagation; this.addComponanet('Paragraph')});


                    ulList.appendChild(currentli);

                //====================================================================


                currentli = document.createElement('li');

                imageDiv = document.createElement('div');
                imageDiv.classList.add('FS-image');

                image = document.createElement('img');
                image.src = '../project/page/Images/ComponentList/To.png';
                image.alt = 'topice';
                imageDiv.appendChild(image);

                currentli.appendChild(imageDiv);

                textDiv = document.createElement('div');
                textDiv.classList.add('FS-text');

                textName = document.createElement('p');
                textName.classList.add('FS-sss');
                textName.innerText = 'Topice';
                textDiv.appendChild(textName);

                textDes = document.createElement('p');
                textDes.innerText = 'Topice Component';
                textDiv.appendChild(textDes);

                currentli.appendChild(textDiv);
                currentli.dataset.type = 'Topic';
                currentli.addEventListener('click', (e)=>{e.stopPropagation; this.addComponanet('Topic')});


                    ulList.appendChild(currentli);

                //====================================================================


                currentli = document.createElement('li');

                imageDiv = document.createElement('div');
                imageDiv.classList.add('FS-image');

                image = document.createElement('img');
                image.src = '../project/page/Images/ComponentList/I m.png';
                image.alt = 'image';
                imageDiv.appendChild(image);

                currentli.appendChild(imageDiv);

                textDiv = document.createElement('div');
                textDiv.classList.add('FS-text');

                textName = document.createElement('p');
                textName.classList.add('FS-sss');
                textName.innerText = 'Image';
                textDiv.appendChild(textName);

                textDes = document.createElement('p');
                textDes.innerText = 'Image Component';
                textDiv.appendChild(textDes);

                currentli.appendChild(textDiv);
                currentli.dataset.type = 'Image';
                currentli.addEventListener('click', (e)=>{e.stopPropagation; this.addComponanet('Image')});


                    ulList.appendChild(currentli);

                //====================================================================


                currentli = document.createElement('li');

                imageDiv = document.createElement('div');
                imageDiv.classList.add('FS-image');

                image = document.createElement('img');
                image.src = '../project/page/Images/ComponentList/Ic.png';
                image.alt = 'icon';
                imageDiv.appendChild(image);

                currentli.appendChild(imageDiv);

                textDiv = document.createElement('div');
                textDiv.classList.add('FS-text');

                textName = document.createElement('p');
                textName.classList.add('FS-sss');
                textName.innerText = 'Icon';
                textDiv.appendChild(textName);

                textDes = document.createElement('p');
                textDes.innerText = 'Icon Component';
                textDiv.appendChild(textDes);

                currentli.appendChild(textDiv);
                currentli.dataset.type = 'Icon';
                currentli.addEventListener('click', (e)=>{e.stopPropagation; this.addComponanet('Icon')});


                    ulList.appendChild(currentli);

                //====================================================================


                currentli = document.createElement('li');

                imageDiv = document.createElement('div');
                imageDiv.classList.add('FS-image');

                image = document.createElement('img');
                image.src = '../project/page/Images/ComponentList/L i.png';
                image.alt = 'List';
                imageDiv.appendChild(image);

                currentli.appendChild(imageDiv);

                textDiv = document.createElement('div');
                textDiv.classList.add('FS-text');

                textName = document.createElement('p');
                textName.classList.add('FS-sss');
                textName.innerText = 'List';
                textDiv.appendChild(textName);

                textDes = document.createElement('p');
                textDes.innerText = 'List Component';
                textDiv.appendChild(textDes);

                currentli.appendChild(textDiv);
                currentli.dataset.type = 'List';
                currentli.addEventListener('click', (e)=>{e.stopPropagation; this.addComponanet('List')});


                    ulList.appendChild(currentli);

                //====================================================================


                currentli = document.createElement('li');

                imageDiv = document.createElement('div');
                imageDiv.classList.add('FS-image');

                image = document.createElement('img');
                image.src = '../project/page/Images/ComponentList/TaC o.png';
                image.alt = 'topiceList';
                imageDiv.appendChild(image);

                currentli.appendChild(imageDiv);

                textDiv = document.createElement('div');
                textDiv.classList.add('FS-text');

                textName = document.createElement('p');
                textName.classList.add('FS-sss');
                textName.innerText = 'List Of Topice';
                textDiv.appendChild(textName);

                textDes = document.createElement('p');
                textDes.innerText = 'List Of Topice Component';
                textDiv.appendChild(textDes);

                currentli.appendChild(textDiv);
                currentli.dataset.type = 'TopicList';
                currentli.addEventListener('click', (e)=>{e.stopPropagation; this.addComponanet('TopicList')});


                    ulList.appendChild(currentli);

                //====================================================================


                currentli = document.createElement('li');

                imageDiv = document.createElement('div');
                imageDiv.classList.add('FS-image');

                image = document.createElement('img');
                image.src = '../project/page/Images/ComponentList/Ta.png';
                image.alt = 'table';
                imageDiv.appendChild(image);

                currentli.appendChild(imageDiv);

                textDiv = document.createElement('div');
                textDiv.classList.add('FS-text');

                textName = document.createElement('p');
                textName.classList.add('FS-sss');
                textName.innerText = 'Table';
                textDiv.appendChild(textName);

                textDes = document.createElement('p');
                textDes.innerText = 'Table Component';
                textDiv.appendChild(textDes);

                currentli.appendChild(textDiv);
                currentli.dataset.type = 'Table';
                currentli.addEventListener('click', (e)=>{e.stopPropagation; this.addComponanet('Table')});


                    ulList.appendChild(currentli);

                //====================================================================


                currentli = document.createElement('li');

                imageDiv = document.createElement('div');
                imageDiv.classList.add('FS-image');

                image = document.createElement('img');
                image.src = '../project/page/Images/ComponentList/S h.png';
                image.alt = 'shap';
                imageDiv.appendChild(image);

                currentli.appendChild(imageDiv);

                textDiv = document.createElement('div');
                textDiv.classList.add('FS-text');

                textName = document.createElement('p');
                textName.classList.add('FS-sss');
                textName.innerText = 'Shapes';
                textDiv.appendChild(textName);

                textDes = document.createElement('p');
                textDes.innerText = 'Shapes Component';
                textDiv.appendChild(textDes);

                currentli.appendChild(textDiv);
                currentli.dataset.type = 'Shap';
                currentli.addEventListener('click', (e)=>{e.stopPropagation; this.addComponanet('Shap')});


                    ulList.appendChild(currentli);

                //====================================================================


                //======================================


                // let bPaste = document.createElement('button');
                // bPaste.classList.add('mainComponentBtn');
                // bPaste.innerText = 'PS';
                // bPaste.addEventListener('click', this.copyComponent);

                // let bText = document.createElement('button');
                // bText.dataset.type = "Paragraph";
                // bText.classList.add('mainComponentBtn');
                // bText.innerText = 'TX';
                // bText.addEventListener('click', this.addComponanet);

                // let bTopic = document.createElement('button');
                // bTopic.dataset.type = "Topic";
                // bTopic.classList.add('mainComponentBtn');
                // bTopic.innerText = 'HD';
                // bTopic.addEventListener('click', this.addComponanet);

                // let bImage = document.createElement('button');
                // bImage.dataset.type = "Image";
                // bImage.classList.add('mainComponentBtn');
                // bImage.innerText = 'IM';
                // bImage.addEventListener('click', this.addComponanet);

                // let bIcon = document.createElement('button');
                // bIcon.dataset.type = "Icon";
                // bIcon.classList.add('mainComponentBtn');
                // bIcon.innerText = 'IC';
                // bIcon.addEventListener('click', this.addComponanet);

                // let bList = document.createElement('button');
                // bList.dataset.type = "List";
                // bList.classList.add('mainComponentBtn');
                // bList.innerText = 'LS';
                // bList.addEventListener('click', this.addComponanet);

                // let bTable = document.createElement('button');
                // bTable.dataset.type = "Table";
                // bTable.classList.add('mainComponentBtn');
                // bTable.innerText = 'TB';
                // bTable.addEventListener('click', this.addComponanet);


                // let bTopicList = document.createElement('button');
                // bTopicList.dataset.type = "TopicList";
                // bTopicList.classList.add('mainComponentBtn');
                // bTopicList.innerText = 'TPL';
                // bTopicList.addEventListener('click', this.addComponanet);

                // let bShape = document.createElement('button');
                // bShape.dataset.type = "Shapes";
                // bShape.classList.add('mainComponentBtn');
                // bShape.innerText = 'SH';
                // bShape.addEventListener('click', this.addComponanet);

{/* <div class="FS-Basic_Blocks"></div> */}
                let div = document.createElement('div');
                div.style.disply = 'none';
                // div.style.width = '100px';
                // div.style.height = '100px';
                div.classList.add('addBlock','FS-Basic_Blocks');


                // div.appendChild(bPaste);
                // div.appendChild(bText);
                // div.appendChild(bTopic);
                // div.appendChild(bList);
                // div.appendChild(bTable);
                // div.appendChild(bIcon);
                // div.appendChild(bImage);
                // div.appendChild(bTopicList);
                div.appendChild(ulList);
                return div;
    }
    addComponanet(name){
        // e.stopPropagation();
        let rect = this.getAddComponentList();
        currentPage.addComponanet(name,rect.offsetLeft,rect.offsetTop);
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
