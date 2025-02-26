// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Crear un array para almacenar los nombres de los amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const inputNombre = document.querySelector('#amigo');
  const nombre = inputNombre.value.trim();

  // Validar la entrada
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  inputNombre.value = '';

  // Actualizar la lista visual en el HTML
  actualizarLista();
}

// 3. Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
  // Obtener el elemento de la lista
  const listaNombres = document.querySelector('#listaAmigos');

  // Limpiar la lista existente
  listaNombres.innerHTML = '';

  // Iterar sobre el arreglo y agregar elementos a la lista
  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaNombres.appendChild(li);
  });
}

// 4. Función para sortear un amigo
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert('La lista está vacía. Agregue al menos un nombre.');
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const nombreSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  const resultado = document.querySelector('#resultado');
  resultado.textContent = `El amigo secreto es: ${nombreSorteado}`;
}

// 5. Asignar eventos a los botones
document.querySelector('.button-add').addEventListener('click', agregarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
