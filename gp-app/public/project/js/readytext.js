
$(document).ready(function () {

    // getReadyText();
    // addReadyText('testFromAjax');
    // updateReadyText('readytext_id','json');
    // deleteReadyText('readytext_id');





    function getReadyText(){
        $.ajax({
            type: "GET",
            url: "/readytext/",
            dataType: "json",
            success: function (response) {
                console.log(response)
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }


    function addReadyText(json){
        $.ajax({
            type: "GET",
            url: "/add-readytext/"+json,
            dataType: "json",
            success: function (response) {
                console.log(response)
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }


    function updateReadyText(json){
        $.ajax({
            type: "GET",
            url: "/update-readytext/"+json,
            dataType: "json",
            success: function (response) {
                console.log(response)
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }

    function deleteReadyText(){
        $.ajax({
            type: "GET",
            url: "/delete-readytext",
            dataType: "json",
            success: function (response) {
                console.log(response)
            }, error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }





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
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: "DELETE",
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
