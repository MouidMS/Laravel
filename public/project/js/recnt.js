let Buttonmenuplus_A4 = document.getElementById('Buttonmenuplus--A4');
let Buttonmenuplus_Slide = document.getElementById('Buttonmenuplus--Slide');
let Buttonmenuplus_Blanck = document.getElementById('Buttonmenuplus--Blanck');
let Buttonmenuplus_main = document.getElementById('Buttonmenuplus--main');



let Btnflage = true;
console.log("jj");

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

Buttonmenuplus_A4.addEventListener('click', function (event){window.location='/store/A4'});
Buttonmenuplus_Slide.addEventListener('click', function (event){window.location='/store/SL'});
Buttonmenuplus_Blanck.addEventListener('click', function (event){window.location='/store/WB'});



/*********************** popup ***************************/

let settingProject = document.createElement('div');
settingProject.classList.add('setting-project');


let poupParent = document.getElementById("poupParent");


let popupShare = document.getElementById("popupShare");



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
})
let popRemoveok = document.getElementById('popRemoveok');
popRemoveok.addEventListener('click', function (event){
    poupParent.style.display = "none";
    currentProjectMenu.hideProject();
    settingProject.remove();
    deleteProject(currentProjectMenu.getId());
});

let popupDescription = document.getElementById("popupDescription");



window.addEventListener('click', function (event){
    settingProject.remove();
})

//*******************************************************************8888888

let loader = document.getElementById('mainContainer');
let currentProjectFav;
let currentProjectMenu;
let favFlage = true;

window.addEventListener('loadstart', function (){

});

$(document).ready(function () {
    // pages();
    // console.log('jj')
    loader.style.display = 'block';
    fetchproject();
    // favorite(1,true);
    // SherProject(1,'true');
    // DeleteSherProject(1);
    // SherFrined('mooyd364@gmail.com',2,'true');
    // DeleteSherFriend(4);
    // deleteProject(1)
    // RenameProject(2,"new name");
    // getDecProject(7); //id_project
    // EditDecProject(2,'new dec');
    // addLike(1,2); // not complete
    // DeleteLike(4);
    getFriends(1)







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
              console.log(response)


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
            console.log(response)


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

function deleteProject(id){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: "DELETE",
        url: "/delete-project/" + id,
        dataType: "json",
        success: function (response) {
            if (response) {
                currentProjectMenu.removeProject();
            } else {

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
            currentProjectMenu.setName(response);

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
            if (response.status === 404) {
                console.log(response.message)
            } else {
                console.log(response.message)
            }

        }

    });
}

function getDecProject(id){
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
            console.log(response)
        }
    });
}

function getFriends(id_user){
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
        url: "/get-friends",
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
                fetchstudent();
            }
            fetchstudent();

        }

    });
    fetchstudent();

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
            projects.icon);

        projectlist.push(Nproject);
        gridItemSection.appendChild(Nproject.getGridItem());
    }

    for (let i = 0; i < projectList.receives.length; i++) {
        let receives = projectList.receives[i];

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
Share.addEventListener('click', function(event){});
menuItem.appendChild(Share);




let Unshare = document.createElement('button');
currntI = document.createElement("i");
currntI.classList.add("fa-solid");
currntI.classList.add("fa-users-slash");
Unshare.appendChild(currntI);
currntI = document.createTextNode("Unshare");
Unshare.appendChild(currntI);
Unshare.addEventListener('click', function(event){});
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
    poupParent.style.display = "block";
    popupRename.style.display = "block";
    console.log( popupRename.style.display )
});
menuItem.appendChild(Rename);


let Description = document.createElement('button');
currntI = document.createElement("i");
currntI.classList.add("fa-solid");
currntI.classList.add("fa-comment");
Description.appendChild(currntI);
currntI = document.createTextNode("Description");
Description.appendChild(currntI);
Description.addEventListener('click', function(event){});
menuItem.appendChild(Description);

let RemoveProject = document.createElement('button');
currntI = document.createElement("i");
currntI.classList.add("fa-solid");
currntI.classList.add("fa-trash");
RemoveProject.appendChild(currntI);
currntI = document.createTextNode("Romove");
RemoveProject.appendChild(currntI);
RemoveProject.addEventListener('click', function(event){
    removeAllPop();
    popupRemove.style.display = "block";
    poupParent.style.display = "block";
});
menuItem.appendChild(RemoveProject);



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


    constructor(id, userId, name, type, des, rightTo, createAt, upDateAt, isFavorit, isSherCopy, isSherProject, isProjectCopy, isReceved, userIcon) {
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
        this.setIsReceved(isReceved);
        this.setUserIcon(userIcon);
        this.setIsProjectCopy(isProjectCopy)

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
        this.gridItem.appendChild(this.main);


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
        this.projectOwner.appendChild(this.projectOwnerImage)

    }


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
        currentProjectMenu = this;
        Share.remove();
        Unshare.remove()
        if (this.getIsSherProject()) {
            menuItem.appendChild(Unshare)
        } else {
            menuItem.appendChild(Share)
        }
        let rect = this.getMain().getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        settingProject.style.left = `${x}px`;
        settingProject.style.top = `${y}px`;
        this.getMain().appendChild(settingProject);
    }


    openProject = (e) => {
        window.location = `page/${this.getId()}`;
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
                this.getProjectType().src = "./project/images/A4.png";
                break;
            case 'SL':
                this.getProjectType().src = "./project/images/Slide.png";
                break;
            case 'WB':
                this.getProjectType().src = "./project/images/blackboard.png";
                break
        }
    }

    setDes(value) {
        this.des = value;
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
    }

    setUserIcon(value) {
        this.userIcon = value;
        if (value != null) {
            this.getProjectOwnerImage().src = value;
        }

    }

    setIsProjectCopy(value) {
        this.isProjectCopy = value;
        if (value) {
            this.getMain().appendChild(this.getProjectOwner());
        } else {
            this.getProjectOwner().remove();
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

}






