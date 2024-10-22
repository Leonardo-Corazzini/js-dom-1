const onOffbutton = document.getElementById('btn');
console.log(onOffbutton)
const lampImg = document.getElementById('lampimg');
console.log(lampImg)

onOffbutton.addEventListener('click',function(){
    lampImg.src = "./img/yellow_lamp.png"
})