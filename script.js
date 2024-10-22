const onOffbutton = document.getElementById('btn');
const lampImg = document.getElementById('lampimg');
// Lo stato della mia lampadina
let lampOn = false;
const lampImgON = "./img/yellow_lamp.png";
const lampImgOFF = "./img/white_lamp.png";
const btnTextON = 'Accendi';
const btnTextOFF = 'Spegni';

lampOn ? lampImg.src = lampImgON : lampImg.src = lampImgOFF
lampOn ? onOffbutton.innerText = btnTextOFF : onOffbutton.innerText = btnTextON


onOffbutton.addEventListener('click', function () {
    
    
    if (lampOn === false) {
        lampOn = true;
        onOffbutton.innerText = btnTextOFF;
        onOffbutton.classList.remove('btn-dark');
        lampImg.classList.add('mirror');
        onOffbutton.classList.add('btn-light');
        lampImg.src = lampImgON;
        

    } else if (lampOn === true) {
        lampOn = false;
        onOffbutton.innerText = btnTextON;
        lampImg.src = lampImgOFF;
        onOffbutton.classList.remove('btn-light');
        onOffbutton.classList.add('btn-dark');
        lampImg.classList.remove('mirror');
        
    }


}
);

