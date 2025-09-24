let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo")
    const nombreAmigo = inputAmigo. ariaValueMax.trim();
 
    if (nombre == "") {
        alert("Porfa, ingrese un nombre");
        return;
    }
    if (amigos.includes(nombreAmigo)) {
        alert(`el nombre ${nombreAmigo} ya esta en la lista`);
        return;
    }
}


