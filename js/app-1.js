//selectores
const conductor = document.querySelector("#conductor");
const datosConductor = document.querySelector("#datosConductor");
const cargueros = document.querySelector("#cargador");
const carguero = document.querySelector("#datosCarguero");





conductor.addEventListener("change",()=>{
    if (conductor.checked) {
        datosConductor.style.display = "flex";
    }
    else{
        datosConductor.style.display = "none"
    }
})


cargueros.addEventListener("change",()=> {
    if (cargueros.checked) {
        carguero.style.display = "flex";
    }
    else{
        carguero.style.display = "none";
    }
})


