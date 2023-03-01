import Collector,{currentCollector}from './CollectorObj.js';
import TempProject from './TempProject.js';


export let menuFlag = true;
export let doc_body = document.getElementsByClassName('doc-body')[0];
console.log(doc_body)
export let colletorList = [];
let TempPlist = [];
let poupParent = document.getElementById('poupParent');
let iconsearch = document.getElementById('iconSearch').style.visibility = "hidden";


/*********************** pupRedXmark *********************/

let popupRedXmark = document.getElementById('popupRedXmark');
let closePopRedXmark = document.getElementById('closePopRedXmark');
let H_puptext = document.getElementById('H-puptext');
let P_puptext = document.getElementById('P-puptext');

function displayMesage(message,state,time){
    P_puptext.innerText = message;
    console.log(popupRedXmark.children[0])
    if (state){
        popupRedXmark.children[0].style.borderColor = 'green';
        H_puptext.innerText = 'Done';
        H_puptext.style.color = 'green';
    }else {
        popupRedXmark.children[0].style.borderColor = 'red';
        H_puptext.innerText = 'Oopes!'
        H_puptext.style.color = 'red';
    }
    popupRedXmark.style.display = 'block';
    if (time != 0){
        setTimeout(function (){closePopRedXmark.click()},1000 * time)
    }
}


closePopRedXmark.addEventListener('click', function (){
    popupRedXmark.style.display = 'none';
})




//==============================================================

export let sitting = document.createElement('div');
sitting.classList.add('setting-menu-wrap');
sitting.id = 'settMenu';

let menu = document.createElement('div');
menu.classList.add('menuSetting');

let Open = document.createElement('button');
Open.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-folder-open"></i>`);
Open.insertAdjacentHTML('beforeend', `Open`);
Open.addEventListener('click', function(){
    var hash = btoa(currentCollector.getId());
    window.location = 'page-collector-id/'+hash;
});
menu.appendChild(Open);

let AddProject = document.createElement('button');
AddProject.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-file-circle-plus"></i>`);
AddProject.insertAdjacentHTML('beforeend', `Add project`);
AddProject.addEventListener('click', function(){
    console.log("heeeer")
    clearAllPop();
    menuFlag = false;
    GetTypeCollector(currentCollector.getType());
});
menu.appendChild(AddProject);

let Rename = document.createElement('button');
Rename.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-pen"></i>`);
Rename.insertAdjacentHTML('beforeend', `Rename`);
Rename.addEventListener('click', function(){
    clearAllPop();
    menuFlag = false;
    poupParent.style.display = 'block';
    popupRename.style.display = 'block';
});
menu.appendChild(Rename);

let RemoveFolder = document.createElement('button');
RemoveFolder.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-trash"></i>`);
RemoveFolder.insertAdjacentHTML('beforeend', `Remove`);
RemoveFolder.addEventListener('click', function(){
    clearAllPop();
    menuFlag = false;
    poupParent.style.display = 'block';
    popupRemove.style.display = 'block';
});
menu.appendChild(RemoveFolder);


sitting.appendChild(menu);


// pop add Collector====================================
let addNewProject = document.getElementById('addNewProject');
let popupAddFolder = document.getElementById('popupAddFolder');
let collectorName = document.getElementById('collectorName');
let newCollectorCansel = document.getElementById('newCollectorCansel');
let newCollectorOk = document.getElementById('newCollectorOk');
// let typeProjectt = document.getElementsByName('type');

collectorName.addEventListener('input',function () {
    if (collectorName.value == ""){
        newCollectorOk.disabled = true;
    }else {
        newCollectorOk.disabled = false;
    }
});


addNewProject.addEventListener('click',function () {
    clearAllPop();
    poupParent.style.display = 'block';
    popupAddFolder.style.display = 'block';
})



function clearAllPop(){
    poupParent.style.display = 'none';
    popupAddFolder.style.display = 'none';
    collectorName.value = "";
    newCollectorOk.disabled = true;
    sitting.remove();
    popupRename.style.display = 'none';
    popupRemove.style.display = 'none';
    renameFiled.value = "";
    renameOk.disabled = true;
    TempPlist.length = 0;
    for (let i = 0; i < AddFile_list.children.length; i++) {
        AddFile_list.children[i].remove();
    }

}

newCollectorCansel.addEventListener('click',function () {
    clearAllPop();
})
newCollectorOk.addEventListener('click',function () {
    CreateNewCollector(collectorName.value,document.querySelector('input[name="type"]:checked').value);
    clearAllPop();
})

// pop addProject Collector====================================
let popupAddFile = document.getElementById('popupAddFile');
let AddFile_list = document.getElementById('AddFileList');
let addProjectCansel = document.getElementById('addProjectCansel');
let addProjectOk = document.getElementById('addProjectOk');



addProjectCansel.addEventListener('click',function () {
    clearAllPop();
    menuFlag = true;
})

addProjectOk.addEventListener('click',function () {
    menuFlag = true;
    TempPlist.forEach(e =>{
        if (e.getFlag()){
            currentCollector.addFile(e);
        }
    })
    clearAllPop();
})

//
//
//
//
// pop rename Collector====================================
let popupRename = document.getElementById('popupRename');
let renameFiled = document.getElementById('renameFiled');
renameFiled.addEventListener('input',function () {
    if (renameFiled.value == ""){
        renameOk.disabled = true;
    }else {
        renameOk.disabled = false;
    }
});


let renameCansel = document.getElementById('renameCansel');
renameCansel.addEventListener('click',function () {
     clearAllPop();
    menuFlag = true;
})
let renameOk = document.getElementById('renameOk');
renameOk.addEventListener('click',function () {
    RenameCollector(currentCollector.getId(),renameFiled.value);
    clearAllPop();
})

// pop delete Collector====================================
let popupRemove = document.getElementById('popupRemove');
let removeCansel = document.getElementById('removeCansel');
removeCansel.addEventListener('click',function () {
    clearAllPop();
    menuFlag = true;
})
let removeOk = document.getElementById('removeOk');
removeOk.addEventListener('click',function () {
    clearAllPop();
    DeleteCollector(currentCollector.getId())
})




window.addEventListener('click',function () {
    sitting.remove();
})
//=============================Document=========================================================================


//Ajax Community==============================================================================

// $(document).ready(function () {
    getCollector();
    // GetTypeCollector('A4');
// })
    // RenameCollector(1,'newName');//id_project
    // DeleteCollector(1);//id_project

    function getCollector(){

        $.ajax({
            type: "GET",
            url: "/get-collector",
            dataType: "json",
            success: function (response) {
                response.forEach(e=>{
                    // console.log("gjbkjjk")
                    let collector = new Collector(e.id,e.user_name,e.name,e.updated_at,e.type,e.collectorArrya);
                    colletorList.push(collector);
                    doc_body.appendChild(collector.getContainer());

                    // console.log(collector)

                })
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }


    function RenameCollector(id,rename){
        $.ajax({
            type: "GET",
            url: "/rename-collector/"+id+"/"+rename,
            dataType: "json",
            success: function (response) {
                menuFlag = true;
                currentCollector.setName(response)
                displayMesage(" Collector Renamed",true,3);
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }


    function DeleteCollector($id){
        $.ajax({
            type: "GET",
            url: "/delete-collector/"+$id,
            dataType: "json",
            success: function (response) {
                menuFlag = true;
                currentCollector.deleteDoc();
                displayMesage(" Collector Deleted",true,3);
                console.log(response)
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }


   export function UpdateCollector(id,json){
        $.ajax({
            type: "GET",
            url: "/update-collector/"+id+"/"+json,
            dataType: "json",
            success: function (response) {
                console.log(response)
                displayMesage("Updated Collector",true,3);
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }


function GetTypeCollector(type){
    $.ajax({
        type: "GET",
        url: "/get-type-project-collector/"+type,
        dataType: "json",
        success: function (response) {
            console.log("dddd")
            poupParent.style.display = 'block';
            popupAddFile.style.display = 'block';
            console.log(response)
            //
            response.projects.forEach(e=>{
                let tempProject = new TempProject(e.id_project,e.name,e.type,e.updated_at);
                TempPlist.push(tempProject);
                AddFile_list.appendChild(tempProject.getContainer());

            })

            response.receives.forEach(e=>{
                let tempProject = new TempProject(e.id_project,e.name,e.type,e.updated_at);
                TempPlist.push(tempProject);
                AddFile_list.appendChild(tempProject.getContainer());
            })
        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}


    function CreateNewCollector(name,type){

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        var data = {
            'name':name,
            'type':type,
        }

        $.ajax({
            type: "POST",
            url: "add-new-collector",
            data: data,
            dataType: "json",
            success: function (response) {
                let collector = new Collector(response[0].id,response[0].user_name,response[0].name,response[0].updated_at,response[0].type,response[0].collectorArrya)
                // console.log(response)
                // console.log(response[0].id,response[0].user_name,response[0].name,response[0].updated_at,response[0].type,response[0].collectorArrya);
                colletorList.push(collector);
                doc_body.appendChild(collector.getContainer());
                displayMesage(" Create New Collector",true,3);

            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }




// });
