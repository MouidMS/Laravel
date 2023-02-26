let profileMenu =document.getElementById("profileMenu")
let notificationMenu =document.getElementById("notificationMenu")
let searchBar =document.getElementById("searchBar")

searchBar.addEventListener("click" ,function(){
    searchBar.classList.toggle()
})

window.addEventListener("mousedown", function(){
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




















