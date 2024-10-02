//METODOS DE DATE

//VER LA FECHA Y HORA ACTUAL
const fecha = new Date();
console.log(fecha);

//VER LA FECHA EN UN FORMATO CORTO DD/MM/YYYY
console.log(fecha.toLocaleDateString());

//SE LE PUEDE ASIGAR UNA FECHA A NUESTRO OBJETO DATE
const fecha2 = new Date(1991, 10, 23);
console.log(fecha2);

//VER EL DIA
const dia = fecha2.getDate();
console.log(`DIA: ${dia}`);

//VER EL MES
//LA MES SE LE SUMA 1+ YA QUE EMPIEZA DESDE 0 LOS MESES
//ENERO = 0
const mes = fecha2.getMonth();
console.log(`MES: ${mes + 1}`);

//VER EL AÑO
const ano = fecha2.getFullYear();
console.log(`AÑO: ${ano}`);
