let Buttonmenuplus_A4 = document.getElementById('Buttonmenuplus--A4');
let Buttonmenuplus_Slide = document.getElementById('Buttonmenuplus--Slide');
let Buttonmenuplus_Blanck = document.getElementById('Buttonmenuplus--Blanck');
let Buttonmenuplus_main = document.getElementById('Buttonmenuplus--main');



let Btnflage = true;

Buttonmenuplus_main.addEventListener('click' , function (event){
    console.log(Btnflage)
    if (Btnflage) {
        console.log(Buttonmenuplus_A4);
        Buttonmenuplus_main.style.transform = "rotate(360deg)";
        Buttonmenuplus_A4.style.transitionDelay = "0s"
        Buttonmenuplus_Slide.style.transitionDelay = "0.2s"
        Buttonmenuplus_Blanck.style.transitionDelay = "0.4s"
        // Buttonmenuplus_A4.style.right = `${25}px`;
        Buttonmenuplus_A4.style.bottom = `${100}px`;
        // Buttonmenuplus_Slide.style.right = `${65}px`
        Buttonmenuplus_Slide.style.bottom = `${155}px`
        // Buttonmenuplus_Blanck.style.right = `${100}px`
        Buttonmenuplus_Blanck.style.bottom = `${210}px`
        Btnflage = false;

    } else {
        Buttonmenuplus_main.style.transform = "rotate(0deg)";
        Buttonmenuplus_A4.style.transitionDelay = "0.3s"
        Buttonmenuplus_Slide.style.transitionDelay = "0.2s"
        Buttonmenuplus_Blanck.style.transitionDelay = "0.1s"
        // Buttonmenuplus_A4.style.right = `${40}px`;
        Buttonmenuplus_A4.style.bottom = `${25}px`;
        // Buttonmenuplus_Slide.style.right = `${25}px`
        Buttonmenuplus_Slide.style.bottom = `${25}px`
        // Buttonmenuplus_Blanck.style.right = `${25}px`
        Buttonmenuplus_Blanck.style.bottom = `${25}px`
        Btnflage = true;
    }
})

Buttonmenuplus_A4.addEventListener('click', function (event){
    disableBtn();
    window.location='/store/A4'
});
Buttonmenuplus_Slide.addEventListener('click', function (event){
    disableBtn();
    window.location='/store/SL'
});
Buttonmenuplus_Blanck.addEventListener('click', function (event){
    disableBtn();
    window.location='/store/WB'
});

function disableBtn(){
    Buttonmenuplus_A4.disabled = true;
    Buttonmenuplus_Slide.disabled = true;
    Buttonmenuplus_Blanck.disabled = true;
    // console.log(Buttonmenuplus_Blanck)
    Buttonmenuplus_main.disabled = false;
}




/*********************** Search ******************************/
// let searchFlag = false;
// let search = document.getElementById('search');
// search.addEventListener('click',function () {
//
//     if (searchFlag){
//
//     }else {
//
//     }
//     searchFlag = !searchFlag;
//
// })
// let searchBar = document.getElementById('searchBar');
//
// searchBar.addEventListener('input', function () {
//
//     if (){
//
//     }else{}
//
// })

/*********************** pupRedXmark *********************/

let popupRedXmark = document.getElementById('popupRedXmark');
let closePopRedXmark = document.getElementById('closePopRedXmark');
let H_puptext = document.getElementById('H-puptext');
let P_puptext = document.getElementById('P-puptext');

function displayMesage(message,state,time){
    console.log("jjkbrjkkrkjre")
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


// displayMesage("wronglkrjbkvjkevkjjkbervvjenvjefnvkje",false,0);


/*********************** popup ***************************/

let settingProject = document.createElement('div');
settingProject.classList.add('setting-project');


let poupParent = document.getElementById("poupParent");


let btn_community = document.getElementById("btn-community");
let btn_friend = document.getElementById("btn-friend");
let pop_commnuity = document.getElementById("pop-commnuity");
let pop_friend = document.getElementById("pop-friend");
let popupShare = document.getElementById("popupShare");

btn_community.addEventListener("click", function community(e) {
    pop_friend.style.display = "none";
    pop_commnuity.style.display = "block";
    btn_community.style.borderBottom = "2px solid";
    btn_friend.style.borderBottom = "0";
});
btn_friend.addEventListener("click", (e) => {
    pop_commnuity.style.display = "none";
    pop_friend.style.display = "block";
    btn_community.style.borderBottom = "0";
    btn_friend.style.borderBottom = "2px solid";

});



let commuintyCheck = document.getElementById('commuintyCheck');
let communityCansel = document.getElementById('communityCansel');
let communityOK = document.getElementById('communityOK');

communityCansel.addEventListener('click', function (){
    menuFlag = true;
    poupParent.style.display = "none";
})
communityOK.addEventListener('click', function (){
    currentProjectMenu.setIsSherCopy(commuintyCheck.checked);
    currentProjectMenu.setIsSherProject(true);
    currentProjectMenu.setLike(0);
    SherProject(currentProjectMenu.getId(),commuintyCheck.checked? 1:0);
    poupParent.style.display = "none";
})

let charEmail = document.getElementById('charEmail');
let friendCheck = document.getElementById('friendCheck');
let friendList = document.getElementById('friendList');
let friendCancel = document.getElementById('friendCancel');
let friendOk = document.getElementById('friendOk');

charEmail.addEventListener('input', isSharEmailEmpty)

function isSharEmailEmpty(){
    if (charEmail.value <= 0 ){
        friendOk.disabled = true;
    } else{
        friendOk.disabled = false;
    }
}

friendCancel.addEventListener('click', function (){
    menuFlag = true;
    poupParent.style.display = "none";
})
friendOk.addEventListener('click', function (){
    SherFrined(charEmail.value.trim(),currentProjectMenu.getId(),friendCheck.checked? 1:0);
    poupParent.style.display = "none";
})



let popupRename = document.getElementById("popupRename");
let renameFiled = document.getElementById("renameFiled");
renameFiled.addEventListener('keyup', function (event){
    console.log(renameFiled.value.trim().length)
    if (renameFiled.value.trim().length <= 0 ){
        popRenameOk.disabled = true;
    }else{
        popRenameOk.disabled = false;
    }
});
let popRenameCansel = document.getElementById("popReneameCansel");
popRenameCansel.addEventListener('click',function (event) {
    poupParent.style.display = "none";
    settingProject.remove();
    menuFlag = true;
});
let popRenameOk = document.getElementById("popReneameOk");
console.log(popRenameOk);
popRenameOk.addEventListener('click', function (event) {
    poupParent.style.display = "none";
     let newName = renameFiled.value.trim();
     currentProjectMenu.setName(newName);
    RenameProject(currentProjectMenu.getId(),newName);
})




let popupRemove = document.getElementById("popupRemove");
let popRemoveCancel = document.getElementById('popRemoveCancel');
popRemoveCancel.addEventListener('click' , function (event){
    poupParent.style.display = "none";
    settingProject.remove();
    menuFlag = true;
})
let popRemoveok = document.getElementById('popRemoveok');
popRemoveok.addEventListener('click', function (event){
    poupParent.style.display = "none";
    currentProjectMenu.hideProject();
    settingProject.remove();
    deleteProject(currentProjectMenu.getId(),currentProjectMenu.getIsReceved()? 1: 0);
});

let popupDescription = document.getElementById("popupDescription");
let pop_textArea = document.getElementById('pop-textArea');
let popupDescriptionCancel = document.getElementById('popupDescriptionCancel');
let popupDescriptionOk = document.getElementById('popupDescriptionOk');

popupDescriptionCancel.addEventListener('click', function (){
    poupParent.style.display = "none";
    settingProject.remove();
    menuFlag = true;
})
popupDescriptionOk.addEventListener('click', function (){
    poupParent.style.display = "none";
    // currentProjectMenu.hideProject();
    settingProject.remove();
    console.log(pop_textArea.value);
    // EditDecProject(currentProjectMenu.getId(),pop_textArea.value);
    if(pop_textArea.value.trim() ==""){
        EditDecProject(currentProjectMenu.getId(),"none".trim());
    }else {
        EditDecProject(currentProjectMenu.getId(),pop_textArea.value);

    }

})

// pop-textArea
// popupDescriptionCancel
// popupDescriptionOk

window.addEventListener('click', function (event){
    settingProject.remove();
})

//*******************************************************************8888888

let loader = document.getElementById('mainContainer');
let currentProjectFav;
let currentProjectMenu;
let favFlage = true;

let menuFlag = true;

window.addEventListener('loadstart', function (){

});

$(document).ready(function () {
    // pages();
    // console.log('jj')
    loader.style.display = 'block';
    fetchproject();
    // favorite(1,true);
    // SherProject(14,'true');
    // DeleteSherProject(1);
    // SherFrined('mooyd364@gmail.com',2,'true');
    // DeleteSherFriend(4);
    // deleteProject(1)
    // RenameProject(2,"new name");
    // getDecProject(7); //id_project
    // EditDecProject(2,'new dec');
    // addLike(4,3); // not complete
    // DeleteLike(4);
    //  getFriends()
    // getCountFollower(4);
    getNotification()







//
// function pages(){
//     $('.page-link').on('click', function (e) {
//         e.preventDefault();
//         var page = $(this).attr('href').split('?page=')[1];
//         $('.grid-item-section').html(fetchstudent("?page="+page));
//         $.ajax({
//             type: "GET",
//             url: "/fetch-curd?page="+page+"",
//             dataType: "json",
//             success: function (response) {
//                 console.log(response);
//             }
//         });
    });


   function fetchproject() {

        $.ajax({
            type: "GET",
            url: "/fetch-curd/",
            dataType: "json",
            success: function (response) {
                // $('.grid-item-section').html("");
                displayProject(response);
                loader.style.display = 'none';

               // $.each(response.projects, function (key, item) {
               //      // var v = item;
               //      // if(item.Isfavorite === false){
               //      //     var img = "./m/worky/RichTextEditor/projectVeiw/star-regular.svg";
               //      // }else {
               //      //     var img = "./m/worky/RichTextEditor/projectVeiw/star-solid.svg";
               //      // }
               //      //
               //      // if(item.isCopy === false){
               //      //     var copy = '<div id="isProjectShared" >Copy</div>';
               //      // }else {
               //      //     var copy = '<div id="isProjectShared" hidden>Copy</div>';
               //      // }
               //
               //
               //      // var d = new Date(item.created_at);
               //      // $('.grid-item-section').append(
               //      //     '<div class="grid-item"><div class="holder-item">' +
               //      //     '<div id="main"><a href="page/'+item.id+'" style="  all: unset;">' +
               //      //     '<div id="projectTop">' +
               //      //     '<img id="projectType" src="./m/worky/RichTextEditor/projectVeiw/ellipsis-vertical-solid.svg" >' +
               //      //     copy +
               //      //     '<img id="projectSitting" src="./m/worky/RichTextEditor/projectVeiw/ellipsis-vertical-solid.svg"/></div></a>  ' +
               //      //     '<p id="projectName">'+item.name+'</p><p id="projectLastUpDate"> Last update:'+ d.toLocaleDateString() +' </p>' +
               //      //     // '<img id="isProjectFavre" src='+img+' ><div id="projectOwner">' +
               //      //     // // '<img src='+item.icon+' alt="">' +
               //      //     // '</div>' +
               //      //     ' </div>' +
               //      //     '</div>' +
               //      //     '</div>');
               //
               //  });

            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }


    function favorite(id_project,fav){
        $.ajaxSetup({
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            type: "GET",
            url: "/favorite/"+id_project+"/"+fav,
            dataType: "json",
            success: function (response) {
                currentProjectFav.setIsFavorit(response);
                favFlage = true;
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }


    function SherProject(id_project,isCopy){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        var data = {
            'id_project':id_project,
            'isCopy': isCopy,
        }
        $.ajax({
            type: "POST",
            url: "/sher",
            data: data,
            dataType: "json",
            success: function (response) {

                switch (response) {
                    case 'All ready saved':
                        displayMesage(" Project All ready sened",true,3);
                        menuFlag = true;
                        break;
                    case 'Done':
                        displayMesage("Project Succefully shared",true,3);
                        menuFlag = true;
                        break;
                    case 'Not found':
                        displayMesage("Project not found",false,3);
                        menuFlag = true;
                        currentProjectMenu.setIsSherCopy(false);
                        currentProjectMenu.setIsSherProject(false);
                        break;
                }
            }
        });
    }


function DeleteSherProject(id){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });


    $.ajax({
        type: "DELETE",
        url: "/delete-sher/" + id,
        dataType: "json",
        success: function (response) {
            switch (response) {
                case 'Done':
                    displayMesage(" Project unshared",true,3);
                    menuFlag = true;
                    currentProjectMenu.setIsSherCopy(false);
                    currentProjectMenu.setIsSherProject(false);
                    currentProjectMenu.setLike(0);
                    break;
                case 'Not found':
                    displayMesage(" Project not found",false,3);
                    menuFlag = true;
                    break;
            }
        }
    });

}



function SherFrined(email,project_id,isCopy){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    var data = {
        'email':email,
        'project_id':project_id,
        'isCopy':isCopy,
    }
    $.ajax({
        type: "POST",
        url: "/sherfrined",
        data: data,
        dataType: "json",
        success: function (response) {
            switch (response) {
                case 'All ready saved':
                    displayMesage("Project all ready sened",false,10);
                    menuFlag = true;
                    break;
                case 'Done':
                    displayMesage("Project succefully sened",true,10);
                    menuFlag = true;
                    break;
                case 'Project not found':
                    displayMesage("Project not found",false,10);
                    menuFlag = true;
                    break;
                case 'Error':
                    displayMesage("User not found" ,false,10);
                    menuFlag = true;
                    break;
            }

            // if(response = 'not exist'){
            //     displayMesage("User not found",false,3);
            //     menuFlag = true;
            // } else if (response){
            //     displayMesage("Succefully sened",true,3);
            //     menuFlag = true;
            // }else {
            //     displayMesage("Server error",false,3);
            //     menuFlag = true;
            // }
            // console.log(response)
        }
    });
}

function DeleteSherFriend(id){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: "DELETE",
        url: "/delete-sherfrined/" + id,
        dataType: "json",
        success: function (response) {
            if (response.status === 404) {
                console.log(response.message)
            } else {
                console.log(response.message)
                fetchstudent();
            }
            fetchstudent();

        }

    });
    fetchstudent();

}

function deleteProject(id,value){


    $.ajax({
        type: "GET",
        url: "/delete-project/" + id+"/"+value,
        dataType: "json",
        success: function (response) {
            if (response == 'done') {
                currentProjectMenu.removeProject();
                menuFlag = true;
                displayMesage('Project Deleted',true,3);
            } else if(response == 'wrong'){
                menuFlag = true;
                displayMesage('Peoject was\'t deleted, Server error',false,3)
            } else if (response == 'notExist'){
                currentProjectMenu.removeProject();
                menuFlag = true;
                displayMesage('Project is\'t exist',false,3);
            }

        }

    });

}


function RenameProject(id,rename){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: "PUT",
        url: "/update-project-rename/" + id+"/"+rename,
        dataType: "json",
        success: function (response) {
            if (response != false){
            currentProjectMenu.setName(response);
            displayMesage('Project Renamed',true,3);
                menuFlag = true;
            } else{
                displayMesage('Project Not Found',false,3);
                menuFlag = true;
            }
        }
    });
}

function EditDecProject(id,dec){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: "PUT",
        url: "/update-project-dec/" + id+"/"+dec,
        dataType: "json",
        success: function (response) {
            if (response != '"Not exist"'){
                currentProjectMenu.setDes(response);
                menuFlag = true;
            } else {
                displayMesage('Project not found',false,3);
                menuFlag = true;
            }
        }

    });
}

function getDecProject(id){
       console.log(id)
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    var data = {
        'id':id,
    }

    $.ajax({
        type: "POST",
        url: "/get-dec",
        data: data,
        dataType: "json",
        success: function (response) {
            if (response != "Not exist") {
                console.log(response)
                pop_textArea.value = response;
                popupDescription.style.display = "block";
                poupParent.style.display = "block";
            } else{
                menuFlag = true;
                displayMesage("Project not found",false,3);

            }
        }
    });
}

function getFriends(){

    $.ajax({
        type: "GET",
        url: "/get-friends",
        dataType: "json",
        success: function (response) {

            response.forEach(e =>{
                let f = new Friend(e.info.name,e.icon,e.info.email)
                friendList.appendChild(f.getContainer());
            })

            // friendList
        }
    });
}



function getCountFollower(id_user){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    var data = {
        'id_user':id_user,
    }

    $.ajax({
        type: "POST",
        url: "/get-follower",
        data: data,
        dataType: "json",
        success: function (response) {
            console.log(response)
        }
    });
}






//////////////////////////////////likes////////////////////////
function addLike(user_id,project_id){

    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: "GET",
        url: "/like/"+user_id+"/"+project_id,
        dataType: "json",
        success: function (response) {
        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });

}
function addLike(user_id,project_id){

    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: "GET",
        url: "/like/"+user_id+"/"+project_id,
        dataType: "json",
        success: function (response) {
        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });

}


function DeleteLike(id){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: "DELETE",
        url: "/delete-like/" + id,
        dataType: "json",
        success: function (response) {
            if (response.status === 404) {
                console.log(response.message)
            } else {
                console.log(response.message)
            }
        }
    });
}


function getNotification(){
    $.ajax({
        type: "GET",
        url: "/get-notification",
        dataType: "json",
        success: function (response) {
            console.log(response)
        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}

function SearchUsers(email){
    $.ajax({
        type: "GET",
        url: "/search-user/"+email,
        dataType: "json",
        success: function (response) {
            console.log(response)
        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}

function getReceiveProjectToListProject(id){
    $.ajax({
        type: "GET",
        url: "/rev_get/"+id,
        dataType: "json",
        success: function (response) {

            menuFlag = true;
            Nproject = new Project(response.id,
                response.user_id,
                response.name,
                response.type,
                response.dec,
                response.right_to,
                response.created_at,
                response.updated_at,
                response.Isfavorite,
                response.isSherCopy,
                response.IsSher_project,
                response.isProjectCopy,
                false,
                response.icon);

            projectlist.push(Nproject);
            gridItemSection.appendChild(Nproject.getGridItem());

            console.log(response)
        }, error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
}





//
// let projectList = [];
//     function displayProject(project){
//
//     };
//
//     class project{
//         id;
//         userId;
//         name;
//         type;
//         rightTo;
//         createAt;
//         upDateAt;
//         isFavorit;
//         sharType;
//         isShar;
//         grid_item;
//
//     }

    //==================================================================================================================
let gridItemSection = document.getElementsByClassName('grid-item-section')[0];
   console.log(gridItemSection)
let projectlist = [];


   function removeAllPop(){
       popupShare.style.display = "none";
       popupRename.style.display = "none";
       renameFiled.value = "";
       popupRemove.style.display = "none";
       popupDescription.style.display = "none";
       pop_textArea.value = "";
       commuintyCheck.checked = false;
       charEmail.value = "";
       friendOk.disabled = true;
       friendCheck.checked = false;
       btn_community.click();
       friendOk.disabled = true;
       popRenameOk.disabled = true;
       clearChildren(friendList)
   }

function clearChildren(value){
    let list = value.children
    let listL = list.length;
    for (let index = 0; index < listL; index++) {
        value.removeChild(list[0])
    }
}

function displayProject(projectList){
        console.log("dun")
    let Nproject;
    for (let i = 0; i < projectList.projects.length; i++) {
        let projects = projectList.projects[i];
        Nproject = new Project(projects.id,
            projects.user_id,
            projects.name,
            projects.type,
            projects.dec,
            projects.right_to,
            projects.created_at,
            projects.updated_at,
            projects.Isfavorite,
            projects.isSherCopy,
            projects.IsSher_project,
            projects.isProjectCopy,
            false,
            projects.icon,
            projects.likes);

        projectlist.push(Nproject);
        gridItemSection.appendChild(Nproject.getGridItem());
    }

    for (let i = 0; i < projectList.receives.length; i++) {
        let receives = projectList.receives[i];
        Nproject = new Project(receives.id,
            receives.user_id,
            receives.name,
            receives.type,
            receives.dec,
            receives.right_to,
            receives.created_at,
            receives.updated_at,
            receives.Isfavorite,
            receives.isSherCopy,
            receives.IsSher_project,
            receives.isCopy,
            true,
            receives.icon,
            receives.likes);
        projectlist.push(Nproject);
        gridItemSection.appendChild(Nproject.getGridItem());
    }
}




let menuItem = document.createElement('div');
menuItem.classList.add('menu-item');
settingProject.appendChild(menuItem);

let currntI;

let Share = document.createElement('button');
console.log(Share)
currntI = document.createElement("i");
currntI.classList.add("fa-solid");
currntI.classList.add("fa-users");
Share.appendChild(currntI);
currntI = document.createTextNode("Shar");
Share.appendChild(currntI);
Share.addEventListener('click', function(event){
    removeAllPop();
    menuFlag = false;
    poupParent.style.display = "block";
    popupShare.style.display = "block";
    getFriends();

});
menuItem.appendChild(Share);




let Unshare = document.createElement('button');
currntI = document.createElement("i");
currntI.classList.add("fa-solid");
currntI.classList.add("fa-users-slash");
Unshare.appendChild(currntI);
currntI = document.createTextNode("Unshare");
Unshare.appendChild(currntI);
Unshare.addEventListener('click', function(event){
    menuFlag = false;
    DeleteSherProject(currentProjectMenu.getId());
});
menuItem.appendChild(Unshare);


let Rename = document.createElement('button');
currntI = document.createElement("i");
currntI.classList.add("fa-solid");
currntI.classList.add("fa-pen");
Rename.appendChild(currntI);
currntI = document.createTextNode("Rename");
Rename.appendChild(currntI);
Rename.addEventListener('click', function(event){
    removeAllPop();
    menuFlag = false;
    poupParent.style.display = "block";
    popupRename.style.display = "block";
});
menuItem.appendChild(Rename);


let Description = document.createElement('button');
currntI = document.createElement("i");
currntI.classList.add("fa-solid");
currntI.classList.add("fa-comment");
Description.appendChild(currntI);
currntI = document.createTextNode("Description");
Description.appendChild(currntI);
Description.addEventListener('click', function(event){
    removeAllPop();
    menuFlag = false;
    // console.log(currentProjectMenu.getId());
    getDecProject(currentProjectMenu.getId());

});
menuItem.appendChild(Description);

let RemoveProject = document.createElement('button');
currntI = document.createElement("i");
currntI.classList.add("fa-solid");
currntI.classList.add("fa-trash");
RemoveProject.appendChild(currntI);
currntI = document.createTextNode("Remove");
RemoveProject.appendChild(currntI);
RemoveProject.addEventListener('click', function(event){
    removeAllPop();
    menuFlag = false;
    popupRemove.style.display = "block";
    poupParent.style.display = "block";
});
menuItem.appendChild(RemoveProject);


let CopyProject = document.createElement('button');
currntI = document.createElement("i");
currntI.classList.add("fa-solid");
currntI.classList.add("fa-trash");
CopyProject.appendChild(currntI);
currntI = document.createTextNode("Copy");
CopyProject.appendChild(currntI);
CopyProject.addEventListener('click', function(event){
    menuFlag = false;
    getReceiveProjectToListProject(currentProjectMenu.getId())

});
menuItem.appendChild(CopyProject);





class Project {

    id;
    userId;
    name;
    type;
    des;
    rightTo;
    createAt;
    upDateAt;
    isFavorit;
    isSherProject;
    isSherCopy;
    isProjectCopy
    isReceved;
    userIcon;
    like;

    gridItem;
    main;
    projectTop;
    projectType;
    projectName;
    projectLastUpDate;
    isProjectFavorit;
    isProjectShared;
    projectOwner;
    projectOwnerImage;
    desViewer;
    likViewer;
    likeContainer;
    copuBtn
    des1;


    constructor(id, userId, name, type, des, rightTo, createAt, upDateAt, isFavorit, isSherCopy, isSherProject, isProjectCopy, isReceved, userIcon,like) {
        this.prepairProject();
        this.setId(id);
        this.setUserId(userId);
        this.setName(name);
        this.setType(type);
        this.setDes(des);
        this.setRightTo(rightTo);
        this.setCreateAt(createAt);
        this.setUpDateAt(upDateAt);
        this.setIsFavorit(isFavorit);
        this.setIsSherProject(isSherProject);
        this.setIsSherCopy(isSherCopy);
        this.setIsProjectCopy(isProjectCopy)
        this.setIsReceved(isReceved);
        console.log(userIcon)
        this.setUserIcon(userIcon);
        this.setLike(like);
    }


    prepairProject() {
        this.gridItem = document.createElement('div');
        this.gridItem.classList.add('grid-item');
        this.gridItem.addEventListener('contextmenu', this.openSettingMenu)

        let holder = document.createElement('div');
        holder.classList.add('horlder-item');
        this.gridItem.appendChild(holder);


        this.main = document.createElement('div');
        this.main.id = 'main';
        this.main.addEventListener('mouseover', this.displayInfo)
        this.main.addEventListener('mouseout', this.hideInfo)
        holder.appendChild(this.main);


//
// <div className="fakeDiv"></div>
//
// <div className="aaaa">
//
//     <h5>Description</h5>
// </div>
//

            this.main.insertAdjacentHTML('beforeend', '<div className="fakeDiv"></div>')

        this.des1 = document.createElement('div');
        this.des1.classList.add('aaaa');
        // this.des1.insertAdjacentHTML('beforeend','<p className="textOverflow" id="desViewer" style="display: block;"></p>')

        this.desViewer = document.createElement('h5');
        this.desViewer.id = 'desViewer';

        this.des1.appendChild(this.desViewer);

        this.main.appendChild(this.des1);


        // <div className="likeContainer" id="likeContainer" style="display: block;">
        //     <div className="bbbb">
        //         <i id="likeIcon" className="fa-solid fa-heart"></i>
        //         <div id="likeViewer" style="display: block;">
        //             0
        //         </div>
        //     </div>
        // </div>


        this.likeContainer = document.createElement('div')
        this.likeContainer.id = 'likeContainer';
        this.likeContainer.classList.add('likeContainer');

        let likename = document.createElement('div')
        likename.classList.add('bbbb');
        likename.insertAdjacentHTML('beforeend', '<i id="likeIcon" className="fa-solid fa-heart"></i>');

        //
        // let likeIcon = document.createElement('i');
        // likeIcon.id = 'likeIcon';
        // likeIcon.classList.add('fa-solid');
        // likeIcon.classList.add('fa-heart');
        // this.likeContainer.appendChild(likeIcon);

        this.likViewer = document.createElement('div');
        this.likViewer.id = 'likeViewer';
        likename.appendChild(this.likViewer)

        this.likeContainer.appendChild(likename)



        this.projectTop = document.createElement('div');
        this.projectTop.id = 'projectTop';
        this.main.appendChild(this.projectTop);


        // let openProject = document.createElement('a');
        // openProject.id = "openProjectA";
        // openProject.href = `page/${this.getId()}`;
        // projectTop.appendChild(openProject);

        this.projectType = document.createElement('img');
        this.projectType.id = 'projectType';
        this.projectType.addEventListener('click', this.openProject)
        this.projectTop.appendChild(this.projectType);

        this.projectName = document.createElement('p');
        this.projectName.id = 'projectName'
        this.main.appendChild(this.projectName);

        this.projectLastUpDate = document.createElement('p');
        this.projectLastUpDate.id = 'projectLastUpDate';
        // var d = new Date();
        this.main.appendChild(this.projectLastUpDate);

        this.isProjectFavorit = document.createElement('img');
        this.isProjectFavorit.id = 'isProjectFavre';
        this.isProjectFavorit.addEventListener('click', this.favProject)
        this.main.appendChild(this.isProjectFavorit);


        this.isProjectShared = document.createElement('div');
        this.isProjectShared.id = 'isProjectShared';

        this.projectOwner = document.createElement('div');
        this.projectOwner.id = 'projectOwner';

        this.projectOwnerImage = document.createElement('img');
        this.projectOwnerImage.addEventListener('click', this.openInfoFreind)
        this.projectOwner.appendChild(this.projectOwnerImage);


        // this.copuBtn = document.createElement('button');
        // this.copuBtn.id = 'copyBtn';
        // this.copuBtn.classList.add('FS-optionButt',);
        // // this.copuBtn.insertAdjacentHTML('beforeend','kk');
        // this.copuBtn.insertAdjacentHTML('beforeend','<span class="tooltiptext">Copy project</span>');
        // this.copuBtn.insertAdjacentHTML('beforeend','<i class="fa-solid fa-copy"></i>');

    }


//des
// <div className="aaaa viewDs-Lk">
// <p className="textOverflow" id="desViewer" style="display: block;">
// rjymtmmtu
// </p>
// <h5>Description</h5>
// </div>

//like
// <div className="likeContainer" id="likeContainer" style="display: block;">
// <div className="bbbb">
// <i id="likeIcon" className="fa-solid fa-heart"></i>
// <div id="likeViewer" style="display: block;">
// 0
// </div>
// </div>
//
// </div>
    hideProject(){
        this.getGridItem().style.display = "none";
    };

    removeProject(){
        this.getGridItem().remove()
        let index = projectlist.indexOf(this);

        projectlist.splice(index,1);
    }

    openSettingMenu = (e) => {
        e.preventDefault();
        console.log(menuFlag)
        if (menuFlag){
            if (currentProjectMenu != null){
                currentProjectMenu.getGridItem().style.zIndex = 1;
            }

            Share.remove();
            Unshare.remove();
            Rename.remove();
            Description.remove();
            RemoveProject.remove();
            CopyProject.remove();

            if (this.getIsReceved()){
                if (this.getIsProjectCopy()){
                    menuItem.appendChild(CopyProject)
                }
                menuItem.appendChild(RemoveProject)
            }else{
                menuItem.appendChild(Rename)
                menuItem.appendChild(Description)
                menuItem.appendChild(RemoveProject)
                if (this.getIsSherProject()) {
                    menuItem.appendChild(Unshare)
                } else {
                    menuItem.appendChild(Share)
                }
            }

            this.getGridItem().style.zIndex = 10;
            currentProjectMenu = this;
            console.log(currentProjectMenu.getId())
            let rect = this.getMain().getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            settingProject.style.left = `${x}px`;
            settingProject.style.top = `${y}px`;
            this.getMain().appendChild(settingProject);
        }

    }

    displayInfo = (e) =>{
        this.main.style.zIndex = 5;
        this.des1.style.display = "block";
        this.likeContainer.style.display = "block";

    }

    hideInfo = (e) =>{
        this.main.style.zIndex = 1;
        this.des1.style.display = "none";
        this.likeContainer.style.display = "none";
    }

    setdesViewer(value){
        this.desViewer.innerText = this.getDes();
    }


    openProject = (e) => {
        // console.log(this.getIsReceved())
        if(this.getIsReceved()){
            var hash = btoa(this.getId());
            window.location = `page-receive-id/${hash}`;
        } else {

        // // Set your secret salt string
        //     var salt = 12345678;
        //
        // // Concatenate the salt to the input ID
        //     var id_with_salt = salt + this.getId();

        // Encode the input ID with the salt
            var hash = btoa(this.getId());
            window.location = `page-project-id/${hash}`;
        }
    }


    openInfoFreind = (e) => {
        window.location = `profile-friend/${this.getRightTo()}`;
    }

    favProject = (e) => {
        if (favFlage) {
            favFlage = false;
            currentProjectFav = this;
            favorite(this.getId(), (!this.getIsFavorit()));
            this.setIsFavorit((!this.getIsFavorit()));
        }


    }

    setId(value) {

        this.id = value;
    }

    setUserId(value) {

        this.userId = value;
    }

    setName(value) {

        this.name = value;
        this.getProjectName().innerText = this.getName();
    }

    setType(value) {

        this.type = value;
        switch (value) {
            case 'A4':
                this.getProjectType().src = "./project/images/A4B.png";
                break;
            case 'SL':
                this.getProjectType().src = "./project/images/SLB.png";
                break;
            case 'WB':
                this.getProjectType().src = "./project/images/WBB.png";
                break
        }
    }

    setDes(value) {
        if (value == "none"){
            this.getDesViewer().remove();
        }else {
            this.des = value;
            this.des1.appendChild(this.getDesViewer());
            this.setdesViewer(value);
        }
    }

    setRightTo(value) {

        this.rightTo = value;
    }

    setCreateAt(value) {

        this.createAt = value;
    }

    setUpDateAt(value) {
        this.upDateAt = value;
        this.getProjectLastUpDate().innerText = this.getUpDateAt();
    }

    setIsFavorit(value) {
        this.isFavorit = value;
        console.log(value)
        if (value) {
            this.getIsProjectFavorit().src = './project/images/star-solid.svg';
        } else {
            this.getIsProjectFavorit().src = './project/images/star-regular.svg';
        }
    }

    setIsSherCopy(value) {
        this.isSherCopy = value;
        if (value) {
            this.getIsProjectShared().innerText = "Copy";
        } else {
            this.getIsProjectShared().innerText = "";
        }

    }

    setIsSherProject(value) {
        this.isSherProject = value;
        console.log(value)
        if (value) {
            this.getProjectTop().appendChild(this.getIsProjectShared());
        } else {
            this.getIsProjectShared().remove();
        }
    }

    setIsReceved(value) {
        this.isReceved = value;
        if (value){
            if (this.getIsProjectCopy()){
                // this.getMain().appendChild(this.getCopuBtn())
            }else{
                // this.getCopuBtn().remove();
            }
        }
    }


    setUserIcon(value) {
        this.userIcon = value;
        if (value != null) {
            this.getProjectOwnerImage().src = value;
            this.getMain().appendChild(this.getProjectOwner());
        }

    }

    setIsProjectCopy(value) {
        this.isProjectCopy = value;
    }

    setLike(value){
        console.log(value)
        if (this.getIsSherProject()){
            this.like = value;
            this.getMain().appendChild(this.getLikeContainer());
            this.getLikViewer().style.display = "block";
            this.getLikViewer().innerText = value;
        }else {
            this.getLikeContainer().remove();
        }

    }


    getGridItem() {
        return this.gridItem
    }

    getMain() {
        return this.main;
    }

    getProjectTop() {
        return this.projectTop;
    }

    getId() {
        return this.id;
    }

    getUserId() {
        return this.userId;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

    getRightTo() {
        return this.rightTo;
    }

    getCreateAt() {
        return this.createAt;
    }

    getUpDateAt() {
        return this.upDateAt;
    }

    getIsFavorit() {
        return this.isFavorit;
    }

    getIsSherCopy() {
        return this.isSherCopy;
    }

    getIsSherProject() {
        return this.isSherProject;
    }

    getIsReceved() {
        return this.isReceved;
    }

    getUserIcon() {
        return this.userIcon;
    }

    getDes() {
        return this.des;
    }

    getIsProjectCopy() {
        return this.isProjectCopy;
    }

    getProjectName() {
        return this.projectName;
    }

    getProjectLastUpDate() {
        return this.projectLastUpDate
    }

    getProjectType() {
        return this.projectType;
    }

    getIsProjectFavorit() {
        return this.isProjectFavorit;
    }

    getIsProjectShared() {
        return this.isProjectShared;
    }

    getProjectOwner() {
        return this.projectOwner
    };

    getProjectOwnerImage() {
        return this.projectOwnerImage
    };

    getDesViewer(){return this.desViewer}

    getLike(){return this.like}
    getLikViewer(){return this.likViewer}
    getLikeContainer(){return this.likeContainer;}
    getCopuBtn(){return this.copuBtn;}
}



class Friend {
    name;
    icon;
    email;

    container;
    image;
    nameView;
    emailView;

    constructor(name, icon, email) {
        this.prepairConaier();
        this.setName(name);
        this.setIcon(icon);
        this.setEmail(email);
    }

    prepairConaier() {
        this.container = document.createElement('li');
        this.container.addEventListener('click', this.displyEmail);

        this.image = document.createElement('img')
        this.container.appendChild(this.image);

        let textContainer = document.createElement('div');
        textContainer.classList.add('profile_info');

        this.nameView = document.createElement('h3')
        textContainer.appendChild(this.nameView);

        this.emailView = document.createElement('p');
        textContainer.appendChild(this.emailView);

        this.container.appendChild(textContainer);
    }

    setName(value) {
        this.name = value;
        this.getNameView().innerText = value;
    }

    setIcon(value) {
        this.icon = value;
        this.getImage().src = value;
    }

    setEmail(value) {
        this.email = value;
        this.getEmailView().innerText = value;
    }

    displyEmail = (e) =>{
        charEmail.value = this.getEmail();
        isSharEmailEmpty();
    }

    getName() {
        return this.name;
    }

    getIcon() {
        return this.icon;
    }

    getEmail() {
        return this.email;
    }

    getImage(){return this.image}
    getNameView(){return this.nameView}
    getEmailView(){return this.emailView}
    getContainer(){return this.container;}

}

//===========================Filtring and Sort ===========//

let recentDraftFlag = false;
// let recentDraftFlagBtn = true;
let recent = document.getElementById('recent');
let draft = document.getElementById('draft');
let favFilter = document.getElementById('favFilter');
let favFilterFlag = false;
let faveretFlag = true;
let typeFilter = document.getElementById('typeFilter');

function displayAllProject(){
    projectlist.forEach(e => {
        e.getGridItem().style.display = "block";
    })
}

function hideAllProject(){
    projectlist.forEach(e => {
        e.getGridItem().style.display = "none";
    })
}

function resetFilters(){
    typeFilter.children[0].selected = true;
    recent.click();
    filterProject(recentDraftFlag,typeFilter.value,false);
    favFilterFlag = true;
    favFilter.src = './project/images/star-regular.svg'

}

typeFilter.addEventListener('change',function (){
    filterProject(recentDraftFlag,typeFilter.value,favFilterFlag);
});



draft.addEventListener('click',function (){
    recentDraftFlag = true;
    filterProject(recentDraftFlag,typeFilter.value,favFilterFlag);

    recent.classList.remove('active');
    draft.classList.add('active');
})

recent.addEventListener('click',function (){
    recentDraftFlag = false;
    filterProject(recentDraftFlag,typeFilter.value,favFilterFlag);
    recent.classList.add('active');
    draft.classList.remove('active');
})


favFilter.addEventListener('click',function (){
    console.log('ffdgury')
    if (faveretFlag){
        favFilterFlag = true;
        filterProject(recentDraftFlag,typeFilter.value,true);
        faveretFlag = false

        favFilter.src = './project/images/star-solid.svg';
    } else{
        favFilterFlag = false;
        filterProject(recentDraftFlag,typeFilter.value,false);
        faveretFlag = true
        favFilter.src = './project/images/star-regular.svg'
    }

})

function filterProject(isDraft,projectType,isFav){

    let draftFilter = [];
    let typeFilter = [];
    let favertFilter = [];
    console.log(`//////////////////////////////////////////`);
    projectlist.forEach(e => {
        console.log(`draftF//${e.getId()}`);
        if (isDraft){
            if (!(e.getIsReceved() || e.getIsProjectCopy())){
                draftFilter.push(e);
            }
        }else {
            draftFilter.push(e);
        }
    });
    console.log(`////////////////////////////////////////////`);
    draftFilter.forEach(e => {
        console.log(`typeF//${e.getId()}`);
        if (projectType == 'ALL'){
            typeFilter.push(e);
        }else {
            if (e.getType() == projectType){
                typeFilter.push(e);
            }
        }
    });
    console.log(`/////////////////////////////////////////////////////////////////`);
    typeFilter.forEach(e => {
        console.log(`faF//${e.getId()}`);
        console.log(isFav);
        if(isFav){
            if (e.getIsFavorit()){
                favertFilter.push(e);
            }
        }else {
            favertFilter.push(e)
        }
    });
    console.log(`///////////////////////////////////////////////////////////////////////`);
    hideAllProject();
    favertFilter.forEach(e => {
        console.log(`finel//${e.getId()}`);
        e.getGridItem().style.display = "block";
    })
};


//===================sort=====================
function removeAllProject(){
    projectlist.forEach(e => {
        e.getGridItem().remove();
    })
}

function addAllProject(){
    projectlist.forEach(e =>{
        gridItemSection.appendChild(e.getGridItem());
    })
}
let projectSortBtn = document.getElementById('sortProject');
projectSortBtn.addEventListener('change', function (){

    projectlist[0].getGridItem().remove()
    removeAllProject();
    switch (projectSortBtn.value) {
        case 'alph':
            projectlist.sort(function (a, b){
                if (a.getName() > b.getName()){
                    return -1;
                }
                if (b.getName() > a.getName()){
                    return 1;
                }
                return 0;
            })
            break;
        case 'lDate':
            projectlist.sort(function (a, b) {
                return new Date(b.getUpDateAt()) - new Date(a.getUpDateAt());
            })
            break;
        case 'cDate':
            projectlist.sort(function (a, b) {
                return new Date(b.getCreateAt()) - new Date(a.getCreateAt());
            })
            break;
    }
    addAllProject();
})

function base256Encode(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        // Convert the 8-bit binary value to decimal
        var dec = str.charCodeAt(i);

        // Convert the decimal value to ASCII character
        var char = String.fromCharCode(dec);

        // Append the ASCII character to the result string
        result += char;
    }
    return result;
}
// open-menu
//
// profileMenu
//





