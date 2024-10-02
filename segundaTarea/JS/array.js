//METODOS DE ARRAY

const numeros = [1, 2, 3, 4];
console.log(numeros);

//AGREGAR AL ARRAY
numeros.push(5, 6);
console.log(numeros);

//ELIMINA EL ULTIMO ELEMENTO DE LA LISTA
numeros.pop();
console.log(numeros);

//CREAR UNA COPIA DEL ARRAY SIN MODIFICARLO
/**
 * ESTE METODO POR LO REGURLAR SE USA CON UN ARROW FUNCTION EL CUAL RECIBE COMO
 * PARAMETRO EL VALOR ACTUAL EN EL QUE ESTA POSICIONADO
 */
const numerosCopia = numeros.map((numero) => {
  const arrayCopia = numero;
  return arrayCopia;
});
numerosCopia.push(6, 7, 8, 9, 10);
console.log(numerosCopia);

//HACER UN FILTRADO EN EL ARRAY
/**
 * ASI COMO EL METODO DE map() EL METODO filter() CREA UN NUEVO ARRAY CON LA CONDICION QUE SE
 * LE HAYA PUESTO
 */
let numerosPares = numerosCopia.filter((numero) => {
  let par;

  if (numero % 2 === 0) {
    par = numero;
  }
  return par;
});

console.log(numerosPares);
