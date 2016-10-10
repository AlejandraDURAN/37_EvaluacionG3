/* <h4>Ejercicio 1: <br>Haz el juego de piedra papel o tijera con 3 turnos</h4> Pseudocodigo : Inicio / Declarar variable elementoJuego / declarar i /   */



var elementoJuego = "Piedra";
var i;
for (i =0; i<=2; i++) {
var elementoJuego = prompt ("Ingresa tu elemento de juego") + i;
}switch (elementoJuego){
case ('Piedra'):
alert ('Empate');
break;
case('Tijeras'):
alert ('Pierdes');
break;
case ('Papel'):
alert ('Ganas');
break;
default: 
alert ('Juego terminado');
break;
}
