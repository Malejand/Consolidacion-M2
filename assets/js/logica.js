var contenido = document.querySelector("#contenido");
var seleccion = document.querySelector("#seleccion");

fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(datos => {
        tabla(datos);
    })

function tabla(datos) {
    contenido.innerHTML = ""
    for (let temp of datos) {
        contenido.innerHTML += `
        <img src="${temp.img}" class="card-img-top">
        <div>
            <h5 class="card-title">${temp.name}</h5>
            <p class="card-text">${temp.level}</p>
        </div>
        `
        if (temp.name == "Agumon") {
            break
        }
    }
    seleccion.innerHTML = ""
    for (let temp of datos) {
        seleccion.innerHTML += `
        <li><a class="dropdown-item" href="">${temp.name}</a></li>
        `
    }
}

function cambiar() {
    document.getElementById("cuerpo").style.backgroundColor = "grey";
}
function regresar() {
    document.getElementById("cuerpo").style.backgroundColor = "white";
}

