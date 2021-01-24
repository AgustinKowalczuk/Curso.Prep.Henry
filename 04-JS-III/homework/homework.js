// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return(array[0])
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  //n=array.length
  //return(array[n-1])
  return(array[(array.length)-1])
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return(array.length)
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for ( var i = 0; i < array.length; i++){
    if(array[i] % 1 === 0){
      array[i]++
    }
  }
  return array
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ')
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i< array.length; i++){
    if (array[i]=== elemento){
      return true
    }
  }
  return false
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0
  for ( var i = 0;i < numeros.length; i++ ){
    if(numeros[i] % 1 == 0){
      suma+=numeros[i]
    }
  }
  return suma
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  //--------------------------------------------------------------
  //var x= agregarNumeros(resultadosTest);
  //var z= resultadosTest.length;
  //return (x/z) 
  //--------------------------------------------------------------
  return agregarNumeros(resultadosTest)/ resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max=0
  for(var i = 0 ; i < numeros.length ; i++ ){
    if ((numeros[i] % 1 ==0) && (numeros[i]>max)){
      max=numeros[i]
    }
  }
  return max
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0 
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:

  // si el argumento es menor a uno es negativo(imposible) o es cero
  if(arguments.length < 1){
    //no se pasaron argumentos asi que retorno 0
    return 0;
  }
  //Si no se cumple lo de arriba seguira ya que no retornamos nada, por ende al menos 1 argumento paso.
  var arg=1;
  //iterar los argumentos
  for(var i = 0; i< arguments.length; i++){
    //Multiplico los arg
    arg= arg * arguments[i];
  }
  //retorno los argumentos
  return arg;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
