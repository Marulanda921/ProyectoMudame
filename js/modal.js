//Selectores
const btnLogin = document.getElementById("Login");
const btnModal = document.getElementById("btnModal");
const contentModal = document.getElementById("contentModal");
//Atributos
contentModal.classList.add("hidden");



//Eventos
btnLogin.addEventListener("click",()=>{
    btnModal.click()
})


btnModal.addEventListener("click",()=>{
    contentModal.classList.remove("hidden");
})