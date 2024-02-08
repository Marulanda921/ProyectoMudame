
import { ObjConductor } from "./servicio-imagen.js";
import { objCarguero } from "./servicio-imagen.js";


const URL = "http://localhost:3002/users"


//selectores

//Pintar
const contentRegister = document.getElementById("content-register")


//Usuario
const nameUser = document.getElementById("userName");
const lastUser = document.getElementById("userLastName")
const emailUser = document.getElementById("gmail");
const numberUser = document.getElementById("numberTel");
const userPassword = document.getElementById("userPassword");

//Colaborador
const nameColaborator = document.getElementById("userNameColaborador");
const lastColaborator = document.getElementById("userLastNameColaborador");
const gmailColaborator = document.getElementById("gmailColaborador");
const numberColaborator = document.getElementById("numberTelColaborador");
const colaboratorPassword = document.getElementById("colaboratorPassword");

//Conductor
const dniColaborador = document.getElementById("dniColaborador")
const documentoColaborador = document.getElementById("documentoColaborador");
const matriculaColaborador = document.getElementById("matriculaColaborador");
const fotoCamionColaborador = document.getElementById("fotoCamionColaborador");
const siteTruck = document.querySelector("#siteCar");
const antecedentesColaborador = document.getElementById("antecedentesColaborador");
const licensiaColaborador = document.getElementById("licensiaColaborador");
const checkboxConductor = document.getElementById("conductor")

//Carguero
const dniColaborador2 = document.getElementById("dniColaborador2");
const documentoColaborador2 = document.getElementById("documentoColaborador2");
const antecedentesColaborador2 = document.getElementById("antecedentesColaborador2")
const checkboxCarguero = document.getElementById("cargador")



const userButton = document.querySelector("#registerButtonUser");
const userForm = document.querySelector("#UserSubmit");

const colaboratorButton = document.getElementById("colaboratorButton")
const colaboratorForm = document.getElementById("ColaboratorSubmit")

//eventos

//user
userButton.addEventListener("click", () => {
    document.querySelector("#UserSubmit").click();

})

userForm.addEventListener("click", (event) => {
    event.preventDefault();
    userEmailV(emailUser.value)
    userPasswordV(userPassword.value)
    addUser()
})


//Colaborador
colaboratorButton.addEventListener("click", () => {
    document.querySelector("#ColaboratorSubmit").click();
})

colaboratorForm.addEventListener("click", (event) => {
    event.preventDefault();

    if (checkboxCarguero.checked) {
        userEmailV(emailUser.value)
        userPasswordV(userPassword.value)
        addCarguero()
    } else if (checkboxConductor.checked) {
        userEmailV(emailUser.value)
        userPasswordV(userPassword.value)
        addConductor()
    } else { alert("Eligue una opcion de colaborador") }

})




//funciones

async function addConductor() {
    const newUser = {
        "name": nameColaborator.value,
        "lastName": lastColaborator.value,
        "email": gmailColaborator.value,
        "numberTel": numberColaborator.value,
        "password": colaboratorPassword.value,
        "dni": dniColaborador.value,
        ObjConductor,
        "site": siteTruck.value,
        "type": "Conductor"
    }




    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
}


async function addCarguero() {
    const newUser = {
        "name": nameColaborator.value,
        "lastName": lastColaborator.value,
        "email": gmailColaborator.value,
        "numberTel": numberColaborator.value,
        "password": colaboratorPassword.value,
        "dni": dniColaborador2.value,
        objCarguero,
        "type": "Carguero"
    }




    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
}

async function addUser() {
    const newUser = {
        "name": nameUser.value,
        "lastName": lastUser.value,
        "email": emailUser.value,
        "numberTel": numberUser.value,
        "password": userPassword.value,
        "type": "Usuario"
    }

    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
}



//regex



function userEmailV(email) {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexCorreo.test(email)) {
        console.log('Emailvalido')
        return { validate: true }
    }
}


function userPasswordV(password) {
    const regexPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,16}$/;
    if (regexPassword.test(password)) {
        return console.log("Password Valite");
    }
    return alert("La contraseña debe tener almenos 1 mayusculo 1 carcater especial y un rango de 8 ah 16")
}


