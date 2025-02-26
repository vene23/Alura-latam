// 1. Crear un array para almacenar los nombres de los amigos
document.addEventListener('DOMContentLoaded', function() {
  let amigos = [];

  // 2. Función para agregar amigos
  function agregarAmigo() {
      const inputNombre = document.querySelector('#amigo');
      if (!inputNombre) {
          console.error('El elemento con id "amigo" no existe en el DOM.');
          return;
      }
      const nombre = inputNombre.value.trim();

      if (nombre === '') {
          alert('Por favor, inserte un nombre.');
          return;
      }

      amigos.push(nombre);
      inputNombre.value = '';
      actualizarLista();
  }

  // 3. Función para actualizar la lista de amigos en el HTML
  function actualizarLista() {
      const listaNombres = document.querySelector('#listaAmigos');
      if (!listaNombres) {
          console.error('El elemento con id "listaAmigos" no existe en el DOM.');
          return;
      }
      listaNombres.innerHTML = '';

      amigos.forEach((amigo) => {
          const li = document.createElement('li');
          li.textContent = amigo;
          listaNombres.appendChild(li);
      });
  }

  // 4. Función para sortear un amigo
  function sortearAmigo() {
      if (amigos.length === 0) {
          alert('La lista está vacía. Agregue al menos un nombre.');
          return;
      }

      const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      const nombreSorteado = amigos[indiceAleatorio];

      const resultado = document.querySelector('#resultado');
      if (resultado) {
          resultado.textContent = `El amigo secreto es: ${nombreSorteado}`;
      } else {
          console.error('El elemento con id "resultado" no existe en el DOM.');
      }
  }

  // 5. Asignar eventos a los botones (fuera de las funciones)
  const addButton = document.querySelector('.button-add');
  if (addButton) {
      addButton.addEventListener('click', agregarAmigo);
  } else {
      console.error('El botón con clase "button-add" no existe en el DOM.');
  }

  const drawButton = document.querySelector('.button-draw');
  if (drawButton) {
      drawButton.addEventListener('click', sortearAmigo);
  } else {
      console.error('El botón con clase "button-draw" no existe en el DOM.');
  }
}); // ← Cierra correctamente el event listener aquí
