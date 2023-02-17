let profileMenu =document.getElementById("profileMenu")
let notificationMenu =document.getElementById("notificationMenu")
let searchBar =document.getElementById("searchBar")
let search = document.getElementById('iconSearch');


search.addEventListener("click" ,function(){
    console.log("kjkjbjhjhjhvggfgtry")
    searchBar.classList.toggle('avtive-searsh')
})

document.addEventListener("mouseup", function(){
    console.log("jjnlj")
   notificationMenu.classList.remove("open-menu")
   profileMenu.classList.remove("open-menu")

})

function toggleMenuPro(e){
   event.preventDefault();
   notificationMenu.classList.remove("open-menu")
   profileMenu.classList.toggle("open-menu")
}
function toggleMenuNot(e){
   event.preventDefault();
   profileMenu.classList.remove("open-menu")
   notificationMenu.classList.toggle("open-menu")
}

let btn_toggleMenu =document.getElementById("btn-toggleMenu")
let main_navMenu =document.getElementById("main-navMenu")

let menuFlagm = true;
btn_toggleMenu.addEventListener("click", function (e) {
    if (menuFlagm){
        main_navMenu.style.display="flex";
    }else {
        main_navMenu.style.display="none";
    };
    menuFlagm = !menuFlagm;
});




















