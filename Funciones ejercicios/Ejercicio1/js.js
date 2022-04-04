/*
1.	Crea y llama una función que recibe el ancho 
y el alto de un rectángulo y calcula su superficie.
*/

var ancho= prompt("Digite el ancho del triangulo");
var alto = prompt("Digite el alto del triangulo");
function triangulo(){
    
    return ancho * alto/2;
   
}
alert(triangulo(ancho,alto));