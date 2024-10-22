const onOffbutton = document.getElementById('btn');
const lampImg = document.getElementById('lampimg');

let lampOn = false;

onOffbutton.addEventListener('click', function () {
    

    if (lampOn === false) {
        onOffbutton.innerText = 'Spegni';
        onOffbutton.classList.remove('btn-warning');
        onOffbutton.classList.add('btn-danger');
        lampImg.src = "./img/yellow_lamp.png";
        lampOn = true;

    } else if (lampOn === true) {
        onOffbutton.innerText = 'Accendi';
        lampImg.src = "./img/white_lamp.png";
        onOffbutton.classList.remove('btn-danger');
        onOffbutton.classList.add('btn-warning');
        lampOn = false;
    }


}
);

