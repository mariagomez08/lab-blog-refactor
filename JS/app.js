
const botonVerMas = document.getElementById("btn-ver-mas")

botonVerMas.addEventListener("click", function(){

    mostrarTexto()
})

function mostrarTexto() {
    const recetas = document.querySelectorAll(".info-receta")

    
    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }

}