// Selecciona el formulario para añadir transacciones
const form = document.querySelector(".add");
// Selecciona las listas de ingresos y gastos
const incomeList = document.querySelector("ul.income-list");
const expenseList = document.querySelector("ul.expense-list");

// Selecciona los elementos que muestran el balance, ingresos y gastos totales
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

// Obtiene las transacciones almacenadas en localStorage o inicia un arreglo vacío
let transactions =
  localStorage.getItem("transactions") !== null
    ? JSON.parse(localStorage.getItem("transactions"))
    : [];

// Actualiza las estadísticas de ingresos, gastos y balance
function updateStatistics() {
  const updatedIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => (total += transaction.amount), 0);

  const updatedExpense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => (total += Math.abs(transaction.amount)), 0);

  updatedBalance = updatedIncome - updatedExpense;
  balance.textContent = updatedBalance;
  income.textContent = updatedIncome;
  expense.textContent = updatedExpense;
}

// Genera el HTML para una transacción
function generateTemplate(id, source, amount, time) {
  return `<li data-id="${id}">
                <p>
                    <span>${source}</span> <!-- Muestra la fuente de ingreso o gasto -->
                    <span id="time">${time}</span> <!-- Muestra la fecha y hora -->
                </p>
                $<span>${Math.abs(amount)}</span> <!-- Muestra el monto -->
                <i class="bi bi-trash delete"></i> <!-- Icono para eliminar la transacción -->
            </li>`;
}

// Agrega una transacción al DOM en la lista de ingresos o gastos según su monto
function addTransactionDOM(id, source, amount, time) {
  if (amount > 0) {
    incomeList.innerHTML += generateTemplate(id, source, amount, time);
  } else {
    expenseList.innerHTML += generateTemplate(id, source, amount, time);
  }
}

// Agrega una nueva transacción y la guarda en localStorage
function addTransaction(source, amount) {
  const time = new Date();
  console.log(time);

  const transaction = {
    id: Math.floor(Math.random() * 100000), // Genera un ID aleatorio
    source: source,
    amount: amount,
    time: `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`, // Fecha y hora formateadas
  };
  transactions.push(transaction); // Añade la transacción al arreglo
  localStorage.setItem("transactions", JSON.stringify(transactions)); // Actualiza localStorage
  addTransactionDOM(transaction.id, source, amount, transaction.time);
}

// Evento que añade una nueva transacción cuando se envía el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.source.value.trim() === "" || form.amount.value === "") {
    return alert("¡Por favor, agrega valores válidos!"); // Alerta traducida
  }
  addTransaction(form.source.value.trim(), Number(form.amount.value));
  updateStatistics();
  form.reset(); // Resetea el formulario después de enviarlo
});

// Obtiene y muestra todas las transacciones almacenadas en el DOM
function getTransaction() {
  transactions.forEach((transaction) => {
    if (transaction.amount > 0) {
      incomeList.innerHTML += generateTemplate(
        transaction.id,
        transaction.source,
        transaction.amount,
        transaction.time
      );
    } else {
      expenseList.innerHTML += generateTemplate(
        transaction.id,
        transaction.source,
        transaction.amount,
        transaction.time
      );
    }
  });
}

// Elimina una transacción de localStorage
function deleteTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Evento para eliminar una transacción específica en la lista de ingresos
incomeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    deleteTransaction(Number(event.target.parentElement.dataset.id));
    updateStatistics();
  }
});

// Evento para eliminar una transacción específica en la lista de gastos
expenseList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    deleteTransaction(Number(event.target.parentElement.dataset.id));
    updateStatistics();
  }
});

// Inicializa la aplicación mostrando las estadísticas y las transacciones
function init() {
  updateStatistics();
  getTransaction();
}

init(); // Llama a la función de inicialización
