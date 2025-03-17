// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*Leer el input y almacenar los nombres de los amigos,
realizar una lista y elegir un elemento de la lista, 
revisar las funcionalidades del button y finalmente
mostrar el nombre sorteado en la página*/

//Variable - Listas


const nombresAmigos = [];
const amigo = document.getElementById('amigo');
const mostrarAmigos = document.getElementById('listaAmigos');
const resultado=document.getElementById('resultado');

//Funciones
/*Leer un valor en la caja para agregarlo a la lista y mostrarlo en la página*/
function agregarAmigo(){
    if (!amigo.value){
        alert('Por favor, escribe un nombre.')
    }else{
        nombresAmigos.push(amigo.value);
        mostrarAmigos.innerHTML += `<li>${amigo.value}</li>`;
        limpiarCaja(); 

    }   
}
/*Sorteo del amigo = Tomar un valor aleatorio de la lista y mostarlo como texto*/
function sortearAmigo(){
    // Verificar si la lista de amigos está vacía
    if (nombresAmigos.length === 0) {
        alert('Por favor, agrega al menos un nombre.');
        return;
    }
    const numeroSorteo = Math.floor((Math.random() * nombresAmigos.length));
    const amigoSecreto = nombresAmigos[numeroSorteo];
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}

/*Limpiar la caja, la lista y el amigo secreto*/
function limpiarCaja(){
    document.querySelector('#amigo').value='';
}

function limpiarJuego(){
    //limpiar Caja
    limpiarCaja();
    //Limpiar lista de amigos
    nombresAmigos.length=0;
    //Limpiar amigos mostrados
    mostrarAmigos.innerHTML = '';
    //Limpiar amigo secreto
    resultado.innerHTML = '';
}
