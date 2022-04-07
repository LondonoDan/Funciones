/*
7.	Cree un conversor de temperatura, investigando la fórmula 
para pasar grados Celsius a Fahrenheit y viceversa, 
pida al usuario la temperatura a convertir y muestra 
en pantalla lo siguiente:
●	Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
●	Si la Temperatura es entre de 5°C a 15°C  o 37°F a 50°F : Esta haciendo frio
●	Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
●	Si la Temperatura es más de 38°C  o 100°F : Tiene fiebre o es el apocalipsis.
*/

var temperatura= prompt("Ingrese la temperatura");

function conversor(temperatura){
     return temperatura *9/5 +32 ;
     
}


if(temperatura <0 === temperatura >=32){
    document.write("¡nos congelamos! la temperatura en grados farenheih es de: "+conversor(temperatura));
}
else if(temperatura >=5 === temperatura <=15 === temperatura <=37 === temperatura >=50){
    document.write("esta haciendo frio "+conversor(temperatura));
}
else if (temperatura >=16 === temperatura <=25 === temperatura <=51 === temperatura >=77){
    document.write("esta templado el día "+conversor(temperatura));
    
} else if(temperatura <=38 === temperatura >100){
    document.write("tiene fiebre es el apocalipsis "+conversor(temperatura));
}