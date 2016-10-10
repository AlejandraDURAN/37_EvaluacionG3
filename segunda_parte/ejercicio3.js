/* <h4>Ejercicio 3: Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir,
 si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".  */
function palindromo(oracion) { 
  var resultado = "La oracion \""+oracion+"\" \n";
  var oracionOriginal = oracion.toLowerCase();
  var letrasEspacios = oracionOriginal
  var oracionSinEspacios = "";
  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      oracionSinEspacios += letrasEspacios[i];
    }
  }
  var letras = oracionSinEspacios.split("");
  var letrasReves = oracionSinEspacios.split("").reverse();
  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
    }
    else {
      iguales = false;
    }
  }
  if(iguales) {
    resultado += " es un palíndromo";
  }
  else {
    resultado += " no lo es";
  }
  return resultado;
}
alert(palindromo("La ruta nos aporto otro paso natural"));
alert(palindromo("Esta oracion no es un palindromo"));


