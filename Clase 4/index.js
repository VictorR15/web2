// Selecciona el formulario para añadir nuevas tareas
const addForm = document.querySelector(".add");
// Selecciona la lista de tareas
const tasks = document.querySelector(".tasks");
// Selecciona el botón para eliminar todas las tareas
const clearAll = document.querySelector(".clear");
// Selecciona el span donde se mostrará el mensaje
const messageSpan = document.querySelector(".message span");
// Selecciona el formulario de búsqueda
const searchForm = document.querySelector(".search");

// Función para actualizar el mensaje dinámico de tareas pendientes
function updateMessage() {
  const textLength = tasks.children.length;
  messageSpan.textContent = `Tienes ${textLength} tareas pendientes.`; // Mensaje traducido
}
updateMessage();

// Evento para añadir una nueva tarea
addForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página
  const value = addForm.task.value.trim(); // Obtiene el valor del campo de texto

  if (value.length) {
    // Si el valor no está vacío
    tasks.innerHTML += `<li>
                                <span>${value}</span> <!-- Agrega la tarea a la lista -->
                                <i class="bi bi-trash-fill delete"></i> <!-- Icono para eliminar la tarea -->
                            </li>`;
    addForm.reset(); // Resetea el formulario
    updateMessage(); // Actualiza el mensaje
  }
});

// Evento para eliminar una tarea específica
tasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    // Si se hace clic en el icono de eliminar
    event.target.parentElement.remove(); // Elimina la tarea
    updateMessage(); // Actualiza el mensaje
  }
});

// Evento para eliminar todas las tareas
clearAll.addEventListener("click", (event) => {
  const taskItems = tasks.querySelectorAll("li");
  taskItems.forEach((item) => {
    item.remove(); // Elimina cada tarea
  });
  updateMessage(); // Actualiza el mensaje
});

// Función para filtrar tareas por el término de búsqueda
function filterTask(term) {
  Array.from(tasks.children)
    .filter((task) => {
      return !task.textContent.toLowerCase().includes(term); // Filtra las tareas que no coinciden
    })
    .forEach((task) => {
      task.classList.add("hide"); // Oculta las tareas que no coinciden
    });

  Array.from(tasks.children)
    .filter((task) => {
      return task.textContent.toLowerCase().includes(term); // Filtra las tareas que coinciden
    })
    .forEach((task) => {
      task.classList.remove("hide"); // Muestra las tareas que coinciden
    });
}

// Evento para filtrar tareas mientras se escribe en el campo de búsqueda
searchForm.addEventListener("keyup", (event) => {
  const term = searchForm.task.value.trim().toLowerCase(); // Obtiene el término de búsqueda
  filterTask(term); // Filtra las tareas
});

// Evento para resetear el campo de búsqueda al hacer clic en el icono de resetear
searchForm.addEventListener("click", (event) => {
  if (event.target.classList.contains("reset")) {
    // Si se hace clic en el icono de resetear
    searchForm.reset(); // Resetea el formulario de búsqueda
    const term = searchForm.task.value.trim();
    filterTask(term); // Filtra nuevamente las tareas
  }
});
