

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
    charCounter.innerText =  textLength;
    if (textLength >= 21 ) {
        charCounter.style.borderColor = "#3079ed";
    }else if (textLength <= 20 && textLength >= 1) {
        charCounter.style.borderColor = "#ffdd00";
    }else if (textLength == 0 ) {
        charCounter.style.borderColor = "#ff0000";
    }


});
















let body = document.getElementById("body");






