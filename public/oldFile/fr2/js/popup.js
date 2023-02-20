let btn_community = document.getElementById("btn-community");
let btn_friend = document.getElementById("btn-friend");
let pop_commnuity = document.getElementById("pop-commnuity");
let pop_friend = document.getElementById("pop-friend");


let popTextArea = document.getElementById('pop-textArea');
let charCounter = document.getElementById("charounter");
console.log(popTextArea);
console.log(charCounter);



popTextArea.addEventListener('keydown',function(event){
    console.log(event.key)
    if(event.key == "Enter"){
        event.preventDefault();
    }
    let textLength = 255 - popTextArea.value.length;
    if (textLength >= 0 ){
        charCounter.innerText =  textLength;
    }
    if (textLength >= 21 ) {
        charCounter.style.borderColor = "#3079ed";
    }else if (textLength <= 20 && textLength >= 1) {
        charCounter.style.borderColor = "#ffdd00";
    }else if (textLength == 0 ) {
        charCounter.style.borderColor = "#ff0000";
    }


});
















let body = document.getElementById("body");

btn_community.addEventListener("click", function community(e) {
  pop_friend.style.display = "none";
  pop_commnuity.style.display = "flex";
  btn_community.style.borderBottom = "2px solid";
  btn_friend.style.borderBottom = "0";
});
btn_friend.addEventListener("click", (e) => {
  pop_commnuity.style.display = "none";
  pop_friend.style.display = "block";
  btn_community.style.borderBottom = "0";
  btn_friend.style.borderBottom = "2px solid";
});




