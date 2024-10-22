const onOffbutton = document.getElementById('btn');
console.log(onOffbutton)
const lampImg = document.getElementById('lampimg');
console.log(lampImg)

onOffbutton.addEventListener('click',function(){
    lampImg.classList.toggle('on');

    if (lampImg.classList.contains('on')) {
      onOffbutton.innerText = 'Spegni';
      onOffbutton.classList.remove('btn-warning')
      onOffbutton.classList.add('btn-danger')
      lampImg.src = "./img/yellow_lamp.png"

    } else {
      onOffbutton.innerText = 'Accendi';
      lampImg.src = "./img/white_lamp.png"
      onOffbutton.classList.remove('btn-danger')
      onOffbutton.classList.add('btn-warning')
    }

   
}
);
    
