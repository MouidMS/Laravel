let Buttonmenuplus_A4 = document.getElementById('Buttonmenuplus--A4');
let Buttonmenuplus_Slide = document.getElementById('Buttonmenuplus--Slide');
let Buttonmenuplus_Blanck = document.getElementById('Buttonmenuplus--Blanck');
let Buttonmenuplus_collecter = document.getElementById('Buttonmenuplus--collecter');
let Buttonmenuplus_main = document.getElementById('Buttonmenuplus--main');


let flage = true;
console.log("jj");
 function gg(){
    // if (true) {
        console.log(Buttonmenuplus_A4);
        Buttonmenuplus_main.style.transform = "rotate(360deg)";
        Buttonmenuplus_A4.style.transitionDelay = "0s"
        Buttonmenuplus_Slide.style.transitionDelay = "0.2s"
        Buttonmenuplus_Blanck.style.transitionDelay = "0.4s"
        Buttonmenuplus_collecter.style.transitionDelay = "0.6s"
        // Buttonmenuplus_A4.style.right = `${25}px`;
        Buttonmenuplus_A4.style.bottom = `${131}px`;
        // Buttonmenuplus_Slide.style.right = `${65}px`
        Buttonmenuplus_Slide.style.bottom = `${187}px`
        // Buttonmenuplus_Blanck.style.right = `${100}px`
        Buttonmenuplus_Blanck.style.bottom = `${253}px`
        // Buttonmenuplus_collecter.style.right = `${110}px`
        Buttonmenuplus_collecter.style.bottom = `${319}px`
        flage = false;
        
        // } else {
        Buttonmenuplus_main.style.transform = "rotate(0deg)";
        Buttonmenuplus_A4.style.transitionDelay = "0.6s"
        Buttonmenuplus_Slide.style.transitionDelay = "0.4s"
        Buttonmenuplus_Blanck.style.transitionDelay = "0.2s"
        Buttonmenuplus_collecter.style.transitionDelay = "0s"
        // Buttonmenuplus_A4.style.right = `${40}px`;
        Buttonmenuplus_A4.style.bottom = `${25}px`;
        // Buttonmenuplus_Slide.style.right = `${25}px`
        Buttonmenuplus_Slide.style.bottom = `${25}px`
        // Buttonmenuplus_Blanck.style.right = `${25}px`
        Buttonmenuplus_Blanck.style.bottom = `${25}px`
        // Buttonmenuplus_collecter.style.right = `${25}px`
        Buttonmenuplus_collecter.style.bottom = `${25}px`
        flage = true;
        
        // }
    }

    // Buttonmenuplus_main.addEventListener('click', gg);