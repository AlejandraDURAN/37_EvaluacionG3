/*Ejercicio 2:Declara un arreglo vacío denominado nombres. Pide al usuario tres nombres y almacena esos nombres como elementos arreglo.<br>
 A continuación muestra el contenido en un mensaje.</h4>
 Pseudocodigo : Inicio / Asignar DameTres / Realiza la operación (i =0 ; i<=2 ; i ++ ) / Pedir "Ingresa un nombre" / Imprime "Ya ingresaste tres nombres" / FIN */

 DameTres = {};
 	var i;
	for (i =0 ; i<=2; i++) {
	var DameTres = prompt ("Ingresa un nombre") + i;
 }
console.log("Ya ingresaste tres nombres");