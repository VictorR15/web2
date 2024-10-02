//METODOS DE MATH

//MOSTRAR NUMEROS RANDOM
/**
 * ESTE METODO SOLO REGRESA UN NUMERO RANDOM DEL 0 AL 1
 */
console.log(Math.random());

/**
 * PERO SI SE DESEA HACER CON NUMEROS QUE NOSOTROS PROPORCIONEMOS
 * SE PUEDE HACER UNA FUNCION COMO LA QUE SE MUESTRA EN DONDE LE
 * PASAMOS COMO PARAMENTROS EL MINIMO Y EL MAXIMO
 */
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandom(1, 100));

//REDONDEAR HACIA ABAJO
/**
 * ESTE METODO RECIBE COMO PARAMETRO EL VALOR AL QUE SE SE LE DESEA REDONDEAR
 */
const numero = 5.9;
const numeroRedondeado = Math.floor(numero);
console.log(numeroRedondeado);

//ELEVAR UN NUMERO
/**
 * A ESTE METODO LE PASAMOS DOS ARGUMENTOS, EL PRIMERO ES EL VALOR DE LA BASE Y EL 
 * SEGUNDO VALOR ES LA POTENCIA QUE SE LE DA 
 * EN ESTE EJEMPLO SERIA: 2^5 o 2*2*2*2*2
 */
const potencia = Math.pow(2, 5);
console.log(potencia);


