/*
10.	 Cree una función que pida el precio de un producto y 
la cantidad y por medio de otra función
 aumente el iva y diga al usuario el precio total .
*/

var productoprecio = prompt("Ingrese el precio del producto");
var cantidad = prompt("Ingrese la cantidad de productos ");
var iva = 0.19;
var contador=productoprecio*cantidad;
var total1 = contador * iva;
function total(total1){
    
    
    return function(iva){
      document.write (parseInt (total1) + parseInt (iva));
    }
}
total(total1)(iva);

