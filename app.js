// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function limpiarCaja() {
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre === '') {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombre);
        limpiarCaja();
        asignarEnLista();
    }
    
}

function asignarEnLista() {
    let elementoHTML = document.getElementById('listaAmigos');
    elementoHTML.innerHTML = '';
    for (let  i = 0; i < amigos.length; i++) {
        const asignarNombre = document.createElement('li');
        asignarNombre.textContent = amigos[i]
        elementoHTML.appendChild(asignarNombre);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML = 'No hay amigos disponibles para sortear';
        return;
    } 
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo sorteado fue: ${amigoSorteado}`;
    limpiarCaja();
    
}
    

