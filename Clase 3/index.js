// Arreglo que contiene las respuestas correctas para cada pregunta
const correctAnswer = ["D", "B", "C", "B", "D"];

// Selecciona el formulario del cuestionario en el HTML
const form = document.querySelector(".quiz-form");

// Selecciona el elemento donde se mostrará el resultado
const result = document.querySelector(".result");

// Selecciona todos los elementos con la clase 'question' (cada una de las preguntas)
const questions = document.querySelectorAll(".question");
// const question = document.querySelector(".question");

//Seleccionamos el boton
const boton = document.querySelector(".submit");

//seleccionamos el nuevo parrafo
const parrafoMensaje = document.querySelector(".mensaje-resultado");

// Agrega un evento al formulario que se activa cuando el usuario lo envía
form.addEventListener("submit", (event) => {
  // Evita que la página se recargue al enviar el formulario
  event.preventDefault();

  // Inicializa la variable para el puntaje del usuario
  let score = 0;

  // Captura las respuestas seleccionadas por el usuario en un arreglo
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  // Itera sobre las respuestas del usuario y las compara con las correctas
  userAnswers.forEach((answer, index) => {
    // Si la respuesta del usuario es correcta, incrementa el puntaje y añade la clase 'correct'
    if (answer === correctAnswer[index]) {
      score += 1;
      questions[index].classList.add("correct", "highlight");
      // questions[index].classList.add("highlight");
    } else {
      // Si es incorrecta, añade la clase 'wrong' para indicar el error

      questions[index].classList.add("wrong", "wrong-highlight");
      // questions[index].classList.add("wrong-highlight");
    }
  });

  // Desplaza la página hasta la parte superior (en caso de que esté abajo)
  scrollTo(0, 0);

  // Muestra la sección de resultados (que estaba oculta)
  result.classList.remove("hide");

  // Actualiza el contenido del párrafo en la sección de resultados con la puntuación obtenida
  result.querySelector("p").textContent = `¡Obtuviste ${score}/5!`;

  //Ocultamos el formulario
  form.classList.add("hide");

  //Mostramos un mensaje dependiendo de la puntacion del usuario
  parrafoMensaje.classList.remove("hide");
  if (score <= 2) {
    parrafoMensaje.querySelector(
      "p"
    ).textContent = `Alch ponte a estudiar pa como que ${score}`;
  } else {
    parrafoMensaje.querySelector(
      "p"
    ).textContent = `El que sabe sabe  ${score}`;
  }
  // parrafoMensaje.querySelector("p").textContent = `Holi ${score}`;
});

form.addEventListener("submit", (e) => {
  boton.classList.remove("input");
  boton.classList.add("inputEnviado");
});

//Se le agrega la clase para cambiar el fondo de pantalla al momento de pasar el mouse
// questions.addEventListener("mousemove", (event) => {
//   event.preventDefault();
//   // questions.forEach((question) => {
//   //   question.classList.add("cambiaBG");
//   //   console.log(question);
//   // });
// });

// // console.log(question);
// console.log("-----------");
// console.log(questions);
