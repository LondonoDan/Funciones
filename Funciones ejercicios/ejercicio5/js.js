/*
5.	Crea una función donde pases como parámetro un nombre e imprimirlo en pantalla; 
Validar que el dato ingresado no sea un número, 
de ser así se debe decir en pantalla ingrese un nombre válido.
*/

var nomb = prompt("Ingrese el nombre");
function nombre (nombre){
   nombre ||(nombre ="user")
   if(typeof nombre === "string"){
      alert("Mi nombre es "+nombre)
   }else{
      alert("El dato ingresado no es correcto ");
   }

}
nombre(nomb);