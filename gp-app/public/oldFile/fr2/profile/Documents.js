let details_content = document.getElementsByClassName("details-content")[0];
    
new Sortable(details_content, {
  animation: 521
});

details_content.addEventListener("dragstart", function(event){details_content.style.cursor="grabbing"})
details_content.addEventListener("dragend", function(event){details_content.style.cursor="grab"})
 let settMenu =document.getElementById("settMenu")
 function toggleMenuSett(e){
    event.preventDefault();
    settMenu.classList.toggle("open-menu")
 }