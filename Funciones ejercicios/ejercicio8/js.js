/*
7.	Cree un conversor de temperatura, investigando l
a fórmula para pasar grados Celsius a Fahrenheit y viceversa,
 pida al usuario la temperatura a convertir y muestra en 
 pantalla lo siguiente:
●	Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
●	Si la Temperatura es entre de 5°C a 15°C  o 37°F a 50°F : Esta haciendo frio
●	Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
●	Si la Temperatura es más de 38°C  o 100°F : Tiene fiebre o es el apocalipsis.

*/

var peso = prompt("Ingrese su peso");
var estatura = prompt("Ingrese su estatura");
function calcular(peso,estatura){
   return peso / estatura **2;
   }
if (calcular < 18.5){
    document.write("bajo de peso debe ir al nutricionista, su indice de Masa muscular es de: "+calcular(peso,estatura));
   }
   else if (calcular >= 18.5 === calcular <= 24.9){
    document.write("normal, su indice de masa muscular es de: "+calcular(peso,estatura));
}
else if (calcular >=25.0 === calcular <=29.9){
    document.write("Tiene sobrepeso, su indice de Masa muscular es de: "+calcular(peso,estatura));
}
else{
    document.write("Obeso debe ir al nutricionista, su indice de Masa muscular es de: "+calcular(peso,estatura));
}
   
