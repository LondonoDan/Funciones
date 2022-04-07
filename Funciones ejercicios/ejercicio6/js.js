/*

6.	Muestra todas las operaciones básicas
(suma, resta, multi, división), pidiendo al usuario 2 números.  
*/

var num1= prompt("Ingrese un número");
var num2= prompt("Ingrese el siguiente número");
function operacion_suma(){
     document.write (  parseInt(num1) + parseInt (num2));
     document.write (  num1 * num2);
     document.write ( num1 - num2);
     document.write ( num1 / num2);
}
operacion_suma();