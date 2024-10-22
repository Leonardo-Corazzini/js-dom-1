const onOffbutton = document.getElementById('btn');
console.log(onOffbutton)
const lampImg = document.getElementById('lampimg');
console.log(lampImg)

onOffbutton.addEventListener('click',function(){
    lampImg.classList.toggle('on');

    if (lampImg.classList.contains('on')) {
      onOffbutton.innerText = 'Spengi';
      lampImg.src = "./img/yellow_lamp.png"
    } else {
      onOffbutton.innerText = 'Accendi';
      lampImg.src = "./img/white_lamp.png"
    }

   
}
);
    
