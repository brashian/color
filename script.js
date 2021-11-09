


const rango = document.getElementById('rango');
rango.addEventListener('change',Hacerclick);

const topcolor = document.getElementById('colorarriba');
colorarriba.addEventListener('change',Hacerclick);

const downcolor = document.getElementById('colorabajo');
colorabajo.addEventListener('change',Hacerclick);

function Hacerclick(){
    console.log("rango toma valor");
    let color1 = document.getElementById('colorarriba').value;
    let color2 = document.getElementById('colorabajo').value;
    let range = document.getElementById('rango').value;
    

    fondo.style.background = ` linear-gradient(90deg,${color1} ${range +"%"},${color2 })`;
    
}