const yUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna. onclick= function(){
    //document.body.style.backgroundColor = "blue";
    //document.body.setAttribute('class','biru-muda');
    document.body.classList.toggle('biru-muda');
}


const tAcakWarna = document.createElement('button');
tAcakWarna.setAttribute('type','button');
tAcakWarna.style.display = 'none';
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click',function(){
    const r = Math.round(Math.random()* 255 + 1);
    const g = Math.round(Math.random()* 255 + 1);
    const b = Math.round(Math.random()* 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +',100,100)';
});
//fungsi pembulatan nilai desimal
//math.round()
//Math.floor()
//Math.ceil( )

const sMerah = document.querySelector('input[name=sMerah]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = shijau.value;
    const b = sbiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+  g +','+ b +')';
});


const shijau = document.querySelector('input[name=shijau]');

shijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = shijau.value;
    const b = sbiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+  g +','+ b +')';
});

const sbiru = document.querySelector('input[name=sbiru]');

sbiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = shijau.value;
    const b = sbiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+  g +','+ b +')';

});
 
document.body.addEventListener('mousemove',function(event){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
    
});