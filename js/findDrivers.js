const URL = "http://localhost:3002/users"


//MODAL
//selectores
const modal = document.getElementById("contentmodal");
const modalbg = document.getElementById("showmodal");
const btnmodal = document.getElementById("btnModal");
const btnsubmit = document.getElementById("enviar");

//atributos
modal.classList.add("hidden");
modalbg.classList.add("hidden");

btnsubmit.addEventListener("click", () => {
    btnmodal.click();
})

btnmodal.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalbg.classList.remove("hidden");
})

/////////////////////////FINDDRIVERS
//selectores
const siteTruck = document.getElementById("siteCar");
const btnFindDrivers = document.getElementById("btnFindDrivers");
const cards = document.querySelector("#cards")

//eventos
btnFindDrivers.addEventListener("click", () => {
    findDriver();
    pintar();
})

let conductor =""

//funciones
//obtener conductor
async function findDriver() {
    const response = await fetch(`${URL}?site=${siteTruck.value}`)
    const date = await response.json()
    return date
}


async function pintar(conductor) {
    conductor = await findDriver()
    console.log(conductor);
    conductor.forEach(driver => {
        cards.innerHTML += `
        <div class="flex w-full d-flex flex-col items-center p-6">
            <div class="flex-1 truncate">
                <div class="flex items-center space-x-3">
                    <h3 class="text-xs font-big text-black">${driver.name}</h3>
                </div>
                <p class="mt-1 truncate text-xl text-black">${driver.type}</p>
                <p class="mt-1 truncate text-sm text-black">${driver.numberTel}</p>
            </div>
            <img class="h-50 w-50 flex-shrink-0 rounded-full bg-gray-300" src="${driver.ObjConductor.camion}" alt="">
        </div>`
        console.log(driver);
    });
}

