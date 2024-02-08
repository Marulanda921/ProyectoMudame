const URL = "http://localhost:3002/users";

//selectores
const userEmail = document.getElementById("userEmailLogin");
const userPassword = document.getElementById("userPasswordLogin");
const userType = document.getElementById("userTypeLogin")
const formLogIn = document.getElementById("formLogIn");


//eventos
formLogIn.addEventListener("submit",(event)=>{
    event.preventDefault();
    searchUser();
})

//funciones
async function searchUser() {
    const response = await fetch(`${URL}?email=${userEmail.value}&type=${userType.value}`)
    const date = await response.json()
    console.log(date);
    if (date.length==0) {
        alert("Email no registrado o tipo de usuario incorrecto")
        return
    }
    if(!date[0].type == userType.value){
        alert("Continua")
    }

    if(date[0].password == userPassword.value){
        //Autenticar
        localStorage.setItem("isAuthenticated","true");
        //window Es un objeto global que nos permite adcender a la informacion de la ventana
        window.location.href = "mapa.html"

    }else{
        console.log("Contraseña incorrecta");
    }

}