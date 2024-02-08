//Selectores

//Conductor
const btndocument = document.querySelector("#documentoColaborador");
const btnmatricula = document.querySelector("#matriculaColaborador");
const btnCamion = document.getElementById("fotoCamionColaborador");
const btnantecedente = document.getElementById("antecedentesColaborador");
const btnlicensia = document.getElementById("licensiaColaborador")


//conductor
let URLDocumento = ""
let URLMatricula = ""
let URLAntecedentes = ""
let URLlicensia = ""
let URLCamion =""
//carguero
let urlDocumento = ""
let urlAntecedentes = ""



const photoDocumen = document.getElementById("photoDocumen")

//Cargador
const btndocument2 = document.getElementById("documentoColaborador2");
const btnantecedente2 = document.getElementById("antecedentesColaborador2");

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'difzvmcow',
    uploadPreset: 'preset_pabs'
}, (error, result,llave) => {
    if (!error && result && result.event === "success") {
        ObjConductor.documento = result.info.url
    }
});


let widget_cloudinary2 = cloudinary.createUploadWidget({
    cloudName: 'difzvmcow',
    uploadPreset: 'preset_pabs'
}, (error, result,llave) => {
    if (!error && result && result.event === "success") {
        ObjConductor.matricula= result.info.url
    }
});

let widget_cloudinary3 = cloudinary.createUploadWidget({
    cloudName: 'difzvmcow',
    uploadPreset: 'preset_pabs'
}, (error, result,llave) => {
    if (!error && result && result.event === "success") {
        ObjConductor.antecedentes= result.info.url
    }
});

let widget_cloudinary4 = cloudinary.createUploadWidget({
    cloudName: 'difzvmcow',
    uploadPreset: 'preset_pabs'
}, (error, result,llave) => {
    if (!error && result && result.event === "success") {
        ObjConductor.licensia= result.info.url
    }
});

let widget_cloudinary5 = cloudinary.createUploadWidget({
    cloudName: 'difzvmcow',
    uploadPreset: 'preset_pabs'
}, (error, result,llave) => {
    if (!error && result && result.event === "success") {
        ObjConductor.camion= result.info.url
    }
});

//Cargadores
let widget_cloudinary6 = cloudinary.createUploadWidget({
    cloudName: 'difzvmcow',
    uploadPreset: 'preset_pabs'
}, (error, result,llave) => {
    if (!error && result && result.event === "success") {
        objCarguero.documento= result.info.url
    }
});

let widget_cloudinary7 = cloudinary.createUploadWidget({
    cloudName: 'difzvmcow',
    uploadPreset: 'preset_pabs'
}, (error, result,llave) => {
    if (!error && result && result.event === "success") {
        objCarguero.antecendetes= result.info.url
    }
});


export let ObjConductor = {
    "documento":URLDocumento,
    "matricula":URLMatricula,
    "camion":URLCamion,
    "antecedentes":URLAntecedentes,
    "licensia":URLlicensia
}

export let objCarguero = {
    "documento": urlDocumento,
    "antecendetes": urlAntecedentes
}
//funciones

//conductor
btndocument.addEventListener("click", async (event) => {
    event.preventDefault()
    widget_cloudinary.open();
}, false);

btnmatricula.addEventListener("click", (event) => {
    event.preventDefault()
    widget_cloudinary2.open();
}, false);

btnantecedente.addEventListener("click", (event) => {
    event.preventDefault()
    widget_cloudinary3.open();
}, false);

btnlicensia.addEventListener("click", (event) => {
    event.preventDefault()
    widget_cloudinary4.open();
}, false);

btnCamion.addEventListener("click", (event) => {
    event.preventDefault()
    widget_cloudinary5.open();
}, false);


//Cargador
btndocument2.addEventListener("click", () => {
    widget_cloudinary6.open();
}, false);

btnantecedente2.addEventListener("click", () => {
    widget_cloudinary7.open();
}, false);


